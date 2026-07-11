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
    icon: '💻',
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
    icon: '⚙️',
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
    subtitle: 'How the Internet Works',
    description: 'Discover the infrastructure behind the internet: IP addresses, routers, ISPs, and how data travels globally.',
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
    subtitle: 'Protocols & Routing',
    description: 'Master TCP/IP protocols, DNS resolution, HTTP/HTTPS, and how packets navigate the web.',
    icon: '📡',
    color: '#6366f1',
    path: 'internet-part-2/internet-part-2.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'multimedia',
    title: 'Multimedia',
    subtitle: 'Audio, Images, and Video',
    description: 'Understand sampling, pixels, color, compression, codecs, containers, metadata, 3D graphics, and accessible media.',
    icon: '🎨',
    color: '#f59e0b',
    path: 'multimedia/multimedia.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Privacy, Trust, and Defense',
    description: 'Protect privacy, accounts, networks, and data using authentication, encryption, verification, and layered defenses.',
    icon: '🎵',
    color: '#ec4899',
    path: 'security/security.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'HTTP, HTML, Forms, and CSS',
    description: 'Trace browser-server requests and build meaningful, accessible, responsive pages with HTML, forms, and CSS.',
    icon: '🔒',
    color: '#ef4444',
    path: 'web-development/web-development.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Algorithms, Logic, and Code',
    description: 'Apply algorithms, variables, conditions, loops, functions, language translation, events, and systematic debugging.',
    icon: '🛡️',
    color: '#f97316',
    path: 'programming/programming.html',
    lessonTotal: 10,
    quizTotal: 15,
    status: 'available'
  }
];
