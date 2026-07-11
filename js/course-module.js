(function setupSyllabusModule() {
  const data = window.CC101_MODULE_DATA;
  const app = document.getElementById('moduleApp');
  if (!data || !app) return;

  let currentSlide = 1;
  let quizQuestions = [];
  let quizCurrentQuestion = 0;
  let quizAnswers = [];
  let quizScore = 0;
  let isReviewMode = false;
  let quizFinished = false;
  const quizSlideNumber = data.lessons.length + 3;
  const totalSlides = data.lessons.length + 4;

  const escapeHTML = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  function renderList(items, className = '') {
    return `<ul class="${className}">${items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
  }

  function renderVisual(type) {
    const visuals = {
      audio: `
        <div class="concept-visual visual-audio" role="img" aria-label="Audio waveform made from measured samples">
          <div class="waveform">${[28, 52, 74, 44, 88, 62, 34, 70, 92, 48, 66, 30].map(height => `<span style="height:${height}%"></span>`).join('')}</div>
          <div class="visual-label-row"><span>Time</span><span>Samples</span><span>Amplitude</span></div>
        </div>`,
      pixels: `
        <div class="concept-visual visual-pixels" role="img" aria-label="Pixel grid showing red, green, and blue color values">
          <div class="pixel-grid">${Array.from({ length: 36 }, (_, index) => `<span class="pixel pixel-${index % 6}"></span>`).join('')}</div>
          <div class="visual-label-row"><span>Pixels</span><span>RGB values</span><span>Image</span></div>
        </div>`,
      video: `
        <div class="concept-visual visual-flow" role="img" aria-label="Video frames compressed into a media file">
          <span>Frame 1</span><b aria-hidden="true">&rarr;</b><span>Changes</span><b aria-hidden="true">&rarr;</b><span>Codec</span><b aria-hidden="true">&rarr;</b><span>MP4</span>
        </div>`,
      privacy: `
        <div class="concept-visual visual-flow" role="img" aria-label="Personal data moving through devices and services">
          <span>You</span><b aria-hidden="true">&rarr;</b><span>Device</span><b aria-hidden="true">&rarr;</b><span>Service</span><b aria-hidden="true">&rarr;</b><span>Data copy</span>
        </div>`,
      authentication: `
        <div class="concept-visual visual-security" role="img" aria-label="Three layers of account authentication">
          <span><strong>1</strong>Password</span><span><strong>2</strong>Device code</span><span><strong>3</strong>Verified access</span>
        </div>`,
      encryption: `
        <div class="concept-visual visual-flow" role="img" aria-label="Readable data encrypted, sent, and decrypted">
          <span>Plain text</span><b aria-hidden="true">&rarr;</b><span>Encryption</span><b aria-hidden="true">&rarr;</b><span>Ciphertext</span><b aria-hidden="true">&rarr;</b><span>Decryption</span>
        </div>`,
      web: `
        <div class="concept-visual visual-flow" role="img" aria-label="Browser request and server response">
          <span>Browser</span><b aria-hidden="true">&rarr;</b><span>HTTP request</span><b aria-hidden="true">&rarr;</b><span>Server</span><b aria-hidden="true">&larr;</b><span>Response</span>
        </div>`,
      html: `
        <div class="concept-visual visual-code" role="img" aria-label="HTML document structure">
          <code>&lt;h1&gt;Class News&lt;/h1&gt;</code><code>&lt;p&gt;Welcome to our page.&lt;/p&gt;</code><code>&lt;a href="notes.html"&gt;Notes&lt;/a&gt;</code>
        </div>`,
      css: `
        <div class="concept-visual visual-code" role="img" aria-label="CSS rule applied to a page heading">
          <code>h1 {</code><code>&nbsp;&nbsp;color: teal;</code><code>&nbsp;&nbsp;font-size: 2rem;</code><code>}</code>
        </div>`,
      algorithm: `
        <div class="concept-visual visual-flow" role="img" aria-label="Algorithm steps from input to output">
          <span>Input</span><b aria-hidden="true">&rarr;</b><span>Steps</span><b aria-hidden="true">&rarr;</b><span>Decision</span><b aria-hidden="true">&rarr;</b><span>Output</span>
        </div>`,
      logic: `
        <div class="concept-visual visual-code" role="img" aria-label="Simple condition and loop pseudocode">
          <code>IF score &gt;= 75</code><code>&nbsp;&nbsp;DISPLAY "Pass"</code><code>ELSE</code><code>&nbsp;&nbsp;DISPLAY "Review"</code>
        </div>`,
      debugging: `
        <div class="concept-visual visual-flow" role="img" aria-label="Debugging cycle">
          <span>Observe</span><b aria-hidden="true">&rarr;</b><span>Test</span><b aria-hidden="true">&rarr;</b><span>Fix</span><b aria-hidden="true">&rarr;</b><span>Retest</span>
        </div>`
    };
    return visuals[type] || visuals.algorithm;
  }

  function renderLesson(lesson, slideNumber) {
    const definitions = lesson.definitions.map(item => `
      <div class="definition-item">
        <dt>${escapeHTML(item.term)}</dt>
        <dd>${escapeHTML(item.definition)}</dd>
      </div>
    `).join('');

    return `
      <section class="slide" id="slide-${slideNumber}">
        <div class="slide-content syllabus-slide-content">
          <div class="section-title">
            <span class="slide-num">${String(slideNumber).padStart(2, '0')}</span>
            <span class="badge-label">${escapeHTML(lesson.category)}</span>
            <h2>${escapeHTML(lesson.title)}</h2>
          </div>
          <div class="syllabus-content-grid">
            <div>
              <p class="lead-text">${escapeHTML(lesson.lead)}</p>
              <div class="lesson-explanation">
                ${lesson.paragraphs.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join('')}
              </div>
            </div>
            ${renderVisual(lesson.visual)}
          </div>
          <div class="article-divider"></div>
          <article class="slide-article-body syllabus-notes">
            <section>
              <h3>Important terms</h3>
              <dl class="definition-grid">${definitions}</dl>
            </section>
            <section>
              <h3>Examples and real-world use</h3>
              ${renderList(lesson.examples, 'lesson-example-list')}
            </section>
            <aside class="analogy-callout">
              <strong>Simple analogy</strong>
              <p>${escapeHTML(lesson.analogy)}</p>
            </aside>
            <aside class="misconception-callout">
              <strong>Common misconception</strong>
              <p>${escapeHTML(lesson.misconception)}</p>
            </aside>
            <section class="lesson-review">
              <h3>Check your understanding</h3>
              ${renderList(lesson.review, 'review-question-list')}
            </section>
          </article>
        </div>
      </section>
    `;
  }

  function renderActivity(slideNumber) {
    return `
      <section class="slide" id="slide-${slideNumber}">
        <div class="slide-content syllabus-slide-content">
          <div class="section-title">
            <span class="slide-num">${String(slideNumber).padStart(2, '0')}</span>
            <span class="badge-label">Practice</span>
            <h2>${escapeHTML(data.activity.title)}</h2>
          </div>
          <p class="lead-text">${escapeHTML(data.activity.intro)}</p>
          <div class="activity-task-list">
            ${data.activity.tasks.map((task, index) => `
              <article class="activity-task">
                <span class="activity-task-number">${index + 1}</span>
                <div>
                  <h3>${escapeHTML(task.title)}</h3>
                  <p><strong>Situation:</strong> ${escapeHTML(task.scenario)}</p>
                  <p><strong>Your task:</strong> ${escapeHTML(task.prompt)}</p>
                  <details>
                    <summary>Check a strong response</summary>
                    <p>${escapeHTML(task.response)}</p>
                    <p class="activity-rationale">${escapeHTML(task.rationale)}</p>
                  </details>
                </div>
              </article>
            `).join('')}
          </div>
          <section class="lesson-review">
            <h3>Activity reflection</h3>
            ${renderList(data.activity.reflection, 'review-question-list')}
          </section>
        </div>
      </section>
    `;
  }

  function renderQuizSlide(slideNumber) {
    return `
      <section class="slide" id="slide-${slideNumber}" data-section="quiz">
        <div class="slide-content quiz-layout">
          <div class="section-title">
            <span class="slide-num">${String(slideNumber).padStart(2, '0')}</span>
            <span class="badge-label">Assessment</span>
            <h2>${escapeHTML(data.title)} Quiz</h2>
          </div>
          <div class="quiz-container glass-card" id="quizBox">
            <div class="quiz-progress" id="quizProgress"></div>
            <fieldset class="question-container">
              <legend id="questionText">Question</legend>
              <span id="questionCategory" class="question-cat">${escapeHTML(data.title)}</span>
              <div class="options-grid" id="optionsGrid"></div>
            </fieldset>
            <div class="feedback-container hidden" id="feedbackPanel" role="status" aria-live="polite">
              <div class="feedback-indicator">
                <span class="feedback-icon" id="feedbackIcon" aria-hidden="true">&#10003;</span>
                <span class="feedback-title" id="feedbackTitle">Answer logged</span>
              </div>
              <p id="feedbackText">Your selection has been recorded.</p>
              <button class="btn btn-primary" id="nextQuestionBtn" type="button">Next Question</button>
            </div>
            <div class="quiz-footer">
              <span id="quizScoreText">Question 1 of ${data.quiz.length}</span>
              <button class="btn btn-secondary" type="button" data-quiz-reset>Restart Quiz</button>
            </div>
            <div class="quiz-disclaimer">
              <strong>One-time quiz:</strong> An approved student account can submit this quiz once. Select Start Quiz only when ready. Course navigation stays disabled until the attempt is submitted.
            </div>
          </div>
          <div class="quiz-results-container glass-card hidden" id="quizResults">
            <div class="results-header">
              <div class="results-badge" aria-hidden="true">&#10003;</div>
              <h2>Quiz Submitted</h2>
              <p>Your assessment result is shown below.</p>
            </div>
            <div class="score-circle"><span id="finalScoreText">0/${data.quiz.length}</span></div>
            <p id="resultsMessage" class="text-center"></p>
            <p id="quizSaveStatus" class="quiz-save-status" role="status" aria-live="polite"></p>
            <div class="results-actions">
              <button class="btn btn-secondary" type="button" data-quiz-review>Review Answers</button>
              <button class="btn btn-primary hidden" type="button" data-quiz-save>Retry Saving</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderSummary(slideNumber) {
    return `
      <section class="slide" id="slide-${slideNumber}">
        <div class="slide-content syllabus-slide-content">
          <div class="section-title">
            <span class="slide-num">${String(slideNumber).padStart(2, '0')}</span>
            <span class="badge-label">Review</span>
            <h2>${escapeHTML(data.title)} Summary</h2>
          </div>
          <p class="lead-text">${escapeHTML(data.summary.intro)}</p>
          <div class="summary-columns">
            <section>
              <h3>What you should remember</h3>
              ${renderList(data.summary.points, 'slide-body-bullets')}
            </section>
            <section>
              <h3>Final review questions</h3>
              ${renderList(data.summary.review, 'review-question-list')}
            </section>
          </div>
          <aside class="next-module-callout">
            <strong>Next step</strong>
            <p>${escapeHTML(data.summary.next)}</p>
          </aside>
        </div>
      </section>
    `;
  }

  function renderApp() {
    const titles = [
      'Welcome and Objectives',
      ...data.lessons.map(lesson => lesson.title),
      data.activity.title,
      'Quiz Assessment',
      'Summary and Completion'
    ];
    const lessonSlides = data.lessons.map((lesson, index) => renderLesson(lesson, index + 2)).join('');
    const activitySlideNumber = data.lessons.length + 2;
    const summarySlideNumber = totalSlides;

    app.innerHTML = `
      <div class="app-container">
        <header class="top-navbar">
          <div class="nav-left">
            <a href="../index.html" class="portal-back-btn" title="Back to Portal" aria-label="Back to course portal">&larr;</a>
            <button class="mobile-menu-toggle course-sidebar-toggle" id="courseSidebarToggle" type="button" aria-label="Open lesson outline" aria-controls="courseSidebar" aria-expanded="false"><span></span><span></span></button>
            <span class="badge">CC 101</span>
            <span class="nav-title">${escapeHTML(data.title)}</span>
          </div>
          <div class="nav-center">
            <div class="progress-container" aria-hidden="true"><div class="progress-bar" id="progressBar"></div></div>
            <span class="slide-counter"><span id="currentSlideNum">1</span> / <span id="totalSlidesNum">${totalSlides}</span></span>
          </div>
          <div class="nav-right">
            <button id="themeToggle" class="theme-toggle" type="button" data-theme-toggle><span class="theme-toggle-icon" aria-hidden="true">&#9728;</span></button>
            <button id="helpToggle" class="icon-btn" type="button" aria-label="Open keyboard help" title="Keyboard help">?</button>
          </div>
        </header>
        <div class="workspace-grid">
          <aside class="steps-sidebar" id="courseSidebar" aria-label="Course lessons">
            <div class="course-sidebar-header">
              <div class="sidebar-title">Lecture Outline</div>
              <button class="course-sidebar-close" id="courseSidebarClose" type="button" aria-label="Close lesson outline">&times;</button>
            </div>
            <ol class="sidebar-checklist" id="sidebarChecklist">
              ${titles.map((title, index) => `
                <li>
                  <button class="sidebar-item sidebar-item-button ${index === 0 ? 'active' : ''}" type="button" data-target="${index + 1}" ${index === 0 ? 'aria-current="step"' : ''}>
                    <span class="step-indicator-dot">${index + 1}</span><span>${escapeHTML(title)}</span>
                  </button>
                </li>
              `).join('')}
            </ol>
          </aside>
          <button class="course-sidebar-overlay" id="courseSidebarOverlay" type="button" aria-label="Close lesson outline"></button>
          <main class="presentation-viewport">
            <section class="slide active-slide" id="slide-1">
              <div class="slide-content title-layout syllabus-welcome">
                <div class="hero-header">
                  <span class="sub-category">CC 101 - UNDERSTANDING TECHNOLOGY</span>
                  <h1>${escapeHTML(data.title)}</h1>
                  <div class="accent-line"></div>
                  <p class="hero-desc">${escapeHTML(data.description)}</p>
                </div>
                <div class="syllabus-intro-grid">
                  <section>
                    <h2>Learning objectives</h2>
                    ${renderList(data.objectives, 'slide-body-bullets')}
                  </section>
                  ${renderVisual(data.introVisual)}
                </div>
                <div class="welcome-tip"><strong>How to learn:</strong> Read each lesson, try the activity, complete the one-time quiz, then select Finish Module on the summary page.</div>
              </div>
            </section>
            ${lessonSlides}
            ${renderActivity(activitySlideNumber)}
            ${renderQuizSlide(quizSlideNumber)}
            ${renderSummary(summarySlideNumber)}
          </main>
        </div>
        <footer class="bottom-controls">
          <div class="control-left"><button id="prevBtn" class="btn btn-secondary" type="button">&larr; Previous</button></div>
          <div class="control-center"><div class="slide-dots" id="slideDots"></div></div>
          <div class="control-right"><button id="nextBtn" class="btn btn-primary" type="button">Next Slide &rarr;</button></div>
        </footer>
      </div>
      <div class="help-modal modal-backdrop" id="helpModal" role="dialog" aria-modal="true" aria-labelledby="helpTitle" aria-hidden="true">
        <div class="help-modal-content modal-content glass-card">
          <div class="modal-header"><h3 id="helpTitle">Keyboard navigation</h3><button id="closeHelpModal" class="icon-btn" type="button" aria-label="Close keyboard help">&times;</button></div>
          <div class="modal-body"><ul class="shortcuts-list"><li><kbd>&rarr;</kbd><span>Next lesson</span></li><li><kbd>&larr;</kbd><span>Previous lesson</span></li><li><kbd>Esc</kbd><span>Close panels</span></li></ul></div>
        </div>
      </div>
    `;
  }

  function updateNavigation() {
    document.querySelectorAll('.slide').forEach((slide, index) => {
      slide.classList.toggle('active-slide', index + 1 === currentSlide);
    });
    document.querySelectorAll('.sidebar-item').forEach((item, index) => {
      const number = index + 1;
      item.classList.toggle('active', number === currentSlide);
      item.classList.toggle('completed', number < currentSlide);
      if (number === currentSlide) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
    document.querySelectorAll('.slide-dots .dot').forEach((dot, index) => {
      dot.classList.toggle('active-dot', index + 1 === currentSlide);
      dot.setAttribute('aria-current', index + 1 === currentSlide ? 'step' : 'false');
    });
    document.getElementById('currentSlideNum').textContent = currentSlide;
    document.getElementById('progressBar').style.width = `${((currentSlide - 1) / (totalSlides - 1)) * 100}%`;
    document.getElementById('prevBtn').disabled = currentSlide === 1 || isQuizNavigationLocked?.();
    const next = document.getElementById('nextBtn');
    next.disabled = currentSlide === totalSlides || isQuizNavigationLocked?.();
    next.textContent = currentSlide === totalSlides ? 'End of Module' : 'Next Slide ->';

    const activeSlide = document.getElementById(`slide-${currentSlide}`);
    if (activeSlide) activeSlide.scrollTop = 0;
    if (typeof recordLessonProgress === 'function') recordLessonProgress(data.id, currentSlide, totalSlides);
  }

  function goToSlide(number) {
    const target = Number(number);
    if (!Number.isInteger(target) || target < 1 || target > totalSlides) return;
    if (typeof isQuizNavigationLocked === 'function' && isQuizNavigationLocked() && target !== currentSlide) {
      showToast('Finish the active quiz before leaving this lesson.', 'error');
      return;
    }
    currentSlide = target;
    updateNavigation();
  }

  function setupNavigation() {
    document.querySelectorAll('.sidebar-item').forEach(button => {
      button.addEventListener('click', () => goToSlide(Number(button.dataset.target)));
    });
    const dots = document.getElementById('slideDots');
    Array.from({ length: totalSlides }, (_, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `dot ${index === 0 ? 'active-dot' : ''}`;
      button.setAttribute('aria-label', `Open lesson ${index + 1}`);
      button.addEventListener('click', () => goToSlide(index + 1));
      dots.appendChild(button);
    });
    document.getElementById('prevBtn').addEventListener('click', () => goToSlide(currentSlide - 1));
    document.getElementById('nextBtn').addEventListener('click', () => goToSlide(currentSlide + 1));
    updateNavigation();
  }

  function resetQuiz() {
    if (typeof canResetOneTimeQuiz === 'function' && !canResetOneTimeQuiz()) return;
    quizQuestions = data.quiz.map(question => ({ ...question, options: question.options.slice() }));
    randomizeQuizInPlace(quizQuestions);
    quizCurrentQuestion = 0;
    quizAnswers = [];
    quizScore = 0;
    isReviewMode = false;
    quizFinished = false;
    document.getElementById('quizBox')?.classList.remove('hidden');
    document.getElementById('quizResults')?.classList.add('hidden');

    const progress = document.getElementById('quizProgress');
    progress.innerHTML = quizQuestions.map((_, index) => `<div class="quiz-progress-step ${index === 0 ? 'active-q' : ''}">${index + 1}</div>`).join('');
    loadQuestion();
  }

  function loadQuestion() {
    const question = quizQuestions[quizCurrentQuestion];
    if (!question) return;
    const feedback = document.getElementById('feedbackPanel');
    feedback.classList.add('hidden');
    document.getElementById('questionCategory').textContent = question.category;
    document.getElementById('questionText').textContent = question.question;
    const buttons = renderQuizChoices(document.getElementById('optionsGrid'), question, selectOption, !isReviewMode);

    document.querySelectorAll('.quiz-progress-step').forEach((step, index) => {
      step.className = `quiz-progress-step ${index === quizCurrentQuestion ? 'active-q' : ''}`;
      if (index < quizCurrentQuestion) step.classList.add(isReviewMode
        ? (quizAnswers[index] === quizQuestions[index].answer ? 'correct-q' : 'incorrect-q')
        : 'completed-q');
    });

    if (isReviewMode) {
      const selected = quizAnswers[quizCurrentQuestion];
      markQuizChoice(buttons, selected);
      buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.answer) button.classList.add('selected-correct');
        else if (index === selected) button.classList.add('selected-incorrect');
      });
      const correct = selected === question.answer;
      document.getElementById('feedbackIcon').textContent = correct ? '\u2713' : '\u2717';
      document.getElementById('feedbackTitle').textContent = correct ? 'Correct' : 'Best answer shown';
      document.getElementById('feedbackText').textContent = question.explanation;
      document.getElementById('nextQuestionBtn').textContent = quizCurrentQuestion === quizQuestions.length - 1 ? 'Finish Review' : 'Next Question';
      feedback.classList.remove('hidden');
    }
    document.getElementById('quizScoreText').textContent = `Question ${quizCurrentQuestion + 1} of ${quizQuestions.length}`;
  }

  function selectOption(index) {
    if (typeof canAnswerOneTimeQuiz === 'function' && !canAnswerOneTimeQuiz()) {
      showToast('Select Start Quiz before answering.', 'error');
      return;
    }
    const feedback = document.getElementById('feedbackPanel');
    if (!feedback.classList.contains('hidden')) return;
    quizAnswers[quizCurrentQuestion] = index;
    const buttons = document.querySelectorAll('#optionsGrid .option-btn');
    markQuizChoice(buttons, index);
    buttons.forEach((button, optionIndex) => {
      button.disabled = true;
      if (optionIndex === index) button.classList.add('selected-temp');
    });
    document.getElementById('feedbackIcon').textContent = '\u2713';
    document.getElementById('feedbackTitle').textContent = 'Answer logged';
    document.getElementById('feedbackText').textContent = 'Your choice is recorded. Continue when you are ready.';
    document.getElementById('nextQuestionBtn').textContent = quizCurrentQuestion === quizQuestions.length - 1 ? 'Submit Quiz' : 'Next Question';
    feedback.classList.remove('hidden');
  }

  function nextQuestion() {
    quizCurrentQuestion++;
    if (quizCurrentQuestion < quizQuestions.length) {
      loadQuestion();
    } else if (isReviewMode) {
      document.getElementById('quizBox').classList.add('hidden');
      document.getElementById('quizResults').classList.remove('hidden');
    } else {
      showQuizResults();
    }
  }

  async function persistQuizResult() {
    const retryButton = document.querySelector('[data-quiz-save]');
    const status = document.getElementById('quizSaveStatus');
    retryButton.disabled = true;
    retryButton.textContent = 'Saving...';
    status.textContent = 'Saving your result.';
    const result = await saveQuizResult(data.id, quizScore, quizQuestions.length);
    if (result.saved || result.reason === 'already-completed') {
      completeOneTimeQuizAttempt();
      retryButton.classList.add('hidden');
      status.textContent = 'Your quiz result is saved.';
      updateNavigation();
    } else {
      retryButton.disabled = false;
      retryButton.textContent = 'Retry Saving';
      retryButton.classList.remove('hidden');
      status.textContent = 'Your result is not saved yet. Check your connection and retry.';
    }
  }

  function showQuizResults() {
    quizFinished = true;
    quizScore = quizQuestions.reduce((score, question, index) => score + (quizAnswers[index] === question.answer ? 1 : 0), 0);
    document.getElementById('quizBox').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');
    document.getElementById('finalScoreText').textContent = `${quizScore}/${quizQuestions.length}`;
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    document.getElementById('resultsMessage').textContent = percentage >= 80
      ? 'Strong understanding. Review any missed choices before finishing the module.'
      : percentage >= 60
        ? 'Good foundation. Review the explanations for the questions you missed.'
        : 'Review the lesson examples and explanations to strengthen the key ideas.';
    persistQuizResult();
  }

  function startQuizReview() {
    isReviewMode = true;
    quizCurrentQuestion = 0;
    document.getElementById('quizBox').classList.remove('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    loadQuestion();
  }

  function updateQuizAccessUI(isApproved) {
    const quizBox = document.getElementById('quizBox');
    if (!quizBox) return;
    let overlay = quizBox.querySelector('.quiz-lock-overlay[data-lock="access"]');
    if (isApproved) {
      overlay?.remove();
      quizBox.classList.remove('gated-locked');
      refreshOneTimeQuizGate?.();
      return;
    }
    removeQuizGateOverlay?.();
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'quiz-lock-overlay';
      overlay.dataset.lock = 'access';
      overlay.innerHTML = '<div class="quiz-lock-card"><div class="quiz-lock-title">Approved Students Only</div><div class="quiz-lock-desc">Sign in with an approved account to start this quiz.</div></div>';
      quizBox.appendChild(overlay);
    }
    quizBox.classList.add('gated-locked');
  }

  function setupInteractions() {
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    document.querySelector('[data-quiz-reset]').addEventListener('click', resetQuiz);
    document.querySelector('[data-quiz-review]').addEventListener('click', startQuizReview);
    document.querySelector('[data-quiz-save]').addEventListener('click', persistQuizResult);

    const themeButton = document.getElementById('themeToggle');
    const syncThemeButton = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      const label = theme === 'dark' ? 'Use light theme' : 'Use dark theme';
      themeButton.setAttribute('aria-label', label);
      themeButton.title = label;
      themeButton.querySelector('.theme-toggle-icon').textContent = theme === 'dark' ? '\u2600' : '\u263e';
    };
    syncThemeButton();
    themeButton.addEventListener('click', () => {
      window.toggleTheme?.();
      syncThemeButton();
    });

    const help = document.getElementById('helpModal');
    const toggleHelp = open => {
      help.classList.toggle('active', open);
      help.setAttribute('aria-hidden', String(!open));
      if (open) document.getElementById('closeHelpModal').focus();
    };
    document.getElementById('helpToggle').addEventListener('click', () => toggleHelp(true));
    document.getElementById('closeHelpModal').addEventListener('click', () => toggleHelp(false));
    help.addEventListener('click', event => { if (event.target === help) toggleHelp(false); });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && help.classList.contains('active')) {
        toggleHelp(false);
        document.getElementById('helpToggle').focus();
        return;
      }
      if (event.target.closest('input, textarea, select, #optionsGrid, details')) return;
      if (event.key === 'ArrowRight') goToSlide(currentSlide + 1);
      else if (event.key === 'ArrowLeft') goToSlide(currentSlide - 1);
    });
  }

  window.resetQuiz = resetQuiz;
  window.onAuthGateChanged = function onAuthGateChanged(user, isApproved) {
    updateQuizAccessUI(isApproved);
    refreshFinishModuleControl?.();
    if (user && isApproved) recordLessonProgress?.(data.id, currentSlide, totalSlides);
  };

  document.addEventListener('DOMContentLoaded', () => {
    renderApp();
    setupNavigation();
    setupInteractions();
    window.initializeCourseSidebar?.();
    resetQuiz();
    initOneTimeQuizGate({ moduleId: data.id, total: data.quiz.length, resetQuiz });
    initFinishModuleControl({ moduleId: data.id, totalLessons: totalSlides, requiresQuiz: true });
    updateQuizAccessUI(window.isUserApproved === true);
    openRequestedLesson(goToSlide, totalSlides);
  });
})();
