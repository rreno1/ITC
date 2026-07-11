// app.js

// Presentation State
let currentSlide = 1;
const totalSlides = 10;
const MODULE_ID = 'internet-part-2';

// Slide Titles for Left Sidebar Checklist
const SLIDE_TITLES = [
    "Welcome & Intro",
    "URLs & Client–Server",
    "DNS Resolution",
    "Complete Web Journey",
    "HTTP, State & Caching",
    "TLS & Browser Rendering",
    "Hosting, Services & Governance",
    "Security & Troubleshooting Lab",
    "Quiz Assessment",
    "Summary & Review"
];

function renderStrictCurriculum() {
    const lessons = {
        2: `
          <div class="section-title"><span class="slide-num">02</span><span class="badge-label ohs-bg">Web Addresses</span><h2>Anatomy of a URL & Client–Server Communication</h2></div>
          <p class="lead-text"><code>https://www.example.com:443/courses/internet?id=10#review</code></p>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>Read the URL</h3>
              <ul class="slide-body-bullets"><li><strong>Scheme:</strong> <code>https</code></li><li><strong>Subdomain:</strong> <code>www</code>; <strong>domain:</strong> <code>example</code>; <strong>top-level domain:</strong> <code>.com</code></li><li><strong>Port:</strong> <code>443</code>; <strong>path:</strong> <code>/courses/internet</code></li><li><strong>Query string:</strong> <code>?id=10</code>; <strong>fragment:</strong> <code>#review</code></li></ul>
              <p>A <strong>URL</strong> identifies a resource. A <strong>domain name</strong> is its human-readable host name; an <strong>IP address</strong> identifies a network destination. A <strong>website</strong> contains related resources, a <strong>webpage</strong> is one document, and a <strong>web server</strong> provides them.</p>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>Client–server model</h3>
              <ul class="slide-body-bullets"><li>A client initiates a request; a server listens, processes requests, and may serve many clients.</li><li>A site may rely on several servers and external services.</li><li>The <strong>frontend</strong> runs the user-facing interface; the <strong>backend</strong> applies server-side logic and works with databases.</li><li>A <strong>static</strong> site returns stored resources; a <strong>dynamic</strong> site generates or personalizes responses.</li><li>Web servers handle web traffic, application servers run logic, and databases store/query data.</li></ul>
            </div>
          </div>`,
        3: `
          <div class="section-title"><span class="slide-num">03</span><span class="badge-label path-bg">DNS</span><h2>Domain Name System: Resolution & Records</h2></div>
          <p class="lead-text">DNS translates human-readable names into information computers use to locate Internet services. It stores more than website addresses.</p>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>A typical lookup</h3>
              <ol class="slide-body-bullets"><li>The browser and operating system check their caches.</li><li>The device asks its configured <strong>recursive resolver</strong>.</li><li>If not cached, the resolver follows referrals from a <strong>root</strong> server to a <strong>TLD</strong> server.</li><li>The resolver asks the domain’s <strong>authoritative name server</strong>.</li><li>The answer, such as an IP address, returns to the device and is cached temporarily.</li></ol>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>Common DNS records</h3>
              <table style="width:100%;border-collapse:collapse"><tr><th>Record</th><th>Purpose</th></tr><tr><td>A</td><td>IPv4 address</td></tr><tr><td>AAAA</td><td>IPv6 address</td></tr><tr><td>CNAME</td><td>Alias to another name</td></tr><tr><td>MX</td><td>Mail server</td></tr><tr><td>NS</td><td>Authoritative name server</td></tr><tr><td>TXT</td><td>Text used for policies and verification</td></tr></table>
            </div>
          </div>
          <div class="article-divider"></div><article class="slide-article-body"><h3>Do not collapse the roles</h3><p>The recursive resolver performs work for the client; root and TLD servers normally provide referrals; the authoritative server supplies the domain’s definitive records. DNS can fail even when basic IP connectivity still works.</p></article>`,
        4: `
          <div class="section-title"><span class="slide-num">04</span><span class="badge-label tools-bg">Central Lesson</span><h2>The Complete Journey of a Web Request</h2></div>
          <p class="lead-text">What happens from entering a URL to seeing the page?</p>
          <div class="glass-card" style="padding:18px">
            <ol class="slide-body-bullets"><li>The browser interprets the URL and checks relevant caches.</li><li>DNS resolves the domain name to an address.</li><li>Packets go to the default gateway and are forwarded through one or more networks.</li><li>A transport connection is established; for HTTPS, the browser creates a secure TLS session.</li><li>The browser sends an HTTP request.</li><li>The server—or its application and database—processes the request and sends an HTTP response.</li><li>The browser requests additional HTML, CSS, JavaScript, images, fonts, and other resources, possibly from other servers.</li><li>The browser parses the resources, runs scripts, calculates layout, and renders the page.</li></ol>
          </div>
          <div class="article-divider"></div><article class="slide-article-body"><h3>Layer the explanation</h3><p>DNS locates the service, IP and routers move packets, TCP or another transport communicates end to end, TLS protects HTTPS traffic, HTTP carries web requests and responses, and the browser assembles and renders the resources. Each technology has a distinct responsibility.</p></article>`,
        5: `
          <div class="section-title"><span class="slide-num">05</span><span class="badge-label ohs-bg">Web Protocol</span><h2>HTTP, Status Codes, State & Caching</h2></div>
          <p class="lead-text"><strong>HTTP</strong> is an application-layer, request–response protocol for transferring web resources between clients and servers.</p>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>HTTP request and response</h3>
              <pre style="white-space:pre-wrap"><code>GET /modules/internet HTTP/1.1
Host: example.com

HTTP/1.1 200 OK
Content-Type: text/html</code></pre>
              <p>Common methods: <strong>GET</strong> retrieves; <strong>POST</strong> submits; <strong>PUT</strong> replaces; <strong>PATCH</strong> partly updates; <strong>DELETE</strong> removes.</p>
              <p>Status groups: 1xx informational, 2xx success, 3xx redirection, 4xx client-side error, 5xx server-side error.</p>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>Recognize and interpret</h3>
              <p><strong>200 OK</strong>, <strong>301 Moved Permanently</strong>, <strong>403 Forbidden</strong>, <strong>404 Not Found</strong>, <strong>500 Internal Server Error</strong>, and <strong>503 Service Unavailable</strong>.</p>
              <h3>HTTP is generally stateless</h3>
              <p>Requests are independent. <strong>Cookies</strong>, server-side <strong>sessions</strong>, and authentication <strong>tokens</strong> support login persistence and shopping carts. Browser and server caches reuse responses until expiration rules require revalidation or replacement.</p>
              <p>Cookies are small data values, not automatically viruses; they can serve legitimate functions and can also support tracking.</p>
            </div>
          </div>`,
        6: `
          <div class="section-title"><span class="slide-num">06</span><span class="badge-label tools-bg">Secure Rendering</span><h2>HTTPS, TLS, Certificates & Browser Rendering</h2></div>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>What HTTPS adds</h3>
              <ul class="slide-body-bullets"><li><strong>Confidentiality:</strong> transmitted information is encrypted against easy reading.</li><li><strong>Integrity:</strong> modification in transit can be detected.</li><li><strong>Authentication:</strong> a certificate helps verify the server identity for the domain.</li></ul>
              <p><strong>TLS</strong> establishes the secure session. A digital certificate binds identity information to a public key and is validated through trusted certificate authorities. Browsers warn about expired, mismatched, or untrusted certificates.</p>
              <p>A padlock means the connection is protected; it does <strong>not</strong> prove that the website or business is honest.</p>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>Receiving HTML is not the end</h3>
              <p>The browser parses HTML, downloads CSS and JavaScript, requests images and fonts, builds internal page structures, calculates layout, renders pixels, executes scripts, and may make additional API requests.</p>
              <p>A webpage is assembled from many resources, sometimes retrieved from multiple servers. Developer tools expose these individual requests and their timing.</p>
              <p>Cryptographic mathematics is outside this introductory module; the goal is to understand what TLS provides and what it does not.</p>
            </div>
          </div>`,
        7: `
          <div class="section-title"><span class="slide-num">07</span><span class="badge-label path-bg">Beyond One Server</span><h2>Hosting, Internet Services & Governance</h2></div>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>How sites stay available</h3>
              <p>A <strong>domain registrar</strong> registers names; <strong>DNS hosting</strong> publishes records; <strong>web hosting</strong> serves content. Options include shared hosting, virtual private servers, cloud platforms, and data centers.</p>
              <p><strong>CDNs</strong> cache resources near users; <strong>load balancing</strong> distributes requests; <strong>replication</strong> and <strong>redundancy</strong> reduce the impact of load or failure.</p>
              <h3>The Internet is more than the Web</h3>
              <p>Email (SMTP, IMAP, POP), file transfer (FTP, SFTP), remote access (SSH), VoIP and real-time video, streaming, messaging, cloud storage, gaming, and IoT all use Internet infrastructure. Their designs highlight streaming buffers and adaptive quality, messaging with persistent connections and notifications, cloud synchronization, gaming latency and matchmaking servers, and connected IoT sensors and devices.</p>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>No single owner</h3>
              <ul class="slide-body-bullets"><li><strong>IETF</strong> develops many technical standards; <strong>RFCs</strong> contain specifications.</li><li><strong>ICANN</strong> coordinates important parts of the domain-name system.</li><li><strong>Regional Internet registries</strong> distribute Internet number resources.</li><li><strong>ISPs</strong> connect networks; governments create laws and telecommunications rules.</li><li>Website and cloud operators manage their own services.</li></ul>
              <p>These organizations have different responsibilities; no single company owns the entire Internet.</p>
            </div>
          </div>`,
        8: `
          <div class="section-title"><span class="slide-num">08</span><span class="badge-label quiz-bg">Activity & Laboratory</span><h2>Security, Website Trace & Troubleshooting</h2></div>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>Practical Internet security</h3>
              <p>Recognize phishing, social engineering, malware, fake sites, password reuse, public Wi-Fi risk, unsafe downloads, and excessive browser permissions. Use unique passwords, MFA, software updates, secure downloads, firewalls, encryption, and backups.</p>
              <ul class="slide-body-bullets"><li>Incognito mode does not make you anonymous.</li><li>A VPN does not make every activity safe.</li><li>HTTPS does not prove a business is legitimate.</li><li>Antivirus cannot prevent every attack.</li><li>A strong password should not be reused.</li></ul>
              <h3>Activity: trace a website request</h3>
              <p>Create and annotate: User → Browser → DNS → Router → ISP → Internet routers → Web server → HTTP response → Browser rendering. Mark where IP, TCP or UDP, TLS, HTTP, DNS, routers, and ports are involved.</p>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>Systematic troubleshooting</h3>
              <ol class="slide-body-bullets"><li>Check power and physical links; confirm Wi-Fi/Ethernet.</li><li>Use <code>ipconfig /all</code> to confirm an IP, prefix, gateway, and DNS server.</li><li><code>ping &lt;gateway&gt;</code>, then <code>ping 8.8.8.8</code>, then <code>ping example.com</code>.</li><li>Use <code>nslookup example.com</code> for DNS and <code>tracert example.com</code> for visible hops.</li><li>Test the service and compare another device or network. Record errors and observations. Restart only for a reason.</li></ol>
              <h3>Browser developer-tools lab</h3>
              <p>In the Network tab, load a site; identify the main HTML, CSS, JavaScript, image, and font requests; inspect status codes and transferred/resource sizes; count requests; reload and observe caching.</p>
            </div>
          </div>`,
        10: `
          <div class="section-title"><span class="slide-num">10</span><span class="badge-label ohs-bg">Review</span><h2>Internet Part 2: Required Outcomes</h2></div>
          <p class="lead-text">You should now be able to trace a webpage and reason about security and failures.</p>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px"><h3>I can…</h3><ul class="slide-body-bullets"><li>distinguish a URL, domain, website, webpage, web server, and IP address;</li><li>trace DNS and the complete journey after entering a URL;</li><li>interpret common HTTP methods, status codes, cookies, sessions, and caches;</li><li>explain TLS encryption, integrity, authentication, and certificates;</li><li>describe browser rendering, hosting, CDNs, Internet services, and distributed governance;</li><li>identify common threats and diagnose connectivity and DNS problems systematically.</li></ul></div>
            <div class="split-right glass-card" style="padding:18px"><h3>Final mental model</h3><p>The Internet is distributed infrastructure; the Web is one application ecosystem on top. DNS locates services, IP routes packets, transport connects endpoints, TLS protects HTTPS, HTTP exchanges resources, and browsers render them.</p><h3>Keep the scope introductory</h3><p>Do not replace understanding with rote OSI-layer lists, binary subnetting, router configuration, detailed BGP rules, full TCP headers, cryptographic mathematics, dozens of ports, or every historical protocol.</p></div>
          </div>`
    };

    Object.entries(lessons).forEach(([number, html]) => {
        const content = document.querySelector(`#slide-${number} .slide-content`);
        if (content) content.innerHTML = html;
    });
}

