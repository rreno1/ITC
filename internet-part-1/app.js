// app.js

// Presentation State
let currentSlide = 1;
const totalSlides = 10;
const MODULE_ID = 'internet-part-1';

// Slide Titles for Left Sidebar Checklist
const SLIDE_TITLES = [
    "Welcome & Intro",
    "Fundamentals & Infrastructure",
    "Packets & TCP/IP Layers",
    "Addressing & Configuration",
    "Ports & Internet Routing",
    "TCP, UDP & Performance",
    "DHCP Simulation",
    "Follow the Packet Lab",
    "Quiz Assessment",
    "Summary & Review"
];

// The curriculum is rendered from one authoritative block so the lesson text,
// activity, laboratory, and review stay aligned with the two-part specification.
function renderStrictCurriculum() {
    const lessons = {
        2: `
          <div class="section-title"><span class="slide-num">02</span><span class="badge-label ohs-bg">Foundations</span><h2>Internet Fundamentals & Physical Infrastructure</h2></div>
          <p class="lead-text">A <strong>computer network</strong> is a group of connected devices that exchange data. The <strong>Internet</strong> is the worldwide network of interconnected networks using TCP/IP; the <strong>World Wide Web</strong> is only one service that operates on it.</p>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>Network scope and organization</h3>
              <ul class="slide-body-bullets">
                <li><strong>LAN</strong> is a local wired network, <strong>WLAN</strong> is a local wireless network, and <strong>WAN</strong> links networks across a larger area.</li>
                <li>A <strong>host</strong> is an endpoint. A <strong>client</strong> requests a resource; a <strong>server</strong> provides a resource or service.</li>
                <li><strong>Centralized</strong> networks depend on central services; in <strong>peer-to-peer</strong> networks, devices can provide resources directly to one another.</li>
                <li>An <strong>intranet</strong> is private to an organization, an <strong>extranet</strong> gives controlled access to partners, and the public Internet is globally reachable.</li>
              </ul>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>The physical Internet</h3>
              <p>Ethernet copper, fiber-optic and submarine cables, Wi-Fi, cellular networks, and satellites carry signals. ISPs connect customers, data centers host services, and Internet exchange points let networks exchange traffic.</p>
              <ul class="slide-body-bullets">
                <li><strong>NIC:</strong> connects a device; <strong>switch:</strong> connects devices inside a LAN.</li>
                <li><strong>Router:</strong> moves packets between networks; <strong>access point:</strong> provides Wi-Fi.</li>
                <li><strong>Modem/ONT:</strong> links the local network to an ISP; <strong>firewall:</strong> controls permitted traffic.</li>
              </ul>
            </div>
          </div>
          <div class="article-divider"></div>
          <article class="slide-article-body"><h3>Correct mental model</h3><p>The Internet has no single central machine. Independently operated networks interconnect through providers and exchange points because they agree to use common protocols. Web browsing, email, messaging, streaming, and online games are different services using this shared infrastructure.</p><p>A home “router” may combine a router, switch, access point, firewall, DHCP server, and NAT function in one box. Device names describe roles, not always separate physical machines.</p></article>`,
        3: `
          <div class="section-title"><span class="slide-num">03</span><span class="badge-label path-bg">Packets & Layers</span><h2>Packet Switching & the TCP/IP Model</h2></div>
          <p class="lead-text">Files and messages are normally divided into <strong>packets</strong>, not sent as one continuous object.</p>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>How packet switching works</h3>
              <ul class="slide-body-bullets">
                <li>The <strong>payload</strong> is the carried data; the <strong>header</strong> contains delivery and control information.</li>
                <li>Routers forward packets independently, so packets from one message may take different routes.</li>
                <li>The destination reassembles the data. Packets can be delayed, duplicated, corrupted, lost, or received out of order.</li>
                <li>Analogy: payload = item, header = label, router = sorting facility, IP address = destination, protocol = delivery rules.</li>
              </ul>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>Practical four-layer TCP/IP model</h3>
              <table style="width:100%;border-collapse:collapse">
                <tr><th style="text-align:left">Layer</th><th style="text-align:left">Responsibility and examples</th></tr>
                <tr><td><strong>Application</strong></td><td>Application services: HTTP, DNS, SMTP</td></tr>
                <tr><td><strong>Transport</strong></td><td>End-to-end communication: TCP, UDP</td></tr>
                <tr><td><strong>Internet layer</strong></td><td>Addressing and routing: IPv4, IPv6, ICMP</td></tr>
                <tr><td><strong>Network access</strong></td><td>Local transmission: Ethernet, Wi-Fi</td></tr>
              </table>
            </div>
          </div>
          <div class="article-divider"></div>
          <article class="slide-article-body"><h3>Encapsulation</h3><p>As data moves down the stack, each layer adds the information it needs; the receiver processes that information in reverse. The seven-layer OSI model can be useful as a reference, but memorizing all seven layers is not the objective of this introductory module.</p></article>`,
        4: `
          <div class="section-title"><span class="slide-num">04</span><span class="badge-label tools-bg">Addressing</span><h2>Network Addressing & Automatic Configuration</h2></div>
          <p class="lead-text">Different identifiers answer different delivery questions; they are not interchangeable.</p>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>Addressing essentials</h3>
              <ul class="slide-body-bullets">
                <li>A <strong>MAC address</strong> identifies a network interface on the local link.</li>
                <li>An <strong>IPv4 address</strong> is 32 bits. <strong>IPv6</strong> is the newer 128-bit Internet Protocol and a core modern standard.</li>
                <li><strong>Private IPs</strong> serve local networks; <strong>public IPs</strong> are globally routed. An address may be <strong>static</strong> or assigned <strong>dynamically</strong>.</li>
                <li>A <strong>subnet mask/network prefix</strong> identifies which devices share a local network. Binary subnet calculations are outside this module.</li>
              </ul>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>When a phone or laptop joins Wi-Fi</h3>
              <ol class="slide-body-bullets">
                <li>The device connects to the wireless access point.</li>
                <li><strong>DHCP</strong> supplies an IP address, prefix, <strong>default gateway</strong>, and <strong>DNS server</strong>.</li>
                <li>The gateway routes traffic to other networks.</li>
                <li>On many IPv4 networks, <strong>NAT</strong> translates private connections to a public address and tracks their return traffic.</li>
              </ol>
            </div>
          </div>
          <div class="article-divider"></div>
          <article class="slide-article-body"><h3>Important distinctions</h3><p>DHCP commonly follows Discover, Offer, Request, and Acknowledge (DORA), then leases the configuration temporarily. NAT is address translation, not encryption and not a firewall. IPv6 greatly expands the address space and should not be treated as an optional curiosity merely because IPv4 and NAT remain common.</p></article>`,
        5: `
          <div class="section-title"><span class="slide-num">05</span><span class="badge-label ohs-bg">Services & Routes</span><h2>Ports & Routing Across the Internet</h2></div>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>Ports identify applications</h3>
              <p>An IP address identifies a device or network interface; a <strong>port number</strong> helps identify an application or service. Together, <strong>IP address + port number = a specific network service</strong>.</p>
              <table style="width:100%;border-collapse:collapse"><tr><th>Service</th><th>Common port</th></tr><tr><td>HTTP</td><td>80</td></tr><tr><td>HTTPS</td><td>443</td></tr><tr><td>DNS</td><td>53</td></tr><tr><td>SSH</td><td>22</td></tr><tr><td>SMTP</td><td>25</td></tr></table>
              <p>Recognize these examples; do not memorize dozens of ports.</p>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>How routers choose a direction</h3>
              <ul class="slide-body-bullets">
                <li>A <strong>routing table</strong> maps destinations to a <strong>next hop</strong>; a <strong>default route</strong> handles destinations without a more specific match.</li>
                <li><strong>TTL</strong> in IPv4 or <strong>hop limit</strong> in IPv6 prevents a packet from looping forever.</li>
                <li>Traffic can use multiple possible paths through routers operated by different organizations.</li>
                <li>An <strong>autonomous system</strong> is a network under one routing policy. <strong>BGP</strong> exchanges reachability between autonomous systems.</li>
              </ul>
            </div>
          </div>
          <div class="article-divider"></div>
          <article class="slide-article-body"><h3>A distributed system</h3><p>BGP lets independently operated networks learn how other networks can be reached. Students do not configure BGP or memorize its route-selection rules here; the goal is to understand why the Internet works without one central router.</p></article>`,
        6: `
          <div class="section-title"><span class="slide-num">06</span><span class="badge-label tools-bg">Transport & Quality</span><h2>TCP, UDP & Network Performance</h2></div>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>Two transport approaches</h3>
              <p><strong>TCP</strong> is a transport-layer protocol that manages communication between endpoints; <strong>UDP</strong> provides connectionless datagrams.</p>
              <table style="width:100%;border-collapse:collapse"><tr><th>TCP</th><th>UDP</th></tr><tr><td>Connection-oriented</td><td>Connectionless</td></tr><tr><td>Reliable, ordered delivery</td><td>No delivery or order guarantee</td></tr><tr><td>Retransmits missing data</td><td>No automatic retransmission</td></tr><tr><td>More management overhead</td><td>Lower overhead</td></tr><tr><td>Websites, file transfer</td><td>Live media, games, real-time traffic</td></tr></table>
              <p>“TCP is slow” and “UDP is fast” are oversimplifications. The application’s reliability and timing requirements determine the appropriate transport.</p>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>Performance vocabulary</h3>
              <ul class="slide-body-bullets">
                <li><strong>Bandwidth</strong> is capacity; <strong>throughput</strong> is the achieved data rate.</li>
                <li><strong>Latency</strong> is delay; <strong>jitter</strong> is variation in delay.</li>
                <li><strong>Packet loss</strong>, <strong>congestion</strong>, and <strong>reliability</strong> affect quality.</li>
                <li><strong>Download</strong> and <strong>upload</strong> speeds measure opposite directions.</li>
              </ul>
              <p>Video buffers when throughput is insufficient; calls break up with loss or jitter; games can lag despite high download speed when latency is high.</p>
            </div>
          </div>`,
        7: `
          <div class="section-title text-center"><span class="slide-num">07</span><span class="badge-label quiz-bg">Guided Simulation</span><h2>DHCP: Join a Network</h2><p>Step through DORA, then identify the configuration a device needs.</p></div>
          <div class="interactive-container">
            <div class="dhcp-workspace" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;width:100%;margin-top:15px">
              <div class="glass-card" style="padding:20px;display:flex;flex-direction:column;gap:15px;justify-content:center;align-items:center">
                <button class="btn btn-primary" id="dhcp-action-btn" onclick="triggerDHCPStep()">Start DHCP Discover</button>
                <div style="text-align:center"><div style="font-size:12px;color:var(--text-secondary);text-transform:uppercase">Connection state</div><div id="dhcp-status-text" style="font-size:20px;font-weight:700">Disconnected</div></div>
                <div id="dhcp-lease-timer" class="hidden" style="color:var(--color-accent)">Lease time remaining: <span id="dhcp-time-val">60</span>s</div>
              </div>
              <div class="glass-card" style="padding:20px;max-height:280px;overflow-y:auto"><h3>DORA transaction log</h3><div id="dhcp-log-box" style="font-family:monospace;font-size:12px;color:var(--text-secondary)"><div>Ready. Start by broadcasting DISCOVER.</div></div></div>
            </div>
            <div class="glass-card" style="padding:16px;margin-top:16px"><strong>After ACK, verify:</strong> the private IP address, network prefix, default gateway, and DNS server. Explain why the gateway is needed for remote destinations and why DNS is not the same as the gateway.</div>
          </div>`,
        8: `
          <div class="section-title"><span class="slide-num">08</span><span class="badge-label quiz-bg">Activity & Laboratory</span><h2>Follow the Packet & Diagnose the Path</h2></div>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px">
              <h3>Role-play: Follow the Packet</h3>
              <p>Assign students the roles <strong>client, switch, router, ISP, destination server, TCP, and DNS</strong>. Divide a message into numbered packets with destination headers.</p>
              <ol class="slide-body-bullets"><li>Forward packets using the destination information.</li><li>Send some packets along different router paths.</li><li>Remove or reorder one packet.</li><li>At the destination, reassemble the message; let TCP detect and request the missing packet.</li></ol>
            </div>
            <div class="split-right glass-card" style="padding:18px">
              <h3>Part 1 laboratory</h3>
              <ol class="slide-body-bullets"><li>Run <code>ipconfig /all</code>; identify the private IP, prefix/subnet mask, gateway, DNS server, and whether DHCP is enabled.</li><li><code>ping &lt;gateway&gt;</code> tests the local path.</li><li><code>ping 8.8.8.8</code> tests IP reachability without requiring DNS.</li><li><code>ping example.com</code> also requires name resolution.</li><li><code>tracert example.com</code> reveals visible router hops; compare latency to another destination.</li></ol>
              <p>Interpret the results and limitations; do not merely copy commands.</p>
            </div>
          </div>
          <div class="article-divider"></div><article class="slide-article-body"><h3>Evidence to record</h3><p>Record the command, result, latency or hop count, and what the result does—and does not—prove. A blocked ping response does not automatically mean a website is offline.</p></article>`,
        10: `
          <div class="section-title"><span class="slide-num">10</span><span class="badge-label ohs-bg">Review</span><h2>Internet Part 1: Required Outcomes</h2></div>
          <p class="lead-text">You should now be able to explain how devices connect and how data travels.</p>
          <div class="split-layout">
            <div class="split-left glass-card" style="padding:18px"><h3>I can explain…</h3><ul class="slide-body-bullets"><li>the difference between the Internet and the Web;</li><li>the roles of a modem/ONT, router, switch, access point, server, firewall, and ISP;</li><li>packet switching, encapsulation, and the four TCP/IP layers;</li><li>MAC, IPv4, IPv6, public/private addresses, network prefixes, gateways, DHCP, NAT, and ports;</li><li>routing, autonomous systems, BGP, TCP, UDP, and performance measures.</li></ul></div>
            <div class="split-right glass-card" style="padding:18px"><h3>Keep the focus conceptual</h3><p>The goal is a correct mental model, not memorizing all seven OSI layers, doing binary subnet calculations, configuring router command lines or BGP, decoding full TCP headers, performing cryptographic mathematics, memorizing dozens of ports, or cataloguing every historical protocol.</p><h3>Bridge to Part 2</h3><p>Part 2 uses this transport foundation to explain DNS, URLs, HTTP, TLS, browser rendering, Internet services, security, governance, and troubleshooting.</p></div>
          </div>`
    };

    Object.entries(lessons).forEach(([number, html]) => {
        const content = document.querySelector(`#slide-${number} .slide-content`);
        if (!content) return;
        let styled = html.replace('<div class="split-layout">', '<div class="syllabus-content-grid">');
        const visual = PART1_VISUALS[number] || '';
        if (visual) {
            const visualTarget = '<div class="split-right glass-card" style="padding:18px">';
            styled = styled.replace(visualTarget, `${visualTarget}${visual}`);
        }
        content.classList.add('syllabus-slide-content');
        content.innerHTML = styled + renderDetailedLectureNotes(PART1_DETAILED_NOTES[number]);
    });
}

