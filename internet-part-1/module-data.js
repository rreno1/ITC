window.CC101_MODULE_DATA = {
  id: 'internet-part-1',
  courseTitle: 'Introduction to Computing',
  title: 'Internet Part 1',
  subtitle: 'How Devices Connect and Data Travels',
  description: 'Explore how devices connect through local networks and Internet service providers. Learn how IP addresses, routers, packets, TCP, UDP, DHCP, and NAT allow data to travel between computers.',
  objectives: [
    'Explain the difference between the Internet and the World Wide Web.',
    'Identify network scopes, physical media, infrastructure, and the roles of common network devices.',
    'Explain packet switching, encapsulation, and the practical four-layer TCP/IP model.',
    'Distinguish MAC, IPv4, IPv6, public and private addresses, prefixes, gateways, and ports.',
    'Explain DHCP, NAT, routing tables, autonomous systems, BGP, TCP, and UDP.',
    'Interpret bandwidth, throughput, latency, jitter, packet loss, reliability, and congestion.',
    'Use basic Windows commands to inspect configuration and test a packet path.'
  ],
  lessons: [
    {
      title: 'Internet Fundamentals',
      category: 'Networks of Networks',
      visual: 'network',
      lead: 'The Internet is a worldwide network of interconnected networks using TCP/IP; the World Wide Web is only one service operating on that infrastructure.',
      paragraphs: [
        'A computer network is a group of connected devices that exchange data and share resources. A host is an endpoint connected to a network. A client initiates a request for a resource, while a server listens for requests and provides a resource or service. These roles describe behavior: the same computer can be a client in one exchange and a server in another.',
        'A LAN covers a local area such as a room, building, or campus. A WLAN is a local network using wireless access. A WAN connects networks across larger geographic areas. The Internet joins many independently operated LANs and WANs rather than relying on one central network or one central computer.',
        'Centralized networks depend on central services, while peer-to-peer networks let devices provide resources directly to one another. An intranet is private to an organization, an extranet offers controlled access to partners, and the public Internet connects networks globally.'
      ],
      definitions: [
        { term: 'Computer network', definition: 'Connected devices and systems that exchange data and share resources.' },
        { term: 'Internet', definition: 'The global system of interconnected networks communicating through the TCP/IP protocol suite.' },
        { term: 'World Wide Web', definition: 'A service of linked webpages and resources transferred over Internet infrastructure.' },
        { term: 'Client and server', definition: 'A client requests a resource; a server provides or processes the requested service.' }
      ],
      examples: [
        'A browser is a client when it requests a webpage from a web server.',
        'A school WLAN connects wireless devices locally, while the school ISP connects that network to the Internet.',
        'Email, streaming, messaging, cloud storage, and games use the Internet but are not all the Web.'
      ],
      analogy: 'The Internet is the global road system; the Web is one type of delivery service using those roads.',
      misconception: 'The Internet and the Web are not interchangeable names. The Web is one application ecosystem running on Internet infrastructure.',
      review: [
        'Distinguish LAN, WLAN, WAN, and the Internet using one school example.',
        'Explain how client, server, host, intranet, and extranet describe different ideas.'
      ]
    },
    {
      title: 'Physical Internet Infrastructure',
      category: 'Media & Network Devices',
      visual: 'infrastructure',
      lead: 'Logical data must travel through physical links and devices that connect endpoints, local networks, service providers, and data centers.',
      paragraphs: [
        'Ethernet cables carry electrical signals over copper, while fiber-optic cables carry pulses of light. Fiber forms much of the high-capacity backbone, including submarine cables between continents. Wi-Fi provides local radio access, cellular networks provide wide-area mobile access, and satellites can connect locations where terrestrial links are difficult.',
        'A network interface card connects a device to a link. A switch forwards local traffic among devices in a LAN, while a router forwards packets between different networks. A wireless access point provides radio access to a local network. A modem or optical network terminal connects customer equipment to an ISP access technology.',
        'ISPs connect customers and other networks. Data centers host servers and cloud infrastructure. Internet exchange points let independently operated networks exchange traffic directly. Firewalls enforce rules about permitted traffic; they may be separate devices or functions built into routers and hosts.'
      ],
      definitions: [
        { term: 'NIC', definition: 'A network interface that connects a device to a wired or wireless link.' },
        { term: 'Switch', definition: 'A device that connects and forwards traffic among devices in a local network.' },
        { term: 'Router', definition: 'A device that forwards packets between different IP networks.' },
        { term: 'ISP and IXP', definition: 'An ISP provides connectivity; an IXP is a facility where networks exchange traffic.' }
      ],
      examples: [
        'A laptop uses Wi-Fi to reach an access point, then a router and fiber ONT before entering the ISP.',
        'A switch connects classroom computers inside one LAN without acting as the Internet gateway.',
        'Submarine fiber carries large volumes of international Internet traffic between continents.'
      ],
      analogy: 'Local cables and radios are streets, routers are junctions, ISPs are highway operators, and exchange points are major interchanges.',
      misconception: 'A home “router” is often several devices in one box: router, switch, access point, firewall, DHCP server, and NAT gateway.',
      review: [
        'Trace the physical path from a phone on Wi-Fi to an ISP.',
        'Compare the primary purposes of a NIC, switch, router, access point, modem or ONT, server, and firewall.'
      ]
    },
    {
      title: 'Packet Switching',
      category: 'How Data Travels',
      visual: 'packets',
      lead: 'Files and messages normally travel as numbered packets with control information rather than as one continuous object.',
      paragraphs: [
        'A sender divides data into packets so links can be shared and routers can forward manageable units. The payload is the carried application data. Headers contain delivery and control information such as addresses and protocol fields. A router examines relevant header information to decide where a packet should go next.',
        'Packets belonging to the same message can cross several routers and take different routes. The destination processes and reassembles the received data. Packets can be delayed, duplicated, corrupted, lost, or received out of order rather than arriving perfectly.',
        'Reliability can be added by a transport protocol or application. For example, TCP tracks sequence information and retransmits missing data. This separation lets the Internet layer focus on best-effort packet delivery while endpoints manage the needs of each application.'
      ],
      definitions: [
        { term: 'Packet', definition: 'A formatted unit of data transmitted through a packet-switched network.' },
        { term: 'Payload', definition: 'The application or upper-layer data carried inside a packet.' },
        { term: 'Header', definition: 'Protocol control and delivery information attached to carried data.' },
        { term: 'Reassembly', definition: 'Processing received units so the destination can reconstruct the original data stream or message.' }
      ],
      examples: [
        'Packets from a download may follow different routes yet still be reassembled correctly.',
        'A missing TCP segment can be retransmitted without restarting the entire download.',
        'Congestion can delay some packets more than others, causing jitter or reordering.'
      ],
      analogy: 'The payload is the item in a parcel, the header is its delivery label, routers are sorting facilities, and protocols are the delivery rules.',
      misconception: 'A webpage, image, or message does not normally cross the Internet as one large unbroken object.',
      review: [
        'Explain the different roles of a packet header and payload.',
        'Why can packets arrive late, out of order, duplicated, corrupted, or not at all?'
      ]
    },
    {
      title: 'The Practical TCP/IP Model',
      category: 'Layers & Encapsulation',
      visual: 'stack',
      lead: 'The four-layer TCP/IP model organizes application services, endpoint transport, Internet routing, and local-link transmission.',
      paragraphs: [
        'The application layer includes services used by programs, such as HTTP, DNS, and SMTP. The transport layer provides end-to-end communication through protocols such as TCP and UDP. The Internet layer provides logical addressing and routing through IPv4, IPv6, and control protocols such as ICMP.',
        'The network access layer handles transmission on the current local link through technologies such as Ethernet and Wi-Fi. A packet may cross many different link types while retaining the Internet-layer destination that routers use to forward it.',
        'Encapsulation means each layer adds the information needed for its responsibility as data moves down the stack. The receiver processes those layers in reverse. The seven-layer OSI model is a useful reference, but memorizing every layer is not the main objective of this introductory course.'
      ],
      definitions: [
        { term: 'Application layer', definition: 'Network services used by applications, including HTTP, DNS, and SMTP.' },
        { term: 'Transport layer', definition: 'End-to-end communication between application endpoints, commonly using TCP or UDP.' },
        { term: 'Internet layer', definition: 'Logical addressing, control, and routing through protocols such as IPv4, IPv6, and ICMP.' },
        { term: 'Network access layer', definition: 'Local-link framing and transmission through Ethernet, Wi-Fi, and related technologies.' }
      ],
      examples: [
        'An HTTP message can be carried by TCP, placed in IP packets, then sent in Wi-Fi frames.',
        'A router removes one local-link frame and creates another while forwarding the IP packet.',
        'Encapsulation lets each layer change independently while keeping a defined interface to the next layer.'
      ],
      analogy: 'Packing a letter in an addressed envelope, then a courier bag, gives each delivery stage the information it needs.',
      misconception: 'The OSI model is not a checklist that must replace the practical TCP/IP model, and layer memorization is not the same as understanding delivery.',
      review: [
        'Place HTTP, TCP, IPv6, and Wi-Fi in the correct TCP/IP layers.',
        'Describe encapsulation from application data to a local-link frame.'
      ]
    },
    {
      title: 'Network Addressing',
      category: 'MAC, IPv4 & IPv6',
      visual: 'addressing',
      lead: 'MAC addresses, IP addresses, prefixes, and gateways identify different parts of local and routed delivery.',
      paragraphs: [
        'A MAC address identifies a network interface on a local link. An IP address is a logical address used across IP networks. IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses and is the newer version of the Internet Protocol rather than an optional curiosity.',
        'Public IP addresses are globally routed. Private IPv4 addresses are reused inside separate local networks and are not routed directly across the public Internet. An address may be configured statically or assigned dynamically. The address belongs to a network interface rather than permanently identifying a person or a whole physical device.',
        'A subnet mask or network prefix identifies the portion that represents the local network. A host compares the destination prefix with its own: local destinations can be reached on the link, while remote destinations are sent to the default gateway. Complicated binary subnet calculations are outside this introductory module.'
      ],
      definitions: [
        { term: 'MAC address', definition: 'An identifier used for a network interface on a local link.' },
        { term: 'IPv4 and IPv6', definition: 'The 32-bit and newer 128-bit versions of the Internet Protocol.' },
        { term: 'Public and private IP', definition: 'Public addresses are globally routed; private IPv4 addresses are used inside local networks.' },
        { term: 'Network prefix', definition: 'The portion of an IP address that identifies the network containing the interface.' }
      ],
      examples: [
        '192.168.1.24 is commonly a private IPv4 address inside a home or school LAN.',
        '2001:db8::25 illustrates the colon-separated hexadecimal notation used by IPv6.',
        'Two interfaces on the same laptop can have different MAC and IP addresses.'
      ],
      analogy: 'A network prefix is like a city and street; the remaining address identifies the destination on that street.',
      misconception: 'An IP address is not the same as a MAC address, domain name, port number, username, or permanent personal identity.',
      review: [
        'Distinguish MAC, IPv4, IPv6, public, private, static, and dynamic addressing.',
        'How does a prefix help a device decide whether to use its gateway?'
      ]
    },
    {
      title: 'Automatic Network Configuration',
      category: 'DHCP, Gateways & NAT',
      visual: 'configuration',
      lead: 'When a device joins Wi-Fi, DHCP supplies the configuration needed to communicate locally and reach other networks.',
      paragraphs: [
        'A device first associates with the wireless access point. It then uses DHCP to request configuration. The common DORA sequence is Discover, Offer, Request, and Acknowledge. A successful lease normally includes an IP address, network prefix or subnet mask, default gateway, and DNS resolver address.',
        'The default gateway is the router used for destinations outside the local network. The DNS server resolves names for applications; it is not the same function as the gateway. A temporary DHCP lease can be renewed or returned so addresses can be managed without configuring every client manually.',
        'On many IPv4 networks, NAT translates connections from private addresses to a public address and tracks enough information to direct reply traffic to the correct internal client. NAT conserves public IPv4 space, but it is not encryption and it is not a firewall.'
      ],
      definitions: [
        { term: 'DHCP', definition: 'A protocol that automatically supplies host network configuration.' },
        { term: 'DORA', definition: 'Discover, Offer, Request, and Acknowledge—the common DHCP lease exchange.' },
        { term: 'Default gateway', definition: 'The router a host uses to reach destinations outside its local network.' },
        { term: 'NAT', definition: 'Translation of address and port information between different sides of a router.' }
      ],
      examples: [
        'A phone receives 10.0.0.35, a /24 prefix, gateway 10.0.0.1, and a DNS resolver after joining Wi-Fi.',
        'Several home devices can share one public IPv4 address through NAT.',
        'A device with no valid lease may assign itself a limited local address and fail to reach the gateway.'
      ],
      analogy: 'DHCP is a hotel desk assigning a room, directions to the exit, and a directory service; NAT is the front desk mapping internal rooms to outside conversations.',
      misconception: 'NAT does not make every connection secure, and DHCP does not perform DNS resolution or packet routing.',
      review: [
        'Put the four DORA messages in order and state who sends each.',
        'List the address, prefix, gateway, and DNS values a client should verify.'
      ]
    },
    {
      title: 'Ports and Applications',
      category: 'Application Endpoints',
      visual: 'ports',
      lead: 'An IP address identifies an interface or endpoint location, while a port number helps identify the application service receiving the traffic.',
      paragraphs: [
        'One host can run several network services at the same time. Transport protocols use port numbers so incoming traffic can be delivered to the intended process. The combination of IP address, transport protocol, and port identifies a network service endpoint.',
        'Common examples include HTTP on port 80, HTTPS on 443, DNS on 53, SSH on 22, and SMTP on 25. These values are useful illustrations, but understanding the IP-plus-port relationship matters more than memorizing dozens of numbers.',
        'Clients also use temporary source ports so replies can be matched to the correct application and connection. Firewalls and NAT devices may examine or translate port information as they enforce policies or track flows.'
      ],
      definitions: [
        { term: 'Port number', definition: 'A transport-layer value that identifies an application endpoint.' },
        { term: 'Service endpoint', definition: 'A network address, transport protocol, and port used to reach a service.' },
        { term: 'Well-known port', definition: 'A commonly assigned low-numbered port associated with a standard service.' },
        { term: 'Ephemeral port', definition: 'A temporary client-side port used for a connection or exchange.' }
      ],
      examples: [
        'A browser commonly connects to a server IP using TCP port 443 for HTTPS.',
        'DNS commonly uses port 53, with the transport choice depending on the operation.',
        'Two browser tabs can communicate simultaneously because their connections have distinct endpoint information.'
      ],
      analogy: 'The IP address is a building address; the port is the department or room receiving the delivery.',
      misconception: 'A port number is not a physical socket on the computer and does not replace the IP address.',
      review: [
        'Why does a host need port numbers in addition to an IP address?',
        'Recognize the common services associated with ports 80, 443, 53, 22, and 25.'
      ]
    },
    {
      title: 'Routing Across the Internet',
      category: 'Next Hops & BGP',
      visual: 'routing',
      lead: 'Routers use routing tables and next hops, while autonomous systems exchange reachability so independently operated networks can interconnect.',
      paragraphs: [
        'A router compares a packet destination with its routing table and selects the most appropriate route and next hop. A default route handles destinations for which the router has no more specific match. Packets may travel through many routers and several organizations before reaching the destination.',
        'The IPv4 Time to Live or IPv6 hop limit is reduced by each router. If it reaches zero, the packet is discarded, preventing a routing loop from keeping a packet alive forever. Multiple possible paths improve resilience, but current policy and conditions determine which path is used.',
        'An autonomous system is a network or group of networks operated under one routing policy. BGP exchanges reachability information between autonomous systems. Students do not configure BGP or memorize its detailed route-selection rules; the important idea is that no single central router controls the Internet.'
      ],
      definitions: [
        { term: 'Routing table', definition: 'A set of destination patterns and forwarding choices used by a router.' },
        { term: 'Next hop', definition: 'The next router or destination interface chosen for a packet.' },
        { term: 'TTL or hop limit', definition: 'A field reduced at each router so packets cannot loop forever.' },
        { term: 'BGP', definition: 'The protocol used to exchange reachability information between autonomous systems.' }
      ],
      examples: [
        'A home router uses a default route toward its ISP for most Internet destinations.',
        'Traceroute reveals some routers by provoking TTL or hop-limit expiration responses.',
        'A provider can change routing policy when an external path becomes unavailable.'
      ],
      analogy: 'Each sorting center chooses only the next facility, while inter-company route agreements make end-to-end delivery possible.',
      misconception: 'Routers do not need a complete map of every physical cable, and BGP does not require one central Internet authority.',
      review: [
        'Explain routing table, next hop, default route, and TTL in one packet journey.',
        'Why do autonomous systems and BGP support a distributed Internet?'
      ]
    },
    {
      title: 'TCP and UDP',
      category: 'Transport Choices',
      visual: 'transport',
      lead: 'TCP manages reliable ordered communication, while UDP sends connectionless datagrams without promising delivery or order.',
      paragraphs: [
        'TCP is connection-oriented. It establishes communication state, numbers data, acknowledges received information, retransmits missing segments, and delivers an ordered byte stream to the application. These mechanisms are useful for webpages, file transfer, email, and other tasks that need complete data.',
        'UDP is connectionless and adds less management. It does not guarantee delivery, ordering, or automatic retransmission. Applications can use it for live audio, gaming, DNS exchanges, and real-time traffic when timely delivery or application-controlled recovery matters.',
        'The claims “TCP is slow” and “UDP is fast” are oversimplifications. TCP can perform very well, and a UDP application may implement its own reliability. The correct choice depends on data integrity, latency, ordering, congestion control, and application design.'
      ],
      definitions: [
        { term: 'TCP', definition: 'A connection-oriented transport protocol providing reliable ordered byte-stream delivery.' },
        { term: 'UDP', definition: 'A connectionless transport protocol that sends independent datagrams without delivery guarantees.' },
        { term: 'Retransmission', definition: 'Sending data again when loss is detected or inferred.' },
        { term: 'Ordering', definition: 'Delivering received data to an application in the intended sequence.' }
      ],
      examples: [
        'A software download normally values TCP reliability over receiving incomplete bytes quickly.',
        'A live call may discard a late audio packet because playing it later would be disruptive.',
        'An online game can use UDP while implementing application-specific state correction.'
      ],
      analogy: 'TCP is a checked conversation with acknowledgements; UDP is a live announcement sent without waiting for every listener to reply.',
      misconception: 'UDP is not automatically better for every fast application, and TCP is not automatically too slow for interactive use.',
      review: [
        'Compare TCP and UDP in connection state, reliability, order, retransmission, and overhead.',
        'Choose a transport approach for a file transfer and a live voice call, then justify each.'
      ]
    },
    {
      title: 'Network Performance',
      category: 'Capacity, Delay & Reliability',
      visual: 'performance',
      lead: 'Connection quality depends on capacity, achieved rate, delay, variation, loss, reliability, and congestion—not one speed number alone.',
      paragraphs: [
        'Bandwidth is the theoretical or configured capacity of a link, while throughput is the rate actually achieved by an application. Download and upload speeds measure opposite directions and may be different. Protocol overhead, server limits, wireless conditions, competing traffic, and congestion can reduce throughput.',
        'Latency is the time data takes to travel between endpoints. Jitter is variation in that delay. Packet loss means some transmitted units do not reach the destination. Reliability describes how consistently a service performs, while congestion occurs when demand exceeds available resources and queues or drops grow.',
        'Different applications stress different measures. A video buffers when sustained throughput is insufficient. A video call becomes unstable with loss or jitter. A game can lag on a high-bandwidth connection when latency is high. A useful diagnosis identifies the measure that matches the symptom.'
      ],
      definitions: [
        { term: 'Bandwidth and throughput', definition: 'Capacity versus the useful rate actually achieved.' },
        { term: 'Latency', definition: 'The time required for data or a response to travel between endpoints.' },
        { term: 'Jitter', definition: 'Variation in latency between successive packets or measurements.' },
        { term: 'Packet loss and congestion', definition: 'Missing packets and overloaded resources that can increase delay or reduce throughput.' }
      ],
      examples: [
        'A 100 Mbps link can deliver much lower application throughput during severe congestion.',
        'Stable 20 Mbps with low jitter can support a call better than a faster but erratic link.',
        'High upload use can affect a video call even when download speed appears adequate.'
      ],
      analogy: 'Bandwidth is the number of road lanes, throughput is the cars that pass, latency is travel time, jitter is changing travel time, and loss is missing deliveries.',
      misconception: 'A high download-speed result does not prove that latency, jitter, upload capacity, loss, or reliability is good.',
      review: [
        'Diagnose video buffering, broken call audio, and game lag using the correct performance terms.',
        'Distinguish bandwidth from throughput and latency from jitter.'
      ]
    }
  ],
  activity: {
    title: 'Follow the Packet and Inspect a Real Connection',
    intro: 'Use a physical packet role-play and a structured command laboratory to connect the module concepts to visible evidence.',
    tasks: [
      {
        title: 'Assign the network roles',
        scenario: 'A client must deliver one message to a destination server through a local network and an ISP.',
        prompt: 'Assign students as client, switch, router, ISP, destination server, TCP, and DNS. Give every role a card describing its responsibility.',
        response: 'The client creates the request, DNS supplies destination information, the switch handles the local link, routers and the ISP forward packets, the server receives the request, and TCP tracks reliable ordered delivery.',
        rationale: 'Separate roles prevent students from treating DNS, switching, routing, transport, and server processing as one operation.'
      },
      {
        title: 'Divide, route, lose, and recover packets',
        scenario: 'The client message is too large to represent as one delivery unit.',
        prompt: 'Divide the message into numbered packets with headers. Route them through more than one path, deliberately reorder packets, and remove one packet before delivery.',
        response: 'The destination orders the received packets, identifies the missing sequence, and the TCP role requests retransmission before the complete message is delivered.',
        rationale: 'The activity makes headers, independent paths, reassembly, loss, ordering, and retransmission observable.'
      },
      {
        title: 'Inspect the device configuration',
        scenario: 'A Windows device is connected but students must identify its actual network settings.',
        prompt: 'Run ipconfig /all. Record the private IP address, subnet mask or prefix, default gateway, configured DNS server, DHCP status, and network interface.',
        response: 'A strong record labels each value and explains its purpose instead of copying the entire command output.',
        rationale: 'Interpreting configuration connects abstract addressing and DHCP terms to the student device.'
      },
      {
        title: 'Test local, Internet, and DNS paths',
        scenario: 'The device sometimes fails to open a website and the fault location is unknown.',
        prompt: 'Ping the default gateway, ping 8.8.8.8, then ping example.com. Record success, failure, and latency, and explain what each additional test adds.',
        response: 'Gateway ping tests the local path; the public IP adds routed Internet reachability without requiring DNS; the named destination adds name resolution. A failed ping is interpreted cautiously because filtering is possible.',
        rationale: 'A staged sequence narrows the possible fault instead of mixing local connectivity, routing, DNS, and service availability.'
      },
      {
        title: 'Trace and compare destinations',
        scenario: 'Students want to see that Internet traffic crosses multiple routers and paths.',
        prompt: 'Run tracert example.com and another approved destination. Count visible hops, compare timing, note timeouts, and record what the output does and does not prove.',
        response: 'A strong report identifies visible next-hop responses, acknowledges hidden or filtered routers, compares latency cautiously, and avoids calling every timeout an outage.',
        rationale: 'Traceroute evidence reinforces next hop, TTL, multiple networks, distributed routing, and diagnostic limitations.'
      }
    ],
    reflection: [
      'Which role or command most clearly changed your mental model of packet delivery?',
      'How did the removed or reordered packet demonstrate the difference between IP delivery and TCP reliability?',
      'What result would make you investigate the local link, the gateway, Internet routing, or DNS next?'
    ]
  },
  quiz: [
    { category: 'Fundamentals', question: 'Which statement correctly distinguishes the Internet from the Web?', options: ['The Internet is interconnected network infrastructure; the Web is one service using it.', 'They are two names for one central server.', 'The Web is the physical cable system and the Internet is only webpages.', 'The Internet exists only inside browsers.'], answer: 0, explanation: 'The Internet connects networks through TCP/IP, while the Web delivers linked resources over that infrastructure.' },
    { category: 'Network Devices', question: 'Which device primarily forwards packets between different IP networks?', options: ['Router', 'Switch', 'Network interface card', 'Wireless keyboard'], answer: 0, explanation: 'A router moves packets between networks; a switch mainly connects devices inside a local network.' },
    { category: 'Infrastructure', question: 'What is the main purpose of an Internet exchange point?', options: ['Let independently operated networks exchange traffic', 'Assign every private Wi-Fi address', 'Store all webpages in one facility', 'Convert every cable into satellite radio'], answer: 0, explanation: 'An IXP is a facility where networks interconnect and exchange traffic.' },
    { category: 'Packets', question: 'What is the difference between a packet header and payload?', options: ['The header carries delivery and control information; the payload carries data.', 'The payload chooses the route and the header is always empty.', 'The header is the whole file and the payload is the cable.', 'They are identical names for the same bytes.'], answer: 0, explanation: 'Headers contain protocol control information; payloads contain carried upper-layer data.' },
    { category: 'TCP/IP Model', question: 'Which TCP/IP layer provides IPv4 and IPv6 addressing and routing?', options: ['Internet layer', 'Application layer', 'Transport layer', 'Network access layer'], answer: 0, explanation: 'The Internet layer provides logical addressing and routing.' },
    { category: 'Addressing', question: 'Which comparison is correct?', options: ['A MAC address identifies a local interface; an IP address supports logical network delivery.', 'A port number replaces both MAC and IP addresses.', 'A domain name is always the same as a MAC address.', 'An IPv6 address is a password.'], answer: 0, explanation: 'MAC addressing is local-link oriented, while IP addressing supports delivery across networks.' },
    { category: 'IPv6', question: 'Why is IPv6 a required modern topic?', options: ['It is the newer 128-bit Internet Protocol with a greatly expanded address space.', 'It is only a temporary Wi-Fi network name.', 'It is an obsolete seven-layer model.', 'It converts webpages into email.'], answer: 0, explanation: 'IPv6 is the newer version of IP and uses 128-bit addresses.' },
    { category: 'DHCP', question: 'Which configuration does DHCP commonly supply?', options: ['IP address, prefix, default gateway, and DNS server', 'Username, password, and browser history', 'Only a website URL', 'CPU speed and storage size'], answer: 0, explanation: 'DHCP supplies the network values a client needs to communicate locally and beyond the LAN.' },
    { category: 'NAT', question: 'What does NAT commonly do on a private IPv4 network?', options: ['Translate private connections through a public address and track reply traffic', 'Encrypt every packet automatically', 'Replace DNS with a switch', 'Increase the physical bandwidth of fiber'], answer: 0, explanation: 'NAT translates address and port information; it is not encryption or a firewall.' },
    { category: 'Ports', question: 'What does an IP address plus transport protocol and port identify?', options: ['A network service endpoint', 'The physical length of a cable', 'A complete BGP routing table', 'A permanent personal identity'], answer: 0, explanation: 'The IP locates the interface and the port directs traffic to the application service.' },
    { category: 'Routing', question: 'What is a next hop?', options: ['The next router or destination interface selected for a packet', 'The number of bytes in the payload', 'The final DNS text record', 'The user’s next browser click'], answer: 0, explanation: 'Routing tables select a next hop toward the destination.' },
    { category: 'Internet Routing', question: 'Why does the Internet not require one central router?', options: ['Autonomous systems exchange reachability information using BGP.', 'Every client stores every Internet route forever.', 'All packets use one satellite.', 'DNS forwards every data packet.'], answer: 0, explanation: 'BGP allows independently operated autonomous systems to exchange reachability.' },
    { category: 'Transport', question: 'Which statement best compares TCP and UDP?', options: ['TCP provides reliable ordered delivery; UDP sends datagrams without delivery or order guarantees.', 'UDP is always faster and always better.', 'TCP is an application-layer webpage language.', 'Both automatically retransmit every missing datagram.'], answer: 0, explanation: 'Applications choose according to reliability, ordering, timing, and overhead needs.' },
    { category: 'Performance', question: 'A game lags despite high download speed. Which measure may be the main problem?', options: ['Latency', 'Screen resolution', 'File extension', 'MAC vendor name'], answer: 0, explanation: 'Interactive applications are sensitive to delay, which download speed does not measure.' },
    { category: 'Troubleshooting', question: 'A device can ping 8.8.8.8 but cannot resolve example.com. What should be checked next?', options: ['DNS resolution and the configured DNS server', 'The monitor cable', 'The keyboard layout', 'The processor clock'], answer: 0, explanation: 'Successful IP reachability with failed names suggests a DNS configuration or resolution problem.' }
  ],
  summary: {
    intro: 'Internet Part 1 builds a correct mental model of how devices connect and how packets travel through local and global networks.',
    points: [
      'The Internet is distributed infrastructure connecting networks; the Web is one service using it.',
      'Ethernet, fiber, Wi-Fi, cellular links, submarine cables, satellites, ISPs, data centers, and IXPs form the physical system.',
      'NICs, switches, access points, routers, modems or ONTs, servers, and firewalls have distinct roles.',
      'Packet headers guide delivery while payloads carry data; encapsulation applies the four TCP/IP layers.',
      'MAC, IPv4, IPv6, public and private addresses, prefixes, gateways, and ports solve different addressing tasks.',
      'DHCP supplies configuration, NAT translates connections, and routing tables select next hops.',
      'Autonomous systems exchange reachability through BGP without one central Internet router.',
      'TCP and UDP serve different application needs, while performance depends on throughput, delay, variation, loss, and congestion.'
    ],
    review: [
      'Trace a packet from a Wi-Fi client through local equipment and an ISP to a server.',
      'Explain DHCP, NAT, ports, routing, TCP, and UDP without treating them as the same function.',
      'Choose the correct command and performance term for a basic connectivity symptom.'
    ],
    next: 'Continue to Internet Part 2 to follow a URL through DNS, TLS, HTTP, browser rendering, security, and troubleshooting.'
  }
};
