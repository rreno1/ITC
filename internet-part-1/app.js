// app.js

// Presentation State
let currentSlide = 1;
const totalSlides = 10;
const MODULE_ID = 'internet-part-1';

// Slide Titles for Left Sidebar Checklist
const SLIDE_TITLES = [
    "Welcome & Intro",
    "Clients & Servers",
    "IP Addressing",
    "Transition to IPv6",
    "Public vs Private",
    "Physical Layer",
    "DHCP Simulator",
    "IP Converter",
    "Quiz Assessment",
    "Summary & Review"
];

// Quiz Database (15 Questions matching constraints)
const QUIZ_QUESTIONS = [
    {
        category: "Network Nodes",
        question: "In the client-server model, what is the role of the Client device?",
        options: [
            "To coordinate physical network pathways and check hardware routes.",
            "To request digital resources and display layout files to the user.",
            "To host main databases and serve global requests continuously.",
            "To assign dynamic local IP address leases."
        ],
        answer: 1,
        explanation: "Clients (browsers, devices) initiate request cycles, asking servers for web assets and displaying them to the user."
    },
    {
        category: "Network Nodes",
        question: "Which hardware device acts as a traffic director, forwarding packet data along network paths?",
        options: [
            "Ethernet adapter",
            "Server mainframe",
            "Network Router",
            "Anti-static wrist strap"
        ],
        answer: 2,
        explanation: "Routers inspect packet header addresses and use routing tables to direct packets along the fastest pathways."
    },
    {
        category: "IP Address Basics",
        question: "How many bits compose a standard IPv4 address?",
        options: [
            "8 bits",
            "32 bits",
            "64 bits",
            "128 bits"
        ],
        answer: 1,
        explanation: "IPv4 addresses are 32 bits wide, divided into four 8-bit octets separated by dotted decimals."
    },
    {
        category: "IP Address Basics",
        question: "What is the maximum decimal value that can be represented in any single octet of an IPv4 address?",
        options: [
            "127",
            "255",
            "256",
            "1024"
        ],
        answer: 1,
        explanation: "An octet holds 8 bits. The maximum integer value of 8 binary digits (11111111) is 255 (range 0 to 255)."
    },
    {
        category: "IPv6 Standard",
        question: "Why was the 128-bit IPv6 address standard developed?",
        options: [
            "To make internet transmissions travel at the speed of light.",
            "Because the 4.3 billion addresses of IPv4 were completely exhausted.",
            "To force all local systems to use private cabling.",
            "To replace binary logic with base 10 arithmetic."
        ],
        answer: 1,
        explanation: "The global growth of smartphones and IoT devices exhausted the 4.3 billion available addresses under the 32-bit IPv4 layout."
    },
    {
        category: "IPv6 Standard",
        question: "How are IPv6 addresses written and formatted?",
        options: [
            "Dotted decimal blocks (e.g. 192.168.1.1)",
            "Hexadecimal characters grouped by colons (e.g. 2001:db8::1)",
            "Eight octets of raw binary numbers",
            "Dotted alphanumeric classes"
        ],
        answer: 1,
        explanation: "IPv6 uses 128 bits formatted as hexadecimal characters (0-9, A-F) grouped into blocks separated by colons."
    },
    {
        category: "IP Allocation",
        question: "Which range of IPv4 addresses represents a common private local namespace?",
        options: [
            "8.8.8.8 to 8.8.4.4",
            "192.168.0.0 to 192.168.255.255",
            "127.0.0.0 to 127.0.0.255",
            "224.0.0.0 to 239.255.255.255"
        ],
        answer: 1,
        explanation: "The 192.168.x.x block is reserved globally for local private networks and is not routable on the public web."
    },
    {
        category: "IP Allocation",
        question: "What does NAT (Network Address Translation) enable a local router to do?",
        options: [
            "Convert analog signals to optical laser beams.",
            "Map multiple private IP addresses to a single public IP address.",
            "Calculate subnet classes automatically.",
            "Increase CPU clock rate speeds on client nodes."
        ],
        answer: 1,
        explanation: "NAT enables a router to act as a bridge, translating private local IP packets into a single public address for web transit."
    },
    {
        category: "Dynamic Addressing",
        question: "What does the abbreviation DHCP stand for in computer networking?",
        options: [
            "Dynamic Host Configuration Protocol",
            "Direct Hardware Communication Port",
            "Domain Host Connection Packet",
            "Distributed Hypertext Control Protocol"
        ],
        answer: 0,
        explanation: "DHCP stands for Dynamic Host Configuration Protocol, which automates network address assignments."
    },
    {
        category: "DHCP Process",
        question: "Which acronym summarizes the four steps of a DHCP configuration handshake lease?",
        options: [
            "HTTP",
            "ASCII",
            "DORA",
            "BIOS"
        ],
        answer: 2,
        explanation: "DORA stands for Discover (broadcast), Offer (server response), Request (client selection), and Acknowledge (server lease binding)."
    },
    {
        category: "Physical Layer",
        question: "Which transmission medium uses rapid pulses of laser light inside thin glass strands to transport binary data?",
        options: [
            "Coaxial Cable",
            "Unshielded Twisted Pair (UTP)",
            "Fiber-Optic Cable",
            "Wi-Fi Microwaves"
        ],
        answer: 2,
        explanation: "Fiber optics use internal reflection to transmit laser light pulses, offering maximum speed and bandwidth over long distances."
    },
    {
        category: "Physical Layer",
        question: "What is the typical physical range limit of a standard copper twisted-pair Ethernet cable?",
        options: [
            "10 meters",
            "100 meters",
            "1,000 meters",
            "10,000 meters"
        ],
        answer: 1,
        explanation: "Standard copper Ethernet cabling (CAT-5/6) suffers from electrical signal attenuation past 100 meters."
    },
    {
        category: "Subnetting Classes",
        question: "An IP address starting with 10.50.1.10 belongs to which default IPv4 class?",
        options: [
            "Class A",
            "Class B",
            "Class C",
            "Class D"
        ],
        answer: 0,
        explanation: "Class A covers 0.0.0.0 to 127.255.255.255, characterized by having a large host field (up to 16 million nodes)."
    },
    {
        category: "Physical Layer",
        question: "What frequency microwave bands does Wi-Fi typically operate on?",
        options: [
            "2.4 GHz, 5 GHz, or 6 GHz",
            "800 MHz or 1900 MHz",
            "50 Hz or 60 Hz",
            "10 GHz or 20 GHz"
        ],
        answer: 0,
        explanation: "Wi-Fi signals operate in the unlicensed industrial/scientific microwave bands of 2.4 GHz, 5 GHz, and 6 GHz."
    },
    {
        category: "Network Architectures",
        question: "Which node is responsible for listening on ports and serving web layouts to multiple concurrent browsers?",
        options: [
            "Client laptop",
            "Web Server",
            "Subnet router",
            "LAN testing tool"
        ],
        answer: 1,
        explanation: "Servers are configured with host daemons that wait for client requests and dispatch HTML/CSS layout files back."
    }
];

