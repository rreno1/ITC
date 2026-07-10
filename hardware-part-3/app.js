// app.js

// Presentation State
let currentSlide = 1;
const totalSlides = 11;
const MODULE_ID = 'hardware-part-3';

// Slide Titles for Left Sidebar Checklist
const SLIDE_TITLES = [
    "Welcome & Intro",
    "Input & Output",
    "USB Ports",
    "Display Ports",
    "Wireless RF",
    "Expansion Slots",
    "Ports Activity",
    "Operating Systems",
    "Device Drivers",
    "Quiz Assessment",
    "Summary & Review"
];

// Quiz Database (15 Questions matching constraints)
const QUIZ_QUESTIONS = [
    {
        category: "I/O Devices",
        question: "Which of the following describes a computer monitor's hardware category?",
        options: [
            "Input Device",
            "Output Device",
            "Storage Device",
            "Processing Device"
        ],
        answer: 1,
        explanation: "Monitors receive processed digital frames from the graphics card and display them visually, categorizing them as output devices."
    },
    {
        category: "I/O Devices",
        question: "Which input device translates mechanical physical movements on a flat surface into a screen cursor?",
        options: [
            "Keyboard",
            "Mouse",
            "Printer",
            "Audio Speaker"
        ],
        answer: 1,
        explanation: "A mouse acts as an input sensor that tracks flat coordinates and sends pointer coordinate adjustments to the operating system."
    },
    {
        category: "USB Standards",
        question: "What does the abbreviation 'USB' stand for in computer connectivity?",
        options: [
            "Universal System Board",
            "Universal Serial Bus",
            "United Standard Bus",
            "Unified Serial Buffer"
        ],
        answer: 1,
        explanation: "USB stands for Universal Serial Bus, a standardized bus interface that unified peripheral connections."
    },
    {
        category: "USB Standards",
        question: "Which USB standard is oval-shaped, reversible, and supports high-speed data alongside high-power charging?",
        options: [
            "USB Type-A",
            "USB Type-B",
            "USB Type-C",
            "Micro-USB"
        ],
        answer: 2,
        explanation: "USB Type-C is the modern reversible standard capable of up to 40 Gbps transfers and 240W Power Delivery."
    },
    {
        category: "Video Interfaces",
        question: "Which port is the standard interface for connecting modern high-definition monitors and gaming consoles?",
        options: [
            "HDMI",
            "VGA (analog D-sub)",
            "RJ45 Ethernet",
            "DB9 Serial Connector"
        ],
        answer: 0,
        explanation: "HDMI (High-Definition Multimedia Interface) transmits uncompressed digital audio and video streams together."
    },
    {
        category: "Wireless RF",
        question: "Which radio frequency protocol operates on 2.4 GHz, 5 GHz, or 6 GHz to connect local devices to the internet?",
        options: [
            "Bluetooth",
            "Wi-Fi",
            "NFC (Near Field)",
            "Infrared Light"
        ],
        answer: 1,
        explanation: "Wi-Fi (Wireless Fidelity) utilizes microwaves to establish local area network connections without cabling."
    },
    {
        category: "Wireless RF",
        question: "Which short-range connection standard is designed for low-power accessories like keyboards and wireless earbuds?",
        options: [
            "Wi-Fi",
            "Bluetooth",
            "Gigabit Ethernet",
            "Cellular LTE"
        ],
        answer: 1,
        explanation: "Bluetooth operates at low power over short distances (less than 10m) to link client accessories."
    },
    {
        category: "Motherboard Slots",
        question: "What connection slot standard on the motherboard is used to install upgrade cards like dedicated GPUs?",
        options: [
            "SATA controller",
            "PCIe (PCI Express)",
            "Front panel header",
            "USB motherboard header"
        ],
        answer: 1,
        explanation: "PCIe slots connect expansion cards (GPUs, NICs) directly to CPU lane circuits for massive bandwidth."
    },
    {
        category: "System Software",
        question: "What category of software is the computer's Operating System (OS)?",
        options: [
            "Application Software",
            "System Software",
            "Utility Software",
            "Productivity Software"
        ],
        answer: 1,
        explanation: "The OS is system software because it operates hardware resources and provides foundation blocks for app software."
    },
    {
        category: "Operating Systems",
        question: "Which operating system is free, open-source, and powers the majority of global web servers?",
        options: [
            "Microsoft Windows",
            "Apple macOS",
            "Linux",
            "ChromeOS"
        ],
        answer: 2,
        explanation: "Linux is open-source. Due to its stability and security, it runs over 90% of cloud servers and forms the core of Android."
    },
    {
        category: "Device Drivers",
        question: "What is the primary role of a device driver in a computer?",
        options: [
            "To physically clean dust from peripheral connector ports.",
            "To translate standard OS commands into device-specific hardware signals.",
            "To connect the PC to local network hotspots.",
            "To scan permanent drives for malware viruses."
        ],
        answer: 1,
        explanation: "Drivers act as translators, enabling the generic Operating System to understand how to drive custom peripheral components."
    },
    {
        category: "Device Drivers",
        question: "What happens if a computer lacks the correct device driver for a newly plugged-in printer?",
        options: [
            "The physical printer hardware components will overheat.",
            "The Operating System cannot communicate with or send print files to the printer.",
            "The processor clock speed drops by half.",
            "The volatile RAM system memory fills up instantly."
        ],
        answer: 1,
        explanation: "Without the driver translation file, the OS has no way to formulate instructions that the printer can understand."
    },
    {
        category: "Networking Ports",
        question: "Which port is used to link a network interface card directly to a local router via copper cables?",
        options: [
            "USB-C port",
            "HDMI port",
            "RJ45 Ethernet port",
            "VGA connector"
        ],
        answer: 2,
        explanation: "The RJ45 (Registered Jack 45) port is the standard interface for modular 8P8C Ethernet copper networking plugs."
    },
    {
        category: "Operating Systems",
        question: "Which Operating System is developed by Apple and optimized exclusively for Macintosh desktop models?",
        options: [
            "Windows 11",
            "Linux Ubuntu",
            "macOS",
            "ChromeOS Flex"
        ],
        answer: 2,
        explanation: "macOS is proprietary Unix-based system software designed by Apple to run specifically on their Mac hardware."
    },
    {
        category: "Expansion Cards",
        question: "Which card adds high-fidelity audio output channels and dedicated jacks to a computer system?",
        options: [
            "Graphics Card (GPU)",
            "Sound Card",
            "Network Interface Card (NIC)",
            "Video Capture Card"
        ],
        answer: 1,
        explanation: "Sound cards convert digital sound files to clean analog voltages to drive speaker coils."
    }
];

