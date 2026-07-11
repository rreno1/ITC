window.CC101_MODULE_DATA = {
  id: "security",
  title: "Security",
  subtitle: "Privacy, Trust, and Defense",
  description: "Learn how to protect accounts, devices, communication, and personal information by combining sound technology with careful human decisions.",
  introVisual: "authentication",
  objectives: [
    "Explain why deleted files, cookies, and private browsing have practical limits.",
    "Create a strong authentication plan using unique passwords and multiple factors.",
    "Assess public network risks and explain the roles of HTTPS, VPNs, and firewalls.",
    "Compare secret-key and public-key encryption at an introductory level.",
    "Recognize phishing, social engineering, malware, and ransomware warning signs.",
    "Build a layered defense using updates, backups, permissions, and verification."
  ],
  lessons: [
    {
      title: "Privacy, Digital Traces, and Deleting Data",
      category: "Privacy",
      visual: "privacy",
      lead: "Using a device creates copies and records in more places than the screen shows, so privacy decisions must consider the complete path of the data.",
      paragraphs: [
        "Deleting a file often removes its directory entry first; the underlying storage area may remain until new data overwrites it. Cloud synchronization, backups, shared copies, screenshots, and server logs can preserve other versions. Secure deletion and device encryption reduce some risks, but neither can erase a copy held by another person or service.",
        "Websites use cookies and related storage to remember sessions, preferences, and activity. Private or incognito browsing mainly limits what remains in the local browser after the window closes. It does not make a person invisible to websites, network operators, schools, employers, or internet providers. Privacy starts with understanding what is collected, why it is needed, and who can access it."
      ],
      definitions: [
        { term: "Digital trace", definition: "A record or copy created when a person uses a device, network, website, or service." },
        { term: "Cookie", definition: "A small value saved by a browser so a site can remember a session or other information." },
        { term: "Private browsing", definition: "A browser mode that limits local history and storage after its private windows close." }
      ],
      examples: [
        "A deleted classroom photo may still exist in a cloud backup or a message recipient's phone.",
        "A login cookie can keep a student signed in without sending the password on every page.",
        "Private browsing can hide local history from the next browser user, but the visited site still receives the request."
      ],
      analogy: "Deleting a file can be like removing a book title from a library catalog before the shelf space is reused. The book may still be on the shelf for a time.",
      misconception: "Incognito mode is not an invisibility tool. It changes local browser storage more than it changes what networks and websites can observe.",
      review: [
        "Name two places where a copy might remain after a local file is deleted.",
        "What does private browsing protect, and what does it not protect?"
      ]
    },
    {
      title: "Passwords, Account Recovery, and Multi-Factor Authentication",
      category: "Authentication",
      visual: "authentication",
      lead: "Authentication asks a system to verify identity using something a person knows, has, or is.",
      paragraphs: [
        "A strong password is long, unique to one account, and difficult to guess from personal information. Reusing a password lets one breached service become a key to other accounts. A password manager can generate and store unique credentials, reducing the need to remember every value. The manager itself should use a strong master password and protected recovery method.",
        "Multi-factor authentication combines different factor types, such as a password and a code from a registered device. It reduces the value of a stolen password, although an attacker may still trick a user into approving a fake request. Account recovery is part of security too: weak security questions or an exposed email account can bypass an otherwise strong password."
      ],
      definitions: [
        { term: "Authentication", definition: "The process of checking that a person or system is who it claims to be." },
        { term: "Password manager", definition: "A protected tool that generates, stores, and fills unique account credentials." },
        { term: "Multi-factor authentication", definition: "Verification that uses at least two different factor types, such as knowledge and possession." }
      ],
      examples: [
        "A passphrase made from unrelated words can be long while remaining practical to enter.",
        "A leaked school-forum password should not unlock the student's email because the passwords should differ.",
        "A login notification from an unknown location should be denied and investigated, not approved to make it disappear."
      ],
      analogy: "A bank vault may need both a key and a code. Stealing one item is not enough because the two checks use different kinds of evidence.",
      misconception: "Adding symbols to a short, reused password does not fix its biggest weakness. Length and uniqueness usually matter more than decorative complexity.",
      review: [
        "Why does password reuse turn one breach into a larger risk?",
        "How is multi-factor authentication different from asking for two passwords?"
      ]
    },
    {
      title: "Public Networks, HTTPS, VPNs, and Firewalls",
      category: "Network Safety",
      visual: "privacy",
      lead: "A network connects devices, but a connection alone does not prove that every device, access point, or message on it is trustworthy.",
      paragraphs: [
        "On public Wi-Fi, an attacker may create a misleading network name, observe unprotected traffic, or try to reach devices that accept local connections. HTTPS encrypts the connection between a browser and the correct website and helps authenticate that site. Users should still check the destination because an encrypted phishing site can also use HTTPS.",
        "A VPN creates an encrypted tunnel from a device to a VPN provider, which can protect traffic from the local network. It shifts some trust to the provider and does not make unsafe websites safe. A firewall applies rules to incoming or outgoing connections. Firewalls reduce exposure, but updates, secure applications, and careful login decisions are still necessary."
      ],
      definitions: [
        { term: "HTTPS", definition: "HTTP protected by transport encryption and a certificate used to authenticate the website." },
        { term: "VPN", definition: "A service that sends network traffic through an encrypted tunnel to a trusted endpoint." },
        { term: "Firewall", definition: "Hardware or software that allows or blocks network traffic according to defined rules." }
      ],
      examples: [
        "A cafe network named Free_Cafe_WiFi may be genuine or may be an attacker's look-alike access point.",
        "A browser lock icon protects the connection to the displayed domain; it does not prove the site's claims are honest.",
        "A laptop firewall can block unexpected inbound connections while still allowing normal web requests."
      ],
      analogy: "A firewall is like a building receptionist who checks traffic against rules. HTTPS is like a sealed, addressed envelope between two verified offices.",
      misconception: "A VPN does not provide total anonymity or remove malware. The VPN provider and destination services can still observe parts of the activity.",
      review: [
        "What protection does HTTPS provide on an untrusted local network?",
        "Why must a VPN user still evaluate the destination website?"
      ]
    },
    {
      title: "Secret-Key and Public-Key Encryption",
      category: "Encryption",
      visual: "encryption",
      lead: "Encryption transforms readable data into ciphertext so that only someone with the required key can recover the message.",
      paragraphs: [
        "Secret-key, or symmetric, encryption uses the same shared secret to encrypt and decrypt. It is efficient for large amounts of data, but the participants need a secure way to share the key. If the key is exposed, anyone holding it may read protected information.",
        "Public-key, or asymmetric, encryption uses a related key pair. A public key can be shared widely, while the private key must remain secret. Data encrypted for a public key can be decrypted with the matching private key. Digital signatures use the pair in another direction to help verify who signed data and whether it changed. Real systems often use public-key methods to establish trust and exchange a temporary secret key, then use faster secret-key encryption for the session."
      ],
      definitions: [
        { term: "Ciphertext", definition: "Encrypted data that should be unreadable without the correct key." },
        { term: "Secret-key encryption", definition: "Encryption in which communicating parties use the same shared secret key." },
        { term: "Public-key encryption", definition: "Encryption based on a public key and a mathematically related private key." }
      ],
      examples: [
        "A phone can encrypt its storage so stolen hardware does not immediately reveal files.",
        "A browser uses a website certificate and public-key methods when establishing an HTTPS session.",
        "A digital signature can help a software updater verify that a package came from the expected publisher."
      ],
      analogy: "A public key is like an open padlock anyone can close around a box. Only the owner keeps the private key that opens it.",
      misconception: "Encryption protects data only when keys and endpoints are protected. Malware on an unlocked device may read information after it is decrypted for use.",
      review: [
        "What key-sharing problem affects secret-key encryption?",
        "Why do many secure sessions combine public-key and secret-key methods?"
      ]
    },
    {
      title: "Phishing, Social Engineering, and Trust",
      category: "Human Security",
      visual: "authentication",
      lead: "Many attacks target human attention and urgency because persuading a person can be easier than breaking strong encryption.",
      paragraphs: [
        "Phishing messages pretend to be trusted organizations or people and ask for credentials, money, sensitive files, or immediate action. Warning signs include unexpected urgency, a mismatched sender address, unusual payment instructions, a destination that differs from the visible link, or a request that ignores normal procedure. Well-made phishing can have correct spelling and familiar logos, so appearance alone is weak evidence.",
        "Verification should use an independent channel. Instead of replying or using a link in the message, open the official application, type the known address, or contact the person through a saved number. Social engineering also includes impersonation by phone, fake support calls, tailgating into secure areas, and requests for multi-factor codes. Security improves when people can pause and verify without being punished for asking."
      ],
      definitions: [
        { term: "Phishing", definition: "A deceptive message designed to steal information or persuade a harmful action." },
        { term: "Social engineering", definition: "Manipulating people into bypassing security or revealing protected information." },
        { term: "Independent verification", definition: "Checking a request through a trusted channel that did not come from the suspicious message." }
      ],
      examples: [
        "A fake school-email notice says an account will close in ten minutes unless the student logs in through its link.",
        "A caller claiming to be technical support asks for a one-time code that should never be shared.",
        "A payment request should be confirmed through the organization's normal approval process."
      ],
      analogy: "A convincing uniform does not prove a stranger belongs in a building. Identity should be checked using the building's trusted procedure.",
      misconception: "Phishing is not always obvious or badly written. Attackers can copy real designs, use personal details, and obtain valid HTTPS certificates.",
      review: [
        "Why is a familiar logo not enough to trust a message?",
        "Describe an independent way to verify an urgent account warning."
      ]
    },
    {
      title: "Malware, Ransomware, Backups, and Layered Defense",
      category: "Defense",
      visual: "debugging",
      lead: "Security is strongest when several controls prevent, detect, limit, and recover from a problem instead of depending on one perfect tool.",
      paragraphs: [
        "Malware is software intended to harm, spy, steal, disrupt, or gain unauthorized control. A trojan pretends to be useful, spyware collects information, and ransomware denies access to data or systems while demanding payment. Malware can arrive through unsafe downloads, malicious documents, vulnerable software, stolen credentials, or compromised supply chains.",
        "Updates repair known weaknesses. Least privilege limits what an account or application can change. Security tools may detect known or suspicious behavior, but they cannot guarantee safety. Backups support recovery when they are current, tested, protected from the same account or device, and available after an incident. A practical response is to disconnect affected systems when appropriate, preserve evidence, report the event, restore from trusted sources, and change exposed credentials from a clean device."
      ],
      definitions: [
        { term: "Malware", definition: "Software designed to damage, spy, steal, disrupt, or gain unauthorized control." },
        { term: "Ransomware", definition: "Malware that blocks access to data or systems and demands payment for release." },
        { term: "Least privilege", definition: "Giving each user or program only the access needed for its current task." }
      ],
      examples: [
        "A standard user account limits some system changes compared with an administrator account.",
        "An offline or separately protected backup may remain usable when ransomware reaches the main device.",
        "Testing a restore proves that backup files are readable and that the recovery process is understood."
      ],
      analogy: "Layered security is like fire safety: prevention, alarms, compartment walls, exits, and drills each handle a different part of the risk.",
      misconception: "Antivirus alone cannot make risky behavior harmless. New attacks, stolen accounts, unsafe permissions, and social engineering require other defenses.",
      review: [
        "What makes a backup useful during a ransomware incident?",
        "How does least privilege reduce the possible damage from a compromised account?"
      ]
    }
  ],
  activity: {
    title: "Security Decision Lab",
    intro: "For each situation, choose the safest practical response and explain which risk the response reduces.",
    tasks: [
      {
        title: "Unexpected login approval",
        scenario: "Your phone asks you to approve a login, but you are not signing in.",
        prompt: "State the first action and the follow-up actions you would take.",
        response: "Deny the request, open the service through its official app, review account activity, change the password if needed, and report the event.",
        rationale: "Approving could give an attacker the second factor. Using the official app avoids links or instructions supplied by the attacker."
      },
      {
        title: "Urgent school message",
        scenario: "An email with the school logo says your mailbox will be deleted unless you sign in within ten minutes.",
        prompt: "Describe how you would verify the message without trusting its link.",
        response: "Do not use the link. Open the known school portal directly or contact the school help desk through its published contact information.",
        rationale: "An independent path prevents the suspicious message from controlling both the claim and the verification method."
      },
      {
        title: "Possible ransomware",
        scenario: "Several files suddenly have new names and will not open, and a payment note appears.",
        prompt: "List the safest immediate response steps.",
        response: "Stop using the device, disconnect it from networks when safe, report the incident, avoid paying or deleting evidence, and follow the organization's recovery plan.",
        rationale: "Isolation may limit spread, while reporting and preserving evidence support a controlled recovery from trusted backups."
      }
    ],
    reflection: [
      "Which decisions required technical tools, and which required careful human verification?",
      "What independent contact methods would you use for your most important accounts?"
    ]
  },
  quiz: [
    { category: "Privacy", question: "A file is deleted from a laptop and the recycle bin is emptied. Which conclusion is most accurate?", options: ["Other copies or recoverable storage data may still exist", "Every cloud and backup copy is erased at the same time", "The file becomes encrypted with a new private key", "The internet provider receives the only remaining copy"], answer: 0, explanation: "Deletion may leave recoverable blocks, backups, synchronized copies, or copies held elsewhere." },
    { category: "Privacy", question: "What is the main privacy benefit of a browser's private mode?", options: ["It limits local history and storage after the session", "It hides all requests from websites and network owners", "It replaces every password with public-key encryption", "It prevents downloaded files from reaching the device"], answer: 0, explanation: "Private browsing mainly limits traces saved in that browser profile." },
    { category: "Authentication", question: "Which password plan best limits damage if one service is breached?", options: ["Use a long unique password for every service", "Use one complex password for every important service", "Add the service name to one shared short password", "Change the same reused password once each year"], answer: 0, explanation: "Unique passwords prevent one leaked credential from unlocking other accounts." },
    { category: "Authentication", question: "Why is a password plus an authenticator code stronger than two separate passwords?", options: ["The checks use different authentication factor types", "The code permanently replaces the account password", "The two values are always stored on the same server", "The code guarantees that phishing cannot succeed"], answer: 0, explanation: "A password is something known, while the authenticator usually proves possession of a registered device." },
    { category: "Authentication", question: "An unexpected multi-factor approval appears on a phone. What is the best response?", options: ["Deny it and review the account through the official app", "Approve it once and change the password next month", "Send the displayed code to anyone claiming support access", "Disable the phone lock so the notice disappears"], answer: 0, explanation: "An unsolicited prompt may mean an attacker has a password and is seeking approval." },
    { category: "Network Safety", question: "What does HTTPS most directly protect when using public Wi-Fi?", options: ["The browser's connection to the authenticated website", "Every file already stored on the local device", "The honesty of all content published by the website", "The device from every malicious downloaded program"], answer: 0, explanation: "HTTPS encrypts traffic to the site and helps authenticate the destination." },
    { category: "Network Safety", question: "Which statement best describes a VPN on an untrusted local network?", options: ["It encrypts traffic to a provider but shifts trust there", "It proves every destination website is safe and honest", "It removes the need for software and browser updates", "It prevents service providers from seeing any account use"], answer: 0, explanation: "A VPN protects the local path but requires trust in the VPN endpoint and does not fix unsafe destinations." },
    { category: "Network Safety", question: "What is the primary role of a firewall?", options: ["Allow or block network traffic according to rules", "Generate unique passwords for every online account", "Recover deleted files from encrypted cloud backups", "Verify the truth of messages received by email"], answer: 0, explanation: "A firewall filters connections based on configured rules." },
    { category: "Encryption", question: "What challenge is most important when using secret-key encryption between two people?", options: ["They need a secure way to share the secret key", "They need a separate color model for each message", "They need to publish both copies of the secret key", "They need to remove all metadata before encryption"], answer: 0, explanation: "Both parties need the same secret, creating a key-distribution problem." },
    { category: "Encryption", question: "Which key should remain private in a public-key system?", options: ["The private key owned by the receiving party", "The public key shared by the receiving party", "The website address shown by the browser", "The temporary file name used by the message"], answer: 0, explanation: "The private key must be protected; the public key is designed for distribution." },
    { category: "Encryption", question: "Why do secure web sessions often combine public-key and secret-key methods?", options: ["They establish trust securely, then encrypt bulk data efficiently", "They turn every browser cookie into a permanent password", "They make server certificates unnecessary after installation", "They prevent an unlocked endpoint from reading its own data"], answer: 0, explanation: "Public-key methods support authentication and key exchange, while symmetric encryption is efficient for session data." },
    { category: "Phishing", question: "An urgent email asks for a school login. What is the strongest verification step?", options: ["Open the known portal independently and check the account", "Reply to the sender and ask whether the message is genuine", "Use the link because the page shows a lock icon", "Forward the message to friends and compare their guesses"], answer: 0, explanation: "An independent trusted path does not let the suspicious message control verification." },
    { category: "Phishing", question: "Why does a lock icon not prove that a website's request is trustworthy?", options: ["It protects the connection, not the honesty of the site's claim", "It appears only when a page has no encryption at all", "It verifies every product and statement published on the site", "It prevents the site from collecting any submitted information"], answer: 0, explanation: "HTTPS can protect a connection to a malicious or misleading site." },
    { category: "Malware", question: "Which backup is most useful after ransomware encrypts files on the main computer?", options: ["A tested recent copy protected from the affected account", "A shortcut to the same files on the affected computer", "An untested copy continuously writable by the same account", "A list of file names without the files or recovery steps"], answer: 0, explanation: "A recoverable backup should be current, tested, and isolated from the same compromise." },
    { category: "Defense", question: "How does least privilege reduce security risk?", options: ["A compromised user or program has fewer powers", "Every user receives administrator access for less time", "All network traffic is automatically made anonymous", "Every deleted file is immediately overwritten everywhere"], answer: 0, explanation: "Limiting permissions reduces what an attacker can access or change through one compromised identity." }
  ],
  summary: {
    intro: "Security is a process of managing risk through trustworthy design, careful verification, limited access, and practiced recovery.",
    points: [
      "Deleted data and private browsing have limits because copies and network records may remain.",
      "Long unique passwords, protected recovery, and different authentication factors defend accounts.",
      "HTTPS, VPNs, and firewalls solve different network-security problems.",
      "Secret-key and public-key encryption protect data when keys and endpoints remain secure.",
      "Phishing and social engineering require independent verification, not appearance-based trust.",
      "Updates, least privilege, monitoring, and tested backups create layered defense and recovery."
    ],
    review: [
      "Explain one limit of deleting data or using private browsing.",
      "Design a secure login and recovery plan for an important account.",
      "Compare the roles of HTTPS, a VPN, and a firewall.",
      "Describe a safe response to a suspicious message or possible ransomware."
    ],
    next: "Continue to Web Development to see how browsers, servers, HTTP, HTML, forms, and CSS build the web services that security controls protect."
  }
};
