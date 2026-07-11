buildCoursePart({
  id: 'web-development-part-1',
  title: 'Web Development Part 1',
  subtitle: 'The Web, HTTP, and Semantic HTML',
  description: 'Trace a web request from a URL to a server response, then structure meaningful pages with headings, links, images, lists, tables, and landmarks.',
  objectives: [
    'Distinguish the web from the internet and identify the parts of a URL.',
    'Explain HTTP requests, responses, methods, and status codes.',
    'Use semantic HTML to communicate document structure.',
    'Choose accessible elements for links, images, lists, and comparative data.'
  ],
  lessonIndexes: [0, 1, 2],
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Laptop_Programmcode.jpg?width=1280',
  imageAlt: 'A laptop displaying source code for a web page.',
  imageCredit: 'Photo: Lukas Bieri, CC0, via Wikimedia Commons.',
  taskIndexes: [0, 1],
  extraTasks: [{
    title: 'Trace a page request',
    scenario: 'A student enters https://school.example/clubs and receives a page successfully.',
    prompt: 'Describe the browser-server exchange from the URL through the response.',
    response: 'The browser identifies the HTTPS scheme, host, and path, resolves and connects to the host, sends an HTTP request for /clubs, and renders the successful response content.',
    rationale: 'Separating addressing, connection, protocol exchange, and rendering makes failures easier to locate.'
  }],
  activityTitle: 'Request and Page Structure Lab',
  activityIntro: 'Trace realistic web requests and select HTML that communicates meaning clearly to browsers, people, and assistive technologies.',
  reflection: [
    'Which evidence tells you that a browser reached a server even when the expected page did not appear?',
    'How does semantic HTML help before any visual styling is applied?'
  ],
  appliedQuestions: [
    {
      category: 'Web Foundations',
      question: 'A messaging app and a website both work through the same network connection. What does this demonstrate?',
      options: ['The internet carries many services, and the web is one of those services', 'Every internet service must exchange HTML pages through a browser', 'The web is the physical network cable shared by both applications', 'A messaging app becomes a website whenever it uses an IP address'],
      answer: 0,
      explanation: 'The internet is the network infrastructure; web browsing is one application built on it.'
    },
    {
      category: 'URLs',
      question: 'For https://portal.example/grades?term=1, which interpretation is most accurate?',
      options: ['HTTPS is the scheme, portal.example is the host, /grades is the path, and term=1 is a query', 'HTTPS is the host, portal.example is the query, and /grades is the encryption key', 'Portal.example is the browser, /grades is the server, and term=1 is the status code', 'The whole text is only a file name with no separate addressing roles'],
      answer: 0,
      explanation: 'A URL separates the protocol scheme, network host, resource path, and optional query information.'
    },
    {
      category: 'HTTP',
      question: 'A page returns 500 Internal Server Error. What is the best first interpretation?',
      options: ['The server received the request but failed while processing it', 'The browser successfully received the expected resource', 'The requested path was permanently moved to another host', 'The device could not create any network connection at all'],
      answer: 0,
      explanation: 'A 500 response comes from a server that encountered an internal processing failure.'
    },
    {
      category: 'HTTP Methods',
      question: 'Which design uses HTTP methods most appropriately?',
      options: ['Use GET to retrieve a filterable list and POST to submit a new record', 'Use GET with a password in the URL to create a private account', 'Use POST for every image because only POST responses can display media', 'Use GET for an irreversible deletion triggered by opening a shared link'],
      answer: 0,
      explanation: 'GET is suited to retrieval, while POST is suited to submitting data that creates or changes server state.'
    },
    {
      category: 'Semantic HTML',
      question: 'A page title is visually large but marked as a paragraph. What is the best correction?',
      options: ['Use an appropriate heading element and style that element as needed', 'Keep the paragraph because visual size communicates the same structure', 'Replace it with an image because images always become page headings', 'Put it in a table header because every title labels tabular data'],
      answer: 0,
      explanation: 'Semantic heading markup communicates the document outline independently of appearance.'
    },
    {
      category: 'Accessible Content',
      question: 'A diagram explains how a request travels from browser to server. What is the best image treatment?',
      options: ["Provide concise alternative text or nearby text that conveys the diagram's relevant information", 'Use the file name as alt text because it identifies the stored image', 'Leave alt empty because all diagrams are decorative by definition', 'Repeat the word diagram several times because detail is not needed'],
      answer: 0,
      explanation: 'Informative images need an equivalent description suited to their purpose and context.'
    }
  ],
  sourceQuizIndexes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  summaryIntro: 'Web pages travel through a layered request-response process and become understandable documents when HTML expresses the meaning of their content.',
  summaryPoints: [
    'The web is a linked-resource service that uses internet infrastructure.',
    'URLs identify a scheme, host, path, and optional query or fragment.',
    'HTTP requests and responses carry methods, targets, headers, bodies, and status codes.',
    'Semantic HTML creates a meaningful document outline before visual styling.',
    'Links, images, lists, tables, and landmarks should match the relationship of the content.'
  ],
  summaryReview: [
    'Trace a URL from browser input to an HTTP response.',
    'Interpret a 404 response and a 500 response without confusing them with network failure.',
    'Outline semantic HTML for a school club information page.'
  ],
  next: 'Continue to Web Development Part 2 for forms, CSS, responsive design, and accessibility.'
});
