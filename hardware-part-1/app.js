// app.js

// Presentation State
let currentSlide = 1;
const totalSlides = 12;
const MODULE_ID = 'hardware-part-1';

// Slide Titles for Left Sidebar Checklist
const SLIDE_TITLES = [
    "Welcome & Intro",
    "What is Hardware?",
    "The Binary System",
    "Bits and Bytes",
    "Binary Calculator",
    "Representing Text",
    "ASCII Encoding",
    "ASCII Limitations",
    "Unicode Standard",
    "Text-to-Binary",
    "Quiz Assessment",
    "Summary & Review"
];

// Quiz Database (15 Questions matching constraints)
const QUIZ_QUESTIONS = [
    {
        category: "Number Systems",
        question: "What system do humans use for everyday counting, utilizing digits 0 through 9?",
        options: [
            "Binary (Base 2)",
            "Hexadecimal (Base 16)",
            "Decimal (Base 10)",
            "Octal (Base 8)"
        ],
        answer: 2,
        explanation: "Humans use the decimal (Base 10) system daily, which relies on 10 digits (0-9) likely due to our ten fingers."
    },
    {
        category: "Binary Basics",
        question: "What is the native binary digit system utilized by computer hardware?",
        options: [
            "Decimal",
            "Bit",
            "Byte",
            "Kilobyte"
        ],
        answer: 1,
        explanation: "A bit (short for binary digit) is the smallest, most fundamental unit of information in computing, representing a 0 or 1."
    },
    {
        category: "Binary Basics",
        question: "How many bits compose a single standard computer Byte?",
        options: [
            "4 bits",
            "8 bits",
            "16 bits",
            "32 bits"
        ],
        answer: 1,
        explanation: "A byte is always composed of exactly 8 bits grouped together to represent a character or number value."
    },
    {
        category: "Data Representation",
        question: "In computer hardware, what electrical state does the binary digit '0' represent?",
        options: [
            "High voltage (ON)",
            "Low/no voltage (OFF)",
            "Alternating current",
            "Static discharge"
        ],
        answer: 1,
        explanation: "Binary 0 represents the physical absence of electrical voltage (switch OFF), whereas 1 represents voltage presence (switch ON)."
    },
    {
        category: "Byte Capacity",
        question: "What is the maximum decimal value that can be represented by a single byte (8 bits)?",
        options: [
            "127",
            "255",
            "256",
            "1024"
        ],
        answer: 1,
        explanation: "Since 2 to the power of 8 yields 256 unique combinations, the decimal range goes from 0 to 255."
    },
    {
        category: "Character Encoding",
        question: "Which 7-bit character encoding system represents basic English letters, digits, and control characters?",
        options: [
            "Unicode",
            "ASCII",
            "UTF-8",
            "EBCDIC"
        ],
        answer: 1,
        explanation: "ASCII is a 7-bit standard established in 1963 for mapping English characters to binary numbers."
    },
    {
        category: "ASCII",
        question: "What is the standard decimal ASCII value mapped to the uppercase letter 'A'?",
        options: [
            "65",
            "97",
            "48",
            "32"
        ],
        answer: 0,
        explanation: "In the ASCII lookup table, uppercase 'A' is mapped to decimal 65. Lowercase 'a' is mapped to decimal 97."
    },
    {
        category: "Encoding Limitations",
        question: "Why did the ASCII standard become insufficient as computing went global?",
        options: [
            "It was too slow to compute.",
            "It only supported 128 characters, lacking accents, foreign scripts, and emojis.",
            "It required too much storage space per letter.",
            "It lost its memory when power was turned off."
        ],
        answer: 1,
        explanation: "ASCII's 128 characters can only accommodate English. It cannot support European accents, Asian logographs, Arabic, or emojis."
    },
    {
        category: "Unicode",
        question: "Which modern character standard represents almost all written languages, symbols, and emojis globally?",
        options: [
            "ASCII",
            "EBCDIC",
            "Unicode",
            "Baudot Code"
        ],
        answer: 2,
        explanation: "Unicode is the modern universal standard designed to represent every text character across all world languages."
    },
    {
        category: "Unicode Encodings",
        question: "What is the most dominant variable-width Unicode encoding format on the World Wide Web today?",
        options: [
            "UTF-8",
            "UTF-16",
            "ASCII",
            "UTF-32"
        ],
        answer: 0,
        explanation: "UTF-8 is the default character encoding for over 95% of websites, storing characters in blocks of 1 to 4 bytes."
    },
    {
        category: "Binary Conversion",
        question: "Which binary string represents the decimal value 5?",
        options: [
            "00000101",
            "00000110",
            "00000011",
            "00000111"
        ],
        answer: 0,
        explanation: "In positional notation: (4 x 1) + (2 x 0) + (1 x 1) = 5, which corresponds to binary 00000101."
    },
    {
        category: "Storage Units",
        question: "If a digital file is exactly 2 Megabytes (MB), approximately how many bytes does it contain?",
        options: [
            "2,000 bytes",
            "20,000 bytes",
            "2,000,000 bytes",
            "2,000,000,000 bytes"
        ],
        answer: 2,
        explanation: "Mega represents million. Therefore, 2 MB is approximately 2 million bytes of digital data."
    },
    {
        category: "Character Encoding",
        question: "What is the definition of character encoding?",
        options: [
            "A lookup table mapping binary code values to human-readable characters",
            "A method of compressing video files",
            "A firewall security mechanism",
            "A hardware motherboard architecture"
        ],
        answer: 0,
        explanation: "Character encoding acts as a lookup dictionary matching electronic binary numbers to text characters."
    },
    {
        category: "UTF-8 Standards",
        question: "Which statement is true regarding UTF-8 backward compatibility?",
        options: [
            "It is incompatible with older systems.",
            "Its first 128 codes are 100% identical to ASCII.",
            "It only works on Windows operating systems.",
            "It renders all text as raster images."
        ],
        answer: 1,
        explanation: "To prevent data corruption in old files, the first 128 characters of UTF-8 are mapped identically to ASCII."
    },
    {
        category: "Hardware Logic",
        question: "What are the microscopic electronic switches inside a CPU that process binary 1 and 0 states?",
        options: [
            "Resistors",
            "Capacitors",
            "Transistors",
            "Inductors"
        ],
        answer: 2,
        explanation: "Transistors act as electrical switches. When turned ON or OFF, they represent the binary states 1 and 0."
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
    initBinaryCalculator();
    initTextConverter();
    resetQuiz();
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
        // Prevent shortcuts if user is typing in forms
        if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
            return;
        }

        if (e.key === "ArrowRight" || e.key === "Space") {
            // Block navigation inside quiz slide unless completed
            if (currentSlide === 11 && quizCurrentQuestion < QUIZ_QUESTIONS.length) {
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

// Interactive Widget: Binary Calculator
let binaryBitsState = [0, 0, 0, 0, 0, 0, 0, 0]; // 8-bit state

function initBinaryCalculator() {
    const row = document.getElementById("binary-toggle-row");
    if (!row) return;

    row.innerHTML = "";
    const weights = [128, 64, 32, 16, 8, 4, 2, 1];

    weights.forEach((weight, idx) => {
        const btn = document.createElement("button");
        btn.id = `bit-btn-${idx}`;
        btn.className = `bit-btn ${binaryBitsState[idx] === 1 ? 'active' : ''}`;
        btn.innerHTML = `
            <span class="bit-val">${binaryBitsState[idx]}</span>
            <span class="bit-weight">${weight}</span>
        `;
        btn.addEventListener("click", () => {
            binaryBitsState[idx] = binaryBitsState[idx] === 0 ? 1 : 0;
            btn.classList.toggle("active", binaryBitsState[idx] === 1);
            btn.querySelector(".bit-val").innerText = binaryBitsState[idx];
            updateBinaryCalculatorOutput();
        });
        row.appendChild(btn);
    });

    updateBinaryCalculatorOutput();
}

function updateBinaryCalculatorOutput() {
    const binStr = binaryBitsState.join("");
    const decVal = parseInt(binStr, 2);
    const hexVal = "0x" + decVal.toString(16).toUpperCase().padStart(2, "0");

    const binTextEl = document.getElementById("bin-val-text");
    const decTextEl = document.getElementById("dec-val-text");
    const hexTextEl = document.getElementById("hex-val-text");

    if (binTextEl) binTextEl.innerText = binStr;
    if (decTextEl) decTextEl.innerText = decVal;
    if (hexTextEl) hexTextEl.innerText = hexVal;
}

// Interactive Widget: Text to Binary (ASCII/UTF-8)
function initTextConverter() {
    const inputTextArea = document.getElementById("text-to-convert");
    const outputBox = document.getElementById("binary-ascii-output");

    if (!inputTextArea || !outputBox) return;

    inputTextArea.addEventListener("input", () => {
        const text = inputTextArea.value;
        if (!text) {
            outputBox.innerText = "00000000";
            return;
        }

        let binaryResult = [];
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const binaryByte = charCode.toString(2).padStart(8, "0");
            binaryResult.push(binaryByte);
        }
        outputBox.innerText = binaryResult.join(" ");
    });

    // Set default value
    inputTextArea.value = "Hello";
    inputTextArea.dispatchEvent(new Event("input"));
}

// Interactive Quiz System Logic
function resetQuiz() {
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
            btn.addEventListener("click", () => selectOption(idx));
            optionsGrid.appendChild(btn);
        });
    }

    // Update progress steps
    const steps = document.querySelectorAll(".quiz-progress-step");
    steps.forEach((step, idx) => {
        step.classList.toggle("active-q", idx === quizCurrentQuestion);
        if (idx < quizCurrentQuestion) {
            const isCorrect = quizAnswers[idx];
            step.classList.add(isCorrect ? "correct-q" : "incorrect-q");
        } else {
            step.classList.remove("correct-q", "incorrect-q");
        }
    });

    updateScoreText();
}