// Quiz Database (15 Questions matching constraints)
const QUIZ_QUESTIONS = [
    {
        category: "URL Anatomy",
        question: "In https://www.example.com:443/courses?id=10#review, which part is the query string?",
        options: ["https", "www", "?id=10", "#review"],
        answer: 2,
        explanation: "The query string begins with ?, while the fragment begins with #."
    },
    {
        category: "Client–Server",
        question: "Which statement correctly describes a dynamic website?",
        options: ["It can generate or personalize responses using application logic and data.", "It never uses a server.", "It contains only one HTML file and cannot change.", "It is another name for a private IP address."],
        answer: 0,
        explanation: "Dynamic sites use backend logic and often databases to build or personalize responses."
    },
    {
        category: "DNS",
        question: "Which sequence best represents a cache miss handled by a recursive DNS resolver?",
        options: ["Authoritative → browser → root → switch", "Root referral → TLD referral → authoritative answer", "HTTP → TLS → DHCP → FTP", "Router → cookie → database → certificate"],
        answer: 1,
        explanation: "The resolver follows the DNS hierarchy from root to TLD to the authoritative server."
    },
    {
        category: "DNS Records",
        question: "Which DNS record maps a name to an IPv6 address?",
        options: ["A", "AAAA", "MX", "TXT"],
        answer: 1,
        explanation: "AAAA records hold IPv6 addresses; A records hold IPv4 addresses."
    },
    {
        category: "Web Request Journey",
        question: "Which ordering is most accurate after a user enters an HTTPS URL?",
        options: ["Render → DNS → HTTP → URL", "Interpret URL → DNS → transport/TLS → HTTP request → response/resources → render", "HTTP response → DHCP → DNS → keyboard", "TLS → delete cache → power off → render"],
        answer: 1,
        explanation: "The browser resolves the destination, establishes communication and TLS, exchanges HTTP, retrieves dependencies, and renders."
    },
    {
        category: "HTTP",
        question: "Which HTTP method is normally used to retrieve a resource without asking the server to replace it?",
        options: ["GET", "PUT", "PATCH", "DELETE"],
        answer: 0,
        explanation: "GET requests a representation of a resource."
    },
    {
        category: "HTTP Status",
        question: "What does HTTP 503 Service Unavailable usually mean?",
        options: ["The request succeeded.", "The resource moved permanently.", "The server is temporarily unable to handle the request.", "TLS verified that the business is honest."],
        answer: 2,
        explanation: "503 is a server-side availability error in the 5xx group."
    },
    {
        category: "State and Caching",
        question: "Why do sites use cookies or session tokens?",
        options: ["To add state such as login persistence to otherwise independent HTTP requests", "To increase fiber speed", "To replace all DNS records", "To prove that advertisements are trustworthy"],
        answer: 0,
        explanation: "Cookies and tokens help connect requests to state such as a login or shopping cart."
    },
    {
        category: "HTTPS and TLS",
        question: "Which three goals does HTTPS through TLS provide?",
        options: ["Compression, routing, and storage", "Confidentiality, integrity, and server authentication", "Anonymity, honesty, and malware removal", "Bandwidth, latency, and jitter"],
        answer: 1,
        explanation: "TLS encrypts traffic, detects modification, and authenticates the server identity for the domain."
    },
    {
        category: "Certificates",
        question: "What does a valid HTTPS padlock not guarantee?",
        options: ["The connection is encrypted.", "The certificate matches the site identity checked by the browser.", "The business and every claim on the page are honest.", "Traffic has integrity protection."],
        answer: 2,
        explanation: "HTTPS protects the connection; it cannot establish that the site's content or operator is trustworthy."
    },
    {
        category: "Browser Rendering",
        question: "After receiving the main HTML, what may the browser do next?",
        options: ["Request CSS, JavaScript, images, and fonts, then calculate layout and render", "Stop all network activity permanently", "Convert the URL into a MAC address", "Ask BGP to create a cookie"],
        answer: 0,
        explanation: "A webpage is commonly assembled from many resources and processed before pixels appear."
    },
    {
        category: "Hosting",
        question: "How can a CDN improve a website?",
        options: ["By serving cached content from locations closer to users", "By guaranteeing every claim is factual", "By replacing all servers with one laptop", "By assigning private Wi-Fi addresses"],
        answer: 0,
        explanation: "CDNs distribute copies of content so users can retrieve it from nearby infrastructure."
    },
    {
        category: "Internet Services",
        question: "Which example shows that the Internet is broader than the Web?",
        options: ["Email using SMTP and IMAP", "An HTML heading", "A browser bookmark", "A webpage fragment"],
        answer: 0,
        explanation: "Email is a separate Internet service with its own protocols."
    },
    {
        category: "Security",
        question: "Which statement is accurate?",
        options: ["Incognito mode makes a user anonymous to every network.", "A VPN makes every download safe.", "A unique password plus MFA reduces account risk.", "Antivirus prevents every possible attack."],
        answer: 2,
        explanation: "Unique passwords and MFA are practical defenses; incognito, VPNs, and antivirus have limited scopes."
    },
    {
        category: "Troubleshooting",
        question: "A device has no valid IP configuration. What should be checked before blaming DNS or the website?",
        options: ["The physical/Wi-Fi link and DHCP configuration", "The website's CSS colors", "The browser bookmark title", "The email inbox"],
        answer: 0,
        explanation: "Troubleshooting proceeds from link and IP configuration to gateway, IP reachability, DNS, and then the service."
    }
];

