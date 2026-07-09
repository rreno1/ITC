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
const ADMIN_EMAILS = ['rrenomeronjr@gmail.com', 'rrjrenomeron@mlgcl.edu.ph'];
const ADMIN_EMAIL = ADMIN_EMAILS[0]; // backward compat

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
    quizTotal: 15,
    status: 'available'
  },
  {
    id: 'multimedia-part-1',
    title: 'Multimedia Part 1',
    subtitle: 'Images & Graphics',
    description: 'Digital images, color models, compression, and how multimedia is represented in computers.',
    icon: '🎨',
    color: '#f59e0b',
    status: 'locked'
  },
  {
    id: 'multimedia-part-2',
    title: 'Multimedia Part 2',
    subtitle: 'Audio & Video',
    description: 'Digital audio, video encoding, streaming technology, and multimedia formats.',
    icon: '🎵',
    color: '#ec4899',
    status: 'locked'
  },
  {
    id: 'security-part-1',
    title: 'Security Part 1',
    subtitle: 'Threats & Privacy',
    description: 'Cybersecurity threats, malware types, social engineering, and privacy protection.',
    icon: '🔒',
    color: '#ef4444',
    status: 'locked'
  },
  {
    id: 'security-part-2',
    title: 'Security Part 2',
    subtitle: 'Encryption & Defense',
    description: 'Encryption methods, firewalls, secure passwords, and network defense strategies.',
    icon: '🛡️',
    color: '#f97316',
    status: 'locked'
  }
];