function selectOption(selectedIdx) {
    // Block multiple clicks
    const feedbackPanel = document.getElementById("feedbackPanel");
    if (feedbackPanel && !feedbackPanel.classList.contains("hidden")) return;

    const q = QUIZ_QUESTIONS[quizCurrentQuestion];
    const isCorrect = selectedIdx === q.answer;
    
    if (isCorrect) quizScore++;
    quizAnswers.push(isCorrect);

    // Disable options buttons and highlight answer
    const buttons = document.querySelectorAll("#optionsGrid .option-btn");
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answer) {
            btn.classList.add("selected-correct");
        } else if (idx === selectedIdx && !isCorrect) {
            btn.classList.add("selected-incorrect");
        }
    });

    // Display feedback panel
    const iconEl = document.getElementById("feedbackIcon");
    const titleEl = document.getElementById("feedbackTitle");
    const textEl = document.getElementById("feedbackText");

    if (iconEl) {
        iconEl.innerText = isCorrect ? "✓" : "✗";
        iconEl.className = `feedback-icon ${isCorrect ? 'correct-icon' : 'incorrect-icon'}`;
    }
    if (titleEl) {
        titleEl.innerText = isCorrect ? "Correct!" : "Incorrect";
        titleEl.className = `feedback-title ${isCorrect ? 'correct-title' : 'incorrect-title'}`;
    }
    if (textEl) textEl.innerHTML = q.explanation;
    if (feedbackPanel) feedbackPanel.classList.remove("hidden");

    updateScoreText();
}

function nextQuestion() {
    quizCurrentQuestion++;
    if (quizCurrentQuestion < QUIZ_QUESTIONS.length) {
        loadQuestion();
    } else {
        showQuizResults();
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
    
    if (finalScoreText) {
        finalScoreText.innerText = `${quizScore} / ${QUIZ_QUESTIONS.length}`;
    }
    
    // Save quiz result to Firebase portal
    if (typeof saveQuizResult === 'function') {
      saveQuizResult(MODULE_ID, quizScore, QUIZ_QUESTIONS.length);
    }

    if (resultsMsg) {
        const pct = (quizScore / QUIZ_QUESTIONS.length) * 100;
        if (pct === 100) {
            resultsMsg.innerText = "Perfect! Excellent work, future IT Professional! 🏆";
        } else if (pct >= 80) {
            resultsMsg.innerText = "Great job! Very strong understanding of data representation! 🌟";
        } else if (pct >= 50) {
            resultsMsg.innerText = "Passed! Review the slides to strengthen your knowledge.";
        } else {
            resultsMsg.innerText = "Try again! Go through the slides to review core concepts.";
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