const PART1_VISUALS = {
    2: `<div class="concept-visual visual-flow" style="min-height:170px" role="img" aria-label="Device connected through local network equipment and an ISP to a data center"><span>Device + NIC</span><b>&rarr;</b><span>Switch / Wi-Fi</span><b>&rarr;</b><span>Router + ONT</span><b>&rarr;</b><span>ISP / IXP</span><b>&rarr;</b><span>Data center</span></div>`,
    3: `<div class="concept-visual visual-flow" style="min-height:170px" role="img" aria-label="A message divided into packets, routed, and reassembled"><span>Message</span><b>&rarr;</b><span>Packet 1</span><span>Packet 2</span><span>Packet 3</span><b>&rarr;</b><span>Different routes</span><b>&rarr;</b><span>Reassembled data</span></div>`,
    4: `<div class="concept-visual visual-flow" style="min-height:170px" role="img" aria-label="Local and Internet addressing path"><span>MAC: local link</span><b>&rarr;</b><span>Private IP</span><b>&rarr;</b><span>Gateway + NAT</span><b>&rarr;</b><span>Public Internet</span></div>`,
    5: `<div class="concept-visual visual-flow" style="min-height:170px" role="img" aria-label="Router forwarding a service request through autonomous systems"><span>IP + port</span><b>&rarr;</b><span>Routing table</span><b>&rarr;</b><span>Next hop</span><b>&rarr;</b><span>AS / BGP</span><b>&rarr;</b><span>Service</span></div>`,
    6: `<div class="concept-visual visual-security" style="min-height:170px" role="img" aria-label="Network performance measures"><span><strong>1</strong>Capacity: bandwidth</span><span><strong>2</strong>Actual rate: throughput</span><span><strong>3</strong>Delay: latency + jitter</span><span><strong>4</strong>Quality: loss + reliability</span></div>`,
    8: `<div class="concept-visual visual-code" style="min-height:170px" role="img" aria-label="Network troubleshooting commands"><code>ipconfig /all</code><code>ping &lt;gateway&gt;</code><code>ping 8.8.8.8</code><code>ping example.com</code><code>tracert example.com</code></div>`
};