// Interactive Widgets State
let isDNSResolving = false;
let isTCPSimulating = false;

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
    renderStrictCurriculum();
    setupNavigation();
    setupKeyboardShortcuts();
    resetQuiz();
    if (typeof initOneTimeQuizGate === 'function') {
        initOneTimeQuizGate({ moduleId: MODULE_ID, total: QUIZ_QUESTIONS.length, resetQuiz });
    }
    if (typeof initFinishModuleControl === 'function') {
        initFinishModuleControl({ moduleId: MODULE_ID, totalLessons: totalSlides, requiresQuiz: true });
    }
    if (typeof openRequestedLesson === 'function') openRequestedLesson(goToSlide, totalSlides);
    
    // Scroll Prompt setup
    setupScrollPromptListeners();
    setTimeout(updateScrollPrompt, 100);
});

// Setup Presentation Navigation
function setupNavigation() {
    populateSidebar();
    updateProgress();
    setupDots();

    // Next / Prev button event listeners
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    document.getElementById("nextBtn").addEventListener("click", nextSlide);

    // Help Modal listeners
    const helpToggle = document.getElementById("helpToggle");
    const helpModal = document.getElementById("helpModal");
    const closeHelp = document.getElementById("closeHelpModal");

    if (helpToggle && helpModal) {
        helpToggle.addEventListener("click", () => {
            helpModal.classList.toggle("active");
        });
    }
    if (closeHelp && helpModal) {
        closeHelp.addEventListener("click", () => {
            helpModal.classList.remove("active");
        });
    }
    if (helpModal) {
        helpModal.addEventListener("click", (e) => {
            if (e.target === helpModal) helpModal.classList.remove("active");
        });
    }
}

