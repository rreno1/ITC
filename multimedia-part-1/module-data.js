buildCoursePart({
  id: 'multimedia-part-1',
  title: 'Multimedia Part 1',
  subtitle: 'Digital Images, Compression, and Metadata',
  description: 'Study how pixels create digital images, how formats balance quality and size, and how metadata affects editing, publishing, and privacy.',
  objectives: [
    'Explain how pixels, RGB values, and resolution form a digital image.',
    'Compare lossless and lossy compression for practical media tasks.',
    'Choose suitable image formats for photographs, diagrams, and transparency.',
    'Use metadata and source files responsibly when editing or sharing media.'
  ],
  lessonIndexes: [1, 2, 4],
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Computer_monitor.jpg?width=1280',
  imageAlt: 'A desktop monitor displaying a detailed digital photograph.',
  imageCredit: 'Photo: Zzubnik, public domain, via Wikimedia Commons.',
  taskIndexes: [0, 2],
  extraTasks: [{
    title: 'Prepare an image for two uses',
    scenario: 'A class photograph will be printed for a display and posted as a small image on the school portal.',
    prompt: 'Describe how the two exported copies should differ and explain why the original should remain unchanged.',
    response: 'Keep the full-quality original, export a high-resolution print copy, and make a smaller web copy with suitable compression and cleared private metadata.',
    rationale: 'The two destinations need different pixel dimensions and file sizes, while the untouched source protects future editing quality.'
  }],
  activityTitle: 'Image Publishing Decision Lab',
  activityIntro: 'Choose formats, quality settings, and privacy checks for realistic school image tasks. Support each choice with a technical reason.',
  reflection: [
    'Which image property mattered most in each decision: resolution, edge detail, transparency, size, or privacy?',
    'Why is keeping an original source file useful even after a final copy has been published?'
  ],
  appliedQuestions: [
    {
      category: 'Image Decisions',
      question: 'A teacher needs a small web graphic with a transparent background and sharp lettering. Which export is the best choice?',
      options: ['A lossless PNG sized for the page', 'A high-quality JPEG sized for the page', 'A full-resolution BMP from the editor', 'A strongly compressed JPEG from a screenshot'],
      answer: 0,
      explanation: 'PNG preserves sharp edges and transparency while still allowing an appropriate web size.'
    },
    {
      category: 'Resolution',
      question: 'A 300-pixel-wide logo must fill a 1,200-pixel banner. What is the most accurate advice?',
      options: ['Find a larger source or vector original before enlarging it', 'Increase the display size because the missing detail will return', 'Convert it to JPEG because compression creates extra pixels', 'Raise screen brightness because it improves source resolution'],
      answer: 0,
      explanation: 'Enlargement can estimate pixels but cannot recover detail that the small source never captured.'
    },
    {
      category: 'Compression',
      question: 'A portal photo loads slowly, but faces must remain clear. Which workflow gives the best balance?',
      options: ['Resize a copy to its display dimensions and test moderate JPEG quality', 'Keep the camera dimensions and rename the file with a shorter extension', 'Apply maximum compression repeatedly until the file becomes very small', 'Convert the photograph to a limited-color GIF without checking the result'],
      answer: 0,
      explanation: 'Right-sizing before moderate compression removes unnecessary data while protecting visible detail.'
    },
    {
      category: 'Formats',
      question: 'Which pair of choices best fits a diagram master and a public preview?',
      options: ['Keep a lossless master and export an optimized delivery copy', 'Keep only a compressed preview and enlarge it for later editing', 'Store both copies with maximum lossy compression for consistency', 'Use an audio container for the master and a bitmap for delivery'],
      answer: 0,
      explanation: 'A lossless master preserves editing information, while a separate delivery copy can be optimized for its destination.'
    },
    {
      category: 'Metadata',
      question: 'A student will publish a phone photo taken at home. What is the most complete preparation?',
      options: ['Check the image quality, remove unneeded location data, and review what appears in the scene', 'Change the file name, increase saturation, and assume the location is hidden', 'Crop one edge, keep every metadata field, and rely on private browsing', 'Add a watermark, preserve GPS coordinates, and upload the camera original'],
      answer: 0,
      explanation: 'Safe publishing considers both visible content and hidden metadata while preparing a suitable delivery copy.'
    },
    {
      category: 'Editing',
      question: 'A JPEG has been opened, edited, and re-exported many times. Why are new artifacts appearing?',
      options: ['Repeated lossy encoding can discard more information at each export', 'Each export adds a new RGB channel that changes the colors', 'The image resolution automatically doubles after every edit', 'Metadata gradually replaces the pixel data in the file'],
      answer: 0,
      explanation: 'Lossy generations can accumulate damage, which is why edits should begin from the best available source.'
    },
    {
      category: 'Quality',
      question: 'Two files show the same photograph, but one is much larger. What should be concluded first?',
      options: ['Compare dimensions, format, compression, and visible quality before deciding', 'Assume the larger file always contains a sharper original capture', 'Assume the smaller file has removed every important visual detail', 'Choose the larger file because file size alone proves accuracy'],
      answer: 0,
      explanation: 'File size depends on several settings and does not by itself prove useful visual quality.'
    },
    {
      category: 'Best Practice',
      question: 'Which workflow best supports future reuse of a school image?',
      options: ['Preserve the source, record meaningful details, and export copies for each purpose', 'Edit only the smallest published copy and overwrite it after every change', 'Remove all context, rename every copy image, and rely on folder order', 'Use one maximum-size file for print, mobile, email, and thumbnails'],
      answer: 0,
      explanation: 'A protected source plus documented, purpose-built exports supports quality, organization, and later reuse.'
    }
  ],
  sourceQuizIndexes: [3, 4, 5, 6, 7, 11, 12],
  summaryIntro: 'Digital images are numerical grids whose usefulness depends on capture quality, format, compression, metadata, and the needs of the final audience.',
  summaryPoints: [
    'Pixels store color values, while resolution limits the spatial detail an image can contain.',
    'Lossless formats protect exact information; lossy formats trade selected detail for smaller files.',
    'PNG suits sharp edges and transparency, while JPEG is often efficient for photographs.',
    'Metadata can support organization but may also expose private information.',
    'Keeping a strong source file prevents repeated exports from becoming the only available copy.'
  ],
  summaryReview: [
    'Explain why enlarging a small bitmap cannot restore all missing detail.',
    'Compare PNG and JPEG for a logo, a screenshot, and a photograph.',
    'Describe a safe workflow for preparing a phone photo for public sharing.'
  ],
  next: 'Continue to Multimedia Part 2 for digital audio, video, 3D graphics, and accessible media.'
});
