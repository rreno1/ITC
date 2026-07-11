buildCoursePart({
  id: 'security-part-2',
  title: 'Security Part 2',
  subtitle: 'Networks, Encryption, and Layered Defense',
  description: 'Study secure network connections, encryption keys, malware response, tested backups, least privilege, and layered recovery planning.',
  objectives: [
    'Compare the protection provided by HTTPS, VPNs, and firewalls.',
    'Distinguish secret-key and public-key encryption.',
    'Recognize malware and respond without increasing the damage.',
    'Build a layered defense using updates, limited access, monitoring, and backups.'
  ],
  lessonIndexes: [2, 3, 5],
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Network_server_and_technician.jpg?width=1280',
  imageAlt: 'A technician working beside network server equipment.',
  imageCredit: 'Photo: Bill Branson, National Cancer Institute, public domain, via Wikimedia Commons.',
  taskIndexes: [2],
  extraTasks: [
    {
      title: 'Use an airport network safely',
      scenario: 'A student must check a school account while connected to an unfamiliar airport Wi-Fi network.',
      prompt: 'Describe a practical connection plan and the limits of its protection.',
      response: 'Prefer a trusted mobile connection when possible; otherwise verify HTTPS, avoid sensitive changes, use an approved VPN if required, and keep the device updated.',
      rationale: 'These layers reduce local interception risk, but they do not make a false destination trustworthy or repair an infected device.'
    },
    {
      title: 'Design a recoverable backup',
      scenario: 'All class records are stored on one laptop and synchronized continuously to one online folder.',
      prompt: 'Improve the plan so it can recover from accidental deletion or ransomware.',
      response: 'Keep versioned backups on a separate protected service or device, limit write access, test restoration, and document who can start recovery.',
      rationale: 'A useful backup must remain available when the main account or files are damaged and must be proven restorable.'
    }
  ],
  activityTitle: 'Defense and Recovery Workshop',
  activityIntro: 'Choose layers that reduce realistic network, encryption, and malware risks. Explain both what each control does and what it cannot do.',
  reflection: [
    'Which control prevents an incident, which detects it, and which supports recovery?',
    'Why does a secure connection not guarantee that the device or destination is trustworthy?'
  ],
  appliedQuestions: [
    {
      category: 'Network Safety',
      question: 'A browser shows a valid HTTPS connection to a banking domain on public Wi-Fi. What is the best interpretation?',
      options: ['Traffic to that authenticated domain is protected, while device and account safety still matter', 'Every program on the device is protected from malware by the same connection', 'The Wi-Fi owner can no longer observe that the banking service is being contacted', 'Every statement shown by the website has been independently verified as true'],
      answer: 0,
      explanation: 'HTTPS protects data in transit to the authenticated site but does not solve all endpoint, privacy, or content risks.'
    },
    {
      category: 'VPNs',
      question: 'What is the most accurate reason to use a trusted VPN on an untrusted local network?',
      options: ['It protects traffic to the VPN endpoint while transferring some trust to the provider', 'It proves that every website reached through the tunnel is honest', 'It removes the need for HTTPS, updates, and secure account settings', 'It prevents the destination service from receiving any connection data'],
      answer: 0,
      explanation: 'A VPN changes and protects part of the network path, but it does not remove trust or endpoint concerns.'
    },
    {
      category: 'Firewalls',
      question: 'A school blocks unsolicited inbound connections but permits required web traffic. Which control is doing this work?',
      options: ['A firewall applying connection rules', 'A password manager generating credentials', 'A backup system storing older file versions', 'A certificate authority writing web content'],
      answer: 0,
      explanation: 'Firewalls permit or deny network traffic according to rules and connection state.'
    },
    {
      category: 'Encryption',
      question: 'Two students need to exchange encrypted data without first sharing one secret in person. Which approach best addresses that problem?',
      options: ['Use authenticated public keys to establish protected communication', 'Publish one shared secret beside the encrypted data', 'Use identical file names so both devices derive the same key', 'Compress the message until outsiders cannot recognize its contents'],
      answer: 0,
      explanation: 'Public-key methods help establish secure communication without distributing one secret key beforehand.'
    },
    {
      category: 'Key Safety',
      question: 'Encrypted files are stolen together with an unlocked device holding the decryption key. What does this show?',
      options: ['Encryption depends on protecting keys and endpoints as well as the stored data', 'Encryption always fails when a file has a recognizable extension', 'Public keys must never be distributed to communication partners', 'Compressed data cannot remain encrypted on a mobile device'],
      answer: 0,
      explanation: 'A strong algorithm cannot protect data if an attacker can use the unlocked endpoint or exposed private key.'
    },
    {
      category: 'Incident Response',
      question: 'Files begin changing names and a ransom demand appears. What is the best immediate response?',
      options: ['Stop normal use, isolate safely, report the incident, and follow the recovery plan', 'Pay immediately before preserving evidence or contacting responsible staff', 'Keep opening files to discover how many devices are affected', 'Delete every backup because it may contain an older version of the files'],
      answer: 0,
      explanation: 'Controlled isolation and reporting can limit spread and preserve evidence for a planned recovery.'
    },
    {
      category: 'Layered Defense',
      question: 'Which plan gives the strongest protection against common ransomware damage?',
      options: ['Timely updates, limited privileges, monitoring, safe behavior, and tested isolated backups', 'One administrator account shared by everyone with a very long password', 'Continuous synchronization to one writable folder with no version history', 'A firewall alone because malware cannot arrive through permitted traffic'],
      answer: 0,
      explanation: 'Independent preventive, limiting, detecting, and recovery controls reduce the chance that one failure becomes total loss.'
    }
  ],
  sourceQuizIndexes: [5, 6, 7, 8, 9, 10, 13, 14],
  summaryIntro: 'Effective defense uses several controls because secure networks, encryption, safe endpoints, limited permissions, monitoring, and recovery solve different parts of the risk.',
  summaryPoints: [
    'HTTPS protects a browser connection; VPNs protect a path to a provider; firewalls filter network traffic.',
    'Secret-key encryption is efficient but requires secure key sharing.',
    'Public-key systems separate a shareable public key from a protected private key.',
    'Incident response should limit spread, preserve evidence, and follow an established recovery plan.',
    'Tested, isolated backups and least privilege reduce the impact of compromise.'
  ],
  summaryReview: [
    'Compare HTTPS, a VPN, and a firewall using one public-network scenario.',
    'Explain why encryption key protection is as important as the algorithm.',
    'Design a layered ransomware defense and recovery plan for class records.'
  ],
  next: 'Continue to Web Development Part 1 for browser-server communication and semantic HTML.'
});
