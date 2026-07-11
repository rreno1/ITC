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
    icon: '01',
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
    icon: 'CPU',
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
    icon: 'I/O',
    color: '#14b8a6',
    path: 'hardware-part-3/hardware-part-3.html',
    lessonTotal: 11,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'internet-part-1',
    title: 'Internet Part 1',
    subtitle: 'How the Internet Works',
    description: 'Discover the infrastructure behind the internet: IP addresses, routers, ISPs, and how data travels globally.',
    objectives: ['Describe the internet as a network of networks.', 'Explain the roles of addresses, routers, and service providers.', 'Trace data across local and global connections.'],
    icon: 'NET',
    color: '#06b6d4',
    path: 'internet-part-1/internet-part-1.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'internet-part-2',
    title: 'Internet Part 2',
    subtitle: 'Protocols & Routing',
    description: 'Master TCP/IP protocols, DNS resolution, HTTP/HTTPS, and how packets navigate the web.',
    objectives: ['Explain how packets and common protocols move data.', 'Trace domain-name resolution through DNS.', 'Compare HTTP and HTTPS communication.'],
    icon: 'WEB',
    color: '#6366f1',
    path: 'internet-part-2/internet-part-2.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'multimedia-part-1',
    title: 'Multimedia Part 1',
    subtitle: 'Digital Images & Compression',
    description: 'Study pixels, RGB color, resolution, image formats, compression, editing quality, and media metadata.',
    objectives: ['Explain pixels, RGB values, and resolution.', 'Compare lossless and lossy image formats.', 'Prepare media copies for quality, size, and privacy.'],
    icon: 'IMG',
    color: '#f59e0b',
    path: 'multimedia-part-1/multimedia-part-1.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'multimedia-part-2',
    title: 'Multimedia Part 2',
    subtitle: 'Audio, Video & Immersive Media',
    description: 'Explore digital audio, video codecs and containers, streaming, 3D rendering, and accessible media.',
    objectives: ['Explain digital audio capture.', 'Distinguish video codecs and containers.', 'Plan responsive and accessible media delivery.'],
    icon: 'A/V',
    color: '#ec4899',
    path: 'multimedia-part-2/multimedia-part-2.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'security-part-1',
    title: 'Security Part 1',
    subtitle: 'Privacy, Accounts & Trust',
    description: 'Protect digital privacy and accounts with strong authentication, safe recovery, and independent verification.',
    objectives: ['Explain realistic online privacy.', 'Build a strong login and recovery plan.', 'Recognize and verify phishing attempts.'],
    icon: 'KEY',
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
    icon: 'LOCK',
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
    icon: '</>',
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
    icon: 'CSS',
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
    icon: '{}',
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
    icon: 'JS',
    color: '#64748b',
    path: 'programming-part-2/programming-part-2.html',
    lessonTotal: 7,
    quizTotal: 15,
    status: 'available'
  }
];
