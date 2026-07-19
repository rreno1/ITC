window.CC101_MODULE_DATA = {
  id: 'internet-part-1',
  courseTitle: 'Introduction to Computing',
  title: 'Internet Part 1',
  subtitle: 'Foundations of Computer Networks',
  description: 'Learn how devices connect and communicate: from basic signal transmission and network classifications (PAN, LAN, WLAN, CAN, MAN, WAN) to network topologies, media, client-server architectures, and local network devices.',
  objectives: [
    'Explain the basic communication model and how data is transmitted as physical signals.',
    'Define a computer network and identify the core reasons why networks are created.',
    'Distinguish between local networks and the global Internet.',
    'Classify networks by coverage area (PAN, LAN, WLAN, CAN, MAN, WAN, Internet).',
    'Categorize networks by medium, architecture (P2P vs Client-Server), access type, and topology.',
    'Compare wired (Ethernet, Fiber) and wireless (Wi-Fi, Bluetooth, Cellular, Satellite) connection media.',
    'Identify network topologies (Star, Bus, Ring, Mesh, Tree) and explain why Star is most common.',
    'Describe the functions of network devices: NIC, Hub, Switch, Access Point, Router, Modem/ONT, Server, Firewall, and ISP.',
    'Trace local data communication and explain the local identification role of MAC addresses.',
    'Organize communication responsibilities into a simplified 5-layer network model.'
  ],
  lessons: [
    {
      title: 'Begin With Communication',
      category: 'Communication Model',
      image: {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&auto=format&fit=crop&v=1001',
        alt: 'Two people interacting with digital devices and screens',
        credit: 'Photo via Unsplash'
      },
      visual: 'network',
      lead: 'Before understanding complex networks, we must look at how two individual devices exchange information using a basic communication model.',
      paragraphs: [
        'Every communication system—whether human speech or computer data transfer—follows a basic six-part model: 1) Sender (creates the information), 2) Receiver (gets the information), 3) Message (the content sent), 4) Medium (the physical path carrying the data), 5) Rules (the agreed protocol for communication), and 6) Feedback (confirmation that data arrived).',
        'Computers communicate by converting internal binary patterns into physical signals that travel across a transmission medium. Devices must use compatible connection methods and follow identical rules; physical proximity alone is not enough for devices to communicate.'
      ],
      definitions: [
        { term: 'Sender', definition: 'The device or application that originates the information being sent.', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&v=1016' },
        { term: 'Receiver', definition: 'The target device or application intended to receive the information.', image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&auto=format&fit=crop&v=1017' },
        { term: 'Transmission Medium', definition: 'The physical or wireless path (copper, fiber, radio waves) over which data travels.', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&v=1018' },
        { term: 'Protocol Rules', definition: 'Agreed standards governing how data is formatted, sent, and acknowledged.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&v=1019' }
      ],
      examples: [
        'A phone (sender) sending a photo (message) via Wi-Fi radio waves (medium) to a printer (receiver).',
        'A browser requesting a file from a web server and receiving a "File received" confirmation.'
      ],
      analogy: 'Computer communication is like mailing a letter: you need a sender address, recipient address, paper message, mail truck carrier, and language rules both parties read.',
      misconception: 'Devices cannot communicate merely because they are placed near each other. They must share a compatible medium and protocol.',
      review: [
        'Identify the six components of the basic communication model for a Bluetooth earphone playing music.',
        'Why does binary data need to be converted into physical signals before traveling to another device?'
      ]
    },
    {
      title: 'Data Becomes Signals',
      category: 'Physical Layer',
      image: {
        src: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?w=1280&auto=format&fit=crop&v=1002',
        alt: 'Glowing optical fiber cables transmitting light signals',
        credit: 'Photo via Unsplash'
      },
      visual: 'infrastructure',
      lead: 'The 1s and 0s stored in computer memory travel through the real world as physical signals through copper cables, optical fibers, or radio waves.',
      paragraphs: [
        'Computers internally store and process data in binary (0s and 1s). To move data from one computer to another, a Network Interface Card (NIC) converts those binary patterns into physical signals suitable for the medium.',
        'Transmission media use different physical phenomena to carry data: copper cables use electrical voltage pulses; fiber-optic cables use light pulses generated by lasers or LEDs; wireless systems (Wi-Fi, Bluetooth, cellular, satellite) use modulated electromagnetic radio waves.'
      ],
      definitions: [
        { term: 'Physical Signal', definition: 'A detectable physical quantity (electrical voltage, light pulse, or radio wave) representing binary data.', image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&v=1020' },
        { term: 'Copper Transmission', definition: 'Carrying binary data using varying electrical voltages over copper wires.', image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&auto=format&fit=crop&v=1021' },
        { term: 'Fiber-Optic Transmission', definition: 'Carrying binary data as rapid pulses of light down ultra-pure glass strands.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&v=1022' },
        { term: 'Wireless Modulation', definition: 'Varying the frequency, amplitude, or phase of radio waves to encode binary 1s and 0s.', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&v=1023' }
      ],
      examples: [
        'Ethernet cables changing electrical voltage levels millions of times per second to represent data.',
        'Subsea fiber-optic cables pulsing light to carry terabytes of international traffic.',
        'A Wi-Fi router emitting 2.4 GHz or 5 GHz radio waves received by a smartphone antenna.'
      ],
      analogy: 'Binary signals are like Morse code: flashing a flashlight on and off (fiber light pulses) or tapping electrical wires (copper voltages) to send letters across a distance.',
      misconception: 'The digital file itself is not flying through the air. The file is represented as changing physical signals that the receiving device reconstructs into binary data.',
      review: [
        'Which physical signal is used by Ethernet cables, fiber-optic lines, and Wi-Fi antennas?',
        'How does a receiving device convert incoming radio waves back into usable computer files?'
      ]
    },
    {
      title: 'What Is a Computer Network?',
      category: 'Network Concepts',
      image: {
        src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1280&auto=format&fit=crop&v=1003',
        alt: 'Ethernet cables connected to network equipment in a rack',
        credit: 'Photo via Unsplash'
      },
      visual: 'network',
      lead: 'A computer network is simply two or more connected devices that can communicate and share data, services, and hardware resources.',
      paragraphs: [
        'A computer network consists of nodes (devices like laptops, phones, printers, servers, or routers) connected by communication links. Networks allow organizations to share expensive hardware (like printers), centralize files, host online applications, and communicate instantaneously.',
        'Devices on a network can act as hosts (sending or receiving data) or network infrastructure (forwarding data). Building a local network provides shared access to local resources even when the network has no connection to the Internet.'
      ],
      definitions: [
        { term: 'Computer Network', definition: 'A group of connected devices capable of communicating and sharing resources.', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&v=1024' },
        { term: 'Node', definition: 'Any active electronic device connected to a network that can send, receive, or forward data.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&v=1025' },
        { term: 'Host', definition: 'An end-user device (like a laptop or server) assigned a network address that originates or consumes data.', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&v=1026' },
        { term: 'Resource', definition: 'Hardware, files, applications, or data shared across a network.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&v=1027' }
      ],
      examples: [
        'Ten computers in a school laboratory connected to a single shared laser printer.',
        'A office desktop saving financial records directly to a local file server.',
        'Smartphones, smart TVs, and security cameras connected together on a home network.'
      ],
      analogy: 'A computer network is like a city transportation grid connecting houses (hosts), post offices (routers), and factories (servers) so goods (data) can be shared.',
      misconception: 'A network does not require Internet access to function. Devices can communicate and share files locally without an Internet connection.',
      review: [
        'Define the terms node, host, link, and resource in the context of a school computer lab.',
        'List four major reasons why businesses and schools build computer networks.'
      ]
    },
    {
      title: 'Network Versus Internet',
      category: 'Network Concepts',
      image: {
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&auto=format&fit=crop&v=1004',
        alt: 'Global network visualization showing interconnected nodes across Earth',
        credit: 'Photo via Unsplash'
      },
      visual: 'network',
      lead: 'A local network is an independent, self-contained system of devices, whereas the Internet is a global network of interconnected networks.',
      paragraphs: [
        'It is crucial to separate a local network from the global Internet. A school network connects local computers, printers, and servers inside campus buildings. This local network (LAN) functions fully for internal tasks regardless of whether the outside Internet connection is working.',
        'The Internet is commonly described as a "network of networks." It connects millions of independently operated local, regional, and national networks using a single shared set of communication standards.'
      ],
      definitions: [
        { term: 'Local Network (LAN)', definition: 'A private network operating within a limited area under single organizational control.', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&v=1028' },
        { term: 'The Internet', definition: 'The global system of interconnected independent networks communicating via TCP/IP.', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop&v=1029' },
        { term: 'Network Independence', definition: 'The ability of a local network to share local files and devices without outside connectivity.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&v=1030' }
      ],
      examples: [
        'A school computer lab printing certificates to a local printer when the ISP cable outside is cut.',
        'A hospital internal network maintaining patient monitor feeds during a regional Internet outage.'
      ],
      analogy: 'A local network is like an internal intercom system inside a house; the Internet is the global telephone network connecting houses around the world.',
      misconception: 'If the Internet goes down, your local Wi-Fi router still connects your phone to your local printer; only outside web services become unavailable.',
      review: [
        'Explain why a school Wi-Fi network can still function for local printing even if its ISP connection fails.',
        'Summarize the key difference between a single local network and the Internet.'
      ]
    },
    {
      title: 'Types of Networks by Coverage Area',
      category: 'Network Coverage',
      image: {
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1280&auto=format&fit=crop&v=1005',
        alt: 'Digital map illustration showing local to global coverage paths',
        credit: 'Photo via Unsplash'
      },
      visual: 'network',
      lead: 'Networks are categorized by their geographic span, ranging from personal bluetooth links to city-wide and global connections.',
      paragraphs: [
        'Networks are classified by geographic scale: Personal Area Network (PAN) covers a few meters around a person; Local Area Network (LAN) covers a room or building; Wireless LAN (WLAN) provides Wi-Fi coverage; Campus Area Network (CAN) connects multiple campus buildings; Metropolitan Area Network (MAN) spans a city; Wide Area Network (WAN) connects distant regions; and the Internet links networks globally.',
        'Understanding coverage helps engineers select appropriate transmission media, cabling, power levels, and routing hardware for each operating environment.'
      ],
      definitions: [
        { term: 'PAN', definition: 'Personal Area Network (around 1 person, e.g. Bluetooth mouse or earbuds).', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&v=1031' },
        { term: 'LAN & WLAN', definition: 'Local Area Network and Wireless LAN (a room, home, lab, or single building).', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&v=1032' },
        { term: 'CAN', definition: 'Campus Area Network (connecting multiple nearby organizational buildings).', image: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=800&auto=format&fit=crop&v=1033' },
        { term: 'MAN & WAN', definition: 'Metropolitan Area Network (city-wide) and Wide Area Network (provinces, countries, global).', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&v=1034' }
      ],
      examples: [
        'PAN: Smartwatch syncing health data to a phone over Bluetooth.',
        'LAN/WLAN: Student laptops connected to school Wi-Fi in a classroom.',
        'CAN: College registrar office linked to the campus library building across the quad.',
        'WAN: Bank branches in Manila, Cebu, and Davao sharing centralized ledger records.'
      ],
      analogy: 'Coverage types are like travel distances: PAN is walking around your desk, LAN is walking inside your house, CAN is walking around campus, MAN is city transit, and WAN is cross-country flight.',
      misconception: 'School Wi-Fi is not the Internet itself; it is a WLAN that provides wireless entry to the school LAN, which then routes outbound traffic to the Internet.',
      review: [
        'A university links its library, administrative center, and engineering labs. What network type is this?',
        'Is your smartphone\'s Bluetooth connection to a wireless speaker a LAN or a PAN? Explain.'
      ]
    },
    {
      title: 'Networks Can Be Classified in Different Ways',
      category: 'Classifications',
      image: {
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&auto=format&fit=crop&v=1006',
        alt: 'Structured server rack cabling in a data center',
        credit: 'Photo via Unsplash'
      },
      visual: 'network',
      lead: 'Networks are described by different attributes: coverage, medium, architecture, access permissions, topology, and ownership.',
      paragraphs: [
        'A single network is described using multiple classification dimensions simultaneously. For example, a school lab network can be a LAN (coverage), a hybrid wired/wireless system (medium), a client-server environment (architecture), a private intranet (access), and a star topology (arrangement).',
        'Mixing these terms leads to confusion. Classifications answer distinct questions: Coverage explains geographic size; Medium explains physical signal path; Architecture defines device roles; Access defines who may join; and Topology defines structural layout.'
      ],
      definitions: [
        { term: 'Coverage', definition: 'How far the physical or wireless network spans geographically (PAN, LAN, WAN).', image: 'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?w=800&auto=format&fit=crop&v=1035' },
        { term: 'Medium', definition: 'Whether signals travel through physical cables (wired), radio waves (wireless), or both (hybrid).', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&v=1036' },
        { term: 'Architecture', definition: 'How control and resource sharing are structured (Peer-to-Peer vs Client-Server).', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&v=1037' },
        { term: 'Access & Topology', definition: 'Who is allowed to enter (Intranet/Extranet/Public) and how nodes are wired (Star/Mesh).', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&v=1038' }
      ],
      examples: [
        'A hospital Wi-Fi system classified as a WLAN (coverage), wireless (medium), client-server (architecture), intranet (access), and star (topology).'
      ],
      analogy: 'Classifying a network is like describing a car: color (medium), passenger capacity (coverage), fuel type (architecture), and driver license requirements (access).',
      misconception: 'Do not treat LAN, Wi-Fi, Client-Server, and Star as competing alternatives; they describe completely different dimensions of the same network.',
      review: [
        'List five different classification criteria used to describe a school computer lab network.',
        'Why is it incorrect to say a network must choose between being a LAN or being a wireless network?'
      ]
    },
    {
      title: 'Wired and Wireless Networks',
      category: 'Transmission Media',
      image: {
        src: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1280&auto=format&fit=crop&v=1007',
        alt: 'Modern Wi-Fi router with wireless antennas',
        credit: 'Photo via Unsplash'
      },
      visual: 'infrastructure',
      lead: 'Networks transmit data through physical cables or free-space radio waves, each offering distinct tradeoffs in speed, mobility, and reliability.',
      paragraphs: [
        'Wired networks use physical cables (like copper twisted-pair Ethernet or glass fiber-optics). Wired links offer high speeds, low latency, consistent performance, and immunity to radio interference, but require fixed cabling infrastructure.',
        'Wireless networks use radio signals (Wi-Fi, Bluetooth, cellular 4G/5G, satellite). Wireless provides mobility and convenient setup, but signals can be weakened by walls, weather, electrical noise, and distance.'
      ],
      definitions: [
        { term: 'Ethernet Cable', definition: 'Shielded or unshielded twisted-pair copper cabling using modular RJ45 connectors.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&v=1039' },
        { term: 'Wi-Fi (IEEE 802.11)', definition: 'Wireless local networking technology operating over 2.4 GHz, 5 GHz, or 6 GHz radio bands.', image: 'https://images.unsplash.com/photo-1526374870839-e155464bb9b2?w=800&auto=format&fit=crop&v=1040' },
        { term: 'Interference', definition: 'Distortion of wireless radio signals caused by obstacles, distance, or competing electronic devices.', image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format&fit=crop&v=1041' }
      ],
      examples: [
        'Desktop computers in a bank using Ethernet cables for high reliability and security.',
        'Students taking notes on laptops using Wi-Fi while moving between lecture halls.'
      ],
      analogy: 'Wired links are like train tracks (fixed path, reliable, high capacity); wireless links are like helicopters (flexible destination, affected by weather and obstacles).',
      misconception: 'Wireless is not automatically slower or inferior, nor is wired always better. Modern Wi-Fi 6/7 can outperform old copper cables, but wired remains more predictable.',
      review: [
        'Compare wired Ethernet and Wi-Fi across speed, mobility, interference, and installation cost.',
        'Why might a gaming tournament or video production studio prefer wired Ethernet cables over Wi-Fi?'
      ]
    },
    {
      title: 'Network Architecture: Peer-to-Peer and Client-Server',
      category: 'Network Architecture',
      image: {
        src: 'https://images.unsplash.com/photo-1520869578617-557561d7b114?w=1280&auto=format&fit=crop&v=1008',
        alt: 'Centralized server room with blue LED status lights',
        credit: 'Photo via Unsplash'
      },
      visual: 'network',
      lead: 'Network architecture defines how control, communication, and resource management are divided among connected devices.',
      paragraphs: [
        'In a Peer-to-Peer (P2P) network, connected devices (peers) communicate and share resources directly with each other without relying on a central server. P2P is inexpensive and easy to set up for small groups, but becomes difficult to manage, backup, and secure as the network grows.',
        'In a Client-Server network, central computers (servers) manage resources, security, files, or applications, while user devices (clients) send requests to those servers. Client-server systems provide centralized security, data backups, and user management.'
      ],
      definitions: [
        { term: 'Peer-to-Peer (P2P)', definition: 'A decentralized network architecture where every node can act as both client and server.', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&v=1042' },
        { term: 'Client', definition: 'A user device or application (e.g. web browser) that requests services or files.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&v=1043' },
        { term: 'Server', definition: 'A high-capacity computer or service that listens for, processes, and fulfills client requests.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&v=1044' }
      ],
      examples: [
        'P2P: Two laptops transferring files directly using AirDrop or Bluetooth file sharing.',
        'Client-Server: A student logging into a school Learning Management System (LMS) hosted on a central server.'
      ],
      analogy: 'Peer-to-peer is like a study group where students share notes directly with each other; Client-server is like a teacher distributing master worksheets from a central desk.',
      misconception: 'Client and server describe roles in a communication exchange, not physical hardware size. A laptop can act as a server if it shares a folder to the network.',
      review: [
        'Contrast peer-to-peer and client-server architectures in terms of centralization, security, and scalability.',
        'Can a single computer act as a client in one application and a server in another? Give an example.'
      ]
    },
    {
      title: 'Network Access Types: Intranet, Extranet, and Internet',
      category: 'Network Access',
      image: {
        src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1280&auto=format&fit=crop&v=1009',
        alt: 'Secure computer screen showing authentication shield',
        credit: 'Photo via Unsplash'
      },
      visual: 'privacy',
      lead: 'Networks enforce access boundaries to control whether services are restricted to internal personnel, trusted partners, or the general public.',
      paragraphs: [
        'An Intranet is a private network restricted exclusively to authorized members of an organization (like staff and students). It uses standard web protocols (HTTP, HTML) but is shielded from public access.',
        'An Extranet is a controlled portion of an intranet extended securely to authorized outside partners, suppliers, or customers. The public Internet is open to anyone connected through an ISP.'
      ],
      definitions: [
        { term: 'Intranet', definition: 'A private network accessible only to an organization\'s internal staff or members.' },
        { term: 'Extranet', definition: 'A secure extension of an intranet providing restricted access to trusted external entities.', image: 'https://images.unsplash.com/photo-1500000000140?w=800&auto=format&fit=crop&v=1045' },
        { term: 'Public Internet', definition: 'The globally accessible network open to the public.', image: 'https://images.unsplash.com/photo-1500000000141?w=800&auto=format&fit=crop&v=1046' }
      ],
      examples: [
        'Intranet: School grading database accessible only from office desktops inside the school building.',
        'Extranet: Parent portal allowing parents to log in remotely to view student report cards.',
        'Public Internet: The school\'s public promotional website hosted for future applicants.'
      ],
      analogy: 'Intranet is the private employee breakroom; Extranet is a vendor delivery door with a passcode; Internet is the public sidewalk outside the building.',
      misconception: 'Intranets use the same web browsers and web pages as the Internet, but their network location and authentication restrict access to authorized members.',
      review: [
        'Explain the security difference between a school intranet, a parent portal extranet, and a public website.',
        'Why would an organization choose to host an internal document on an intranet rather than the public web?'
      ]
    },
    {
      title: 'Basic Network Topologies',
      category: 'Topologies',
      image: {
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&auto=format&fit=crop&v=1010',
        alt: 'Office computer workstation desk connected to network',
        credit: 'Photo via Unsplash'
      },
      visual: 'network',
      lead: 'Network topology defines the physical or logical layout in which devices and cable links are arranged.',
      paragraphs: [
        'Topology describes how devices are linked together. The Star topology is the most common modern layout: every device connects directly to a central switch or access point. If one cable fails, only that device is disconnected.',
        'Other major topologies include Bus (devices share one main backbone cable), Ring (devices connect in a closed circle), Mesh (multiple redundant paths between nodes), and Tree/Hybrid (hierarchical combination of stars).'
      ],
      definitions: [
        { term: 'Star Topology', definition: 'All network nodes connect independently to a single central device (switch or AP).', image: 'https://images.unsplash.com/photo-1500000000142?w=800&auto=format&fit=crop&v=1047' },
        { term: 'Bus Topology', definition: 'Legacy arrangement where nodes share a single central trunk cable with terminators.', image: 'https://images.unsplash.com/photo-1500000000143?w=800&auto=format&fit=crop&v=1048' },
        { term: 'Ring Topology', definition: 'Nodes connect sequentially in a continuous loop, passing tokens in one direction.', image: 'https://images.unsplash.com/photo-1500000000144?w=800&auto=format&fit=crop&v=1049' },
        { term: 'Mesh Topology', definition: 'Redundant interconnections between nodes providing multiple path options.', image: 'https://images.unsplash.com/photo-1500000000145?w=800&auto=format&fit=crop&v=1050' }
      ],
      examples: [
        'A school computer lab where all 30 computers connect with Ethernet cables into one central 48-port switch (Star).',
        'Subsea fiber cables and core ISP routers forming redundant interconnects across continents (Partial Mesh).'
      ],
      analogy: 'Star topology is like bicycle wheel spokes connecting to a central hub; Bus topology is like houses along a single main street; Mesh is like a web of city roads.',
      misconception: 'Topology describes physical wiring layout, not geographic coverage size. A single office room and a multi-building enterprise can both use star topologies.',
      review: [
        'Why is Star topology favored over Bus topology in modern home and school network installations?',
        'What is the primary advantage of a Mesh topology in critical environments like military or ISP backbones?'
      ]
    },
    {
      title: 'Network Media Comparison',
      category: 'Transmission Media',
      image: {
        src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1280&auto=format&fit=crop&v=1011',
        alt: 'Close up of colorful Ethernet cables and fiber strands',
        credit: 'Photo via Unsplash'
      },
      visual: 'infrastructure',
      lead: 'Choosing between copper Ethernet, optical fiber, and wireless media depends on required distance, bandwidth, immunity, and budget.',
      paragraphs: [
        'Copper Ethernet cables (Cat5e, Cat6) use electrical signals. They are inexpensive and flexible, but limited to a maximum distance of 100 meters per segment and susceptible to electromagnetic noise.',
        'Fiber-optic cables use light pulses through glass strands. They support extreme bandwidth over tens of kilometers without electrical interference. Wireless media (radio waves) eliminate physical cables, enabling mobile communication across Wi-Fi, cellular, and satellite links.'
      ],
      definitions: [
        { term: 'Copper Cat6', definition: 'Standard Ethernet cabling carrying up to 10 Gbps signals up to 55-100 meters.', image: 'https://images.unsplash.com/photo-1500000000146?w=800&auto=format&fit=crop&v=1051' },
        { term: 'Single-Mode Fiber', definition: 'Fiber-optic cable using narrow laser light beams for multi-kilometer transmission.', image: 'https://images.unsplash.com/photo-1500000000147?w=800&auto=format&fit=crop&v=1052' },
        { term: 'Electromagnetic Interference (EMI)', definition: 'Distortion of electrical signals caused by heavy machinery, power lines, or lightning.', image: 'https://images.unsplash.com/photo-1500000000148?w=800&auto=format&fit=crop&v=1053' }
      ],
      examples: [
        'Using Cat6 copper cables inside a classroom to connect desktops to a switch.',
        'Using fiber-optic backbone cables to link two campus buildings 800 meters apart.',
        'Using satellite links to connect remote island health clinics where cables cannot be laid.'
      ],
      analogy: 'Copper is like a city bus (short distance, affordable); Fiber is like a high-speed bullet train (massive volume, long distance); Wireless is like a helicopter (goes anywhere without tracks).',
      misconception: 'Fiber optics do not carry electricity; they carry pure light pulses. Therefore, fiber cables are completely immune to electrical interference and lightning strikes.',
      review: [
        'Why is copper Ethernet cabling restricted to a maximum length of 100 meters?',
        'Which medium would you recommend to connect two school buildings separated by 2 kilometers? Explain.'
      ]
    },
    {
      title: 'Essential Network Devices',
      category: 'Network Hardware',
      image: {
        src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1280&auto=format&fit=crop&v=1012',
        alt: 'Hardware network switch with patch cables inserted',
        credit: 'Photo via Unsplash'
      },
      visual: 'infrastructure',
      lead: 'Every device in a network performs a specific role, from physical interfaces to local switches, access points, and boundary routers.',
      paragraphs: [
        'A Network Interface Card (NIC) allows a device to connect to a medium. A Switch connects devices inside a local network, directing local traffic intelligently using MAC addresses. A Wireless Access Point (AP) converts wired LAN signals into Wi-Fi radio waves.',
        'A Router connects different networks together (such as connecting a school LAN to an ISP). A Modem or Optical Network Terminal (ONT) converts signals from the ISP service line into local Ethernet. A Firewall enforces traffic security rules, and a Server provides central data or applications.'
      ],
      definitions: [
        { term: 'NIC', definition: 'Network Interface Card: the hardware component giving a device a physical connection and MAC address.', image: 'https://images.unsplash.com/photo-1500000000149?w=800&auto=format&fit=crop&v=1054' },
        { term: 'Switch', definition: 'A local device that forwards frames between devices on the same local network.', image: 'https://images.unsplash.com/photo-1500000000150?w=800&auto=format&fit=crop&v=1055' },
        { term: 'Router', definition: 'A gateway device that forwards packets between different networks based on IP addresses.', image: 'https://images.unsplash.com/photo-1500000000151?w=800&auto=format&fit=crop&v=1056' },
        { term: 'Modem / ONT', definition: 'A device that translates ISP access signals (fiber/copper/cable) into local network traffic.', image: 'https://images.unsplash.com/photo-1500000000152?w=800&auto=format&fit=crop&v=1057' }
      ],
      examples: [
        'A desktop Ethernet port (NIC) plugged into a classroom wall port.',
        'A 24-port switch in a cabinet linking all classroom computers together.',
        'A home "Wi-Fi Router" which combines an AP, switch, router, firewall, and modem into one box.'
      ],
      analogy: 'A switch is like a room mailroom sorting letters to desks inside the building; a router is like the city post office forwarding mail between different towns.',
      misconception: 'A home Wi-Fi box is not just one device; it is a composite device combining a router, switch, wireless access point, firewall, and DHCP server in one enclosure.',
      review: [
        'Explain the distinct roles of a switch, a router, and a modem in a home network.',
        'Why does a computer need a Network Interface Card (NIC) to join a network?'
      ]
    },
    {
      title: 'Building a Home or School Network',
      category: 'Network Architecture',
      image: {
        src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1280&auto=format&fit=crop&v=1013',
        alt: 'Technician configuring network cabling infrastructure',
        credit: 'Photo via Unsplash'
      },
      visual: 'infrastructure',
      lead: 'Combining devices into a complete topology shows how data flows from user end-points out to the ISP and Internet.',
      paragraphs: [
        'In a typical home or school network, host devices (smartphones, laptops, desktops, smart TVs) connect via Wi-Fi to an Access Point or via Ethernet to a Switch.',
        'The switch or access point aggregates local traffic and sends it to the Router. The router evaluates destination addresses, applies firewall rules, and passes outbound traffic to the Modem or ONT, which carries signals over the ISP infrastructure to global destinations.'
      ],
      definitions: [
        { term: 'Aggregation', definition: 'Combining traffic from multiple local end-user devices into central network paths.', image: 'https://images.unsplash.com/photo-1500000000153?w=800&auto=format&fit=crop&v=1058' },
        { term: 'Integrated Gateway', definition: 'A single consumer box combining router, switch, access point, and modem functions.', image: 'https://images.unsplash.com/photo-1500000000154?w=800&auto=format&fit=crop&v=1059' },
        { term: 'Enterprise Layout', definition: 'A network separating switches, firewalls, routers, and access points into dedicated hardware.', image: 'https://images.unsplash.com/photo-1500000000155?w=800&auto=format&fit=crop&v=1060' }
      ],
      examples: [
        'Home: Phone -> Wi-Fi AP -> Router -> Fiber ONT -> ISP -> Internet.',
        'School: PC -> Classroom Switch -> Floor Switch -> Central Router -> Firewall -> Fiber Line -> ISP.'
      ],
      analogy: 'Building a network is like a tributary river system: small streams (individual devices) join local rivers (switches), which flow into a main river (router) heading to the ocean (Internet).',
      misconception: 'Connecting more devices to home Wi-Fi does not increase your ISP speed; all connected devices share the total bandwidth supplied by the router and ISP line.',
      review: [
        'Trace the path of data from a school computer to an ISP fiber line, naming every device along the way.',
        'Why do commercial school networks use separate switches and access points instead of single all-in-one home boxes?'
      ]
    },
    {
      title: 'Communication Inside a Local Network',
      category: 'Local Data Flow',
      image: {
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1280&auto=format&fit=crop&v=1014',
        alt: 'Laptop on desk transferring data over local network',
        credit: 'Photo via Unsplash'
      },
      visual: 'network',
      lead: 'When two devices on the same local network communicate, their data stays within the LAN using physical MAC address identification.',
      paragraphs: [
        'If a student on a laptop sends a file to a teacher\'s desktop on the same school Wi-Fi, the data travels from the laptop to the Access Point, through a Switch, and directly to the teacher\'s desktop.',
        'This local communication does not cross a router or reach the ISP. Every NIC has a unique physical MAC (Media Access Control) address embedded at the factory. Switches use these MAC addresses to deliver data directly to the intended local destination.'
      ],
      definitions: [
        { term: 'MAC Address', definition: 'A unique 48-bit physical identifier (e.g. 00:1A:2B:3C:4D:5E) assigned to a network interface card.', image: 'https://images.unsplash.com/photo-1500000000156?w=800&auto=format&fit=crop&v=1061' },
        { term: 'Local Switching', definition: 'Direct forwarding of frames between local ports without sending data outside the local network.', image: 'https://images.unsplash.com/photo-1500000000157?w=800&auto=format&fit=crop&v=1062' },
        { term: 'Frame', definition: 'A unit of data formatted for local delivery across a physical link using MAC addresses.', image: 'https://images.unsplash.com/photo-1500000000158?w=800&auto=format&fit=crop&v=1063' }
      ],
      examples: [
        'Sending a file from your laptop to a network printer down the hall using local MAC addressing.',
        'A switch looking up its internal MAC address table to forward a file directly to Port 5 without flooding Port 12.'
      ],
      analogy: 'A MAC address is like a student\'s ID badge inside a school building; it allows instant recognition and hand-to-hand passing of papers within the classroom.',
      misconception: 'Local network communication does not consume Internet data quota. Transferring a 10 GB file between two local PCs uses zero ISP bandwidth.',
      review: [
        'Trace the local delivery path of a document sent from a student laptop to a local network printer.',
        'What role does a MAC address play when a switch delivers data inside a local network?'
      ]
    },
    {
      title: 'Basic Network Models',
      category: 'Network Models',
      image: {
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&auto=format&fit=crop&v=1015',
        alt: 'Integrated circuit board representing layered hardware logic',
        credit: 'Photo via Unsplash'
      },
      visual: 'stack',
      lead: 'Layered network models divide the complex job of communication into manageable levels, from physical hardware up to user applications.',
      paragraphs: [
        'To prevent networking from becoming overwhelmingly complex, computer communication is organized into functional layers. Each layer handles one specific problem and provides services to the layer above it.',
        'A simplified 5-layer model includes: 1) Application (user services like web browsers), 2) Transport (end-to-end delivery rules like TCP), 3) Internet (logical addressing across networks like IP), 4) Link (local link delivery using MAC addresses), and 5) Physical (signals over cables or radio waves).'
      ],
      definitions: [
        { term: 'Layered Architecture', definition: 'Dividing networking functions into distinct levels so software and hardware can be designed independently.', image: 'https://images.unsplash.com/photo-1500000000159?w=800&auto=format&fit=crop&v=1064' },
        { term: 'Application Layer', definition: 'The top layer containing user-facing network applications and protocols.', image: 'https://images.unsplash.com/photo-1500000000160?w=800&auto=format&fit=crop&v=1065' },
        { term: 'Link & Physical Layers', definition: 'The bottom layers responsible for local MAC delivery and physical signal transmission.', image: 'https://images.unsplash.com/photo-1500000000161?w=800&auto=format&fit=crop&v=1066' }
      ],
      examples: [
        'A web browser generating a request at Layer 5, which is formatted, addressed, and converted into light pulses at Layer 1.'
      ],
      analogy: 'Network layers are like an international shipping company: translators write the message, logistics plans the route, couriers label boxes, and drivers operate trucks.',
      misconception: 'Network layers are not physical components inside a computer; they are conceptual software and hardware abstractions that organize standards.',
      review: [
        'Name the five layers of the simplified network model and state the primary question each layer answers.',
        'Why is a layered design beneficial for hardware manufacturers and software developers?'
      ]
    }
  ],
  activity: {
    title: 'Paper-Based & Conceptual Network Activities',
    intro: 'Construct, classify, and role-play computer network concepts using physical diagrams, role cards, and scenario analysis.',
    tasks: [
      {
        title: 'Task 1: The Human Network (Role-Play)',
        scenario: 'A school classroom represents a complete local and connected network environment.',
        prompt: 'Assign student roles: Laptop, Smartphone, Printer, Switch, Access Point, Router, Local Server, and ISP. Use string to represent cable links. Role-play data movement for: A) Printing a file locally; B) Fetching a file from the local server; C) Accessing an Internet website. Move physical paper "data packets" along the string paths.',
        response: 'Submit a summary explaining which roles were involved in local transfers versus which roles were required for Internet traffic.',
        rationale: 'Physical role-playing builds an intuitive mental model of local switching versus router gateway forwarding.'
      },
      {
        title: 'Task 2: Classify the Network',
        scenario: 'Analyze four distinct real-world networking setups.',
        prompt: 'Classify each scenario by Coverage (PAN/LAN/WLAN/CAN/WAN), Medium (Wired/Wireless), Architecture (P2P/Client-Server), Access (Intranet/Extranet/Public), and Topology (Star/Mesh): 1) 25 PCs in a school lab plugged into a switch with a file server; 2) A student listening to phone audio on Bluetooth headphones; 3) A parent logging into a school grade portal from home; 4) Bank branches across provinces sharing a central database.',
        response: 'Write a classification table accurately assigning all 5 attributes to each of the four scenarios.',
        rationale: 'Practicing multi-dimensional classification reinforces that network terms describe different properties rather than mutually exclusive choices.'
      },
      {
        title: 'Task 3: Construct a Campus Network Layout',
        scenario: 'A college campus needs a network linking 4 buildings: Administration, Library, Computer Lab, and Server Room.',
        prompt: 'Draw a complete network diagram showing: end-user PCs, laptops, classroom switches, wireless access points, building switches, the campus core router, firewall, and ISP ONT connection. Label wired Ethernet links, fiber-optic inter-building backbones, and Wi-Fi zones.',
        response: 'Submit a labeled architectural diagram with a written key explaining the job of every device and cable medium chosen.',
        rationale: 'Designing a campus layout integrates topology, media selection, and device hierarchy into a single practical project.'
      },
      {
        title: 'Task 4: Local or Internet Analysis',
        scenario: 'Determine connectivity requirements for daily computing activities.',
        prompt: 'Analyze these six tasks: 1) Printing a document to a USB-connected printer; 2) Printing to a Wi-Fi classroom printer; 3) Opening a school intranet document; 4) Watching a YouTube video; 5) Sending a file over Bluetooth; 6) Backing up photos to Google Drive. Specify whether each task requires: A Direct Connection, a Local Network (LAN), or the Public Internet.',
        response: 'Provide a categorized checklist with brief explanations justifying why the Internet is or is not required for each task.',
        rationale: 'Distinguishing local LAN actions from Internet actions corrects the common misconception that all network tasks require the Internet.'
      }
    ],
    reflection: [
      'Why can a school computer lab continue to share files locally even when the ISP Internet connection is down?',
      'How does a Star topology prevent a single broken cable from bringing down an entire classroom network?',
      'What is the fundamental functional difference between a local Switch and a boundary Router?'
    ]
  },
  quiz: [
    {
      category: 'Communication Model',
      question: 'In the basic communication model, what represents the physical path over which data travels?',
      options: [
        'Transmission medium',
        'Protocol rules',
        'Application server',
        'Binary payload'
      ],
      answer: 0,
      explanation: 'The transmission medium (copper cable, optical fiber, or radio waves) is the physical path carrying data signals.'
    },
    {
      category: 'Signals',
      question: 'How does a fiber-optic cable transmit binary data between network devices?',
      options: [
        'Using rapid pulses of light down glass strands',
        'Using varying electrical voltage levels over copper',
        'Using high-frequency radio waves in free space',
        'Using magnetic field pulses across twisted wires'
      ],
      answer: 0,
      explanation: 'Fiber-optic cables carry binary 1s and 0s as pulses of light generated by lasers or LEDs.'
    },
    {
      category: 'Network Definition',
      question: 'Which statement correctly defines a computer network?',
      options: [
        'A group of connected devices that can communicate and share resources',
        'A single powerful computer running multiple web applications',
        'A global collection of websites accessed only through web browsers',
        'A physical cable that connects a computer directly to a power outlet'
      ],
      answer: 0,
      explanation: 'A computer network is defined as two or more connected devices capable of communicating and sharing data or resources.'
    },
    {
      category: 'Network vs Internet',
      question: 'Can a local computer network (LAN) function if its Internet connection is disconnected?',
      options: [
        'Yes, devices can still communicate and share local files and printers.',
        'No, all local devices immediately shut down without Internet access.',
        'No, switches require active ISP signals to forward local data.',
        'Yes, but only if all devices are connected using Bluetooth.'
      ],
      answer: 0,
      explanation: 'Local networks operate independently for internal file sharing and printing even without external Internet access.'
    },
    {
      category: 'Coverage Types',
      question: 'Which network coverage type describes a small network surrounding an individual person, such as a phone connected to earbuds?',
      options: [
        'Personal Area Network (PAN)',
        'Local Area Network (LAN)',
        'Metropolitan Area Network (MAN)',
        'Wide Area Network (WAN)'
      ],
      answer: 0,
      explanation: 'A PAN (Personal Area Network) spans a few meters around a single user, commonly using Bluetooth.'
    },
    {
      category: 'Coverage Types',
      question: 'A college connects its registrar, library, computer lab, and administration buildings together. What type of network is this?',
      options: [
        'Campus Area Network (CAN)',
        'Personal Area Network (PAN)',
        'Metropolitan Area Network (MAN)',
        'Wide Area Network (WAN)'
      ],
      answer: 0,
      explanation: 'A CAN (Campus Area Network) links multiple organizational buildings within a single defined campus area.'
    },
    {
      category: 'Classifications',
      question: 'Why is it possible for a school network to be described as a LAN, Wireless, Client-Server, and Star topology at the same time?',
      options: [
        'Because those terms describe different dimensions: size, medium, architecture, and wiring layout.',
        'Because all networking terms are interchangeable synonyms.',
        'Because modern networks automatically change their classification every hour.',
        'Because Wi-Fi networks do not use physical network devices.'
      ],
      answer: 0,
      explanation: 'Network classifications answer different questions (size, medium, architecture, topology) and describe different aspects of one network.'
    },
    {
      category: 'Media',
      question: 'What is a major advantage of wired Ethernet cabling compared to wireless Wi-Fi?',
      options: [
        'Higher connection stability and immunity to radio interference',
        'Complete freedom of physical movement across buildings',
        'Zero physical cabling installation requirements',
        'Automatic compatibility with cellular towers'
      ],
      answer: 0,
      explanation: 'Wired Ethernet links provide consistent, predictable performance and are immune to environmental radio interference.'
    },
    {
      category: 'Architecture',
      question: 'In a Client-Server network architecture, what is the primary role of a server?',
      options: [
        'To host centralized data, services, or applications and fulfill client requests',
        'To connect wirelessly to nearby Bluetooth accessories',
        'To act as a physical cable carrying electrical signals between rooms',
        'To generate web pages automatically without user requests'
      ],
      answer: 0,
      explanation: 'Servers hold centralized resources and process incoming requests sent by user client devices.'
    },
    {
      category: 'Network Access',
      question: 'What is an Intranet?',
      options: [
        'A private network restricted exclusively to members of an organization',
        'A public website accessible to anyone on the Internet',
        'A wireless standard used exclusively by satellite phones',
        'A social media platform for university students'
      ],
      answer: 0,
      explanation: 'An Intranet uses web standards but restricts access strictly to authorized internal organizational members.'
    },
    {
      category: 'Topologies',
      question: 'Which network topology connects all devices to a single central switch or access point?',
      options: [
        'Star topology',
        'Bus topology',
        'Ring topology',
        'Mesh topology'
      ],
      answer: 0,
      explanation: 'In a Star topology, every node connects independently to a central device like a switch.'
    },
    {
      category: 'Media Limits',
      question: 'What is the maximum standard distance for a single copper Ethernet cable segment before signal degradation occurs?',
      options: [
        '100 meters',
        '10 meters',
        '1,000 meters',
        '5 kilometers'
      ],
      answer: 0,
      explanation: 'Standard twisted-pair copper Ethernet (Cat5e/Cat6) is limited to 100 meters per segment.'
    },
    {
      category: 'Network Devices',
      question: 'Which network device is specifically responsible for connecting devices inside the same local network and forwarding data using MAC addresses?',
      options: [
        'Switch',
        'Router',
        'Modem',
        'Optical Network Terminal'
      ],
      answer: 0,
      explanation: 'Switches connect local devices together and forward frames based on physical MAC addresses.'
    },
    {
      category: 'Network Devices',
      question: 'What is the main functional difference between a switch and a router?',
      options: [
        'Switches connect devices inside a network; routers connect different networks together.',
        'Switches use radio waves; routers only use copper cables.',
        'Switches assign domain names; routers store website files.',
        'Switches are used in homes; routers are only used underwater.'
      ],
      answer: 0,
      explanation: 'Switches handle intra-network communication within a LAN; routers bridge and forward traffic between separate networks.'
    },
    {
      category: 'Local Addressing',
      question: 'What type of address is permanently built into a Network Interface Card (NIC) at the factory for local link delivery?',
      options: [
        'MAC address',
        'IP address',
        'Domain name',
        'Port number'
      ],
      answer: 0,
      explanation: 'A MAC (Media Access Control) address is a permanent physical identifier assigned to a NIC hardware interface.'
    }
  ],
  summary: {
    intro: 'Internet Part 1 establishes the foundational mental model of computer networking: how individual devices convert binary data into physical signals, connect through media, arrange in topologies, and share resources locally.',
    points: [
      'Communication requires a sender, receiver, message, medium, protocol rules, and feedback.',
      'Computers convert binary data into electrical voltages (copper), light pulses (fiber), or radio waves (wireless).',
      'A computer network is a group of connected devices sharing data and resources; it does not require the Internet to function locally.',
      'Networks are classified by coverage area: PAN (person), LAN/WLAN (building), CAN (campus), MAN (city), WAN (wide area), and Internet (global).',
      'A network is simultaneously classified by coverage, medium (wired/wireless), architecture (P2P/client-server), access (intranet/extranet/public), and topology (star/bus/ring/mesh).',
      'The Star topology is standard for modern LANs because a single cable fault affects only one device.',
      'Key devices perform distinct roles: NIC (interface), Switch (local LAN forwarding), Access Point (wireless connection), Router (inter-network gateway), Modem/ONT (ISP translation), and Firewall (security enforcement).',
      'Switches use MAC addresses to deliver frames locally inside a LAN without needing Internet routing.'
    ],
    review: [
      'Explain how data moves from a laptop through an access point and switch to a local file server.',
      'Differentiate between a LAN, an Intranet, and the public Internet.',
      'Describe why a home "Wi-Fi box" is actually a composite device combining multiple network roles.'
    ],
    next: 'Proceed to Internet Part 2: How the Internet & Web Work to learn how local networks connect to ISPs, route packets across global networks, resolve DNS, and execute web requests.'
  }
};
