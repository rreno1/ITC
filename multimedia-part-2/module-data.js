window.CC101_MODULE_DATA = {
  id: 'multimedia-part-2',
  courseTitle: 'Introduction to Computing',
  title: 'Multimedia Part 2',
  subtitle: 'Audio, Video, Streaming, and Immersive Media',
  description: 'Discover how computers record, compress, transmit, and play sound and video. Study sampling, bit depth, frame rates, codecs, containers, streaming, animation, 3D graphics, AR and VR, accessibility, deepfakes, and responsible multimedia production.',
  objectives: [
    'Explain how sound waves are sampled and represented as binary audio data.',
    'Compare audio channels, formats, compression methods, and bitrate settings for practical uses.',
    'Analyze how resolution, frame rate, bitrate, codecs, containers, and compression affect video.',
    'Explain how buffering and adaptive bitrate streaming respond to bandwidth and latency.',
    'Describe animation, 3D rendering, interactive media, and the differences among AR, VR, and MR.',
    'Apply accessibility, copyright, consent, and responsible-AI practices to multimedia production.',
    'Create and justify a complete 30- to 60-second accessible multimedia presentation.'
  ],
  lessons: [
    {
      title: 'Sound Waves and Digital Audio',
      category: 'Audio Foundations',
      visual: 'audio',
      lead: 'Digital audio begins when a microphone converts a continuously changing sound wave into electrical measurements that a computer can encode as binary numbers.',
      paragraphs: [
        'Sound is a vibration that travels through a material such as air. Frequency is the number of wave cycles per second and is measured in hertz; it strongly influences perceived pitch. Amplitude describes the size of the wave and is related to perceived loudness, although human hearing and playback equipment also affect what a listener experiences.',
        'A real sound wave is analog because it changes continuously. A microphone and analog-to-digital converter measure that wave at regular moments, assign a numerical value to each measurement, and encode those values in binary. Playback reverses the process: a digital-to-analog converter and speaker turn the stored values into a changing physical signal again.',
        'The accuracy of a recording depends on the source, microphone position, room noise, sampling choices, editing, and delivery format. Very large settings cannot repair distortion, clipping, or background noise captured at the start.'
      ],
      definitions: [
        { term: 'Frequency', definition: 'The number of sound-wave cycles per second, measured in hertz, which strongly affects pitch.' },
        { term: 'Amplitude', definition: 'The size of a sound wave, which is related to perceived loudness.' },
        { term: 'Analog signal', definition: 'A signal that changes continuously over time.' },
        { term: 'Digital audio', definition: 'A numerical representation of sound measurements stored and processed as binary data.' }
      ],
      examples: [
        'A high-frequency whistle is usually heard as a higher pitch than a low-frequency drumbeat.',
        'Moving a microphone closer can improve the level of speech compared with room noise, but placing it too close may cause distortion.',
        'A voice recorder converts microphone voltages into a sequence of binary sample values.'
      ],
      analogy: 'Analog sound is like a smooth ramp. Digital audio is like a staircase built from measured steps that follows the ramp as closely as the chosen settings allow.',
      misconception: 'Pitch and loudness are not the same property. Frequency mainly affects pitch, while amplitude is related to loudness.',
      review: [
        'How do frequency and amplitude relate to what a listener hears?',
        'Describe the path from an analog sound wave to binary sample values.'
      ]
    },
    {
      title: 'Sampling Rate and Audio Bit Depth',
      category: 'Audio Sampling',
      visual: 'audio',
      lead: 'Sample rate controls how often a sound is measured, while audio bit depth controls the precision available for each measurement.',
      paragraphs: [
        'Sampling records the amplitude of an analog signal at evenly spaced times. Sample rate is the number of samples taken each second and is measured in hertz. A higher rate can represent faster changes and higher audio frequencies, but it also creates more data. The rate should suit the source and purpose rather than simply be set to the largest available value.',
        'Audio bit depth is the number of bits available for each sample. More bits provide more possible amplitude levels, allowing smaller differences to be represented and reducing quantization error. Greater sample rate and bit depth normally increase the uncompressed file size because more values or more bits per value must be stored.',
        'A clean recording at sensible settings is more useful than a noisy recording at extreme settings. Production commonly keeps a high-quality source and creates smaller delivery copies later.'
      ],
      definitions: [
        { term: 'Sampling', definition: 'Measuring an analog signal at regular time intervals so it can be represented digitally.' },
        { term: 'Sample rate', definition: 'The number of audio samples captured each second, measured in hertz or kilohertz.' },
        { term: 'Audio bit depth', definition: 'The number of bits used for each sample, controlling the available amplitude precision.' },
        { term: 'Quantization', definition: 'Assigning each measured amplitude to one of the numerical levels allowed by the bit depth.' }
      ],
      examples: [
        'A rate of 44.1 kHz stores 44,100 samples for each second of each audio channel.',
        'A 16-bit sample has more possible amplitude values than an 8-bit sample.',
        'Doubling the sample rate approximately doubles the uncompressed sample data when the other settings stay the same.'
      ],
      analogy: 'Sample rate is how often a surveyor takes a reading; bit depth is how precise the measuring instrument is. More readings and finer measurements create more data.',
      misconception: 'A higher sample rate does not automatically remove room echo, microphone noise, or clipping. Those are capture problems.',
      review: [
        'What different part of digital audio is controlled by sample rate and by bit depth?',
        'Why do higher sampling settings usually increase storage needs?'
      ]
    },
    {
      title: 'Audio Channels, Formats, Compression, and Bitrate',
      category: 'Audio Encoding',
      visual: 'audio',
      lead: 'An audio file combines one or more channels with an encoding format and a compression or bitrate choice suited to its use.',
      paragraphs: [
        'Mono uses one audio channel, stereo normally uses separate left and right channels, and surround sound uses several speakers around the listener. Spatial audio can also use processing and metadata to make sounds seem to come from positions in three-dimensional space. Extra channels can improve an experience, but they also add data and are unnecessary for many speech recordings.',
        'WAV commonly stores uncompressed or losslessly encoded audio and is useful for editing. FLAC uses lossless compression, so decoded samples match the source exactly. MP3, AAC, OGG Vorbis, and Opus commonly use lossy compression, removing selected information to reduce size; AAC and Opus are often efficient for modern delivery. The best choice depends on quality, compatibility, editing, and network needs.',
        'Bitrate is the amount of encoded data used per second. A higher bitrate often preserves more detail but increases file size and bandwidth. Constant bitrate, or CBR, uses a similar rate throughout; variable bitrate, or VBR, spends more data on complex sections and less on simple ones. Format names alone do not prove quality because capture and encoding settings also matter.'
      ],
      definitions: [
        { term: 'Audio channel', definition: 'One stream of sound information, such as mono or the left and right streams of stereo.' },
        { term: 'Lossless audio', definition: 'Audio compression that reconstructs the original sample data exactly.' },
        { term: 'Lossy audio', definition: 'Audio compression that permanently removes selected information to make a smaller file.' },
        { term: 'Bitrate', definition: 'The amount of encoded audio or video data used per second, often measured in kbps or Mbps.' },
        { term: 'CBR and VBR', definition: 'Constant bitrate uses a steady target rate; variable bitrate changes the rate according to content complexity.' }
      ],
      examples: [
        'A spoken announcement may need only mono, while a concert recording benefits from stereo or multichannel sound.',
        'Keep a WAV or FLAC master for future editing and export AAC, MP3, or Opus for convenient delivery.',
        'A VBR encoder can use fewer bits during silence and more during complex music.'
      ],
      analogy: 'Channels are lanes carrying sound, the codec is the packing method, the format identifies how the recording is stored, and bitrate is the data budget available each second.',
      misconception: 'Changing a file extension does not convert the audio or improve it. The data must be encoded with an appropriate codec and settings.',
      review: [
        'Choose suitable master and delivery formats for a class podcast and justify each choice.',
        'How do mono, stereo, surround, and spatial audio differ?'
      ]
    },
    {
      title: 'Audio Quality Comparison Demonstration',
      category: 'Audio Demonstration',
      visual: 'audio',
      lead: 'A controlled export comparison reveals what audio compression and bitrate change when the source and listening conditions stay the same.',
      paragraphs: [
        'Record one short, clean sound sample and keep the recording settings and duration unchanged. Export the same source as WAV, MP3 at 64 kbps, MP3 at 320 kbps, and FLAC. Record each file size before listening so the comparison uses evidence rather than assumptions.',
        'Listen through the same headphones or speakers at the same volume. Compare speech clarity, high-frequency detail, background texture, and obvious artifacts. WAV and FLAC should reproduce the source samples without lossy removal, although FLAC is usually smaller. The 64 kbps MP3 should be much smaller but may reveal more damage than the 320 kbps MP3.',
        'Document which differences are clearly audible, which are subtle, and which may depend on the listener or equipment. A fair conclusion names both the quality result and the storage or delivery tradeoff.'
      ],
      definitions: [
        { term: 'Controlled comparison', definition: 'A test that changes one main variable while keeping the source and other conditions consistent.' },
        { term: 'Audio artifact', definition: 'An unwanted audible change introduced by compression or processing.' },
        { term: 'Master file', definition: 'A high-quality source retained for editing and future exports.' },
        { term: 'Delivery copy', definition: 'A copy encoded for the needs of a particular audience, device, or network.' }
      ],
      examples: [
        'A table can list format, bitrate or compression type, file size, listening observations, and recommended use.',
        'Speech may remain understandable at 64 kbps even when music loses noticeable detail.',
        'FLAC can be smaller than WAV without discarding decoded sample data.'
      ],
      analogy: 'The four exports are like four packages made from the same original item. Comparing them fairly means changing the packaging while keeping the item itself unchanged.',
      misconception: 'If a listener cannot hear a difference in one test, the files are not therefore identical. Equipment, content, hearing, and compression method affect what is noticeable.',
      review: [
        'Why must every export begin with the same source recording?',
        'What evidence belongs in an audio quality and file-size comparison?'
      ]
    },
    {
      title: 'Video Frames, Resolution, Aspect Ratio, and Color',
      category: 'Video Foundations',
      visual: 'video',
      lead: 'Digital video presents a timed sequence of colored image frames, with spatial dimensions and proportions chosen for the intended screen.',
      paragraphs: [
        'Each video frame is a digital image made of pixels and color values. Resolution describes the pixel dimensions of each frame. Common delivery resolutions include 1280 x 720, called 720p; 1920 x 1080, called 1080p; 2560 x 1440, called 1440p; and approximately 3840 x 2160, called 4K UHD. More pixels can preserve more spatial detail but require more processing and data.',
        'Aspect ratio describes the proportional relationship between width and height, such as 16:9 for widescreen video or 9:16 for vertical phone video. Cropping or adding unused bars may be necessary when source and destination ratios differ. Video systems encode color information for display and compression; color range, accuracy, lighting, exposure, and the original camera all affect the result.',
        'Frame rate is the number of frames shown each second. Film-like motion commonly uses 24 fps, general video often uses 30 fps, and fast action or very smooth motion may use 60 fps or higher. A higher frame rate stores more frames and therefore normally requires more data or stronger compression.'
      ],
      definitions: [
        { term: 'Frame', definition: 'One complete still image in a video sequence.' },
        { term: 'Resolution', definition: 'The pixel dimensions of each video frame.' },
        { term: 'Aspect ratio', definition: 'The proportional relationship between frame width and height.' },
        { term: 'Frame rate', definition: 'The number of video frames displayed each second, measured in fps.' }
      ],
      examples: [
        'A 1080p frame contains 1920 x 1080 pixel positions, while a 4K UHD frame contains four times as many.',
        'A 24 fps interview can look natural, while 60 fps may make fast sports movement easier to follow.',
        'A vertical 9:16 clip may need reframing before it fits a 16:9 classroom display.'
      ],
      analogy: 'Video is a flipbook: resolution is the detail on each page, aspect ratio is the page shape, color describes the marks, and frame rate is how many pages turn each second.',
      misconception: '4K does not guarantee a better-looking video. Focus, lighting, bitrate, compression, and source quality can matter more than the resolution label.',
      review: [
        'Compare 720p, 1080p, 1440p, and 4K in terms of pixel detail and data needs.',
        'When would 60 fps be more useful than 24 or 30 fps?'
      ]
    },
    {
      title: 'Video Bitrate and Compression',
      category: 'Video Compression',
      visual: 'video',
      lead: 'Video bitrate is a data budget shared across changing frames, so compression must decide which visual information deserves the most space.',
      paragraphs: [
        'Video bitrate measures how much encoded data is used per second. Increasing it often reduces compression damage, but it also increases storage and bandwidth. The useful rate depends on resolution, frame rate, scene complexity, codec efficiency, and viewing conditions. A well-encoded 1080p video can look better than a poorly compressed 4K video because resolution and bitrate describe different properties.',
        'Video codecs reduce repetition within a frame and across nearby frames. A keyframe stores a complete reference image. Interframe compression stores changes relative to reference frames, and motion prediction estimates where blocks or objects move so the codec can describe motion efficiently rather than repeat every pixel.',
        'Fast action, moving texture, camera noise, and scene cuts are harder to compress than a static lecture slide. If the bitrate is too low, viewers may see blocking, smearing, banding, loss of texture, or unstable detail.'
      ],
      definitions: [
        { term: 'Video bitrate', definition: 'The amount of encoded video data used per second, affecting quality, storage, and bandwidth.' },
        { term: 'Keyframe', definition: 'A complete reference frame stored so later frames can be decoded.' },
        { term: 'Interframe compression', definition: 'Compression that represents similarities and changes across multiple frames.' },
        { term: 'Motion prediction', definition: 'Estimating how image regions move between frames so motion can be encoded with less repeated data.' }
      ],
      examples: [
        'A mostly static lecture can use fewer bits than fast sports footage at the same resolution.',
        'A low-bitrate 4K stream may show more artifacts than a carefully encoded 1080p stream.',
        'Seeking to a different time often begins decoding from a nearby keyframe.'
      ],
      analogy: 'Instead of redrawing an entire classroom for every animation frame, describe the unchanged room once and then record that one student moved. That is the basic economy of interframe compression.',
      misconception: 'Resolution is the number of pixels in a frame; bitrate is the amount of data used each second. One cannot be inferred reliably from the other.',
      review: [
        'Why might fast action need more bitrate than a static presentation?',
        'Explain how keyframes and motion prediction reduce repeated video data.'
      ]
    },
    {
      title: 'Codecs and Containers',
      category: 'Media Packaging',
      visual: 'video',
      lead: 'A codec encodes or decodes a media stream, while a container packages one or more streams with timing, subtitles, and metadata.',
      paragraphs: [
        'Common video codecs include H.264, H.265 or HEVC, VP9, and AV1. H.264 has broad compatibility; H.265 and AV1 can often deliver similar quality with less data but may require more processing or newer support. AAC and Opus are examples of audio codecs that may accompany video.',
        'MP4, MKV, WebM, and MOV are containers. A container can hold video, one or more audio tracks, captions or subtitles, chapter timing, and metadata. An MP4 file may contain H.264 video and AAC audio, but the .mp4 extension alone does not guarantee which codecs are inside.',
        'Compatibility depends on the container, every codec inside it, device capabilities, browser or player support, and sometimes licensing or hardware acceleration. A production workflow should test the actual exported file on representative devices.'
      ],
      definitions: [
        { term: 'Codec', definition: 'A method or program that encodes and decodes an audio or video stream.' },
        { term: 'Container', definition: 'A file structure that packages media streams, captions, timing information, and metadata.' },
        { term: 'H.264, H.265, and AV1', definition: 'Video codec families with different efficiency, processing, and compatibility tradeoffs.' },
        { term: 'MP4, MKV, WebM, and MOV', definition: 'Container formats that can hold one or more encoded media streams.' }
      ],
      examples: [
        'MP4 container: H.264 video + AAC audio + timed captions.',
        'WebM container: VP9 or AV1 video + Opus audio.',
        'Two .mp4 files may behave differently because their internal codecs or profiles differ.'
      ],
      analogy: 'A container is a lunch box that holds several items; codecs are the packing methods used for the individual foods. The box label does not reveal every method inside.',
      misconception: 'MP4 is not a video codec. It is a container that can package video and audio encoded in several different ways.',
      review: [
        'Build one valid example that names a container, a video codec, and an audio codec.',
        'Why can two files with the same extension have different playback compatibility?'
      ]
    },
    {
      title: 'Video Quality Comparison Demonstration',
      category: 'Video Demonstration',
      visual: 'video',
      lead: 'A controlled set of exports makes resolution, frame rate, bitrate, and codec tradeoffs visible and measurable.',
      paragraphs: [
        'Begin with the same short source clip, preferably one that includes both a quiet scene and visible motion. Export controlled pairs: 720p and 1080p; 30 fps and 60 fps; low and high bitrate; H.264 and one other available codec such as H.265, VP9, or AV1. Change one main variable at a time whenever possible.',
        'For every export, record resolution, frame rate, bitrate, codec, container, file size, encoding time, playback compatibility, and visual observations. Inspect fine text, edges, gradients, motion, and scene changes for blocking, smearing, banding, or lost detail.',
        'Identify which changes are noticeable on the available display and which mostly increase file size or processing. The conclusion should choose an appropriate export for a stated audience and bandwidth, not declare one setting universally best.'
      ],
      definitions: [
        { term: 'Encoding test', definition: 'A planned comparison of exported media settings using a consistent source.' },
        { term: 'Compression artifact', definition: 'An unwanted visible or audible change introduced by encoding or processing.' },
        { term: 'Encoding time', definition: 'The time required to compress and package a media export.' },
        { term: 'Compatibility test', definition: 'Checking an exported file on the devices and players expected to use it.' }
      ],
      examples: [
        'Compare 720p and 1080p at a similar quality target to see the detail and size tradeoff.',
        'Compare 30 fps and 60 fps using the same motion sequence.',
        'Compare H.264 with another available codec while documenting both efficiency and playback support.'
      ],
      analogy: 'A fair video test is a science experiment: hold the source steady, change a controlled setting, measure the result, and avoid conclusions the evidence does not support.',
      misconception: 'Changing several settings at once may create a different file, but it does not show which setting caused the observed difference.',
      review: [
        'What variables and observations belong in the required video comparison table?',
        'Why should an export be tested on representative devices instead of only the editing computer?'
      ]
    },
    {
      title: 'Streaming, Buffering, Bandwidth, and Latency',
      category: 'Streaming',
      visual: 'video',
      lead: 'Streaming delivers media in playable segments while a buffer and adaptive player manage changes in network speed.',
      paragraphs: [
        'Downloading normally stores an entire file before or while the user opens the stored copy. Streaming divides media into smaller segments and begins playback before the whole program arrives. A typical flow is: media server, segmented video, internet delivery, device buffer, decoder, and displayed frames with synchronized audio.',
        'The buffer stores upcoming segments so brief network delays do not interrupt playback. Bandwidth is the amount of data a connection can carry over time, while latency is the delay before data begins or completes a trip. Insufficient sustained bandwidth empties the buffer and causes rebuffering; high latency can make startup and live interaction feel slow.',
        'Adaptive bitrate streaming prepares several versions at different resolutions or bitrates. The player estimates current conditions and switches versions segment by segment. When bandwidth decreases, it may lower resolution or bitrate to protect continuous playback; when conditions improve, it may raise quality again.'
      ],
      definitions: [
        { term: 'Streaming', definition: 'Delivering media in portions so playback can begin before the entire program has arrived.' },
        { term: 'Buffer', definition: 'Temporary storage of upcoming media data used to smooth short delivery delays.' },
        { term: 'Bandwidth', definition: 'The amount of data a connection can carry during a period of time.' },
        { term: 'Latency', definition: 'The delay involved in sending, receiving, or responding to data.' },
        { term: 'Adaptive bitrate streaming', definition: 'Delivery that switches among prepared quality levels according to changing conditions.' }
      ],
      examples: [
        'Streaming simulation: media server -> small segments -> internet -> device buffer -> decoder -> screen and speakers.',
        'A player may switch from 1080p to 720p when available bandwidth falls.',
        'A live class needs low latency for discussion, while an on-demand film can use a larger buffer.'
      ],
      analogy: 'A buffer is a small water tank between an uneven supply pipe and a steady tap. If supply stays below use for too long, the tank empties and playback pauses.',
      misconception: 'Streaming does not mean that no data is downloaded. Segments are still transferred and temporarily stored; the difference is how delivery and playback are organized.',
      review: [
        'Trace a video segment from the media server to displayed frames.',
        'How do bandwidth, latency, buffering, and adaptive bitrate affect the viewing experience?'
      ]
    },
    {
      title: 'Animation and Motion Graphics',
      category: 'Animation',
      visual: 'video',
      lead: 'Animation creates change over time through individually designed frames, calculated in-between states, or programmed movement.',
      paragraphs: [
        'Frame-by-frame animation creates each important frame separately and offers detailed control. Tweening defines key states and lets software calculate intermediate positions, shapes, colors, or other properties. Motion graphics animate text, icons, diagrams, and graphic design elements to communicate information.',
        'Computer animation can combine keyframes, procedural rules, physics simulation, motion capture, and algorithms. The result is still rendered as timed frames, so resolution, frame rate, codec, and bitrate affect delivery just as they do for recorded video.',
        'Movement should serve communication. Excessive motion can distract, trigger discomfort, or make text hard to read, so controls and reduced-motion alternatives may be necessary.'
      ],
      definitions: [
        { term: 'Frame-by-frame animation', definition: 'Animation in which individual frames are created or adjusted separately.' },
        { term: 'Tweening', definition: 'Automatic calculation of intermediate states between defined key states.' },
        { term: 'Motion graphics', definition: 'Animated graphic-design elements such as titles, icons, charts, and shapes.' },
        { term: 'Computer animation', definition: 'Animation produced with digital models, keyframes, algorithms, simulations, or captured motion.' }
      ],
      examples: [
        'A hand-drawn character may use frame-by-frame animation.',
        'A title can move from left to right by tweening between two positions.',
        'An educational motion graphic can animate labels to explain a process step by step.'
      ],
      analogy: 'Key states are major stops on a journey; tweening asks the software to calculate the route between them.',
      misconception: 'Animation is not only cartoons. Interface feedback, animated diagrams, simulations, titles, and data graphics are also animation.',
      review: [
        'Compare frame-by-frame animation with tweening.',
        'How can motion graphics improve or harm an educational presentation?'
      ]
    },
    {
      title: '3D Graphics and Rendering',
      category: '3D Graphics',
      visual: 'video',
      lead: 'A 3D scene combines geometric models, surface detail, lighting, and a camera before a renderer calculates the final pixels.',
      paragraphs: [
        'A 3D model describes an object in three-dimensional coordinates. Many models use vertices connected into polygon surfaces. Materials describe how surfaces respond to light, while textures add color and fine detail without requiring every mark to be modeled as geometry.',
        'Lights define illumination, highlights, and shadows. A virtual camera defines viewpoint, framing, and perspective. Rendering calculates the visible pixels for each frame from geometry, materials, textures, lights, and camera settings. More polygons, larger textures, complex lighting, and advanced effects increase processing work.',
        'Real-time graphics must render quickly enough for games, simulations, and immersive media to respond to input. Offline rendering can spend much longer on each frame when immediate interaction is unnecessary.'
      ],
      definitions: [
        { term: '3D model', definition: 'A numerical description of an object or scene in three-dimensional coordinates.' },
        { term: 'Polygon', definition: 'A flat geometric face used with other faces to form many 3D surfaces.' },
        { term: 'Texture', definition: 'Image or data mapped onto a surface to add color or detail.' },
        { term: 'Virtual camera', definition: 'The viewpoint and projection used to frame a rendered scene.' },
        { term: 'Rendering', definition: 'Calculating visible pixels from scene geometry, materials, textures, lights, and a camera.' }
      ],
      examples: [
        'A product visualizer rotates a textured 3D model under virtual lights.',
        'A game reduces distant model detail to maintain a responsive frame rate.',
        'An animated film may render one high-quality frame for minutes or hours before combining all frames into video.'
      ],
      analogy: 'A 3D scene is a theater: models are props, textures and materials are surface finishes, lights reveal form, the camera chooses the view, and rendering produces the audience picture.',
      misconception: 'A detailed model alone does not guarantee a convincing image. Lighting, materials, camera, rendering, and performance all matter.',
      review: [
        'What information does a renderer use to produce a 2D frame?',
        'Why might a real-time application simplify polygons, textures, or lighting?'
      ]
    },
    {
      title: 'Interactive Multimedia, AR, VR, and MR',
      category: 'Immersive Media',
      visual: 'video',
      lead: 'Interactive multimedia responds to user input, while AR, VR, and MR place digital content in different relationships with the physical world.',
      paragraphs: [
        'Interactive multimedia combines media with choices and feedback. Games, websites, simulations, and educational applications may respond to clicks, touch, movement, speech, controllers, or sensor data. Good interaction makes the purpose and available controls clear and gives timely feedback.',
        'Augmented reality, or AR, overlays digital content on a view of the physical world. Virtual reality, or VR, replaces the visible environment with an interactive simulated scene, often showing a slightly different view to each eye and updating as the head moves. Mixed reality, or MR, anchors digital objects so they appear to understand and interact with the physical environment.',
        'Immersive systems need responsive tracking and stable frame delivery. Delay between movement and display, inconsistent frame rate, unclear boundaries, or excessive motion may reduce accuracy, comfort, and safety. The least immersive technology that meets the learning goal may be the most usable choice.'
      ],
      definitions: [
        { term: 'Interactive multimedia', definition: 'Media that changes or responds according to user choices or input.' },
        { term: 'Augmented reality', definition: 'Digital information overlaid on a view of the physical world.' },
        { term: 'Virtual reality', definition: 'An interactive simulated environment that largely replaces the user\'s view of the physical world.' },
        { term: 'Mixed reality', definition: 'Digital objects anchored to and interacting with an understood physical environment.' },
        { term: 'Spatial tracking', definition: 'Measuring the position or orientation of a user, device, or object in space.' }
      ],
      examples: [
        'A website quiz gives feedback after each student choice.',
        'AR can place labels over parts of a real machine viewed through a phone.',
        'VR can simulate a laboratory, while MR can make a digital model appear attached to a real desk.'
      ],
      analogy: 'AR writes digital notes on a window to the real world, VR moves the viewer into a different room, and MR places digital objects in the real room as if both share the same space.',
      misconception: 'AR, VR, and MR are not interchangeable names. They describe different relationships between digital content, the user, and the physical environment.',
      review: [
        'Choose AR, VR, or MR for three different learning situations and justify each choice.',
        'Why are latency and stable frame rate especially important in immersive media?'
      ]
    },
    {
      title: 'Accessible, Ethical, and AI-Generated Multimedia',
      category: 'Responsible Production',
      visual: 'video',
      lead: 'Responsible multimedia gives people equivalent ways to receive information and treats identity, ownership, consent, and synthetic content honestly.',
      paragraphs: [
        'Media accessibility includes accurate synchronized captions, transcripts for audio, audio descriptions of important visual action, readable interfaces, sufficient contrast, keyboard-accessible controls, visible focus, and controls that do not rely on sound or color alone. Captions should identify meaningful speakers and sounds, while transcripts should be organized for reading rather than dumped as unedited text.',
        'Ethical production checks copyright and licenses, credits sources, obtains informed consent, respects privacy, and avoids piracy. Responsible editing does not remove context or manipulate media in a way that misleads viewers. Deepfakes and misleading edits can spread misinformation or harm a person even when the technical result is impressive.',
        'AI systems can generate music, video, voices, images, and other synthetic media. Voice cloning and realistic synthetic video create special risks involving impersonation, consent, bias, authenticity, and fraud. Producers should verify claims, disclose meaningful AI use, preserve source records where appropriate, label uncertain or synthetic material clearly, and never present generated detail as captured evidence.'
      ],
      definitions: [
        { term: 'Captions', definition: 'Timed text that represents speech and meaningful audio information in video.' },
        { term: 'Audio description', definition: 'Spoken description of important visual information that is not otherwise available through sound.' },
        { term: 'Deepfake', definition: 'Synthetic or manipulated media designed to make a person appear to say or do something that did not occur.' },
        { term: 'Synthetic media', definition: 'Audio, video, images, or other media generated or substantially altered by computational systems.' },
        { term: 'Informed consent', definition: 'Permission given with a clear understanding of how a recording, likeness, or voice will be used.' }
      ],
      examples: [
        'A software tutorial includes synchronized captions, a structured transcript, and descriptions of essential on-screen actions.',
        'A student credits licensed music and checks that the license permits the planned use.',
        'An AI-cloned voice is not used without permission and is clearly disclosed when a legitimate use has been authorized.'
      ],
      analogy: 'Accessibility adds more doors into the same information; ethics checks whether people have a right to enter, create, copy, or change what is inside.',
      misconception: 'A disclosure alone does not make harmful synthetic media ethical. Consent, purpose, accuracy, ownership, bias, and likely impact still matter.',
      review: [
        'Plan captions, a transcript, audio description, and readable controls for an instructional video.',
        'What checks should occur before publishing AI-generated or heavily edited multimedia?'
      ]
    }
  ],
  activity: {
    title: 'Create a 30- to 60-Second Educational Multimedia Presentation',
    intro: 'Produce one short, accessible presentation and the comparison evidence that justifies its settings. Suggested curriculum weighting across both parts is: Part 1 quiz 15%, image optimization activity 20%, Part 2 quiz 15%, audio/video comparison activity 20%, and final multimedia output 30%.',
    tasks: [
      {
        title: 'Complete the audio comparison',
        scenario: 'You need evidence for an audio format and bitrate choice before building the final presentation.',
        prompt: 'Export the same clean sound as WAV, MP3 at 64 kbps, MP3 at 320 kbps, and FLAC. Compare file size and listening quality under the same conditions.',
        response: 'Submit a table naming each format, compression type or bitrate, file size, audible observations, and a justified master and delivery choice.',
        rationale: 'A controlled comparison connects uncompressed, lossless, and lossy encoding decisions to evidence rather than extension memorization.'
      },
      {
        title: 'Complete the video comparison',
        scenario: 'The same short source clip must be tested for different devices and connections.',
        prompt: 'Compare 720p with 1080p, 30 fps with 60 fps, low with high bitrate, and H.264 with another available codec. Change one main variable at a time and record file size, quality, and compatibility.',
        response: 'Submit a comparison table and identify which changes were visible, which mainly increased size or processing, and which export best suits the intended audience.',
        rationale: 'The comparison separates resolution, frame rate, bitrate, and codec effects and supports a defensible final export.'
      },
      {
        title: 'Plan and build the final production',
        scenario: 'Create a 30- to 60-second explanation of a school topic for students using different devices and access methods.',
        prompt: 'Include at least one optimized image, recorded narration or licensed music, video or animation, readable titles and purposeful transitions, accurate captions, and properly credited media sources.',
        response: 'A strong production communicates one clear idea, uses every required medium purposefully, has readable timing and text, includes accurate captions, and credits or documents every external source.',
        rationale: 'Combining media is valuable only when the elements support the message, remain accessible, and respect ownership and consent.'
      },
      {
        title: 'Export, test, and justify the delivery file',
        scenario: 'The finished presentation must play clearly on a school computer and a phone without wasting bandwidth.',
        prompt: 'Choose and record an appropriate resolution, frame rate, video codec, audio codec, container, and bitrate. Test playback, captions, audio clarity, readability, file size, and compatibility on representative devices.',
        response: 'Submit the tested file plus a short production note explaining each setting, any adaptive or alternate version, the accessibility checks, and the tradeoffs accepted.',
        rationale: 'A technically successful export balances quality, storage, bandwidth, compatibility, accessibility, and audience needs.'
      },
      {
        title: 'Use the assessment guidance',
        scenario: 'The two-part multimedia unit needs a balanced assessment plan that values understanding and production.',
        prompt: 'Organize the evidence for the Part 1 quiz, image optimization activity, Part 2 quiz, audio/video comparison activity, and final output using the suggested weights.',
        response: 'Use 15% for the Part 1 quiz, 20% for image optimization, 15% for the Part 2 quiz, 20% for audio/video comparison, and 30% for the final multimedia output. Judge choices and explanations, not memorized extensions alone.',
        rationale: 'The weighting balances conceptual understanding, controlled technical comparison, and responsible application in a complete product.'
      }
    ],
    reflection: [
      'Which comparison result most strongly influenced your final audio or video settings?',
      'How did the audience, device, bandwidth, and accessibility needs change your production?',
      'What evidence shows that your use of sources, people, and any AI-generated media was responsible?'
    ]
  },
  quiz: [
    {
      category: 'Sound',
      question: 'A learner makes a tone higher without trying to make it louder. Which change best matches that goal?',
      options: ['Increase the sound-wave frequency while keeping amplitude similar', 'Increase amplitude while keeping frequency similar', 'Add a second channel without changing the wave', 'Change the container while keeping the audio identical'],
      answer: 0,
      explanation: 'Frequency strongly affects perceived pitch, while amplitude is related to loudness.'
    },
    {
      category: 'Sampling',
      question: 'A recorder must measure a rapidly changing sound more often each second. Which setting should be increased?',
      options: ['Sample rate', 'Container size', 'Screen resolution', 'Video keyframe interval'],
      answer: 0,
      explanation: 'Sample rate is the number of audio measurements captured each second.'
    },
    {
      category: 'Audio Bit Depth',
      question: 'Two clean recordings use the same sample rate, but one must represent smaller amplitude differences. Which change most directly helps?',
      options: ['Use a greater audio bit depth', 'Use a wider video aspect ratio', 'Add a subtitle track', 'Reduce the number of channels to zero'],
      answer: 0,
      explanation: 'Greater bit depth provides more possible numerical levels for each sample.'
    },
    {
      category: 'Audio Channels',
      question: 'A museum headset should make narration seem to come from the location of each exhibit around the listener. Which approach best supports that goal?',
      options: ['Use spatial audio positioning with suitable channel or object information', 'Convert every track to mono and remove position information', 'Raise only the video frame rate', 'Place the audio in a different file-name extension'],
      answer: 0,
      explanation: 'Spatial audio represents or processes sound positions around the listener.'
    },
    {
      category: 'Audio Formats',
      question: 'A student needs an exact, smaller-than-WAV archive for future editing and a compact listening copy. Which pair is most sensible?',
      options: ['FLAC for the lossless archive and AAC, MP3, or Opus for delivery', '64 kbps MP3 for the only archive and WAV created from it later', 'A video-only codec for the archive and a bitmap for delivery', 'The same renamed file for both because extensions restore quality'],
      answer: 0,
      explanation: 'FLAC preserves decoded sample data losslessly, while common lossy codecs can make efficient delivery copies.'
    },
    {
      category: 'Audio Bitrate',
      question: 'A podcast has silence, simple speech, and a short complex music section. Which setting can spend fewer bits on simple sections and more on complex ones?',
      options: ['Variable bitrate encoding', 'A fixed screen aspect ratio', 'One video keyframe only', 'Higher microphone volume after clipping'],
      answer: 0,
      explanation: 'VBR changes the encoded rate according to content complexity.'
    },
    {
      category: 'Video Quality',
      question: 'A low-bitrate 4K export looks blockier than a well-encoded 1080p export. What is the best explanation?',
      options: ['Resolution counts pixels, but bitrate controls the data budget used to encode changing frames', '4K always contains fewer pixels than 1080p', 'Frame rate and bitrate are two names for the same setting', 'The MP4 extension automatically reduces resolution'],
      answer: 0,
      explanation: 'More pixels do not guarantee enough encoded data to preserve them well.'
    },
    {
      category: 'Codecs and Containers',
      question: 'A teacher exports H.264 video with AAC audio and captions inside an MP4 file. Which statement is accurate?',
      options: ['H.264 and AAC are codecs, while MP4 is the container', 'MP4 is the video codec, while H.264 is the container', 'Captions are the container and AAC is the frame rate', 'All four terms describe image resolution'],
      answer: 0,
      explanation: 'Codecs encode individual streams; a container packages streams and related data.'
    },
    {
      category: 'Video Compression',
      question: 'A camera stays still while one person walks across the frame. How can an interframe codec reduce repeated data?',
      options: ['Use reference frames and motion prediction to describe unchanged areas and the moving region', 'Store every pixel of every frame several times', 'Convert the movement into an audio channel', 'Remove every keyframe so decoding needs no reference'],
      answer: 0,
      explanation: 'Interframe compression reuses shared information and can describe movement relative to reference frames.'
    },
    {
      category: 'Streaming',
      question: 'A student is watching a streamed lesson when sustained bandwidth drops below the current media rate. What should an adaptive player do?',
      options: ['Request lower-bitrate or lower-resolution segments before the buffer empties', 'Wait for the entire original file to download before making any change', 'Increase bitrate so each segment becomes larger', 'Remove the decoder because buffering replaces decoding'],
      answer: 0,
      explanation: 'Adaptive streaming switches among prepared versions to protect continuous playback under changing bandwidth.'
    },
    {
      category: 'Animation',
      question: 'A designer sets a title position at the beginning and end, then lets software calculate the positions between them. Which technique is being used?',
      options: ['Tweening between key states', 'Lossless audio compression', 'Spatial sound rendering', 'Downloading instead of streaming'],
      answer: 0,
      explanation: 'Tweening calculates intermediate animation states between defined key states.'
    },
    {
      category: '3D Graphics',
      question: 'A real-time 3D lesson misses its frame-rate target. Which change most directly reduces rendering work while preserving the needed view?',
      options: ['Simplify unnecessary polygons, textures, lighting, or effects and test again', 'Increase every texture and model to maximum detail', 'Remove the virtual camera but keep rendering', 'Raise audio sample rate because it controls polygon speed'],
      answer: 0,
      explanation: 'Geometry, textures, lighting, and effects all contribute to the work required to render each frame.'
    },
    {
      category: 'Immersive Media',
      question: 'A tablet places a digital engine model on a real desk and keeps it anchored as the user walks around. Which description fits best?',
      options: ['Mixed reality because the digital object is anchored to and interacts with the understood environment', 'Virtual reality because the real room must be completely replaced', 'Mono audio because the image uses one channel', 'Downloading because the object responds to movement'],
      answer: 0,
      explanation: 'MR anchors digital content within an understood physical environment; AR is a broader overlay and VR replaces the view more fully.'
    },
    {
      category: 'Accessibility',
      question: 'A narrated demonstration contains important silent on-screen actions. Which package gives the broadest access to the information?',
      options: ['Synchronized captions, a structured transcript, audio description of key actions, and readable controls', 'Higher volume and decorative motion without text alternatives', 'One large stream with captions disabled', 'Background music and color-only instructions'],
      answer: 0,
      explanation: 'Different alternatives provide spoken, audible, and visual information through multiple accessible modes.'
    },
    {
      category: 'Ethics and AI',
      question: 'A project proposes using an AI clone of a real teacher\'s voice in a convincing video. What is the most responsible response?',
      options: ['Obtain informed consent, verify rights and accuracy, disclose synthetic use, and prevent misleading impersonation', 'Publish it without permission if the topic is educational', 'Hide the AI use because realistic media is automatically authentic', 'Copy any music and footage because a deepfake has no copyright concerns'],
      answer: 0,
      explanation: 'Voice cloning and synthetic video require consent, rights checks, transparent context, accuracy, and protection against deception.'
    }
  ],
  summary: {
    intro: 'Computers turn sound and motion into numerical streams, then use sampling, compression, packaging, delivery, rendering, and responsible design to make those streams useful.',
    points: [
      'Frequency relates to pitch and amplitude to loudness; sampling converts an analog sound signal into binary values.',
      'Sample rate controls measurements per second, while bit depth controls the precision of each audio sample.',
      'Mono, stereo, surround, and spatial audio serve different listening needs; WAV, MP3, AAC, FLAC, OGG, and Opus make different compatibility and compression tradeoffs.',
      'Resolution, aspect ratio, frame rate, color, and bitrate describe different properties of digital video.',
      'Keyframes, interframe compression, and motion prediction reduce repeated video information.',
      'Codecs such as H.264, H.265, VP9, AV1, AAC, and Opus encode streams; MP4, MKV, WebM, and MOV containers package them.',
      'Streaming delivers segments through a buffer, and adaptive bitrate responds to bandwidth and latency changes.',
      'Animation may use frame-by-frame work, tweening, motion graphics, algorithms, or simulations.',
      '3D rendering calculates frames from models, polygons, textures, materials, lights, and a camera.',
      'Games, websites, simulations, and educational applications are interactive multimedia; AR, VR, and MR relate digital content to the physical world in different ways.',
      'Captions, transcripts, audio descriptions, readable interfaces, and usable controls provide equivalent access.',
      'Consent, copyright, attribution, anti-piracy practice, truthful editing, and transparent responsible AI use protect people and trust.'
    ],
    review: [
      'Explain the complete path from an analog sound wave to encoded digital audio and back to playback.',
      'Compare the required WAV, MP3 64 kbps, MP3 320 kbps, and FLAC exports using evidence.',
      'Explain why resolution, frame rate, and bitrate must be evaluated separately.',
      'Build a codec-and-container example and explain how it affects compatibility.',
      'Trace a streamed segment through server, internet, buffer, decoder, and display.',
      'Compare frame-by-frame animation, tweening, 3D rendering, AR, VR, and MR.',
      'Audit a multimedia production for accessibility, consent, copyright, deepfake risk, and responsible AI use.'
    ],
    next: 'Continue to Security Part 1 for privacy, authentication, phishing defense, and safer handling of digital information.'
  }
};