// Generate Checklist Sidebar steps
function populateSidebar() {
    const sidebar = document.getElementById("sidebarChecklist");
    if (!sidebar) return;
    
    sidebar.innerHTML = "";
    SLIDE_TITLES.forEach((title, idx) => {
        const slideNum = idx + 1;
        const li = document.createElement("li");
        li.className = `sidebar-item ${slideNum === currentSlide ? 'active' : ''} ${slideNum < currentSlide ? 'completed' : ''}`;
        li.setAttribute("data-target", slideNum);
        li.setAttribute("role", "button");
        li.setAttribute("tabindex", "0");
        if (slideNum === currentSlide) li.setAttribute("aria-current", "step");
        
        const dot = document.createElement("span");
        dot.className = "step-indicator-dot";
        dot.innerText = slideNum;
        
        const label = document.createElement("span");
        label.innerText = title;
        
        li.appendChild(dot);
        li.appendChild(label);
        
        li.addEventListener("click", () => {
            goToSlide(slideNum);
        });
        
        sidebar.appendChild(li);
    });
}

// Setup navigation dots at the bottom
function setupDots() {
    const dotsContainer = document.getElementById("slideDots");
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";
    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement("div");
        dot.className = `dot ${i === currentSlide ? "active-dot" : ""}`;
        dot.title = `Jump to Slide ${i}`;
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Go to specific slide
function goToSlide(slideNum) {
    if (slideNum < 1 || slideNum > totalSlides) return;
    if (typeof isQuizNavigationLocked === 'function' && isQuizNavigationLocked() && slideNum !== currentSlide) {
        if (typeof showToast === 'function') showToast('Finish the active quiz before leaving this slide.', 'error');
        return;
    }

    // Slide transition
    const oldSlide = document.getElementById(`slide-${currentSlide}`);
    const newSlide = document.getElementById(`slide-${slideNum}`);

    if (oldSlide) oldSlide.classList.remove("active-slide");
    if (newSlide) {
        newSlide.classList.add("active-slide");
        newSlide.scrollTop = 0; // Reset scroll position to top
    }

    currentSlide = slideNum;
    
    // Update sidebar checklist states
    const items = document.querySelectorAll(".sidebar-item");
    items.forEach((item, idx) => {
        const itemNum = idx + 1;
        item.classList.toggle("active", itemNum === currentSlide);
        item.classList.toggle("completed", itemNum < currentSlide);
        if (itemNum === currentSlide) item.setAttribute("aria-current", "step");
        else item.removeAttribute("aria-current");
    });

    // Update dots indicator
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active-dot", idx + 1 === currentSlide);
    });

    updateProgress();
    if (typeof recordLessonProgress === 'function') {
        recordLessonProgress(MODULE_ID, currentSlide, totalSlides);
    }
    setTimeout(updateScrollPrompt, 50); // Refresh floating indicator
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        // Block navigation inside quiz slide unless completed
        if (currentSlide === 9 && quizCurrentQuestion < QUIZ_QUESTIONS.length) {
            return;
        }
        goToSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        goToSlide(currentSlide - 1);
    }
}

