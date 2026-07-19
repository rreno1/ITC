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
    subtitle: 'Foundations of Computer Networks',
    description: 'Explore how devices connect, what a computer network is, how networks are classified, and how data moves locally inside home and school networks before connecting to the wider Internet.',
    objectives: ['Explain physical signals and what a computer network is.', 'Classify networks by coverage, connection medium, architecture, and topology.', 'Describe NIC, switch, access point, router, modem, firewall, and ISP roles.'],
    icon: '🌐',
    color: '#06b6d4',
    path: 'internet-part-1/internet-part-1.html',
    lessonTotal: 15,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'internet-part-2',
    title: 'Internet Part 2',
    subtitle: 'How the Internet & Web Work',
    description: 'Follow the complete journey of data across the global Internet: learn about IP addressing, DHCP, NAT, packets, routing, DNS, protocols, web request execution, and systematic network troubleshooting.',
    objectives: ['Trace how a device gets configured automatically via DHCP.', 'Distinguish IP, MAC, domain names, URLs, and port numbers.', 'Describe packets, routing paths, protocols, and systematic troubleshooting.'],
    icon: '📡',
    color: '#6366f1',
    path: 'internet-part-2/internet-part-2.html',
    lessonTotal: 35,
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
const COURSE_MODULE_SETTINGS_FIELD = 'courseModuleSettings';
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

function readAvailabilityFromProfile(profile = {}) {
  const settings = profile[COURSE_MODULE_SETTINGS_FIELD];
  return settings && settings.availability && typeof settings.availability === 'object'
    ? settings.availability
    : null;
}

async function findSavedModuleAvailability() {
  const user = auth.currentUser;
  if (user && ADMIN_EMAILS.includes(user.email)) {
    const ownProfile = await db.collection('users').doc(user.uid).get();
    const ownAvailability = ownProfile.exists
      ? readAvailabilityFromProfile(ownProfile.data())
      : null;
    if (ownAvailability) return ownAvailability;
  }

  const adminProfiles = await Promise.all(ADMIN_EMAILS.map(email => (
    db.collection('users').where('email', '==', email.toLowerCase()).limit(5).get()
  )));
  for (const snapshot of adminProfiles) {
    for (const profile of snapshot.docs) {
      const availability = readAvailabilityFromProfile(profile.data());
      if (availability) return availability;
    }
  }

  // Read the previous location once so any successfully saved state is retained.
  const legacySettings = await db.collection('users').doc(COURSE_MODULE_SETTINGS_DOC_ID).get();
  return legacySettings.exists ? legacySettings.data().availability : {};
}

function loadModuleAvailability(force = false) {
  if (moduleAvailabilityRequest && !force) return moduleAvailabilityRequest;

  moduleAvailabilityRequest = findSavedModuleAvailability()
    .then(availability => publishModuleAvailability(availability))
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

  // Saving in the admin's own profile is permitted by the existing user rule
  // even when the deployed rules do not allow a separate settings document.
  const settingsRef = db.collection('users').doc(user.uid);
  const availability = await db.runTransaction(async transaction => {
    const snapshot = await transaction.get(settingsRef);
    const current = snapshot.exists
      ? readAvailabilityFromProfile(snapshot.data())
      : null;
    const next = { ...current, [moduleId]: Boolean(open) };
    transaction.set(settingsRef, {
      [COURSE_MODULE_SETTINGS_FIELD]: {
        availability: next,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedBy: user.uid
      }
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