// DHCP Simulator State
let dhcpStep = 0; // 0: Idle, 1: Discover, 2: Offer, 3: Request, 4: Bound
let dhcpTimer = null;
let leaseSeconds = 60;

// IP Converter State
let ipValue = "192.168.1.50";

// Quiz State
let quizCurrentQuestion = 0;
let quizScore = 0;
let quizAnswers = [];

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupKeyboardShortcuts();
    resetQuiz();
    if (typeof initOneTimeQuizGate === 'function') {
        initOneTimeQuizGate({ moduleId: MODULE_ID, total: QUIZ_QUESTIONS.length, resetQuiz });
    }
    processIPInput();
    
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

// Interactive Widget: DHCP DORA Simulator
function triggerDHCPStep() {
    const actionBtn = document.getElementById("dhcp-action-btn");
    const statusTxt = document.getElementById("dhcp-status-text");
    const timerBox = document.getElementById("dhcp-lease-timer");
    const timeVal = document.getElementById("dhcp-time-val");
    const logBox = document.getElementById("dhcp-log-box");

    if (!actionBtn || !statusTxt || !logBox) return;

    if (dhcpStep === 0) {
        // Broadcast DISCOVER
        dhcpStep = 1;
        statusTxt.innerText = "Discovering DHCP Server...";
        statusTxt.style.color = "var(--color-primary)";
        actionBtn.innerText = "Check for DHCP Offers";
        actionBtn.disabled = true;

        logBox.innerHTML = `<div><span style="color: var(--color-primary);">[CLIENT]</span> BROADCAST: DHCP Discover sent (Transaction ID: 0x8a92)</div>
        <div><span style="color: var(--text-secondary);">[NETWORK]</span> Searching for router interface leaseholders...</div>`;

        setTimeout(() => {
            actionBtn.disabled = false;
            logBox.innerHTML += `<div><span style="color: var(--color-success);">[ROUTER]</span> OFFER: DHCP Offer received!</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&bull; Proposed Address: 192.168.1.102</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&bull; Subnet Mask: 255.255.255.0</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&bull; Lease Time: 60 Seconds</div>`;
            statusTxt.innerText = "DHCP Offer Received";
            dhcpStep = 2;
        }, 1500);

    } else if (dhcpStep === 2) {
        // Send REQUEST
        dhcpStep = 3;
        statusTxt.innerText = "Requesting IP Lease...";
        actionBtn.disabled = true;

        logBox.innerHTML += `<div><span style="color: var(--color-primary);">[CLIENT]</span> BROADCAST: DHCP Request sent for IP 192.168.1.102</div>`;

        setTimeout(() => {
            actionBtn.disabled = false;
            logBox.innerHTML += `<div><span style="color: var(--color-success);">[ROUTER]</span> ACK: DHCP Acknowledgment received!</div>
            <div><span style="color: var(--color-success);">[SUCCESS]</span> Lease bound successfully! IP 192.168.1.102 active.</div>`;
            statusTxt.innerText = "Connected (192.168.1.102)";
            statusTxt.style.color = "var(--color-success)";
            actionBtn.innerText = "Disconnect / Release IP";
            dhcpStep = 4;

            // Start countdown timer
            leaseSeconds = 60;
            if (timerBox) timerBox.classList.remove("hidden");
            if (timeVal) timeVal.innerText = leaseSeconds;

            clearInterval(dhcpTimer);
            dhcpTimer = setInterval(() => {
                leaseSeconds--;
                if (timeVal) timeVal.innerText = leaseSeconds;
                if (leaseSeconds <= 0) {
                    clearInterval(dhcpTimer);
                    releaseDHCP();
                }
            }, 1000);
        }, 1500);

    } else if (dhcpStep === 4) {
        // Release IP
        releaseDHCP();
    }
}

