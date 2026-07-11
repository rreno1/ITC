buildCoursePart({
  id: 'web-development-part-2',
  title: 'Web Development Part 2',
  subtitle: 'Forms, CSS, and Responsive Interfaces',
  description: 'Build usable forms, understand client and server validation, style the document tree with CSS, and design deliberate layouts for desktop and mobile.',
  objectives: [
    'Build labeled forms whose submitted values have clear names.',
    'Explain why server validation and authorization remain necessary.',
    'Use selectors, the cascade, and the box model to style a document.',
    'Create responsive interfaces with readable content and accessible controls.'
  ],
  lessonIndexes: [3, 4, 5],
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Consistent_Experience_Across_Multiple_Screen_Sizes.jpg?width=1280',
  imageAlt: 'The same web interface arranged across desktop, tablet, and phone screens.',
  imageCredit: 'Photo: Intel Free Press, CC BY-SA 2.0, via Wikimedia Commons.',
  taskIndexes: [2],
  extraTasks: [
    {
      title: 'Repair a registration form',
      scenario: 'A registration page uses placeholders instead of labels and places a password in a GET query.',
      prompt: 'Identify the usability and privacy problems, then propose a better structure.',
      response: 'Add persistent labels connected to inputs, use an appropriate POST submission over HTTPS, and validate the values again on the server.',
      rationale: 'Labels remain available and accessible, while secrets should not be placed in URLs and client checks cannot be trusted alone.'
    },
    {
      title: 'Plan responsive records',
      scenario: 'A student records table has seven comparison columns and must remain usable on a phone.',
      prompt: 'Choose a deliberate mobile treatment without losing the table relationships.',
      response: 'Keep semantic table markup inside a horizontally scrollable container, use practical minimum column widths, and preserve readable headers.',
      rationale: 'Horizontal table scrolling retains row and column comparison while preventing the whole page from overflowing.'
    }
  ],
  activityTitle: 'Responsive Form and Layout Lab',
  activityIntro: 'Improve forms and page layouts for real users, small screens, keyboard access, and untrusted input.',
  reflection: [
    'Which responsibilities belong in HTML, CSS, browser validation, and server validation?',
    'When should mobile content reflow, reorder, scroll within a region, or use a different control?'
  ],
  appliedQuestions: [
    {
      category: 'Forms',
      question: 'A user selects a visible label, but its input does not receive focus. What is the best repair?',
      options: ["Match the label for value to the input's unique id", 'Match the input class to the form action URL', 'Place the label text only inside the placeholder', 'Give the label the same name as the submit button'],
      answer: 0,
      explanation: 'A matching for and id pair creates the programmatic label-control relationship.'
    },
    {
      category: 'Form Data',
      question: 'A submitted text field appears on screen but its value is missing from the request. What should be checked first?',
      options: ['Whether the control has the name used for submitted data', 'Whether the label uses a larger font than the input', 'Whether the field has a CSS class matching its value', 'Whether the page contains an image with alternative text'],
      answer: 0,
      explanation: 'Successful form controls submit values under their name attributes.'
    },
    {
      category: 'Validation',
      question: 'The browser prevents an empty required field. Why must the server still check it?',
      options: ["A request can bypass or modify the browser's form controls", 'The server cannot receive any value already checked by a browser', "Browser validation automatically confirms the user's permissions", 'Required fields are encrypted only after server validation fails'],
      answer: 0,
      explanation: 'Client validation improves feedback, but an attacker can construct requests directly.'
    },
    {
      category: 'Authorization',
      question: "A valid request asks to edit another student's record. What must the server decide in addition to validating the fields?",
      options: ['Whether the signed-in user is authorized to edit that record', 'Whether the page uses the same color as the dashboard', 'Whether the input labels appear before the controls', 'Whether the browser window is wider than the form'],
      answer: 0,
      explanation: 'Valid data is not automatically permitted; authorization checks who may perform the action.'
    },
    {
      category: 'CSS Cascade',
      question: 'Two valid CSS rules set different colors on the same element. What should be examined?',
      options: ['Origin, importance, selector specificity, and source order', 'The HTTP status, image resolution, and form method', 'The URL path, input value, and server location', 'The element file size, codec, and sample rate'],
      answer: 0,
      explanation: 'The cascade resolves competing declarations using a defined priority process.'
    },
    {
      category: 'Box Model',
      question: 'A full-width input overflows its container after padding is added. Which change most directly fixes the sizing calculation?',
      options: ['Use border-box sizing so padding and border remain inside the declared width', 'Remove the label because labels increase the input width', 'Change the form method because POST uses smaller controls', 'Add more margin because outer space reduces the element width'],
      answer: 0,
      explanation: 'With border-box, the declared width includes content, padding, and border.'
    },
    {
      category: 'Responsive Design',
      question: 'A desktop toolbar wraps unpredictably on a narrow phone. What is the best responsive response?',
      options: ['Prioritize actions, use suitable compact controls, and deliberately reorganize the layout', 'Scale the entire page down until all desktop controls fit on one line', 'Keep every control fixed-width and allow page-wide horizontal scrolling', 'Hide the toolbar without providing another way to perform its commands'],
      answer: 0,
      explanation: 'Responsive design adapts hierarchy and interaction to the available space.'
    },
    {
      category: 'Tables',
      question: 'A seven-column grade table must remain comparable on mobile. Which solution preserves its meaning best?',
      options: ['Keep the real table in a contained horizontal scrolling region', 'Turn each cell into an unrelated card with no shared headers', 'Reduce all text until seven columns fit without scrolling', 'Let the table force the entire document wider than the viewport'],
      answer: 0,
      explanation: 'A contained scroller preserves table relationships and prevents page-wide overflow.'
    },
    {
      category: 'Accessibility',
      question: 'Which final check gives the strongest evidence that an interactive page is usable?',
      options: ['Test keyboard flow, labels, focus visibility, contrast, reflow, and clear error feedback', 'Confirm that all controls use the same accent color and border radius', 'Check only a wide desktop because mobile browsers scale content automatically', 'Remove focus outlines because mouse users do not need them'],
      answer: 0,
      explanation: 'Usability requires multiple modes of operation and clear information across screen sizes.'
    }
  ],
  sourceQuizIndexes: [9, 10, 11, 12, 13, 14],
  summaryIntro: 'Usable web interfaces combine meaningful HTML, trustworthy processing, predictable CSS, and responsive interaction choices based on content and user needs.',
  summaryPoints: [
    'Labels, names, input types, and clear feedback make forms understandable and useful.',
    'Server validation and authorization remain necessary even when browser checks are present.',
    'CSS selectors and the cascade determine which styles apply to the document tree.',
    'The box model and layout systems control stable sizing and arrangement.',
    'Responsive design deliberately reflows content while preserving readable, accessible controls.'
  ],
  summaryReview: [
    'Describe how a labeled field becomes a named value in a request.',
    'Explain the difference between validation and authorization.',
    'Plan a mobile layout for a form, toolbar, and wide comparison table.'
  ],
  next: 'Continue to Programming Part 1 for algorithms, values, and decision logic.'
});
