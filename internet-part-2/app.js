// app.js

// Presentation State
let currentSlide = 1;
const totalSlides = 10;
const MODULE_ID = 'internet-part-2';

// Slide Titles for Left Sidebar Checklist
const SLIDE_TITLES = [
    "Welcome & Intro",
    "URLs & DNS",
    "Website Request Journey",
    "HTTP & Status Codes",
    "State, Cookies & Cache",
    "HTTPS, TLS & Certificates",
    "Rendering, Hosting & CDNs",
    "Security & Troubleshooting",
    "Quiz Assessment",
    "Summary & Review"
];

// Quiz Database (15 Questions matching constraints)
const QUIZ_QUESTIONS = [
    {
        category: "Packets & Routing",
        question: "What is the standard maximum size of a typical internet Ethernet packet?",
        options: [
            "128 bytes",
            "1,500 bytes",
            "64,000 bytes",
            "1 Megabyte"
        ],
        answer: 1,
        explanation: "The standard MTU (Maximum Transmission Unit) for Ethernet packets on the web is 1,500 bytes."
    },
    {
        category: "Packets & Routing",
        question: "How can an IP network continue delivering packets when one route becomes congested?",
        options: [
            "Every packet waits at its sender until the original route is empty.",
            "Routers may forward packets independently through other available paths.",
            "Every packet increases its payload until the congested link accepts it.",
            "Routers remove destination addresses so packets can bypass routing rules."
        ],
        answer: 1,
        explanation: "Packets travel independently. Routers dynamic-path packet chunks around network congestion blocks."
    },
    {
        category: "TCP Protocol",
        question: "Which of the following describes the first step of the TCP 3-way handshake?",
        options: [
            "Client sends ACK (Acknowledgment)",
            "Client sends SYN (Synchronize)",
            "Server sends SYN-ACK",
            "Server sends FIN (Finish)"
        ],
        answer: 1,
        explanation: "The client starts the TCP handshake by sending a SYN packet to synchronize sequence numbers."
    },
    {
        category: "TCP Protocol",
        question: "How does TCP normally recover when a required segment does not arrive?",
        options: [
            "It restarts every completed application request from the beginning.",
            "It detects the missing data and retransmits the needed segment.",
            "It changes the destination address into a multicast address.",
            "It converts the missing segment into a DNS response record."
        ],
        answer: 1,
        explanation: "TCP uses error recovery tracking. If a segment is missing, the client requests retransmission of that specific sequence block."
    },
    {
        category: "Domain Name System",
        question: "What is the primary role of the Domain Name System (DNS)?",
        options: [
            "To encrypt HTML tags inside browser files.",
            "To map human-readable domain names to numerical IP addresses.",
            "To assign local IP addresses to wifi clients dynamically.",
            "To check motherboard voltages during startup."
        ],
        answer: 1,
        explanation: "DNS acts as the web phonebook, resolving domain names (like google.com) to numeric IP targets."
    },
    {
        category: "Domain Name System",
        question: "After local caches and host settings, which service does a device normally ask to resolve a domain?",
        options: [
            "The domain's authoritative name server directly",
            "The relevant top-level-domain name server directly",
            "A configured recursive DNS resolver",
            "A website certificate authority"
        ],
        answer: 2,
        explanation: "A client normally asks a recursive resolver, which uses its cache and queries the DNS hierarchy when it needs more information."
    },
    {
        category: "HTTP Protocol",
        question: "Which HTTP request method is used by a browser to retrieve layout page files from a web server?",
        options: [
            "POST",
            "GET",
            "PUT",
            "DELETE"
        ],
        answer: 1,
        explanation: "Browsers use the GET method to retrieve documents or assets from a target server."
    },
    {
        category: "HTTP Protocol",
        question: "What does an HTTP 404 response status code indicate?",
        options: [
            "Request succeeded (OK)",
            "Server error occurred",
            "Resource not found",
            "Connection encrypted securely"
        ],
        answer: 2,
        explanation: "A 404 status code is returned by a web host indicating that the requested URL page was not found."
    },
    {
        category: "Web Security",
        question: "What protection does HTTPS primarily add to communication between a browser and a website?",
        options: [
            "It guarantees that every claim on the website is honest.",
            "It encrypts traffic and authenticates the site using TLS.",
            "It assigns private addresses to all visiting browser devices.",
            "It selects the fastest physical route for every packet."
        ],
        answer: 1,
        explanation: "HTTPS secures standard HTTP streams using SSL/TLS protocols to encrypt data transit."
    },
    {
        category: "Web Security",
        question: "What role does public-key cryptography play when an HTTPS session is established?",
        options: [
            "It compresses all page resources before transmission begins.",
            "It helps authenticate the server and establish session secrets.",
            "It replaces domain-name resolution with certificate file names.",
            "It assigns temporary IP addresses to browser applications."
        ],
        answer: 1,
        explanation: "HTTPS uses asymmetric public-private key cryptography during SSL handshakes to verify host certificates."
    },
    {
        category: "HTTP statelessness",
        question: "How do many websites connect later HTTP requests with an authenticated login session?",
        options: [
            "They identify the user only from the device's hardware address.",
            "They send a session identifier that the browser returns, often in a cookie.",
            "They keep one TCP connection permanently open for the account's lifetime.",
            "They reuse the device's DHCP lease as the authentication credential."
        ],
        answer: 1,
        explanation: "HTTP is stateless. Sites store session tokens in cookies saved locally in your browser to remember login states."
    },
    {
        category: "Domain Name System",
        question: "Which DNS server holds the final, definitive mapping record for a domain's IP address?",
        options: [
            "Root Name Server",
            "TLD Name Server (.com)",
            "Authoritative Name Server",
            "Local DHCP client"
        ],
        answer: 2,
        explanation: "The Authoritative Name Server is the final step in DNS queries, holding the actual IP mapping record for a domain."
    },
    {
        category: "HTTP Protocol",
        question: "Which HTTP method is commonly chosen when a form asks a server to process submitted data?",
        options: [
            "GET",
            "POST",
            "OPTIONS",
            "TRACE"
        ],
        answer: 1,
        explanation: "The POST method wraps form data inside the request body rather than URL queries, ideal for logins."
    },
    {
        category: "Web Security",
        question: "Which check best confirms that the current browser connection uses HTTPS for the displayed domain?",
        options: [
            "A blue badge placed anywhere inside the page content",
            "The browser's site information reports a secure HTTPS connection",
            "A blinking green image supplied by the website footer",
            "The page title includes the words verified and secure"
        ],
        answer: 1,
        explanation: "Use browser-controlled site information and the HTTPS URL. Page content can imitate badges, and encryption does not prove that a site's claims are honest."
    },
    {
        category: "Packets & Routing",
        question: "What parameter in a packet header tells the router how many hops a packet can survive before being dropped?",
        options: [
            "TTL (Time to Live)",
            "Sequence ID",
            "DHCP Lease Limit",
            "Port Number"
        ],
        answer: 0,
        explanation: "TTL (Time to Live) limits packet lifespan. Every router hop decrements TTL. If TTL reaches 0, the packet is discarded."
    }
];

// Interactive Widgets State
let isDNSResolving = false;
let isTCPSimulating = false;

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
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
            resultsMsg.innerText = "Great job! Very strong understanding of packets, handshakes, and encryption! 🌟";
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
