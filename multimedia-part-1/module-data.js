window.CC101_MODULE_DATA = {
  id: 'multimedia-part-1',
  title: 'Multimedia Part 1',
  subtitle: 'Digital Images, Graphics, and Compression',
  description: 'Learn how computers represent images using pixels, colors, and binary data. Explore raster and vector graphics, resolution, color models, image formats, compression, metadata, image editing, accessibility, copyright, and responsible use of AI-generated images.',
  objectives: [
    'Explain how analog visual information becomes digital image data made of pixels and binary values.',
    'Relate resolution, aspect ratio, color models, bit depth, and compression to image quality and file size.',
    'Compare raster and vector graphics and select an appropriate image format for a specific purpose.',
    'Apply a non-destructive editing and optimization workflow for web delivery.',
    'Publish images with appropriate privacy, accessibility, copyright, and authenticity safeguards.'
  ],
  lessons: [
    {
      category: 'Foundations',
      title: 'What Multimedia Is',
      lead: 'Multimedia communicates by combining two or more media forms, often with controls that let an audience choose what happens next.',
      paragraphs: [
        'Text, images, audio, video, and animation are common media elements. A slide with words and photographs is multimedia, and a lesson that also includes narration, animation, and a quiz combines even more forms. The elements should work together toward one communication goal instead of competing for attention.',
        'Interactive media responds to user input. Websites, games, simulations, museum kiosks, and educational applications may react to clicks, touch, speech, or movement. Interactivity can improve exploration and feedback, but it also requires usable controls and accessible alternatives.',
        'Good multimedia design begins with the audience and purpose. A designer selects only the media that clarifies the message, then considers device limits, network speed, accessibility, permission to use the material, and the time needed to create and maintain it.'
      ],
      definitions: [
        { term: 'Multimedia', definition: 'A communication product that combines two or more forms such as text, images, audio, video, or animation.' },
        { term: 'Media element', definition: 'One content component, such as a photograph, caption, sound effect, video clip, or animation.' },
        { term: 'Animation', definition: 'A sequence of changing images or object states that creates the appearance of movement.' },
        { term: 'Interactive media', definition: 'Media that changes or responds when a user supplies input.' },
        { term: 'User experience', definition: 'How understandable, usable, efficient, and satisfying a product is for its audience.' }
      ],
      examples: [
        'A digital textbook combines text, diagrams, narration, video demonstrations, and self-check questions.',
        'A school website uses photographs to establish context, text for details, and buttons for interaction.',
        'A game combines graphics, animation, sound, rules, and real-time player input.',
        'A poster made only of text is a visual document, while an interactive poster with audio and animation is a multimedia product.'
      ],
      analogy: 'A multimedia product is like a team presentation: each member has a different role, but every contribution should support the same message.',
      misconception: 'Adding more media does not automatically improve a product. Decorative video, sound, or motion can distract users, increase data use, and create access barriers when it has no clear purpose.',
      review: [
        'Name five media elements and explain what each can contribute to a lesson.',
        'How does interactive media differ from media that a person only watches or reads?',
        'Why should audience and purpose be decided before selecting media elements?'
      ],
      visual: 'web'
    },
    {
      category: 'Representation',
      title: 'Analog and Digital Representation',
      lead: 'A computer represents a continuous real-world scene by measuring it and storing discrete numerical values in binary.',
      paragraphs: [
        'Analog information varies continuously. Light entering a camera, ink density in a printed photograph, and a painted color can change through many values without fixed steps. Computers instead store digital information as separate values encoded with bits, where each bit is either 0 or 1.',
        'Digitization first samples the source at selected positions and then quantizes each measurement to one of the available numerical levels. In a digital photograph, a camera sensor samples light across a grid. Its electronics convert those measurements to numbers, and an image-processing system records color values for pixels.',
        'More samples and more available levels can represent finer spatial and color differences, but they also create more data. Digitization is therefore an approximation of the source, not a perfect copy. Capture quality, sensor limits, lighting, resolution, and bit depth all affect what information is preserved.'
      ],
      definitions: [
        { term: 'Analog data', definition: 'A continuously varying representation of information from the physical world.' },
        { term: 'Digital data', definition: 'Information represented by discrete numerical values that a computer can encode and process.' },
        { term: 'Bit', definition: 'A binary digit with a value of 0 or 1.' },
        { term: 'Sampling', definition: 'Measuring a source at selected positions or times.' },
        { term: 'Quantization', definition: 'Rounding a measurement to one value from a fixed set of available levels.' },
        { term: 'Digitization', definition: 'The process of converting analog information into digital data.' }
      ],
      examples: [
        'A scanner samples a printed photograph at many grid positions and stores numerical color values.',
        'A digital camera sensor measures incoming light and produces data that image software turns into pixels.',
        'A hand-painted gradient is continuous, but a digital copy represents it with a finite number of pixels and color values.',
        'Copying a digital file normally reproduces its bits exactly, while repeatedly photographing a printed copy introduces new capture errors.'
      ],
      analogy: 'Digitization is like describing a smooth hillside with a grid of measured heights: more measurements describe it more closely, but the grid is still a set of separate values.',
      misconception: 'Digital does not mean perfectly accurate. If sampling, lighting, focus, or available value levels are inadequate, information can be missing from the first capture.',
      review: [
        'What makes analog information continuous and digital information discrete?',
        'Describe sampling and quantization in the capture of a digital photograph.',
        'Why can two cameras produce different digital images of the same scene?'
      ],
      visual: 'pixels'
    },
    {
      category: 'Raster Images',
      title: 'Pixels, Coordinates, and Pixelation',
      lead: 'A raster image is a rectangular grid in which every pixel has a position and one or more stored color values.',
      paragraphs: [
        'A pixel, short for picture element, is the smallest addressable element in a raster image. Image software usually identifies a pixel with x and y coordinates. The origin is commonly the top-left corner, x increases toward the right, and y increases downward. In zero-based coordinates, the first pixel is (0, 0).',
        'At a normal viewing size, neighboring pixels blend into shapes, texture, and tone. Zooming in does not reveal unlimited detail; it enlarges the existing grid. An editor may show square pixels or interpolate between them to make the enlarged view smoother.',
        'Pixelation becomes visible when a raster image is enlarged beyond the detail supported by its original pixel dimensions. Interpolation can estimate new pixels, but it cannot recover accurate detail that was never captured. For later enlargement, begin with a larger raster source or a vector original when the artwork permits it.'
      ],
      definitions: [
        { term: 'Pixel', definition: 'The smallest addressable picture element in a raster image.' },
        { term: 'Raster image', definition: 'An image represented as a fixed grid of pixels.' },
        { term: 'Coordinate', definition: 'A pair of values, usually x and y, that locates a pixel within the grid.' },
        { term: 'Pixel dimensions', definition: 'The width and height of an image measured in pixels.' },
        { term: 'Pixelation', definition: 'The visible block-like appearance of pixels when a raster image is enlarged too far.' },
        { term: 'Interpolation', definition: 'A method that estimates pixel values when an image is resized or transformed.' }
      ],
      examples: [
        'In a 1200 by 800 image, x positions run across the width and y positions run down the height.',
        'A 100 by 100 icon enlarged to 1000 by 1000 must estimate many new pixels and may look soft or blocky.',
        'A screenshot is a raster capture of the exact pixels shown on a screen.',
        'A pixel-art game intentionally preserves visible square pixels as part of its visual style.'
      ],
      analogy: 'A raster image is like a mosaic made from colored tiles. From a distance the tiles form a picture, but enlarging the same mosaic only makes each tile easier to see.',
      misconception: 'Zoom percentage is not image resolution. A 400 percent view only displays the same stored pixels at a larger scale.',
      review: [
        'Where is coordinate (0, 0) commonly located in a raster image?',
        'Why does a small raster logo become pixelated when used on a large banner?',
        'What can interpolation do, and what information can it not restore?'
      ],
      visual: 'pixels'
    },
    {
      category: 'Image Geometry',
      title: 'Resolution, Aspect Ratio, PPI, and DPI',
      lead: 'Pixel dimensions describe how much raster data an image contains, while aspect ratio and output density describe how that data fits a shape or physical size.',
      paragraphs: [
        'Image resolution is often stated as pixel dimensions, such as 1920 by 1080. Multiplying width by height gives the total pixel count. More pixels can preserve more spatial detail when the capture itself is sharp, but a high pixel count cannot repair motion blur, poor focus, noise, or damaged compression.',
        'Aspect ratio is the proportional relationship between width and height. A 1920 by 1080 image simplifies to 16:9. Resizing both dimensions by the same factor preserves the ratio. Forcing it into a different ratio stretches the subject, while cropping removes part of the image to fit the new frame.',
        'PPI means pixels per inch and describes how densely image pixels are displayed or printed at a chosen physical size. DPI means dots per inch and describes the output dots a printer can place. People sometimes use the terms loosely, but pixels in an image and ink or toner dots from a printer are not the same thing.'
      ],
      definitions: [
        { term: 'Resolution', definition: 'The amount of spatial image data, commonly expressed as width by height in pixels.' },
        { term: 'Aspect ratio', definition: 'The proportional relationship between image width and height, such as 4:3 or 16:9.' },
        { term: 'PPI', definition: 'Pixels per inch, a measure of pixel density at a selected physical display or print size.' },
        { term: 'DPI', definition: 'Dots per inch, a measure associated with the dots produced by a printer.' },
        { term: 'Resampling', definition: 'Changing the number of pixels in an image by removing or estimating pixel values.' },
        { term: 'Cropping', definition: 'Removing outer parts of an image to change its framing or aspect ratio.' }
      ],
      examples: [
        'A 1920 by 1080 frame and a 1280 by 720 frame both use a 16:9 aspect ratio.',
        'Printing 3000 pixels across at 300 PPI produces a width of 10 inches.',
        'A printer may use several ink dots to reproduce the color of one image pixel.',
        'A web page displaying an image at 800 pixels wide does not benefit from downloading a 6000-pixel-wide copy unless another use requires it.'
      ],
      analogy: 'Pixel dimensions are the number of tiles available, aspect ratio is the shape of the wall, and PPI is how tightly the tiles are packed into each inch.',
      misconception: 'Changing only a PPI metadata value does not create new detail. The actual pixel dimensions and chosen physical size determine pixel density.',
      review: [
        'How do pixel dimensions differ from aspect ratio?',
        'What are two valid ways to place a 4:3 image into a 16:9 frame, and what is the tradeoff of each?',
        'Explain why PPI and printer DPI should not be treated as identical measurements.'
      ],
      visual: 'pixels'
    },
    {
      category: 'Color',
      title: 'RGB, RGBA, Hex, CMYK, and Grayscale',
      lead: 'Color models assign numerical values to color components, and the right model depends on whether the image is intended for light-emitting screens or printed ink.',
      paragraphs: [
        'Screens commonly use the additive RGB model. Red, green, and blue light are combined, and in a standard 8-bit-per-channel image each channel often ranges from 0 to 255. RGB (255, 255, 255) is white, RGB (0, 0, 0) is black, and RGB (255, 0, 0) is bright red.',
        'Web designers often write the same RGB values in hexadecimal. The color #FF8000 means red FF (255), green 80 (128), and blue 00 (0). RGBA adds an alpha value that controls opacity. An alpha of zero is fully transparent and a maximum alpha value is fully opaque, depending on the notation used.',
        'Commercial printing commonly uses the subtractive CMYK model: cyan, magenta, yellow, and black inks absorb light reflected from paper. Grayscale stores brightness without separate color channels. Converting RGB artwork to CMYK or grayscale can change its appearance, so important output should be proofed in the intended color workflow.'
      ],
      definitions: [
        { term: 'RGB', definition: 'An additive color model that combines red, green, and blue light for screens.' },
        { term: 'RGBA', definition: 'RGB color plus an alpha component that controls opacity or transparency.' },
        { term: 'Hexadecimal color', definition: 'A base-16 notation, commonly #RRGGBB, used to write RGB values compactly.' },
        { term: 'Alpha channel', definition: 'Stored transparency or opacity information associated with image pixels.' },
        { term: 'CMYK', definition: 'A subtractive print model using cyan, magenta, yellow, and black inks.' },
        { term: 'Grayscale', definition: 'An image representation based on shades from black through gray to white without full color channels.' }
      ],
      examples: [
        '#000000 represents black, #FFFFFF represents white, and #00FF00 represents full green in six-digit RGB hex notation.',
        'A transparent PNG icon can store RGB color plus an alpha value for each partially transparent edge pixel.',
        'A website mockup is normally designed in RGB because users view it on screens.',
        'A print shop may request CMYK artwork and a proof because some bright RGB screen colors cannot be reproduced by its inks.',
        'A grayscale document scan can use less uncompressed data than the same scan stored with three full color channels.'
      ],
      analogy: 'RGB is like mixing colored beams of light on a stage, while CMYK is like layering inks that remove parts of the light reflected from paper.',
      misconception: 'Alpha is not a fourth visible color. It controls how strongly a pixel covers what is behind it.',
      review: [
        'Why is RGB suited to screens and CMYK commonly used for print?',
        'Translate the structure of #RRGGBB into its three color components.',
        'What does an alpha channel add to RGB image data?'
      ],
      visual: 'pixels'
    },
    {
      category: 'Data Size',
      title: 'Color Depth and Uncompressed File Size',
      lead: 'Bit depth controls how many values can be represented, and uncompressed raster size grows with width, height, and bits stored for each pixel.',
      paragraphs: [
        'Color depth, or bit depth, is the number of bits used to represent a pixel or its channels. With n bits, 2 to the power n distinct bit patterns are available. A 1-bit image has 2 values, an 8-bit indexed or grayscale image can represent 256 values, and 24-bit RGB commonly uses 8 bits for each of three channels, allowing about 16.7 million RGB combinations.',
        'For a simple uncompressed image with a fixed number of bits per pixel, file size in bits equals width times height times bit depth. Header information, color profiles, metadata, row padding, alpha channels, layers, and compression can make an actual saved file differ from this basic pixel-data estimate.',
        'For 1920 by 1080 pixels at 24 bits per pixel: 1920 x 1080 x 24 = 49,766,400 bits. Dividing by 8 gives 6,220,800 bytes. Dividing by 1,048,576 gives approximately 5.93 MiB before compression, which is about 6.22 MB using decimal units. Adding an 8-bit alpha channel would raise the simple estimate from 24 to 32 bits per pixel.'
      ],
      definitions: [
        { term: 'Bit depth', definition: 'The number of bits used to represent a pixel value or color-channel value.' },
        { term: 'Color depth', definition: 'The number of bits or available combinations used to represent pixel colors.' },
        { term: 'Binary combination', definition: 'One possible pattern of zeros and ones; n bits provide 2 to the power n patterns.' },
        { term: 'Uncompressed size', definition: 'The data required before a compression method reduces repeated or less important information.' },
        { term: 'Byte', definition: 'A group of 8 bits.' },
        { term: 'MiB', definition: 'A mebibyte, equal to 1,048,576 bytes.' }
      ],
      examples: [
        'A 1-bit black-and-white mask can represent two values for each pixel.',
        'An 8-bit grayscale image can represent 256 brightness levels.',
        'A 24-bit RGB image commonly uses 8 bits each for red, green, and blue.',
        'A 32-bit RGBA image commonly adds 8 bits of alpha to 24 bits of RGB.',
        'Doubling both width and height creates four times as many pixels and approximately four times the uncompressed pixel data at the same bit depth.'
      ],
      analogy: 'Bit depth is like the number of labels available for paint shades: more labels allow finer distinctions, but recording a label for every tile needs more data.',
      misconception: 'A higher bit depth does not fix poor lighting or focus. It provides more possible numerical levels only for information the device actually captures.',
      review: [
        'How many distinct patterns can 8 bits represent?',
        'Show each conversion that turns 49,766,400 bits into approximately 5.93 MiB.',
        'Why might an actual saved image be larger or smaller than the basic uncompressed estimate?'
      ],
      visual: 'pixels'
    },
    {
      category: 'Graphics',
      title: 'Raster and Vector Graphics',
      lead: 'Raster graphics store colored pixels, while vector graphics store mathematical descriptions of shapes, paths, fills, and strokes.',
      paragraphs: [
        'Raster images are well suited to photographs and other scenes with complex, irregular color and texture. Their detail is tied to fixed pixel dimensions, so very large output needs a sufficiently large source. Pixel-level painting and photo retouching are natural raster operations.',
        'Vector graphics describe objects such as lines, curves, circles, text outlines, and filled regions. A renderer calculates the pixels needed at the current output size, so a vector logo can scale from a small icon to a large sign while keeping smooth edges. Vector artwork is especially useful for logos, diagrams, symbols, and typography.',
        'A useful demonstration uses one photograph and one vector logo. Enlarge both greatly: the raster photograph reveals pixels and becomes soft or blocky, while the vector logo is recalculated and remains sharp. Vector is not automatically best for everything; accurately describing every texture in a photograph as vector shapes would be inefficient and difficult to edit.'
      ],
      definitions: [
        { term: 'Raster graphic', definition: 'A graphic stored as a fixed grid of pixel values.' },
        { term: 'Vector graphic', definition: 'A graphic stored as mathematical shapes, paths, fills, and strokes.' },
        { term: 'Path', definition: 'A mathematically defined line or curve used to construct vector artwork.' },
        { term: 'Scalable', definition: 'Able to change output size without the fixed-pixel enlargement problem of a raster image.' },
        { term: 'Rasterization', definition: 'The process of converting vector descriptions into pixels for display or export.' }
      ],
      examples: [
        'Use a raster image for a detailed school event photograph.',
        'Use a vector master for a school logo that must appear on an ID card and a building banner.',
        'A vector diagram can keep labels and lines crisp at several print sizes.',
        'Exporting a vector logo to PNG rasterizes it at chosen pixel dimensions for delivery.',
        'Placing a photograph inside an SVG file does not turn the embedded photograph into scalable vector shapes.'
      ],
      analogy: 'A raster graphic is a finished mosaic of fixed tiles. A vector graphic is a set of construction instructions that can rebuild the design at a new size.',
      misconception: 'Saving a pixelated photograph with an .svg extension does not create real vector detail. The content must consist of vector objects or be carefully traced.',
      review: [
        'Why is a photograph usually raster while a logo is often best kept as vector?',
        'Predict what students should observe when enlarging the same-size raster photo and vector logo.',
        'What happens when a vector graphic is rasterized for a PNG export?'
      ],
      visual: 'pixels'
    },
    {
      category: 'Formats',
      title: 'Image File Formats and Their Uses',
      lead: 'An image format defines how pixel or vector information, compression, transparency, animation, color, and metadata are organized in a file.',
      paragraphs: [
        'JPEG uses lossy compression and is widely supported for continuous-tone photographs, but it does not provide normal alpha transparency and can damage sharp text or line art. PNG uses lossless compression and supports alpha transparency, making it strong for screenshots, interface graphics, and transparent raster icons. GIF supports simple animation and one-bit transparency but is limited to a palette of up to 256 colors per frame.',
        'WebP can store lossy or lossless images, transparency, and animation, often with efficient web delivery. SVG stores vector shapes and is ideal for scalable logos, icons, and diagrams when the content is truly vector. Because SVG can include scripts or external references, untrusted files should be handled with appropriate security controls.',
        'TIFF is a flexible raster format often used for scanning, publishing, archiving, and high-quality editing workflows; its options and large files are not always ideal for the web. BMP commonly stores simple raster data with little or no compression and is usually inefficient for delivery. HEIF, often encountered as HEIC on phones, can store high-quality images efficiently but should be checked for compatibility before public use. Format choice should follow the content, required features, editing stage, and audience devices.'
      ],
      definitions: [
        { term: 'JPEG', definition: 'A widely supported lossy raster format suited to photographs when transparency is not required.' },
        { term: 'PNG', definition: 'A lossless raster format with alpha transparency, useful for screenshots and sharp-edged web graphics.' },
        { term: 'GIF', definition: 'A palette-based raster format that supports short simple animation and limited transparency.' },
        { term: 'WebP', definition: 'A web-focused raster format that can use lossy or lossless compression, transparency, and animation.' },
        { term: 'SVG', definition: 'A scalable vector format for shapes, paths, text, icons, logos, and diagrams.' },
        { term: 'TIFF', definition: 'A flexible high-quality raster format used in scanning, publishing, archiving, and editing workflows.' },
        { term: 'BMP', definition: 'A basic raster format that is often uncompressed or lightly compressed and can create large files.' },
        { term: 'HEIF', definition: 'A high-efficiency image container format used by some cameras and phones, with compatibility that varies by software.' }
      ],
      examples: [
        'Deliver a full-color photograph as a tested JPEG or lossy WebP at an appropriate size and quality.',
        'Export a screenshot as PNG when crisp text and exact interface colors are important.',
        'Keep a school logo as SVG when a trusted vector workflow and broad scaling are required.',
        'Use GIF or animated WebP for a short simple animation after checking audience support and accessibility needs.',
        'Keep an archival scan in TIFF when the workflow requires high-quality raster data and storage size is acceptable.',
        'Convert a phone HEIF copy to a compatible delivery format when the target system cannot display it.',
        'Avoid BMP for ordinary web delivery because its file size is usually not justified.'
      ],
      analogy: 'Choosing a format is like choosing a container for a trip: the best choice depends on what it must hold, how safely it must preserve it, and where it must be opened.',
      misconception: 'Changing only a file extension does not convert image data. A real export or conversion must encode the content in the destination format.',
      review: [
        'Compare JPEG, PNG, and WebP for a photograph, a screenshot, and an image needing transparency.',
        'Which formats in this lesson can support animation, and what limitations should be checked?',
        'Why might TIFF or HEIF be useful as a source but unsuitable for a particular public website?'
      ],
      visual: 'web'
    },
    {
      category: 'Compression',
      title: 'Lossless, Lossy, Artifacts, and Quality',
      lead: 'Compression reduces storage or transmission data, but the method and settings determine whether reconstructed pixels remain exact or lose information.',
      paragraphs: [
        'Lossless compression represents data more efficiently and reconstructs the encoded pixel values exactly. It is valuable for screenshots, diagrams, sharp text, repeated editing stages, and images whose exact values matter. Lossy compression discards selected information to achieve smaller files and can work very well for photographs viewed at an intended size.',
        'Too much lossy compression can produce artifacts. Blocking creates visible square regions, blurring removes fine detail, banding turns smooth gradients into noticeable steps, and ringing or halos can appear around strong edges. Repeatedly opening and re-exporting a lossy file may accumulate damage because each new generation can discard more information.',
        'Image quality is not controlled by compression alone. Pixel resolution, bit depth, lighting, focus, sensor noise, editing, scaling, and display conditions also matter. A useful comparison exports the same source as high-quality JPEG, low-quality JPEG, PNG, and WebP, then inspects file size, fine detail, edges, gradients, artifacts, and transparency at the actual delivery size.'
      ],
      definitions: [
        { term: 'Compression', definition: 'A method of representing data with fewer bits for storage or transmission.' },
        { term: 'Lossless compression', definition: 'Compression that reconstructs the encoded data exactly.' },
        { term: 'Lossy compression', definition: 'Compression that permanently discards selected information to reduce file size.' },
        { term: 'Artifact', definition: 'An unwanted visible change introduced by processing or compression.' },
        { term: 'Blocking', definition: 'A compression artifact in which square regions become visible.' },
        { term: 'Banding', definition: 'Visible steps in what should appear to be a smooth color or brightness gradient.' },
        { term: 'Generation loss', definition: 'Additional quality loss caused by repeated lossy encoding.' }
      ],
      examples: [
        'A PNG screenshot preserves interface text and flat colors without lossy blocks around letters.',
        'A moderate JPEG setting can make a large photograph much smaller with little visible change at its intended display size.',
        'A very low-quality JPEG may show blocks in shadows, blur hair and grass, and create halos around edges.',
        'A low bit-depth gradient can show banding even when compression is not the only cause.',
        'A lossless WebP can preserve exact reconstructed pixels while providing different size results from PNG depending on the image.'
      ],
      analogy: 'Lossless compression is like packing clothes tightly and unpacking every item unchanged. Lossy compression is like leaving behind items judged less important so the bag becomes much smaller.',
      misconception: 'Lossless does not mean small, and lossy does not always mean visibly bad. Results depend on the image, settings, and viewing conditions.',
      review: [
        'When is exact lossless reconstruction more important than the smallest possible file?',
        'Identify four common artifacts and describe what each looks like.',
        'Why should compression comparisons use the same source and intended display size?'
      ],
      visual: 'pixels'
    },
    {
      category: 'Production',
      title: 'Image Editing and Optimization Workflow',
      lead: 'A reliable workflow protects a strong source, makes reversible edits where possible, and exports purpose-built delivery copies that are tested in context.',
      paragraphs: [
        'Start by preserving the original and working on a copy or in an editor that supports non-destructive layers and adjustment settings. Crop to improve composition or meet an aspect ratio, rotate to correct orientation, and use measured color correction for exposure, white balance, contrast, or saturation. Filters should serve a communication goal instead of hiding a weak source.',
        'Resize or resample a copy to the pixel dimensions actually needed. Apply appropriate sharpening only after considering final size, then choose a format based on the content and required features. Select a compression or quality setting by testing the smallest file that still meets the visual requirement.',
        'Export once from the best available source, use a meaningful file name, and compare the result with the source at normal size and at critical details. Test transparency, color, orientation, load time, and compatibility in the real browser or application. Keep the editable master separate from optimized delivery files so future changes do not begin from a damaged copy.'
      ],
      definitions: [
        { term: 'Non-destructive editing', definition: 'Editing that preserves the source information or keeps changes reversible.' },
        { term: 'Layer', definition: 'A separate editable plane of image content or adjustment within a composition.' },
        { term: 'Color correction', definition: 'Adjusting tone or color to improve accuracy, consistency, or readability.' },
        { term: 'Filter', definition: 'A processing effect applied to pixels, ideally for a clear visual purpose.' },
        { term: 'Optimization', definition: 'Preparing an image to meet quality, file-size, compatibility, and accessibility requirements for a destination.' },
        { term: 'Delivery copy', definition: 'An exported version prepared for a specific audience, device, or publishing channel.' }
      ],
      examples: [
        'Crop a class photograph to 16:9, then resize a copy to the portal display width before exporting it.',
        'Keep text, shapes, and corrections on separate layers until a final delivery format requires flattening.',
        'Compare JPEG and WebP quality at the intended display size instead of selecting a setting by file size alone.',
        'Use PNG or SVG for a logo when sharp edges or transparency matter, then test it against both light and dark backgrounds.',
        'Keep the camera original and editable master even after publishing an optimized web copy.'
      ],
      analogy: 'An editable master is like a recipe and its original ingredients; a delivery copy is one prepared serving made for a particular guest.',
      misconception: 'Increasing saturation, sharpness, or resolution does not automatically optimize an image. Optimization means meeting the destination requirements with intentional tradeoffs.',
      review: [
        'Put crop, correction, resize, format selection, export, and testing into a sensible workflow.',
        'Why should an editable master remain separate from a delivery copy?',
        'Which checks should be performed after export in the real destination?'
      ],
      visual: 'algorithm'
    },
    {
      category: 'Privacy',
      title: 'Metadata and Privacy',
      lead: 'An image can reveal information through both its visible pixels and hidden or attached metadata.',
      paragraphs: [
        'Metadata is data about data. Image metadata may include capture date and time, camera or phone model, exposure settings, orientation, editing software, author, copyright information, keywords, and a thumbnail. EXIF is a common metadata standard used by digital cameras and phones.',
        'Location-enabled devices may store GPS coordinates that identify a home, school, workplace, or travel route. A visible reflection, street sign, ID card, face, computer screen, or document can also reveal private information even after metadata is removed. Safe sharing requires checking both metadata and the scene itself.',
        'Work on a copy, inspect the metadata with a trusted tool, retain useful rights or attribution fields when appropriate, and remove private fields that the destination does not need. Then verify the exported copy rather than assuming a social platform will strip everything. Metadata removal reduces risk but does not prove anonymity or authenticity.'
      ],
      definitions: [
        { term: 'Metadata', definition: 'Information that describes a file, its creation, its properties, or its management.' },
        { term: 'EXIF', definition: 'A metadata standard commonly used to store camera, capture, and sometimes location information in image files.' },
        { term: 'Geotag', definition: 'Stored geographic location data associated with media.' },
        { term: 'GPS coordinates', definition: 'Numerical latitude and longitude values that can identify a location.' },
        { term: 'Data minimization', definition: 'Keeping or sharing only the data needed for a defined purpose.' },
        { term: 'Privacy risk', definition: 'The possibility that information exposes a person, place, routine, or other sensitive context.' }
      ],
      examples: [
        'A phone photograph taken at home may contain exact GPS coordinates in its EXIF data.',
        'A camera model and capture time can reveal more context than a student intended to publish.',
        'Removing EXIF does not hide a readable address visible on a parcel in the photograph.',
        'Copyright and creator fields can be useful metadata, so removal should be selective and purpose-driven.',
        'After exporting a public copy, reopen its properties or inspect it with a metadata tool to verify the result.'
      ],
      analogy: 'Metadata is like writing notes on the back of a photograph. The front may look safe while the notes reveal when, where, and how it was created.',
      misconception: 'Renaming a file or taking metadata out does not remove private details visible in the pixels, and it does not guarantee that every hidden field is gone.',
      review: [
        'List four kinds of metadata that an image file may contain.',
        'Why must a privacy check examine both metadata and visible content?',
        'Describe a safe verification step after removing unnecessary metadata.'
      ],
      visual: 'privacy'
    },
    {
      category: 'Responsible Publishing',
      title: 'Accessibility, Copyright, and AI Images',
      lead: 'Responsible image publishing makes meaning available to more people, respects creators and subjects, and clearly handles uncertainty or manipulation.',
      paragraphs: [
        'Alternative text should briefly communicate the purpose and essential information of an image in its context. Decorative images should use the platform method for marking them decorative. Important text should remain real selectable text when possible instead of appearing only inside an image, and diagrams need sufficient contrast, readable labels, and a longer explanation when a short alt description cannot carry all the information.',
        'Copyright normally gives a creator rights over copying and adaptation. A Creative Commons license offers stated permissions under specific conditions, such as attribution, noncommercial use, share-alike licensing, or no derivatives. Good attribution identifies the creator, work, source, and license. Fair use or similar legal exceptions depend on context and jurisdiction; educational purpose alone is not automatic permission, so users should apply institutional guidance and use licensed, public-domain, or original media when possible.',
        'Editing can clarify an image, but manipulated images can also mislead. Generative AI can create convincing people, places, and events that never existed, while deepfakes imitate a real person or event. Before sharing, check source and provenance, look for independent evidence, disclose material AI generation or alteration, obtain consent when people are affected, and consider copyright, privacy, and safety.',
        'AI systems can reproduce or amplify bias from training data and design choices. A responsible creator checks whether groups are stereotyped, excluded, or represented unfairly, avoids presenting synthetic evidence as fact, and corrects or withdraws misleading output. Accessibility and attribution are still required when an image is AI-generated.'
      ],
      definitions: [
        { term: 'Alternative text', definition: 'A concise text alternative that communicates an image purpose or essential information in context.' },
        { term: 'Contrast', definition: 'The visual difference between elements, such as text and its background, that affects readability.' },
        { term: 'Copyright', definition: 'Legal rights that generally let creators control specified uses of their original work.' },
        { term: 'Creative Commons', definition: 'A family of licenses that lets creators grant reuse permissions under stated conditions.' },
        { term: 'Attribution', definition: 'Credit that identifies the creator, work, source, and applicable license or permission.' },
        { term: 'Fair use', definition: 'A context-dependent legal doctrine in some jurisdictions, not a blanket rule that all educational copying is allowed.' },
        { term: 'Manipulated image', definition: 'An image materially changed, combined, or generated in a way that can alter its meaning or evidence.' },
        { term: 'Deepfake', definition: 'Synthetic or altered media that convincingly imitates a real person, action, voice, or event.' },
        { term: 'Bias', definition: 'A systematic tendency that can produce unfair, incomplete, or stereotyped representation.' },
        { term: 'Provenance', definition: 'Information about where media came from and how it was created or changed.' }
      ],
      examples: [
        'Alt text for an informative chart states the main comparison or trend, while nearby text provides full data details.',
        'A school page uses live HTML text instead of placing all instructions inside a poster image.',
        'A Creative Commons image is reused only after its exact license conditions are checked and a complete attribution is supplied.',
        'A teacher seeking a fair-use exception considers purpose, nature, amount, and market effect under applicable guidance rather than assuming education settles the question.',
        'A materially altered news image is labeled so viewers are not led to believe it is an untouched record.',
        'An AI-generated portrait is checked for stereotypes, disclosed as synthetic, and never presented as evidence of a real event.',
        'A suspected deepfake is not reshared until its source, context, and independent verification have been examined.'
      ],
      analogy: 'Publishing an image is like introducing a witness: the audience needs access to the message, an honest account of the source, and a clear warning when the evidence has been altered or generated.',
      misconception: 'AI-generated does not mean copyright-free, unbiased, authentic, or accessible. The publisher remains responsible for rights, disclosure, context, fairness, and alternatives.',
      review: [
        'Write useful alt text for an informative image and explain when an empty decorative alternative is appropriate.',
        'What should a Creative Commons attribution include, and why is educational use not automatic permission?',
        'List checks to perform before sharing a manipulated or AI-generated image as factual information.',
        'How can bias appear in generative images, and what should a responsible creator do about it?'
      ],
      visual: 'logic'
    }
  ],
  activity: {
    title: 'Image Optimization and Responsible Publishing Lab',
    intro: 'Use one supplied large image to produce a web-ready copy and an evidence-based recommendation report. Record dimensions and file sizes before and after each export, keep the original unchanged, and explain every decision.',
    tasks: [
      {
        title: 'Prepare the source and crop deliberately',
        scenario: 'The supplied image is larger than the school website needs and its current shape does not match the required 16:9 feature area.',
        prompt: 'Duplicate the source, record its format and pixel dimensions, then crop the working copy to 16:9 without stretching important subjects. Explain what was removed and why.',
        response: 'Keep the supplied original unchanged, create a clearly named working copy, note its starting dimensions and format, and use a 16:9 crop that preserves the main subject. Record the crop choice and confirm that circles and faces are not distorted.',
        rationale: 'A protected source supports future reuse, while cropping changes framing without the distortion caused by forcing unequal width and height scaling.'
      },
      {
        title: 'Resize and export three delivery versions',
        scenario: 'The feature area displays the image at 1280 by 720 pixels, and users may visit through limited mobile data.',
        prompt: 'Resize the cropped working copy to 1280 by 720. Export it as JPEG, PNG, and WebP using sensible settings. For every file, record dimensions, file size, compression type, transparency support, and the export setting used.',
        response: 'Resample a copy to exactly 1280 by 720, then export one tested JPEG, one PNG, and one WebP. A complete record lists the same output dimensions, each file size, whether encoding is lossy or lossless, whether alpha transparency is available, and any quality setting so the comparison can be repeated.',
        rationale: 'Holding pixel dimensions and source content constant makes format and compression differences easier to compare fairly.'
      },
      {
        title: 'Compare quality and identify artifacts',
        scenario: 'The three exports differ greatly in size, but the smallest file is not automatically the best result.',
        prompt: 'Inspect all exports at normal website size and at 100 percent around edges, textures, faces, text, and gradients. Identify any blurring, blocking, banding, halos, or lost detail, then choose the best web copy and justify the tradeoff.',
        response: 'Use a side-by-side table or annotated screenshots to compare file size and visible quality under the same viewing conditions. Select the smallest compatible result that preserves the required detail, and cite exact observations instead of claiming that one format is always best.',
        rationale: 'Optimization is an evidence-based balance among quality, size, compatibility, and required features rather than a contest for the fewest bytes.'
      },
      {
        title: 'Remove unnecessary metadata and verify privacy',
        scenario: 'The source came from a location-enabled phone and may reveal where and when it was captured.',
        prompt: 'Inspect a copy for EXIF date, device, software, thumbnail, and GPS fields. Remove unnecessary private metadata from the chosen public export, inspect the visible scene for private details, and verify the exported file again.',
        response: 'Document which fields existed, retain only information required for rights or workflow, remove unneeded GPS and device details from the public copy, review visible signs, screens, faces, and reflections, then reopen the final export in a metadata inspector to confirm the result.',
        rationale: 'A safe workflow checks hidden data and visible content, then verifies the actual delivery file rather than assuming an export or platform removed private information.'
      },
      {
        title: 'Write contextual alternative text',
        scenario: 'The optimized image will support an article, and a screen-reader user needs the information it contributes.',
        prompt: 'Write concise alternative text for the image in the article context. If it contains essential text or complex data, provide that information as real text nearby. Check readable contrast and explain whether the image is informative or decorative.',
        response: 'A strong alternative describes the image purpose and essential content without phrases such as image of or details already stated nearby. Complex information appears in adjacent text, labels meet contrast needs, and a purely decorative image is marked decorative with the platform-supported empty alternative.',
        rationale: 'Useful alternatives depend on purpose and context; they provide equivalent meaning without turning every visible detail into a long inventory.'
      },
      {
        title: 'Submit the format recommendation report',
        scenario: 'The school needs a reusable guide for five future assets: a photograph, school logo, transparent icon, screenshot, and short animated graphic.',
        prompt: 'Create a report that recommends a primary format and a reasonable fallback or source strategy for each asset. Address quality, compression, scaling, transparency, animation, compatibility, file size, attribution, and any limits. Support the report with evidence from your exports.',
        response: 'A strong report commonly recommends tested JPEG or lossy WebP for a photograph; SVG as the scalable logo master with PNG fallback when needed; SVG for a true vector icon or transparent PNG/WebP for a raster icon; PNG for a crisp screenshot unless tested WebP meets the requirement; and animated WebP or GIF for a short simple animation after compatibility and accessibility checks. It states that actual content and audience support can change the choice, cites measured file sizes and observations, credits sources, and keeps editable masters.',
        rationale: 'Format recommendations should connect technical features to a real asset and audience, while evidence and stated limitations prevent extension-based rules from replacing judgment.'
      }
    ],
    reflection: [
      'Which change reduced file size most, and what visible or functional cost did it introduce?',
      'How did keeping the content and pixel dimensions constant improve the JPEG, PNG, and WebP comparison?',
      'Which privacy risk came from metadata, and which risk could only be found by looking at the scene?',
      'How did the image purpose change the alternative text and format recommendation?',
      'What would you preserve in an editable master for a future print or redesign request?'
    ]
  },
  quiz: [
    {
      category: 'Multimedia Fundamentals',
      question: 'A school lesson contains a paragraph, a labeled photograph, narration, a short animation, and buttons that reveal feedback. Which description best explains why it is interactive multimedia?',
      options: [
        'It combines several media forms and changes in response to learner input.',
        'It is multimedia only because it includes more than one photograph.',
        'It is interactive only if every media element is downloaded first.',
        'It becomes multimedia only when the text is removed.'
      ],
      answer: 0,
      explanation: 'The lesson combines text, image, audio, and animation, while the feedback buttons make the experience respond to user input.'
    },
    {
      category: 'Analog and Digital',
      question: 'A student scans a painted color gradient and notices that the file contains a grid of numbered color values. What happened during digitization?',
      options: [
        'The scanner preserved an infinitely continuous signal inside every bit.',
        'The scanner sampled positions and quantized the measurements into discrete binary-encoded values.',
        'The scanner converted the painting into mathematical vector paths without measurement.',
        'The scanner removed all approximation because digital files are always exact copies of reality.'
      ],
      answer: 1,
      explanation: 'Digitization samples the analog source and assigns each measurement to an available discrete value that can be encoded in binary.'
    },
    {
      category: 'Pixels',
      question: 'A 120 by 120 raster badge is enlarged to fill a 1200 by 1200 display and its edges look blocky. What is the best explanation and response?',
      options: [
        'The display changed its aspect ratio, so adding metadata will restore the edges.',
        'The file has too much alpha, so converting it to grayscale will create detail.',
        'Existing pixels were enlarged or estimated; obtain a larger raster source or a vector original.',
        'The coordinates became negative; rename the file before enlarging it again.'
      ],
      answer: 2,
      explanation: 'A small raster contains limited spatial detail. Resampling can estimate new pixels but cannot reconstruct an accurate high-resolution source.'
    },
    {
      category: 'Resolution and Aspect Ratio',
      question: 'A 4:3 class photo must fit a 16:9 banner without making faces look wider. Which plan is technically sound?',
      options: [
        'Force the width to 16 units while leaving the height unchanged.',
        'Change only the PPI metadata until the subjects have the right shape.',
        'Convert to CMYK because the color model controls proportions.',
        'Crop the frame to 16:9 or add space around it, then resize proportionally.'
      ],
      answer: 3,
      explanation: 'Cropping or adding space can change the frame shape, while proportional resizing keeps subjects from being distorted.'
    },
    {
      category: 'Color Models',
      question: 'A designer is preparing a bright logo for a website and for a commercial print run. Which workflow best handles the color models?',
      options: [
        'Design the screen version in RGB, prepare the print version for the required CMYK workflow, and proof possible color changes.',
        'Use CMYK for the website because browsers produce colors with ink dots.',
        'Use RGB for printing because all printers reproduce every screen color exactly.',
        'Convert both versions to 1-bit color because output purpose never affects color.'
      ],
      answer: 0,
      explanation: 'Screens use additive RGB light, while print workflows commonly use CMYK inks and may reproduce a smaller or different range of colors.'
    },
    {
      category: 'Color and Transparency',
      question: 'A web icon needs orange pixels that remain partly transparent over different backgrounds. Which representation provides both a compact RGB color and opacity information?',
      options: [
        'A CMYK value with DPI but no pixel channel',
        'A grayscale value stored in a JPEG quality setting',
        'An RGB hex color such as #FF8000 together with an alpha value in RGBA-capable content',
        'A BMP file name followed by the word transparent'
      ],
      answer: 2,
      explanation: 'Hex can express the RGB components, while an alpha component supplies opacity. The chosen file format must also preserve alpha transparency.'
    },
    {
      category: 'Bit Depth and Size',
      question: 'A student estimates the uncompressed pixel data for a 1920 by 1080 image at 24 bits per pixel. Which result and reasoning are correct?',
      options: [
        '1920 + 1080 + 24 gives 3024 bytes, or about 3 KiB.',
        '1920 x 1080 x 24 gives 49,766,400 bits; divide by 8 and by 1,048,576 to get about 5.93 MiB.',
        '1920 x 1080 gives 2,073,600 MiB because each pixel is one mebibyte.',
        'The answer cannot be estimated unless the image is first saved as JPEG.'
      ],
      answer: 1,
      explanation: 'The basic uncompressed formula is width x height x bit depth in bits. Converting bits to bytes and bytes to MiB gives approximately 5.93 MiB.'
    },
    {
      category: 'Raster and Vector',
      question: 'The same school logo must appear on a 24-pixel app button and a three-meter banner. Which source strategy best preserves sharp edges?',
      options: [
        'Keep a vector logo master and rasterize purpose-built copies at the required pixel sizes.',
        'Keep only a 24-pixel JPEG and enlarge it for every later output.',
        'Photograph the small button whenever a larger copy is needed.',
        'Store a screenshot inside SVG and assume its pixels become mathematical paths.'
      ],
      answer: 0,
      explanation: 'A true vector master can be recalculated at many sizes, while appropriately sized raster exports support specific delivery contexts.'
    },
    {
      category: 'Image Formats',
      question: 'A news page needs a natural-looking event photograph with no transparency, fast loading, and broad compatibility. What is the best starting comparison?',
      options: [
        'Uncompressed BMP versus TIFF, both at camera size',
        'SVG versus GIF because photographs are collections of simple paths',
        'A tested, right-sized JPEG versus a tested lossy WebP, with a compatibility plan',
        'One-bit PNG versus an animated GIF even though the scene is still'
      ],
      answer: 2,
      explanation: 'JPEG and lossy WebP are practical candidates for continuous-tone photographs; the final choice should follow measured size, quality, and audience support.'
    },
    {
      category: 'Format Features',
      question: 'A team must publish a scalable school logo, a transparent raster icon, and a short simple animation. Which set of choices is most defensible?',
      options: [
        'BMP for the logo, JPEG for the transparent icon, and TIFF for browser animation',
        'JPEG for all three because a single format always reduces maintenance',
        'HEIF for the logo, grayscale BMP for the icon, and SVG only for the photograph',
        'SVG for the true vector logo, PNG or lossless WebP for the raster icon, and GIF or animated WebP after support testing'
      ],
      answer: 3,
      explanation: 'SVG scales vector art, PNG and WebP can preserve raster alpha, and GIF or animated WebP can deliver short animation subject to compatibility and accessibility needs.'
    },
    {
      category: 'Compression',
      question: 'Small text in a software screenshot develops halos and blocks after a low-quality export. What should the student try first?',
      options: [
        'Apply the same lossy compression repeatedly until the blocks average out.',
        'Return to the best source and test a lossless PNG or lossless WebP at the required dimensions.',
        'Increase printer DPI metadata because it removes screen compression artifacts.',
        'Convert the screenshot to a low-color animated GIF even though it is still.'
      ],
      answer: 1,
      explanation: 'Sharp text and interface edges often benefit from lossless encoding. Returning to the best source avoids adding another generation of lossy damage.'
    },
    {
      category: 'Editing and Quality',
      question: 'A slightly dark but focused 6000-pixel-wide photo is needed at 1200 pixels wide on a portal. Which workflow best protects quality and future reuse?',
      options: [
        'Overwrite the original, enlarge it, apply every filter, and repeatedly save low-quality JPEGs.',
        'Rename the camera file and upload it unchanged because dimensions do not affect transfer size.',
        'Keep the original, correct a working copy non-destructively, crop, resize to purpose, export once, and test the result.',
        'Reduce bit depth before checking the lighting because color depth is the only quality factor.'
      ],
      answer: 2,
      explanation: 'A protected source, reversible corrections, purpose-sized export, and real-context testing form a reliable optimization workflow.'
    },
    {
      category: 'Metadata and Privacy',
      question: 'A student plans to publish a phone photo taken at home. The photo looks harmless, but the device had location services enabled. What is the most complete safety check?',
      options: [
        'Change the file name and assume all location data disappears.',
        'Remove every metadata field without checking whether rights information is needed.',
        'Trust the social platform to remove private information and upload the camera original.',
        'Inspect EXIF and visible details, remove unneeded GPS and device fields from a copy, then verify the exported file.'
      ],
      answer: 3,
      explanation: 'Privacy review covers hidden metadata and visible content, uses a delivery copy, and verifies what the final file actually contains.'
    },
    {
      category: 'Accessibility and Rights',
      question: 'A class website uses a Creative Commons chart that contains important labels and trends. Which publishing plan is strongest?',
      options: [
        'Check the exact license, give complete attribution, provide meaningful alt text and nearby data or explanation, and ensure readable contrast.',
        'Put the chart online without credit because every educational use is automatically fair use.',
        'Replace the article text with one image so screen-reader users receive the same information automatically.',
        'Credit only the search engine and ignore the creator, source, and license conditions.'
      ],
      answer: 0,
      explanation: 'Responsible reuse follows the actual license and supplies attribution, while accessible publishing provides equivalent information and readable presentation.'
    },
    {
      category: 'AI Images and Ethics',
      question: 'An AI-generated image appears to show a public official committing a crime, but its source is unknown and several groups are portrayed with stereotypes. What should a student do before any use?',
      options: [
        'Share it immediately because realistic pixels prove that the event happened.',
        'Crop out the watermark so the source uncertainty is less visible.',
        'Verify provenance and independent evidence, consider bias and harm, obtain needed permission or consent, and clearly disclose synthetic or material alteration.',
        'Convert it to TIFF because an archival format guarantees authenticity and fair use.'
      ],
      answer: 2,
      explanation: 'Synthetic media requires source verification, contextual evidence, bias and harm review, rights and consent checks, and honest disclosure. A file format cannot prove authenticity.'
    }
  ],
  summary: {
    intro: 'Digital images are numerical representations whose usefulness depends on capture, pixels, geometry, color, bit depth, format, compression, editing choices, publishing context, and responsible treatment of people and sources.',
    points: [
      'Multimedia combines purposeful text, images, audio, video, animation, or interaction for an audience and communication goal.',
      'Digitization samples analog information, quantizes measurements, and stores discrete values as binary data.',
      'Raster images store fixed pixel grids addressed by coordinates; enlarging them too far reveals pixelation and cannot recover missing detail.',
      'Resolution describes pixel dimensions, aspect ratio describes proportional shape, PPI describes pixel density at a physical size, and printer DPI describes output dots.',
      'RGB is the additive screen model, RGBA adds opacity, hexadecimal writes RGB compactly, CMYK supports many print workflows, and grayscale stores brightness without full color.',
      'With n bits, 2 to the power n patterns are available. Basic uncompressed raster size is width x height x bit depth in bits.',
      'A 1920 x 1080 image at 24 bits per pixel contains 49,766,400 bits, or about 5.93 MiB of uncompressed pixel data.',
      'Raster graphics suit photographs and pixel editing; vector graphics suit scalable logos, icons, diagrams, paths, and shapes.',
      'JPEG, PNG, GIF, WebP, SVG, TIFF, BMP, and HEIF have different combinations of compression, transparency, animation, scalability, quality, and compatibility.',
      'Lossless compression reconstructs encoded data exactly. Lossy compression can save more space but may cause blur, blocking, banding, halos, lost detail, and generation loss.',
      'Image quality also depends on resolution, bit depth, lighting, focus, noise, editing, scaling, and viewing conditions.',
      'A strong workflow protects the source, uses reversible edits and layers, crops and corrects deliberately, resizes for purpose, exports once from the best source, and tests the delivery copy.',
      'Metadata such as EXIF date, device, and GPS data can create privacy risks, but visible content must also be inspected before sharing.',
      'Accessible images use contextual alternative text, readable contrast, nearby explanations for complex content, and real text instead of essential text-only images.',
      'Responsible publishing follows copyright or license terms, supplies Creative Commons attribution, treats fair use as context-dependent, discloses manipulation or AI generation, verifies suspected deepfakes, and checks bias, consent, provenance, and harm.'
    ],
    review: [
      'Explain the path from analog light in a scene to binary pixel values in a digital image.',
      'Predict what happens when a small raster photo and a vector logo are enlarged, and explain why.',
      'Calculate the uncompressed size in bits, bytes, and MiB for a 1920 x 1080 image at 24 bits per pixel.',
      'Compare JPEG, PNG, GIF, WebP, SVG, TIFF, BMP, and HEIF by content type, compression, transparency, animation, scalability, and compatibility.',
      'Design a source-to-delivery workflow that includes crop, resize, export comparison, artifact inspection, metadata removal, privacy verification, and alternative text.',
      'Recommend formats for a photograph, school logo, transparent icon, screenshot, and short animated graphic, and state when a fallback is needed.',
      'Describe how copyright, Creative Commons conditions, attribution, fair use, manipulation disclosure, deepfake verification, and AI bias affect a publishing decision.'
    ],
    next: 'Continue to Multimedia Part 2 for digital audio, video, streaming, animation, 3D graphics, immersive media, and accessible production.'
  }
};