const PART1_DETAILED_NOTES = {
    2: {
        paragraphs: [
            'A local connection is only the first segment of an Internet path. A device uses a NIC to reach a switch or access point, a router forwards traffic beyond the local network, and a modem or optical network terminal connects the premises to an ISP. From there, providers interconnect through backbone links and exchange points until traffic reaches a service in a data center.',
            'Network labels describe scope and responsibility. LAN, WLAN, and WAN describe reach; client, server, and host describe endpoint roles; intranet, extranet, and public Internet describe who may access resources. Centralized and peer-to-peer designs describe where services and control are located.'
        ],
        definitions: [['Host','Any endpoint with a network interface and address.'],['ISP','An organization that provides connectivity to other networks.'],['IXP','A facility where independently operated networks exchange traffic.'],['Firewall','A control that permits or blocks network traffic according to rules.']],
        examples: ['A phone uses Wi-Fi to reach an access point, then a home router and fiber ONT before entering the ISP.', 'A school intranet may be private while selected partner resources are offered through an extranet.'],
        analogy: 'Think of local streets feeding a highway system: switches and access points serve the neighborhood, routers choose exits, and ISPs connect highway systems.',
        misconception: 'The Internet and the Web are not synonyms. The Web is one service; email, calls, games, and many other services also use Internet infrastructure.',
        review: ['Trace the equipment between a classroom laptop and its ISP.', 'Classify a school wireless network as LAN, WLAN, or WAN and explain why.']
    },
    3: {
        paragraphs: [
            'Packet switching shares network links efficiently by dividing a message into manageable units. Each packet carries a payload and control information in headers. Routers do not need all packets from one message to follow the same path, so a receiver must handle delay, reordering, duplication, corruption, and loss.',
            'Encapsulation connects this process to the TCP/IP model. Application data is prepared by a transport protocol, addressed by the Internet layer, and placed into a local Ethernet or Wi-Fi frame. The receiver removes and interprets those layers in reverse.'
        ],
        definitions: [['Payload','The application data carried inside a packet.'],['Header','Delivery and control information added by a protocol layer.'],['Encapsulation','Adding layer-specific information as data moves down the protocol stack.'],['ICMP','An Internet-layer protocol used for control and diagnostic messages.']],
        examples: ['Packets from one download may cross different routers and still be reassembled correctly.', 'A lost TCP segment can be retransmitted without resending the entire file.'],
        analogy: 'A packet is a labeled parcel: the label guides delivery, while the payload is the item inside.',
        misconception: 'A file does not normally travel as one unbroken object, and the OSI model is not the only useful way to describe networking.',
        review: ['Name the responsibility of each TCP/IP layer.', 'Explain why packets from the same message can arrive out of order.']
    },
    4: {
        paragraphs: [
            'A MAC address is meaningful on a local link, while an IP address supports logical delivery across networks. An IPv4 or IPv6 prefix separates the network portion from the interface portion. Public addresses are routed globally; private IPv4 addresses are reused inside many separate local networks.',
            'Joining Wi-Fi requires more than receiving an address. DHCP normally provides the address, prefix, default gateway, and DNS resolver. NAT may translate several private IPv4 connections through one public address, but it does not encrypt data and it is not a replacement for a firewall.'
        ],
        definitions: [['Network prefix','The part of an IP address that identifies the network.'],['Default gateway','The router used when a destination is outside the local network.'],['DHCP lease','A time-limited network configuration assigned automatically.'],['NAT','Translation between address and port information on different sides of a router.']],
        examples: ['192.168.1.24 can be private locally while the router uses a different public address online.', 'An IPv6 address provides a much larger address space than IPv4 and is a current Internet standard.'],
        analogy: 'A building room number is local like a private address; the street address is public; the reception desk routes visitors between them.',
        misconception: 'NAT is not the reason HTTPS traffic is encrypted, and IPv6 is not merely an optional curiosity.',
        review: ['List the configuration a device should receive from DHCP.', 'Distinguish a MAC address, private IP, public IP, and network prefix.']
    },
    5: {
        paragraphs: [
            'An IP address gets traffic to an endpoint; a port directs it to the intended application service. Common ports are useful landmarks, but the key idea is the endpoint pair rather than memorizing a long table of numbers.',
            'Routers compare a destination with entries in a routing table and select a next hop. A default route handles destinations without a more specific match. Across organizations, autonomous systems exchange reachability through BGP, producing a distributed Internet without a single master router.'
        ],
        definitions: [['Port','A transport-layer number that identifies an application endpoint.'],['Next hop','The next router or interface selected for a packet.'],['Default route','A route used when no more specific destination matches.'],['Autonomous system','Networks managed under one routing policy.']],
        examples: ['HTTPS commonly uses TCP port 443, while DNS commonly uses port 53.', 'TTL or hop limit is reduced at each router so a looping packet is eventually discarded.'],
        analogy: 'The IP address is an office building; the port is the department or room; routing tables are the delivery map.',
        misconception: 'BGP does not carry webpage content and beginners do not need to configure it to understand its purpose.',
        review: ['Why are both an IP address and a port needed?', 'Explain next hop, default route, TTL, and BGP in one packet journey.']
    },
    6: {
        paragraphs: [
            'TCP manages a connection, orders data, detects missing segments, and retransmits as needed. UDP sends independent datagrams without promising delivery or order. Applications select a transport according to their timing, reliability, and overhead requirements.',
            'Performance is multidimensional. Bandwidth is potential capacity; throughput is the achieved rate. Latency measures delay, jitter measures changing delay, and packet loss removes data. Congestion can reduce throughput and increase delay even when the access link advertises a high speed.'
        ],
        definitions: [['TCP','Connection-oriented transport with reliable ordered delivery.'],['UDP','Connectionless datagram transport without built-in delivery guarantees.'],['Latency','Time taken for data to travel between endpoints.'],['Jitter','Variation in delay between successive packets.']],
        examples: ['A file transfer values reliable delivery, while live voice may prefer timely data over late retransmissions.', 'A game can lag on a high-bandwidth connection when latency or jitter is high.'],
        analogy: 'TCP is a checked conversation with acknowledgements; UDP is sending timely announcements without waiting for every reply.',
        misconception: '“TCP is slow” and “UDP is fast” are incomplete claims; application behavior and network conditions determine results.',
        review: ['Choose TCP or UDP for a file download and a live call, then justify each choice.', 'Diagnose buffering, broken audio, and game lag using the correct performance terms.']
    },
    7: {
        paragraphs: [
            'The DORA exchange begins when a client broadcasts Discover because it does not yet know the DHCP server. A server Offers a configuration, the client Requests the chosen offer, and the server Acknowledges the lease. The result includes enough information to communicate locally and reach remote networks.',
            'Leases expire or renew so addresses can be managed without permanent manual assignments. In real networks, the DHCP server may be the router or a separate server, and relay mechanisms can carry requests between subnets.'
        ],
        definitions: [['Discover','Client broadcast searching for DHCP service.'],['Offer','Proposed address and configuration from a DHCP server.'],['Request','Client message selecting an offered lease.'],['Acknowledge','Server confirmation that the configuration is valid.']],
        examples: ['A phone reconnecting to school Wi-Fi may renew a previous lease.', 'A lease can include the gateway and DNS server as well as the client address.'],
        analogy: 'DHCP works like a hotel desk offering, assigning, and later reclaiming room keys.',
        misconception: 'DHCP does not create the Internet connection; it supplies configuration for using the available network.',
        review: ['Put Discover, Offer, Request, and Acknowledge in order.', 'Which four configuration values should you verify after the simulation?']
    },
    8: {
        paragraphs: [
            'The role-play turns abstract delivery into an observable process. Numbered packets expose reordering, a removed packet demonstrates loss, and a retransmission demonstrates how reliability can be added above IP. Students should annotate where addressing, switching, routing, DNS, and transport responsibilities appear.',
            'The command laboratory follows a deliberate order: inspect configuration, test the local gateway, test a public IP, add DNS by using a name, then inspect visible router hops. Each result narrows the possible fault but has limits; for example, a host may block ping while its web service remains available.'
        ],
        definitions: [['ipconfig /all','Displays detailed Windows network configuration.'],['ping','Tests reachability and round-trip timing using ICMP.'],['tracert','Shows visible hop-by-hop responses toward a destination.'],['Evidence log','A record of commands, results, observations, and conclusions.']],
        examples: ['Gateway ping fails: investigate the local link or configuration before blaming the ISP.', 'Public-IP ping succeeds but a domain name fails: investigate DNS.'],
        analogy: 'Troubleshooting is a series of checkpoints along a delivery route, starting nearest to the sender.',
        misconception: 'A single successful or failed ping does not prove that every service is working or that a website is offline.',
        review: ['Write the safest test order for a device that cannot open a website.', 'What evidence should be recorded from ping and tracert?']
    }
};

