// app.js

// Presentation State
let currentSlide = 1;
const totalSlides = 11;
const MODULE_ID = 'hardware-part-2';

// Slide Titles for Left Sidebar Checklist
const SLIDE_TITLES = [
    "Welcome & Intro",
    "The Motherboard",
    "The CPU Core",
    "Processor Cycle",
    "System RAM",
    "Storage Options",
    "Latency Scale",
    "PC Spec Builder",
    "Memory Types",
    "Quiz Assessment",
    "Summary & Review"
];

// Quiz Database (15 Questions matching constraints)
const QUIZ_QUESTIONS = [
    {
        category: "Motherboard",
        question: "Which computer component acts as the 'nervous system' linking the CPU, RAM, and storage?",
        options: [
            "Power Supply Unit (PSU)",
            "Motherboard",
            "Hard Disk Drive (HDD)",
            "Graphics Processing Unit (GPU)"
        ],
        answer: 1,
        explanation: "The motherboard is the main printed circuit board (PCB) that houses and connects all core computer hardware components."
    },
    {
        category: "Motherboard Details",
        question: "What are the tiny copper pathways on a motherboard that transport electrical data signals called?",
        options: [
            "Fan headers",
            "Heatpipes",
            "Bus lines",
            "Sockets"
        ],
        answer: 2,
        explanation: "Bus lines are the physical copper circuits printed on the motherboard that transport data packets between chips."
    },
    {
        category: "CPU Basics",
        question: "What is the primary role of the CPU?",
        options: [
            "To store user files permanently",
            "To execute program instructions and process data calculations",
            "To convert AC wall power into DC power",
            "To output sound signals to audio speakers"
        ],
        answer: 1,
        explanation: "The Central Processing Unit (CPU) is the main processor or 'brain' that executes code instructions and coordinates tasks."
    },
    {
        category: "Processor Speed",
        question: "If a CPU has a clock speed of 3.2 GHz, what does this indicate?",
        options: [
            "It processes exactly 3.2 million operations per second.",
            "It runs 3.2 billion cycle ticks per second.",
            "It has 3.2 Megabytes of high-speed cache memory.",
            "It consumes 3.2 Watts of power under load."
        ],
        answer: 1,
        explanation: "Giga represents billion. A clock speed of 3.2 GHz means the internal clock ticks 3.2 billion times per second."
    },
    {
        category: "CPU Cycle",
        question: "What is the correct sequence of steps in the processor's machine cycle?",
        options: [
            "Read, Write, Store",
            "Fetch, Decode, Execute",
            "Load, Calculate, Reset",
            "Input, Process, Output"
        ],
        answer: 1,
        explanation: "The instruction cycle repeats three core steps: Fetch the instruction, Decode the binary command, and Execute the operation."
    },
    {
        category: "CPU Cycle",
        question: "Where does the CPU fetch its next instruction from during the fetch phase?",
        options: [
            "Solid State Drive (SSD)",
            "System RAM",
            "Motherboard BIOS ROM",
            "Graphics Card VRAM"
        ],
        answer: 1,
        explanation: "Active software and files must be loaded into Random Access Memory (RAM) so the CPU can fetch them rapidly."
    },
    {
        category: "CPU Architecture",
        question: "Which component performs the actual mathematical and logical calculations inside the CPU?",
        options: [
            "Control Unit (CU)",
            "Arithmetic Logic Unit (ALU)",
            "Cache Memory Pool",
            "Clock Generator"
        ],
        answer: 1,
        explanation: "The ALU (Arithmetic Logic Unit) is the mathematical subsystem of the CPU that handles all arithmetic and logical comparisons."
    },
    {
        category: "System Memory",
        question: "What type of memory is RAM (Random Access Memory)?",
        options: [
            "Non-volatile permanent storage memory",
            "Volatile temporary workspace memory",
            "Optical laser storage memory",
            "Magnetic disk storage memory"
        ],
        answer: 1,
        explanation: "RAM is volatile memory. It provides lightning-fast access but loses its stored contents as soon as power is disconnected."
    },
    {
        category: "Memory Hierarchy",
        question: "Which of the following memory types has the smallest capacity but the fastest response speed?",
        options: [
            "System RAM",
            "CPU Cache",
            "NVMe SSD",
            "Mechanical HDD"
        ],
        answer: 1,
        explanation: "CPU Cache (L1, L2, L3) is built directly onto the CPU silicon. It has very small storage capacity but operates at near-CPU speeds."
    },
    {
        category: "Storage Drives",
        question: "What is a key structural difference between a Solid State Drive (SSD) and a Hard Disk Drive (HDD)?",
        options: [
            "SSDs use spinning magnetic platters; HDDs use silicon microchips.",
            "SSDs have no moving parts and are much faster; HDDs use mechanical platters and are slower.",
            "HDDs lose data when powered off; SSDs retain data without power.",
            "SSDs require high-power fans; HDDs generate zero noise."
        ],
        answer: 1,
        explanation: "HDDs are mechanical, relying on spinning disks and moving magnetic read arms. SSDs store data electronically on flash memory chips, making them faster and shock-resistant."
    },
    {
        category: "Storage Standards",
        question: "Which modern SSD interface plugs directly into the motherboard and delivers the highest transfer speeds?",
        options: [
            "SATA SSD",
            "NVMe SSD",
            "USB Flash Drive",
            "IDE Ribbon Cable"
        ],
        answer: 1,
        explanation: "NVMe (Non-Volatile Memory Express) SSDs connect directly to PCIe lanes on the motherboard, avoiding older SATA speed limitations."
    },
    {
        category: "Memory Properties",
        question: "What does the term 'volatile' mean in computer memory contexts?",
        options: [
            "The memory is prone to structural damage.",
            "The memory chips run at very high operating temperatures.",
            "The stored information is lost when power is turned off.",
            "The memory sectors are write-protected."
        ],
        answer: 2,
        explanation: "Volatile memory requires continuous electrical current to retain its state. If power fails, the data disappears."
    },
    {
        category: "Operating Systems",
        question: "What is Virtual Memory (or paging)?",
        options: [
            "A memory card hosted on a remote cloud server",
            "Using a portion of the storage drive as overflow RAM when system memory is full",
            "A software simulation of CPU registers",
            "A graphic card memory buffer"
        ],
        answer: 1,
        explanation: "When system RAM is full, the operating system swaps less-active memory blocks to a hidden file on the storage drive (paging file) to prevent crashes."
    },
    {
        category: "System Balance",
        question: "Which hardware combination is most balanced and likely to avoid performance bottlenecks?",
        options: [
            "Intel Core i7 CPU, 4GB RAM, 1TB Mechanical HDD",
            "Intel Core i7 CPU, 16GB RAM, 512GB NVMe SSD",
            "Intel Celeron CPU, 4GB RAM, 1TB Mechanical HDD",
            "Intel Celeron CPU, 16GB RAM, 1TB Mechanical HDD"
        ],
        answer: 1,
        explanation: "A balanced PC pairs a fast CPU with sufficient RAM (16GB) and high-speed storage (SSD) so no component is left idling."
    },
    {
        category: "System Bottlenecks",
        question: "Why does a mechanical HDD cause a severe bottleneck for a fast Core i7 processor?",
        options: [
            "The CPU draws too much current, causing the disk platters to warp.",
            "The HDD's physical disk sector search latency forces the CPU to waste millions of clock cycles waiting for data.",
            "The motherboard bus lines are too narrow to carry HDD signals.",
            "The mechanical HDD generates electromagnetic fields that freeze the CPU."
        ],
        answer: 1,
        explanation: "Mechanical HDDs take milliseconds (millions of nanoseconds) to locate files. A fast CPU operates in nanoseconds, meaning it sits idle waiting for the disk to retrieve data."
    }
];

