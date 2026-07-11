buildCoursePart({
  id: 'programming-part-2',
  title: 'Programming Part 2',
  subtitle: 'Repetition, Functions, and Debugging',
  description: 'Control repetition with safe stopping rules, divide programs into focused functions, understand how code runs, respond to events, and debug with evidence.',
  objectives: [
    'Design loops with correct initialization, progress, and stopping conditions.',
    'Use functions, parameters, return values, and decomposition.',
    'Distinguish source code, translation, execution, and events.',
    'Debug programs through reproducible evidence and focused tests.'
  ],
  lessonIndexes: [3, 4, 5],
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Computer_developer.jpg?width=1280',
  imageAlt: 'A software developer working with code on multiple computer screens.',
  imageCredit: 'Photo: True Agency, CC0, via Wikimedia Commons.',
  taskIndexes: [2],
  extraTasks: [
    {
      title: 'Repeat until input is valid',
      scenario: 'A quiz asks for a whole-number confidence rating from 1 through 5 and must ask again after invalid input.',
      prompt: 'Describe the loop state, validation, progress, and stopping rule.',
      response: 'Read input inside the loop, attempt conversion, accept only values from 1 through 5, show feedback otherwise, and stop as soon as one valid value is stored.',
      rationale: 'Each pass obtains new information that can change the condition, preventing an infinite loop.'
    },
    {
      title: 'Design focused functions',
      scenario: 'One long function loads scores, validates them, calculates an average, chooses a status, changes the page, and saves data.',
      prompt: 'Propose a clearer decomposition with explicit inputs and outputs.',
      response: 'Separate loading, score validation, average calculation, status selection, rendering, and saving; pass needed data and return predictable results.',
      rationale: 'Focused responsibilities allow each behavior to be understood and tested independently.'
    }
  ],
  activityTitle: 'Loop, Function, and Debugging Lab',
  activityIntro: 'Build controlled repetition, define clear function contracts, and investigate failures with small reproducible tests.',
  reflection: [
    'What guarantees that each loop moves toward its stopping condition?',
    'Which evidence would prove that a function is correct without testing the whole interface?'
  ],
  appliedQuestions: [
    {
      category: 'Loops',
      question: 'A loop should process indexes 0 through length - 1. Which condition is most direct?',
      options: ['Continue while index < length', 'Continue while index <= length', 'Continue while index > length', 'Continue while length equals zero'],
      answer: 0,
      explanation: 'The last valid zero-based index is one less than the length, so index < length includes every valid item.'
    },
    {
      category: 'Loops',
      question: 'A while loop checks whether a password is invalid but never reads another value. What is the main risk?',
      options: ['The condition may never change, causing an infinite loop', 'The password will automatically become a Boolean value', 'The loop will compile the program after every check', 'The condition will skip directly to the final list item'],
      answer: 0,
      explanation: 'A condition-controlled loop needs progress that can eventually make its condition false.'
    },
    {
      category: 'Functions',
      question: 'Which function contract is the clearest for calculating a class average?',
      options: ['calculateAverage(scores) returns a number or a defined empty-data result', 'calculateEverything() changes several global values without returning anything', 'average() reads whichever page elements happen to exist at the time', 'helper(x) performs unrelated saving, styling, and account changes'],
      answer: 0,
      explanation: 'A focused name, explicit input, and predictable output create a testable function contract.'
    },
    {
      category: 'Parameters',
      question: 'A function is declared as greet(name) and called as greet("Mina"). What is the relationship?',
      options: ['name is the parameter and "Mina" is the argument supplied to it', 'name is the return value and "Mina" is the function body', 'name is a compiler and "Mina" is the machine instruction', 'name is an event and "Mina" is the loop condition'],
      answer: 0,
      explanation: 'A parameter names an expected input; an argument is the actual value provided at a call.'
    },
    {
      category: 'Translation',
      question: 'Why can the same source program require different builds for different processor targets?',
      options: ['Processors execute target-specific machine instructions produced from the source', 'Source code always contains the physical wiring for one particular computer', 'Every processor reads HTML but uses a different CSS selector', 'Machine code is a screenshot whose resolution depends on the display'],
      answer: 0,
      explanation: 'Human-oriented source is translated into instructions appropriate for a target runtime or processor.'
    },
    {
      category: 'Events',
      question: 'A page should save only when a user selects a button. Which structure fits best?',
      options: ['Register a handler that runs the save operation for the button event', 'Run an endless loop that saves as quickly as the processor allows', 'Translate the source again whenever the pointer moves', 'Store the button text in a variable and never listen for interaction'],
      answer: 0,
      explanation: 'Event-driven programs register handlers that respond when a specific event occurs.'
    },
    {
      category: 'Debugging',
      question: 'A total is wrong only for an empty list. What is the best next step?',
      options: ['Create a minimal empty-list test and inspect assumptions about count and division', 'Rewrite every function before recording the expected result', 'Add random delays because timing causes every empty-data failure', 'Test only large lists because normal cases reveal all boundary errors'],
      answer: 0,
      explanation: 'A small reproducible boundary case narrows the failing assumption and makes the repair verifiable.'
    },
    {
      category: 'Testing',
      question: 'After repairing an off-by-one loop error, which verification is strongest?',
      options: ['Run empty, one-item, two-item, and normal-list tests with expected outputs', 'Run the original large input once and accept any plausible-looking result', 'Remove the test that exposed the failure because the code has changed', 'Change another nearby condition so both edits are evaluated together'],
      answer: 0,
      explanation: 'Boundary and normal cases show that the fix handles the original failure without introducing nearby regressions.'
    }
  ],
  sourceQuizIndexes: [8, 9, 10, 11, 12, 13, 14],
  summaryIntro: 'Reliable programs control repetition, divide responsibilities into clear functions, respond to events, and use reproducible evidence to turn failures into verified repairs.',
  summaryPoints: [
    'Loops need initialized state, progress on each pass, and a correct stopping condition.',
    'Functions support decomposition through focused responsibilities and explicit contracts.',
    'Parameters receive arguments, while return values communicate results.',
    'Translators connect human-oriented source code to executable behavior.',
    'Debugging begins with reproducible inputs, expected output, actual output, and focused tests.'
  ],
  summaryReview: [
    'Trace a zero-based loop and explain its stopping condition.',
    'Decompose a long process into functions with explicit inputs and outputs.',
    'Write a debugging plan for a failure that occurs only at a boundary.'
  ],
  next: 'You have reached the final module. Review your course results and completion status on My Progress.'
});