function renderDetailedLectureNotes(notes) {
    if (!notes) return '';
    const definitions = notes.definitions.map(([term, definition]) => `<div class="definition-item"><dt>${term}</dt><dd>${definition}</dd></div>`).join('');
    const examples = notes.examples.map(item => `<li>${item}</li>`).join('');
    const review = notes.review.map(item => `<li>${item}</li>`).join('');
    return `<div class="article-divider"></div><article class="slide-article-body syllabus-notes"><section><h3>Detailed lecture notes</h3><div class="lesson-explanation">${notes.paragraphs.map(item => `<p>${item}</p>`).join('')}</div></section><section><h3>Important terms</h3><dl class="definition-grid">${definitions}</dl></section><section><h3>Examples and real-world use</h3><ul class="lesson-example-list">${examples}</ul></section><aside class="analogy-callout"><strong>Simple analogy</strong><p>${notes.analogy}</p></aside><aside class="misconception-callout"><strong>Common misconception</strong><p>${notes.misconception}</p></aside><section class="lesson-review"><h3>Check your understanding</h3><ul class="review-question-list">${review}</ul></section></article>`;
}

// Quiz Database (15 Questions matching constraints)
const QUIZ_QUESTIONS = [
    {
        category: "Internet Fundamentals",
        question: "Which statement correctly distinguishes the Internet from the World Wide Web?",
        options: ["They are two names for exactly the same system.", "The Internet is interconnected network infrastructure; the Web is one service that uses it.", "The Web is the physical cable system; the Internet contains only webpages.", "The Internet is one server that stores the whole Web."],
        answer: 1,
        explanation: "The Internet connects networks through TCP/IP. The Web is a system of webpages and resources delivered over that infrastructure."
    },
    {
        category: "Network Devices",
        question: "Which device primarily forwards packets between different networks?",
        options: ["Switch", "Router", "Network interface card", "Wireless access point"],
        answer: 1,
        explanation: "A router moves packets between networks; a switch mainly connects devices inside a local network."
    },
    {
        category: "Infrastructure",
        question: "What is the main purpose of an Internet exchange point (IXP)?",
        options: ["To manufacture Wi-Fi adapters", "To let independently operated networks exchange traffic", "To translate every domain name", "To store all public webpages"],
        answer: 1,
        explanation: "An IXP is a facility where networks interconnect and exchange traffic."
    },
    {
        category: "Packet Switching",
        question: "What is the difference between a packet header and its payload?",
        options: ["The header carries delivery/control information; the payload carries the data.", "The payload chooses the route; the header is always empty.", "The header is the entire file; the payload is the cable signal.", "There is no difference."],
        answer: 0,
        explanation: "Headers contain information needed to deliver and manage a packet; payloads contain the carried data."
    },
    {
        category: "TCP/IP Model",
        question: "At which practical TCP/IP layer do IPv4, IPv6, and routing operate?",
        options: ["Application", "Transport", "Internet", "Network access"],
        answer: 2,
        explanation: "The Internet layer provides addressing and routing through protocols such as IPv4 and IPv6."
    },
    {
        category: "Addressing",
        question: "Which comparison is correct?",
        options: ["A MAC address identifies a local interface, while an IP address supports logical network delivery.", "A domain name and MAC address are always identical.", "A port replaces both MAC and IP addresses.", "An IPv6 address is a type of password."],
        answer: 0,
        explanation: "MAC addresses are used on the local link; IP addresses provide logical addressing across networks."
    },
    {
        category: "IPv6",
        question: "Why must IPv6 be included as a modern core topic?",
        options: ["It is a 128-bit successor that greatly expands the Internet address space.", "It is only a temporary Wi-Fi name.", "It converts websites into email.", "It is an obsolete seven-layer model."],
        answer: 0,
        explanation: "IPv6 uses 128-bit addresses and is the newer version of the Internet Protocol."
    },
    {
        category: "DHCP",
        question: "Which set of information does DHCP commonly provide when a device joins a network?",
        options: ["IP address, network prefix, default gateway, and DNS server", "Username, password, and browser history", "Only a public website URL", "CPU speed and storage capacity"],
        answer: 0,
        explanation: "DHCP automatically supplies the network configuration needed to communicate locally and beyond the LAN."
    },
    {
        category: "NAT",
        question: "What does NAT commonly do on an IPv4 home network?",
        options: ["Encrypt every packet", "Translate private-address connections to a public address and track return traffic", "Replace DNS with a switch", "Increase physical bandwidth"],
        answer: 1,
        explanation: "NAT translates address/port information; it is not encryption and is not the same as a firewall."
    },
    {
        category: "Ports",
        question: "What does the combination of an IP address and port number identify?",
        options: ["A specific network service at an endpoint", "The physical length of a cable", "A user's legal identity", "A complete routing table"],
        answer: 0,
        explanation: "The IP identifies the interface or host location; the port directs traffic to a service or application."
    },
    {
        category: "Routing",
        question: "What is a router's next hop?",
        options: ["The next router or destination interface to which it forwards a packet", "The number of bytes in the payload", "The final DNS record", "The user's next mouse click"],
        answer: 0,
        explanation: "A routing-table entry directs a packet toward a next hop on the path to its destination."
    },
    {
        category: "Internet Routing",
        question: "Why does the Internet not require one central router?",
        options: ["Autonomous systems exchange reachability information using BGP.", "Every client stores every packet forever.", "All packets travel by satellite.", "DNS performs all packet forwarding."],
        answer: 0,
        explanation: "BGP allows independently operated autonomous systems to exchange reachability information."
    },
    {
        category: "TCP and UDP",
        question: "Which statement best compares TCP and UDP?",
        options: ["TCP manages reliable ordered delivery; UDP sends datagrams without guaranteeing delivery or order.", "UDP is always faster and therefore always better.", "TCP is an application-layer website language.", "Both automatically retransmit every missing datagram."],
        answer: 0,
        explanation: "Applications choose TCP or UDP according to reliability, ordering, overhead, and timing requirements."
    },
    {
        category: "Performance",
        question: "A game lags even though the connection has high download speed. Which measure may be the problem?",
        options: ["Latency", "Screen resolution", "File extension", "MAC vendor name"],
        answer: 0,
        explanation: "Interactive applications are sensitive to latency; raw bandwidth or download speed does not describe delay."
    },
    {
        category: "Troubleshooting",
        question: "A device can ping 8.8.8.8 but cannot ping example.com. What should be tested next?",
        options: ["DNS resolution and the configured DNS server", "The monitor cable", "The keyboard layout", "The CPU clock"],
        answer: 0,
        explanation: "Successful IP reachability with failed name-based access suggests a DNS problem."
    }
];