// Update Slide Progress indicators
function updateProgress() {
    const progressBar = document.getElementById("progressBar");
    const currentNumEl = document.getElementById("currentSlideNum");
    const totalNumEl = document.getElementById("totalSlidesNum");

    if (currentNumEl) currentNumEl.innerText = currentSlide;
    if (totalNumEl) totalNumEl.innerText = totalSlides;

    if (progressBar) {
        const percentage = ((currentSlide - 1) / (totalSlides - 1)) * 100;
        progressBar.style.width = `${percentage}%`;
    }
}

// Keyboard shortcuts mapping
function setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "Space") {
            if (currentSlide === 9 && quizCurrentQuestion < QUIZ_QUESTIONS.length) {
                return;
            }
            nextSlide();
            if (e.key === "Space") e.preventDefault();
        } else if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "t" || e.key === "T") {
            const themeToggle = document.getElementById("themeToggle");
            if (themeToggle) themeToggle.click();
        } else if (e.key === "h" || e.key === "H") {
            const helpModal = document.getElementById("helpModal");
            if (helpModal) helpModal.classList.toggle("active");
        } else if (e.key === "f" || e.key === "F") {
            toggleFullscreen();
        }
    });
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Floating Scroll Prompt Management
function updateScrollPrompt() {
    const prompt = document.getElementById("scrollPrompt");
    if (!prompt) return;

    const activeSlideEl = document.getElementById(`slide-${currentSlide}`);
    if (!activeSlideEl) return;

    const isScrollable = activeSlideEl.scrollHeight > activeSlideEl.clientHeight + 15;
    const isScrolledDown = activeSlideEl.scrollTop > 30;

    if (isScrollable && !isScrolledDown) {
        prompt.classList.add("visible");
        prompt.classList.remove("hidden");
    } else {
        prompt.classList.remove("visible");
        prompt.classList.add("hidden");
    }
}

// Add scroll listeners to all slides
function setupScrollPromptListeners() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.addEventListener("scroll", () => {
            updateScrollPrompt();
        });
    });
}

// Interactive Widget: DNS Resolver & Traceroute
function resolveDomain() {
    if (isDNSResolving) return;

    const input = document.getElementById("domain-input");
    const rootStatus = document.getElementById("dns-root-status");
    const tldStatus = document.getElementById("dns-tld-status");
    const authStatus = document.getElementById("dns-auth-status");
    const traceBox = document.getElementById("traceroute-output");

    if (!input || !rootStatus || !tldStatus || !authStatus || !traceBox) return;

    const domain = input.value.trim();
    if (!domain) return;

    isDNSResolving = true;
    traceBox.innerHTML = "Resolving DNS hierarchy for " + domain + "...<br>";

    // Reset status
    rootStatus.innerText = "Querying...";
    rootStatus.style.color = "var(--color-primary)";
    tldStatus.innerText = "Waiting...";
    tldStatus.style.color = "var(--text-secondary)";
    authStatus.innerText = "Waiting...";
    authStatus.style.color = "var(--text-secondary)";

    // Step 1: Root Server Query
    setTimeout(() => {
        rootStatus.innerText = "Resolved";
        rootStatus.style.color = "var(--color-success)";
        tldStatus.innerText = "Querying...";
        tldStatus.style.color = "var(--color-primary)";
        traceBox.innerHTML += "&bull; Root Name Server: Referred query to TLD Name Server (.org)<br>";

        // Step 2: TLD Server Query
        setTimeout(() => {
            tldStatus.innerText = "Resolved";
            tldStatus.style.color = "var(--color-success)";
            authStatus.innerText = "Querying...";
            authStatus.style.color = "var(--color-primary)";
            traceBox.innerHTML += "&bull; TLD Name Server: Pointed query to Authoritative Name Server for wikipedia.org<br>";

            // Step 3: Auth Server Query
            setTimeout(() => {
                authStatus.innerText = "91.198.174.192";
                authStatus.style.color = "var(--color-success)";
                traceBox.innerHTML += "&bull; Authoritative Server: Final mapping resolved (wikipedia.org -> 91.198.174.192)<br><br>";
                traceBox.innerHTML += "Starting traceroute to 91.198.174.192 (max 30 hops):<br>";

                // Run Traceroute simulation
                runTraceroute(traceBox);
            }, 1000);
        }, 1000);
    }, 1000);
}

