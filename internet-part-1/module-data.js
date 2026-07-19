window.CC101_MODULE_DATA = {
  "id": "internet-part-1",
  "courseTitle": "Introduction to Computing",
  "title": "Internet Part 1",
  "subtitle": "Foundations of Computer Networks",
  "description": "Learn how devices connect and communicate: from basic signal transmission and network classifications (PAN, LAN, WLAN, CAN, MAN, WAN) to network topologies, media, client-server architectures, and local network devices.",
  "objectives": [
    "Explain the basic communication model and how data is transmitted as physical signals.",
    "Define a computer network and identify the core reasons why networks are created.",
    "Distinguish between local networks and the global Internet.",
    "Classify networks by coverage area (PAN, LAN, WLAN, CAN, MAN, WAN, Internet).",
    "Categorize networks by medium, architecture (P2P vs Client-Server), access type, and topology.",
    "Compare wired (Ethernet, Fiber) and wireless (Wi-Fi, Bluetooth, Cellular, Satellite) connection media.",
    "Identify network topologies (Star, Bus, Ring, Mesh, Tree) and explain why Star is most common.",
    "Describe the functions of network devices: NIC, Hub, Switch, Access Point, Router, Modem/ONT, Server, Firewall, and ISP.",
    "Trace local data communication and explain the local identification role of MAC addresses.",
    "Organize communication responsibilities into a simplified 5-layer network model."
  ],
  "lessons": [
    {
      "title": "Begin With Communication",
      "category": "Communication Model",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Begin%20With%20Communication%2C%20Before%20understanding%20complex%20networks%20we%20must%20look%20at%20how%20two%20individual%20devices%20exchange%20informatio%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=101",
        "alt": "AI Generated 3D Technical Diagram for Begin With Communication",
        "credit": "AI Generated Visual #101"
      },
      "visual": "network",
      "lead": "Before understanding complex networks, we must look at how two individual devices exchange information using a basic communication model.",
      "paragraphs": [
        "Every communication system—whether human speech or computer data transfer—follows a basic six-part model: 1) Sender (creates the information), 2) Receiver (gets the information), 3) Message (the content sent), 4) Medium (the physical path carrying the data), 5) Rules (the agreed protocol for communication), and 6) Feedback (confirmation that data arrived).",
        "Computers communicate by converting internal binary patterns into physical signals that travel across a transmission medium. Devices must use compatible connection methods and follow identical rules; physical proximity alone is not enough for devices to communicate."
      ],
      "definitions": [
        {
          "term": "Sender",
          "definition": "The device or application that originates the information being sent.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Sender%2C%20The%20device%20or%20application%20that%20originates%20the%20information%20being%20sent%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=102"
        },
        {
          "term": "Receiver",
          "definition": "The target device or application intended to receive the information.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Receiver%2C%20The%20target%20device%20or%20application%20intended%20to%20receive%20the%20information%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=103"
        },
        {
          "term": "Transmission Medium",
          "definition": "The physical or wireless path (copper, fiber, radio waves) over which data travels.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Transmission%20Medium%2C%20The%20physical%20or%20wireless%20path%20copper%20fiber%20radio%20waves%20over%20which%20data%20travels%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=104"
        },
        {
          "term": "Protocol Rules",
          "definition": "Agreed standards governing how data is formatted, sent, and acknowledged.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Protocol%20Rules%2C%20Agreed%20standards%20governing%20how%20data%20is%20formatted%20sent%20and%20acknowledged%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=105"
        }
      ],
      "examples": [
        "A phone (sender) sending a photo (message) via Wi-Fi radio waves (medium) to a printer (receiver).",
        "A browser requesting a file from a web server and receiving a \"File received\" confirmation."
      ],
      "analogy": "Computer communication is like mailing a letter: you need a sender address, recipient address, paper message, mail truck carrier, and language rules both parties read.",
      "misconception": "Devices cannot communicate merely because they are placed near each other. They must share a compatible medium and protocol.",
      "review": [
        "Identify the six components of the basic communication model for a Bluetooth earphone playing music.",
        "Why does binary data need to be converted into physical signals before traveling to another device?"
      ]
    },
    {
      "title": "Data Becomes Signals",
      "category": "Physical Layer",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Data%20Becomes%20Signals%2C%20The%201s%20and%200s%20stored%20in%20computer%20memory%20travel%20through%20the%20real%20world%20as%20physical%20signals%20through%20co%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=106",
        "alt": "AI Generated 3D Technical Diagram for Data Becomes Signals",
        "credit": "AI Generated Visual #106"
      },
      "visual": "infrastructure",
      "lead": "The 1s and 0s stored in computer memory travel through the real world as physical signals through copper cables, optical fibers, or radio waves.",
      "paragraphs": [
        "Computers internally store and process data in binary (0s and 1s). To move data from one computer to another, a Network Interface Card (NIC) converts those binary patterns into physical signals suitable for the medium.",
        "Transmission media use different physical phenomena to carry data: copper cables use electrical voltage pulses; fiber-optic cables use light pulses generated by lasers or LEDs; wireless systems (Wi-Fi, Bluetooth, cellular, satellite) use modulated electromagnetic radio waves."
      ],
      "definitions": [
        {
          "term": "Physical Signal",
          "definition": "A detectable physical quantity (electrical voltage, light pulse, or radio wave) representing binary data.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Physical%20Signal%2C%20A%20detectable%20physical%20quantity%20electrical%20voltage%20light%20pulse%20or%20radio%20wave%20representing%20binary%20data%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=107"
        },
        {
          "term": "Copper Transmission",
          "definition": "Carrying binary data using varying electrical voltages over copper wires.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Copper%20Transmission%2C%20Carrying%20binary%20data%20using%20varying%20electrical%20voltages%20over%20copper%20wires%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=108"
        },
        {
          "term": "Fiber-Optic Transmission",
          "definition": "Carrying binary data as rapid pulses of light down ultra-pure glass strands.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20FiberOptic%20Transmission%2C%20Carrying%20binary%20data%20as%20rapid%20pulses%20of%20light%20down%20ultrapure%20glass%20strands%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=109"
        },
        {
          "term": "Wireless Modulation",
          "definition": "Varying the frequency, amplitude, or phase of radio waves to encode binary 1s and 0s.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Wireless%20Modulation%2C%20Varying%20the%20frequency%20amplitude%20or%20phase%20of%20radio%20waves%20to%20encode%20binary%201s%20and%200s%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=110"
        }
      ],
      "examples": [
        "Ethernet cables changing electrical voltage levels millions of times per second to represent data.",
        "Subsea fiber-optic cables pulsing light to carry terabytes of international traffic.",
        "A Wi-Fi router emitting 2.4 GHz or 5 GHz radio waves received by a smartphone antenna."
      ],
      "analogy": "Binary signals are like Morse code: flashing a flashlight on and off (fiber light pulses) or tapping electrical wires (copper voltages) to send letters across a distance.",
      "misconception": "The digital file itself is not flying through the air. The file is represented as changing physical signals that the receiving device reconstructs into binary data.",
      "review": [
        "Which physical signal is used by Ethernet cables, fiber-optic lines, and Wi-Fi antennas?",
        "How does a receiving device convert incoming radio waves back into usable computer files?"
      ]
    },
    {
      "title": "What Is a Computer Network?",
      "category": "Network Concepts",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20What%20Is%20a%20Computer%20Network%2C%20A%20computer%20network%20is%20simply%20two%20or%20more%20connected%20devices%20that%20can%20communicate%20and%20share%20data%20servi%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=111",
        "alt": "AI Generated 3D Technical Diagram for What Is a Computer Network?",
        "credit": "AI Generated Visual #111"
      },
      "visual": "network",
      "lead": "A computer network is simply two or more connected devices that can communicate and share data, services, and hardware resources.",
      "paragraphs": [
        "A computer network consists of nodes (devices like laptops, phones, printers, servers, or routers) connected by communication links. Networks allow organizations to share expensive hardware (like printers), centralize files, host online applications, and communicate instantaneously.",
        "Devices on a network can act as hosts (sending or receiving data) or network infrastructure (forwarding data). Building a local network provides shared access to local resources even when the network has no connection to the Internet."
      ],
      "definitions": [
        {
          "term": "Computer Network",
          "definition": "A group of connected devices capable of communicating and sharing resources.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Computer%20Network%2C%20A%20group%20of%20connected%20devices%20capable%20of%20communicating%20and%20sharing%20resources%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=112"
        },
        {
          "term": "Node",
          "definition": "Any active electronic device connected to a network that can send, receive, or forward data.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Node%2C%20Any%20active%20electronic%20device%20connected%20to%20a%20network%20that%20can%20send%20receive%20or%20forward%20data%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=113"
        },
        {
          "term": "Host",
          "definition": "An end-user device (like a laptop or server) assigned a network address that originates or consumes data.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Host%2C%20An%20enduser%20device%20like%20a%20laptop%20or%20server%20assigned%20a%20network%20address%20that%20originates%20or%20consumes%20dat%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=114"
        },
        {
          "term": "Resource",
          "definition": "Hardware, files, applications, or data shared across a network.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Resource%2C%20Hardware%20files%20applications%20or%20data%20shared%20across%20a%20network%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=115"
        }
      ],
      "examples": [
        "Ten computers in a school laboratory connected to a single shared laser printer.",
        "A office desktop saving financial records directly to a local file server.",
        "Smartphones, smart TVs, and security cameras connected together on a home network."
      ],
      "analogy": "A computer network is like a city transportation grid connecting houses (hosts), post offices (routers), and factories (servers) so goods (data) can be shared.",
      "misconception": "A network does not require Internet access to function. Devices can communicate and share files locally without an Internet connection.",
      "review": [
        "Define the terms node, host, link, and resource in the context of a school computer lab.",
        "List four major reasons why businesses and schools build computer networks."
      ]
    },
    {
      "title": "Network Versus Internet",
      "category": "Network Concepts",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Network%20Versus%20Internet%2C%20A%20local%20network%20is%20an%20independent%20selfcontained%20system%20of%20devices%20whereas%20the%20Internet%20is%20a%20global%20n%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=116",
        "alt": "AI Generated 3D Technical Diagram for Network Versus Internet",
        "credit": "AI Generated Visual #116"
      },
      "visual": "network",
      "lead": "A local network is an independent, self-contained system of devices, whereas the Internet is a global network of interconnected networks.",
      "paragraphs": [
        "It is crucial to separate a local network from the global Internet. A school network connects local computers, printers, and servers inside campus buildings. This local network (LAN) functions fully for internal tasks regardless of whether the outside Internet connection is working.",
        "The Internet is commonly described as a \"network of networks.\" It connects millions of independently operated local, regional, and national networks using a single shared set of communication standards."
      ],
      "definitions": [
        {
          "term": "Local Network (LAN)",
          "definition": "A private network operating within a limited area under single organizational control.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Local%20Network%20LAN%2C%20A%20private%20network%20operating%20within%20a%20limited%20area%20under%20single%20organizational%20control%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=117"
        },
        {
          "term": "The Internet",
          "definition": "The global system of interconnected independent networks communicating via TCP/IP.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20The%20Internet%2C%20The%20global%20system%20of%20interconnected%20independent%20networks%20communicating%20via%20TCPIP%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=118"
        },
        {
          "term": "Network Independence",
          "definition": "The ability of a local network to share local files and devices without outside connectivity.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Network%20Independence%2C%20The%20ability%20of%20a%20local%20network%20to%20share%20local%20files%20and%20devices%20without%20outside%20connectivity%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=119"
        }
      ],
      "examples": [
        "A school computer lab printing certificates to a local printer when the ISP cable outside is cut.",
        "A hospital internal network maintaining patient monitor feeds during a regional Internet outage."
      ],
      "analogy": "A local network is like an internal intercom system inside a house; the Internet is the global telephone network connecting houses around the world.",
      "misconception": "If the Internet goes down, your local Wi-Fi router still connects your phone to your local printer; only outside web services become unavailable.",
      "review": [
        "Explain why a school Wi-Fi network can still function for local printing even if its ISP connection fails.",
        "Summarize the key difference between a single local network and the Internet."
      ]
    },
    {
      "title": "Types of Networks by Coverage Area",
      "category": "Network Coverage",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Types%20of%20Networks%20by%20Coverage%20Area%2C%20Networks%20are%20categorized%20by%20their%20geographic%20span%20ranging%20from%20personal%20bluetooth%20links%20to%20citywide%20%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=120",
        "alt": "AI Generated 3D Technical Diagram for Types of Networks by Coverage Area",
        "credit": "AI Generated Visual #120"
      },
      "visual": "network",
      "lead": "Networks are categorized by their geographic span, ranging from personal bluetooth links to city-wide and global connections.",
      "paragraphs": [
        "Networks are classified by geographic scale: Personal Area Network (PAN) covers a few meters around a person; Local Area Network (LAN) covers a room or building; Wireless LAN (WLAN) provides Wi-Fi coverage; Campus Area Network (CAN) connects multiple campus buildings; Metropolitan Area Network (MAN) spans a city; Wide Area Network (WAN) connects distant regions; and the Internet links networks globally.",
        "Understanding coverage helps engineers select appropriate transmission media, cabling, power levels, and routing hardware for each operating environment."
      ],
      "definitions": [
        {
          "term": "PAN",
          "definition": "Personal Area Network (around 1 person, e.g. Bluetooth mouse or earbuds).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20PAN%2C%20Personal%20Area%20Network%20around%201%20person%20eg%20Bluetooth%20mouse%20or%20earbuds%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=121"
        },
        {
          "term": "LAN & WLAN",
          "definition": "Local Area Network and Wireless LAN (a room, home, lab, or single building).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20LAN%20%20WLAN%2C%20Local%20Area%20Network%20and%20Wireless%20LAN%20a%20room%20home%20lab%20or%20single%20building%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=122"
        },
        {
          "term": "CAN",
          "definition": "Campus Area Network (connecting multiple nearby organizational buildings).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20CAN%2C%20Campus%20Area%20Network%20connecting%20multiple%20nearby%20organizational%20buildings%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=123"
        },
        {
          "term": "MAN & WAN",
          "definition": "Metropolitan Area Network (city-wide) and Wide Area Network (provinces, countries, global).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20MAN%20%20WAN%2C%20Metropolitan%20Area%20Network%20citywide%20and%20Wide%20Area%20Network%20provinces%20countries%20global%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=124"
        }
      ],
      "examples": [
        "PAN: Smartwatch syncing health data to a phone over Bluetooth.",
        "LAN/WLAN: Student laptops connected to school Wi-Fi in a classroom.",
        "CAN: College registrar office linked to the campus library building across the quad.",
        "WAN: Bank branches in Manila, Cebu, and Davao sharing centralized ledger records."
      ],
      "analogy": "Coverage types are like travel distances: PAN is walking around your desk, LAN is walking inside your house, CAN is walking around campus, MAN is city transit, and WAN is cross-country flight.",
      "misconception": "School Wi-Fi is not the Internet itself; it is a WLAN that provides wireless entry to the school LAN, which then routes outbound traffic to the Internet.",
      "review": [
        "A university links its library, administrative center, and engineering labs. What network type is this?",
        "Is your smartphone's Bluetooth connection to a wireless speaker a LAN or a PAN? Explain."
      ]
    },
    {
      "title": "Networks Can Be Classified in Different Ways",
      "category": "Classifications",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Networks%20Can%20Be%20Classified%20in%20Different%20Ways%2C%20Networks%20are%20described%20by%20different%20attributes%20coverage%20medium%20architecture%20access%20permissions%20topol%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=125",
        "alt": "AI Generated 3D Technical Diagram for Networks Can Be Classified in Different Ways",
        "credit": "AI Generated Visual #125"
      },
      "visual": "network",
      "lead": "Networks are described by different attributes: coverage, medium, architecture, access permissions, topology, and ownership.",
      "paragraphs": [
        "A single network is described using multiple classification dimensions simultaneously. For example, a school lab network can be a LAN (coverage), a hybrid wired/wireless system (medium), a client-server environment (architecture), a private intranet (access), and a star topology (arrangement).",
        "Mixing these terms leads to confusion. Classifications answer distinct questions: Coverage explains geographic size; Medium explains physical signal path; Architecture defines device roles; Access defines who may join; and Topology defines structural layout."
      ],
      "definitions": [
        {
          "term": "Coverage",
          "definition": "How far the physical or wireless network spans geographically (PAN, LAN, WAN).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Coverage%2C%20How%20far%20the%20physical%20or%20wireless%20network%20spans%20geographically%20PAN%20LAN%20WAN%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=126"
        },
        {
          "term": "Medium",
          "definition": "Whether signals travel through physical cables (wired), radio waves (wireless), or both (hybrid).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Medium%2C%20Whether%20signals%20travel%20through%20physical%20cables%20wired%20radio%20waves%20wireless%20or%20both%20hybrid%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=127"
        },
        {
          "term": "Architecture",
          "definition": "How control and resource sharing are structured (Peer-to-Peer vs Client-Server).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Architecture%2C%20How%20control%20and%20resource%20sharing%20are%20structured%20PeertoPeer%20vs%20ClientServer%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=128"
        },
        {
          "term": "Access & Topology",
          "definition": "Who is allowed to enter (Intranet/Extranet/Public) and how nodes are wired (Star/Mesh).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Access%20%20Topology%2C%20Who%20is%20allowed%20to%20enter%20IntranetExtranetPublic%20and%20how%20nodes%20are%20wired%20StarMesh%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=129"
        }
      ],
      "examples": [
        "A hospital Wi-Fi system classified as a WLAN (coverage), wireless (medium), client-server (architecture), intranet (access), and star (topology)."
      ],
      "analogy": "Classifying a network is like describing a car: color (medium), passenger capacity (coverage), fuel type (architecture), and driver license requirements (access).",
      "misconception": "Do not treat LAN, Wi-Fi, Client-Server, and Star as competing alternatives; they describe completely different dimensions of the same network.",
      "review": [
        "List five different classification criteria used to describe a school computer lab network.",
        "Why is it incorrect to say a network must choose between being a LAN or being a wireless network?"
      ]
    },
    {
      "title": "Wired and Wireless Networks",
      "category": "Transmission Media",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Wired%20and%20Wireless%20Networks%2C%20Networks%20transmit%20data%20through%20physical%20cables%20or%20freespace%20radio%20waves%20each%20offering%20distinct%20trade%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=130",
        "alt": "AI Generated 3D Technical Diagram for Wired and Wireless Networks",
        "credit": "AI Generated Visual #130"
      },
      "visual": "infrastructure",
      "lead": "Networks transmit data through physical cables or free-space radio waves, each offering distinct tradeoffs in speed, mobility, and reliability.",
      "paragraphs": [
        "Wired networks use physical cables (like copper twisted-pair Ethernet or glass fiber-optics). Wired links offer high speeds, low latency, consistent performance, and immunity to radio interference, but require fixed cabling infrastructure.",
        "Wireless networks use radio signals (Wi-Fi, Bluetooth, cellular 4G/5G, satellite). Wireless provides mobility and convenient setup, but signals can be weakened by walls, weather, electrical noise, and distance."
      ],
      "definitions": [
        {
          "term": "Ethernet Cable",
          "definition": "Shielded or unshielded twisted-pair copper cabling using modular RJ45 connectors.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Ethernet%20Cable%2C%20Shielded%20or%20unshielded%20twistedpair%20copper%20cabling%20using%20modular%20RJ45%20connectors%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=131"
        },
        {
          "term": "Wi-Fi (IEEE 802.11)",
          "definition": "Wireless local networking technology operating over 2.4 GHz, 5 GHz, or 6 GHz radio bands.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20WiFi%20IEEE%2080211%2C%20Wireless%20local%20networking%20technology%20operating%20over%2024%20GHz%205%20GHz%20or%206%20GHz%20radio%20bands%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=132"
        },
        {
          "term": "Interference",
          "definition": "Distortion of wireless radio signals caused by obstacles, distance, or competing electronic devices.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Interference%2C%20Distortion%20of%20wireless%20radio%20signals%20caused%20by%20obstacles%20distance%20or%20competing%20electronic%20devices%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=133"
        }
      ],
      "examples": [
        "Desktop computers in a bank using Ethernet cables for high reliability and security.",
        "Students taking notes on laptops using Wi-Fi while moving between lecture halls."
      ],
      "analogy": "Wired links are like train tracks (fixed path, reliable, high capacity); wireless links are like helicopters (flexible destination, affected by weather and obstacles).",
      "misconception": "Wireless is not automatically slower or inferior, nor is wired always better. Modern Wi-Fi 6/7 can outperform old copper cables, but wired remains more predictable.",
      "review": [
        "Compare wired Ethernet and Wi-Fi across speed, mobility, interference, and installation cost.",
        "Why might a gaming tournament or video production studio prefer wired Ethernet cables over Wi-Fi?"
      ]
    },
    {
      "title": "Network Architecture: Peer-to-Peer and Client-Server",
      "category": "Network Architecture",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Network%20Architecture%20PeertoPeer%20and%20ClientServer%2C%20Network%20architecture%20defines%20how%20control%20communication%20and%20resource%20management%20are%20divided%20among%20con%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=134",
        "alt": "AI Generated 3D Technical Diagram for Network Architecture: Peer-to-Peer and Client-Server",
        "credit": "AI Generated Visual #134"
      },
      "visual": "network",
      "lead": "Network architecture defines how control, communication, and resource management are divided among connected devices.",
      "paragraphs": [
        "In a Peer-to-Peer (P2P) network, connected devices (peers) communicate and share resources directly with each other without relying on a central server. P2P is inexpensive and easy to set up for small groups, but becomes difficult to manage, backup, and secure as the network grows.",
        "In a Client-Server network, central computers (servers) manage resources, security, files, or applications, while user devices (clients) send requests to those servers. Client-server systems provide centralized security, data backups, and user management."
      ],
      "definitions": [
        {
          "term": "Peer-to-Peer (P2P)",
          "definition": "A decentralized network architecture where every node can act as both client and server.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20PeertoPeer%20P2P%2C%20A%20decentralized%20network%20architecture%20where%20every%20node%20can%20act%20as%20both%20client%20and%20server%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=135"
        },
        {
          "term": "Client",
          "definition": "A user device or application (e.g. web browser) that requests services or files.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Client%2C%20A%20user%20device%20or%20application%20eg%20web%20browser%20that%20requests%20services%20or%20files%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=136"
        },
        {
          "term": "Server",
          "definition": "A high-capacity computer or service that listens for, processes, and fulfills client requests.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Server%2C%20A%20highcapacity%20computer%20or%20service%20that%20listens%20for%20processes%20and%20fulfills%20client%20requests%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=137"
        }
      ],
      "examples": [
        "P2P: Two laptops transferring files directly using AirDrop or Bluetooth file sharing.",
        "Client-Server: A student logging into a school Learning Management System (LMS) hosted on a central server."
      ],
      "analogy": "Peer-to-peer is like a study group where students share notes directly with each other; Client-server is like a teacher distributing master worksheets from a central desk.",
      "misconception": "Client and server describe roles in a communication exchange, not physical hardware size. A laptop can act as a server if it shares a folder to the network.",
      "review": [
        "Contrast peer-to-peer and client-server architectures in terms of centralization, security, and scalability.",
        "Can a single computer act as a client in one application and a server in another? Give an example."
      ]
    },
    {
      "title": "Network Access Types: Intranet, Extranet, and Internet",
      "category": "Network Access",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Network%20Access%20Types%20Intranet%20Extranet%20and%20Internet%2C%20Networks%20enforce%20access%20boundaries%20to%20control%20whether%20services%20are%20restricted%20to%20internal%20personnel%20%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=138",
        "alt": "AI Generated 3D Technical Diagram for Network Access Types: Intranet, Extranet, and Internet",
        "credit": "AI Generated Visual #138"
      },
      "visual": "privacy",
      "lead": "Networks enforce access boundaries to control whether services are restricted to internal personnel, trusted partners, or the general public.",
      "paragraphs": [
        "An Intranet is a private network restricted exclusively to authorized members of an organization (like staff and students). It uses standard web protocols (HTTP, HTML) but is shielded from public access.",
        "An Extranet is a controlled portion of an intranet extended securely to authorized outside partners, suppliers, or customers. The public Internet is open to anyone connected through an ISP."
      ],
      "definitions": [
        {
          "term": "Intranet",
          "definition": "A private network accessible only to an internal staff or members.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Intranet%2C%20A%20private%20network%20accessible%20only%20to%20an%20internal%20staff%20or%20members%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=139"
        },
        {
          "term": "Extranet",
          "definition": "A secure extension of an intranet providing restricted access to trusted external entities.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Extranet%2C%20A%20secure%20extension%20of%20an%20intranet%20providing%20restricted%20access%20to%20trusted%20external%20entities%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=140"
        },
        {
          "term": "Public Internet",
          "definition": "The globally accessible network open to the public.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Public%20Internet%2C%20The%20globally%20accessible%20network%20open%20to%20the%20public%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=141"
        }
      ],
      "examples": [
        "Intranet: School grading database accessible only from office desktops inside the school building.",
        "Extranet: Parent portal allowing parents to log in remotely to view student report cards.",
        "Public Internet: The school's public promotional website hosted for future applicants."
      ],
      "analogy": "Intranet is the private employee breakroom; Extranet is a vendor delivery door with a passcode; Internet is the public sidewalk outside the building.",
      "misconception": "Intranets use the same web browsers and web pages as the Internet, but their network location and authentication restrict access to authorized members.",
      "review": [
        "Explain the security difference between a school intranet, a parent portal extranet, and a public website.",
        "Why would an organization choose to host an internal document on an intranet rather than the public web?"
      ]
    },
    {
      "title": "Basic Network Topologies",
      "category": "Topologies",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Basic%20Network%20Topologies%2C%20Network%20topology%20defines%20the%20physical%20or%20logical%20layout%20in%20which%20devices%20and%20cable%20links%20are%20arrange%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=142",
        "alt": "AI Generated 3D Technical Diagram for Basic Network Topologies",
        "credit": "AI Generated Visual #142"
      },
      "visual": "network",
      "lead": "Network topology defines the physical or logical layout in which devices and cable links are arranged.",
      "paragraphs": [
        "Topology describes how devices are linked together. The Star topology is the most common modern layout: every device connects directly to a central switch or access point. If one cable fails, only that device is disconnected.",
        "Other major topologies include Bus (devices share one main backbone cable), Ring (devices connect in a closed circle), Mesh (multiple redundant paths between nodes), and Tree/Hybrid (hierarchical combination of stars)."
      ],
      "definitions": [
        {
          "term": "Star Topology",
          "definition": "All network nodes connect independently to a single central device (switch or AP).",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Star%20Topology%2C%20All%20network%20nodes%20connect%20independently%20to%20a%20single%20central%20device%20switch%20or%20AP%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=143"
        },
        {
          "term": "Bus Topology",
          "definition": "Legacy arrangement where nodes share a single central trunk cable with terminators.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Bus%20Topology%2C%20Legacy%20arrangement%20where%20nodes%20share%20a%20single%20central%20trunk%20cable%20with%20terminators%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=144"
        },
        {
          "term": "Ring Topology",
          "definition": "Nodes connect sequentially in a continuous loop, passing tokens in one direction.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Ring%20Topology%2C%20Nodes%20connect%20sequentially%20in%20a%20continuous%20loop%20passing%20tokens%20in%20one%20direction%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=145"
        },
        {
          "term": "Mesh Topology",
          "definition": "Redundant interconnections between nodes providing multiple path options.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Mesh%20Topology%2C%20Redundant%20interconnections%20between%20nodes%20providing%20multiple%20path%20options%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=146"
        }
      ],
      "examples": [
        "A school computer lab where all 30 computers connect with Ethernet cables into one central 48-port switch (Star).",
        "Subsea fiber cables and core ISP routers forming redundant interconnects across continents (Partial Mesh)."
      ],
      "analogy": "Star topology is like bicycle wheel spokes connecting to a central hub; Bus topology is like houses along a single main street; Mesh is like a web of city roads.",
      "misconception": "Topology describes physical wiring layout, not geographic coverage size. A single office room and a multi-building enterprise can both use star topologies.",
      "review": [
        "Why is Star topology favored over Bus topology in modern home and school network installations?",
        "What is the primary advantage of a Mesh topology in critical environments like military or ISP backbones?"
      ]
    },
    {
      "title": "Network Media Comparison",
      "category": "Transmission Media",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Network%20Media%20Comparison%2C%20Choosing%20between%20copper%20Ethernet%20optical%20fiber%20and%20wireless%20media%20depends%20on%20required%20distance%20bandw%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=147",
        "alt": "AI Generated 3D Technical Diagram for Network Media Comparison",
        "credit": "AI Generated Visual #147"
      },
      "visual": "infrastructure",
      "lead": "Choosing between copper Ethernet, optical fiber, and wireless media depends on required distance, bandwidth, immunity, and budget.",
      "paragraphs": [
        "Copper Ethernet cables (Cat5e, Cat6) use electrical signals. They are inexpensive and flexible, but limited to a maximum distance of 100 meters per segment and susceptible to electromagnetic noise.",
        "Fiber-optic cables use light pulses through glass strands. They support extreme bandwidth over tens of kilometers without electrical interference. Wireless media (radio waves) eliminate physical cables, enabling mobile communication across Wi-Fi, cellular, and satellite links."
      ],
      "definitions": [
        {
          "term": "Copper Cat6",
          "definition": "Standard Ethernet cabling carrying up to 10 Gbps signals up to 55-100 meters.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Copper%20Cat6%2C%20Standard%20Ethernet%20cabling%20carrying%20up%20to%2010%20Gbps%20signals%20up%20to%2055100%20meters%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=148"
        },
        {
          "term": "Single-Mode Fiber",
          "definition": "Fiber-optic cable using narrow laser light beams for multi-kilometer transmission.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20SingleMode%20Fiber%2C%20Fiberoptic%20cable%20using%20narrow%20laser%20light%20beams%20for%20multikilometer%20transmission%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=149"
        },
        {
          "term": "Electromagnetic Interference (EMI)",
          "definition": "Distortion of electrical signals caused by heavy machinery, power lines, or lightning.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Electromagnetic%20Interference%20EMI%2C%20Distortion%20of%20electrical%20signals%20caused%20by%20heavy%20machinery%20power%20lines%20or%20lightning%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=150"
        }
      ],
      "examples": [
        "Using Cat6 copper cables inside a classroom to connect desktops to a switch.",
        "Using fiber-optic backbone cables to link two campus buildings 800 meters apart.",
        "Using satellite links to connect remote island health clinics where cables cannot be laid."
      ],
      "analogy": "Copper is like a city bus (short distance, affordable); Fiber is like a high-speed bullet train (massive volume, long distance); Wireless is like a helicopter (goes anywhere without tracks).",
      "misconception": "Fiber optics do not carry electricity; they carry pure light pulses. Therefore, fiber cables are completely immune to electrical interference and lightning strikes.",
      "review": [
        "Why is copper Ethernet cabling restricted to a maximum length of 100 meters?",
        "Which medium would you recommend to connect two school buildings separated by 2 kilometers? Explain."
      ]
    },
    {
      "title": "Essential Network Devices",
      "category": "Network Hardware",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Essential%20Network%20Devices%2C%20Every%20device%20in%20a%20network%20performs%20a%20specific%20role%20from%20physical%20interfaces%20to%20local%20switches%20access%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=151",
        "alt": "AI Generated 3D Technical Diagram for Essential Network Devices",
        "credit": "AI Generated Visual #151"
      },
      "visual": "infrastructure",
      "lead": "Every device in a network performs a specific role, from physical interfaces to local switches, access points, and boundary routers.",
      "paragraphs": [
        "A Network Interface Card (NIC) allows a device to connect to a medium. A Switch connects devices inside a local network, directing local traffic intelligently using MAC addresses. A Wireless Access Point (AP) converts wired LAN signals into Wi-Fi radio waves.",
        "A Router connects different networks together (such as connecting a school LAN to an ISP). A Modem or Optical Network Terminal (ONT) converts signals from the ISP service line into local Ethernet. A Firewall enforces traffic security rules, and a Server provides central data or applications."
      ],
      "definitions": [
        {
          "term": "NIC",
          "definition": "Network Interface Card: the hardware component giving a device a physical connection and MAC address.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20NIC%2C%20Network%20Interface%20Card%20the%20hardware%20component%20giving%20a%20device%20a%20physical%20connection%20and%20MAC%20address%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=152"
        },
        {
          "term": "Switch",
          "definition": "A local device that forwards frames between devices on the same local network.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Switch%2C%20A%20local%20device%20that%20forwards%20frames%20between%20devices%20on%20the%20same%20local%20network%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=153"
        },
        {
          "term": "Router",
          "definition": "A gateway device that forwards packets between different networks based on IP addresses.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Router%2C%20A%20gateway%20device%20that%20forwards%20packets%20between%20different%20networks%20based%20on%20IP%20addresses%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=154"
        },
        {
          "term": "Modem / ONT",
          "definition": "A device that translates ISP access signals (fiber/copper/cable) into local network traffic.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Modem%20%20ONT%2C%20A%20device%20that%20translates%20ISP%20access%20signals%20fibercoppercable%20into%20local%20network%20traffic%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=155"
        }
      ],
      "examples": [
        "A desktop Ethernet port (NIC) plugged into a classroom wall port.",
        "A 24-port switch in a cabinet linking all classroom computers together.",
        "A home \"Wi-Fi Router\" which combines an AP, switch, router, firewall, and modem into one box."
      ],
      "analogy": "A switch is like a room mailroom sorting letters to desks inside the building; a router is like the city post office forwarding mail between different towns.",
      "misconception": "A home Wi-Fi box is not just one device; it is a composite device combining a router, switch, wireless access point, firewall, and DHCP server in one enclosure.",
      "review": [
        "Explain the distinct roles of a switch, a router, and a modem in a home network.",
        "Why does a computer need a Network Interface Card (NIC) to join a network?"
      ]
    },
    {
      "title": "Building a Home or School Network",
      "category": "Network Architecture",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Building%20a%20Home%20or%20School%20Network%2C%20Combining%20devices%20into%20a%20complete%20topology%20shows%20how%20data%20flows%20from%20user%20endpoints%20out%20to%20the%20ISP%20a%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=156",
        "alt": "AI Generated 3D Technical Diagram for Building a Home or School Network",
        "credit": "AI Generated Visual #156"
      },
      "visual": "infrastructure",
      "lead": "Combining devices into a complete topology shows how data flows from user end-points out to the ISP and Internet.",
      "paragraphs": [
        "In a typical home or school network, host devices (smartphones, laptops, desktops, smart TVs) connect via Wi-Fi to an Access Point or via Ethernet to a Switch.",
        "The switch or access point aggregates local traffic and sends it to the Router. The router evaluates destination addresses, applies firewall rules, and passes outbound traffic to the Modem or ONT, which carries signals over the ISP infrastructure to global destinations."
      ],
      "definitions": [
        {
          "term": "Aggregation",
          "definition": "Combining traffic from multiple local end-user devices into central network paths.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Aggregation%2C%20Combining%20traffic%20from%20multiple%20local%20enduser%20devices%20into%20central%20network%20paths%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=157"
        },
        {
          "term": "Integrated Gateway",
          "definition": "A single consumer box combining router, switch, access point, and modem functions.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Integrated%20Gateway%2C%20A%20single%20consumer%20box%20combining%20router%20switch%20access%20point%20and%20modem%20functions%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=158"
        },
        {
          "term": "Enterprise Layout",
          "definition": "A network separating switches, firewalls, routers, and access points into dedicated hardware.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Enterprise%20Layout%2C%20A%20network%20separating%20switches%20firewalls%20routers%20and%20access%20points%20into%20dedicated%20hardware%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=159"
        }
      ],
      "examples": [
        "Home: Phone -> Wi-Fi AP -> Router -> Fiber ONT -> ISP -> Internet.",
        "School: PC -> Classroom Switch -> Floor Switch -> Central Router -> Firewall -> Fiber Line -> ISP."
      ],
      "analogy": "Building a network is like a tributary river system: small streams (individual devices) join local rivers (switches), which flow into a main river (router) heading to the ocean (Internet).",
      "misconception": "Connecting more devices to home Wi-Fi does not increase your ISP speed; all connected devices share the total bandwidth supplied by the router and ISP line.",
      "review": [
        "Trace the path of data from a school computer to an ISP fiber line, naming every device along the way.",
        "Why do commercial school networks use separate switches and access points instead of single all-in-one home boxes?"
      ]
    },
    {
      "title": "Communication Inside a Local Network",
      "category": "Local Data Flow",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Communication%20Inside%20a%20Local%20Network%2C%20When%20two%20devices%20on%20the%20same%20local%20network%20communicate%20their%20data%20stays%20within%20the%20LAN%20using%20physica%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=160",
        "alt": "AI Generated 3D Technical Diagram for Communication Inside a Local Network",
        "credit": "AI Generated Visual #160"
      },
      "visual": "network",
      "lead": "When two devices on the same local network communicate, their data stays within the LAN using physical MAC address identification.",
      "paragraphs": [
        "If a student on a laptop sends a file to a teacher's desktop on the same school Wi-Fi, the data travels from the laptop to the Access Point, through a Switch, and directly to the teacher's desktop.",
        "This local communication does not cross a router or reach the ISP. Every NIC has a unique physical MAC (Media Access Control) address embedded at the factory. Switches use these MAC addresses to deliver data directly to the intended local destination."
      ],
      "definitions": [
        {
          "term": "MAC Address",
          "definition": "A unique 48-bit physical identifier (e.g. 00:1A:2B:3C:4D:5E) assigned to a network interface card.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20MAC%20Address%2C%20A%20unique%2048bit%20physical%20identifier%20eg%20001A2B3C4D5E%20assigned%20to%20a%20network%20interface%20card%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=161"
        },
        {
          "term": "Local Switching",
          "definition": "Direct forwarding of frames between local ports without sending data outside the local network.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Local%20Switching%2C%20Direct%20forwarding%20of%20frames%20between%20local%20ports%20without%20sending%20data%20outside%20the%20local%20network%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=162"
        },
        {
          "term": "Frame",
          "definition": "A unit of data formatted for local delivery across a physical link using MAC addresses.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Frame%2C%20A%20unit%20of%20data%20formatted%20for%20local%20delivery%20across%20a%20physical%20link%20using%20MAC%20addresses%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=163"
        }
      ],
      "examples": [
        "Sending a file from your laptop to a network printer down the hall using local MAC addressing.",
        "A switch looking up its internal MAC address table to forward a file directly to Port 5 without flooding Port 12."
      ],
      "analogy": "A MAC address is like a student's ID badge inside a school building; it allows instant recognition and hand-to-hand passing of papers within the classroom.",
      "misconception": "Local network communication does not consume Internet data quota. Transferring a 10 GB file between two local PCs uses zero ISP bandwidth.",
      "review": [
        "Trace the local delivery path of a document sent from a student laptop to a local network printer.",
        "What role does a MAC address play when a switch delivers data inside a local network?"
      ]
    },
    {
      "title": "Basic Network Models",
      "category": "Network Models",
      "image": {
        "src": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Basic%20Network%20Models%2C%20Layered%20network%20models%20divide%20the%20complex%20job%20of%20communication%20into%20manageable%20levels%20from%20physical%20%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=164",
        "alt": "AI Generated 3D Technical Diagram for Basic Network Models",
        "credit": "AI Generated Visual #164"
      },
      "visual": "stack",
      "lead": "Layered network models divide the complex job of communication into manageable levels, from physical hardware up to user applications.",
      "paragraphs": [
        "To prevent networking from becoming overwhelmingly complex, computer communication is organized into functional layers. Each layer handles one specific problem and provides services to the layer above it.",
        "A simplified 5-layer model includes: 1) Application (user services like web browsers), 2) Transport (end-to-end delivery rules like TCP), 3) Internet (logical addressing across networks like IP), 4) Link (local link delivery using MAC addresses), and 5) Physical (signals over cables or radio waves)."
      ],
      "definitions": [
        {
          "term": "Layered Architecture",
          "definition": "Dividing networking functions into distinct levels so software and hardware can be designed independently.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Layered%20Architecture%2C%20Dividing%20networking%20functions%20into%20distinct%20levels%20so%20software%20and%20hardware%20can%20be%20designed%20independ%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=165"
        },
        {
          "term": "Application Layer",
          "definition": "The top layer containing user-facing network applications and protocols.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Application%20Layer%2C%20The%20top%20layer%20containing%20userfacing%20network%20applications%20and%20protocols%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=166"
        },
        {
          "term": "Link & Physical Layers",
          "definition": "The bottom layers responsible for local MAC delivery and physical signal transmission.",
          "image": "https://image.pollinations.ai/prompt/3D%20high%20tech%20educational%20diagram%20of%20Link%20%20Physical%20Layers%2C%20The%20bottom%20layers%20responsible%20for%20local%20MAC%20delivery%20and%20physical%20signal%20transmission%2C%20dark%20technical%20background%2C%20sleek%20digital%20aesthetic%2C%20crisp%204k%20resolution?width=1280&height=720&nologo=true&seed=167"
        }
      ],
      "examples": [
        "A web browser generating a request at Layer 5, which is formatted, addressed, and converted into light pulses at Layer 1."
      ],
      "analogy": "Network layers are like an international shipping company: translators write the message, logistics plans the route, couriers label boxes, and drivers operate trucks.",
      "misconception": "Network layers are not physical components inside a computer; they are conceptual software and hardware abstractions that organize standards.",
      "review": [
        "Name the five layers of the simplified network model and state the primary question each layer answers.",
        "Why is a layered design beneficial for hardware manufacturers and software developers?"
      ]
    }
  ],
  "activity": {
    "title": "Paper-Based & Conceptual Network Activities",
    "intro": "Construct, classify, and role-play computer network concepts using physical diagrams, role cards, and scenario analysis.",
    "tasks": [
      {
        "title": "Task 1: The Human Network (Role-Play)",
        "scenario": "A school classroom represents a complete local and connected network environment.",
        "prompt": "Assign student roles: Laptop, Smartphone, Printer, Switch, Access Point, Router, Local Server, and ISP. Use string to represent cable links. Role-play data movement for: A) Printing a file locally; B) Fetching a file from the local server; C) Accessing an Internet website. Move physical paper \"data packets\" along the string paths.",
        "response": "Submit a summary explaining which roles were involved in local transfers versus which roles were required for Internet traffic.",
        "rationale": "Physical role-playing builds an intuitive mental model of local switching versus router gateway forwarding."
      },
      {
        "title": "Task 2: Classify the Network",
        "scenario": "Analyze four distinct real-world networking setups.",
        "prompt": "Classify each scenario by Coverage (PAN/LAN/WLAN/CAN/WAN), Medium (Wired/Wireless), Architecture (P2P/Client-Server), Access (Intranet/Extranet/Public), and Topology (Star/Mesh): 1) 25 PCs in a school lab plugged into a switch with a file server; 2) A student listening to phone audio on Bluetooth headphones; 3) A parent logging into a school grade portal from home; 4) Bank branches across provinces sharing a central database.",
        "response": "Write a classification table accurately assigning all 5 attributes to each of the four scenarios.",
        "rationale": "Practicing multi-dimensional classification reinforces that network terms describe different properties rather than mutually exclusive choices."
      },
      {
        "title": "Task 3: Construct a Campus Network Layout",
        "scenario": "A college campus needs a network linking 4 buildings: Administration, Library, Computer Lab, and Server Room.",
        "prompt": "Draw a complete network diagram showing: end-user PCs, laptops, classroom switches, wireless access points, building switches, the campus core router, firewall, and ISP ONT connection. Label wired Ethernet links, fiber-optic inter-building backbones, and Wi-Fi zones.",
        "response": "Submit a labeled architectural diagram with a written key explaining the job of every device and cable medium chosen.",
        "rationale": "Designing a campus layout integrates topology, media selection, and device hierarchy into a single practical project."
      },
      {
        "title": "Task 4: Local or Internet Analysis",
        "scenario": "Determine connectivity requirements for daily computing activities.",
        "prompt": "Analyze these six tasks: 1) Printing a document to a USB-connected printer; 2) Printing to a Wi-Fi classroom printer; 3) Opening a school intranet document; 4) Watching a YouTube video; 5) Sending a file over Bluetooth; 6) Backing up photos to Google Drive. Specify whether each task requires: A Direct Connection, a Local Network (LAN), or the Public Internet.",
        "response": "Provide a categorized checklist with brief explanations justifying why the Internet is or is not required for each task.",
        "rationale": "Distinguishing local LAN actions from Internet actions corrects the common misconception that all network tasks require the Internet."
      }
    ],
    "reflection": [
      "Why can a school computer lab continue to share files locally even when the ISP Internet connection is down?",
      "How does a Star topology prevent a single broken cable from bringing down an entire classroom network?",
      "What is the fundamental functional difference between a local Switch and a boundary Router?"
    ]
  },
  "quiz": [
    {
      "category": "Communication Model",
      "image": {
        "src": "assets/images/network_switch_rack.jpg?ai_id=16",
        "alt": "AI 3D network technical diagram",
        "credit": "AI Generated 3D Technical Diagram"
      },
      "question": "In the basic communication model, what represents the physical path over which data travels?",
      "options": [
        "Transmission medium",
        "Protocol rules",
        "Application server",
        "Binary payload"
      ],
      "answer": 0,
      "explanation": "The transmission medium (copper cable, optical fiber, or radio waves) is the physical path carrying data signals."
    },
    {
      "category": "Signals",
      "question": "How does a fiber-optic cable transmit binary data between network devices?",
      "options": [
        "Using rapid pulses of light down glass strands",
        "Using varying electrical voltage levels over copper",
        "Using high-frequency radio waves in free space",
        "Using magnetic field pulses across twisted wires"
      ],
      "answer": 0,
      "explanation": "Fiber-optic cables carry binary 1s and 0s as pulses of light generated by lasers or LEDs."
    },
    {
      "category": "Network Definition",
      "question": "Which statement correctly defines a computer network?",
      "options": [
        "A group of connected devices that can communicate and share resources",
        "A single powerful computer running multiple web applications",
        "A global collection of websites accessed only through web browsers",
        "A physical cable that connects a computer directly to a power outlet"
      ],
      "answer": 0,
      "explanation": "A computer network is defined as two or more connected devices capable of communicating and sharing data or resources."
    },
    {
      "category": "Network vs Internet",
      "question": "Can a local computer network (LAN) function if its Internet connection is disconnected?",
      "options": [
        "Yes, devices can still communicate and share local files and printers.",
        "No, all local devices immediately shut down without Internet access.",
        "No, switches require active ISP signals to forward local data.",
        "Yes, but only if all devices are connected using Bluetooth."
      ],
      "answer": 0,
      "explanation": "Local networks operate independently for internal file sharing and printing even without external Internet access."
    },
    {
      "category": "Coverage Types",
      "question": "Which network coverage type describes a small network surrounding an individual person, such as a phone connected to earbuds?",
      "options": [
        "Personal Area Network (PAN)",
        "Local Area Network (LAN)",
        "Metropolitan Area Network (MAN)",
        "Wide Area Network (WAN)"
      ],
      "answer": 0,
      "explanation": "A PAN (Personal Area Network) spans a few meters around a single user, commonly using Bluetooth."
    },
    {
      "category": "Coverage Types",
      "question": "A college connects its registrar, library, computer lab, and administration buildings together. What type of network is this?",
      "options": [
        "Campus Area Network (CAN)",
        "Personal Area Network (PAN)",
        "Metropolitan Area Network (MAN)",
        "Wide Area Network (WAN)"
      ],
      "answer": 0,
      "explanation": "A CAN (Campus Area Network) links multiple organizational buildings within a single defined campus area."
    },
    {
      "category": "Classifications",
      "question": "Why is it possible for a school network to be described as a LAN, Wireless, Client-Server, and Star topology at the same time?",
      "options": [
        "Because those terms describe different dimensions: size, medium, architecture, and wiring layout.",
        "Because all networking terms are interchangeable synonyms.",
        "Because modern networks automatically change their classification every hour.",
        "Because Wi-Fi networks do not use physical network devices."
      ],
      "answer": 0,
      "explanation": "Network classifications answer different questions (size, medium, architecture, topology) and describe different aspects of one network."
    },
    {
      "category": "Media",
      "question": "What is a major advantage of wired Ethernet cabling compared to wireless Wi-Fi?",
      "options": [
        "Higher connection stability and immunity to radio interference",
        "Complete freedom of physical movement across buildings",
        "Zero physical cabling installation requirements",
        "Automatic compatibility with cellular towers"
      ],
      "answer": 0,
      "explanation": "Wired Ethernet links provide consistent, predictable performance and are immune to environmental radio interference."
    },
    {
      "category": "Architecture",
      "question": "In a Client-Server network architecture, what is the primary role of a server?",
      "options": [
        "To host centralized data, services, or applications and fulfill client requests",
        "To connect wirelessly to nearby Bluetooth accessories",
        "To act as a physical cable carrying electrical signals between rooms",
        "To generate web pages automatically without user requests"
      ],
      "answer": 0,
      "explanation": "Servers hold centralized resources and process incoming requests sent by user client devices."
    },
    {
      "category": "Network Access",
      "question": "What is an Intranet?",
      "options": [
        "A private network restricted exclusively to members of an organization",
        "A public website accessible to anyone on the Internet",
        "A wireless standard used exclusively by satellite phones",
        "A social media platform for university students"
      ],
      "answer": 0,
      "explanation": "An Intranet uses web standards but restricts access strictly to authorized internal organizational members."
    },
    {
      "category": "Topologies",
      "question": "Which network topology connects all devices to a single central switch or access point?",
      "options": [
        "Star topology",
        "Bus topology",
        "Ring topology",
        "Mesh topology"
      ],
      "answer": 0,
      "explanation": "In a Star topology, every node connects independently to a central device like a switch."
    },
    {
      "category": "Media Limits",
      "question": "What is the maximum standard distance for a single copper Ethernet cable segment before signal degradation occurs?",
      "options": [
        "100 meters",
        "10 meters",
        "1,000 meters",
        "5 kilometers"
      ],
      "answer": 0,
      "explanation": "Standard twisted-pair copper Ethernet (Cat5e/Cat6) is limited to 100 meters per segment."
    },
    {
      "category": "Network Devices",
      "question": "Which network device is specifically responsible for connecting devices inside the same local network and forwarding data using MAC addresses?",
      "options": [
        "Switch",
        "Router",
        "Modem",
        "Optical Network Terminal"
      ],
      "answer": 0,
      "explanation": "Switches connect local devices together and forward frames based on physical MAC addresses."
    },
    {
      "category": "Network Devices",
      "question": "What is the main functional difference between a switch and a router?",
      "options": [
        "Switches connect devices inside a network; routers connect different networks together.",
        "Switches use radio waves; routers only use copper cables.",
        "Switches assign domain names; routers store website files.",
        "Switches are used in homes; routers are only used underwater."
      ],
      "answer": 0,
      "explanation": "Switches handle intra-network communication within a LAN; routers bridge and forward traffic between separate networks."
    },
    {
      "category": "Local Addressing",
      "question": "What type of address is permanently built into a Network Interface Card (NIC) at the factory for local link delivery?",
      "options": [
        "MAC address",
        "IP address",
        "Domain name",
        "Port number"
      ],
      "answer": 0,
      "explanation": "A MAC (Media Access Control) address is a permanent physical identifier assigned to a NIC hardware interface."
    }
  ],
  "summary": {
    "intro": "Internet Part 1 establishes the foundational mental model of computer networking: how individual devices convert binary data into physical signals, connect through media, arrange in topologies, and share resources locally.",
    "points": [
      "Communication requires a sender, receiver, message, medium, protocol rules, and feedback.",
      "Computers convert binary data into electrical voltages (copper), light pulses (fiber), or radio waves (wireless).",
      "A computer network is a group of connected devices sharing data and resources; it does not require the Internet to function locally.",
      "Networks are classified by coverage area: PAN (person), LAN/WLAN (building), CAN (campus), MAN (city), WAN (wide area), and Internet (global).",
      "A network is simultaneously classified by coverage, medium (wired/wireless), architecture (P2P/client-server), access (intranet/extranet/public), and topology (star/bus/ring/mesh).",
      "The Star topology is standard for modern LANs because a single cable fault affects only one device.",
      "Key devices perform distinct roles: NIC (interface), Switch (local LAN forwarding), Access Point (wireless connection), Router (inter-network gateway), Modem/ONT (ISP translation), and Firewall (security enforcement).",
      "Switches use MAC addresses to deliver frames locally inside a LAN without needing Internet routing."
    ],
    "review": [
      "Explain how data moves from a laptop through an access point and switch to a local file server.",
      "Differentiate between a LAN, an Intranet, and the public Internet.",
      "Describe why a home \"Wi-Fi box\" is actually a composite device combining multiple network roles."
    ],
    "next": "Proceed to Internet Part 2: How the Internet & Web Work to learn how local networks connect to ISPs, route packets across global networks, resolve DNS, and execute web requests."
  }
};
