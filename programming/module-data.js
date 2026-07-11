window.CC101_MODULE_DATA = {
  id: "programming",
  title: "Programming",
  subtitle: "Algorithms, Logic, and Code",
  description: "Learn how precise algorithms become programs through variables, conditions, loops, functions, languages, events, and systematic debugging.",
  introVisual: "algorithm",
  objectives: [
    "Describe an algorithm and compare linear search with binary search.",
    "Write clear pseudocode using inputs, variables, expressions, and outputs.",
    "Use Boolean conditions to select appropriate program behavior.",
    "Use loops to repeat work while controlling when repetition stops.",
    "Decompose a problem into reusable functions with parameters and return values.",
    "Explain source code, machine code, compilers, interpreters, events, and debugging."
  ],
  lessons: [
    {
      title: "Algorithms, Search, and Pseudocode",
      category: "Algorithms",
      visual: "algorithm",
      lead: "An algorithm is a finite, precise sequence of steps for transforming input into a useful output.",
      paragraphs: [
        "A correct algorithm must eventually stop and produce the intended result for the cases it promises to handle. Efficiency asks how its required time or memory grows as the input becomes larger. Linear search checks items one by one and works even when the data is not sorted. Binary search repeatedly removes half of a sorted search space, so it can be much faster on large ordered data.",
        "Pseudocode expresses logic in readable steps without requiring the exact syntax of a programming language. Strong pseudocode names the input, decisions, repetition, and result clearly enough that another person could implement or test it. The right level of detail depends on the audience: steps should be precise but not buried in irrelevant machine operations."
      ],
      definitions: [
        { term: "Algorithm", definition: "A finite and precise procedure that transforms input into an expected output." },
        { term: "Linear search", definition: "A search that examines candidates one at a time until a match is found or the data ends." },
        { term: "Binary search", definition: "A search that repeatedly halves a sorted search space." }
      ],
      examples: [
        "Checking an unsorted attendance list from top to bottom is linear search.",
        "Finding a name in a sorted class directory can use binary search by comparing with the middle name.",
        "A recipe is algorithm-like, but a program needs more precise quantities, decisions, and stopping rules."
      ],
      analogy: "Binary search is like finding a word in a dictionary by opening near the middle and deciding which half can still contain the word.",
      misconception: "Binary search is not always available. Its halving decision depends on sorted data or another ordered condition.",
      review: [
        "Why can linear search work on unsorted data while binary search cannot?",
        "What details make pseudocode precise enough to test?"
      ]
    },
    {
      title: "Variables, Values, Expressions, and Input",
      category: "Program State",
      visual: "logic",
      lead: "A variable gives a meaningful name to a value that a program needs to store, inspect, or replace while it runs.",
      paragraphs: [
        "Values have types that describe their possible operations and representation, such as numbers, text, and Boolean truth values. An assignment stores a value in a variable. An expression combines values and operators to produce another value. Good names such as totalScore or studentName communicate purpose better than vague names such as x.",
        "Programs receive input from users, files, sensors, networks, or other functions. External input must be checked before use because it may be missing, incorrectly formatted, or outside an allowed range. Converting text input into a number can fail, so the program should provide a clear response instead of assuming every value is valid. Output may be displayed, stored, sent, or returned to another part of the program."
      ],
      definitions: [
        { term: "Variable", definition: "A named location or binding used to store a value during program execution." },
        { term: "Data type", definition: "A category of values that determines representation and valid operations." },
        { term: "Expression", definition: "A combination of values, variables, operators, or function calls that produces a value." }
      ],
      examples: [
        "total = price * quantity computes a new value and assigns it to total.",
        "A birth-year field arrives as text and should be validated before conversion to a number.",
        "A Boolean variable named isApproved can clearly represent one yes-or-no state."
      ],
      analogy: "A variable is a labeled container. The label explains the purpose, the current value is what is inside, and assignment replaces the contents.",
      misconception: "The equals sign in assignment often means store or replace, not prove that two mathematical expressions are permanently equal.",
      review: [
        "Why should a program validate input before using it in an expression?",
        "How does a meaningful variable name improve correctness and maintenance?"
      ]
    },
    {
      title: "Conditions, Boolean Logic, and Decision Paths",
      category: "Conditions",
      visual: "logic",
      lead: "Conditions let a program select behavior by evaluating an expression as true or false.",
      paragraphs: [
        "An if statement runs a block only when its condition is true. Else-if branches check alternatives in order, and an else branch handles cases not matched earlier. Branch order matters when conditions overlap. For example, checking score >= 75 before score >= 90 would classify a score of 95 too early unless the program uses separate tests intentionally.",
        "Boolean operators combine conditions. AND requires both sides to be true, OR requires at least one side to be true, and NOT reverses a truth value. Complex expressions should be named or broken into smaller checks so their intent is easy to verify. Boundary values such as exactly 75, zero items, or the final day of a range deserve special tests because comparison errors often appear at edges."
      ],
      definitions: [
        { term: "Boolean", definition: "A value with two logical states, normally true or false." },
        { term: "Condition", definition: "An expression evaluated to decide which program path should run." },
        { term: "Branch", definition: "One possible path selected by conditional logic." }
      ],
      examples: [
        "IF score >= 75 THEN display Pass ELSE display Review.",
        "A login may require isPasswordCorrect AND isSecondFactorValid.",
        "A weekend check can test day = Saturday OR day = Sunday."
      ],
      analogy: "A condition is like a checkpoint with written rules. The traveler follows one path or another depending on which rule is satisfied.",
      misconception: "Several if statements are not always equivalent to one if/else-if chain. Separate if statements can all run, while a chain selects only the first matching branch.",
      review: [
        "Why should boundary values be included in tests for a comparison?",
        "When would two separate if statements behave differently from an if/else chain?"
      ]
    },
    {
      title: "Loops, Counters, and Stopping Rules",
      category: "Repetition",
      visual: "algorithm",
      lead: "A loop repeats a block of work, but every useful loop needs a clear source of progress and a correct stopping condition.",
      paragraphs: [
        "A count-controlled loop is useful when the number of repetitions is known, such as processing every student in a list. A condition-controlled loop continues while a condition remains true, such as asking again until input is valid. Each repetition is an iteration. The loop body may update a counter, read the next item, or change state that moves the loop toward completion.",
        "An infinite loop occurs when the stopping condition never becomes false, unless the program intentionally runs as a service. Off-by-one errors process one item too many or too few. Developers trace small examples, including empty and one-item inputs, to confirm initialization, condition checks, updates, and final state. A loop should do one understandable unit of work per iteration."
      ],
      definitions: [
        { term: "Loop", definition: "A control structure that repeats a block according to a count or condition." },
        { term: "Iteration", definition: "One execution of the repeated loop body." },
        { term: "Off-by-one error", definition: "A boundary mistake that repeats or indexes one time too many or too few." }
      ],
      examples: [
        "FOR each student IN classList processes every record once.",
        "WHILE password is invalid can ask again, provided new input is read each iteration.",
        "A loop over positions 0 through length - 1 visits every item in a zero-indexed collection."
      ],
      analogy: "A loop is like checking each paper in a stack: take one, process it, move it aside, and stop when no papers remain.",
      misconception: "A loop that runs forever is not always a crash. Servers and event systems may intentionally wait continuously, but they still need controlled work and shutdown behavior.",
      review: [
        "What three parts help a condition-controlled loop eventually stop?",
        "How would you test a loop for an off-by-one error?"
      ]
    },
    {
      title: "Functions, Parameters, and Decomposition",
      category: "Abstraction",
      visual: "algorithm",
      lead: "Functions package a named operation so a larger problem can be divided, tested, reused, and explained in smaller parts.",
      paragraphs: [
        "A function may accept parameters that provide input values and may return a result. The caller supplies arguments for those parameters. A good function has a focused purpose, a clear name, and a predictable contract. It should not secretly depend on unrelated global state when an explicit input would make the dependency clearer.",
        "Decomposition divides a complex task into cooperating functions. Abstraction lets a caller use a function by understanding what it promises rather than every internal step. For example, a program can call calculateAverage(scores) without repeating the loop and formula everywhere. Smaller functions are easier to test at normal, boundary, and invalid inputs."
      ],
      definitions: [
        { term: "Function", definition: "A named, reusable block of behavior that may receive input and return output." },
        { term: "Parameter", definition: "A named input declared by a function; an argument supplies its value during a call." },
        { term: "Abstraction", definition: "A useful interface that hides lower-level details while preserving essential behavior." }
      ],
      examples: [
        "formatStudentName(first, last) can return one consistently formatted string.",
        "isAttendanceWindowOpen(day, time) can isolate schedule logic from page rendering.",
        "A test can call calculateAverage with an empty list, one score, and several scores."
      ],
      analogy: "A function is like a labeled appliance. You provide the required input, use its controls, and receive a result without rebuilding its internal mechanism each time.",
      misconception: "More functions do not automatically create better code. Splitting every tiny line into a separate function can make the logic harder to follow without adding a useful abstraction.",
      review: [
        "How is a parameter different from an argument?",
        "What makes a function a helpful abstraction instead of an unnecessary layer?"
      ]
    },
    {
      title: "Languages, Translation, Events, and Debugging",
      category: "Program Execution",
      visual: "debugging",
      lead: "Programming languages give humans structured ways to express behavior, while translators and runtimes connect that source code to machine operations.",
      paragraphs: [
        "Source code is written in a language such as C, Python, or JavaScript. Machine code is the low-level instruction representation executed by a processor. A compiler translates source into another form before execution, while an interpreter or runtime executes or translates work as the program runs. Real language systems often combine these techniques, so the practical distinction is about when and how translation happens rather than a simple quality ranking.",
        "Visual environments such as Scratch express the same core ideas through blocks, events, loops, conditions, variables, and custom blocks. Event-driven programs wait for input such as a click, message, timer, or network response. Several activities may make progress over overlapping time periods, creating concurrency and ordering concerns. Debugging is the disciplined process of reproducing a problem, observing evidence, forming a small hypothesis, testing one change, and checking for side effects."
      ],
      definitions: [
        { term: "Source code", definition: "Human-readable program instructions written in a programming language." },
        { term: "Compiler or interpreter", definition: "A tool or runtime that translates or executes source code in a form the machine can carry out." },
        { term: "Debugging", definition: "A systematic process for finding, explaining, correcting, and retesting program defects." }
      ],
      examples: [
        "A Scratch script can start when the green flag is clicked, then repeat movement until a condition changes.",
        "A web page may handle a button click while an earlier network request is still waiting for a response.",
        "A useful bug report records steps, expected behavior, actual behavior, and the environment."
      ],
      analogy: "Source code is a precise set of stage directions. A translator prepares instructions the performers can execute, while the runtime coordinates what happens during the show.",
      misconception: "A program that runs without a syntax error is not necessarily correct. Logic errors can produce a valid but wrong result.",
      review: [
        "How do source code and machine code serve different audiences?",
        "What evidence should be collected before changing code to fix a bug?"
      ]
    }
  ],
  activity: {
    title: "Algorithm and Debugging Workshop",
    intro: "Turn three everyday computing needs into precise logic, then inspect where each design could fail.",
    tasks: [
      {
        title: "Search a sorted class list",
        scenario: "A class directory contains 1,024 student names in alphabetical order.",
        prompt: "Choose linear or binary search and describe the main steps.",
        response: "Use binary search: compare the target with the middle name, keep the half that can still contain it, and repeat until found or no candidates remain.",
        rationale: "The sorted order makes halving valid, reducing the number of comparisons dramatically for a large list."
      },
      {
        title: "Validate a quiz score",
        scenario: "A program receives a score entered as text and should accept only whole numbers from 0 through 100.",
        prompt: "Write the checks in a safe order using simple pseudocode.",
        response: "Read the text; try to convert it to a whole number; if conversion fails show an error; otherwise check 0 <= score <= 100; accept only when both checks pass.",
        rationale: "The program must confirm the type before applying numeric range comparisons."
      },
      {
        title: "Debug a missing final record",
        scenario: "A loop processes every student except the last student in the list.",
        prompt: "Name the likely error and the smallest useful tests.",
        response: "Suspect an off-by-one stopping condition. Trace empty, one-item, and two-item lists, and inspect the final valid index compared with the loop condition.",
        rationale: "Small boundary cases reveal whether the loop uses < or <= correctly and whether indexes begin at zero."
      }
    ],
    reflection: [
      "Which assumptions must be true before binary search is correct?",
      "How did boundary cases help explain the validation and loop behavior?"
    ]
  },
  quiz: [
    { category: "Algorithms", question: "Which property is required for ordinary binary search on a list of names?", options: ["The names follow a consistent sorted order", "The names all have exactly the same length", "The list contains fewer than one hundred names", "The list is stored only in machine code"], answer: 0, explanation: "Binary search needs order so each comparison can eliminate one half." },
    { category: "Algorithms", question: "When is linear search a reasonable choice over binary search?", options: ["The data is small or unsorted and checked infrequently", "The sorted data contains millions of stable records", "Every comparison can safely remove half the candidates", "The program must always use the fewest comparisons"], answer: 0, explanation: "Linear search is simple and works without sorting, which may be sufficient for small or rare searches." },
    { category: "Pseudocode", question: "What makes pseudocode useful before choosing a programming language?", options: ["It expresses testable logic without language-specific syntax", "It automatically produces optimized processor instructions", "It guarantees that every input case has been considered", "It replaces the need to implement and test the program"], answer: 0, explanation: "Pseudocode focuses attention on algorithm steps and decisions." },
    { category: "Variables", question: "Why is totalScore usually a better variable name than x?", options: ["It communicates the value's purpose to readers", "It forces the value to remain a whole number", "It prevents all later assignments to the variable", "It makes every expression execute in less time"], answer: 0, explanation: "Meaningful names expose intent and reduce misunderstanding." },
    { category: "Input", question: "A score arrives from a form as text. What should happen before using it in arithmetic?", options: ["Validate and convert it to the required numeric type", "Assume the browser has already made it a safe number", "Store it in every variable used by the program", "Compare its text length with the final average"], answer: 0, explanation: "External input must be validated and converted before numeric operations." },
    { category: "Conditions", question: "A grade program checks score >= 75 before score >= 90 in one if/else-if chain. What problem can occur?", options: ["A score of 95 may match the broader branch too early", "A score of 95 must execute every branch in the chain", "The comparisons automatically sort all stored scores", "The program converts every score into Boolean false"], answer: 0, explanation: "An if/else-if chain stops at the first true condition, so specific overlapping ranges should be ordered carefully." },
    { category: "Boolean Logic", question: "A login requires a correct password and a valid device code. Which Boolean operator best represents the rule?", options: ["AND, because both conditions must be true", "OR, because either condition is enough", "NOT, because both values should be reversed", "XOR, because exactly one condition must be true"], answer: 0, explanation: "AND is true only when both required checks are true." },
    { category: "Testing", question: "Which values best test the boundary of a passing rule score >= 75?", options: ["74, 75, and 76", "10, 20, and 30", "75, 85, and 95", "0, 50, and 100"], answer: 0, explanation: "Values immediately below, at, and above the boundary expose comparison mistakes." },
    { category: "Loops", question: "A while loop asks again until input is valid. What must happen inside the loop?", options: ["It must read or change something that can satisfy the condition", "It must reset every variable to its original value", "It must compile the whole program after each attempt", "It must run once for every item stored on the device"], answer: 0, explanation: "A condition-controlled loop needs progress toward a false stopping condition." },
    { category: "Loops", question: "A loop misses the final item of a zero-indexed list. What is the best first suspicion?", options: ["An off-by-one error in its boundary condition", "A public-key error in its source code", "A color-channel error in its output", "A network-routing error in its variable name"], answer: 0, explanation: "Missing exactly one boundary item is a classic off-by-one symptom." },
    { category: "Functions", question: "What is the relationship between a parameter and an argument?", options: ["A parameter is declared; an argument supplies its call value", "A parameter is returned; an argument compiles the function", "A parameter is global; an argument must always be private", "A parameter is an error; an argument is its correction"], answer: 0, explanation: "Parameters name expected inputs, and arguments provide actual values at a call." },
    { category: "Abstraction", question: "Which function is the clearest useful abstraction?", options: ["calculateAverage(scores) returns one defined result", "doEverything() silently changes unrelated global values", "lineThree() contains one unexplained repeated statement", "helper() accepts values but never uses or returns them"], answer: 0, explanation: "A focused name, explicit input, and predictable result create a useful interface." },
    { category: "Languages", question: "How does source code differ from machine code?", options: ["Source is human-oriented; machine code is processor-oriented", "Source is always faster; machine code is always interpreted", "Source contains only images; machine code contains only audio", "Source runs without translation; machine code needs pseudocode"], answer: 0, explanation: "Programming languages help humans express behavior, while processors execute machine instructions." },
    { category: "Events", question: "Which example is event-driven behavior?", options: ["Run a handler when the user selects a button", "Sort a fixed list before the program begins", "Store one constant value and immediately exit", "Translate source code without executing any input"], answer: 0, explanation: "Event-driven programs respond to occurrences such as clicks, messages, timers, or data arrival." },
    { category: "Debugging", question: "What is the strongest first step when a program sometimes produces the wrong total?", options: ["Record reproducible inputs, expected output, and actual output", "Rewrite every function before observing the failure", "Add random changes until one run appears correct", "Ignore boundary cases and test only average values"], answer: 0, explanation: "Reliable evidence narrows the cause and lets a fix be verified." }
  ],
  summary: {
    intro: "Programming turns a precise solution into executable behavior through state, decisions, repetition, abstraction, translation, and evidence-based testing.",
    points: [
      "Algorithms must be finite, precise, correct, and appropriate for their input conditions.",
      "Variables store typed values; expressions transform values; external input requires validation.",
      "Conditions and Boolean logic select paths, with special care at boundaries and overlaps.",
      "Loops repeat controlled work and need correct initialization, progress, and stopping rules.",
      "Functions support decomposition and abstraction through focused contracts and explicit inputs.",
      "Languages, translators, events, and debugging connect human plans to reliable machine behavior."
    ],
    review: [
      "Compare linear and binary search for a realistic data set.",
      "Write pseudocode that validates an input and selects one of two outcomes.",
      "Explain how a loop, condition, and function could cooperate in one program.",
      "Describe a disciplined debugging cycle for an intermittent wrong result."
    ],
    next: "You have reached the final CS50 Understanding Technology topic. Review My Progress, revisit completed modules, and apply the full course sequence to practical computing problems."
  }
};