function runTraceroute(box) {
    const targetIP = "91.198.174.192";
    const hops = [
        { label: "192.168.1.1 (Local Router gateway)", delay: 2 },
        { label: "isp-routing-hub.net (ISP Core Node)", delay: 14 },
        { label: "backbone-transit-level3.net (Transit Node)", delay: 35 },
        { label: "undersea-light-cable.org (Oceanic Link)", delay: 78 },
        { label: "european-distribution-hub.net (Regional Node)", delay: 92 },
        { label: targetIP + " (wikipedia.org server host)", delay: 104 }
    ];

    let currentHop = 0;

    function printHop() {
        if (currentHop < hops.length) {
            const h = hops[currentHop];
            box.innerHTML += ` hop ${currentHop + 1}:  ${h.label}   [${h.delay}ms] <br>`;
            box.scrollTop = box.scrollHeight;
            currentHop++;
            setTimeout(printHop, 600);
        } else {
            box.innerHTML += "<br>Trace complete. Target reached successfully. 🎉";
            box.scrollTop = box.scrollHeight;
            isDNSResolving = false;
        }
    }

    setTimeout(printHop, 500);
}

// Interactive Widget: TCP Handshake & Packet Loss Simulator
function startTCPSimulation() {
    if (isTCPSimulating) return;

    const lossSlider = document.getElementById("loss-slider");
    const progressEl = document.getElementById("tcp-download-progress");
    const handshakeEl = document.getElementById("tcp-handshake-status");
    const gridEl = document.getElementById("packetsGrid");
    const logEl = document.getElementById("tcp-visual-log");

    if (!lossSlider || !progressEl || !handshakeEl || !gridEl || !logEl) return;

    isTCPSimulating = true;
    const lossRate = Number(lossSlider.value) / 100;

    // Reset grid
    gridEl.innerHTML = "";
    const totalPackets = 20;
    for (let i = 0; i < totalPackets; i++) {
        const box = document.createElement("div");
        box.className = "packet-block";
        box.setAttribute("data-id", i + 1);
        box.innerText = i + 1;
        gridEl.appendChild(box);
    }

    // Step 1: Handshake
    logEl.innerHTML = "<div><span style='color: var(--color-primary);'>[TCP]</span> Initiating Three-Way Handshake...</div>";
    handshakeEl.innerText = "SYN Sent";
    handshakeEl.style.color = "var(--color-primary)";

    setTimeout(() => {
        logEl.innerHTML += "<div><span style='color: var(--color-success);'>[TCP]</span> Server responded with SYN-ACK packet.</div>";
        handshakeEl.innerText = "SYN-ACK Received";

        setTimeout(() => {
            logEl.innerHTML += "<div><span style='color: var(--color-success);'>[TCP]</span> Client sent ACK. Handshake established!</div>";
            handshakeEl.innerText = "Established";
            handshakeEl.style.color = "var(--color-success)";

            // Start sending packets
            sendPackets(totalPackets, lossRate, logEl, progressEl);
        }, 800);
    }, 800);
}

function sendPackets(total, lossRate, log, progress) {
    let packetStates = new Array(total).fill(0); // 0: Unsended, 1: Sent, -1: Lost
    let currentIdx = 0;
    let successfulTransfers = 0;

    function transferLoop() {
        if (successfulTransfers < total) {
            // Find next unsent or lost packet
            let idx = packetStates.indexOf(0);
            if (idx === -1) {
                idx = packetStates.indexOf(-1); // Resend lost packets
            }

            if (idx === -1) {
                // Done!
                finishTCP();
                return;
            }

            const pNum = idx + 1;
            const block = document.querySelector(`.packet-block[data-id="${pNum}"]`);
            
            // Random check for loss
            const isLost = Math.random() < lossRate;

            log.innerHTML += `<div>Sending packet segment ${pNum} / ${total}...</div>`;
            log.scrollTop = log.scrollHeight;

            if (block) {
                block.className = "packet-block active-trans";
            }

            setTimeout(() => {
                if (isLost) {
                    packetStates[idx] = -1; // Lost
                    if (block) block.className = "packet-block lost-trans";
                    log.innerHTML += `<div><span style="color: var(--color-error);">[LOSS]</span> Packet segment ${pNum} dropped in transit.</div>`;
                    log.scrollTop = log.scrollHeight;
                } else {
                    packetStates[idx] = 1; // Succeeded
                    successfulTransfers++;
                    if (block) block.className = "packet-block success-trans";
                    log.innerHTML += `<div><span style="color: var(--color-success);">[ACK]</span> Acknowledgment received for segment ${pNum}.</div>`;
                    log.scrollTop = log.scrollHeight;

                    // Update progress
                    const percentage = Math.round((successfulTransfers / total) * 100);
                    progress.innerText = percentage + "%";
                }

                setTimeout(transferLoop, 300);
            }, 500);

        } else {
            finishTCP();
        }
    }

    function finishTCP() {
        log.innerHTML += "<div><span style='color: var(--color-success);'>[SUCCESS]</span> All packet segments assembled in correct order.</div>";
        log.scrollTop = log.scrollHeight;
        isTCPSimulating = false;
    }

    transferLoop();
}

