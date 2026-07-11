window.CC101_MODULE_DATA = {
  id: "multimedia",
  title: "Multimedia",
  subtitle: "Audio, Images, and Video",
  description: "Learn how computers turn sound, color, pictures, and motion into numbers, then store and deliver those numbers as useful media.",
  introVisual: "pixels",
  objectives: [
    "Explain how sampling turns an analog sound wave into digital audio.",
    "Describe how pixels, RGB values, and resolution build a digital image.",
    "Compare lossy and lossless compression for common media formats.",
    "Distinguish a video codec from a media container.",
    "Use metadata and file properties to make sensible quality decisions.",
    "Explain the basic ideas behind 3D graphics and virtual reality."
  ],
  lessons: [
    {
      title: "From Sound Waves to Digital Audio",
      category: "Audio",
      visual: "audio",
      lead: "A microphone measures a changing sound wave many times each second and stores each measurement as a number.",
      paragraphs: [
        "Sound in the air is analog: its pressure changes smoothly over time. A computer cannot store every possible point on that smooth wave, so an analog-to-digital converter takes regular samples. The sample rate tells us how many measurements are taken each second, while bit depth tells us how many levels are available for each measurement.",
        "A higher sample rate can represent faster changes in a sound, and a higher bit depth can represent small differences more accurately. Both choices increase the amount of data. Stereo audio stores separate channels for the left and right speakers. Digital audio quality therefore depends on several settings, not on one number alone."
      ],
      definitions: [
        { term: "Sample rate", definition: "The number of sound measurements stored each second, usually written in hertz or kilohertz." },
        { term: "Bit depth", definition: "The number of bits used for each sample, which controls how many amplitude levels can be represented." },
        { term: "Channel", definition: "One stream of audio measurements, such as the left or right side of a stereo recording." }
      ],
      examples: [
        "A voice recorder may use moderate quality settings because speech needs less detail than studio music.",
        "A music editor may keep an uncompressed WAV copy while using a smaller AAC copy for a phone.",
        "MIDI stores musical instructions such as notes and timing rather than a recording of the sound wave."
      ],
      analogy: "Sampling is like drawing dots along a curved road. More well-placed dots let you rebuild the road shape more accurately, but every dot needs storage.",
      misconception: "A larger audio file is not automatically better. Poor recording equipment, noise, or unnecessary settings can create a large file without adding useful detail.",
      review: [
        "How do sample rate and bit depth change the information stored in a recording?",
        "Why might a musician keep a WAV master but share an AAC copy?"
      ]
    },
    {
      title: "Pixels, RGB, and Image Resolution",
      category: "Images",
      visual: "pixels",
      lead: "A bitmap image is a grid of tiny picture elements called pixels, and each pixel stores numerical color values.",
      paragraphs: [
        "Most screens create colors by combining red, green, and blue light. An RGB pixel stores an amount for each channel. In a common 24-bit image, each channel has 256 possible values, so the three channels can represent millions of colors. Web designers often write the same values in hexadecimal, such as #55B8AA.",
        "Resolution usually means the pixel dimensions of an image, such as 1920 by 1080. More pixels can preserve more spatial detail, but only when the original capture contains that detail. Enlarging a small image asks software to estimate missing pixels. It can smooth edges, but it cannot reliably recreate information that was never captured."
      ],
      definitions: [
        { term: "Pixel", definition: "The smallest addressable color element in a bitmap image or digital display." },
        { term: "RGB", definition: "A color model that combines red, green, and blue light values to produce a visible color." },
        { term: "Resolution", definition: "The number of pixels across and down an image, which limits the detail it can hold." }
      ],
      examples: [
        "A 1920 x 1080 photo contains more than two million pixel positions.",
        "Pure red in an 8-bit RGB channel can be written as RGB(255, 0, 0).",
        "Cropping a photo removes pixels, while resizing may calculate new pixel values."
      ],
      analogy: "A bitmap is like a mosaic made of colored tiles. From far away you see a picture; close up you can see the separate pieces.",
      misconception: "Increasing the displayed dimensions does not create genuine captured detail. It only spreads or estimates the available pixels.",
      review: [
        "What three values does an RGB pixel need?",
        "Why can a high-resolution display not repair a low-resolution source image?"
      ]
    },
    {
      title: "Image Formats and Compression",
      category: "Compression",
      visual: "pixels",
      lead: "Compression reduces file size by describing data more efficiently or by removing details that people are less likely to notice.",
      paragraphs: [
        "Lossless compression preserves enough information to reproduce the original data exactly. PNG is useful for diagrams, text, screenshots, and transparency because sharp edges remain clear. GIF is limited to a small color palette but can store simple animation. BMP often stores image data with little or no compression and is usually much larger.",
        "Lossy compression permanently removes some information to achieve a smaller file. JPEG is effective for photographs because nearby colors often change gradually. Strong JPEG compression can create blocks or halos around edges. The best format depends on the content, required quality, transparency, editing needs, and delivery speed."
      ],
      definitions: [
        { term: "Lossless", definition: "Compression that allows the original data to be reconstructed exactly." },
        { term: "Lossy", definition: "Compression that removes selected data permanently to reduce file size further." },
        { term: "Artifact", definition: "An unwanted visible or audible change produced by compression or processing." }
      ],
      examples: [
        "Use PNG for a logo with transparent areas and sharp text.",
        "Use JPEG for a classroom photo when a smaller download matters.",
        "Repeatedly saving a JPEG at low quality can add more visible artifacts."
      ],
      analogy: "Lossless packing is like folding clothes into a suitcase; nothing is removed. Lossy packing is like leaving less useful items behind to make the bag lighter.",
      misconception: "PNG is not always better than JPEG. PNG may be much larger for a detailed photograph, while JPEG may be unsuitable for sharp text.",
      review: [
        "Which format would you choose for a transparent school logo, and why?",
        "What information is lost when lossy compression is applied?"
      ]
    },
    {
      title: "Video Frames, Codecs, and Containers",
      category: "Video",
      visual: "video",
      lead: "Digital video combines a timed sequence of images with audio and other information, then compresses the streams for storage or delivery.",
      paragraphs: [
        "A video displays frames quickly enough to create the impression of motion. Frame rate describes how many frames are shown each second. Storing every complete frame would require a great deal of data, so many codecs store an occasional keyframe and then describe changes between nearby frames.",
        "A codec is the method or software used to encode and decode a media stream. A container is the file structure that can hold video, audio, captions, and metadata together. MP4 is a common container, but files with the same .mp4 extension may use different codecs. A device must support the codec to play the stream correctly."
      ],
      definitions: [
        { term: "Frame rate", definition: "The number of still video frames displayed each second." },
        { term: "Codec", definition: "A method or program that compresses and decompresses audio or video data." },
        { term: "Container", definition: "A file structure that packages media streams, captions, timing, and metadata together." }
      ],
      examples: [
        "A lecture video can use a lower data rate than fast sports footage because much of the scene stays still.",
        "A keyframe stores a full image; later frames may record only the parts that changed.",
        "An MP4 file can include video, two audio tracks, subtitles, and title metadata."
      ],
      analogy: "A container is a lunch box, while codecs are the packing methods used for the different foods inside. The box name does not explain every item or method.",
      misconception: "The file extension alone does not guarantee playback. The player also needs to understand the audio and video codecs inside the container.",
      review: [
        "Why does interframe compression save space when a scene changes slowly?",
        "How is a codec different from a container?"
      ]
    },
    {
      title: "Quality, Metadata, and the Limits of Enhance",
      category: "Media Decisions",
      visual: "video",
      lead: "Media files include both content and descriptive data, and every processing step has limits set by the original recording.",
      paragraphs: [
        "Metadata describes a file rather than forming the main picture or sound. It can include dimensions, duration, capture date, camera settings, artist, location, captions, and copyright information. Metadata helps software sort, search, synchronize, and display media, but private fields may also reveal information a person did not intend to share.",
        "Editing tools can adjust brightness, reduce noise, sharpen edges, or estimate missing detail. These tools can improve usefulness, but they do not have perfect knowledge of the original scene. Extreme enhancement may invent patterns or strengthen noise. A responsible editor keeps the original, documents important changes, and does not present estimated detail as certain fact."
      ],
      definitions: [
        { term: "Metadata", definition: "Descriptive information stored with media, such as date, dimensions, location, or creator." },
        { term: "Bitrate", definition: "The amount of data used for each second of audio or video." },
        { term: "Transcoding", definition: "Converting media from one encoding, format, resolution, or bitrate to another." }
      ],
      examples: [
        "A photo may keep GPS coordinates even after it is copied to another device.",
        "Streaming services prepare several resolutions so the player can adapt to connection speed.",
        "Transcoding an already compressed file cannot restore details removed during the first compression."
      ],
      analogy: "Enhancement is like cleaning a foggy window. It may reveal what is already behind the glass, but it cannot reveal an object that was never in view.",
      misconception: "An AI-enhanced image is not a perfect recovery of reality. Some new detail may be a plausible estimate rather than captured evidence.",
      review: [
        "What privacy risk can image metadata create?",
        "Why should an editor preserve the original media file?"
      ]
    },
    {
      title: "3D Graphics, Virtual Reality, and Accessible Media",
      category: "Immersive Media",
      visual: "video",
      lead: "Three-dimensional media uses models, viewpoints, light, and repeated rendering to create scenes that appear to have depth.",
      paragraphs: [
        "A 3D model describes points, surfaces, materials, and textures in a coordinate space. A renderer calculates how the scene should look from a virtual camera. Lighting and shadows help the viewer understand shape and distance. Animation changes model properties over time, while a game engine updates the scene in response to input.",
        "Virtual reality shows a slightly different view to each eye and updates the scene as the head moves. A slow or inconsistent frame rate can make the experience uncomfortable. Good multimedia also includes accessibility: captions for speech, transcripts for audio, meaningful alternative text, sufficient contrast, and controls that do not depend on sound alone."
      ],
      definitions: [
        { term: "3D model", definition: "A numerical description of the shape and surface properties of an object in three-dimensional space." },
        { term: "Rendering", definition: "The process of calculating pixels from a scene, camera, materials, and lighting." },
        { term: "Virtual reality", definition: "An interactive simulated environment that updates its view based on a user's movement." }
      ],
      examples: [
        "A product designer can rotate a 3D model before building a physical prototype.",
        "A training simulation can let a learner practice a dangerous task without physical risk.",
        "Captions help people in noisy rooms as well as people who are deaf or hard of hearing."
      ],
      analogy: "A 3D scene is like a theater set. Models are the props, textures are the paint, lights shape the view, and the camera chooses what the audience sees.",
      misconception: "More visual effects do not automatically make communication better. Clear content, stable performance, and accessible alternatives are often more important.",
      review: [
        "What information does a renderer use to produce a 2D frame from a 3D scene?",
        "Name two ways to make multimedia usable for more people."
      ]
    }
  ],
  activity: {
    title: "Choose the Right Media Settings",
    intro: "Apply the lesson ideas to realistic school media tasks. Explain the tradeoff in each decision instead of naming a format only.",
    tasks: [
      {
        title: "School logo for a website",
        scenario: "A logo has flat colors, sharp text, and a transparent background.",
        prompt: "Choose PNG or JPEG and explain the strongest reason for your choice.",
        response: "Choose PNG because it preserves sharp edges without lossy artifacts and supports transparency.",
        rationale: "JPEG is efficient for photographs, but it does not preserve transparent areas and may blur high-contrast edges."
      },
      {
        title: "Lecture video on a slow connection",
        scenario: "Students need to watch a mostly static lecture using limited mobile data.",
        prompt: "Suggest two encoding or delivery choices that protect clarity while reducing data use.",
        response: "Prepare a lower-resolution, moderate-bitrate version and use adaptive streaming so the player can select a suitable stream.",
        rationale: "The image changes slowly, so efficient interframe compression and an appropriate resolution can save data without making speech or slides unreadable."
      },
      {
        title: "Photo shared publicly",
        scenario: "A student wants to post a phone photo taken at home.",
        prompt: "Identify one media-quality step and one privacy step before sharing.",
        response: "Export a reasonably sized copy for the web and remove unnecessary location metadata before posting.",
        rationale: "A smaller delivery copy loads faster, while removing GPS data reduces accidental disclosure of a private location."
      }
    ],
    reflection: [
      "Which quality detail mattered most in each task: sharp edges, motion, sound, transparency, or privacy?",
      "When is a smaller file more useful than the highest possible technical quality?"
    ]
  },
  quiz: [
    { category: "Audio", question: "A student records speech for an online lesson. Which change most directly stores more measurements of the sound wave each second?", options: ["Increase the sample rate", "Increase the channel balance", "Change the file extension", "Reduce the playback volume"], answer: 0, explanation: "Sample rate is the number of measurements captured each second." },
    { category: "Audio", question: "Two recordings use the same sample rate, but one uses a greater bit depth. What is the best description of the difference?", options: ["It can represent amplitude levels more precisely", "It can display more video frames each second", "It can store more separate image pixels", "It can change the speaker's physical size"], answer: 0, explanation: "Bit depth controls the number of possible values for each sample." },
    { category: "Audio", question: "Why is MIDI usually much smaller than a recorded performance in WAV format?", options: ["It stores musical events instead of the full waveform", "It removes every note outside the human voice range", "It saves only the left half of a stereo recording", "It stores each sound sample as a screen color"], answer: 0, explanation: "MIDI records instructions such as notes, timing, and instruments rather than sampled audio." },
    { category: "Images", question: "What information is normally stored for each pixel in a standard RGB bitmap?", options: ["Three numerical light-channel values", "One network address and port number", "A list of all nearby file names", "One instruction for a processor core"], answer: 0, explanation: "RGB pixels contain red, green, and blue channel values." },
    { category: "Images", question: "A small image is enlarged and looks soft. Why can the editor not reliably recover every missing detail?", options: ["The original pixels never captured that detail", "The monitor refuses to display estimated colors", "The file name prevents additional resolution", "The RGB system supports only black and white"], answer: 0, explanation: "Software can estimate new values, but it cannot know detail that was not captured." },
    { category: "Compression", question: "Which choice is most suitable for a diagram with sharp labels and a transparent background?", options: ["PNG with lossless compression", "JPEG with strong compression", "MP3 with a moderate bitrate", "MIDI with several channels"], answer: 0, explanation: "PNG preserves sharp edges and supports transparency." },
    { category: "Compression", question: "What is the defining tradeoff of lossy compression?", options: ["It removes selected data for a smaller file", "It adds exact copies for a larger backup", "It encrypts the file for private delivery", "It changes metadata without touching content"], answer: 0, explanation: "Lossy methods permanently discard selected information to reduce size." },
    { category: "Compression", question: "A photograph shows blocky edges after export. What is the most likely cause?", options: ["The lossy compression setting was too strong", "The lossless archive preserved too much detail", "The display added an extra audio channel", "The metadata used the wrong capture date"], answer: 0, explanation: "Strong lossy image compression commonly creates blocks, ringing, or halos." },
    { category: "Video", question: "Why can a video codec store changes between frames instead of every complete frame?", options: ["Nearby frames often share most visual information", "Every frame always uses a different color model", "Audio data already contains a copy of each frame", "Containers prohibit complete images after frame one"], answer: 0, explanation: "Interframe compression saves space by reusing information that stays the same." },
    { category: "Video", question: "Which statement best distinguishes an MP4 container from a video codec?", options: ["The container packages streams; the codec encodes a stream", "The container edits pixels; the codec names the file", "The container records sound; the codec stores only captions", "The container sets volume; the codec changes screen size"], answer: 0, explanation: "A container holds streams and metadata, while a codec defines how a stream is encoded." },
    { category: "Video", question: "A video plays on one device but not another even though both see an .mp4 file. What is the best first explanation?", options: ["The second device may not support the codec inside", "The second device may have too many image pixels", "The first device may have removed all metadata", "The file extension may contain an invalid password"], answer: 0, explanation: "The same container can hold streams encoded with different codecs." },
    { category: "Metadata", question: "What should a student check before publicly sharing a photo taken at home?", options: ["Whether location metadata should be removed", "Whether every pixel uses the same RGB value", "Whether the image contains a video keyframe", "Whether the audio sample rate is high enough"], answer: 0, explanation: "Photo metadata may reveal GPS or other private capture information." },
    { category: "Quality", question: "Why should an editor keep the original file before repeated transcoding?", options: ["Each lossy conversion can remove additional information", "Each conversion permanently increases the camera resolution", "Each conversion changes a bitmap into a 3D object", "Each conversion guarantees a smaller lossless master"], answer: 0, explanation: "Repeated lossy encoding can accumulate artifacts, so the original is the best source." },
    { category: "3D", question: "Which task is performed by a renderer in a 3D scene?", options: ["Calculate pixels from models, lights, and a camera", "Translate a password into a network address", "Measure an audio wave through a microphone", "Compress a document into a plain text file"], answer: 0, explanation: "Rendering turns scene data into the pixels of a 2D frame." },
    { category: "Accessibility", question: "Which design choice provides the strongest access to spoken information in a video?", options: ["Accurate captions synchronized with the speech", "A brighter border around the video player", "A larger file extension under the player", "A higher frame rate for every static scene"], answer: 0, explanation: "Accurate captions provide a text alternative to spoken audio." }
  ],
  summary: {
    intro: "Multimedia is numerical data shaped by capture settings, formats, compression, playback tools, and thoughtful design choices.",
    points: [
      "Digital audio uses samples, bit depth, channels, and an encoding format.",
      "Bitmap images use pixels whose RGB values describe displayed color.",
      "Lossless compression preserves original data; lossy compression trades detail for size.",
      "Video combines timed frames, audio, codecs, containers, and metadata.",
      "Enhancement can improve existing information but cannot guarantee missing truth.",
      "3D and accessible media depend on clear goals, stable performance, and inclusive alternatives."
    ],
    review: [
      "Explain one setting that changes audio quality and file size.",
      "Compare PNG and JPEG for two different types of image.",
      "Explain why a codec and container are both needed for video.",
      "Describe one privacy or accessibility decision for shared media."
    ],
    next: "Continue to Security to learn how privacy, authentication, encryption, and careful decisions protect people and information."
  }
};
