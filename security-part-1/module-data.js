buildCoursePart({
  id: 'security-part-1',
  title: 'Security Part 1',
  subtitle: 'Privacy, Authentication, and Human Trust',
  description: 'Learn what digital traces remain, how strong account protection works, and how independent verification defeats phishing and social engineering.',
  objectives: [
    'Explain the limits of deletion, private browsing, and online privacy.',
    'Create a strong password, recovery, and multi-factor authentication plan.',
    'Recognize phishing pressure and misleading trust signals.',
    'Verify unusual requests through an independent trusted channel.'
  ],
  lessonIndexes: [0, 1, 4],
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Smartphone_Use.jpg?width=1280',
  imageAlt: 'A person reviewing security information on a smartphone.',
  imageCredit: 'Photo: Blogtrepreneur, CC0, via Wikimedia Commons.',
  taskIndexes: [0, 1],
  extraTasks: [{
    title: 'Protect account recovery',
    scenario: 'A student uses unique passwords but all important accounts recover through one poorly protected email address.',
    prompt: 'Identify the main weakness and design a safer recovery plan.',
    response: 'Secure the recovery email with a unique password and strong multi-factor authentication, review recovery contacts, and store backup codes safely offline.',
    rationale: 'Recovery access can bypass an otherwise strong password, so it must receive protection equal to the accounts it controls.'
  }],
  activityTitle: 'Account and Trust Decision Lab',
  activityIntro: 'Evaluate privacy, login, and message scenarios. Choose a practical response and explain which risk it reduces.',
  reflection: [
    'Which security decisions depend on tools, and which depend on careful human verification?',
    'What trusted contact method would you use if your school or bank sent an unusual request?'
  ],
  appliedQuestions: [
    {
      category: 'Privacy',
      question: 'A student deletes a cloud-synchronized photo from a phone. Which conclusion is the most responsible?',
      options: ['Check cloud storage, shared copies, backups, and retention rules before assuming it is gone', 'Assume every copy disappeared because the local gallery no longer shows it', 'Use private browsing because it erases files from all connected services', 'Rename the remaining folder because new names remove stored copies'],
      answer: 0,
      explanation: 'Deletion on one device may not remove synchronized, shared, backed-up, or retained copies.'
    },
    {
      category: 'Privacy',
      question: 'When is private browsing most useful?',
      options: ['Reducing traces left in that browser profile on a shared device', 'Hiding all activity from websites, schools, and internet providers', 'Preventing every download from being stored on the computer', 'Guaranteeing that every visited website is safe and authentic'],
      answer: 0,
      explanation: 'Private mode mainly limits local browser history, cookies, and related storage after the session.'
    },
    {
      category: 'Passwords',
      question: 'A student remembers one complex password and uses it everywhere. What is the best improvement?',
      options: ['Use a password manager to create and store a unique password for each service', 'Add the website name to the same password while keeping the shared base', 'Keep the shared password and change only its capitalization each month', 'Write the same password in every recovery note for easier access'],
      answer: 0,
      explanation: 'Unique passwords prevent one service breach from unlocking accounts on other services.'
    },
    {
      category: 'Authentication',
      question: 'Which login design gives the strongest practical protection for an important account?',
      options: ['A unique long password plus a phishing-resistant second factor when available', 'Two different passwords typed into the same page for every login', 'A short password plus a security question with a public answer', 'One shared password changed often across all important accounts'],
      answer: 0,
      explanation: 'Independent factor types and unique credentials reduce both reuse and account takeover risk.'
    },
    {
      category: 'Recovery',
      question: 'Why should backup authentication codes be stored somewhere protected and separate from the phone?',
      options: ['They can restore access when the normal second-factor device is unavailable', 'They automatically identify every person who sends a phishing message', 'They replace the need to secure the recovery email address', 'They prevent the service from recording any successful login'],
      answer: 0,
      explanation: 'Separate protected codes provide recovery without depending on the lost or damaged device.'
    },
    {
      category: 'Phishing',
      question: 'An email claims a school account will close today and includes a familiar logo. What is the best response?',
      options: ['Open the known school portal directly or contact support using published details', 'Use the message link because urgency means the school needs a quick answer', 'Reply with the password so the sender can confirm the account owner', 'Trust the logo because copied branding cannot appear in a false message'],
      answer: 0,
      explanation: 'Independent verification avoids letting a suspicious message choose the website or contact method.'
    },
    {
      category: 'Social Engineering',
      question: 'Someone claiming to be technical support asks for a one-time login code. Which principle gives the best guidance?',
      options: ['Do not share authentication secrets; verify support through an official channel', 'Share the code if the caller can state the account email correctly', 'Approve the request once, then review the account at the end of the week', 'Disable multi-factor authentication so support no longer needs the code'],
      answer: 0,
      explanation: 'A login code proves possession and should not be transferred to an unsolicited requester.'
    },
    {
      category: 'Trust',
      question: 'A login page uses HTTPS and looks professional. What can be concluded safely?',
      options: ['The connection may be encrypted, but the site identity and request still need verification', 'The page content must be honest because encryption checks every claim', 'The site cannot collect submitted information because HTTPS blocks forms', 'The domain must belong to the expected organization because the layout is polished'],
      answer: 0,
      explanation: 'HTTPS protects a connection to a domain; it does not prove that every domain or message is trustworthy.'
    }
  ],
  sourceQuizIndexes: [0, 1, 2, 3, 4, 11, 12],
  summaryIntro: 'Personal security begins with realistic privacy expectations, protected credentials and recovery paths, and verification that does not depend on an untrusted message.',
  summaryPoints: [
    'Deleted data may remain in backups, synchronized devices, shared copies, or recoverable storage.',
    'Private browsing limits local traces but does not make internet activity invisible.',
    'Long unique passwords and protected recovery options limit damage from credential leaks.',
    'Multi-factor authentication is strongest when factors use different types and resist phishing.',
    'Urgency, authority, and copied branding are pressure signals, not proof of identity.'
  ],
  summaryReview: [
    'Explain one important limit of deletion and private browsing.',
    'Design a secure login and recovery plan for a school account.',
    'Describe how to verify an urgent message without using its links or contact details.'
  ],
  next: 'Continue to Security Part 2 for network protection, encryption, malware, and recovery.'
});