// // Interactive Quiz System Logic
let isReviewMode = false;

function resetQuiz() {
    if (typeof canResetOneTimeQuiz === 'function' && !canResetOneTimeQuiz()) return;
    if (typeof randomizeQuizInPlace === 'function') randomizeQuizInPlace(QUIZ_QUESTIONS);
    isReviewMode = false;
    quizCurrentQuestion = 0;
    quizScore = 0;
    quizAnswers = [];
    
    const quizBox = document.getElementById("quizBox");
    const quizResults = document.getElementById("quizResults");
    
    if (quizBox) quizBox.classList.remove("hidden");
    if (quizResults) quizResults.classList.add("hidden");

    // Rebuild quiz progress indicators
    const progressContainer = document.getElementById("quizProgress");
    if (progressContainer) {
        progressContainer.innerHTML = "";
        for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
            const step = document.createElement("div");
            step.className = `quiz-progress-step ${i === 0 ? 'active-q' : ''}`;
            step.innerText = i + 1;
            progressContainer.appendChild(step);
        }
    }

    loadQuestion();
}

function loadQuestion() {
    // Hide feedback panel
    const feedbackPanel = document.getElementById("feedbackPanel");
    if (feedbackPanel) feedbackPanel.classList.add("hidden");

    const q = QUIZ_QUESTIONS[quizCurrentQuestion];
    const catEl = document.getElementById("questionCategory");
    const textEl = document.getElementById("questionText");
    const optionsGrid = document.getElementById("optionsGrid");

    if (catEl) catEl.innerText = q.category;
    if (textEl) textEl.innerText = q.question;
    
    if (optionsGrid) {
        renderQuizChoices(optionsGrid, q, selectOption, !isReviewMode);
    }

    // Update progress steps
    const steps = document.querySelectorAll(".quiz-progress-step");
    steps.forEach((step, idx) => {
        step.className = `quiz-progress-step ${idx === quizCurrentQuestion ? 'active-q' : ''}`;
        if (idx < quizCurrentQuestion) {
            if (isReviewMode) {
                const wasCorrect = quizAnswers[idx] === QUIZ_QUESTIONS[idx].answer;
                step.classList.add(wasCorrect ? "correct-q" : "incorrect-q");
            } else {
                step.classList.add("completed-q");
            }
        }
    });

    if (isReviewMode) {
        // Show correct/incorrect highlights immediately
        const studentAns = quizAnswers[quizCurrentQuestion];
        const correctAns = q.answer;
        const buttons = document.querySelectorAll("#optionsGrid .option-btn");
        if (typeof markQuizChoice === 'function') markQuizChoice(buttons, studentAns);
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === correctAns) {
                btn.classList.add("selected-correct");
            } else if (idx === studentAns && studentAns !== correctAns) {
                btn.classList.add("selected-incorrect");
            }
        });

        // Show feedback panel immediately with explanation
        const iconEl = document.getElementById("feedbackIcon");
        const titleEl = document.getElementById("feedbackTitle");
        const textEl = document.getElementById("feedbackText");
        const nextBtn = document.getElementById("nextQuestionBtn");

        const isCorrect = studentAns === correctAns;

        if (iconEl) {
            iconEl.innerText = isCorrect ? "✓" : "✗";
            iconEl.className = `feedback-icon ${isCorrect ? 'correct-icon' : 'incorrect-icon'}`;
        }
        if (titleEl) {
            titleEl.innerText = isCorrect ? "Correct!" : "Incorrect";
            titleEl.className = `feedback-title ${isCorrect ? 'correct-title' : 'incorrect-title'}`;
        }
        if (textEl) textEl.innerHTML = q.explanation;
        if (nextBtn) {
            nextBtn.innerText = (quizCurrentQuestion === QUIZ_QUESTIONS.length - 1) ? "Finish Review" : "Next Question";
        }
        if (feedbackPanel) feedbackPanel.classList.remove("hidden");
    }

    updateScoreText();
}

function selectOption(selectedIdx) {
    if (typeof canAnswerOneTimeQuiz === 'function' && !canAnswerOneTimeQuiz()) {
        if (typeof showToast === 'function') showToast('Click Start Quiz before answering.', 'error');
        return;
    }
    // Block multiple clicks
    const feedbackPanel = document.getElementById("feedbackPanel");
    if (feedbackPanel && !feedbackPanel.classList.contains("hidden")) return;

    const q = QUIZ_QUESTIONS[quizCurrentQuestion];
    quizAnswers[quizCurrentQuestion] = selectedIdx;

    // Highlight selected option neutrally
    const buttons = document.querySelectorAll("#optionsGrid .option-btn");
    if (typeof markQuizChoice === 'function') markQuizChoice(buttons, selectedIdx);
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === selectedIdx) {
            btn.classList.add("selected-temp");
        }
    });

    // Display feedback panel to prompt for Next Question
    const iconEl = document.getElementById("feedbackIcon");
    const titleEl = document.getElementById("feedbackTitle");
    const textEl = document.getElementById("feedbackText");
    const nextBtn = document.getElementById("nextQuestionBtn");

    if (iconEl) {
        iconEl.innerText = "✓";
        iconEl.className = "feedback-icon correct-icon";
    }
    if (titleEl) {
        titleEl.innerText = "Answer Logged";
        titleEl.className = "feedback-title correct-title";
    }
    if (textEl) {
        textEl.innerHTML = "Your selection has been recorded. Click Next Question to continue.";
    }
    if (nextBtn) {
        nextBtn.innerText = "Next Question";
    }
    if (feedbackPanel) feedbackPanel.classList.remove("hidden");
}