function releaseDHCP() {
    const actionBtn = document.getElementById("dhcp-action-btn");
    const statusTxt = document.getElementById("dhcp-status-text");
    const timerBox = document.getElementById("dhcp-lease-timer");
    const logBox = document.getElementById("dhcp-log-box");

    clearInterval(dhcpTimer);
    dhcpStep = 0;

    if (statusTxt) {
        statusTxt.innerText = "Disconnected";
        statusTxt.style.color = "var(--text-primary)";
    }
    if (actionBtn) actionBtn.innerText = "Start DHCP Discover";
    if (timerBox) timerBox.classList.add("hidden");
    if (logBox) {
        logBox.innerHTML = `<div><span style="color: var(--color-error);">[CLIENT]</span> DHCP Release sent. Lease terminated.</div>
        <div>System ready. Click button to broadcast DISCOVER packet.</div>`;
    }
}

// Interactive Widget: IP to Binary & Class Analyzer
function processIPInput() {
    const input = document.getElementById("ip-address-input");
    const binaryOutput = document.getElementById("ip-binary-output");
    const classVal = document.getElementById("ip-class-val");
    const scopeVal = document.getElementById("ip-scope-val");
    const descPanel = document.getElementById("ip-breakdown-desc");

    if (!input || !binaryOutput || !classVal || !scopeVal) return;

    const ip = input.value.trim();
    const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

    if (!ipv4Regex.test(ip)) {
        binaryOutput.innerText = "Invalid IPv4 Address Format";
        binaryOutput.style.color = "var(--color-error)";
        classVal.innerText = "N/A";
        scopeVal.innerText = "N/A";
        return;
    }

    binaryOutput.style.color = "var(--text-primary)";
    const parts = ip.match(ipv4Regex).slice(1).map(Number);

    // Validate ranges
    for (let part of parts) {
        if (part > 255) {
            binaryOutput.innerText = "Octet limits exceeded (>255)";
            binaryOutput.style.color = "var(--color-error)";
            classVal.innerText = "N/A";
            scopeVal.innerText = "N/A";
            return;
        }
    }

    // Convert to binary
    const binaryStrings = parts.map(part => part.toString(2).padStart(8, "0"));
    binaryOutput.innerText = binaryStrings.join(" . ");

    // Determine Class (First Octet)
    const firstOctet = parts[0];
    let ipClass = "Class A";
    let descText = "";

    if (firstOctet >= 0 && firstOctet <= 127) {
        ipClass = "Class A";
        descText = `Class A network (First Octet ${firstOctet}). Default Subnet: 255.0.0.0. Supports up to 16,777,214 host nodes globally.`;
    } else if (firstOctet >= 128 && firstOctet <= 191) {
        ipClass = "Class B";
        descText = `Class B network (First Octet ${firstOctet}). Default Subnet: 255.255.0.0. Supports up to 65,534 host nodes.`;
    } else if (firstOctet >= 192 && firstOctet <= 223) {
        ipClass = "Class C";
        descText = `Class C network (First Octet ${firstOctet}). Default Subnet: 255.255.255.0. Supports up to 254 host nodes. Ideal for small local setups.`;
    } else if (firstOctet >= 224 && firstOctet <= 239) {
        ipClass = "Class D (Multicast)";
        descText = "Class D addresses are reserved for Multicast operations (streaming to multiple target hosts simultaneously).";
    } else {
        ipClass = "Class E (Experimental)";
        descText = "Class E addresses are reserved for experimental, research, and future protocol validation projects.";
    }

    classVal.innerText = ipClass;

    // Determine Scope (Private vs Public)
    let isPrivate = false;
    if (parts[0] === 10) {
        isPrivate = true; // 10.0.0.0/8
    } else if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) {
        isPrivate = true; // 172.16.0.0/12
    } else if (parts[0] === 192 && parts[1] === 168) {
        isPrivate = true; // 192.168.0.0/16
    } else if (parts[0] === 127) {
        scopeVal.innerText = "Loopback (Local)";
        descPanel.innerText = "Loopback address (127.x.x.x) is used by a device to send network packets back to itself for testing.";
        return;
    }

    scopeVal.innerText = isPrivate ? "Private" : "Public";
    scopeVal.style.color = isPrivate ? "var(--color-primary)" : "var(--color-accent)";
    descPanel.innerText = descText + (isPrivate ? " This address operates inside local private interfaces and is not routable on the public web." : " This is a routable public IP address accessible on the global internet directory.");
}

// // Interactive Quiz System Logic
let isReviewMode = false;

function resetQuiz() {
    if (typeof canResetOneTimeQuiz === 'function' && !canResetOneTimeQuiz()) return;
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
        optionsGrid.innerHTML = "";
        q.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + idx)}</span> <span class="option-text">${opt}</span>`;
            if (!isReviewMode) {
                btn.addEventListener("click", () => selectOption(idx));
            }
            optionsGrid.appendChild(btn);
        });
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
            resultsMsg.innerText = "Great job! Very strong understanding of network basics and addressing! 🌟";
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