// Port Matching Activity Data
const MATCHING_DATA = [
    { id: 1, name: "USB-C", desc: "A modern, symmetrical connector that handles data, video, and high-power charging." },
    { id: 2, name: "HDMI", desc: "Transmits high-definition digital audio and video signals to monitors or TVs." },
    { id: 3, name: "RJ45 Ethernet", desc: "Connects a computer network card to a local area network (LAN) router." },
    { id: 4, name: "DisplayPort", desc: "A high-performance digital video connector common on graphics cards." },
    { id: 5, name: "Audio Jack (3.5mm)", desc: "Transmits analog stereo sound signals to headphones or audio speakers." }
];

// Interactive Activity State
let selectedPort = null;
let selectedDesc = null;
let matchedCount = 0;

// Quiz State
let quizCurrentQuestion = 0;
let quizScore = 0;
let quizAnswers = [];

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupTheme();
    setupKeyboardShortcuts();
    initMatchingActivity();
    resetQuiz();
    if (typeof initOneTimeQuizGate === 'function') {
        initOneTimeQuizGate({ moduleId: MODULE_ID, total: QUIZ_QUESTIONS.length, resetQuiz });
    }
    setupScrollPromptListeners();
    setTimeout(updateScrollPrompt, 100);
    
    // Check initial quiz access gating status
    setTimeout(() => {
        if (typeof updateQuizAccessUI === 'function') {
            updateQuizAccessUI(window.isUserApproved);
        }
    }, 200);
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

