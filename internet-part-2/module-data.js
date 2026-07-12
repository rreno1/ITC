window.CC101_MODULE_DATA = {
  id: 'internet-part-2',
  courseTitle: 'Introduction to Computing',
  title: 'Internet Part 2',
  subtitle: 'What Happens When You Open a Website',
  description: 'Follow the complete journey of a webpage - from entering a URL and resolving DNS to establishing secure connections, exchanging HTTP messages, rendering content, and troubleshooting common Internet problems.',
  objectives: [
    'Identify the parts of a URL and distinguish a URL, domain name, website, webpage, web server, and IP address.',
    'Trace DNS resolution through caches, a recursive resolver, root and top-level-domain servers, and an authoritative name server.',
    'Explain the complete journey from entering a URL to receiving and rendering a webpage.',
    'Describe client-server communication and distinguish frontend, backend, static, and dynamic responsibilities.',
    'Interpret HTTP methods, message structure, common status codes, cookies, sessions, and caching behavior.',
    'Explain how HTTPS, TLS, and digital certificates support confidentiality, integrity, and authentication.',
    'Describe browser rendering, web hosting, cloud platforms, content delivery networks, and other Internet services.',
    'Apply practical security habits and explain how Internet standards and governance are distributed among organizations.',
    'Use a systematic sequence and basic diagnostic tools to locate connectivity, DNS, website, and security problems.'
  ],
  lessons: [
    {
      title: 'Anatomy of a URL',
      category: 'Web Addressing',
      visual: 'url',
      lead: 'A URL is a structured address that tells a client what access method to use, which host to contact, and which resource or location to request.',
      paragraphs: [
        'Consider https://www.example.com:443/courses/internet?id=10#review. The scheme https identifies the access protocol; www is a subdomain; example.com is the registered domain name; com is the top-level domain; 443 is an explicitly stated port; /courses/internet is the path; id=10 is the query string; and review is the fragment. A browser uses these parts for different jobs, so they should not be treated as one unstructured label.',
        'A domain name is the human-readable name associated with an Internet service, while an IP address identifies a network destination used to route packets. A web server is the system or software responding to web requests. A website is a related collection of resources and webpages, and a webpage is one document or application view within that site. A URL can identify a particular webpage, image, download, API endpoint, or other resource.',
        'Some URL parts may be omitted because defaults apply. HTTPS normally uses port 443 and HTTP normally uses port 80, so browsers rarely display those ports. A query string is sent to the server as part of the request target, while a fragment normally tells the browser where to move within the returned document and is not sent in the HTTP request. Students should interpret these parts, not memorize every possible scheme or top-level domain.'
      ],
      definitions: [
        { term: 'URL', definition: 'A Uniform Resource Locator that identifies how and where a client can access a resource.' },
        { term: 'Domain name', definition: 'A human-readable name that DNS can map to information used to locate an Internet service.' },
        { term: 'Path', definition: 'The portion of a URL that identifies a resource location within the selected host.' },
        { term: 'Query string and fragment', definition: 'A query supplies request parameters after ?, while a fragment identifies a position or state after # within the client.' }
      ],
      examples: [
        'In https://school.example.org/library, https is the scheme, school is a subdomain, example.org is the domain, and /library is the path.',
        'In https://example.com/search?q=network, q=network supplies a search parameter to the service.',
        'In https://example.com/guide#dns, #dns can move the browser to the DNS section after the guide loads.'
      ],
      analogy: 'A URL is like a complete delivery instruction: the scheme is the transport method, the domain is the building name, the port is a service entrance, the path is the room, and the query is a note about what is needed.',
      misconception: 'A URL, domain name, website, webpage, server, and IP address are related but are not interchangeable names for the same thing.',
      review: [
        'Label every part of https://www.example.com:443/courses/internet?id=10#review and state its purpose.',
        'How do a domain name, IP address, web server, website, and webpage differ?'
      ]
    },
    {
      title: 'Domain Name System',
      category: 'Name Resolution',
      visual: 'dns',
      lead: 'DNS is a distributed naming system that translates human-readable domain names into records computers use to locate and operate Internet services.',
      paragraphs: [
        'When a browser needs an address for a domain, it first benefits from any valid answer stored in the browser or operating-system cache. If no suitable cached answer exists, the device normally asks a recursive DNS resolver, often supplied by an ISP, organization, or public DNS provider. The resolver performs the remaining lookup work and returns the answer to the device.',
        'If the resolver also lacks a cached answer, it can ask a root name server where to find the appropriate top-level-domain server. The TLD server points toward the authoritative name server for the domain, and the authoritative server returns the requested record, such as an IPv4 or IPv6 address. The result is temporarily cached according to its allowed lifetime, reducing repeated queries and making later visits faster.',
        'DNS stores more than website addresses. An A record maps a name to an IPv4 address, AAAA to IPv6, CNAME creates an alias, MX identifies mail handling, NS identifies authoritative name servers, and TXT stores text used for such purposes as verification and email policy. At this level, students should recognize record purposes and the lookup path rather than configure an entire DNS zone.'
      ],
      definitions: [
        { term: 'Recursive resolver', definition: 'A DNS service that accepts a client query and obtains or returns the requested answer on the client\'s behalf.' },
        { term: 'Authoritative name server', definition: 'A server that provides official DNS records for a domain or DNS zone.' },
        { term: 'DNS cache', definition: 'Temporary storage of DNS answers that reduces lookup time and repeated network queries.' },
        { term: 'DNS record', definition: 'A typed entry such as A, AAAA, CNAME, MX, NS, or TXT stored in the Domain Name System.' }
      ],
      examples: [
        'An A record may map portal.example.edu to 192.0.2.25, while an AAAA record maps it to an IPv6 address.',
        'An MX record directs email delivery toward the mail servers responsible for a domain.',
        'A second visit can resolve more quickly when a still-valid answer exists in a browser, operating-system, or resolver cache.'
      ],
      analogy: 'DNS resembles a distributed directory service: the resolver is a librarian who follows referrals from the main index to the correct section and finally to the official record keeper.',
      misconception: 'DNS does not store only one permanent IP address for every website; it stores several record types, and answers can change or expire.',
      review: [
        'Trace an uncached DNS lookup from the device through the recursive resolver to the authoritative answer.',
        'What different jobs do A or AAAA, CNAME, MX, NS, and TXT records perform?'
      ]
    },
    {
      title: 'Complete Journey of a Web Request',
      category: 'End-to-End Web Journey',
      visual: 'webjourney',
      lead: 'Opening a webpage is an end-to-end sequence that combines URL interpretation, DNS, routing, transport, TLS, HTTP, server processing, resource downloads, and browser rendering.',
      paragraphs: [
        'The browser first interprets the URL and checks relevant local caches. If it needs a network address, DNS resolves the domain name. The device prepares packets and sends traffic through its default gateway. Routers in the ISP and other independently operated networks forward those packets toward the destination using IP addressing and routing decisions; there is no single central router for the Internet.',
        'A transport conversation is then established with the destination service. Web traffic commonly uses TCP, although modern HTTP can also use a transport built on UDP. For HTTPS, the client and server create a TLS session, validate certificate information, agree on secure communication, and then exchange HTTP messages. The browser sends a request, and the web or application server processes it, possibly consulting services or databases before returning an HTTP response.',
        'The first response is often HTML rather than a finished page image. The browser parses it and requests referenced CSS, JavaScript, images, fonts, and other data, sometimes from several servers or a content delivery network. It builds page structures, calculates layout, executes appropriate scripts, and renders pixels. Additional API requests may continue after the first visible content appears, so page loading is a coordinated sequence rather than one file moving directly from a website into a screen.'
      ],
      definitions: [
        { term: 'Web request journey', definition: 'The ordered interaction of naming, routing, transport, security, HTTP, server processing, and rendering needed to display a web resource.' },
        { term: 'Default gateway', definition: 'The router a device uses to send packets toward destinations outside its local network.' },
        { term: 'Transport connection', definition: 'Endpoint communication established or managed by a transport protocol before or while application data is exchanged.' },
        { term: 'Resource', definition: 'An item such as HTML, CSS, JavaScript, an image, a font, or API data requested by a client.' }
      ],
      examples: [
        'Entering a new HTTPS URL may cause DNS queries, a transport handshake, a TLS exchange, an HTTP request, and many later resource requests.',
        'A page can show text first while large images and a remote font are still downloading.',
        'One webpage may receive HTML from the main server, images from a CDN, and live data from an API service.'
      ],
      analogy: 'Loading a webpage is like producing a stage performance: finding the venue, traveling there, checking identity and secure access, requesting the script, collecting props from several suppliers, and assembling everything on stage.',
      misconception: 'Typing a URL does not make the browser download one complete picture of a webpage; it coordinates several protocols and often requests many separate resources.',
      review: [
        'Trace the complete sequence from typing an uncached HTTPS URL to seeing the rendered page.',
        'Where are DNS, IP, routing, a transport protocol, TLS, HTTP, servers, and browser rendering involved?'
      ]
    },
    {
      title: 'Client-Server Communication',
      category: 'Web Architecture',
      visual: 'web',
      lead: 'In the client-server model, a client initiates a request and a server listens for, processes, and responds to requests from many clients.',
      paragraphs: [
        'A web browser is a common client: it chooses a destination and requests a resource or action. A server is not necessarily one physical machine; it is a role performed by software and infrastructure that listens for requests. One server service can respond to many clients, and a large website can distribute work among many servers in different locations.',
        'The frontend is the part presented to and interacted with by the user, including page structure, styling, and browser behavior. The backend performs server-side work such as applying rules, checking authorization, retrieving or changing data, and building responses. A web server may handle HTTP and static files, an application server may execute service logic, and a database may store organized data.',
        'A static website can return prepared files that are largely the same for every visitor. A dynamic website generates or changes output according to user input, stored data, time, or other conditions. Even a visually simple page can depend on authentication, analytics, payment, media, or API services, so the communication model often contains several cooperating clients and servers without requiring students to turn this lesson into a programming exercise.'
      ],
      definitions: [
        { term: 'Client', definition: 'A device or application that initiates a request for a resource or service.' },
        { term: 'Server', definition: 'A system or program that listens for requests and provides resources, processing, or services.' },
        { term: 'Frontend', definition: 'The user-facing part of a web experience processed and presented by the client.' },
        { term: 'Backend', definition: 'The server-side systems that apply logic, manage access, communicate with data stores, and create responses.' }
      ],
      examples: [
        'A browser requests a school handbook PDF, and a web server returns the prepared static file.',
        'A grade portal sends login information to a backend, which checks authorization before requesting student records from a database.',
        'A news site can serve common layout files while generating a personalized article list for each signed-in reader.'
      ],
      analogy: 'A client-server exchange is like a diner and a restaurant: the diner places a request, the front counter receives it, the kitchen performs hidden work, and the completed response is returned.',
      misconception: 'A server is not defined by being a huge computer in one room; server describes a role, and one website may use many physical or virtual systems.',
      review: [
        'Explain how a client, web server, application server, and database could cooperate during a portal login.',
        'How do static and dynamic websites differ, and which frontend or backend responsibilities might each use?'
      ]
    },
    {
      title: 'HTTP Fundamentals',
      category: 'Request and Response',
      visual: 'http',
      lead: 'HTTP is an application-layer request-response protocol used by clients and servers to exchange web resources and actions.',
      paragraphs: [
        'An HTTP request contains a method, request target, protocol version, headers, and sometimes a body. For example, GET /modules/internet HTTP/1.1 requests a resource, while a Host header identifies the intended host. The response begins with a version and status such as HTTP/1.1 200 OK, includes headers such as Content-Type: text/html, and may include the returned representation in its body.',
        'GET retrieves a representation, POST commonly submits data or starts processing, PUT replaces a resource representation, PATCH applies a partial change, and DELETE requests removal. Actual service behavior is defined by the application, so the method communicates intent rather than performing work by itself. Students should recognize these common methods without memorizing every method defined by HTTP.',
        'Status codes summarize the result: 100-199 are informational, 200-299 successful, 300-399 redirection, 400-499 client-side errors, and 500-599 server-side errors. Useful examples are 200 OK, 301 Moved Permanently, 403 Forbidden, 404 Not Found, 500 Internal Server Error, and 503 Service Unavailable. A status code is evidence for diagnosis, but the message body and surrounding request still provide important context.'
      ],
      definitions: [
        { term: 'HTTP method', definition: 'A request verb such as GET, POST, PUT, PATCH, or DELETE that communicates the intended operation.' },
        { term: 'HTTP header', definition: 'A named field carrying metadata about a request, response, client, server, or representation.' },
        { term: 'Status code', definition: 'A three-digit response code indicating the general and specific result of an HTTP request.' },
        { term: 'Message body', definition: 'The optional content carried after HTTP headers, such as submitted form data, HTML, or JSON.' }
      ],
      examples: [
        'GET /images/map.png asks the server for an image resource.',
        'A response with 301 and a Location header directs the client toward the resource\'s permanent new URL.',
        'A 404 means the requested resource was not found at that location, while a 503 means the service is currently unavailable.'
      ],
      analogy: 'An HTTP request is an order form containing an action, address, notes, and sometimes supplied material; the response is the fulfillment package with a result label, description, and content.',
      misconception: 'A 404 does not mean the entire Internet connection is broken, and a 500 does not automatically mean the user entered something incorrectly.',
      review: [
        'Identify the method, target, headers, status, and body in a simple HTTP request-response exchange.',
        'How do 200, 301, 403, 404, 500, and 503 guide a troubleshooting decision?'
      ]
    },
    {
      title: 'HTTP State, Cookies, and Caching',
      category: 'Continuity and Performance',
      visual: 'state',
      lead: 'HTTP requests are generally independent, so websites use cookies, sessions, tokens, and caches to maintain continuity and avoid unnecessary work.',
      paragraphs: [
        'Because one HTTP request does not automatically remember earlier requests, a server needs an additional way to connect activity across a visit. A cookie is a small piece of data a site asks a browser to store and return under defined conditions. A session commonly keeps important state on the server and associates it with a session identifier, while an authentication token can carry or refer to evidence that a user has authenticated.',
        'State supports legitimate features such as login persistence, remembering language preferences, and keeping items in a shopping cart. It can also be used for measurement or tracking across activity, so privacy depends on what is stored, who receives it, how long it lasts, and whether the user has meaningful control. Sensitive state should use appropriate security protections and should not be treated as trustworthy merely because it arrived from a browser.',
        'Caching stores reusable responses or resources closer to where they will be needed. A browser cache can reuse a local image or stylesheet, while a server cache or intermediary cache can reduce origin-server work. Cache expiration and validation rules determine when stored content can be reused or must be checked. Caching can speed pages and reduce transferred data, but an outdated cache can also explain why a user temporarily sees an older version.'
      ],
      definitions: [
        { term: 'Cookie', definition: 'A small piece of site-associated data stored by a browser and returned with eligible later requests.' },
        { term: 'Session', definition: 'A mechanism that associates a sequence of requests with server-managed state, commonly through an identifier.' },
        { term: 'Authentication token', definition: 'Data that represents or refers to authenticated access and is presented with eligible requests.' },
        { term: 'Cache', definition: 'Temporary storage that allows a reusable response or resource to be served without repeating all original work.' }
      ],
      examples: [
        'A session identifier lets a shopping service retrieve the cart associated with later requests.',
        'A language-preference cookie can ask a site to present Filipino or English on the next visit.',
        'A browser may reuse a cached logo while validating whether the main HTML page has changed.'
      ],
      analogy: 'State is like a claim ticket that connects separate visits to the same service; caching is like keeping a frequently used copy nearby instead of fetching a new one every time.',
      misconception: 'Cookies are not automatically viruses: they are data rather than executable malware, although they can still be used for unwanted tracking or handled insecurely.',
      review: [
        'How can cookies, sessions, and authentication tokens help independent HTTP requests act like one continuing visit?',
        'What performance benefit and what possible problem can caching create?'
      ]
    },
    {
      title: 'HTTPS, TLS, and Certificates',
      category: 'Secure Web Communication',
      visual: 'tls',
      lead: 'HTTPS uses TLS to protect HTTP communication through confidentiality, integrity, and server authentication.',
      paragraphs: [
        'Confidentiality makes intercepted traffic difficult to read without the necessary keys. Integrity helps endpoints detect whether protected information was modified in transit. Authentication helps the browser verify that it is communicating with a server authorized for the requested domain. These protections work together; encryption alone would not answer every identity or tampering problem.',
        'During TLS setup, the server presents a digital certificate containing identity and public-key information. The browser checks such details as the domain name, validity period, and whether the certificate chains to a certificate authority it trusts. The endpoints then establish keys for protected communication. Students need the purpose and decision process, not cryptographic mathematics.',
        'A browser padlock or HTTPS indicator means the connection to that identified domain is protected; it does not prove the organization is honest, the content is accurate, or a purchase is wise. A fake or harmful site can obtain a valid certificate for its own domain. Certificate expiration, a domain mismatch, or an untrusted issuer should trigger a warning because the browser cannot complete its normal identity checks.'
      ],
      definitions: [
        { term: 'TLS', definition: 'Transport Layer Security, the protocol that protects HTTPS communication between endpoints.' },
        { term: 'Digital certificate', definition: 'A signed electronic document that binds identity information, such as a domain, to public-key information.' },
        { term: 'Certificate authority', definition: 'An organization trusted by browsers or operating systems to validate and sign digital certificates.' },
        { term: 'Confidentiality, integrity, and authentication', definition: 'Protection against easy reading, detection of modification, and verification of the communicating identity.' }
      ],
      examples: [
        'HTTPS can protect a password from simple reading while it travels between a browser and the correctly identified server.',
        'A certificate for another domain should trigger a warning because its identity does not match the requested site.',
        'A phishing site can display HTTPS for its own deceptive domain, so the user must still inspect the address and purpose.'
      ],
      analogy: 'TLS is like using a tamper-evident locked courier case after checking the recipient\'s official identification: the contents are concealed, changes can be detected, and the endpoint is checked.',
      misconception: 'HTTPS protects the connection; it does not certify that every claim, product, file, or person on the site is trustworthy.',
      review: [
        'Explain how confidentiality, integrity, and authentication address three different communication risks.',
        'What certificate checks can a browser perform, and why can a securely connected site still be malicious?'
      ]
    },
    {
      title: 'Browsers and Webpage Rendering',
      category: 'From Resources to Pixels',
      visual: 'rendering',
      lead: 'Receiving an HTML response begins the construction of a webpage; the browser must interpret, retrieve, calculate, execute, and render many related resources.',
      paragraphs: [
        'The browser parses HTML to understand the document structure and discovers links to stylesheets, scripts, images, fonts, and other resources. It downloads required files through additional requests, potentially using cached copies when valid. CSS supplies presentation rules, JavaScript can change content or behavior, images and fonts provide visual assets, and API responses can supply later data.',
        'The browser builds internal structures representing the document and its styles, determines which elements are visible, calculates their sizes and positions, and paints the result into pixels. Scripts can modify these structures and trigger more layout or painting. Resource size, network delay, script work, image decoding, and device processing can each affect when the page becomes visible and responsive.',
        'A single webpage often depends on multiple origins. The main HTML may come from the site\'s web server, a font from a font service, an image from a CDN, and interactive data from an API. Browser developer tools reveal these requests, their status codes, timing, transfer sizes, and cache behavior, turning an apparently simple page into observable evidence of the underlying process.'
      ],
      definitions: [
        { term: 'HTML parsing', definition: 'Interpreting HTML markup to build an internal representation of document structure.' },
        { term: 'Layout', definition: 'Calculating the size and position of visual page elements before they are drawn.' },
        { term: 'Rendering', definition: 'The browser process that turns resources, structures, styles, and calculations into visible pixels.' },
        { term: 'Developer tools', definition: 'Browser inspection features that expose documents, requests, status, timing, storage, scripts, and rendering evidence.' }
      ],
      examples: [
        'The first HTML response can reference five stylesheets, eight scripts, twenty images, and two font files.',
        'A page may display basic text before a large image finishes because resources complete at different times.',
        'The Network tab can show whether an image returned 200, was reused from cache, or failed with 404.'
      ],
      analogy: 'HTML is an assembly plan rather than a finished building; the browser gathers materials, interprets instructions, calculates placement, and constructs the visible result.',
      misconception: 'Downloading HTML is not the same as completing a webpage, because the browser may still need many resources, calculations, scripts, and API responses.',
      review: [
        'Describe the browser\'s work from receiving HTML through parsing, resource downloads, layout, scripting, and rendering.',
        'What evidence can the Network tab provide about a slow, incomplete, or cached webpage?'
      ]
    },
    {
      title: 'Hosting, Cloud Services, and CDNs',
      category: 'Reliable Web Delivery',
      visual: 'hosting',
      lead: 'Websites combine registration, DNS, hosting, cloud infrastructure, distribution, and redundancy so resources remain reachable under changing demand and failures.',
      paragraphs: [
        'A domain registrar manages registration of a domain name, while DNS hosting publishes the domain\'s records. Web hosting stores and serves the site or application. Shared hosting places several customers on common infrastructure; a virtual private server provides a more isolated virtual system; and cloud platforms provide configurable computing, storage, networking, databases, or managed services across data centers.',
        'A content delivery network places cached copies or delivery servers near users in multiple geographic locations. This can reduce latency, move repeated traffic away from the origin, and absorb high demand. A CDN does not replace every origin responsibility: dynamic or personalized work may still reach application systems, and cached content needs appropriate freshness and invalidation rules.',
        'Load balancing distributes requests among healthy service instances. Replication keeps multiple copies of data or services, while redundancy ensures alternatives exist when one component fails. These techniques can improve availability and scale, but they require monitoring and planning. A website may continue operating after one server fails because another instance, location, or cached copy can respond.'
      ],
      definitions: [
        { term: 'Web hosting', definition: 'Infrastructure and services that store, execute, and deliver website or web-application resources.' },
        { term: 'Cloud platform', definition: 'On-demand computing, storage, networking, database, and managed services delivered from provider infrastructure.' },
        { term: 'Content delivery network', definition: 'A distributed system that serves cached or proxied content from locations closer to users.' },
        { term: 'Load balancing and redundancy', definition: 'Distributing work across healthy resources and maintaining alternatives so one failure does not stop the whole service.' }
      ],
      examples: [
        'A registrar records ownership information while separate DNS hosting points www.example.com toward the hosting service.',
        'A student in Manila may receive a popular image from a nearby CDN location instead of a distant origin data center.',
        'A load balancer can stop sending new requests to a failed application instance while other instances continue serving users.'
      ],
      analogy: 'A resilient website is like a store chain with a directory listing, warehouses, nearby branches, a dispatcher, and spare stock; no single counter must serve every customer.',
      misconception: 'A domain registration does not by itself include a working website, and cloud or CDN use does not automatically eliminate outages.',
      review: [
        'Distinguish the roles of a registrar, DNS host, web host, cloud platform, and CDN.',
        'How do load balancing, replication, and redundancy help a busy service survive demand or failure?'
      ]
    },
    {
      title: 'Other Internet Services',
      category: 'Beyond the Web',
      visual: 'services',
      lead: 'The Web is one Internet service among many; email, file transfer, remote access, calls, streaming, messaging, cloud storage, gaming, and connected devices use the same network infrastructure in different ways.',
      paragraphs: [
        'Email commonly uses SMTP to submit and transfer outgoing mail, while IMAP or POP lets users access received mail in different ways. FTP is a traditional file-transfer protocol, SFTP provides file transfer through secure SSH, and SSH also supports protected remote command-line access. These services have their own application protocols even though their packets travel through IP networks.',
        'Voice over IP (VoIP) and video calls use real-time media techniques that are sensitive to delay, jitter, and packet loss. Streaming services maintain a playback buffer and can adapt quality to available throughput. Messaging may use persistent connections and push notifications so updates arrive quickly, while online gaming combines matchmaking services with latency-sensitive game traffic.',
        'Cloud storage synchronizes local and remote copies and must handle conflicts, authorization, and intermittent connections. Internet of Things systems connect sensors, appliances, vehicles, and controllers, expanding both useful automation and security responsibilities. Understanding the service requirement explains why different applications select different protocols and prioritize reliability, latency, throughput, or power use differently.'
      ],
      definitions: [
        { term: 'Email protocols', definition: 'Application protocols such as SMTP for sending and IMAP or POP for accessing received messages.' },
        { term: 'Remote access', definition: 'Using a network service such as SSH to operate or administer another computer from a distance.' },
        { term: 'Streaming', definition: 'Delivering media for playback while later portions continue arriving, commonly with buffering and adaptive quality.' },
        { term: 'Internet of Things', definition: 'A network of connected sensors, devices, appliances, and controllers that exchange data or actions.' }
      ],
      examples: [
        'An email application submits a message through SMTP and synchronizes a mailbox through IMAP.',
        'A video service lowers stream quality when available throughput falls so the playback buffer is less likely to empty.',
        'An online game may prioritize low latency for player actions while cloud storage prioritizes correct synchronized files.'
      ],
      analogy: 'The Internet is a shared transport system carrying many kinds of service: the Web is one route, while email, calls, storage, games, and devices are other routes with different schedules and cargo needs.',
      misconception: 'The Internet and the World Wide Web are not the same; the Web operates on Internet infrastructure alongside many other services.',
      review: [
        'Match email, secure file transfer, remote access, calls, streaming, messaging, cloud storage, gaming, and IoT to their key protocols or performance needs.',
        'Why might a video call and a cloud backup make different transport or performance tradeoffs?'
      ]
    },
    {
      title: 'Basic Internet Security',
      category: 'Practical Digital Safety',
      visual: 'threats',
      lead: 'Internet safety depends on recognizing manipulation and malicious software, reducing account and device exposure, and maintaining recoverable, updated systems.',
      paragraphs: [
        'Phishing uses deceptive messages or sites to steal information or persuade a victim to act, while social engineering more broadly manipulates people rather than relying only on technical flaws. Malware is harmful software that can steal, damage, spy, encrypt, or abuse resources. Fake websites may copy trusted branding, use look-alike domains, or create false urgency, so users should verify the sender, URL, request, and destination through an independent channel.',
        'Use a unique strong password for each service and a trusted password manager when available; password reuse turns one breach into many account risks. Multi-factor authentication adds another required factor and is especially valuable for important accounts. Install software updates for operating systems, browsers, and applications; download software from verified sources; review browser permissions; and use firewalls to limit traffic according to rules.',
        'Public Wi-Fi can expose users to untrusted networks, so avoid bypassing certificate warnings and use protected services. Encryption and a reputable VPN can protect traffic in specific ways but do not make every site, download, or decision safe. Backups provide recovery after device loss, failure, accidental deletion, or ransomware. Incognito mode mainly limits selected local browsing records; antivirus cannot prevent every attack; and HTTPS does not prove a business is legitimate.'
      ],
      definitions: [
        { term: 'Phishing and social engineering', definition: 'Deceptive techniques that manipulate people into revealing information, granting access, sending money, or running harmful actions.' },
        { term: 'Malware', definition: 'Software intentionally designed to harm, spy on, disrupt, extort, or gain unauthorized access.' },
        { term: 'Multi-factor authentication', definition: 'Account protection requiring factors from at least two different categories of evidence.' },
        { term: 'Backup', definition: 'A separate recoverable copy of important data protected against loss, damage, or compromise of the original.' }
      ],
      examples: [
        'A message claiming immediate account closure links to examp1e.com instead of example.com; the user independently opens the official app rather than clicking.',
        'A password manager creates different strong passwords, so a breach of one service does not reveal the same password elsewhere.',
        'A browser camera permission is allowed only for a trusted meeting site and removed when it is no longer needed.'
      ],
      analogy: 'Internet security is layered home safety: identity checks, different locks, maintained doors, controlled permissions, cautious visitors, and a separate copy of valuables each address a different failure.',
      misconception: 'Incognito mode, a VPN, HTTPS, or antivirus is not an invisibility or safety guarantee; each tool has a limited purpose and must be combined with sound judgment.',
      review: [
        'Evaluate a suspicious login message using sender, URL, urgency, requested action, and independent verification.',
        'Create a layered account and device protection plan using unique passwords, MFA, updates, permissions, secure downloads, a firewall, and backups.'
      ]
    },
    {
      title: 'Internet Governance and Standards',
      category: 'A Distributed Internet',
      visual: 'governance',
      lead: 'No single company owns the entire Internet; technical coordination, number and name administration, connectivity, laws, and individual services are distributed among many organizations.',
      paragraphs: [
        'The Internet Engineering Task Force develops many open technical standards through collaborative work. Its RFC documents contain protocol specifications, operational guidance, and other technical records. Standards allow equipment and software built by different organizations to communicate, but the IETF does not operate every network or control every website.',
        'ICANN coordinates important parts of the global domain-name system, while regional Internet registries distribute Internet number resources such as IP address blocks within their regions. Internet service providers connect customers and networks. Website, cloud, and data-center operators manage their own services and infrastructure, and organizations exchange traffic through commercial arrangements and Internet exchange points.',
        'Governments create laws and telecommunications regulations within their jurisdictions, but legal authority is not the same as owning the global network. The Internet works through interoperable standards, distributed routing, independently operated networks, administrative coordination, and agreements. Students need this distributed mental model rather than detailed governance procedures or historical protocol memorization.'
      ],
      definitions: [
        { term: 'IETF and RFC', definition: 'The IETF develops many Internet standards, and RFC documents publish technical specifications and guidance.' },
        { term: 'ICANN', definition: 'The organization that coordinates important identifiers and functions of the global domain-name system.' },
        { term: 'Regional Internet registry', definition: 'An organization that distributes and records Internet number resources within a geographic region.' },
        { term: 'Internet service provider', definition: 'An organization that supplies customers or other networks with Internet connectivity.' }
      ],
      examples: [
        'An HTTP implementation can follow published standards so browsers and servers from different developers interoperate.',
        'A regional registry allocates Internet number resources, while an ISP uses assigned resources to provide connectivity.',
        'A government can regulate telecommunications in its jurisdiction without becoming the owner of all international networks.'
      ],
      analogy: 'The Internet resembles international transportation: standards define compatible signs and procedures, authorities coordinate identifiers, operators run their own routes, and governments enforce laws in their territories.',
      misconception: 'ICANN, an ISP, a cloud company, or a government may control an important part, but no one of them owns or centrally routes the entire Internet.',
      review: [
        'Compare the roles of the IETF, ICANN, regional Internet registries, ISPs, governments, and service operators.',
        'Why do shared standards and distributed administration allow the Internet to work without one central owner?'
      ]
    },
    {
      title: 'Troubleshooting Internet Problems',
      category: 'Evidence-Based Diagnosis',
      visual: 'troubleshooting',
      lead: 'Systematic troubleshooting starts with the nearest simple dependency, changes one thing at a time, and uses observations to separate local, addressing, routing, DNS, and service failures.',
      paragraphs: [
        'Begin by checking power, cables, indicators, Wi-Fi or Ethernet connection, and airplane-mode or adapter state. Confirm that the device received an IP address, network prefix, default gateway, and DNS server. Then test the local gateway. This sequence establishes whether the problem is physical, local, or related to automatic network configuration before investigating distant services.',
        'Next test communication using a known IP address, then test DNS resolution, and finally test the intended website or service. If an IP destination works but a domain name does not, DNS is a likely area to investigate. If one website fails while others work, inspect its URL, HTTP error, certificate warning, and service status. Compare another device or network to determine whether the symptom follows the device, local network, account, or remote service.',
        'On Windows, ipconfig /all displays assigned configuration, ping can test whether a target responds and measure round-trip time, nslookup asks for DNS information, and tracert shows visible router hops toward a destination. Some systems legitimately block ping or hide hops, so absence of a reply is evidence rather than final proof. Restart only when there is a reason, record exact errors and observations, avoid unsafe certificate bypasses, and document the change that solved the problem.'
      ],
      definitions: [
        { term: 'Systematic troubleshooting', definition: 'A repeatable process that tests dependencies in order, uses evidence, and changes one relevant factor at a time.' },
        { term: 'ipconfig /all', definition: 'A Windows command that displays detailed network adapter configuration, including addresses, gateway, and DNS servers.' },
        { term: 'ping and tracert', definition: 'Tools that test target responses and reveal visible route hops, while recognizing that filtering can limit their results.' },
        { term: 'nslookup', definition: 'A diagnostic tool that queries DNS and displays returned name or address information.' }
      ],
      examples: [
        'The gateway responds and ping 8.8.8.8 works, but nslookup example.com fails, making DNS configuration or resolution the next focus.',
        'Only one site returns 503 on two devices and two networks, suggesting a remote service problem rather than local Wi-Fi.',
        'A laptop has no valid assigned address while another device works on the same Wi-Fi, so its adapter or DHCP process should be checked.'
      ],
      analogy: 'Troubleshooting is like tracing water from a faucet back through valves and pipes: test the nearest connection first, then move outward until the first failed stage identifies the likely region.',
      misconception: 'Restarting everything or repeatedly copying commands is not a diagnosis; each action should test a reasoned possibility, and each result must be interpreted.',
      review: [
        'Design a step-by-step diagnosis for a device that opens websites by IP address but not by domain name.',
        'What can ipconfig /all, ping, nslookup, and tracert reveal, and what limitations prevent any single result from proving the whole cause?'
      ]
    }
  ],
  activity: {
    title: 'Trace, Inspect, Secure, and Troubleshoot a Website Request',
    intro: 'Use a flowchart and browser evidence to explain the complete web journey, then apply security judgment and a systematic diagnostic sequence to realistic Internet problems.',
    tasks: [
      {
        title: 'Trace a Website Request flowchart',
        scenario: 'A user enters https://www.example.com/courses/internet in a browser for the first time on a school network.',
        prompt: 'Create and annotate a flowchart containing User -> Browser -> DNS -> Router -> ISP -> Internet routers -> Web server -> HTTP response -> Browser rendering. Mark where the URL, cache, domain name, DNS records, IP, default gateway, TCP or UDP, port 443, TLS and its certificate, HTTP, additional resources, and rendering are involved.',
        response: 'Submit a clear directional flowchart plus a short narration that explains every transition from the user action through the visible page. Distinguish DNS from routing, transport from HTTP, and the first HTML response from later resource requests.',
        rationale: 'The flowchart unifies the module around one correct mental model instead of treating protocols as unrelated vocabulary.'
      },
      {
        title: 'Browser DevTools Network laboratory',
        scenario: 'A webpage looks like one object, but the browser may assemble it from many resources and more than one server.',
        prompt: 'Open browser developer tools and the Network tab before loading an instructor-approved website. Identify the main HTML request; find CSS, JavaScript, image, and font requests; record representative URLs, methods, status codes, domains, transferred size, resource size, and timing; count the requests; then reload and observe which items use caching.',
        response: 'Submit a labeled evidence table and screenshots that compare the first load with the reload. Explain at least one status code, one size difference, one cross-domain resource, and one cache result without exposing private tokens, cookie values, or account information.',
        rationale: 'Developer tools turn the invisible request-response and rendering sequence into observable evidence while reinforcing safe handling of sensitive browser data.'
      },
      {
        title: 'Systematic connectivity and DNS troubleshooting practice',
        scenario: 'A student reports, "The Internet is broken," but the actual failure could be local connection, address configuration, gateway access, DNS, or one remote service.',
        prompt: 'Follow the sequence: check power and physical or wireless connection; inspect ipconfig /all; identify the private address, gateway, and DNS server; ping the gateway; run ping 8.8.8.8; run ping example.com; use nslookup example.com; run tracert example.com; compare another website, device, or network; and record each observation before any justified restart.',
        response: 'Complete a troubleshooting log with hypothesis, command or check, result, interpretation, and next step. Conclude which layer or service is most likely responsible and state what additional evidence would confirm it.',
        rationale: 'An evidence-based sequence isolates the first failing dependency and prevents random changes from hiding the cause.'
      },
      {
        title: 'Security and trust decision practice',
        scenario: 'A message claims that a school account will be deleted unless the student signs in through an urgent link on public Wi-Fi.',
        prompt: 'Inspect the sender and URL structure, compare the domain with the official service, explain what HTTPS and its certificate do and do not prove, identify phishing or social-engineering signals, and choose safe verification steps. Then propose unique-password, MFA, update, permission, firewall, secure-download, and backup protections.',
        response: 'Submit a risk assessment that separates connection security from website legitimacy, rejects unsafe warning bypasses, identifies an independent verification channel, and recommends layered controls appropriate to the situation.',
        rationale: 'Practical security requires both a correct protocol model and human judgment about identity, requests, software, accounts, and recovery.'
      }
    ],
    reflection: [
      'Which DevTools observation most clearly demonstrated that a webpage is assembled from multiple requests?',
      'At what point in your troubleshooting sequence could you first distinguish a DNS problem from a general connectivity problem?',
      'Which security indicator is useful but easiest to overinterpret, and what extra verification is needed?'
    ]
  },
  quiz: [
    {
      category: 'URL Anatomy',
      question: 'In https://www.example.com:443/courses?id=10#review, which statement is correct?',
      options: ['www is the scheme and https is the domain', '443 is the port and /courses is the path', 'id=10 is the top-level domain', '#review is always sent to the server as a DNS record'],
      answer: 1,
      explanation: 'The explicit port is 443 and /courses is the path; https is the scheme, example.com is the domain, id=10 is the query, and review is the fragment.'
    },
    {
      category: 'DNS',
      question: 'A recursive resolver has no cached answer for a domain. Which sequence best describes the referral path?',
      options: ['Authoritative server -> browser -> switch -> root', 'Web server -> certificate authority -> TLD server', 'Root server -> TLD server -> authoritative name server', 'Default gateway -> HTTP status code -> browser fragment'],
      answer: 2,
      explanation: 'The resolver follows referrals from a root server to the relevant TLD server and then to an authoritative server for the domain.'
    },
    {
      category: 'DNS Records',
      question: 'Which DNS record type most directly identifies mail servers responsible for receiving a domain\'s email?',
      options: ['MX', 'AAAA', 'CNAME', 'TXT'],
      answer: 0,
      explanation: 'An MX record identifies mail exchange servers; A and AAAA identify IP addresses, CNAME is an alias, and TXT stores text.'
    },
    {
      category: 'Web Journey',
      question: 'After DNS returns the server address for a new HTTPS visit, what must occur before protected HTTP application data can be exchanged?',
      options: ['The browser converts the webpage into one image', 'A transport conversation and TLS session are established', 'The fragment is registered as a new domain', 'The ISP becomes the authoritative name server'],
      answer: 1,
      explanation: 'The endpoints need suitable transport communication and, for HTTPS, TLS protection before protected HTTP messages are exchanged.'
    },
    {
      category: 'Client and Server',
      question: 'Which component most likely checks authorization and retrieves a signed-in student\'s records from a database?',
      options: ['The URL fragment', 'A static image file', 'The browser cache alone', 'The backend application service'],
      answer: 3,
      explanation: 'Backend services apply server-side rules, check access, communicate with databases, and build responses.'
    },
    {
      category: 'HTTP',
      question: 'A response begins HTTP/1.1 404 Not Found. What does this most directly report?',
      options: ['The requested resource was not found at that location', 'The complete Internet connection is offline', 'The certificate is definitely fraudulent', 'The browser must use the DELETE method'],
      answer: 0,
      explanation: '404 is a client-error status indicating that the server did not find the requested resource at the request target.'
    },
    {
      category: 'HTTP Methods',
      question: 'Which HTTP method normally communicates a request to retrieve a representation without submitting a new resource body?',
      options: ['PATCH', 'GET', 'DELETE', 'POST'],
      answer: 1,
      explanation: 'GET is the common retrieval method, although the service ultimately defines how each request is handled.'
    },
    {
      category: 'State and Caching',
      question: 'Why might a second page load transfer fewer bytes than the first?',
      options: ['DNS permanently converted every resource into HTML', 'HTTPS removed all images from the site', 'The browser reused still-valid cached resources', 'The server changed every response to 404'],
      answer: 2,
      explanation: 'A browser cache can reuse valid stored files and avoid retransferring unchanged resources.'
    },
    {
      category: 'HTTPS and TLS',
      question: 'What does a valid HTTPS connection establish most accurately?',
      options: ['The connected business is guaranteed honest', 'Every download is free of malware', 'The user is anonymous to all parties', 'Communication with the identified domain is encrypted and integrity-protected with server authentication'],
      answer: 3,
      explanation: 'TLS provides confidentiality, integrity, and authentication for the connection, not a guarantee about the site\'s honesty or content.'
    },
    {
      category: 'Rendering',
      question: 'Why can the main HTML request finish before the page is visually complete?',
      options: ['The browser may still request CSS, scripts, images, fonts, and API data and calculate layout', 'HTML is an IP address that must become a domain', 'A 200 response prevents rendering', 'The fragment must travel through every router first'],
      answer: 0,
      explanation: 'HTML commonly references additional resources, and the browser must process them, execute needed work, calculate layout, and render pixels.'
    },
    {
      category: 'Hosting and CDN',
      question: 'How can a CDN commonly improve delivery of a popular image?',
      options: ['By replacing DNS with a password manager', 'By serving a cached copy from a location closer to the user', 'By converting the image into an email protocol', 'By requiring every request to reach one origin server'],
      answer: 1,
      explanation: 'A CDN distributes content among locations so eligible cached resources can be delivered with less distance and origin load.'
    },
    {
      category: 'Internet Services',
      question: 'Which pairing is correct?',
      options: ['SMTP - outgoing email transfer', 'SSH - browser image layout', 'IMAP - assigning IP addresses', 'SFTP - issuing web certificates'],
      answer: 0,
      explanation: 'SMTP is used to submit and transfer outgoing email; the other pairings describe unrelated functions.'
    },
    {
      category: 'Internet Security',
      question: 'An urgent message links to a look-alike login domain. What is the safest first response?',
      options: ['Sign in quickly because HTTPS proves the sender is honest', 'Disable updates so the browser does not interfere', 'Open the official app or known address independently and verify the request through a trusted channel', 'Reuse the same password so it is easier to recover'],
      answer: 2,
      explanation: 'Independent navigation and verification avoid the supplied link and help expose phishing, look-alike domains, and false urgency.'
    },
    {
      category: 'Governance',
      question: 'Which statement best describes Internet governance?',
      options: ['One cloud company owns every network and standard', 'The IETF assigns every domain and operates every router', 'A single government directly controls all international Internet traffic', 'Standards, identifiers, connectivity, laws, and services are coordinated by different organizations'],
      answer: 3,
      explanation: 'The Internet is distributed: the IETF, ICANN, registries, ISPs, governments, and operators have different responsibilities.'
    },
    {
      category: 'Troubleshooting',
      question: 'A device can ping 8.8.8.8, but nslookup example.com fails. Which area should be investigated next?',
      options: ['Screen resolution', 'DNS configuration or resolution', 'The webpage fragment', 'The keyboard driver'],
      answer: 1,
      explanation: 'Successful communication with an IP address alongside failed name resolution points toward DNS rather than total connectivity failure.'
    }
  ],
  summary: {
    intro: 'A webpage appears only after naming, routing, transport, connection security, HTTP, server processing, resource delivery, browser construction, and rendering work together across a distributed Internet.',
    points: [
      'A URL can contain a scheme, subdomain, domain, top-level domain, port, path, query string, and fragment; these parts have different purposes.',
      'A URL, domain name, website, webpage, web server, and IP address are related but distinct concepts.',
      'DNS can use caches, a recursive resolver, root and TLD referrals, and an authoritative server to return records such as A, AAAA, CNAME, MX, NS, and TXT.',
      'The complete web journey connects URL interpretation, DNS, a default gateway, Internet routing, transport, TLS, HTTP, server processing, resource requests, and rendering.',
      'Clients initiate requests; frontend code supports the user-facing experience, while backend services, application servers, and databases perform server-side work.',
      'HTTP exchanges methods, targets, headers, optional bodies, and status codes; 200, 301, 403, 404, 500, and 503 communicate different results.',
      'Cookies, sessions, and tokens maintain useful state across independent requests, while caching reduces repeated work and data transfer.',
      'HTTPS uses TLS to support confidentiality, integrity, and server authentication through certificates and trusted certificate authorities.',
      'HTTPS protects a connection but does not prove that a site, business, claim, or download is honest or safe.',
      'Browsers parse HTML, request CSS, scripts, images, fonts, and API data, build structures, calculate layout, execute scripts, and render pixels.',
      'Registrars, DNS hosts, web hosts, cloud platforms, CDNs, load balancers, replication, and redundancy perform different delivery and availability roles.',
      'Email, file transfer, remote access, calls, streaming, messaging, cloud storage, gaming, and IoT show that the Internet is larger than the Web.',
      'Security requires phishing awareness, unique passwords, MFA, updates, verified downloads, controlled permissions, firewalls, encryption where appropriate, and recoverable backups.',
      'Incognito mode, VPNs, HTTPS, and antivirus each provide limited protections rather than complete anonymity or safety.',
      'The IETF and RFC process, ICANN, regional registries, ISPs, governments, and service operators share different responsibilities; no single company owns the entire Internet.',
      'Troubleshooting should move systematically from physical and local checks to IP configuration, gateway, public IP communication, DNS, the target service, and comparison tests.',
      'ipconfig /all, ping, nslookup, tracert, browser status codes, certificate warnings, and DevTools provide evidence that must be interpreted rather than copied mechanically.'
    ],
    review: [
      'Parse a complete URL and explain how its domain eventually becomes an address used for packet routing.',
      'Draw the complete journey from user and browser through DNS, gateway, ISP, routers, transport, TLS, HTTP, server response, resources, and rendering.',
      'Compare static and dynamic delivery and identify frontend, web-server, application-server, and database responsibilities.',
      'Interpret representative HTTP requests, methods, headers, status codes, cookies, sessions, tokens, and cache results.',
      'Explain exactly what HTTPS certificates establish and which trust or safety judgments remain the user\'s responsibility.',
      'Use DevTools evidence to explain why one webpage produces many requests and why a reload may transfer less data.',
      'Compare the roles of hosting, cloud services, CDNs, load balancing, replication, and redundancy.',
      'Build a layered response to phishing, malware, password reuse, public Wi-Fi, insecure downloads, excessive permissions, and data loss.',
      'Explain why standards and governance are distributed, then assign the IETF, ICANN, registries, ISPs, governments, and operators their correct roles.',
      'Diagnose a connectivity or DNS failure in a reasoned sequence and record what each tool result proves, suggests, or cannot prove.'
    ],
    next: 'Continue to Security Part 1 to deepen privacy, authentication, phishing defense, and protection of digital information.'
  }
};