// DHCP Simulator State
let dhcpStep = 0; // 0: Idle, 1: Discover, 2: Offer, 3: Request, 4: Bound
let dhcpTimer = null;
let leaseSeconds = 60;

// IP Converter State
let ipValue = "192.168.1.50";

// Quiz State
let quizCurrentQuestion = 0;
let quizScore = 0;
let quizAnswers = [];

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
    renderStrictCurriculum();
    setupNavigation();
    setupKeyboardShortcuts();
    resetQuiz();
    if (typeof initOneTimeQuizGate === 'function') {
        initOneTimeQuizGate({ moduleId: MODULE_ID, total: QUIZ_QUESTIONS.length, resetQuiz });
    }
    if (typeof initFinishModuleControl === 'function') {
        initFinishModuleControl({ moduleId: MODULE_ID, totalLessons: totalSlides, requiresQuiz: true });
    }
    if (typeof openRequestedLesson === 'function') openRequestedLesson(goToSlide, totalSlides);
    // Scroll Prompt setup
    setupScrollPromptListeners();
    setTimeout(updateScrollPrompt, 100);
});

// Setup Presentation Navigation
function setupNavigation() {
    populateSidebar();
    updateProgress();
    setupDots();

    // Next / Prev button event listeners
    document.getElementById("prevBtn").addEventListener("click", prevSlide);
    document.getElementById("nextBtn").addEventListener("click", nextSlide);

    // Help Modal listeners
    const helpToggle = document.getElementById("helpToggle");
    const helpModal = document.getElementById("helpModal");
    const closeHelp = document.getElementById("closeHelpModal");

    if (helpToggle && helpModal) {
        helpToggle.addEventListener("click", () => {
            helpModal.classList.toggle("active");
        });
    }
    if (closeHelp && helpModal) {
        closeHelp.addEventListener("click", () => {
            helpModal.classList.remove("active");
        });
    }
    if (helpModal) {
        helpModal.addEventListener("click", (e) => {
            if (e.target === helpModal) helpModal.classList.remove("active");
        });
    }
}

// Generate Checklist Sidebar steps
function populateSidebar() {
    const sidebar = document.getElementById("sidebarChecklist");
    if (!sidebar) return;
    
    sidebar.innerHTML = "";
    SLIDE_TITLES.forEach((title, idx) => {
        const slideNum = idx + 1;
        const li = document.createElement("li");
        li.className = `sidebar-item ${slideNum === currentSlide ? 'active' : ''} ${slideNum < currentSlide ? 'completed' : ''}`;
        li.setAttribute("data-target", slideNum);
        li.setAttribute("role", "button");
        li.setAttribute("tabindex", "0");
        if (slideNum === currentSlide) li.setAttribute("aria-current", "step");
        
        const dot = document.createElement("span");
        dot.className = "step-indicator-dot";
        dot.innerText = slideNum;
        
        const label = document.createElement("span");
        label.innerText = title;
        
        li.appendChild(dot);
        li.appendChild(label);
        
        li.addEventListener("click", () => {
            goToSlide(slideNum);
        });
        
        sidebar.appendChild(li);
    });
}