// Quiz State
let quizCurrentQuestion = 0;
let quizScore = 0;
let quizAnswers = [];

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupTheme();
    setupKeyboardShortcuts();
    selectLatencyComponent('cache');
    updateBuilderRating();
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
    const savedTheme = localStorage.getItem("itc-theme") || "dark";
    htmlEl.setAttribute("data-theme", savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = htmlEl.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            htmlEl.setAttribute("data-theme", newTheme);
            localStorage.setItem("itc-theme", newTheme);
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

// Interactive Widget: Latency Details
function selectLatencyComponent(comp) {
    const box = document.getElementById("latency-details-box");
    if (!box) return;

    // Reset labels highlight
    ['cache', 'ram', 'ssd', 'hdd'].forEach(c => {
        const lbl = document.getElementById(`lbl-${c}`);
        if (lbl) lbl.style.color = '';
    });

    const activeLbl = document.getElementById(`lbl-${comp}`);
    if (activeLbl) activeLbl.style.color = 'var(--color-accent)';

    if (comp === 'cache') {
        box.innerHTML = `
            <strong>CPU L1 Cache:</strong> Access speed is approx <strong>0.5 nanoseconds</strong>.
            <br>Scaled to human terms, if cache access takes <strong>1 second</strong>:
            <ul>
                <li>It is like picking up a piece of paper directly off your desk.</li>
                <li>Extremely fast, but has very low capacity (kilobytes).</li>
            </ul>
        `;
    } else if (comp === 'ram') {
        box.innerHTML = `
            <strong>RAM System Memory:</strong> Access speed is approx <strong>12 nanoseconds</strong> (24x slower than cache).
            <br>Scaled to human terms, if cache access takes <strong>1 second</strong>:
            <ul>
                <li>RAM access takes about <strong>24 seconds</strong>.</li>
                <li>Like standing up, walking to a filing cabinet in the same room, and grabbing a folder.</li>
            </ul>
        `;
    } else if (comp === 'ssd') {
        box.innerHTML = `
            <strong>NVMe Solid State Drive:</strong> Access speed is approx <strong>100,000 nanoseconds</strong> (200,000x slower than cache).
            <br>Scaled to human terms, if cache access takes <strong>1 second</strong>:
            <ul>
                <li>SSD access takes about <strong>55 hours</strong> (over 2 days).</li>
                <li>Like leaving your office building, driving to a library in another city, and retrieving a book.</li>
            </ul>
        `;
    } else if (comp === 'hdd') {
        box.innerHTML = `
            <strong>Mechanical Hard Disk (HDD):</strong> Access speed is approx <strong>10,000,000 nanoseconds</strong> (20,000,000x slower than cache).
            <br>Scaled to human terms, if cache access takes <strong>1 second</strong>:
            <ul>
                <li>HDD access takes about <strong>7.6 months</strong>!</li>
                <li>Like taking a cargo ship across the ocean to retrieve a scroll. The physical search time of spinning sectors causes massive CPU waiting bottlenecks.</li>
            </ul>
        `;
    }
}

// Interactive Widget: Spec Builder
let builderSpecs = {
    cpu: 'celeron',
    ram: '4gb',
    storage: 'hdd'
};

function selectBuilderPart(part, option) {
    builderSpecs[part] = option;

    // Toggle button active classes
    if (part === 'cpu') {
        document.getElementById("cpu-celeron").classList.toggle("active", option === 'celeron');
        document.getElementById("cpu-i7").classList.toggle("active", option === 'i7');
    } else if (part === 'ram') {
        document.getElementById("ram-4gb").classList.toggle("active", option === '4gb');
        document.getElementById("ram-16gb").classList.toggle("active", option === '16gb');
    } else if (part === 'storage') {
        document.getElementById("storage-hdd").classList.toggle("active", option === 'hdd');
        document.getElementById("storage-ssd").classList.toggle("active", option === 'ssd');
    }

    updateBuilderRating();
}

function updateBuilderRating() {
    const ratingVal = document.getElementById("system-rating-val");
    const ratingBar = document.getElementById("system-rating-bar");
    const feedback = document.getElementById("system-feedback-text");

    if (!ratingVal || !ratingBar || !feedback) return;

    const { cpu, ram, storage } = builderSpecs;

    let score = 0;
    let title = "";
    let desc = "";

    if (cpu === 'celeron' && ram === '4gb' && storage === 'hdd') {
        score = 20;
        title = "Budget PC (Slow)";
        desc = "<strong>Bottlenecks: Storage & RAM.</strong> Extremely slow. Best suited for basic, single-task word processing. Multitasking will cause heavy disk swapping and system freezing.";
    } else if (cpu === 'celeron' && ram === '16gb' && storage === 'ssd') {
        score = 60;
        title = "Snappy Office PC";
        desc = "<strong>Bottlenecks: CPU.</strong> The SSD and 16GB RAM keep the desktop navigation and browser snappy, but the weak Celeron processor will struggle with video editing, heavy math, or gaming.";
    } else if (cpu === 'i7' && ram === '4gb' && storage === 'hdd') {
        score = 35;
        title = "Severely Bottlenecked!";
        desc = "<strong>Warning: Major Mismatch!</strong> Pairing a powerful Intel i7 CPU with 4GB RAM and a slow HDD is a waste. The CPU will spend 90% of its time waiting for the slow HDD to swap memory files (paging thrash).";
    } else if (cpu === 'i7' && ram === '16gb' && storage === 'hdd') {
        score = 55;
        title = "HDD Storage Bottleneck";
        desc = "<strong>Bottlenecks: Storage.</strong> The fast CPU and good RAM help once apps are loaded, but booting up, loading files, and launching applications will feel sluggish due to the mechanical drive speed.";
    } else if (cpu === 'i7' && ram === '16gb' && storage === 'ssd') {
        score = 95;
        title = "Performance Workstation";
        desc = "<strong>Excellent Balance: No Bottlenecks.</strong> The high-speed CPU is fed data instantly by the fast NVMe SSD and ample RAM. Perfect for gaming, video editing, software development, and multitasking.";
    } else if (cpu === 'celeron' && ram === '4gb' && storage === 'ssd') {
        score = 45;
        title = "Responsive Budget PC";
        desc = "<strong>Bottlenecks: CPU & RAM.</strong> The SSD enables quick boot times and folder opening, but opening multiple browser tabs or apps will fill the 4GB RAM and max out the Celeron CPU.";
    } else if (cpu === 'celeron' && ram === '16gb' && storage === 'hdd') {
        score = 38;
        title = "Slow Memory PC";
        desc = "<strong>Bottlenecks: CPU & Storage.</strong> You have plenty of RAM to open multiple files, but the slow HDD and slow CPU mean they will take a very long time to open and run.";
    } else if (cpu === 'i7' && ram === '4gb' && storage === 'ssd') {
        score = 50;
        title = "Memory Bottlenecked";
        desc = "<strong>Bottlenecks: RAM.</strong> Booting is fast and single tasks are blazing fast, but running multiple tasks or heavy apps will quickly overflow the 4GB RAM, forcing the system to slow down.";
    }

    ratingVal.innerText = title;
    ratingBar.style.width = `${score}%`;
    feedback.innerHTML = desc;

    // Change color based on rating score
    if (score < 40) {
        ratingVal.style.color = 'var(--color-error)';
        ratingBar.style.background = 'var(--color-error)';
    } else if (score < 75) {
        ratingVal.style.color = '#f59e0b'; // Amber
        ratingBar.style.background = '#f59e0b';
    } else {
        ratingVal.style.color = 'var(--color-success)';
        ratingBar.style.background = 'linear-gradient(90deg, var(--color-primary-light), var(--color-accent))';
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
            resultsMsg.innerText = "Great job! Very strong understanding of core components! 🌟";
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
