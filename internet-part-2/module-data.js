window.CC101_MODULE_DATA = {
  "id": "internet-part-2",
  "courseTitle": "Introduction to Computing",
  "title": "Internet Part 2",
  "subtitle": "How the Internet & Web Work",
  "description": "Follow the complete journey of data across the global Internet: learn about IP addressing, DHCP, NAT, packets, routing, DNS, protocols, HTTP, HTTPS, website journeys, performance metrics, Internet security, and systematic troubleshooting.",
  "objectives": [
    "Define the Internet and distinguish it from the World Wide Web and other Internet services.",
    "Describe the physical infrastructure of the global Internet, including undersea cables and data centers.",
    "Explain how Internet Service Providers (ISPs) connect customer networks to the wider Internet.",
    "Trace how a device joins a network and receives IP, subnet, gateway, and DNS configuration via DHCP.",
    "Distinguish MAC addresses, IP addresses, domain names, URLs, and port numbers.",
    "Differentiate between IPv4 and IPv6, public and private IP addresses, NAT, and default gateways.",
    "Describe packet structures, packet switching, router hops, TTL, and autonomous system routing.",
    "Explain network protocols, the TCP/IP model, encapsulation, and TCP vs UDP transport.",
    "Dissect URLs, domain names, HTTP requests, HTTP methods, status codes, HTTPS, and certificates.",
    "Trace the complete 14-stage journey of entering a URL through to final browser page rendering.",
    "Explain client-server-database architecture, webpage components, cookies, sessions, caching, hosting, and CDNs.",
    "Evaluate Internet performance metrics (bandwidth, throughput, latency, jitter, packet loss) and bottlenecks.",
    "Apply basic Internet security practices and perform systematic troubleshooting using diagnostic commands."
  ],
  "lessons": [
    {
      "title": "What Is the Internet?",
      "category": "Internet Infrastructure",
      "visual": "network",
      "lead": "The Internet is a global system of interconnected networks that communicate using shared technical standards.",
      "paragraphs": [
        "The Internet is not a single giant computer, a single company, or a cloud in the sky. It is a vast global infrastructure connecting millions of independent networks operated by ISPs, universities, governments, and corporations.",
        "These independent networks communicate seamlessly because they all adhere to the same open protocols (the TCP/IP suite). No central authority owns or controls the entire Internet."
      ],
      "definitions": [
        {
          "term": "The Internet",
          "definition": "The global system of interconnected computer networks communicating via TCP/IP.",
          "image": "assets/images/slide_1_term_1.jpg"
        },
        {
          "term": "Interconnection",
          "definition": "The physical and logical linking of separate networks so data can cross between them.",
          "image": "assets/images/slide_1_term_2.jpg"
        },
        {
          "term": "Open Standards",
          "definition": "Publicly available technical rules that allow equipment from different manufacturers to communicate.",
          "image": "assets/images/slide_1_term_3.jpg"
        }
      ],
      "examples": [
        "A student in the Philippines accessing a research file stored on a server in Germany.",
        "Thousands of independent Internet providers peering at Internet Exchange Points (IXPs) to exchange traffic."
      ],
      "analogy": "The Internet is like the global postal and highway system: independent city roads and national highways connected by bridges so trucks can deliver cargo worldwide.",
      "misconception": "The Internet is not Google, Facebook, or Wi-Fi. Those are applications, companies, or access methods operating over the Internet.",
      "review": [
        "Summarize three core ideas that define what the Internet is.",
        "Why does no single company or government control or own the entire Internet?"
      ],
      "image": {
        "src": "assets/images/slide_1_main.jpg",
        "alt": "What Is the Internet? Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Internet Versus World Wide Web",
      "category": "Internet Infrastructure",
      "visual": "web",
      "lead": "The Internet is the physical and logical network infrastructure; the Web is just one of many services running on top of it.",
      "paragraphs": [
        "People often use the terms \"Internet\" and \"Web\" interchangeably, but they are distinct. The Internet is the underlying network infrastructure (cables, routers, packets, IP addressing).",
        "The World Wide Web (Web) is an application-layer service composed of interlinked documents (webpages) accessed using web browsers via HTTP/HTTPS. Other Internet services include email (SMTP/IMAP), online gaming, video calling, file transfer (FTP), and streaming."
      ],
      "definitions": [
        {
          "term": "World Wide Web (Web)",
          "definition": "An application service of linked web documents accessed via web browsers.",
          "image": "assets/images/slide_2_term_1.jpg"
        },
        {
          "term": "Internet Service",
          "definition": "An application or system (like email or VoIP) running over Internet infrastructure.",
          "image": "assets/images/slide_2_term_2.jpg"
        },
        {
          "term": "HTTP / HTTPS",
          "definition": "The primary web protocols used to transfer web pages and secure web communications.",
          "image": "assets/images/slide_2_term_3.png"
        }
      ],
      "examples": [
        "Using a web browser to view wikipedia.org uses the World Wide Web.",
        "Playing an online game or making a Zoom video call uses the Internet, but does not use the Web."
      ],
      "analogy": "The Internet is the physical railway network; the Web is one passenger train service using those tracks alongside freight trains (email) and express trains (streaming).",
      "misconception": "The Web is not the entire Internet. If all web servers went down, email systems and online games would continue operating over the Internet.",
      "review": [
        "Differentiate between the Internet and the World Wide Web.",
        "List four Internet services that do not rely on web browsers or web pages."
      ],
      "image": {
        "src": "assets/images/slide_2_main.jpg",
        "alt": "Internet Versus World Wide Web Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Physical Internet Infrastructure",
      "category": "Physical Infrastructure",
      "visual": "infrastructure",
      "lead": "The Internet may feel invisible, but it depends on massive physical hardware spanning land and ocean floors.",
      "paragraphs": [
        "The Internet is anchored in real physical hardware: fiber-optic cables, copper lines, cell towers, satellite links, high-speed routers, and massive data centers.",
        "Over 95% of international Internet traffic travels through subsea fiber-optic cables laid across ocean floors. Data centers house thousands of servers running continuous web and cloud services."
      ],
      "definitions": [
        {
          "term": "Subsea Cable",
          "definition": "Fiber-optic cables laid on the seabed carrying international Internet traffic between continents.",
          "image": "assets/images/slide_3_term_1.png"
        },
        {
          "term": "Data Center",
          "definition": "A dedicated facility housing computer servers, storage systems, and networking gear.",
          "image": "assets/images/slide_3_term_2.jpg"
        },
        {
          "term": "Internet Exchange Point (IXP)",
          "definition": "A physical facility where different ISPs connect to exchange Internet traffic directly.",
          "image": "assets/images/slide_3_term_3.jpg"
        }
      ],
      "examples": [
        "Subsea fiber cables connecting the Philippines to Japan and the United States across the Pacific Ocean.",
        "Cloud data centers equipped with backup generators, precision cooling, and high-speed fiber backbones."
      ],
      "analogy": "Subsea cables are the transoceanic shipping lanes of the digital world, carrying massive container ships of light pulses 24/7.",
      "misconception": "Most international Internet traffic does not travel via satellites. Undersea fiber-optic cables carry more than 95% of global data because they are far faster and have higher capacity.",
      "review": [
        "What physical medium carries almost all international Internet data across oceans?",
        "What is the purpose of an Internet Exchange Point (IXP)?"
      ],
      "image": {
        "src": "assets/images/slide_3_main.jpg",
        "alt": "Physical Internet Infrastructure Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Internet Service Providers (ISPs)",
      "category": "ISP & Access",
      "visual": "infrastructure",
      "lead": "An Internet Service Provider links homes, schools, and businesses to the wider global Internet infrastructure.",
      "paragraphs": [
        "An Internet Service Provider (ISP) operates telecommunication infrastructure to connect customers to global networks. Customer connection technologies include fiber-to-the-home (FTTH), cable broadband, DSL, fixed wireless, cellular (4G/5G), and satellite.",
        "ISPs assign IP addresses, route customer packets, maintain backbone connections, and peer with other service providers so traffic can reach any destination globally."
      ],
      "definitions": [
        {
          "term": "ISP",
          "definition": "Internet Service Provider: a commercial or public entity providing Internet access.",
          "image": "assets/images/slide_4_term_1.png"
        },
        {
          "term": "FTTH",
          "definition": "Fiber To The Home: delivering optical fiber lines directly into customer residences.",
          "image": "assets/images/slide_4_term_2.png"
        },
        {
          "term": "Peering",
          "definition": "An agreement between two ISPs to exchange network traffic freely.",
          "image": "assets/images/slide_4_term_3.png"
        }
      ],
      "examples": [
        "A home user connecting to the Internet via a fiber ONT installed by a local telecommunications provider.",
        "Tier-1 ISPs carrying backbone traffic across continents without paying for transit."
      ],
      "analogy": "An ISP is like a local ramp onto the international highway system; it provides your ramp pass and connects your local driveway to interstate highways.",
      "misconception": "Paying for a faster ISP plan increases your connection speed to the Internet, but it cannot speed up a slow or overloaded remote web server.",
      "review": [
        "List three major access technologies used by ISPs to connect customer homes.",
        "Explain the core responsibilities of an ISP."
      ],
      "image": {
        "src": "assets/images/slide_4_main.jpg",
        "alt": "Internet Service Providers (ISPs) Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "How a Device Joins a Network",
      "category": "Network Joining",
      "visual": "configuration",
      "lead": "A device cannot send Internet traffic until it activates its interface, authenticates, and receives valid network configuration.",
      "paragraphs": [
        "When a device connects to Ethernet or associates with Wi-Fi, it must complete a setup sequence before sending Internet packets.",
        "The device receives four key network configuration settings: 1) Its own local IP address, 2) A Subnet mask (identifying local vs remote destinations), 3) A Default Gateway address (the local router), and 4) A DNS Resolver address (for name lookups)."
      ],
      "definitions": [
        {
          "term": "Network Association",
          "definition": "Establishing a link layer connection between a wireless device and an Access Point.",
          "image": "assets/images/slide_5_term_1.jpg"
        },
        {
          "term": "Network Configuration",
          "definition": "The set of network parameters (IP, Subnet, Gateway, DNS) required for IP communication.",
          "image": "assets/images/slide_5_term_2.jpg"
        },
        {
          "term": "Subnet Mask",
          "definition": "A network value used by a device to determine whether a target IP is on the local LAN or a remote network.",
          "image": "assets/images/slide_5_term_3.jpg"
        }
      ],
      "examples": [
        "A smartphone associating with school Wi-Fi and receiving an IP address (192.168.1.45) within seconds.",
        "A desktop computer using its subnet mask to decide whether to send data directly to a local printer or to the default gateway."
      ],
      "analogy": "Joining a network is like checking into a conference: you receive a temporary badge (IP address), a room map (subnet mask), an exit door location (gateway), and a help desk contact (DNS).",
      "misconception": "Connecting to Wi-Fi does not automatically guarantee Internet access. If the router has no active ISP line, your device joins the local network but cannot reach the Internet.",
      "review": [
        "State the four essential configuration settings a device must receive upon joining a network.",
        "How does a device use its subnet mask to decide where to send a packet?"
      ],
      "image": {
        "src": "assets/images/slide_5_main.jpg",
        "alt": "How a Device Joins a Network Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "DHCP (Dynamic Host Configuration Protocol)",
      "category": "Network Configuration",
      "visual": "configuration",
      "lead": "DHCP automates network configuration, granting temporary IP leases to devices as they join and leave.",
      "paragraphs": [
        "Without DHCP, network administrators would have to manually type IP addresses, gateways, and DNS settings into every smartphone and laptop. DHCP automates this entire process.",
        "The DHCP lease process follows the DORA sequence: Discover (client searches for a DHCP server), Offer (server offers settings), Request (client asks for the offered lease), and Acknowledge (server confirms the lease)."
      ],
      "definitions": [
        {
          "term": "DHCP",
          "definition": "Dynamic Host Configuration Protocol: a service that automatically assigns IP configuration to hosts.",
          "image": "assets/images/slide_6_term_1.png"
        },
        {
          "term": "DORA Sequence",
          "definition": "The 4-step DHCP messaging sequence: Discover, Offer, Request, Acknowledge.",
          "image": "assets/images/slide_6_term_2.jpg"
        },
        {
          "term": "Static vs Dynamic IP",
          "definition": "Static IPs are permanent manual assignments; Dynamic IPs are temporary DHCP leases.",
          "image": "assets/images/slide_6_term_3.jpg"
        }
      ],
      "examples": [
        "A laptop receiving a 24-hour IP lease upon connecting to home Wi-Fi.",
        "A school web server assigned a static IP address so its address never changes."
      ],
      "analogy": "DHCP is like a rental car agency counter: when you arrive, they assign you an available car key (IP address) for a specific lease period.",
      "misconception": "DHCP does not create or provide the Internet connection itself; it only provides the configuration parameters your device needs to talk on the network.",
      "review": [
        "Outline the four stages of the DHCP DORA sequence.",
        "Why do servers use static IP addresses while smartphones use dynamic DHCP leases?"
      ],
      "image": {
        "src": "assets/images/slide_6_main.png",
        "alt": "DHCP (Dynamic Host Configuration Protocol) Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Understanding Addresses and Identifiers",
      "category": "Addressing",
      "visual": "addressing",
      "lead": "Different network identifiers solve distinct communication tasks across local links, logical networks, and applications.",
      "paragraphs": [
        "To prevent confusion, network identifiers must be categorized by their specific purpose: MAC Address (local NIC hardware identification), IP Address (logical routing across networks), Domain Name (human-readable service name), URL (complete resource locator), and Port Number (application endpoint).",
        "Together, these identifiers work in harmony: a domain name is translated into an IP address, which routes data across routers to a device, where a port directs it to the right application, and local switches deliver it using MAC addresses."
      ],
      "definitions": [
        {
          "term": "MAC Address",
          "definition": "Physical hardware identifier for local link delivery (e.g. 00:1A:2B:3C:4D:5E).",
          "image": "assets/images/slide_7_term_1.jpg"
        },
        {
          "term": "IP Address",
          "definition": "Logical address used to route packets across global networks (e.g. 172.217.160.206).",
          "image": "assets/images/slide_7_term_2.png"
        },
        {
          "term": "Domain Name",
          "definition": "Human-friendly text name for an IP address (e.g. google.com).",
          "image": "assets/images/slide_7_term_3.png"
        },
        {
          "term": "Port Number",
          "definition": "Transport-layer identifier directing data to a specific software service (e.g. Port 443).",
          "image": "assets/images/slide_7_term_4.jpg"
        }
      ],
      "examples": [
        "MAC Address: Physical delivery inside classroom LAN.",
        "IP Address: Routing across Internet routers.",
        "Domain Name: Typing \"wikipedia.org\" into a browser.",
        "Port 80/443: Directing web traffic to the web server software."
      ],
      "analogy": "IP address is the street building address; Port is the apartment unit number; Domain name is the building name in a directory; MAC address is the local resident serial number.",
      "misconception": "An IP address is not fixed to a physical computer. When you take your laptop from home to school, its MAC address stays the same, but its IP address changes.",
      "review": [
        "Fill in the main purpose for each identifier: MAC address, IP address, Domain name, Port number.",
        "Why can a laptop's IP address change while its MAC address remains unchanged?"
      ],
      "image": {
        "src": "assets/images/slide_7_main.jpg",
        "alt": "Understanding Addresses and Identifiers Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "IPv4 and IPv6",
      "category": "Addressing",
      "visual": "addressing",
      "lead": "The global expansion of Internet devices forced the transition from 32-bit IPv4 addresses to 128-bit IPv6 addresses.",
      "paragraphs": [
        "IPv4 uses 32-bit addresses written as four dotted decimal numbers (e.g., 192.168.1.1). IPv4 provides about 4.3 billion unique addresses. Because billions of smartphones, PCs, IoT devices, and servers connected to the Internet, available IPv4 addresses became exhausted.",
        "IPv6 uses 128-bit addresses written in eight groups of hexadecimal digits (e.g., 2001:0db8:85a3::8a2e:0370:7334). IPv6 provides approximately 3.4 × 10^38 unique addresses—enough to assign trillions of addresses to every person on Earth."
      ],
      "definitions": [
        {
          "term": "IPv4",
          "definition": "32-bit legacy addressing scheme providing ~4.3 billion unique global addresses.",
          "image": "assets/images/slide_8_term_1.png"
        },
        {
          "term": "IPv6",
          "definition": "128-bit modern addressing scheme providing a virtually unlimited address space.",
          "image": "assets/images/slide_8_term_2.png"
        },
        {
          "term": "Hexadecimal Notation",
          "definition": "Base-16 numbering system (0-9, A-F) used to write IPv6 addresses compactly.",
          "image": "assets/images/slide_8_term_3.jpg"
        }
      ],
      "examples": [
        "IPv4 format: 172.217.160.206 (four 8-bit octets).",
        "IPv6 format: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 (eight 16-bit hex blocks)."
      ],
      "analogy": "IPv4 is like a 7-digit phone number system running out of numbers; IPv6 is like upgrading to a 20-digit number system so every molecule can have a phone number.",
      "misconception": "IPv6 is not just \"faster IPv4.\" It is a new IP header format and addressing system designed to restore direct end-to-end global addressing.",
      "review": [
        "Compare IPv4 and IPv6 in terms of bit length, notation format, and address capacity.",
        "Why did the world need IPv6 when IPv4 was already working?"
      ],
      "image": {
        "src": "assets/images/slide_8_main.jpg",
        "alt": "IPv4 and IPv6 Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Public and Private IP Addresses",
      "category": "IP Routing",
      "visual": "addressing",
      "lead": "Private IP addresses are reused inside local networks, while public IP addresses must be globally unique across the Internet.",
      "paragraphs": [
        "Private IP addresses (ranges like 192.168.x.x, 10.x.x.x, 172.16.x.x-172.31.x.x) are reserved exclusively for internal local networks. Internet routers discard private IP packets, allowing millions of homes and schools to reuse the exact same private addresses internally without conflict.",
        "Public IP addresses are globally unique addresses assigned by ISPs. Any server or router directly reachable from the public Internet must have a public IP address."
      ],
      "definitions": [
        {
          "term": "Private IP Address",
          "definition": "An IP address reserved for internal local network use, not routable on the public Internet.",
          "image": "assets/images/slide_9_term_1.jpg"
        },
        {
          "term": "Public IP Address",
          "definition": "A globally unique IP address assigned by ISPs and routable across the public Internet.",
          "image": "assets/images/slide_9_term_2.jpg"
        },
        {
          "term": "RFC 1918",
          "definition": "The Internet standard defining private IP address ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16).",
          "image": "assets/images/slide_9_term_3.jpg"
        }
      ],
      "examples": [
        "Ten students on school Wi-Fi all having private IPs like 192.168.1.15, 192.168.1.16, etc.",
        "A web server hosting google.com assigned a public IP like 172.217.160.206."
      ],
      "analogy": "Private IPs are like internal room numbers inside an office building (Room 101 exists in thousands of buildings); Public IP is the building's unique street address.",
      "misconception": "Private IP addresses cannot be accessed directly from the outside Internet without specific router forwarding or translation.",
      "review": [
        "Why can millions of home networks all use the IP address 192.168.1.1 simultaneously without conflicts?",
        "Differentiate between a public IP address and a private IP address."
      ],
      "image": {
        "src": "assets/images/slide_9_main.jpg",
        "alt": "Public and Private IP Addresses Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Network Address Translation (NAT)",
      "category": "IP Routing",
      "visual": "addressing",
      "lead": "NAT allows an entire local network of devices sharing private IPs to access the Internet using a single public IP address.",
      "paragraphs": [
        "Network Address Translation (NAT) is a technique operated by routers. When a local device (e.g. 192.168.1.50) sends a packet to the Internet, the router replaces the private source IP with its own single public IP address before forwarding it to the ISP.",
        "When the response returns, the router translates the public destination IP back into the original private IP and passes it to the local device. NAT conserved IPv4 addresses for decades, allowing dozens of home devices to share one ISP line."
      ],
      "definitions": [
        {
          "term": "NAT",
          "definition": "Network Address Translation: translating private local IPs into a public IP at the router boundary.",
          "image": "assets/images/slide_10_term_1.jpg"
        },
        {
          "term": "NAT Table",
          "definition": "An internal tracking table in a router mapping local private IPs and ports to outgoing public requests.",
          "image": "assets/images/slide_10_term_2.jpg"
        },
        {
          "term": "Address Conservation",
          "definition": "Using NAT to allow thousands of internal hosts to share a single public IPv4 address.",
          "image": "assets/images/slide_10_term_3.jpg"
        }
      ],
      "examples": [
        "Five smartphones and three laptops on home Wi-Fi sharing one public IP assigned by the ISP.",
        "A router NAT table keeping track of which phone requested a specific web page image so the reply goes to the right phone."
      ],
      "analogy": "NAT is like a corporate receptionist: all employees send outbound mail through the receptionist, who signs the company main return address on the outside envelopes.",
      "misconception": "NAT is an address translation mechanism, not a security firewall. While it hides private IPs, security requires proper firewall rules.",
      "review": [
        "Explain how NAT allows 20 school laptops to share a single public ISP connection.",
        "What information does a router store in its NAT table to ensure incoming responses reach the correct local device?"
      ],
      "image": {
        "src": "assets/images/slide_10_main.png",
        "alt": "Network Address Translation (NAT) Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Default Gateway",
      "category": "IP Routing",
      "visual": "routing",
      "lead": "The Default Gateway is the local router interface that host devices send traffic to whenever a destination is outside their local network.",
      "paragraphs": [
        "When a device wants to send a packet, it compares the destination IP address with its own IP and subnet mask. If the destination is on the same local network, it delivers the packet directly using a switch and MAC address.",
        "If the destination is on a remote network (like an Internet web server), the device forwards the packet to its configured Default Gateway—the local router interface. The default gateway acts as the exit door from the LAN to the outside world."
      ],
      "definitions": [
        {
          "term": "Default Gateway",
          "definition": "The router interface IP address used by local hosts to reach non-local destinations.",
          "image": "assets/images/slide_11_term_1.jpg"
        },
        {
          "term": "Local vs Remote Routing",
          "definition": "Direct MAC delivery for local subnets; Default Gateway forwarding for remote IP networks.",
          "image": "assets/images/slide_11_term_2.jpg"
        },
        {
          "term": "Gateway Address",
          "definition": "Typically the first or last IP in a local subnet (e.g. 192.168.1.1).",
          "image": "assets/images/slide_11_term_3.jpg"
        }
      ],
      "examples": [
        "A laptop sending a document to a local printer (192.168.1.20) directly without using the gateway.",
        "A laptop sending a request to google.com (172.217.160.206) by forwarding it to default gateway 192.168.1.1."
      ],
      "analogy": "The default gateway is like the airport departure gate: for local errands in your city, you drive local streets; for international travel, you go to the departure gate.",
      "misconception": "If your device's default gateway setting is incorrect, you can still communicate with local computers on your LAN, but you cannot reach any Internet website.",
      "review": [
        "What decision does a computer make before deciding to send a packet to its default gateway?",
        "What happens to Internet connectivity if a user manually enters an incorrect default gateway IP?"
      ],
      "image": {
        "src": "assets/images/slide_11_main.jpg",
        "alt": "Default Gateway Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Packets",
      "category": "Packet Switching",
      "visual": "packets",
      "lead": "Data travels across the Internet broken into small, structured units called packets, allowing networks to carry shared traffic efficiently.",
      "paragraphs": [
        "Messages (webpages, photos, emails) are not transmitted as single unbroken blocks. They are broken down into small units called packets (typically ~1,500 bytes each).",
        "Every packet consists of two main parts: 1) A Header (containing source IP, destination IP, protocol type, packet sequence number, and Time to Live), and 2) A Payload (the actual slice of user file data)."
      ],
      "definitions": [
        {
          "term": "Packet",
          "definition": "A formatted block of data carried by a packet-switched network.",
          "image": "assets/images/slide_12_term_1.jpg"
        },
        {
          "term": "Header",
          "definition": "Control metadata attached to the front of a packet carrying delivery and protocol instructions.",
          "image": "assets/images/slide_12_term_2.png"
        },
        {
          "term": "Payload",
          "definition": "The actual user data content carried inside a packet.",
          "image": "assets/images/slide_12_term_3.jpg"
        },
        {
          "term": "MTU",
          "definition": "Maximum Transmission Unit: the largest packet payload size (usually 1500 bytes) allowed on a link.",
          "image": "assets/images/slide_12_term_4.jpg"
        }
      ],
      "examples": [
        "A 3 MB photo file divided into approximately 2,000 separate packets for transmission.",
        "A packet header containing source IP 192.168.1.15 and destination IP 172.217.160.206."
      ],
      "analogy": "Packets are like sending a 500-page book through the mail by ripping out each page, putting it in a numbered envelope with source and return addresses, and mailing them.",
      "misconception": "Packets do not all have to travel along the exact same wire or arrive in perfect order. The receiving computer uses packet sequence numbers in headers to reassemble them.",
      "review": [
        "Identify the two primary parts of a network packet and state what each part contains.",
        "Why are large files split into small packets rather than sent as one continuous stream?"
      ],
      "image": {
        "src": "assets/images/slide_12_main.jpg",
        "alt": "Packets Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Packet Switching",
      "category": "Packet Switching",
      "visual": "packets",
      "lead": "The Internet uses packet switching, dynamically forwarding independent packets across available network paths without reserving dedicated circuits.",
      "paragraphs": [
        "In legacy telephone systems (circuit switching), a dedicated physical wire was reserved for the entire duration of a call. The Internet uses Packet Switching: data is split into packets, and each packet is routed independently by intermediate routers based on real-time traffic conditions.",
        "Because packets take independent paths, they may arrive out of order, experience variable delays, or occasionally get dropped due to network congestion. Receiving systems use transport protocols to reorder and request missing packets."
      ],
      "definitions": [
        {
          "term": "Packet Switching",
          "definition": "A communication method where packets are routed independently across shared network links.",
          "image": "assets/images/slide_13_term_1.jpg"
        },
        {
          "term": "Circuit Switching",
          "definition": "Legacy method where a dedicated physical circuit was reserved between two endpoints.",
          "image": "assets/images/slide_13_term_2.png"
        },
        {
          "term": "Dynamic Routing",
          "definition": "Routers dynamically choosing optimal paths for each packet based on current network health.",
          "image": "assets/images/slide_13_term_3.png"
        }
      ],
      "examples": [
        "Packets of a single video call taking three different fiber paths across the country and reassembling seamlessly.",
        "Routers automatically redirecting remaining packets around a severed optical cable link."
      ],
      "analogy": "Circuit switching is like renting a private train track for one train; packet switching is like cars sharing a public highway system taking different GPS routes.",
      "misconception": "Packet switching does not guarantee that packets arrive in order. Ordering and missing packet recovery are handled by upper transport protocols like TCP.",
      "review": [
        "Contrast packet switching with circuit switching.",
        "State two major advantages of packet switching for global computer networks."
      ],
      "image": {
        "src": "assets/images/slide_13_main.jpg",
        "alt": "Packet Switching Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Routers and Routing Paths",
      "category": "Routing",
      "visual": "routing",
      "lead": "Routers examine destination IP addresses and forward packets hop-by-hop toward their target across interconnected autonomous networks.",
      "paragraphs": [
        "A router is an intelligent networking device that connects separate networks. When a router receives a packet, it inspects the destination IP address in the header, consults its internal Routing Table, and forwards the packet to the optimal Next Hop router.",
        "Each router decrements the packet's Time to Live (TTL) counter by 1. If TTL hits zero, the packet is discarded, preventing routing loops from trapping dead packets forever. At the global scale, large autonomous systems exchange routing paths using the Border Gateway Protocol (BGP)."
      ],
      "definitions": [
        {
          "term": "Routing Table",
          "definition": "A database stored in a router listing network paths and next-hop forwarding interfaces.",
          "image": "assets/images/slide_14_term_1.jpg"
        },
        {
          "term": "TTL (Time to Live)",
          "definition": "A packet header counter decremented by each router hop to prevent infinite routing loops.",
          "image": "assets/images/slide_14_term_2.jpg"
        },
        {
          "term": "Autonomous System (AS)",
          "definition": "A large network or group of networks operated by a single organization under a unified routing policy.",
          "image": "assets/images/slide_14_term_3.jpg"
        },
        {
          "term": "BGP",
          "definition": "Border Gateway Protocol: the core routing protocol used to exchange routing info between autonomous systems.",
          "image": "assets/images/slide_14_term_4.png"
        }
      ],
      "examples": [
        "A packet traversing 12 router hops between a home computer in Leyte and a server in California.",
        "A router dropping a misconfigured packet when its TTL reaches 0 and returning an ICMP \"Time Exceeded\" message."
      ],
      "analogy": "Routing is like highway signposts: a signpost in Manila doesn't show every street in Tokyo, but points you toward the next highway interchange heading east.",
      "misconception": "No single super-router controls or knows the entire path across the Internet. Routers operate hop-by-hop, passing packets to neighboring routers.",
      "review": [
        "Explain the role of a router's routing table during packet forwarding.",
        "What is the purpose of the Time to Live (TTL) field in an IP packet header?"
      ],
      "image": {
        "src": "assets/images/slide_14_main.jpg",
        "alt": "Routers and Routing Paths Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Network Protocols",
      "category": "Protocols",
      "visual": "stack",
      "lead": "A protocol is an agreed set of technical rules governing how devices format, transmit, receive, and interpret data.",
      "paragraphs": [
        "Without shared protocols, hardware from different manufacturers or software from different developers could not communicate. Protocols define message structures, addressing formats, error handling, timing, and security.",
        "Key Internet protocols operate at different levels: IP (addressing/routing), TCP (reliable transport), UDP (fast datagrams), DNS (domain resolution), HTTP/HTTPS (web communication), and SMTP/IMAP (email)."
      ],
      "definitions": [
        {
          "term": "Network Protocol",
          "definition": "An agreed set of rules and formats governing data communication between systems.",
          "image": "assets/images/slide_15_term_1.jpg"
        },
        {
          "term": "Interoperability",
          "definition": "The ability of diverse systems and hardware to work together using standardized protocols.",
          "image": "assets/images/slide_15_term_2.jpg"
        },
        {
          "term": "IETF",
          "definition": "Internet Engineering Task Force: the organization that develops and publishes Internet protocol standards (RFCs).",
          "image": "assets/images/slide_15_term_3.jpg"
        }
      ],
      "examples": [
        "An Apple iPhone, a Windows PC, and a Linux web server communicating seamlessly using standard HTTP over TCP/IP.",
        "SMTP governing how email servers transfer messages, while IMAP governs how clients sync inbox folders."
      ],
      "analogy": "Network protocols are like international aviation rules: pilots and air traffic controllers worldwide follow standard English phrases, altitude rules, and signal lights regardless of their home country.",
      "misconception": "Protocols are not computer programs or software code. Protocols are written standards specifications; programs are written to follow those specifications.",
      "review": [
        "Define the term network protocol and explain why standardization is essential for the Internet.",
        "Identify the primary roles of IP, TCP, DNS, and HTTP."
      ],
      "image": {
        "src": "assets/images/slide_15_main.png",
        "alt": "Network Protocols Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "The TCP/IP Model",
      "category": "Models",
      "visual": "stack",
      "lead": "The TCP/IP model organizes network protocols into four functional layers, using encapsulation to prepare data for transmission.",
      "paragraphs": [
        "The TCP/IP framework organizes network communication into four layers: 1) Application Layer (HTTP, DNS, SMTP), 2) Transport Layer (TCP, UDP), 3) Internet Layer (IP, ICMP), and 4) Link/Physical Layer (Ethernet, Wi-Fi).",
        "Encapsulation occurs as data moves down the stack: each layer wraps the payload from the layer above in its own header (e.g. Data -> HTTP -> TCP Segment -> IP Packet -> Ethernet Frame -> Physical Signals). The receiver decapsulates the headers in reverse order."
      ],
      "definitions": [
        {
          "term": "TCP/IP Model",
          "definition": "The 4-layer architectural framework defining Internet communication standards.",
          "image": "assets/images/slide_16_term_1.jpg"
        },
        {
          "term": "Encapsulation",
          "definition": "Adding protocol headers to data as it moves down through protocol layers.",
          "image": "assets/images/slide_16_term_2.jpg"
        },
        {
          "term": "Decapsulation",
          "definition": "Removing protocol headers from received data as it moves up through protocol layers.",
          "image": "assets/images/slide_16_term_3.jpg"
        }
      ],
      "examples": [
        "A browser GET request encapsulated into a TCP segment, then an IP packet, then an Ethernet frame, then light pulses.",
        "A router inspecting only the Layer 3 IP header to make forwarding decisions, ignoring the application payload inside."
      ],
      "analogy": "Encapsulation is like nesting Russian dolls: user data goes inside a TCP box, inside an IP envelope, inside an Ethernet shipping crate.",
      "misconception": "Each layer operates independently. The Application layer does not need to know whether the Link layer is using copper Ethernet, fiber, or Wi-Fi radio waves.",
      "review": [
        "List the four layers of the TCP/IP model from top to bottom.",
        "Describe what happens during encapsulation at the sending device and decapsulation at the receiving device."
      ],
      "image": {
        "src": "assets/images/slide_16_main.jpg",
        "alt": "The TCP/IP Model Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "TCP and UDP Transport Protocols",
      "category": "Transport Protocols",
      "visual": "transport",
      "lead": "The transport layer offers a choice: reliable, ordered delivery with TCP, or lightweight, fast delivery with UDP.",
      "paragraphs": [
        "Transmission Control Protocol (TCP) is connection-oriented and reliable. It performs a 3-way handshake to establish a connection, numbers segments to guarantee in-order delivery, detects lost packets, and retransmits missing data. TCP is used for web pages, file downloads, email, and databases.",
        "User Datagram Protocol (UDP) is connectionless and lightweight. It sends datagrams without establishing a connection, tracking sequence numbers, or retransmitting lost data. UDP is used for real-time applications like voice calls, video streaming, online gaming, and DNS lookups where speed is prioritized over 100% completeness."
      ],
      "definitions": [
        {
          "term": "TCP",
          "definition": "Transmission Control Protocol: connection-oriented, reliable, ordered transport protocol.",
          "image": "assets/images/slide_17_term_1.jpg"
        },
        {
          "term": "UDP",
          "definition": "User Datagram Protocol: connectionless, lightweight, best-effort transport protocol.",
          "image": "assets/images/slide_17_term_2.jpg"
        },
        {
          "term": "3-Way Handshake",
          "definition": "The SYN, SYN-ACK, ACK sequence used by TCP to establish a connection before sending data.",
          "image": "assets/images/slide_17_term_3.jpg"
        }
      ],
      "examples": [
        "Downloading a software installer uses TCP; a single missing bit would corrupt the executable file.",
        "A live Discord voice call or multiplayer game uses UDP; a delayed audio packet is useless and skipped."
      ],
      "analogy": "TCP is like a certified mail delivery requiring a signature and return receipt; UDP is like a postcard thrown into a mailbox without tracking.",
      "misconception": "Do not simply say \"TCP is slow and UDP is fast.\" TCP is highly optimized; UDP's advantage is simply that it does not halt data streams to wait for retransmissions.",
      "review": [
        "Contrast TCP and UDP across connection setup, reliability, packet ordering, and overhead.",
        "Which transport protocol would you select for a banking transaction versus a live sports stream? Explain."
      ],
      "image": {
        "src": "assets/images/slide_17_main.jpg",
        "alt": "TCP and UDP Transport Protocols Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Port Numbers",
      "category": "Ports",
      "visual": "ports",
      "lead": "Port numbers direct network communication to the correct application service running on a target computer.",
      "paragraphs": [
        "An IP address delivers packets to the correct computer, but a computer runs many network applications simultaneously (browser, email client, game, background updates). Port numbers (0 to 65535) identify the specific application software endpoint.",
        "Standard services use Well-Known Ports (0-1023): Port 80 (HTTP web), Port 443 (HTTPS secure web), Port 53 (DNS name lookups), Port 22 (SSH secure terminal), and Port 25 (SMTP email). Clients use temporary dynamic ephemeral ports for outbound requests."
      ],
      "definitions": [
        {
          "term": "Port Number",
          "definition": "A 16-bit transport layer number identifying a specific process or service endpoint.",
          "image": "assets/images/slide_18_term_1.jpg"
        },
        {
          "term": "Well-Known Ports",
          "definition": "Standardized port numbers (0-1023) reserved for recognized global services (80, 443, 53).",
          "image": "assets/images/slide_18_term_2.jpg"
        },
        {
          "term": "Socket",
          "definition": "The combination of an IP address and a Port Number (e.g. 172.217.160.206:443) identifying a unique connection end-point.",
          "image": "assets/images/slide_18_term_3.jpg"
        }
      ],
      "examples": [
        "Web traffic directed to IP 172.217.160.206 at Port 443 for HTTPS.",
        "A browser opening 5 tabs to different websites, each assigned a separate local ephemeral port (e.g. Port 51234, 51235)."
      ],
      "analogy": "IP address is the building street address; Port number is the specific apartment number or office department room.",
      "misconception": "Port 80 and Port 443 are not separate physical plugs on the back of a computer; they are logical software numbers managed by the operating system.",
      "review": [
        "What problem do port numbers solve when a computer runs multiple network applications at the same time?",
        "Identify the standard port numbers for unencrypted HTTP, encrypted HTTPS, and DNS."
      ],
      "image": {
        "src": "assets/images/slide_18_main.jpg",
        "alt": "Port Numbers Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Domain Name System (DNS)",
      "category": "DNS",
      "visual": "webjourney",
      "lead": "DNS acts as the phonebook of the Internet, translating human-readable domain names into machine-routable IP addresses.",
      "paragraphs": [
        "Humans remember readable text names (like wikipedia.org), but routers require numerical IP addresses (like 108.157.4.39). The Domain Name System (DNS) is a distributed database that performs this translation.",
        "When you type a domain name, your device checks: 1) Local browser/OS cache, 2) Recursive DNS Resolver (usually provided by your ISP or 8.8.8.8), which queries 3) Root Name Servers, 4) Top-Level Domain (TLD) Servers (.org, .com), and 5) Authoritative Name Servers to return the IP."
      ],
      "definitions": [
        {
          "term": "DNS",
          "definition": "Domain Name System: a distributed system converting domain names into IP addresses.",
          "image": "assets/images/slide_19_term_1.png"
        },
        {
          "term": "Recursive Resolver",
          "definition": "A DNS server that performs full lookups on behalf of client devices.",
          "image": "assets/images/slide_19_term_2.jpg"
        },
        {
          "term": "Authoritative Name Server",
          "definition": "The official DNS server holding the master record for a specific domain name.",
          "image": "assets/images/slide_19_term_3.jpg"
        }
      ],
      "examples": [
        "Typing \"google.com\" causing a DNS lookup (Port 53 UDP) that returns IP 172.217.160.206.",
        "Caching a DNS result locally for 1 hour so subsequent page visits load instantly without repeated DNS lookups."
      ],
      "analogy": "DNS is like looking up a business name in a contacts directory to find their dialable phone number.",
      "misconception": "DNS does not host or deliver website pages. DNS only provides the target IP address; your browser then connects to that IP to request the webpage.",
      "review": [
        "Explain the core purpose of the Domain Name System (DNS).",
        "Trace the lookup path a DNS resolver follows when finding the IP address of a new domain."
      ],
      "image": {
        "src": "assets/images/slide_19_main.jpg",
        "alt": "Domain Name System (DNS) Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Domain Name Versus URL",
      "category": "Web Mechanics",
      "visual": "webjourney",
      "lead": "A domain name identifies a service host, while a URL provides the complete location and access instructions for a specific resource.",
      "paragraphs": [
        "A Domain Name (e.g., example.com) is a human-readable identifier for a specific server or organization on the network.",
        "A URL (Uniform Resource Locator) is a complete address specifying: Scheme (https://), Host/Domain (example.com), Port (:443), Path (/courses/computing), Query string (?student=123), and Fragment (#section2)."
      ],
      "definitions": [
        {
          "term": "URL",
          "definition": "Uniform Resource Locator: a complete structured web address specifying how and where to fetch a resource.",
          "image": "assets/images/slide_20_term_1.jpg"
        },
        {
          "term": "Scheme",
          "definition": "The access protocol specified at the start of a URL (http, https, ftp).",
          "image": "assets/images/slide_20_term_2.jpg"
        },
        {
          "term": "Path & Query",
          "definition": "Path specifies the resource file location on the server; Query string passes key-value parameters.",
          "image": "assets/images/slide_20_term_3.jpg"
        }
      ],
      "examples": [
        "In https://school.edu:443/grades/report.pdf?term=2#page1:",
        "Scheme: https, Host: school.edu, Port: 443, Path: /grades/report.pdf, Query: ?term=2, Fragment: #page1."
      ],
      "analogy": "Domain name is the name of a library (e.g. Central Library); URL is the exact catalog call number specifying the floor, aisle, shelf, and book page.",
      "misconception": "The fragment part of a URL (#section2) is used locally by the browser to scroll to a heading; it is normally not sent in the HTTP request to the server.",
      "review": [
        "Dissect the URL \"https://store.com/items/search?q=laptop#results\" into its five main components.",
        "What is the structural difference between a domain name and a full URL?"
      ],
      "image": {
        "src": "assets/images/slide_20_main.jpg",
        "alt": "Domain Name Versus URL Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "HTTP (Hypertext Transfer Protocol)",
      "category": "Web Mechanics",
      "visual": "web",
      "lead": "HTTP is an application-layer request-response protocol used for communication between web clients and web servers.",
      "paragraphs": [
        "HTTP governs how web browsers (clients) request documents and how web servers return responses containing web content.",
        "An HTTP exchange consists of a client Request (stating method, URI, headers, and optional body) and a server Response (returning status code, response headers, and content payload)."
      ],
      "definitions": [
        {
          "term": "HTTP",
          "definition": "Hypertext Transfer Protocol: the foundation protocol for client-server web communications.",
          "image": "assets/images/slide_21_term_1.png"
        },
        {
          "term": "Request-Response Cycle",
          "definition": "The cycle where a client initiates a request and a server returns a formatted response.",
          "image": "assets/images/slide_21_term_2.png"
        },
        {
          "term": "HTTP Headers",
          "definition": "Metadata fields carrying client preferences, content type, encoding, and server details.",
          "image": "assets/images/slide_21_term_3.jpg"
        }
      ],
      "examples": [
        "A browser requesting `GET /index.html HTTP/1.1` from a web server.",
        "A web server responding with headers specifying `Content-Type: text/html` followed by HTML code."
      ],
      "analogy": "An HTTP exchange is like ordering at a restaurant: you state your choice from the menu (Request), and the kitchen sends back your dish with an invoice (Response).",
      "misconception": "HTTP is stateless by default. Each request is processed independently without automatically remembering previous requests.",
      "review": [
        "Describe the two main parts of an HTTP request-response cycle.",
        "What role do HTTP headers perform in a web exchange?"
      ],
      "image": {
        "src": "assets/images/slide_21_main.png",
        "alt": "HTTP (Hypertext Transfer Protocol) Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "HTTP Methods",
      "category": "Web Mechanics",
      "visual": "web",
      "lead": "HTTP methods state the client's intended action when requesting a server resource.",
      "paragraphs": [
        "HTTP defines standard request methods: GET (retrieve a resource representation without changing server state), POST (submit data for processing or resource creation), PUT/PATCH (update existing resources), and DELETE (request resource removal).",
        "GET requests should be safe and idempotent, meaning making the same GET request multiple times does not alter server data."
      ],
      "definitions": [
        {
          "term": "HTTP Method",
          "definition": "The action verb in an HTTP request indicating the intended operation.",
          "image": "assets/images/slide_22_term_1.jpg"
        },
        {
          "term": "GET vs POST",
          "definition": "GET retrieves data without modifying state; POST submits data to be processed or created.",
          "image": "assets/images/slide_22_term_2.jpg"
        },
        {
          "term": "Idempotency",
          "definition": "A property where repeating a request multiple times produces the same server state as a single request.",
          "image": "assets/images/slide_22_term_3.jpg"
        }
      ],
      "examples": [
        "Opening a blog post uses `GET /posts/1`.",
        "Submitting a registration form uses `POST /register` with user details in the request body.",
        "Deleting an item uses `DELETE /cart/items/5`."
      ],
      "analogy": "HTTP methods are like library actions: GET is reading a book, POST is donating a new book, PATCH is correcting a typo, DELETE is recycling an old edition.",
      "misconception": "GET form parameters appear in the URL query string, making GET unsuitable for passwords. POST submits data inside the request body.",
      "review": [
        "Compare GET, POST, PATCH, and DELETE in terms of intent and server impact.",
        "Why should sensitive password submissions use POST rather than GET?"
      ],
      "image": {
        "src": "assets/images/slide_22_main.jpg",
        "alt": "HTTP Methods Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "HTTP Status Codes",
      "category": "Web Mechanics",
      "visual": "web",
      "lead": "HTTP status codes are three-digit numbers returned by servers to summarize the outcome of a client request.",
      "paragraphs": [
        "Status codes are grouped into five ranges: 1xx (Informational), 2xx (Success, e.g. 200 OK), 3xx (Redirection, e.g. 301 Moved Permanently), 4xx (Client Error, e.g. 404 Not Found, 401 Unauthorized), and 5xx (Server Error, e.g. 500 Internal Server Error, 503 Service Unavailable).",
        "Recognizing these categories helps users and developers quickly diagnose whether a problem lies in the request, authentication, server code, or network."
      ],
      "definitions": [
        {
          "term": "Status Code",
          "definition": "A 3-digit numerical response code summarizing request processing results.",
          "image": "assets/images/slide_23_term_1.jpg"
        },
        {
          "term": "200 OK",
          "definition": "Standard response code indicating the request succeeded and content is returned.",
          "image": "assets/images/slide_23_term_2.jpg"
        },
        {
          "term": "404 Not Found",
          "definition": "Client error code indicating the requested URI path was not found on the server.",
          "image": "assets/images/slide_23_term_3.jpg"
        },
        {
          "term": "500 Internal Server Error",
          "definition": "Server error code indicating an unexpected crash or fault in backend server code.",
          "image": "assets/images/slide_23_term_4.jpg"
        }
      ],
      "examples": [
        "200 OK when a web page loads successfully.",
        "301 Moved Permanently when a website redirects `http://` to `https://`.",
        "404 Not Found when typing a misspelled URL path.",
        "500 Server Error when a database crash prevents the server from generating a page."
      ],
      "analogy": "Status codes are like store clerk responses: 200 is handing you the item; 301 is directing you to their new branch; 404 is stating they don't stock that item; 500 is the register breaking down.",
      "misconception": "A 404 Not Found response proves the network connection worked! You reached the server successfully; the server simply could not find that specific path.",
      "review": [
        "Identify the five broad ranges of HTTP status codes and state what each range represents.",
        "Explain why receiving a 404 error proves your Internet connection is working."
      ],
      "image": {
        "src": "assets/images/slide_23_main.jpg",
        "alt": "HTTP Status Codes Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "HTTPS, Encryption, and Certificates",
      "category": "Security Basics",
      "visual": "privacy",
      "lead": "HTTPS encrypts web traffic using Transport Layer Security (TLS) and authenticates server identity with digital certificates.",
      "paragraphs": [
        "Plain HTTP transmits data in unencrypted cleartext, allowing attackers on public Wi-Fi to read passwords or cookies. HTTPS encrypts all communication between browser and server using TLS encryption.",
        "During the TLS handshake, the browser performs certificate validation: checking that the digital certificate matches the domain name, is within its validity period, and was issued by a trusted Certificate Authority (CA)."
      ],
      "definitions": [
        {
          "term": "HTTPS",
          "definition": "Hypertext Transfer Protocol Secure: HTTP encrypted using TLS protocol.",
          "image": "assets/images/slide_24_term_1.jpg"
        },
        {
          "term": "TLS Handshake",
          "definition": "The cryptographic negotiation where client and server validate identity and exchange encryption keys.",
          "image": "assets/images/slide_24_term_2.jpg"
        },
        {
          "term": "Certificate Authority (CA)",
          "definition": "A trusted third-party organization that signs digital certificates verifying domain ownership.",
          "image": "assets/images/slide_24_term_3.jpg"
        }
      ],
      "examples": [
        "A browser padlock icon confirming an encrypted connection to `https://bank.com`.",
        "A browser displaying a red warning screen when a site's digital certificate has expired or mismatched."
      ],
      "analogy": "HTTPS is like sending mail in a lockbox with a verified corporate seal, rather than writing your message on an unsealed postcard.",
      "misconception": "HTTPS protects against eavesdropping during transmission, but it does NOT mean a website is honest. An encrypted phishing site can also use HTTPS.",
      "review": [
        "List three protections provided by HTTPS and TLS encryption.",
        "Why does a green padlock icon not guarantee that a website's business claims are legitimate?"
      ],
      "image": {
        "src": "assets/images/slide_24_main.jpg",
        "alt": "HTTPS, Encryption, and Certificates Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Complete Journey of Opening a Website",
      "category": "Web Synthesis",
      "visual": "webjourney",
      "lead": "Opening a website is a 14-stage coordinated sequence spanning URL parsing, DNS, routing, TCP/TLS handshakes, HTTP exchanges, and browser rendering.",
      "paragraphs": [
        "The complete web request journey follows 14 distinct stages: 1) User enters URL, 2) Browser parses scheme and domain, 3) Browser checks local cache, 4) DNS resolves domain to an IP address, 5) Device determines route to Default Gateway, 6) Router forwards packets to ISP, 7) Routers forward packets hop-by-hop across the Internet, 8) Browser establishes TCP 3-way handshake, 9) TLS handshake establishes encryption (HTTPS), 10) Browser sends HTTP GET request, 11) Web server processes code and queries database, 12) Server returns HTTP 200 OK response with HTML, 13) Browser parses HTML/CSS, requests assets (CSS, JS, images), and 14) Browser computes layout and paints the rendered page."
      ],
      "definitions": [
        {
          "term": "Request Journey",
          "definition": "The end-to-end multi-step technical sequence required to request and display a webpage.",
          "image": "assets/images/slide_25_term_1.png"
        },
        {
          "term": "Asset Sub-Requests",
          "definition": "Secondary HTTP requests automatically triggered by the browser for CSS, JS, fonts, and images referenced in HTML.",
          "image": "assets/images/slide_25_term_2.jpg"
        }
      ],
      "examples": [
        "A browser downloading a 5 KB HTML file, which then triggers 25 separate sub-requests for styling, script, and image files."
      ],
      "analogy": "Opening a website is like ordering a custom house blueprint: you look up the architect (DNS), establish a phone line (TCP/TLS), request the plan (HTTP), receive the master blueprint (HTML), and order the bricks, glass, and paint (sub-requests) to build the house on screen (rendering).",
      "misconception": "Entering a URL does not fetch one static image. It fetches an HTML text document that orchestrates dozens of individual network sub-requests.",
      "review": [
        "Summarize the 14 stages of opening a website from typing a URL to final browser rendering.",
        "Why does receiving the primary HTML file trigger multiple additional HTTP requests?"
      ],
      "image": {
        "src": "assets/images/slide_25_main.jpg",
        "alt": "Complete Journey of Opening a Website Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Client, Server, and Database",
      "category": "Web Architecture",
      "visual": "web",
      "lead": "Web applications use a 3-tier architecture separating client presentation, server application logic, and database storage.",
      "paragraphs": [
        "Modern web applications divide responsibilities across three tiers: 1) Client (the user's browser or mobile app handling user interaction), 2) Web/Application Server (executing business logic, authentication, and HTML generation), and 3) Database (persistently storing structured records like user profiles, posts, and grades).",
        "When a student submits a quiz, the client sends a request to the application server, which calculates the score, stores the result in the database, and returns a confirmation page."
      ],
      "definitions": [
        {
          "term": "3-Tier Architecture",
          "definition": "System design separating Client presentation, Server application logic, and Database storage.",
          "image": "assets/images/slide_26_term_1.jpg"
        },
        {
          "term": "Database",
          "definition": "A structured software system (like MySQL or PostgreSQL) for storing, querying, and updating data records.",
          "image": "assets/images/slide_26_term_2.jpg"
        },
        {
          "term": "Application Logic",
          "definition": "Backend code running on the server that enforces rules, calculations, and security.",
          "image": "assets/images/slide_26_term_3.png"
        }
      ],
      "examples": [
        "A school LMS: Browser (Client) -> Node/Python backend (Server) -> PostgreSQL (Database)."
      ],
      "analogy": "Client is the restaurant diner ordering from the menu; Application server is the waiter taking orders and relaying rules; Database is the kitchen pantry holding raw ingredients.",
      "misconception": "Web browsers do not connect directly to a company's private database. All database access passes through the backend application server for validation and security.",
      "review": [
        "Describe the separate roles of the Client, Application Server, and Database in a school portal.",
        "Why should a client browser never connect directly to a remote database?"
      ],
      "image": {
        "src": "assets/images/slide_26_main.png",
        "alt": "Client, Server, and Database Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Webpage Components",
      "category": "Web Foundations",
      "visual": "web",
      "lead": "Webpages are constructed from complementary technologies: HTML for structure, CSS for presentation, JavaScript for behavior, and media for visual content.",
      "paragraphs": [
        "A webpage is an assembly of complementary files: 1) HTML (HyperText Markup Language) defines structure and semantic content (headings, paragraphs, forms), 2) CSS (Cascading Style Sheets) defines visual presentation (colors, fonts, layout grids), 3) JavaScript provides dynamic interactive behavior, and 4) Images/Media provide visual assets.",
        "Separating content (HTML) from presentation (CSS) and behavior (JavaScript) improves accessibility, maintainability, and caching performance."
      ],
      "definitions": [
        {
          "term": "HTML",
          "definition": "Markup language defining the structural meaning of webpage elements.",
          "image": "assets/images/slide_27_term_1.jpg"
        },
        {
          "term": "CSS",
          "definition": "Stylesheet language controlling visual appearance, colors, fonts, and responsive layout.",
          "image": "assets/images/slide_27_term_2.jpg"
        },
        {
          "term": "JavaScript",
          "definition": "Programming language running in the browser providing interactive logic and dynamic DOM updates.",
          "image": "assets/images/slide_27_term_3.jpg"
        }
      ],
      "examples": [
        "HTML creating a button `<button>`, CSS styling it blue with rounded corners, and JavaScript making it pop up a modal upon clicking."
      ],
      "analogy": "HTML is the skeletal frame of a house; CSS is the interior paint and decor; JavaScript is the electrical switches and plumbing logic.",
      "misconception": "JavaScript is not Java. JavaScript is a lightweight scripting language designed primarily for web browser interactivity and web servers.",
      "review": [
        "Identify the core roles of HTML, CSS, and JavaScript in a modern webpage.",
        "Why is it beneficial to keep CSS styles in separate files rather than inline inside HTML tags?"
      ],
      "image": {
        "src": "assets/images/slide_27_main.jpg",
        "alt": "Webpage Components Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Cookies, Sessions, and Caching",
      "category": "State & Caching",
      "visual": "web",
      "lead": "Because HTTP is stateless, web applications use cookies, sessions, and caches to maintain user state and improve performance.",
      "paragraphs": [
        "Because HTTP is stateless, servers would forget your login identity on every new click. Web applications solve this using: 1) Cookies (small text key-value pairs stored in the browser by websites), 2) Sessions (server-side records mapping a browser's session ID cookie to signed-in user data), and 3) Caching (storing local copies of static files to avoid repeated downloads).",
        "Cookies allow websites to remember user preferences and maintain sign-in sessions, while caches dramatically reduce network bandwidth and page load times."
      ],
      "definitions": [
        {
          "term": "Cookie",
          "definition": "Small text data stored in the browser by websites for tracking, preferences, or session IDs.",
          "image": "assets/images/slide_28_term_1.png"
        },
        {
          "term": "Session",
          "definition": "Server-side data record keeping track of an active user state during web browsing.",
          "image": "assets/images/slide_28_term_2.jpg"
        },
        {
          "term": "Cache",
          "definition": "Local storage of previously fetched web assets (images, CSS) to speed up future visits.",
          "image": "assets/images/slide_28_term_3.png"
        }
      ],
      "examples": [
        "A session cookie keeping a student logged into the grading portal as they click between pages.",
        "A browser caching a school logo image so it doesn't re-download on every page visit."
      ],
      "analogy": "A cookie is like a coat check ticket handed to you at a club; a session is your actual coat stored in the coatroom; a cache is keeping your coat on your arm so you don't check it twice.",
      "misconception": "Cookies are not computer viruses. Cookies are simple text data files managed safely by your web browser.",
      "review": [
        "Explain how cookies and sessions work together to keep a user logged into a website.",
        "What is the benefit of browser caching for web performance?"
      ],
      "image": {
        "src": "assets/images/slide_28_main.png",
        "alt": "Cookies, Sessions, and Caching Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Hosting, Data Centers, Cloud, and CDNs",
      "category": "Web Hosting",
      "visual": "infrastructure",
      "lead": "Delivering websites globally requires web hosting, physical data centers, cloud infrastructure, and Content Delivery Networks.",
      "paragraphs": [
        "Web Hosting means making web files accessible on servers connected 24/7 to the Internet. Data Centers are heavy facilities providing physical security, redundant power, and fiber links for host servers.",
        "Cloud Computing provides on-demand computing and storage resources over networks. A Content Delivery Network (CDN) is a distributed network of edge servers that cache static web content close to users, dramatically reducing latency."
      ],
      "definitions": [
        {
          "term": "Web Hosting",
          "definition": "Providing server storage and network connectivity so website files are accessible 24/7.",
          "image": "assets/images/slide_29_term_1.jpg"
        },
        {
          "term": "Cloud Computing",
          "definition": "On-demand delivery of computing power, databases, and storage via the Internet.",
          "image": "assets/images/slide_29_term_2.jpg"
        },
        {
          "term": "CDN",
          "definition": "Content Delivery Network: edge servers distributed globally to cache content close to end users.",
          "image": "assets/images/slide_29_term_3.jpg"
        }
      ],
      "examples": [
        "Hosting a school website on a cloud server instance in Singapore.",
        "A CDN serving image files to Manila users from a cache in Manila rather than fetching them from a main server in London."
      ],
      "analogy": "A CDN is like a book publisher placing copies of popular textbooks in local city bookstores, so students don't have to order every book directly from an overseas factory.",
      "misconception": "The \"Cloud\" is not an abstract sky entity; it consists of real physical data centers equipped with thousands of hardware servers.",
      "review": [
        "What is the main purpose of a Content Delivery Network (CDN)?",
        "Differentiate between traditional web hosting, data centers, and cloud computing."
      ],
      "image": {
        "src": "assets/images/slide_29_main.jpg",
        "alt": "Hosting, Data Centers, Cloud, and CDNs Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Internet Performance Metrics",
      "category": "Performance",
      "visual": "performance",
      "lead": "Network performance is evaluated using bandwidth, throughput, latency, jitter, and packet loss, each impacting applications differently.",
      "paragraphs": [
        "Bandwidth is the maximum theoretical capacity of a link (e.g. 100 Mbps). Throughput is the actual data rate achieved in practice. Download/Upload speeds measure transfer rates in each direction.",
        "Latency is the round-trip delay time (ping in ms). Jitter is the variation in latency over time. Packet Loss is the percentage of packets that fail to arrive. While high bandwidth is key for file downloads, low latency and jitter are essential for online gaming and live voice/video calls."
      ],
      "definitions": [
        {
          "term": "Bandwidth vs Throughput",
          "definition": "Bandwidth is maximum channel capacity; Throughput is actual sustained data delivery rate.",
          "image": "assets/images/slide_30_term_1.png"
        },
        {
          "term": "Latency (Ping)",
          "definition": "The time delay in milliseconds for a packet to travel to a destination and return.",
          "image": "assets/images/slide_30_term_2.jpg"
        },
        {
          "term": "Jitter & Packet Loss",
          "definition": "Jitter is latency fluctuation; Packet Loss is the percentage of dropped packets during congestion.",
          "image": "assets/images/slide_30_term_3.png"
        }
      ],
      "examples": [
        "File Download: Affected primarily by throughput.",
        "Online Gaming Lag: Caused by high latency (>150ms).",
        "Robotic Voice Call Audio: Caused by high jitter or packet loss.",
        "Video Buffering: Caused by insufficient sustained throughput."
      ],
      "analogy": "Bandwidth is the number of lanes on a highway; Throughput is the actual traffic flow rate; Latency is the travel time per car; Jitter is inconsistent speed changes.",
      "misconception": "A speed test showing 200 Mbps bandwidth does not prevent online game lag if your latency is 250 ms or your packet loss is 5%.",
      "review": [
        "Match the user symptom (buffering video, delayed gaming response, choppy voice call) to the correct performance metric.",
        "Explain the difference between network bandwidth and actual throughput."
      ],
      "image": {
        "src": "assets/images/slide_30_main.jpg",
        "alt": "Internet Performance Metrics Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Congestion and Bottlenecks",
      "category": "Performance",
      "visual": "performance",
      "lead": "Internet performance is constrained by the slowest link along the end-to-end path, known as a bottleneck.",
      "paragraphs": [
        "Data paths cross multiple links: PC -> Wi-Fi -> Home Router -> ISP Fiber -> International Link -> Server. The overall transfer speed is determined by the slowest segment along this chain—the Bottleneck.",
        "Common performance bottlenecks include weak Wi-Fi signals, local network congestion (too many devices downloading simultaneously), outdated home routers, ISP bandwidth limits, or overloaded destination web servers."
      ],
      "definitions": [
        {
          "term": "Bottleneck",
          "definition": "The lowest-capacity segment along an end-to-end network path that limits overall performance.",
          "image": "assets/images/slide_31_term_1.jpg"
        },
        {
          "term": "Network Congestion",
          "definition": "Performance degradation occurring when network traffic exceeds available link capacity.",
          "image": "assets/images/slide_31_term_2.jpg"
        },
        {
          "term": "Upload Saturation",
          "definition": "Completely filling upload capacity, which halts incoming download acknowledgments and slows the connection.",
          "image": "assets/images/slide_31_term_3.jpg"
        }
      ],
      "examples": [
        "Having a 500 Mbps fiber line but getting only 10 Mbps speed because of a weak Wi-Fi signal through three concrete walls.",
        "A popular exam result website slowing down because millions of students query the server simultaneously (Server Bottleneck)."
      ],
      "analogy": "A bottleneck is like a 6-lane highway narrowing down to a 1-lane bridge; traffic slows to the capacity of the single bridge lane regardless of highway size.",
      "misconception": "Upgrading your ISP subscription will not fix slow speeds if the bottleneck is a weak Wi-Fi signal or an overloaded web server.",
      "review": [
        "Define a network bottleneck and give three real-world examples of where bottlenecks occur.",
        "Why does saturating your upload bandwidth slow down your download speed?"
      ],
      "image": {
        "src": "assets/images/slide_31_main.jpg",
        "alt": "Congestion and Bottlenecks Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Basic Internet Security",
      "category": "Security Basics",
      "visual": "privacy",
      "lead": "Fundamental Internet security practices protect user accounts, data privacy, and devices against common online threats.",
      "paragraphs": [
        "Basic Internet security relies on defensive habits: 1) Strong unique passwords managed with password managers, 2) Multi-Factor Authentication (MFA) requiring a secondary verification code, 3) Prompt software updates patching security flaws, 4) Phishing awareness (verifying sender emails and URL links), 5) Avoiding unencrypted public Wi-Fi for sensitive tasks, and 6) Regular data backups.",
        "Security is a continuous practice combining technical controls (encryption, firewalls, MFA) with cautious user behavior."
      ],
      "definitions": [
        {
          "term": "MFA",
          "definition": "Multi-Factor Authentication: requiring two or more verification factors to gain account access.",
          "image": "assets/images/slide_32_term_1.jpg"
        },
        {
          "term": "Phishing",
          "definition": "Deceptive attacks tricking users into revealing passwords or credentials via fake emails/sites.",
          "image": "assets/images/slide_32_term_2.jpg"
        },
        {
          "term": "Malware",
          "definition": "Malicious software (viruses, trojans, ransomware) designed to harm or exploit devices.",
          "image": "assets/images/slide_32_term_3.jpg"
        }
      ],
      "examples": [
        "Enabling MFA so an attacker who steals your password still cannot log into your account without your phone code.",
        "Inspecting a link URL before clicking to verify it points to `school.edu` rather than `school.edu.attacker-site.com`."
      ],
      "analogy": "MFA is like a bank vault requiring both a key card and a pin code; Phishing is like a scammer pretending to be a bank teller on the phone.",
      "misconception": "Anti-virus software alone cannot protect you if you voluntarily type your password into a fake phishing website.",
      "review": [
        "Explain why Multi-Factor Authentication (MFA) provides stronger protection than a password alone.",
        "List four essential daily security practices for protecting personal online accounts."
      ],
      "image": {
        "src": "assets/images/slide_32_main.jpg",
        "alt": "Basic Internet Security Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Basic Network Troubleshooting",
      "category": "Troubleshooting",
      "visual": "performance",
      "lead": "Network troubleshooting relies on a systematic 8-step dependency ladder to isolate connectivity problems logically.",
      "paragraphs": [
        "When network failures occur, follow an 8-step systematic dependency ladder: 1) Identify Scope (one device or all? local or Internet?), 2) Check Physical/Wireless (cables, Wi-Fi toggle, power), 3) Check Configuration (IP, subnet assigned via DHCP?), 4) Test Local LAN (ping Default Gateway router), 5) Test Internet Reachability (ping 8.8.8.8), 6) Test DNS (nslookup domain), 7) Test Service (open URL path in browser), and 8) Document Results.",
        "Troubleshooting logically from physical hardware up to application services prevents wasted effort and pinpoints root causes."
      ],
      "definitions": [
        {
          "term": "Dependency Ladder",
          "definition": "Troubleshooting in logical order from physical hardware up to application services.",
          "image": "assets/images/slide_33_term_1.jpg"
        },
        {
          "term": "Scope Isolation",
          "definition": "Determining whether a fault impacts a single device, an entire LAN, or a remote server.",
          "image": "assets/images/slide_33_term_2.jpg"
        },
        {
          "term": "Fault Location",
          "definition": "Pinpointing the exact segment (NIC, Wi-Fi, cable, gateway, ISP, DNS, or server) where a failure occurs.",
          "image": "assets/images/slide_33_term_3.jpg"
        }
      ],
      "examples": [
        "If only one PC fails while all other classroom PCs work, the fault is isolated to that PC's NIC, cable, or Wi-Fi settings.",
        "If all devices fail to open websites by domain name but can ping 8.8.8.8, the fault is isolated to DNS."
      ],
      "analogy": "Troubleshooting is like checking electrical appliances: check if the cord is plugged in (physical) and if the circuit breaker tripped (gateway) before buying a new appliance.",
      "misconception": "Do not restart your router randomly as step #1. Always check physical links and isolate the scope of the problem first.",
      "review": [
        "List the 8 steps of the systematic network troubleshooting dependency ladder.",
        "Explain how scope isolation helps determine whether a problem is local or remote."
      ],
      "image": {
        "src": "assets/images/slide_33_main.jpg",
        "alt": "Basic Network Troubleshooting Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Introductory Command-Line Tools",
      "category": "Troubleshooting",
      "visual": "performance",
      "lead": "Standard command-line tools provide direct technical visibility into network adapters, IP routing, DNS lookups, and connection paths.",
      "paragraphs": [
        "Command-line utilities provide quick diagnostic testing: 1) `ipconfig /all` displays active network adapters, MAC addresses, assigned IP addresses, default gateway, and DNS servers; 2) `ping` tests ICMP reachability and round-trip latency to an IP destination; 3) `nslookup` queries DNS servers directly to test domain resolution; and 4) `tracert` traces the sequential hop-by-hop router path to a target.",
        "These utilities verify each rung of the troubleshooting dependency ladder."
      ],
      "definitions": [
        {
          "term": "ipconfig /all",
          "definition": "Command listing detailed network configuration for all active system adapters.",
          "image": "assets/images/slide_34_term_1.jpg"
        },
        {
          "term": "ping",
          "definition": "Utility sending ICMP Echo Request packets to test target reachability and latency.",
          "image": "assets/images/slide_34_term_2.jpg"
        },
        {
          "term": "nslookup",
          "definition": "Command-line tool querying DNS servers to resolve hostnames or inspect DNS records.",
          "image": "assets/images/slide_34_term_3.jpg"
        },
        {
          "term": "tracert",
          "definition": "Traceroute tool displaying each router hop and latency along the path to a destination.",
          "image": "assets/images/slide_34_term_4.jpg"
        }
      ],
      "examples": [
        "Running `ipconfig /all` to verify that DHCP assigned IP 192.168.1.50 and Gateway 192.168.1.1.",
        "Running `nslookup wikipedia.org 8.8.8.8` to test if Google's public DNS resolves the domain correctly.",
        "Running `tracert 8.8.8.8` to see where packets are getting delayed or dropped across ISP routers."
      ],
      "analogy": "Command-line tools are like a mechanic's diagnostic OBD-II scanner: they read sensor codes (IPs, gateway, DNS response) directly from the engine.",
      "misconception": "A failed ping does not always mean a server is offline. Many firewalls intentionally block ICMP ping traffic for security reasons while web servers remain online.",
      "review": [
        "State the introductory purpose of ipconfig, ping, nslookup, and tracert.",
        "Why might a web server ignore a ping command even though its website opens normally in a browser?"
      ],
      "image": {
        "src": "assets/images/slide_34_main.jpg",
        "alt": "Introductory Command-Line Tools Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    },
    {
      "title": "Internet Governance and Responsibility",
      "category": "Governance",
      "visual": "network",
      "lead": "The Internet operates without a single central owner through international technical standardization, address coordination, and multi-stakeholder cooperation.",
      "paragraphs": [
        "No single government, corporation, or individual owns or controls the Internet. Internet operation relies on multi-stakeholder governance organizations: 1) IETF (Internet Engineering Task Force) develops open protocol standards (RFCs), 2) ICANN (Internet Corporation for Assigned Names and Numbers) coordinates global IP address allocation and domain name systems, and 3) Regional Internet Registries (RIRs) assign IP blocks to ISPs.",
        "Maintaining an open, resilient, and safe Internet requires technical standardization, responsible digital citizenship, privacy respect, and international cooperation."
      ],
      "definitions": [
        {
          "term": "Multi-Stakeholder Model",
          "definition": "Governance involving technical experts, academics, civil society, governments, and private industry.",
          "image": "assets/images/slide_35_term_1.jpg"
        },
        {
          "term": "ICANN",
          "definition": "Organization coordinating global domain names, IP address allocation, and root server parameters.",
          "image": "assets/images/slide_35_term_2.jpg"
        },
        {
          "term": "IETF",
          "definition": "Open technical community that develops and defines Internet protocol specifications (RFCs).",
          "image": "assets/images/slide_35_term_3.jpg"
        }
      ],
      "examples": [
        "Engineers worldwide collaborating in the IETF to publish and improve modern protocol standards like HTTP/3 and TLS 1.3.",
        "ICANN managing the top-level domain registry system (.com, .org, .ph)."
      ],
      "analogy": "Internet governance is like international maritime rules: no nation owns the oceans, but international organizations establish navigation rules, ship standards, and port protocols for safe global trade.",
      "misconception": "Governments can regulate Internet access within their national borders, but no single entity can shut down or change the global open Internet architecture.",
      "review": [
        "Explain what is meant by the multi-stakeholder model of Internet governance.",
        "Summarize the core roles of the IETF and ICANN in maintaining global Internet standards."
      ],
      "image": {
        "src": "assets/images/slide_35_main.jpg",
        "alt": "Internet Governance and Responsibility Technical Visual",
        "credit": "Wikipedia Technical Photography / Diagram"
      }
    }
  ],
  "activity": {
    "title": "Web Journey & Command-Line Diagnostic Labs",
    "intro": "Connect Internet protocols, packet routing, DNS, and HTTP request flows to observable evidence using physical flowcharts, browser DevTools, and command-line labs.",
    "tasks": [
      {
        "title": "Task 1: Trace a Website Request Flowchart",
        "scenario": "A student enters https://www.example.com/courses in a web browser for the first time.",
        "prompt": "Draw a complete 14-step flowchart mapping: User -> Browser URL Parsing -> DNS Resolver Lookup -> Router Gateway -> ISP Backbones -> Server TCP Handshake -> TLS Encryption -> HTTP GET Request -> HTTP 200 OK Response -> HTML Parsing & Sub-requests -> Browser Rendering. Label IP addresses, ports (443, 53), and protocol headers at each stage.",
        "response": "Submit a detailed visual flowchart with labeled protocol layers, IP addressing steps, and resource assembly order.",
        "rationale": "Mapping the request sequence unifies DNS, IP routing, TCP transport, TLS security, and HTTP rendering into a single coherent system."
      },
      {
        "title": "Task 2: Browser DevTools Network Lab",
        "scenario": "A modern webpage appears as one item, but is assembled from dozens of separate network requests.",
        "prompt": "Open browser Developer Tools (F12) to the Network tab and load an approved school page. Record: 1) Primary HTML HTTP method and status code (e.g. 200 OK); 2) Count of sub-requests for CSS, JS, fonts, and images; 3) Domains providing those assets; 4) Transfer sizes vs uncompressed sizes; 5) Reload the page and note which assets return 304 Not Modified or load from browser cache.",
        "response": "Submit a detailed report summarizing asset types, status codes, third-party domains, and the performance benefit of HTTP browser caching.",
        "rationale": "Inspecting browser network requests provides real-time proof of client-server HTTP transactions, asset sub-requests, and caching behavior."
      },
      {
        "title": "Task 3: Command-Line Diagnostic Lab",
        "scenario": "A school computer cannot access the online grading system.",
        "prompt": "Open the Windows Command Prompt. Execute and record outputs for: 1) ipconfig /all (verify IP, subnet, default gateway, DNS); 2) ping [Default Gateway IP] (verify local router reachability); 3) ping 8.8.8.8 (verify public IP routing); 4) nslookup school.edu (verify DNS name resolution); 5) tracert 8.8.8.8 (inspect router hop count and latency).",
        "response": "Create a diagnostic log documenting command outputs, identifying which step succeeded or failed, and stating the precise network fault location.",
        "rationale": "Executing real diagnostic tools connects abstract IP routing, gateway forwarding, DNS resolution, and router paths to active troubleshooting skills."
      },
      {
        "title": "Task 4: Isolate Local vs Remote Outages",
        "scenario": "Multiple classroom computers suddenly lose access to an online educational portal.",
        "prompt": "Compare diagnostic results across three test scenarios: A) Only 1 classroom PC fails while others work; B) All classroom PCs fail, but mobile phones on cellular data can open the portal; C) All devices across classroom Wi-Fi, home networks, and cellular data fail to open the portal. Determine the root cause location for A, B, and C.",
        "response": "State the fault isolation: A = Local PC NIC/cable fault; B = School router or ISP connection outage; C = Remote web server or portal database outage.",
        "rationale": "Comparative fault isolation teaches students to think logically using systematic network boundaries."
      }
    ],
    "reflection": [
      "Which diagnostic command provides the fastest proof that your local router and Wi-Fi connection are working?",
      "How does inspecting the browser DevTools Network tab prove that a webpage is composed of multiple separate HTTP requests?",
      "Why is checking your default gateway connection step #4 on the dependency ladder before checking DNS or web servers?"
    ]
  },
  "quiz": [
    {
      "category": "Internet vs Web",
      "image": {
        "src": "assets/images/fiber_optic_transmission.jpg?ai_id=104",
        "alt": "AI 3D subsea fiber optic cables connecting globe",
        "credit": "AI Generated 3D Technical Diagram"
      },
      "question": "Which statement correctly describes the relationship between the Internet and the World Wide Web?",
      "options": [
        "The Internet is the underlying network infrastructure; the Web is one service running on it.",
        "They are identical terms that mean exactly the same thing.",
        "The Web is the physical cable system; the Internet is only web pages.",
        "The Internet is used exclusively for web browsers, while the Web is for email."
      ],
      "answer": 0,
      "explanation": "The Internet is the global network infrastructure of cables, routers, and IP protocols. The Web is an application-layer service of linked documents operating over it."
    },
    {
      "category": "Physical Infrastructure",
      "question": "What physical medium carries more than 95% of all international Internet traffic across oceans?",
      "options": [
        "Subsea fiber-optic cables",
        "Geostationary communications satellites",
        "Cellular 5G towers",
        "Copper coaxial cables"
      ],
      "answer": 0,
      "explanation": "Undersea fiber-optic cables laid on ocean floors carry over 95% of international Internet data due to their immense speed and capacity."
    },
    {
      "category": "Network Joining",
      "question": "What four key configuration settings must a device receive upon joining a network to communicate on the Internet?",
      "options": [
        "IP address, Subnet mask, Default Gateway, and DNS Resolver address",
        "MAC address, CPU serial number, Wi-Fi password, and username",
        "Public IP, VPN key, Proxy port, and Bluetooth ID",
        "HTML path, CSS stylesheet, URL scheme, and BGP table"
      ],
      "answer": 0,
      "explanation": "To communicate locally and remotely, a host needs its IP address, subnet mask, default gateway router address, and DNS resolver address."
    },
    {
      "category": "DHCP",
      "question": "What does the Dynamic Host Configuration Protocol (DHCP) do?",
      "options": [
        "It automatically assigns IP configuration settings to devices joining a network.",
        "It converts human-readable domain names into IP addresses.",
        "It encrypts web connections between web browsers and servers.",
        "It physically connects copper cables to wireless access points."
      ],
      "answer": 0,
      "explanation": "DHCP automates network configuration, assigning temporary IP leases, gateways, and DNS settings to hosts."
    },
    {
      "category": "Addressing",
      "question": "In network addressing, what is the primary purpose of a Port Number?",
      "options": [
        "To direct incoming traffic to a specific software application or service endpoint on a device",
        "To identify the physical manufacturer of a network interface card",
        "To provide a human-readable name for a company website",
        "To measure the physical length of an Ethernet cable"
      ],
      "answer": 0,
      "explanation": "While an IP address identifies the destination device, a port number directs data to the specific application service (e.g., Port 443 for web)."
    },
    {
      "category": "IPv4 vs IPv6",
      "question": "Why was IPv6 developed to replace IPv4?",
      "options": [
        "Because 32-bit IPv4 addresses were running out due to the massive growth of connected devices.",
        "Because IPv4 could not carry video or audio data.",
        "Because IPv4 cables were physically degrading worldwide.",
        "Because IPv6 eliminates the need for routers and switches."
      ],
      "answer": 0,
      "explanation": "IPv4 provides only ~4.3 billion addresses; 128-bit IPv6 was created to provide a virtually unlimited address space for global expansion."
    },
    {
      "category": "Public vs Private IP",
      "question": "Why do private IP address ranges (like 192.168.x.x) exist?",
      "options": [
        "To allow separate local networks to reuse the same internal addresses without global conflicts",
        "To prevent local computers from connecting to local printers",
        "To automatically encrypt all data sent over public Wi-Fi",
        "To speed up the optical signals inside fiber cables"
      ],
      "answer": 0,
      "explanation": "Private addresses are restricted to local networks and not routed on the public Internet, allowing millions of organizations to reuse them internally."
    },
    {
      "category": "NAT",
      "question": "What does Network Address Translation (NAT) perform on a router?",
      "options": [
        "It translates multiple private internal IP addresses into a single public IP address for Internet access.",
        "It translates human-friendly domain names into IP addresses.",
        "It blocks all incoming viral attachments from email servers.",
        "It converts copper electrical signals into fiber optic light pulses."
      ],
      "answer": 0,
      "explanation": "NAT maps private internal IP addresses to a router's public IP address, allowing multiple local devices to share one ISP line."
    },
    {
      "category": "Default Gateway",
      "question": "What is the role of the Default Gateway for a computer on a local network?",
      "options": [
        "It is the local router IP address where hosts send traffic destined for outside networks.",
        "It is the web server that stores the school's public homepage.",
        "It is the physical MAC address of the local Wi-Fi printer.",
        "It is the secret encryption password used to connect to Wi-Fi."
      ],
      "answer": 0,
      "explanation": "When a host determines that a destination IP is not on its local subnet, it sends the packet to its Default Gateway (the local router)."
    },
    {
      "category": "Packets",
      "question": "What is the function of the header in a network packet?",
      "options": [
        "It carries delivery and control metadata, such as source IP, destination IP, and protocol type.",
        "It contains the actual user file data being transferred.",
        "It increases the maximum physical bandwidth of the Wi-Fi radio.",
        "It deletes the local MAC address from the switch memory."
      ],
      "answer": 0,
      "explanation": "The header contains essential routing, delivery, sequencing, and control metadata, while the payload holds the actual file data."
    },
    {
      "category": "Packet Switching",
      "question": "Which statement best describes packet switching on the Internet?",
      "options": [
        "Packets are routed independently across available paths and may arrive out of order.",
        "Packets reserve a single dedicated physical wire from sender to receiver for the entire transmission.",
        "All packets must pass through one central super-router located in Geneva.",
        "Packets can only be sent during designated night hours."
      ],
      "answer": 0,
      "explanation": "Packet switching forwards packets individually based on real-time traffic conditions, without reserving a fixed physical circuit."
    },
    {
      "category": "Transport Protocols",
      "question": "Which transport protocol should be chosen when 100% reliable, ordered, and error-checked delivery is required?",
      "options": [
        "Transmission Control Protocol (TCP)",
        "User Datagram Protocol (UDP)",
        "Internet Protocol (IP)",
        "Domain Name System (DNS)"
      ],
      "answer": 0,
      "explanation": "TCP manages connections, verifies segment receipt, performs retransmissions, and guarantees in-order delivery."
    },
    {
      "category": "Transport Protocols",
      "question": "Why do live voice calls and online games frequently use UDP instead of TCP?",
      "options": [
        "They prioritize speed and timeliness over waiting for retransmissions of lost packets.",
        "UDP automatically encrypts all voice data using military keys.",
        "UDP guarantees zero packet loss over wireless networks.",
        "TCP cannot run over optical fiber cables."
      ],
      "answer": 0,
      "explanation": "UDP has no retransmission delays; in real-time communication, a late packet is useless, so speed is prioritized over completeness."
    },
    {
      "category": "DNS",
      "question": "What is the primary function of the Domain Name System (DNS)?",
      "options": [
        "To translate human-readable domain names into machine-routable IP addresses",
        "To translate private IP addresses into public NAT addresses",
        "To encrypt HTTP requests into secure HTTPS connections",
        "To assign MAC addresses to new network interface cards"
      ],
      "answer": 0,
      "explanation": "DNS acts as a translation directory, converting readable domain names like google.com into numerical IP addresses."
    },
    {
      "category": "Troubleshooting",
      "question": "You can ping a public IP address (like 8.8.8.8) successfully, but your browser cannot open websites using domain names. What is the most likely problem?",
      "options": [
        "A DNS name resolution failure or incorrect DNS server configuration",
        "A physical cable failure between your PC and the local switch",
        "An incorrect default gateway address on your local PC",
        "A complete failure of your computer's network interface card"
      ],
      "answer": 0,
      "explanation": "Pinging 8.8.8.8 proves physical, gateway, and IP routing connections work; failing to load domain names points directly to a DNS issue."
    }
  ],
  "summary": {
    "intro": "Internet Part 2 explains how local networks scale globally across the Internet and Web through addressing, DHCP, NAT, packet switching, routing, transport protocols, DNS, HTTP, web journeys, performance metrics, Internet security, and systematic troubleshooting.",
    "points": [
      "The Internet is global network infrastructure; the Web is an application-layer service running over it.",
      "International Internet data travels through subsea fiber-optic cables connecting continents.",
      "DHCP automates network configuration (IP, Subnet, Default Gateway, DNS) via the DORA sequence.",
      "MAC addresses identify local links; IP addresses route across networks; Ports direct data to software applications.",
      "IPv6 provides a 128-bit address space to replace exhausted 32-bit IPv4 addresses.",
      "NAT translates internal private IP addresses to a public router IP, allowing multiple devices to share one ISP line.",
      "Data is split into packets with headers and payloads, routed independently via packet switching.",
      "Routers forward packets hop-by-hop, decrementing TTL to prevent infinite loops.",
      "TCP provides reliable, ordered transport; UDP provides fast, lightweight transport for real-time traffic.",
      "DNS translates readable domain names to IP addresses, initiating the 14-stage website request journey.",
      "HTTP and HTTPS govern client-server web communications, status codes, and TLS encryption.",
      "3-Tier web architecture separates Client presentation, Server application logic, and Database storage.",
      "Cookies and sessions maintain state, while browser caching and CDNs optimize global web performance.",
      "Internet performance depends on bandwidth, throughput, latency, jitter, packet loss, and path bottlenecks.",
      "Basic security requires strong passwords, MFA, phishing awareness, and regular updates.",
      "Troubleshooting follows an 8-step dependency ladder using ipconfig, ping, nslookup, and tracert."
    ],
    "review": [
      "Trace the 14 stages of a web request from pressing Enter on a URL to final browser rendering.",
      "Compare TCP and UDP in terms of connection setup, reliability, and real-time streaming suitability.",
      "Demonstrate how to isolate a connectivity failure using ipconfig, ping, and nslookup."
    ],
    "next": "Congratulations! You have completed the foundational networking modules. Proceed to Web Development to learn how web applications are built and styled."
  }
};