// Setup navigation dots at the bottom
function setupDots() {
    const dotsContainer = document.getElementById("slideDots");
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";
    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement("div");
        dot.className = `dot ${i === currentSlide ? "active-dot" : ""}`;
        dot.title = `Jump to Slide ${i}`;
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Go to specific slide
function goToSlide(slideNum) {
    if (slideNum < 1 || slideNum > totalSlides) return;
    if (typeof isQuizNavigationLocked === 'function' && isQuizNavigationLocked() && slideNum !== currentSlide) {
        if (typeof showToast === 'function') showToast('Finish the active quiz before leaving this slide.', 'error');
        return;
    }

    // Slide transition
    const oldSlide = document.getElementById(`slide-${currentSlide}`);
    const newSlide = document.getElementById(`slide-${slideNum}`);

    if (oldSlide) oldSlide.classList.remove("active-slide");
    if (newSlide) {
        newSlide.classList.add("active-slide");
        newSlide.scrollTop = 0; // Reset scroll position to top
    }

    currentSlide = slideNum;
    
    // Update sidebar checklist states
    const items = document.querySelectorAll(".sidebar-item");
    items.forEach((item, idx) => {
        const itemNum = idx + 1;
        item.classList.toggle("active", itemNum === currentSlide);
        item.classList.toggle("completed", itemNum < currentSlide);
        if (itemNum === currentSlide) item.setAttribute("aria-current", "step");
        else item.removeAttribute("aria-current");
    });

    // Update dots indicator
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active-dot", idx + 1 === currentSlide);
    });

    updateProgress();
    if (typeof recordLessonProgress === 'function') {
        recordLessonProgress(MODULE_ID, currentSlide, totalSlides);
    }
    setTimeout(updateScrollPrompt, 50); // Refresh floating indicator
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        // Block navigation inside quiz slide unless completed
        if (currentSlide === 9 && quizCurrentQuestion < QUIZ_QUESTIONS.length) {
            return;
        }
        goToSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        goToSlide(currentSlide - 1);
    }
}

// Update Slide Progress indicators
function updateProgress() {
    const progressBar = document.getElementById("progressBar");
    const currentNumEl = document.getElementById("currentSlideNum");
    const totalNumEl = document.getElementById("totalSlidesNum");

    if (currentNumEl) currentNumEl.innerText = currentSlide;
    if (totalNumEl) totalNumEl.innerText = totalSlides;

    if (progressBar) {
        const percentage = ((currentSlide - 1) / (totalSlides - 1)) * 100;
        progressBar.style.width = `${percentage}%`;
    }
}

// Keyboard shortcuts mapping
function setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "Space") {
            if (currentSlide === 9 && quizCurrentQuestion < QUIZ_QUESTIONS.length) {
                return;
            }
            nextSlide();
            if (e.key === "Space") e.preventDefault();
        } else if (e.key === "ArrowLeft") {
            prevSlide();
        } else if (e.key === "t" || e.key === "T") {
            const themeToggle = document.getElementById("themeToggle");
            if (themeToggle) themeToggle.click();
        } else if (e.key === "h" || e.key === "H") {
            const helpModal = document.getElementById("helpModal");
            if (helpModal) helpModal.classList.toggle("active");
        } else if (e.key === "f" || e.key === "F") {
            toggleFullscreen();
        }
    });
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Floating Scroll Prompt Management
function updateScrollPrompt() {
    const prompt = document.getElementById("scrollPrompt");
    if (!prompt) return;

    const activeSlideEl = document.getElementById(`slide-${currentSlide}`);
    if (!activeSlideEl) return;

    const isScrollable = activeSlideEl.scrollHeight > activeSlideEl.clientHeight + 15;
    const isScrolledDown = activeSlideEl.scrollTop > 30;

    if (isScrollable && !isScrolledDown) {
        prompt.classList.add("visible");
        prompt.classList.remove("hidden");
    } else {
        prompt.classList.remove("visible");
        prompt.classList.add("hidden");
    }
}

// Add scroll listeners to all slides
function setupScrollPromptListeners() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
        slide.addEventListener("scroll", () => {
            updateScrollPrompt();
        });
    });
}

// Interactive Widget: DHCP DORA Simulator
function triggerDHCPStep() {
    const actionBtn = document.getElementById("dhcp-action-btn");
    const statusTxt = document.getElementById("dhcp-status-text");
    const timerBox = document.getElementById("dhcp-lease-timer");
    const timeVal = document.getElementById("dhcp-time-val");
    const logBox = document.getElementById("dhcp-log-box");

    if (!actionBtn || !statusTxt || !logBox) return;

    if (dhcpStep === 0) {
        // Broadcast DISCOVER
        dhcpStep = 1;
        statusTxt.innerText = "Discovering DHCP Server...";
        statusTxt.style.color = "var(--color-primary)";
        actionBtn.innerText = "Check for DHCP Offers";
        actionBtn.disabled = true;

        logBox.innerHTML = `<div><span style="color: var(--color-primary);">[CLIENT]</span> BROADCAST: DHCP Discover sent (Transaction ID: 0x8a92)</div>
        <div><span style="color: var(--text-secondary);">[NETWORK]</span> Searching for router interface leaseholders...</div>`;

        setTimeout(() => {
            actionBtn.disabled = false;
            logBox.innerHTML += `<div><span style="color: var(--color-success);">[ROUTER]</span> OFFER: DHCP Offer received!</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&bull; Proposed Address: 192.168.1.102</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&bull; Subnet Mask: 255.255.255.0</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&bull; Lease Time: 60 Seconds</div>`;
            statusTxt.innerText = "DHCP Offer Received";
            dhcpStep = 2;
        }, 1500);

    } else if (dhcpStep === 2) {
        // Send REQUEST
        dhcpStep = 3;
        statusTxt.innerText = "Requesting IP Lease...";
        actionBtn.disabled = true;

        logBox.innerHTML += `<div><span style="color: var(--color-primary);">[CLIENT]</span> BROADCAST: DHCP Request sent for IP 192.168.1.102</div>`;

        setTimeout(() => {
            actionBtn.disabled = false;
            logBox.innerHTML += `<div><span style="color: var(--color-success);">[ROUTER]</span> ACK: DHCP Acknowledgment received!</div>
            <div><span style="color: var(--color-success);">[SUCCESS]</span> Lease bound successfully! IP 192.168.1.102 active.</div>`;
            statusTxt.innerText = "Connected (192.168.1.102)";
            statusTxt.style.color = "var(--color-success)";
            actionBtn.innerText = "Disconnect / Release IP";
            dhcpStep = 4;

            // Start countdown timer
            leaseSeconds = 60;
            if (timerBox) timerBox.classList.remove("hidden");
            if (timeVal) timeVal.innerText = leaseSeconds;

            clearInterval(dhcpTimer);
            dhcpTimer = setInterval(() => {
                leaseSeconds--;
                if (timeVal) timeVal.innerText = leaseSeconds;
                if (leaseSeconds <= 0) {
                    clearInterval(dhcpTimer);
                    releaseDHCP();
                }
            }, 1000);
        }, 1500);

    } else if (dhcpStep === 4) {
        // Release IP
        releaseDHCP();
    }
}

