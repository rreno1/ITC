buildCoursePart({
  id: 'programming-part-1',
  title: 'Programming Part 1',
  subtitle: 'Algorithms, Values, and Decisions',
  description: 'Turn problems into precise algorithms, represent changing information with variables, validate input, and design correct decision paths with Boolean logic.',
  objectives: [
    'Compare linear and binary search under the correct assumptions.',
    'Write clear pseudocode before choosing a programming language.',
    'Use variables, data types, expressions, and validated input.',
    'Design and test conditions at boundaries and overlapping ranges.'
  ],
  lessonIndexes: [0, 1, 2],
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Programming_code.jpg?width=1280',
  imageAlt: 'Programming source code displayed on a computer screen.',
  imageCredit: 'Photo: Martin Vorel, CC BY-SA 4.0, via Wikimedia Commons.',
  taskIndexes: [0, 1],
  extraTasks: [{
    title: 'Classify a final score',
    scenario: 'A program receives a whole-number score and must report Excellent for 90 to 100, Passed for 75 to 89, and Needs Support for 0 to 74.',
    prompt: 'Write validation and decision pseudocode, including invalid input handling.',
    response: 'Convert and validate the score from 0 through 100; then test score >= 90, else score >= 75, else report Needs Support; reject values outside the range.',
    rationale: 'Validation comes before classification, and checking the most specific high range first prevents overlap errors.'
  }],
  activityTitle: 'Algorithm and Decision Workshop',
  activityIntro: 'Translate realistic school problems into precise steps, identify required assumptions, and test the boundaries where logic often fails.',
  reflection: [
    'Which assumptions must be true before an algorithm is correct?',
    'How did type checks and boundary cases change your decision logic?'
  ],
  appliedQuestions: [
    {
      category: 'Algorithms',
      question: 'A list of 2,000 names changes often and is not sorted. It is searched only once. Which approach is most reasonable?',
      options: ['Use linear search because sorting first may cost more than the one search saves', 'Use binary search directly because list size removes the need for order', 'Check only the middle name because one comparison is enough for any list', 'Convert each name to machine code because that automatically sorts the list'],
      answer: 0,
      explanation: 'Linear search works on unsorted data and can be sensible when a one-time search does not justify sorting.'
    },
    {
      category: 'Algorithms',
      question: 'A sorted directory is searched thousands of times each day. Which plan best uses that property?',
      options: ['Use binary search and keep the ordering valid as records change', 'Use linear search and ignore the ordering during every request', 'Start at a random position and stop after the first comparison', 'Reverse the list before each search so both ends are checked'],
      answer: 0,
      explanation: 'Repeated searches benefit from binary search when the data remains consistently sorted.'
    },
    {
      category: 'Pseudocode',
      question: 'Which pseudocode instruction is precise enough to implement and test?',
      options: ['If attempts equals 3, lock the form and show the support message', 'Handle the login properly when something seems unusual', 'Make the result better until the user is satisfied', 'Check all important things and continue in the normal way'],
      answer: 0,
      explanation: 'Good pseudocode names concrete values, conditions, and actions without depending on vague judgment.'
    },
    {
      category: 'Variables',
      question: 'A running total must change after each quiz score. Which statement best describes the required variable?',
      options: ['It stores program state and receives a new value after each score', 'It remains constant so every score produces the same total', 'It stores only the visible label beside the final result', 'It chooses the loop condition without holding any value'],
      answer: 0,
      explanation: 'A variable represents state that can be updated as the program processes input.'
    },
    {
      category: 'Input',
      question: 'A form sends the text "82" for a quiz score. What sequence is safest?',
      options: ['Parse the text, confirm conversion, check the allowed range, then calculate', 'Calculate with the text first and validate only if the answer looks unusual', 'Assume every browser sends a number and skip all server-side checks', 'Compare the text length with 100 because both describe the score range'],
      answer: 0,
      explanation: 'External input must be converted and validated before numeric operations use it.'
    },
    {
      category: 'Conditions',
      question: 'A program tests score >= 75 before score >= 90 in an if/else-if chain. Which repair is best?',
      options: ['Test the narrower score >= 90 case before the broader passing case', 'Change both comparisons to equality so no ranges overlap', 'Use OR between the branches so both always execute', 'Convert the score to text before comparing the two ranges'],
      answer: 0,
      explanation: 'An else-if chain stops at the first true condition, so specific overlapping ranges should be tested first.'
    },
    {
      category: 'Testing',
      question: 'A valid age range is 13 through 18 inclusive. Which test set best checks both boundaries?',
      options: ['12, 13, 14, 17, 18, and 19', '1, 5, 9, 22, 30, and 40', '13, 14, 15, 16, 17, and 18', '0, 10, 20, 30, 40, and 50'],
      answer: 0,
      explanation: 'Values below, at, and above each boundary expose incorrect comparison operators.'
    }
  ],
  sourceQuizIndexes: [0, 1, 2, 3, 4, 5, 6, 7],
  summaryIntro: 'Programming begins with a precise solution, a clear representation of state, validated values, and decision logic tested against normal and boundary cases.',
  summaryPoints: [
    'Algorithms need clear steps, correct assumptions, a stopping point, and testable outcomes.',
    'Binary search is efficient only when the data follows a consistent order.',
    'Variables store typed values, while expressions calculate new values from them.',
    'External input must be converted, validated, and authorized before trusted use.',
    'Conditions and Boolean operators need careful ordering and boundary tests.'
  ],
  summaryReview: [
    'Compare linear and binary search for two realistic data sets.',
    'Write pseudocode that validates a score before using it.',
    'Design test cases for an inclusive range and an overlapping grade rule.'
  ],
  next: 'Continue to Programming Part 2 for loops, functions, events, translation, and debugging.'
});
