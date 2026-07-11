// js/firebase-config.js
// Firebase Configuration
// IMPORTANT: Replace these placeholder values with your actual Firebase project config from Step 2 of the guide
const firebaseConfig = {
  apiKey: "AIzaSyBJgQq_Ks_B76biYvZx1vjd12XrFSmyrV0",
  authDomain: "itc-learning-portal.firebaseapp.com",
  projectId: "itc-learning-portal",
  storageBucket: "itc-learning-portal.firebasestorage.app",
  messagingSenderId: "100392208299",
  appId: "1:100392208299:web:85cbef4fee4daa2fd334ee"
};

// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

// Admin emails (array for multi-admin support)
const ADMIN_EMAILS = ['rrenomeronjr@gmail.com'];
const ADMIN_EMAIL = ADMIN_EMAILS[0]; // backward compat

// Batch attendance schedule.
// Attendance follows the user's requested checker schedule:
// Batch B checks in on Tuesday, Batch A checks in on Friday, 4:00 PM to 5:30 PM.
const BATCHES = {
  A: {
    id: 'A',
    label: 'Batch A',
    attendanceDay: 5,
    attendanceDayName: 'Friday',
    attendanceStart: '16:00',
    attendanceEnd: '17:30'
  },
  B: {
    id: 'B',
    label: 'Batch B',
    attendanceDay: 2,
    attendanceDayName: 'Tuesday',
    attendanceStart: '16:00',
    attendanceEnd: '17:30'
  }
};

const DEFAULT_BATCH = 'A';

function getBatchConfig(batch) {
  return BATCHES[String(batch || '').toUpperCase()] || null;
}

