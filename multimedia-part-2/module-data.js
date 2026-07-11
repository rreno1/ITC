buildCoursePart({
  id: 'multimedia-part-2',
  title: 'Multimedia Part 2',
  subtitle: 'Digital Audio, Video, and Immersive Media',
  description: 'Explore how computers sample sound, encode moving images, package media streams, render 3D scenes, and provide accessible alternatives.',
  objectives: [
    'Explain how sample rate, bit depth, and channels represent digital audio.',
    'Distinguish video frames, codecs, containers, and streaming settings.',
    'Describe how a renderer turns 3D scene data into visible frames.',
    'Select accessible media alternatives for different audience needs.'
  ],
  lessonIndexes: [0, 3, 5],
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Microphone_studio.jpg?width=1280',
  imageAlt: 'A studio microphone prepared to capture digital audio.',
  imageCredit: 'Photo: Zzubnik, public domain, via Wikimedia Commons.',
  taskIndexes: [1],
  extraTasks: [
    {
      title: 'Record a clear spoken lesson',
      scenario: 'A teacher needs a voice recording that remains understandable on phones without using excessive data.',
      prompt: 'Choose practical capture and export decisions, then explain the purpose of each.',
      response: 'Record with a suitable microphone in a quiet space, use a normal speech sample rate and bit depth, and export an efficient compressed copy after keeping the source.',
      rationale: 'Good capture conditions matter more than extreme settings, and a separate delivery copy balances clarity with file size.'
    },
    {
      title: 'Plan an accessible demonstration video',
      scenario: 'A short software demonstration includes narration and important on-screen actions.',
      prompt: 'Name two accessibility supports and one playback-quality decision.',
      response: 'Add accurate captions, provide a concise transcript or text explanation of key actions, and encode a readable resolution at a practical bitrate.',
      rationale: 'Multiple ways to receive the information support users who cannot hear, see, or smoothly stream the original video.'
    }
  ],
  activityTitle: 'Media Production Workshop',
  activityIntro: 'Design audio, video, and immersive media for realistic devices and network conditions. Explain each quality and accessibility tradeoff.',
  reflection: [
    'Which capture decisions cannot be fully repaired during editing?',
    'How can one media lesson remain useful to students with different devices, connections, and access needs?'
  ],
  appliedQuestions: [
    {
      category: 'Audio Capture',
      question: 'A speech recording is noisy even though it uses a very high sample rate. What is the best first improvement?',
      options: ['Improve the microphone position and reduce room noise before recording again', 'Increase the sample rate further because it removes background sounds', 'Add a second channel because stereo always makes speech clearer', 'Rename the recording because the extension controls microphone quality'],
      answer: 0,
      explanation: 'Digital settings cannot replace a clean source; capture conditions should be corrected first.'
    },
    {
      category: 'Audio Quality',
      question: 'Which statement best describes a sensible audio master and delivery copy?',
      options: ['Keep a high-quality source and export a smaller compatible listening copy', 'Keep only the smallest copy because later conversion restores removed detail', 'Use maximum settings for every recording regardless of its purpose', 'Convert the waveform to MIDI because both store identical performances'],
      answer: 0,
      explanation: 'A quality source protects future work, while a delivery copy can suit the audience and network.'
    },
    {
      category: 'Video Delivery',
      question: 'A mostly static lecture video buffers on mobile data. Which response is most appropriate?',
      options: ['Offer adaptive streams with lower practical resolutions and bitrates', 'Increase every stream to the camera maximum so devices choose faster', 'Remove all keyframes so the player downloads fewer complete images', 'Place the same large stream in a different container without testing it'],
      answer: 0,
      explanation: 'Adaptive delivery lets the player choose a stream the connection can sustain while keeping content readable.'
    },
    {
      category: 'Compatibility',
      question: 'An MP4 opens on one laptop but not another. What is the most useful first check?',
      options: ['Check whether the second player supports the video and audio codecs inside', 'Check whether both files use the same visible file name length', 'Check whether the first laptop has a higher screen brightness', 'Check whether the container contains exactly one metadata field'],
      answer: 0,
      explanation: 'A container can hold streams encoded with codecs that a particular player does not support.'
    },
    {
      category: '3D Graphics',
      question: 'A virtual scene looks realistic but responds too slowly to head movement. What should the team prioritize?',
      options: ['Reduce rendering load while preserving the visual cues needed for the task', 'Add more detail to every model because realism always improves comfort', 'Lower the audio sample rate because it controls frame response time', 'Remove the camera because rendering works without a viewpoint'],
      answer: 0,
      explanation: 'Stable, responsive frame delivery is important for usability and comfort in immersive media.'
    },
    {
      category: 'Accessibility',
      question: 'Which package gives the broadest access to a narrated instructional video?',
      options: ['Synchronized captions, a useful transcript, and clear visual descriptions where needed', 'Higher volume, decorative animation, and a larger download button', 'A faster frame rate, hidden controls, and music under every sentence', 'One high-resolution stream with no alternative way to receive the content'],
      answer: 0,
      explanation: 'Captions, transcripts, and descriptions provide equivalent information through different modes.'
    },
    {
      category: 'Best Practice',
      question: 'Which production decision most fairly balances quality, access, and data use?',
      options: ['Test representative devices and provide suitable versions or adaptive delivery', 'Publish only the largest master because every device can scale it efficiently', 'Use the smallest possible copy without checking whether details remain readable', 'Choose settings from the file extension alone and skip playback testing'],
      answer: 0,
      explanation: 'Testing real conditions and offering appropriate delivery options makes quality decisions evidence based.'
    }
  ],
  sourceQuizIndexes: [0, 1, 2, 8, 9, 10, 13, 14],
  summaryIntro: 'Audio, video, and immersive media are streams of numerical information shaped by capture, encoding, playback, performance, and inclusive design.',
  summaryPoints: [
    'Sample rate measures how often audio is sampled; bit depth controls the available value precision.',
    'Video combines timed frames and audio streams encoded by codecs inside a container.',
    'Adaptive delivery can balance clarity, connection speed, and device capability.',
    'A renderer calculates visible frames from models, materials, lights, and a camera.',
    'Captions, transcripts, descriptions, and usable controls make media available to more people.'
  ],
  summaryReview: [
    'Explain how sample rate and bit depth affect a recording.',
    'Distinguish a codec from a container using a video example.',
    'Plan accessibility supports for a narrated screen demonstration.'
  ],
  next: 'Continue to Security Part 1 for privacy, authentication, and phishing defense.'
});