function nextQuestion() {
    quizCurrentQuestion++;
    if (quizCurrentQuestion < QUIZ_QUESTIONS.length) {
        loadQuestion();
    } else {
        if (isReviewMode) {
            // Finish review, show results again
            const quizBox = document.getElementById("quizBox");
            const quizResults = document.getElementById("quizResults");
            if (quizBox) quizBox.classList.add("hidden");
            if (quizResults) quizResults.classList.remove("hidden");
        } else {
            showQuizResults();
        }
    }
}

function updateScoreText() {
    const scoreTextEl = document.getElementById("quizScoreText");
    if (scoreTextEl) {
        scoreTextEl.innerText = `Score: ${quizScore} / ${QUIZ_QUESTIONS.length}`;
    }
}

function showQuizResults() {
    const quizBox = document.getElementById("quizBox");
    const quizResults = document.getElementById("quizResults");
    const finalScoreText = document.getElementById("finalScoreText");
    const resultsMsg = document.getElementById("resultsMessage");

    if (quizBox) quizBox.classList.add("hidden");
    if (quizResults) quizResults.classList.remove("hidden");
    
    // Calculate final score
    let computedScore = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
        if (quizAnswers[idx] === q.answer) {
            computedScore++;
        }
    });
    quizScore = computedScore;

    if (finalScoreText) {
        finalScoreText.innerText = `${quizScore} / ${QUIZ_QUESTIONS.length}`;
    }
    
    // Save quiz result to Firebase portal
    if (typeof saveQuizResult === 'function') {
      saveQuizResult(MODULE_ID, quizScore, QUIZ_QUESTIONS.length);
    }
    if (typeof completeOneTimeQuizAttempt === 'function') {
      completeOneTimeQuizAttempt();
    }

    if (resultsMsg) {
        const pct = (quizScore / QUIZ_QUESTIONS.length) * 100;
        if (pct === 100) {
            resultsMsg.innerText = "Perfect! Excellent work, future IT Professional! 🏆";
        } else if (pct >= 80) {
            resultsMsg.innerText = "Great job! Very strong understanding of web requests, security, and troubleshooting! 🌟";
        } else if (pct >= 50) {
            resultsMsg.innerText = "Passed! Review the slides to strengthen your knowledge.";
        } else {
            resultsMsg.innerText = "Try again! Go through the slides to review core concepts.";
        }
    }
}

function startQuizReview() {
    isReviewMode = true;
    quizCurrentQuestion = 0;
    
    const quizBox = document.getElementById("quizBox");
    const quizResults = document.getElementById("quizResults");
    if (quizBox) quizBox.classList.remove("hidden");
    if (quizResults) quizResults.classList.add("hidden");
    
    loadQuestion();
}

// Auth callbacks for quiz gating
function onAuthGateChanged(user, isApproved) {
    updateQuizAccessUI(isApproved);
    if (typeof refreshFinishModuleControl === 'function') refreshFinishModuleControl();
    if (user && isApproved && typeof recordLessonProgress === 'function') {
        recordLessonProgress(MODULE_ID, currentSlide, totalSlides);
    }
}

function updateQuizAccessUI(isApproved) {
    const quizBox = document.getElementById("quizBox");
    if (!quizBox) return;
    
    let overlay = quizBox.querySelector('.quiz-lock-overlay[data-lock="access"]');
    if (isApproved) {
        if (overlay) overlay.remove();
        quizBox.classList.remove("gated-locked");
        if (typeof refreshOneTimeQuizGate === 'function') refreshOneTimeQuizGate();
    } else {
        if (typeof removeQuizGateOverlay === 'function') removeQuizGateOverlay();
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "quiz-lock-overlay";
            overlay.dataset.lock = "access";
            quizBox.appendChild(overlay);
        }
        quizBox.classList.add("gated-locked");
        
        const isUser = auth.currentUser;
        if (!isUser) {
            overlay.innerHTML = `
                <div class="quiz-lock-card">
                    <div class="quiz-lock-title">🔐 Sign In Required</div>
                    <div class="quiz-lock-desc" style="margin-bottom: 20px;">To take this quiz and submit your grades, please sign in with your student Google account.</div>
                    <button class="btn btn-primary btn-lock-signin" style="pointer-events: auto;" onclick="if(typeof googleSignIn === 'function') googleSignIn()">Sign in with Google</button>
                </div>
            `;
        } else {
            overlay.innerHTML = `
                <div class="quiz-lock-card">
                    <div class="quiz-lock-title">⏳ Awaiting Approval</div>
                    <div class="quiz-lock-desc" style="margin-bottom: 20px;">Your account (<strong>${isUser.email}</strong>) is signed in but is pending teacher approval. Please wait for your instructor to approve your account.</div>
                    <button class="btn btn-secondary btn-lock-signin" style="pointer-events: auto; background: transparent; border: 1px solid var(--text-secondary); color: var(--text-primary);" onclick="if(typeof signOut === 'function') signOut()">Sign Out / Switch Account</button>
                </div>
            `;
        }
    }
}