// Generate the Left Sidebar steps checklist dynamically
function populateSidebar() {
    const sidebar = document.getElementById("sidebarChecklist");
    if (!sidebar) return;
    
    sidebar.innerHTML = "";
    SLIDE_TITLES.forEach((title, idx) => {
        const slideNum = idx + 1;
        const li = document.createElement("li");
        li.className = `sidebar-item ${slideNum === currentSlide ? 'active' : ''} ${slideNum < currentSlide ? 'completed' : ''}`;
        li.setAttribute("data-target", slideNum);
        
        // Dot indicator
        const dot = document.createElement("span");
        dot.className = "step-indicator-dot";
        dot.innerText = slideNum;
        
        // Label text
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

// Theme System Control (Dark / Light)
function setupTheme() {
    const themeToggle = document.getElementById("themeToggle");
    const htmlEl = document.documentElement;

    // Load saved preference
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "dark";
    htmlEl.setAttribute("data-theme", savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = htmlEl.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            htmlEl.setAttribute("data-theme", newTheme);
            localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        });
    }
}

// Keyboard shortcuts mapping
function setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "Space") {
            // Block navigation inside quiz slide unless completed
            if (currentSlide === 10 && quizCurrentQuestion < QUIZ_QUESTIONS.length) {
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

// Interactive Port Matching Activity
function initMatchingActivity() {
    const portsContainer = document.getElementById("matching-ports");
    const descContainer = document.getElementById("matching-descriptions");
    const feedbackBox = document.getElementById("matching-feedback-box");

    if (!portsContainer || !descContainer) return;

    portsContainer.innerHTML = "";
    descContainer.innerHTML = "";
    feedbackBox.innerText = "Select a port to begin.";
    feedbackBox.style.color = "var(--text-secondary)";

    matchedCount = 0;
    selectedPort = null;
    selectedDesc = null;

    // Shuffle descriptions to make it random
    const shuffledDescs = [...MATCHING_DATA].sort(() => Math.random() - 0.5);

    // Render Ports (Left column)
    MATCHING_DATA.forEach(item => {
        const div = document.createElement("div");
        div.className = "matching-item";
        div.innerText = item.name;
        div.setAttribute("data-id", item.id);
        div.addEventListener("click", () => selectPortItem(div));
        portsContainer.appendChild(div);
    });

    // Render Descriptions (Right column)
    shuffledDescs.forEach(item => {
        const div = document.createElement("div");
        div.className = "matching-item";
        div.innerText = item.desc;
        div.setAttribute("data-id", item.id);
        div.addEventListener("click", () => selectDescItem(div));
        descContainer.appendChild(div);
    });
}

function selectPortItem(el) {
    if (el.classList.contains("matched")) return;

    // Clear previous selected port
    const selected = document.querySelectorAll("#matching-ports .matching-item.selected");
    selected.forEach(item => item.classList.remove("selected"));

    selectedPort = el;
    el.classList.add("selected");

    checkMatch();
}

function selectDescItem(el) {
    if (el.classList.contains("matched")) return;

    // Clear previous selected desc
    const selected = document.querySelectorAll("#matching-descriptions .matching-item.selected");
    selected.forEach(item => item.classList.remove("selected"));

    selectedDesc = el;
    el.classList.add("selected");

    checkMatch();
}

function checkMatch() {
    const feedbackBox = document.getElementById("matching-feedback-box");

    if (selectedPort && selectedDesc) {
        const portId = selectedPort.getAttribute("data-id");
        const descId = selectedDesc.getAttribute("data-id");

        if (portId === descId) {
            // Correct match
            selectedPort.classList.remove("selected");
            selectedDesc.classList.remove("selected");
            selectedPort.classList.add("matched");
            selectedDesc.classList.add("matched");

            feedbackBox.innerText = `Correct! ${selectedPort.innerText} connected.`;
            feedbackBox.style.color = "var(--color-success)";

            matchedCount++;
            selectedPort = null;
            selectedDesc = null;

            if (matchedCount === MATCHING_DATA.length) {
                feedbackBox.innerText = "Congratulations! All ports successfully matched! 🎉";
                feedbackBox.style.color = "var(--color-success)";
                
                // Add a reset button to feedback
                const resetBtn = document.createElement("button");
                resetBtn.className = "btn btn-primary";
                resetBtn.style.marginTop = "10px";
                resetBtn.style.display = "block";
                resetBtn.style.marginLeft = "auto";
                resetBtn.style.marginRight = "auto";
                resetBtn.innerText = "Play Again";
                resetBtn.addEventListener("click", initMatchingActivity);
                feedbackBox.appendChild(resetBtn);
            }
        } else {
            // Mismatch
            feedbackBox.innerText = "Incorrect connection. Try matching another pair.";
            feedbackBox.style.color = "var(--color-error)";

            // Remove selected state after a short delay
            const p = selectedPort;
            const d = selectedDesc;
            selectedPort = null;
            selectedDesc = null;

            setTimeout(() => {
                p.classList.remove("selected");
                d.classList.remove("selected");
            }, 500);
        }
    } else if (selectedPort) {
        feedbackBox.innerText = `Port selected: ${selectedPort.innerText}. Now select its correct description.`;
        feedbackBox.style.color = "var(--text-secondary)";
    } else if (selectedDesc) {
        feedbackBox.innerText = "Description selected. Now select its matching physical port name.";
        feedbackBox.style.color = "var(--text-secondary)";
    }
}

// Interactive Quiz System Logic
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
            if (quizResults) quizResults.classList.add("hidden");
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
            resultsMsg.innerText = "Great job! Very strong understanding of ports, drivers, and Operating Systems! 🌟";
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

// Floating Scroll Prompt Management
function updateScrollPrompt() {
    const prompt = document.getElementById("scrollPrompt");
    if (!prompt) return;

    const activeSlideEl = document.getElementById(`slide-${currentSlide}`);
    if (!activeSlideEl) return;

    // Check if the slide is scrollable (scrollHeight > clientHeight + 15px tolerance)
    const isScrollable = activeSlideEl.scrollHeight > activeSlideEl.clientHeight + 15;
    
    // Check if already scrolled down
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
