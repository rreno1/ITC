(function setupQuizUtilities() {
  function randomIndex(max) {
    if (max <= 1) return 0;
    if (window.crypto?.getRandomValues) {
      const limit = Math.floor(0x100000000 / max) * max;
      const value = new Uint32Array(1);
      do window.crypto.getRandomValues(value); while (value[0] >= limit);
      return value[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  function shuffled(values) {
    const result = values.slice();
    for (let index = result.length - 1; index > 0; index--) {
      const swapIndex = randomIndex(index + 1);
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function createsSimplePattern(sequence, candidate) {
    const length = sequence.length;
    if (length >= 2 && sequence[length - 1] === candidate && sequence[length - 2] === candidate) return true;
    if (length >= 3 && sequence[length - 2] === candidate && sequence[length - 3] === sequence[length - 1]) return true;

    if (length >= 2) {
      const firstStep = (sequence[length - 1] - sequence[length - 2] + 4) % 4;
      const nextStep = (candidate - sequence[length - 1] + 4) % 4;
      if ((firstStep === 1 || firstStep === 3) && firstStep === nextStep) return true;
    }
    return false;
  }

  function sequenceHasSimplePattern(sequence, choiceCount) {
    for (let index = 2; index < sequence.length; index++) {
      if (sequence[index] === sequence[index - 1] && sequence[index] === sequence[index - 2]) return true;
      const firstStep = (sequence[index - 1] - sequence[index - 2] + choiceCount) % choiceCount;
      const nextStep = (sequence[index] - sequence[index - 1] + choiceCount) % choiceCount;
      if ((firstStep === 1 || firstStep === choiceCount - 1) && firstStep === nextStep) return true;
    }
    for (let index = 3; index < sequence.length; index++) {
      if (sequence[index] === sequence[index - 2] && sequence[index - 1] === sequence[index - 3]) return true;
    }
    return false;
  }

  function buildBalancedAnswerPositions(length, choiceCount) {
    const remaining = Array.from({ length: choiceCount }, (_, index) => ({
      index,
      count: Math.floor(length / choiceCount) + (index < length % choiceCount ? 1 : 0)
    }));
    const positions = [];

    while (positions.length < length) {
      let candidates = shuffled(remaining.filter(item => item.count > 0));
      const patternSafe = candidates.filter(item => !createsSimplePattern(positions, item.index));
      if (patternSafe.length) candidates = patternSafe;

      const highestCount = Math.max(...candidates.map(item => item.count));
      const balanced = candidates.filter(item => item.count >= highestCount - 1);
      const selected = balanced[randomIndex(balanced.length)];
      positions.push(selected.index);
      selected.count--;
    }

    return positions;
  }

  function balancedAnswerPositions(length, choiceCount = 4) {
    let positions = [];
    for (let attempt = 0; attempt < 100; attempt++) {
      positions = buildBalancedAnswerPositions(length, choiceCount);
      if (!sequenceHasSimplePattern(positions, choiceCount)) return positions;
    }
    return positions;
  }

  function randomizeQuizInPlace(questions) {
    if (!Array.isArray(questions) || questions.length === 0) return questions;

    const randomizedQuestions = shuffled(questions).map(question => ({
      ...question,
      options: question.options.slice()
    }));
    const standardChoiceCount = randomizedQuestions[0].options.length;
    const answerPositions = balancedAnswerPositions(randomizedQuestions.length, standardChoiceCount);

    randomizedQuestions.forEach((question, questionIndex) => {
      const correctChoice = question.options[question.answer];
      const distractors = shuffled(question.options.filter((_, optionIndex) => optionIndex !== question.answer));
      const targetIndex = answerPositions[questionIndex] % question.options.length;
      distractors.splice(targetIndex, 0, correctChoice);
      question.options = distractors;
      question.answer = targetIndex;
    });

    questions.splice(0, questions.length, ...randomizedQuestions);
    return questions;
  }

  function renderQuizChoices(container, question, onSelect, interactive = true) {
    if (!container || !question) return [];
    container.innerHTML = '';
    container.setAttribute('role', 'radiogroup');
    container.setAttribute('aria-labelledby', 'questionText');

    const buttons = question.options.map((option, index) => {
      const button = document.createElement('button');
      const letter = document.createElement('span');
      const text = document.createElement('span');

      button.type = 'button';
      button.className = 'option-btn';
      button.setAttribute('role', 'radio');
      button.setAttribute('aria-checked', 'false');
      button.tabIndex = index === 0 ? 0 : -1;
      letter.className = 'option-letter';
      letter.setAttribute('aria-hidden', 'true');
      letter.textContent = String.fromCharCode(65 + index);
      text.className = 'option-text';
      text.textContent = option;
      button.append(letter, text);

      if (interactive) button.addEventListener('click', () => onSelect(index));
      container.appendChild(button);
      return button;
    });

    if (container.quizKeyboardHandler) {
      container.removeEventListener('keydown', container.quizKeyboardHandler);
    }
    container.quizKeyboardHandler = event => {
      if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      const enabled = buttons.filter(button => !button.disabled);
      if (!enabled.length) return;
      event.preventDefault();
      const currentIndex = Math.max(0, enabled.indexOf(document.activeElement));
      let nextIndex = currentIndex;
      if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = enabled.length - 1;
      else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % enabled.length;
      else nextIndex = (currentIndex - 1 + enabled.length) % enabled.length;
      enabled.forEach((button, index) => { button.tabIndex = index === nextIndex ? 0 : -1; });
      enabled[nextIndex].focus();
    };
    container.addEventListener('keydown', container.quizKeyboardHandler);

    return buttons;
  }

  function markQuizChoice(buttons, selectedIndex) {
    buttons.forEach((button, index) => {
      button.setAttribute('aria-checked', String(index === selectedIndex));
      button.tabIndex = index === selectedIndex ? 0 : -1;
    });
  }

  window.randomizeQuizInPlace = randomizeQuizInPlace;
  window.renderQuizChoices = renderQuizChoices;
  window.markQuizChoice = markQuizChoice;
})();
