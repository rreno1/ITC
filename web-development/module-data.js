window.CC101_MODULE_DATA = {
  id: "web-development",
  title: "Web Development",
  subtitle: "HTTP, HTML, Forms, and CSS",
  description: "Learn how browsers request documents from servers and how HTML, forms, CSS, and the document tree turn those responses into usable web pages.",
  introVisual: "web",
  objectives: [
    "Distinguish the World Wide Web from the internet that carries its traffic.",
    "Trace an HTTP request and response between a browser and a server.",
    "Build meaningful document structure with HTML elements and attributes.",
    "Use links, images, lists, tables, and semantic elements appropriately.",
    "Explain how forms and query parameters send user input.",
    "Apply CSS selectors and the DOM model to style a responsive page."
  ],
  lessons: [
    {
      title: "The Web, Browsers, Servers, and URLs",
      category: "Web Foundations",
      visual: "web",
      lead: "The web is one service that uses the internet: browsers request named resources, and web servers return representations of those resources.",
      paragraphs: [
        "The internet is the global network infrastructure that moves packets for many services. The World Wide Web is a system of linked resources commonly transferred with HTTP or HTTPS. A browser is a client: it creates requests, receives responses, interprets page resources, and provides controls to the user. A web server listens for requests and chooses a response.",
        "A URL identifies how and where to request a resource. It can include a scheme such as https, a host name, a path, a query string, and a fragment. DNS helps turn the host name into an IP address, while the path identifies a resource within the service. The fragment usually directs the browser to a location inside the returned document and is not normally sent as part of the HTTP request."
      ],
      definitions: [
        { term: "Browser", definition: "A client application that requests, interprets, displays, and lets users interact with web resources." },
        { term: "Web server", definition: "Software that receives web requests and returns responses containing resources or status information." },
        { term: "URL", definition: "A structured address that identifies the scheme, host, path, and optional details for a resource." }
      ],
      examples: [
        "In https://school.example/notes/week1, https is the scheme, school.example is the host, and /notes/week1 is the path.",
        "A browser may request an HTML document and then make more requests for its stylesheet, images, and scripts.",
        "Email and online games also use the internet, but they are not automatically part of the web."
      ],
      analogy: "The internet is the road system, the web is one delivery service using those roads, a URL is an address, and the browser is the customer placing requests.",
      misconception: "The internet and the web are not identical. The web depends on the internet, but the internet supports many other protocols and services.",
      review: [
        "What work does a browser perform after it receives an HTML response?",
        "Identify the scheme, host, and path in a URL you use often."
      ]
    },
    {
      title: "HTTP Requests, Responses, and Status Codes",
      category: "HTTP",
      visual: "web",
      lead: "HTTP is a request-response protocol: the client states what it wants, and the server returns a status, headers, and often a body.",
      paragraphs: [
        "A request includes a method, a target, protocol information, headers, and sometimes a body. GET asks for a representation without intending to change server state. POST commonly sends data for processing or creation. Headers carry metadata such as accepted formats, content type, authentication, caching instructions, and cookies.",
        "A response begins with a status code. Codes in the 200 range report success, 300-range codes handle redirection, 400-range codes describe client-side request problems, and 500-range codes describe server failures. A 404 means the server could not find the requested resource; it does not mean the entire internet is unavailable. Developers inspect requests and responses to understand both behavior and failures."
      ],
      definitions: [
        { term: "HTTP method", definition: "A request action such as GET or POST that describes the client's intended operation." },
        { term: "Header", definition: "Metadata attached to an HTTP request or response." },
        { term: "Status code", definition: "A three-digit response value that summarizes the result of a request." }
      ],
      examples: [
        "200 OK usually means a request succeeded and the requested representation is available.",
        "301 Moved Permanently tells a client that a resource now has a lasting new address.",
        "500 Internal Server Error means the server failed while processing an otherwise received request."
      ],
      analogy: "An HTTP request is like an order form. The response includes an outcome code, delivery notes, and possibly the requested item.",
      misconception: "A 404 response does not prove the network is broken. The browser reached a server, but that server did not find the requested resource.",
      review: [
        "How do request headers differ from the request body?",
        "What broad difference separates 400-range and 500-range status codes?"
      ]
    },
    {
      title: "HTML Structure, Elements, and Attributes",
      category: "HTML",
      visual: "html",
      lead: "HTML describes the meaning and structure of web content so browsers and assistive tools can interpret it consistently.",
      paragraphs: [
        "An HTML document uses elements such as headings, paragraphs, links, and images. Most elements have an opening tag, content, and a closing tag. Nesting shows relationships: a list item belongs inside a list, and page content belongs inside the body. The document head stores metadata and resource links that are not the main visible content.",
        "Attributes add information to an element. A link uses href for its destination, an image uses src for its source and alt for a meaningful text alternative, and a form control can use id to connect with a label. HTML should communicate structure rather than visual appearance. CSS then controls presentation. Valid, semantic structure improves maintenance, keyboard use, search, and accessibility."
      ],
      definitions: [
        { term: "Element", definition: "A structured part of an HTML document represented by a tag, content, and related properties." },
        { term: "Attribute", definition: "A name-value detail attached to an element, such as href, src, id, or alt." },
        { term: "Semantic HTML", definition: "Elements chosen for the meaning and role of their content rather than appearance alone." }
      ],
      examples: [
        "A main heading uses h1 because it names the page, not because its default text is large.",
        "A link uses an a element with an href instead of click behavior on an ordinary paragraph.",
        "Useful alt text describes the purpose or information of an image in its current context."
      ],
      analogy: "HTML is like a document outline with labeled sections. The labels explain whether content is a heading, paragraph, list, navigation area, or form.",
      misconception: "HTML tags are not merely styling shortcuts. Choosing an element only because it looks a certain way can hide meaning from assistive tools and future developers.",
      review: [
        "Why should a page use heading levels in a logical order?",
        "What different jobs do an image's src and alt attributes perform?"
      ]
    },
    {
      title: "Links, Images, Lists, Tables, and Page Landmarks",
      category: "HTML Content",
      visual: "html",
      lead: "Different content structures solve different communication problems, so the best element depends on meaning rather than convenient appearance.",
      paragraphs: [
        "Links connect resources or locations and should describe their destination clearly. Ordered lists communicate sequence or rank, while unordered lists group related items without a required order. Tables represent data with meaningful relationships across rows and columns. Header cells identify those relationships; tables should not be used simply to position a page layout.",
        "Landmark elements such as header, nav, main, aside, and footer describe major page regions. These landmarks help users scan and navigate, especially with assistive technology. Images need dimensions or stable containers to reduce layout movement while loading. When an image is decorative and conveys no content, an empty alt value lets a screen reader skip it."
      ],
      definitions: [
        { term: "Landmark", definition: "A major semantic page region such as navigation, main content, or footer." },
        { term: "Table header", definition: "A th cell that identifies the meaning of a related row or column of data." },
        { term: "Alternative text", definition: "Text that communicates an image's relevant meaning when the image cannot be seen." }
      ],
      examples: [
        "Use an ordered list for installation steps because changing their order can change the result.",
        "Use a table to compare student names, batches, and attendance values across consistent columns.",
        "Use nav for a set of major navigation links and main for the unique central content."
      ],
      analogy: "Semantic landmarks are like signs in a school building. They help people jump directly to the office, library, classroom, or exit.",
      misconception: "A table is not a general-purpose layout grid. Using it for page positioning creates confusing reading order and difficult responsive behavior.",
      review: [
        "When should a list be ordered instead of unordered?",
        "Why do table header cells matter to someone using a screen reader?"
      ]
    },
    {
      title: "Forms, Labels, Query Parameters, and Validation",
      category: "Forms",
      visual: "web",
      lead: "A form collects structured input, gives each value a name, and submits those values to a defined destination using an HTTP method.",
      paragraphs: [
        "Every form control needs a visible label that explains what to enter. A control's name becomes the key sent with its value. With a GET form, values commonly appear in the URL query string, which is useful for searches and shareable filters. Sensitive values should not be placed in a URL because addresses can be stored in history, logs, bookmarks, and referrer information.",
        "Client-side validation can provide quick feedback for missing or incorrectly shaped values, but it is not a security boundary. A user or program can send a request without using the page. The server must validate, authorize, and safely process every submitted value. Good forms also describe errors clearly, preserve valid input, and move focus to useful feedback."
      ],
      definitions: [
        { term: "Form control", definition: "An input, select, textarea, or related element that collects a named value." },
        { term: "Query parameter", definition: "A key-value pair included after the question mark in a URL." },
        { term: "Validation", definition: "Checking whether input meets required format, range, meaning, and authorization rules." }
      ],
      examples: [
        "A search form may send /search?q=hardware so the result URL can be bookmarked.",
        "Selecting a label should focus or activate its associated form control.",
        "The server must reject an unauthorized account update even if the page hid that option."
      ],
      analogy: "A form is like a labeled paper application. Names identify each answer, the action is the receiving office, and the method is the delivery procedure.",
      misconception: "The required attribute and browser validation do not make submitted data trusted. Server-side checks remain necessary for every request.",
      review: [
        "Why are GET query parameters useful for search but poor for passwords?",
        "What must the server do even when the browser has already validated a form?"
      ]
    },
    {
      title: "CSS, Selectors, the DOM, and Responsive Design",
      category: "CSS and DOM",
      visual: "css",
      lead: "CSS applies presentation rules to elements in the document tree, while responsive rules adapt the same meaningful content to different screens and user needs.",
      paragraphs: [
        "When a browser parses HTML, it builds a Document Object Model, or DOM: a tree of nodes representing elements, text, and relationships. CSS selectors match nodes in that tree. A type selector matches an element name, a class selector matches reusable class values, and an ID selector targets a unique identifier. The cascade resolves competing declarations using origin, importance, specificity, and source order.",
        "An external stylesheet keeps repeated design decisions in one place and can be cached across pages. Responsive design uses flexible sizing, grid or flex layout, media queries, and sensible content order. A mobile layout should reorganize interaction, not merely shrink desktop text. Focus indicators, contrast, touch targets, reduced motion preferences, and stable dimensions are parts of usable visual design."
      ],
      definitions: [
        { term: "DOM", definition: "The browser's tree representation of a document and its elements, text, and relationships." },
        { term: "CSS selector", definition: "A pattern that chooses which document elements receive a set of style declarations." },
        { term: "Cascade", definition: "The rules that determine which CSS declaration wins when several declarations target the same property." }
      ],
      examples: [
        "The selector .notice matches every element whose class list includes notice.",
        "A grid can use two columns on a wide screen and one column on a narrow screen.",
        "A visible :focus-visible rule helps keyboard users identify the active control."
      ],
      analogy: "The DOM is a family tree of page parts. A CSS selector states which relatives receive a rule, and the cascade decides which instruction takes priority.",
      misconception: "Responsive design is not achieved by making every desktop item smaller. Content order, navigation, tables, forms, and touch targets may need deliberate layout changes.",
      review: [
        "How does a class selector differ from an ID selector?",
        "Name three decisions that make a mobile layout usable beyond reducing font size."
      ]
    }
  ],
  activity: {
    title: "Plan and Debug a Small Web Page",
    intro: "Use browser-server reasoning and semantic structure to solve three short web-development cases.",
    tasks: [
      {
        title: "Interpret a failed request",
        scenario: "The browser reaches a school server but receives 404 Not Found for /clubs/science.",
        prompt: "Explain what is working and identify the most useful first check.",
        response: "The network and server connection worked. First check whether the path is correct and whether the resource exists at that route.",
        rationale: "A 404 is a server response, so the browser reached the server; the requested resource was not found there."
      },
      {
        title: "Choose meaningful HTML",
        scenario: "A page needs a title, a main navigation area, three ordered setup steps, and a student-data comparison.",
        prompt: "Name suitable semantic elements for all four content needs.",
        response: "Use h1 for the title, nav for major links, ol with li elements for steps, and a table with th and td cells for comparative data.",
        rationale: "Each chosen element communicates the content relationship to browsers, assistive tools, and maintainers."
      },
      {
        title: "Design a mobile form",
        scenario: "A registration form works on desktop but labels wrap poorly and two controls remain side by side on a phone.",
        prompt: "Describe a deliberate mobile correction and one accessibility check.",
        response: "Stack each labeled control in one column, use full-width practical inputs and buttons, and verify that every label is programmatically connected to its control.",
        rationale: "A single-column flow prevents overflow and creates larger touch targets while preserving the meaning of each field."
      }
    ],
    reflection: [
      "Which case depended on protocol knowledge, semantic structure, or responsive interaction design?",
      "How could browser developer tools help verify each proposed solution?"
    ]
  },
  quiz: [
    { category: "Foundations", question: "Which statement best distinguishes the web from the internet?", options: ["The web is a linked-resource service carried over the internet", "The web is the physical cable system beneath every network", "The internet is a browser installed on a web server", "The internet is one HTML document containing all websites"], answer: 0, explanation: "The internet is network infrastructure; the web is one service that uses it." },
    { category: "URLs", question: "In https://portal.example/courses/one, what does /courses/one identify?", options: ["The resource path within the service", "The encryption key for the connection", "The browser application on the device", "The IP packet size chosen by the router"], answer: 0, explanation: "The path identifies a resource or route on the named host." },
    { category: "HTTP", question: "A browser receives 404 Not Found. What is the most accurate interpretation?", options: ["A server responded but did not find that resource", "The browser could not contact any network device", "The request succeeded and returned the expected page", "The server redirected the browser to a new address"], answer: 0, explanation: "A 404 is a server response indicating the target resource was not found." },
    { category: "HTTP", question: "Which part of an HTTP response summarizes whether the request succeeded or failed?", options: ["The three-digit status code", "The final URL fragment", "The page heading level", "The stylesheet class name"], answer: 0, explanation: "The status code reports the general outcome of the request." },
    { category: "HTTP", question: "Which request is the best use of GET?", options: ["Retrieve filtered search results through a shareable URL", "Send a new private password inside the visible URL", "Perform an irreversible payment simply by loading a link", "Bypass server authorization for an account update"], answer: 0, explanation: "GET is appropriate for retrieval, and query parameters make a search state shareable." },
    { category: "HTML", question: "Why should the main page title use an h1 rather than a styled paragraph?", options: ["The heading communicates document structure and meaning", "The heading automatically encrypts the displayed title", "The heading prevents the server from returning errors", "The heading stores the title in a browser cookie"], answer: 0, explanation: "Semantic headings expose the outline and role of content." },
    { category: "HTML", question: "What is the best alt text for an informative chart image?", options: ["Text that communicates the chart's relevant conclusion", "The image file name followed by its pixel count", "A repeated copy of the nearby page heading only", "An empty value even when the chart carries key data"], answer: 0, explanation: "Alternative text should convey the image's purpose or information in context." },
    { category: "HTML", question: "Which structure is most suitable for three installation steps that must stay in order?", options: ["An ordered list containing three list items", "An unordered list containing decorative images", "A table containing one cell for the whole page", "A navigation landmark containing three headings"], answer: 0, explanation: "An ordered list communicates sequence." },
    { category: "Tables", question: "Why should a data table use th cells for its row or column labels?", options: ["They define relationships that assistive tools can announce", "They automatically sort every record in numeric order", "They turn the table into a responsive form control", "They prevent the browser from requesting a stylesheet"], answer: 0, explanation: "Header cells communicate which labels apply to data cells." },
    { category: "Forms", question: "What connects a visible form label to its input most reliably?", options: ["A for value matching the input's unique id", "A class matching the form's HTTP method", "A query string matching the page title", "An alt value matching the submit button"], answer: 0, explanation: "A label's for attribute references the input's id." },
    { category: "Forms", question: "Why should a password not be submitted through a URL query parameter?", options: ["URLs can remain in history, logs, and shared records", "Query parameters cannot contain any text characters", "Browsers always convert query values into public keys", "Servers cannot receive more than one query value"], answer: 0, explanation: "URLs are widely recorded and shared, making them unsuitable for secrets." },
    { category: "Validation", question: "Why must a server validate input after the browser already checked it?", options: ["Requests can be created without using the browser form", "Browser checks permanently modify the server database", "The server cannot read values that include an HTML label", "Client validation automatically grants user authorization"], answer: 0, explanation: "Client controls can be bypassed, so the server must treat every request as untrusted." },
    { category: "CSS", question: "Which selector matches every element with class notice?", options: [".notice", "#notice", "notice()", "@notice"], answer: 0, explanation: "A period introduces a CSS class selector." },
    { category: "DOM", question: "What does the DOM represent in a browser?", options: ["A tree of document nodes and their relationships", "A list of network routes between every server", "A compressed image format used by stylesheets", "A password database shared by all open tabs"], answer: 0, explanation: "The browser builds a tree representation of the parsed document." },
    { category: "Responsive Design", question: "Which change most clearly creates a deliberate mobile layout?", options: ["Reorder content and stack controls into usable touch targets", "Reduce the entire desktop page to half-size text", "Keep a wide table overflowing the whole document", "Hide every navigation link without an alternative control"], answer: 0, explanation: "Responsive design adapts structure and interaction rather than merely scaling text." }
  ],
  summary: {
    intro: "A usable web page is the result of a clear request-response path, meaningful document structure, trustworthy input processing, and adaptive presentation.",
    points: [
      "The web is a linked-resource service that uses internet infrastructure.",
      "HTTP exchanges methods, targets, headers, bodies, and status codes.",
      "HTML communicates the meaning and structure of content through elements and attributes.",
      "Links, lists, tables, images, and landmarks should match the content relationship.",
      "Forms submit named values, while servers remain responsible for validation and authorization.",
      "CSS styles the DOM through selectors, the cascade, and responsive layout rules."
    ],
    review: [
      "Trace a browser request from a URL to an HTTP response.",
      "Describe semantic HTML for a small school information page.",
      "Explain why server validation is required for every form submission.",
      "Plan one desktop-to-mobile layout change and justify it."
    ],
    next: "Continue to Programming to learn how algorithms, variables, conditions, loops, functions, and debugging create the behavior behind software and web services."
  }
};