function releaseDHCP() {
    const actionBtn = document.getElementById("dhcp-action-btn");
    const statusTxt = document.getElementById("dhcp-status-text");
    const timerBox = document.getElementById("dhcp-lease-timer");
    const logBox = document.getElementById("dhcp-log-box");

    clearInterval(dhcpTimer);
    dhcpStep = 0;

    if (statusTxt) {
        statusTxt.innerText = "Disconnected";
        statusTxt.style.color = "var(--text-primary)";
    }
    if (actionBtn) actionBtn.innerText = "Start DHCP Discover";
    if (timerBox) timerBox.classList.add("hidden");
    if (logBox) {
        logBox.innerHTML = `<div><span style="color: var(--color-error);">[CLIENT]</span> DHCP Release sent. Lease terminated.</div>
        <div>System ready. Click button to broadcast DISCOVER packet.</div>`;
    }
}

// Interactive Widget: IP to Binary & Class Analyzer
function processIPInput() {
    const input = document.getElementById("ip-address-input");
    const binaryOutput = document.getElementById("ip-binary-output");
    const classVal = document.getElementById("ip-class-val");
    const scopeVal = document.getElementById("ip-scope-val");
    const descPanel = document.getElementById("ip-breakdown-desc");

    if (!input || !binaryOutput || !classVal || !scopeVal) return;

    const ip = input.value.trim();
    const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;

    if (!ipv4Regex.test(ip)) {
        binaryOutput.innerText = "Invalid IPv4 Address Format";
        binaryOutput.style.color = "var(--color-error)";
        classVal.innerText = "N/A";
        scopeVal.innerText = "N/A";
        return;
    }

    binaryOutput.style.color = "var(--text-primary)";
    const parts = ip.match(ipv4Regex).slice(1).map(Number);

    // Validate ranges
    for (let part of parts) {
        if (part > 255) {
            binaryOutput.innerText = "Octet limits exceeded (>255)";
            binaryOutput.style.color = "var(--color-error)";
            classVal.innerText = "N/A";
            scopeVal.innerText = "N/A";
            return;
        }
    }

    // Convert to binary
    const binaryStrings = parts.map(part => part.toString(2).padStart(8, "0"));
    binaryOutput.innerText = binaryStrings.join(" . ");

    // Determine Class (First Octet)
    const firstOctet = parts[0];
    let ipClass = "Class A";
    let descText = "";

    if (firstOctet >= 0 && firstOctet <= 127) {
        ipClass = "Class A";
        descText = `Class A network (First Octet ${firstOctet}). Default Subnet: 255.0.0.0. Supports up to 16,777,214 host nodes globally.`;
    } else if (firstOctet >= 128 && firstOctet <= 191) {
        ipClass = "Class B";
        descText = `Class B network (First Octet ${firstOctet}). Default Subnet: 255.255.0.0. Supports up to 65,534 host nodes.`;
    } else if (firstOctet >= 192 && firstOctet <= 223) {
        ipClass = "Class C";
        descText = `Class C network (First Octet ${firstOctet}). Default Subnet: 255.255.255.0. Supports up to 254 host nodes. Ideal for small local setups.`;
    } else if (firstOctet >= 224 && firstOctet <= 239) {
        ipClass = "Class D (Multicast)";
        descText = "Class D addresses are reserved for Multicast operations (streaming to multiple target hosts simultaneously).";
    } else {
        ipClass = "Class E (Experimental)";
        descText = "Class E addresses are reserved for experimental, research, and future protocol validation projects.";
    }

    classVal.innerText = ipClass;

    // Determine Scope (Private vs Public)
    let isPrivate = false;
    if (parts[0] === 10) {
        isPrivate = true; // 10.0.0.0/8
    } else if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) {
        isPrivate = true; // 172.16.0.0/12
    } else if (parts[0] === 192 && parts[1] === 168) {
        isPrivate = true; // 192.168.0.0/16
    } else if (parts[0] === 127) {
        scopeVal.innerText = "Loopback (Local)";
        descPanel.innerText = "Loopback address (127.x.x.x) is used by a device to send network packets back to itself for testing.";
        return;
    }

    scopeVal.innerText = isPrivate ? "Private" : "Public";
    scopeVal.style.color = isPrivate ? "var(--color-primary)" : "var(--color-accent)";
    descPanel.innerText = descText + (isPrivate ? " This address operates inside local private interfaces and is not routable on the public web." : " This is a routable public IP address accessible on the global internet directory.");
}

// // Interactive Quiz System Logic
let isReviewMode = false;

function resetQuiz() {
    if (typeof canResetOneTimeQuiz === 'function' && !canResetOneTimeQuiz()) return;
    if (typeof randomizeQuizInPlace === 'function') randomizeQuizInPlace(QUIZ_QUESTIONS);
    isReviewMode = false;
    quizCurrentQuestion = 0;
    quizScore = 0;
    quizAnswers = [];
    
    const quizBox = document.getElementById("quizBox");
    const quizResults = document.getElementById("quizResults");
    
    if (quizBox) quizBox.classList.remove("hidden");
    if (quizResults) quizResults.classList.add("hidden");

    // Rebuild quiz progress indicators
    const progressContainer = document.getElementById("quizProgress");
    if (progressContainer) {
        progressContainer.innerHTML = "";
        for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
            const step = document.createElement("div");
            step.className = `quiz-progress-step ${i === 0 ? 'active-q' : ''}`;
            step.innerText = i + 1;
            progressContainer.appendChild(step);
        }
    }

    loadQuestion();
}

function loadQuestion() {
    // Hide feedback panel
    const feedbackPanel = document.getElementById("feedbackPanel");
    if (feedbackPanel) feedbackPanel.classList.add("hidden");

    const q = QUIZ_QUESTIONS[quizCurrentQuestion];
    const catEl = document.getElementById("questionCategory");
    const textEl = document.getElementById("questionText");
    const optionsGrid = document.getElementById("optionsGrid");

    if (catEl) catEl.innerText = q.category;
    if (textEl) textEl.innerText = q.question;
    
    if (optionsGrid) {
        renderQuizChoices(optionsGrid, q, selectOption, !isReviewMode);
    }

    // Update progress steps
    const steps = document.querySelectorAll(".quiz-progress-step");
    steps.forEach((step, idx) => {
        step.className = `quiz-progress-step ${idx === quizCurrentQuestion ? 'active-q' : ''}`;
        if (idx < quizCurrentQuestion) {
            if (isReviewMode) {
                const wasCorrect = quizAnswers[idx] === QUIZ_QUESTIONS[idx].answer;
                step.classList.add(wasCorrect ? "correct-q" : "incorrect-q");
            } else {
                step.classList.add("completed-q");
            }
        }
    });

    if (isReviewMode) {
        // Show correct/incorrect highlights immediately
        const studentAns = quizAnswers[quizCurrentQuestion];
        const correctAns = q.answer;
        const buttons = document.querySelectorAll("#optionsGrid .option-btn");
        if (typeof markQuizChoice === 'function') markQuizChoice(buttons, studentAns);
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === correctAns) {
                btn.classList.add("selected-correct");
            } else if (idx === studentAns && studentAns !== correctAns) {
                btn.classList.add("selected-incorrect");
            }
        });

        // Show feedback panel immediately with explanation
        const iconEl = document.getElementById("feedbackIcon");
        const titleEl = document.getElementById("feedbackTitle");
        const textEl = document.getElementById("feedbackText");
        const nextBtn = document.getElementById("nextQuestionBtn");

        const isCorrect = studentAns === correctAns;

        if (iconEl) {
            iconEl.innerText = isCorrect ? "✓" : "✗";
            iconEl.className = `feedback-icon ${isCorrect ? 'correct-icon' : 'incorrect-icon'}`;
        }
        if (titleEl) {
            titleEl.innerText = isCorrect ? "Correct!" : "Incorrect";
            titleEl.className = `feedback-title ${isCorrect ? 'correct-title' : 'incorrect-title'}`;
        }
        if (textEl) textEl.innerHTML = q.explanation;
        if (nextBtn) {
            nextBtn.innerText = (quizCurrentQuestion === QUIZ_QUESTIONS.length - 1) ? "Finish Review" : "Next Question";
        }
        if (feedbackPanel) feedbackPanel.classList.remove("hidden");
    }

    updateScoreText();
}