// Module definitions
const MODULES = [
  {
    id: 'hardware-part-1',
    title: 'Hardware Part 1',
    subtitle: 'Binary & Data Representation',
    description: 'Learn how computers represent all data using the binary system, bits, bytes, and character encoding standards.',
    objectives: ['Convert between binary and decimal values.', 'Explain bits, bytes, and common storage units.', 'Describe how text and other data become binary patterns.'],
    icon: '🧮',
    color: '#3b82f6',
    path: 'hardware-part-1/hardware-part-1.html',
    lessonTotal: 12,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'hardware-part-2',
    title: 'Hardware Part 2',
    subtitle: 'Core Components',
    description: 'Explore the motherboard, CPU, RAM, and storage drives that form the heart of every computer system.',
    objectives: ['Identify the main parts of a motherboard.', 'Explain how the CPU follows instructions.', 'Compare memory and long-term storage.'],
    icon: '🖥️',
    color: '#8b5cf6',
    path: 'hardware-part-2/hardware-part-2.html',
    lessonTotal: 11,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'hardware-part-3',
    title: 'Hardware Part 3',
    subtitle: 'Connectivity & OS',
    description: 'Understand I/O devices, ports, wireless connectivity, operating systems, and device drivers.',
    objectives: ['Classify common input and output devices.', 'Choose suitable wired and wireless connections.', 'Explain how operating systems and drivers manage hardware.'],
    icon: '🔌',
    color: '#14b8a6',
    path: 'hardware-part-3/hardware-part-3.html',
    lessonTotal: 11,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'internet-part-1',
    title: 'Internet Part 1',
    subtitle: 'Networks & Packet Delivery',
    description: 'Explore how devices connect through local networks and Internet service providers. Learn how IP addresses, routers, packets, TCP, UDP, DHCP, and NAT allow data to travel between computers.',
    objectives: ['Distinguish the Internet from the Web and identify network devices.', 'Explain addressing, configuration, packet switching, routing, and the TCP/IP model.', 'Compare TCP and UDP and interpret common network-performance measures.'],
    icon: '🌐',
    color: '#06b6d4',
    path: 'internet-part-1/internet-part-1.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'internet-part-2',
    title: 'Internet Part 2',
    subtitle: 'DNS, Web & Internet Security',
    description: 'Follow the complete journey of a webpage—from entering a URL and resolving DNS to establishing secure connections, exchanging HTTP messages, rendering content, and troubleshooting common Internet problems.',
    objectives: ['Trace the complete journey from entering a URL to rendering a webpage.', 'Interpret DNS, HTTP, HTTPS, cookies, caching, certificates, and hosting services.', 'Recognize online threats and diagnose basic connectivity and DNS problems.'],
    icon: '📡',
    color: '#6366f1',
    path: 'internet-part-2/internet-part-2.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'multimedia-part-1',
    title: 'Multimedia Part 1',
    subtitle: 'Digital Images, Graphics, and Compression',
    description: 'Learn how computers represent images using pixels, colors, and binary data. Explore raster and vector graphics, resolution, color models, image formats, compression, metadata, image editing, accessibility, copyright, and responsible use of AI-generated images.',
    objectives: ['Explain image representation using pixels, resolution, aspect ratio, color models, bit depth, and binary data.', 'Compare raster and vector graphics, image formats, and lossless and lossy compression tradeoffs.', 'Edit and optimize images while protecting metadata privacy and preserving appropriate quality.', 'Create accessible, properly attributed images and evaluate manipulated or AI-generated media responsibly.'],
    icon: '🖼️',
    color: '#f59e0b',
    path: 'multimedia-part-1/multimedia-part-1.html',
    lessonTotal: 16,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'multimedia-part-2',
    title: 'Multimedia Part 2',
    subtitle: 'Audio, Video, Streaming, and Immersive Media',
    description: 'Discover how computers record, compress, transmit, and play sound and video. Study sampling, bit depth, frame rates, codecs, containers, streaming, animation, 3D graphics, AR and VR, accessibility, deepfakes, and responsible multimedia production.',
    objectives: ['Explain digital audio using sound waves, sampling, bit depth, channels, formats, compression, and bitrate.', 'Relate video resolution, frame rate, bitrate, codecs, containers, and compression to quality, storage, and compatibility.', 'Explain streaming, animation, 3D rendering, interactive media, and augmented, virtual, and mixed reality.', 'Produce accessible and ethical multimedia using captions, transcripts, descriptions, consent, attribution, and responsible AI practices.'],
    icon: '🎬',
    color: '#ec4899',
    path: 'multimedia-part-2/multimedia-part-2.html',
    lessonTotal: 16,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'security-part-1',
    title: 'Security Part 1',
    subtitle: 'Privacy, Accounts & Trust',
    description: 'Protect digital privacy and accounts with strong authentication, safe recovery, and independent verification.',
    objectives: ['Explain realistic online privacy.', 'Build a strong login and recovery plan.', 'Recognize and verify phishing attempts.'],
    icon: '🔑',
    color: '#14b8a6',
    path: 'security-part-1/security-part-1.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'security-part-2',
    title: 'Security Part 2',
    subtitle: 'Networks, Encryption & Defense',
    description: 'Use secure connections, encryption, limited access, malware response, and tested backups as layered defenses.',
    objectives: ['Compare network protection tools.', 'Explain secret-key and public-key encryption.', 'Plan incident response and recovery.'],
    icon: '🛡️',
    color: '#ef4444',
    path: 'security-part-2/security-part-2.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'web-development-part-1',
    title: 'Web Development Part 1',
    subtitle: 'The Web, HTTP & HTML',
    description: 'Trace browser-server requests and create meaningful pages using semantic HTML and accessible content structures.',
    objectives: ['Trace URLs and HTTP exchanges.', 'Interpret common response status codes.', 'Build semantic page structure.'],
    icon: '🌍',
    color: '#06b6d4',
    path: 'web-development-part-1/web-development-part-1.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'web-development-part-2',
    title: 'Web Development Part 2',
    subtitle: 'Forms, CSS & Responsive Design',
    description: 'Build labeled forms, validate requests, style document structure, and create deliberate responsive interfaces.',
    objectives: ['Build usable and secure forms.', 'Apply CSS and the cascade.', 'Design accessible mobile layouts.'],
    icon: '📱',
    color: '#8b5cf6',
    path: 'web-development-part-2/web-development-part-2.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'programming-part-1',
    title: 'Programming Part 1',
    subtitle: 'Algorithms, Values & Decisions',
    description: 'Design algorithms, represent values, validate input, and create correct decision paths with Boolean logic.',
    objectives: ['Compare search algorithms.', 'Use variables and validated input.', 'Test conditions and boundaries.'],
    icon: '🧠',
    color: '#f97316',
    path: 'programming-part-1/programming-part-1.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'programming-part-2',
    title: 'Programming Part 2',
    subtitle: 'Loops, Functions & Debugging',
    description: 'Control repetition, divide programs into functions, respond to events, and debug failures with evidence.',
    objectives: ['Build safe loops.', 'Define focused function contracts.', 'Debug with reproducible tests.'],
    icon: '💻',
    color: '#64748b',
    path: 'programming-part-2/programming-part-2.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  }
];

// Stored under /users because the published project rules grant signed-in reads
// and administrator writes only within that established collection.
const COURSE_MODULE_SETTINGS_DOC_ID = '__course_settings__';
let moduleAvailabilityState = Object.fromEntries(MODULES.map(module => [module.id, module.status === 'available']));
let moduleAvailabilityRequest = null;

function moduleFromValue(moduleOrId) {
  if (moduleOrId && typeof moduleOrId === 'object') return moduleOrId;
  return MODULES.find(module => module.id === moduleOrId) || null;
}

function isModuleOpen(moduleOrId) {
  const module = moduleFromValue(moduleOrId);
  return !!(module && module.status === 'available' && moduleAvailabilityState[module.id] !== false);
}

function publishModuleAvailability(availability = {}) {
  moduleAvailabilityState = Object.fromEntries(MODULES.map(module => [
    module.id,
    module.status === 'available' && availability[module.id] !== false
  ]));
  window.moduleAvailability = { ...moduleAvailabilityState };
  window.moduleAvailabilityLoaded = true;
  document.dispatchEvent(new CustomEvent('moduleavailabilitychange', {
    detail: { availability: { ...moduleAvailabilityState } }
  }));
  return window.moduleAvailability;
}

function loadModuleAvailability(force = false) {
  if (moduleAvailabilityRequest && !force) return moduleAvailabilityRequest;

  const settingsRef = db.collection('users').doc(COURSE_MODULE_SETTINGS_DOC_ID);
  moduleAvailabilityRequest = settingsRef.get()
    .then(snapshot => publishModuleAvailability(snapshot.exists ? snapshot.data().availability : {}))
    .catch(error => {
      console.warn('Unable to load course module availability; using default access.', error);
      return publishModuleAvailability({});
    });
  return moduleAvailabilityRequest;
}

async function setModuleOpen(moduleId, open) {
  const module = moduleFromValue(moduleId);
  const user = auth.currentUser;
  const isAdmin = !!(user && (window.isUserAdmin || ADMIN_EMAILS.includes(user.email)));
  if (!module || module.status !== 'available') throw new Error('Unknown course module.');
  if (!isAdmin) throw new Error('Only an administrator can change module availability.');

  const settingsRef = db.collection('users').doc(COURSE_MODULE_SETTINGS_DOC_ID);
  const availability = await db.runTransaction(async transaction => {
    const snapshot = await transaction.get(settingsRef);
    const current = snapshot.exists && snapshot.data().availability
      ? snapshot.data().availability
      : {};
    const next = { ...current, [moduleId]: Boolean(open) };
    transaction.set(settingsRef, {
      documentType: 'courseSettings',
      availability: next,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedBy: user.uid
    }, { merge: true });
    return next;
  });

  return publishModuleAvailability(availability);
}

function refreshModuleAvailabilityGate() {
  const moduleId = document.body?.dataset.moduleId;
  if (!moduleId) return;

  const isAdmin = !!(auth.currentUser && (window.isUserAdmin || ADMIN_EMAILS.includes(auth.currentUser.email)));
  const shouldBlock = !isAdmin && !isModuleOpen(moduleId);
  const moduleRoot = document.querySelector('.app-container') || document.getElementById('moduleApp');
  let gate = document.getElementById('moduleClosedGate');

  if (shouldBlock && !gate) {
    gate = document.createElement('div');
    gate.className = 'module-closed-gate';
    gate.id = 'moduleClosedGate';
    gate.setAttribute('role', 'dialog');
    gate.setAttribute('aria-modal', 'true');
    gate.setAttribute('aria-labelledby', 'moduleClosedTitle');
    gate.innerHTML = `
      <div class="module-closed-dialog">
        <span class="module-closed-icon" aria-hidden="true">&#128274;</span>
        <p class="page-eyebrow">Course access</p>
        <h1 id="moduleClosedTitle">Module temporarily closed</h1>
        <p>Your instructor has closed this module for now. Return to Home to open another available lesson.</p>
        <a class="btn btn-primary" href="../index.html">Return to Home</a>
      </div>
    `;
    document.body.appendChild(gate);
  }

  document.body.classList.toggle('module-is-closed', shouldBlock);
  if (moduleRoot) moduleRoot.inert = shouldBlock;
  if (gate) gate.hidden = !shouldBlock;
  if (shouldBlock) window.requestAnimationFrame(() => gate?.querySelector('a')?.focus());
}

document.addEventListener('moduleavailabilitychange', refreshModuleAvailabilityGate);