function selectOption(selectedIdx) {
    if (typeof canAnswerOneTimeQuiz === 'function' && !canAnswerOneTimeQuiz()) {
        if (typeof showToast === 'function') showToast('Click Start Quiz before answering.', 'error');
        return;
    }
    // Block multiple clicks
    const feedbackPanel = document.getElementById("feedbackPanel");
    if (feedbackPanel && !feedbackPanel.classList.contains("hidden")) return;

    const q = QUIZ_QUESTIONS[quizCurrentQuestion];
    quizAnswers[quizCurrentQuestion] = selectedIdx;

    // Highlight selected option neutrally
    const buttons = document.querySelectorAll("#optionsGrid .option-btn");
    if (typeof markQuizChoice === 'function') markQuizChoice(buttons, selectedIdx);
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === selectedIdx) {
            btn.classList.add("selected-temp");
        }
    });

    // Display feedback panel to prompt for Next Question
    const iconEl = document.getElementById("feedbackIcon");
    const titleEl = document.getElementById("feedbackTitle");
    const textEl = document.getElementById("feedbackText");
    const nextBtn = document.getElementById("nextQuestionBtn");

    if (iconEl) {
        iconEl.innerText = "✓";
        iconEl.className = "feedback-icon correct-icon";
    }
    if (titleEl) {
        titleEl.innerText = "Answer Logged";
        titleEl.className = "feedback-title correct-title";
    }
    if (textEl) {
        textEl.innerHTML = "Your selection has been recorded. Click Next Question to continue.";
    }
    if (nextBtn) {
        nextBtn.innerText = "Next Question";
    }
    if (feedbackPanel) feedbackPanel.classList.remove("hidden");
}

function nextQuestion() {
    quizCurrentQuestion++;
    if (quizCurrentQuestion < QUIZ_QUESTIONS.length) {
        loadQuestion();
    } else {
        if (isReviewMode) {
            // Finish review, show results again
            const quizBox = document.getElementById("quizBox");
            const quizResults = document.getElementById("quizResults");
            if (quizBox) quizBox.classList.add("hidden");
            if (quizResults) quizResults.classList.remove("hidden");
        } else {
            showQuizResults();
        }
    }
}

function updateScoreText() {
    const scoreTextEl = document.getElementById("quizScoreText");
    if (scoreTextEl) {
        scoreTextEl.innerText = `Score: ${quizScore} / ${QUIZ_QUESTIONS.length}`;
    }
}

function showQuizResults() {
    const quizBox = document.getElementById("quizBox");
    const quizResults = document.getElementById("quizResults");
    const finalScoreText = document.getElementById("finalScoreText");
    const resultsMsg = document.getElementById("resultsMessage");

    if (quizBox) quizBox.classList.add("hidden");
    if (quizResults) quizResults.classList.remove("hidden");
    
    // Calculate final score
    let computedScore = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
        if (quizAnswers[idx] === q.answer) {
            computedScore++;
        }
    });
    quizScore = computedScore;

    if (finalScoreText) {
        finalScoreText.innerText = `${quizScore} / ${QUIZ_QUESTIONS.length}`;
    }
    
    // Save quiz result to Firebase portal
    if (typeof saveQuizResult === 'function') {
      saveQuizResult(MODULE_ID, quizScore, QUIZ_QUESTIONS.length);
    }
    if (typeof completeOneTimeQuizAttempt === 'function') {
      completeOneTimeQuizAttempt();
    }

    if (resultsMsg) {
        const pct = (quizScore / QUIZ_QUESTIONS.length) * 100;
        if (pct === 100) {
            resultsMsg.innerText = "Perfect! Excellent work, future IT Professional! 🏆";
        } else if (pct >= 80) {
            resultsMsg.innerText = "Great job! Very strong understanding of networks and packet delivery! 🌟";
        } else if (pct >= 50) {
            resultsMsg.innerText = "Passed! Review the slides to strengthen your knowledge.";
        } else {
            resultsMsg.innerText = "Try again! Go through the slides to review core concepts.";
        }
    }
}

function startQuizReview() {
    isReviewMode = true;
    quizCurrentQuestion = 0;
    
    const quizBox = document.getElementById("quizBox");
    const quizResults = document.getElementById("quizResults");
    if (quizBox) quizBox.classList.remove("hidden");
    if (quizResults) quizResults.classList.add("hidden");
    
    loadQuestion();
}

// Auth callbacks for quiz gating
function onAuthGateChanged(user, isApproved) {
    updateQuizAccessUI(isApproved);
    if (typeof refreshFinishModuleControl === 'function') refreshFinishModuleControl();
    if (user && isApproved && typeof recordLessonProgress === 'function') {
        recordLessonProgress(MODULE_ID, currentSlide, totalSlides);
    }
}

function updateQuizAccessUI(isApproved) {
    const quizBox = document.getElementById("quizBox");
    if (!quizBox) return;
    
    let overlay = quizBox.querySelector('.quiz-lock-overlay[data-lock="access"]');
    if (isApproved) {
        if (overlay) overlay.remove();
        quizBox.classList.remove("gated-locked");
        if (typeof refreshOneTimeQuizGate === 'function') refreshOneTimeQuizGate();
    } else {
        if (typeof removeQuizGateOverlay === 'function') removeQuizGateOverlay();
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "quiz-lock-overlay";
            overlay.dataset.lock = "access";
            quizBox.appendChild(overlay);
        }
        quizBox.classList.add("gated-locked");
        
        const isUser = auth.currentUser;
        if (!isUser) {
            overlay.innerHTML = `
                <div class="quiz-lock-card">
                    <div class="quiz-lock-title">🔐 Sign In Required</div>
                    <div class="quiz-lock-desc" style="margin-bottom: 20px;">To take this quiz and submit your grades, please sign in with your student Google account.</div>
                    <button class="btn btn-primary btn-lock-signin" style="pointer-events: auto;" onclick="if(typeof googleSignIn === 'function') googleSignIn()">Sign in with Google</button>
                </div>
            `;
        } else {
            overlay.innerHTML = `
                <div class="quiz-lock-card">
                    <div class="quiz-lock-title">⏳ Awaiting Approval</div>
                    <div class="quiz-lock-desc" style="margin-bottom: 20px;">Your account (<strong>${isUser.email}</strong>) is signed in but is pending teacher approval. Please wait for your instructor to approve your account.</div>
                    <button class="btn btn-secondary btn-lock-signin" style="pointer-events: auto; background: transparent; border: 1px solid var(--text-secondary); color: var(--text-primary);" onclick="if(typeof signOut === 'function') signOut()">Sign Out / Switch Account</button>
                </div>
            `;
        }
    }
}
