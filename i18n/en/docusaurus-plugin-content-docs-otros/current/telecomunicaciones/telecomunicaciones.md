---
sidebar_position: 5
authors:
  - name: Daniel Bazo Correa
description: Aprende lo básico sobre los sistemas de Telecomunicación.
title: Redes de Telecomunicaciones
toc_max_heading_level: 4
---
### Topic 1: Introduction to Telecommunication Networks

#### 1.1. Introduction

Communication involves the exchange of information (image, sound, video, etc.) in analog or digital format. To do this, the information is converted into signals, which can be:

- **Continuous**: take any value.
- **Discrete**: take a finite set of values.

The **amplitude** of the signals is also relevant:

- **Non-quantized**: take any value.
- **Quantified**: take integer values.

Depending on their nature, the signals can be:

- **Electrical**: circulate through a cable.
- **Radio**: transmitted through the air.
- **Optical**: propagate through optical fiber.

### 1.2. Characteristics of Signals

**Analog** signals are characterized by their amplitude, frequency, phase and period. **Digital** signals are characterized by bits (minimum unit of information: 0 or 1), bit time (time needed to transmit a bit), sign (set of n bits) and sign time (number of bits times bit time).

The **binary regime** is fundamental in signal transmission, since it represents the number of bits transmitted per second.

### 1.3. Analog to Digital Signal Conversion

Digital signals have advantages such as compression capacity, error control, lower consumption, storage efficiency, lower degradation and transmission over longer distances. Therefore, it is common to convert analog signals to digital. This process involves:

1. **Signal collection**.
2. **Signal sampling**.
3. **Quantification** and **encoding**, generating a sequence of bits.

A **baseband signal** is an analog signal without modulation. In the digital case, it is called **line code**. **Baseband transmission** occurs when the signal is transmitted in its original frequency range.

> **Modulation**: Multiplication of an original signal by a sinusoid to change its frequency to a carrier.

### 1.4. Telecommunication System

A telecommunication system comprises the elements necessary to exchange information between a transmitter and a receiver. It includes:

- **Transmitter**: generates the information.
- **Transmission processing**: adapts the signal to the channel.
- **Channel**: introduces delay, distortion and noise.
- **Reception processing**: recovers the original signal minimizing errors.
- **Receiver**: receives the information.

#### 1.4.1. Flow Direction

According to the flow direction, a communication system can be:

- **Simplex**: transmits in one direction only.
- **Half-duplex**: transmits in both directions, but not simultaneously.
- **Duplex**: transmits in both directions simultaneously.

#### 1.4.2. Characteristics of the Communication Channel

Important parameters of the communication channel:

- **Signal bandwidth**.
- **Channel bandwidth**: frequency range where transmission is error-free. For proper transmission, the signal bandwidth must be less than that of the channel.
- **Capacity**: maximum number of bits that the channel can transmit. To avoid errors, the binary rate must be less than or equal to this capacity. The capacity is a product of the efficiency and the channel bandwidth.
- **Propagation speed**: speed of the signal in the medium.
- **Propagation time**: time it takes for the signal to reach the destination.
- **Error**: noise or distortions that affect the signal during transmission. For digital signals, the **BER** (Bit Error Rate) is used to measure the probability of error in a bit.

#### 1.4.3. Transmission Media

Transmission media can be:

- **Guided**: physical, such as copper or coaxial cables.
- **Non-guided**: wireless, such as radio, microwave or light signals.Key parameters in wave transmission are **frequency** and **wavelength**. The higher the frequency, the shorter the wavelength and the greater the information capacity, but with less penetration into objects.

Frequency ranges used:

- **MF (Medium Frequency)**: range of hundreds of kilometers.
- **HF (High Frequency)**: reaches thousands of kilometers.
- **VHF (Very High Frequency) and UHF (Ultra High Frequency)**: range of up to 40 km.
- **SHF (Super High Frequency)**: transmits via satellite or terrestrial up to 40 km.

Types of transmission:

- **Directional**: in a single direction.
- **Omnidirectional**: in multiple directions.

### 1.5. Telecommunication Network

A telecommunication network is an infrastructure that connects users (terminals) to offer services. It is composed of:

- **Terminals**: generate and consume information.
- **Access systems**: connect users to the network.
- **Infrastructure**: network elements that allow the connection and transport of information.

#### 1.5.1. Topologies

Networks can have different topologies. The **mesh network** is robust, but involves exponential growth of links and possible prohibitive distances as users are added.

#### 1.5.2. Organization of the Information to be Transmitted

The **messages** (sets of bits) are grouped into **packets** with a header (source and destination information) and a tail (error control). Long messages can be divided into multiple packets.

#### 1.5.3. Message Broadcasting

Broadcasting within the network can be:

- **Broadcast**: to all users.
- **Multicast**: to multiple users.
- **Unicast**: to a single user.
- **Anycast**: to the nearest user.

#### 1.5.4. Classification according to Coverage Area

Classification of networks according to coverage:

- **PAN (Personal Area Network)**: e.g. NFC, Bluetooth.
- **LAN (Local Area Network)**: e.g. home network.
- **MAN (Metropolitan Area Network)**: e.g. university network.
- **WAN (Wide Area Network)**: e.g. Internet.

#### 1.5.5. Classification according to Terminal Location

Networks can be **fixed** or **mobile** depending on the location of the terminal. They can also be **terrestrial** (nodes and terminals on the ground), **satellite** (nodes on satellites) or **space** (nodes outside the Earth).

#### 1.5.6. Classification according to Communication Model

Systems can be:

- **Broadcast**: terminals share the medium and filter messages.
- **Switching**: a prior connection is established between the sender and the receiver.

Example: **The Internet** follows a hierarchical or tree topology with access and transport levels.

#### 1.5.7. Switching Techniques

Types of switching:

- **Circuit switching**: physical connection established before transmission. Used in telephone networks.
- Advantage: fast transmission once the connection is established.
- Disadvantage: waiting time to establish connection and inefficient use of resources.
- **Packet switching**: packets in queue and retransmission in case of error. It can be:
- **Using datagrams**: unordered packets that follow different paths.
- **Using virtual circuit**: first packet establishes the path; the others follow the same one.

#### 1.5.8. Connection Oriented

A **connection oriented** system establishes a prior connection, which increases reliability and allows flow and error control, although it is not optimal for networks with high latency.

#### 1.5.9. Indicators

Key indicators in telecommunications networks:

- **Latency**: time it takes for a packet to be processed.
- **Throughput**: number of bits transmitted in an instant.
- **Jitter**: variation in delay between packets of the same message.

#### 1.5.10. Communications Problems

Common problems in communication systems:

- **Addressing**: identifying users.
- **Multiplexing**: efficient use of resources.
- **Dimensioning**: calculating required links.- **Signaling**: Knowing the state of the network.

In mobile communications, additional problems arise such as **roaming**, **handover**, **paging** and **location updates**. In the Internet, **quality of experience (QoE)**, **routing** and **flow control** must also be managed.

# Topic 2: Principles of Network Sizing and Queuing Systems

### 2.1. Definitions

In the context of telecommunications networks, a **queue** refers to an area designated to store client requests that arrive at a server when it is in a high demand state and cannot process more requests immediately. The presence of queues becomes a crucial element in the design of communication systems, as it allows the flow of requests to be managed based on the capacity of the system.

**System sizing** refers to the process of determining the optimal system capacity for an intended usage level, in order to optimize network performance and maximize user satisfaction. The primary goals of network sizing are to minimize **latency** (the waiting time for a request to be processed) and maximize **throughput** (the rate at which requests are completed).

In the image above, we can see how the request queuing process works. When a user sends requests to a server, these requests can be queued and then processed by the server according to a set of predefined rules.

### 2.2. Components of a Queuing System

The operation of a queuing system can be broken down into three parts: the **client**, the **queue**, and the **service**.

#### Client Part

1. **Number of clients**:
- Can be **finite** (when there is a limited number of potential clients) or **infinite** (when the number of clients is unlimited).

2. **Requests**:
- Can be **deterministic** in nature (following a predictable pattern) or **random** (following a probability distribution, typically represented as an expectation or mean).

3. **Interarrival time of requests**:
- The time interval between two consecutive requests. This can vary and is crucial for the analysis of the queuing system.

4. **Average arrival rate** (\(\lambda\)):
- Represents the number of requests arriving at the system per unit of time. It is a key measure for evaluating the system load.

#### Queue Part

1. **Queue Capacity**:
- This can be **finite** (when there is a limit on the number of requests that can be stored in the queue) or **infinite** (when there is no limit on the number of requests waiting).

2. **Queue Wait Time**:
- The average time a request remains in the queue before being processed.

3. **Number of Requests in Queue**:
- The number of requests that are in the queue at any given time. This metric helps to understand the congestion in the system.

#### Service Part

1. **Number of Servers**:
- There can be one or more servers available to process the queued requests. The configuration of the servers can vary depending on the design of the system.

2. **Service Rate** (\(\mu\)):
- Indicates the number of requests that a server can process per unit of time. Along with the arrival rate, it is crucial for analyzing the performance of the queuing system.

3. **Service time**:
- This is the time required for the server to complete processing a request.

#### Part of the System as a Whole

1. **Total number of requests in the system**:
- This includes both the requests in the queue and those being processed by the server at any given time.

2. **Total time in the system**:- It is the total elapsed time from when a request is sent until the response is received. This time includes both the waiting time in the queue and the service time.

#### Mathematical Modeling of a Queuing System

- If we model the system considering the **waiting time in the queue**, the distribution of the system is usually **exponential**.
- If we model the system considering the **mean arrival rate** (\(\lambda\)), then the system follows a **Poisson distribution**.

#### Queuing System Intensity

Another crucial aspect in queuing systems is the **traffic intensity** (\(\rho\)), which is defined as:

$$
\rho = \frac{\lambda}{\mu}
$$

where:

- $\lambda$ is the mean arrival rate.
- $\mu$ is the service rate.

Traffic intensity represents the average number of requests in the system while a request is being processed. If \(\rho\) is greater than or equal to the system capacity, it means that the system is **poorly dimensioned** and cannot handle the request load efficiently, which can lead to high waiting times and possible loss of requests.

# Topic 3: Multiplexing

### 3.1. Introduction

**Multiplexing** is a technique that allows resource sharing, resulting in more efficient use of the transmission medium and therefore cost savings. This technique allows multiple information streams to be transmitted simultaneously over the same physical medium. 

Multiplexing can be classified into two main forms:

1. **Multiplexing using a multiplexer device**: This method is used when users generate signals that are not directly compatible for combination. An example of this type is **ADSL** technology.

2. **Multiplexing without a multiplexer device**: In this case, users generate information in a format that allows its separation without the need for a multiplexer. A common example is the transmission of **FM radio**.

**Duplexing** is a variant of multiplexing that refers to the combination of the transmission and reception flows of a single user in a channel or communication medium.

In addition, **channeling or multiple access** is a form of multiplexing where the relationship between the information flows and the assigned channels varies over time, being especially common in mobile communication systems.

#### Multiplexing and Channeling Nomenclature

There are three main approaches:

1. **Multiplexing**:
- **FDM** (Frequency Division Multiplexing): Frequency Division Multiplexing.
- **TDM** (Time Division Multiplexing): Time Division Multiplexing.
- **CDM** (Code Division Multiplexing): Code Division Multiplexing.

2. **Channelization**:
- **FDMA** (Frequency Division Multiple Access): Frequency Division Multiple Access.
- **TDMA** (Time Division Multiple Access): Time Division Multiple Access.
- **CDMA** (Code Division Multiple Access): Code Division Multiple Access.

3. **Duplexing**:
- **FDD** (Frequency Division Duplexing): Frequency Division Duplexing.
- **TDD** (Time Division Duplexing): Time Division Duplexing.
- **CDD** (Code Division Duplexing): Code Division Duplexing (not used due to saturation problems).

### 3.2. Frequency Division Multiplexing (FDM)

Frequency Division Multiplexing (FDM) consists of assigning each information stream a different frequency band within the transmission medium. This allows these streams to be transmitted simultaneously without interference, as long as the assigned frequency bands are respected.

In practice, all signals to be multiplexed occupy the same frequency band. To allow their simultaneous transmission, band shifting is performed using modulation to move each signal to a different carrier frequency.

#### Disadvantages of FDM

- **High PAPR (Peak to Average Power Ratio)**: This can limit transmission distance, as signals with high PAPR are more susceptible to distortion.
- **Intermodulation between channels**: Overlapping signals in the same band can generate interference that affects transmission quality.
- **Inefficient use of spectrum due to guard bands**: Guard bands must be assigned to avoid interference between signals, which can lead to suboptimal use of the spectrum.

When FDM is applied to optical fiber transmissions, it is known as **wavelength division multiplexing** (WDM), which allows maximizing the transmission capacity of optical fibers by transmitting multiple signals at different wavelengths.

### 3.3. Time Division Multiplexing (TDM)

Time Division Multiplexing (TDM) allocates the full bandwidth of the transmission medium to each information stream for a periodically repeated time slice. It is especially suited to digital signals and allows for efficient use of the medium's bandwidth.

In TDM, information is organized into frames containing time slots, each associated with a physical channel. This allows the physical channel to carry information from one or more data streams.

#### Types of TDM

- **Synchronous TDM**: The capacity allocated to each stream is constant.
- **Asynchronous TDM**: The capacity varies over time based on demand.


#### Interleaving Methods in TDM

1. **Word Interleaving**: Information is organized into words (set of bits).

2. **Bit Interleaving**: Information is interleaved at the bit level.


The **demultiplexing** process involves identifying the bits corresponding to each interval by means of a Frame Alignment Signal (FAS), which can be implemented by a line code or a bit sequence.

### 3.4. Code Division Multiplexing (CDM)

**Code division multiplexing** (CDM) allocates to each information stream all the available bandwidth on the transmission medium for the entire transmission period. Special signals, known as **codes**, are used to achieve this effective sharing of bandwidth.


#### Signal Orthogonalization

Time and frequency multiplexing are specific cases of **signal orthogonalization**. Two signals are **orthogonal** when their values ​​do not coincide in time or frequency, meaning that their dot product is zero. This property is crucial to avoid interference between signals and allow their independent recovery.

# Topic 4: Medium Access Techniques

### 4.1. What is a collision?

In networks where the transmission medium is shared between multiple terminals, there is a possibility that signals from different users coincide in time. This can lead to a **collision**, a phenomenon that occurs when signals from two or more terminals overlap on the transmission medium at the same time, preventing their correct interpretation.When a collision occurs, the receiver receives simultaneous signals, resulting in a higher than normal signal level. In wired networks, this manifests itself as a signal with almost twice the expected energy. In wireless networks, the received signal is often low energy due to interference. The transmitter detects the collision thanks to the absence or failure of the acknowledgement (ACK) signals sent by the receiver. In these cases, terminals must manage collisions to minimize data loss and optimize network performance.

### 4.2. Random Access Techniques

Random access techniques are methods used in shared networks to manage access to the transmission medium and minimize collisions. These techniques do not require centralized coordination and allow terminals to transmit data based on certain rules. Four main techniques are detailed below: Aloha, CSMA, CSMA/CD, and CSMA/CA.

#### 1. **Aloha**

- **How ​​it works**: Aloha is a simple technique where devices transmit data at any time without central coordination. If a collision occurs (i.e. two or more devices transmit simultaneously), the devices involved wait a random amount of time before retrying the transmission.
- **Advantages**: It is easy to implement and does not require complex synchronization.
- **Disadvantages**: It is prone to collisions due to lack of control over when devices can transmit, which can lead to inefficient channel usage.

#### 2. **CSMA (Carrier Sense Multiple Access)**

- **How ​​it works**: In CSMA, devices must "listen" to the transmission medium (sense the carrier) before transmitting. If the channel is free, the device transmits. If the channel is busy, the device waits a random amount of time before attempting to transmit again.
- **Advantages**: Reduces the number of collisions compared to Aloha, as devices only transmit when the channel is free.
- **Disadvantages**: Collisions can still occur due to **propagation delays**, i.e. the time it takes for a signal to travel from the transmitter to the receiver. During this time, another device can start transmitting, causing a collision.

#### 3. **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**

- **Operation**: Mainly used in wired Ethernet networks. In addition to listening to the channel before transmitting, devices also listen while transmitting. If a collision (two simultaneous signals) is detected, transmission is immediately stopped, and devices wait a random amount of time before trying again.
- **Advantages**: It is efficient for collision detection and handling in wired networks, as collisions are detected quickly and devices can respond accordingly.
- **Disadvantages**: Less relevant in modern networks such as **Gigabit Ethernet** and above, where the network architecture primarily uses **switching** rather than sharing a single medium. Modern high-speed networks typically use CSMA/CA or advanced switching technologies that eliminate the need for CSMA/CD.

#### 4. **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)**

- **How ​​it Works**: Used in wireless networks, such as Wi-Fi. In CSMA/CA, devices listen to the channel to check if it is free before transmitting. If the channel is busy, the device waits a random amount of time before trying again. Unlike CSMA/CD, where collisions are detected after they occur, CSMA/CA attempts to avoid collisions before they occur. It uses a "wait before transmitting" mechanism and often requires devices to request permission before transmitting.- **Advantages**: Effective at avoiding collisions in wireless networks, where collision detection is more difficult due to the nature of the medium. In wireless networks, the signal from one transmitter may not be strong enough to be detected by another transmitter, causing the "hidden terminal" problem.
- **Disadvantages**: Adds control overhead, which can reduce efficiency in congested networks.

#### Comparison of Random Access Techniques

| Technique | Advantages | Disadvantages | Primary Use |
|--------|----------|-------------|---------------|
| **Aloha** | Simple, easy to implement | High collision rate | Primitive networks, low-capacity systems |
| **CSMA** | Reduces collisions compared to Aloha | Collisions still possible due to delay | Local area networks (LANs) |
| **CSMA/CD** | Detects and handles collisions efficiently | Less relevant in modern networks | Traditional wired Ethernet |
| **CSMA/CA** | Avoiding collisions in wireless networks | Control overhead, less efficient in high congestion | Wi-Fi networks, wireless networks |

# Topic 5: Error Control

### 5.1. Objectives

The main objective of any communication system is to ensure **reliability** and **efficiency** in data transmission. However, communication channels are prone to errors due to **interference**, **noise** and other distortions. To measure the quality of a transmission, we use the **bit error rate (BER)**, which is defined as the number of erroneous bits divided by the total number of bits transmitted. A lower BER value indicates better communication quality.

To mitigate errors introduced by the transmission channel, strategies that incorporate **information redundancy** and control systems that allow the recovery of the original data are used. These error control systems fall into two main categories:

1. **ARQ (Automatic Repeat reQuest):**
- **Operation**: ARQ systems detect errors in received data packets and request retransmission of the packet when an error is found. They use mechanisms such as **ACK** (acknowledgement) to confirm correct reception and **NAK** (negative acknowledgment) to signal incorrect reception.
- **Advantages**: They are simple and effective in networks with moderate propagation delay, where retransmission does not introduce a significant delay.
- **Disadvantages**: In situations where the propagation delay is large or retransmission introduces considerable delays (such as in satellite or mobile networks), the method may not be efficient.

2. **FEC (Forward Error Correction):**
- **How ​​it works**: FEC systems introduce additional redundancy into transmitted data so that the receiver can **detect and correct** errors without the need to request a retransmission. This is possible through error-correcting codes, such as Hamming, Reed-Solomon, or LDPC (Low-Density Parity-Check) codes.
- **Advantages**: It is particularly useful in scenarios where a return channel is not available, retransmission is not feasible (for example, in one-way transmissions such as satellite TV transmissions), or response time is critical.
- **Disadvantages**: It adds significant overhead to the data stream due to the need for redundancy, which can reduce transmission efficiency.

It is critical to select the appropriate type of error control based on the network environment and system needs. In some cases, combinations of ARQ and FEC can be used to optimize both **efficiency** and **reliability** of communication.

#### Error TypesErrors in data transmissions can be classified into two main types:

1. **Single Errors**:
- These occur when a single bit is transmitted incorrectly, changing from a `0` to a `1` or vice versa.
- Their probability is usually low compared to burst errors, but their handling is essential for systems with high sensitivity to transmission quality.

2. **Burst Errors**:
- These affect multiple consecutive bits in a single error event. They can be caused by continuous interference, such as impulse noise or signal distortions.
- They are more complex to handle, as they require advanced error correction techniques to be corrected effectively. Codes such as **Reed-Solomon** are especially effective for this type of errors.

### 5.2. Error Detection and Correction Methods

#### 1. **Error Detection**

- **Parity Bits**: A simple method in which an extra bit is added to the data being sent, so that the total number of `1` bits is either even (even parity) or odd (odd parity). It is effective for detecting single errors, but inadequate for burst errors.

- **Checksum**: A method in which data is divided into fixed-length words and added together. The result (checksum) is sent along with the data. The receiver recalculates the checksum and compares it to the one received. This method is more robust than the parity bit method.

- **CRC (Cyclic Redundancy Check)**: A very robust detection method that uses polynomial divisions to detect errors in large blocks of data. CRCs can detect single errors, multiple errors, burst errors, and random errors.

#### 2. **Error Correction**

- **Hamming Codes**: Allow for single error correction and double error detection by using parity bits distributed in specific positions. They are suitable for situations where single errors are common.

- **Reed-Solomon Codes**: Very effective for correcting burst errors. They are widely used in compact discs (CDs), DVDs, spatial data transmission and digital communications due to their ability to handle consecutive bit errors.

- **LDPC (Low-Density Parity-Check)**: Advanced error-correcting codes that offer high efficiency and performance close to the Shannon limit. They are used in modern communications systems such as Wi-Fi, LTE and DVB-S2.

# Topic 6: Routing

**Routing** is the process of directing a data packet from its source to its destination through a network. To carry out this process, **routing tables** are used, which are records that contain information about the available routes to different nodes in the network. These tables allow each node to decide how to send data through the network to reach its destination efficiently.

### Types of Routing Tables

1. **Static Tables**:
- They are manually configured by the network administrator.
- Suitable for small, stable networks where there are not many changes in the topology.
- **Advantages**: Simplicity of configuration and absence of table update traffic.
- **Disadvantages**: Lack of adaptability to changes in the network, which can lead to inefficiencies or communication failures if the topology changes.

2. **Dynamic Tables**:
- They are automatically updated by routing protocols.
- They are more suitable for large, complex networks where routes can change frequently.
- **Advantages**: Adaptability and quick response to changes in the network.
- **Disadvantages**: They generate additional control traffic and require more processing resources.

### 6.1. Forwarding and Routing- **Routing**: The process of determining the best route to transmit data from source to destination. This involves updating routing tables using specific protocols that calculate optimal routes.

- **Forwarding**: The action of sending a packet to its destination through the network. Routers use their routing tables to decide where to send packets at each step along the way.

#### 6.1.1. Forwarding Methods

1. **Route Method**: Routing tables contain detailed information about the entire route to the destination.
2. **Next-hop**: Only the next hop to the destination is stored, rather than the entire route.
3. **Host-specific**: There is one entry for each terminal connected to the network, allowing for detailed segmentation.
4. **Network-specific**: Contains one entry per network, simplifying routing for groups of similar terminals.
5. **Default**: Defines a default route that is used when there are no specific matches in the routing table.

#### 6.1.2. Routing Characteristics

For the routing protocol to be effective, it must meet the following characteristics:

- **Correct**: It must find valid and effective routes.
- **Simple**: Minimize computational load and control traffic.
- **Robust**: Ability to handle network failures and maintain connectivity.
- **Stable**: Maintain consistent routes in a changing network environment.
- **Optimal**: Maximize efficiency in terms of time, distance, energy consumption, or other criteria.

#### 6.1.3. Classification of Routing Protocols

There are different types of routing protocols that can be classified according to different criteria:

1. **By Type of Route Control**:
- **Hop-by-Hop**: Each node decides the next hop based on its routing table.
- **Source Routing**: The source specifies the entire route that the packet must follow.

2. **By Adaptability to Changes in the Network**:
- **Static Routing**: Routes are manually configured and do not change automatically.
- **Dynamic Routing**:
- **Centralized**: A central node manages all routes and distributes the information to the other nodes.
- **Distributed**: Each node calculates its own routing table based on the information it receives from the other nodes. This approach is more robust and adaptive.

#### 6.1.4. Connection-Oriented Networks vs. Connectionless Networks

- **Connection-Oriented Networks**:
- A fixed path (virtual circuit) is established for all communication between source and destination.
- Used in systems such as ATM (Asynchronous Transfer Mode) or MPLS (Multiprotocol Label Switching).

- **Connectionless Networks**:
- Each packet is independent and is routed according to the best route available at that time.
- A classic example is routing on the Internet (based on IP), where each packet can follow different routes to reach the same destination.

# Topic 7: Reference Models

### 7.1. Introduction

To address the complexity of networks, related functionalities are grouped together to create a reference model. These architectures organize functions into units called layers, facilitating communication between devices from different manufacturers.

### 7.2. Layered Architecture

#### 7.2.1. Description

The layered architecture approach organizes the functions of a network into related groups, known as layers. Each layer provides services to the layer above it and uses services from the layer below it. For example, layer 2 provides services to layer 3, which in turn passes them on to layer 4.In addition, one layer N of a device can communicate with another layer N of a different device using specific protocols. This approach simplifies the design, facilitates modifications, allows for the division of tasks in parallel, and improves interoperability, allowing different manufacturers to follow a common model.

#### 7.2.2. Protocols

Protocols are sets of rules that regulate the exchange of data between different entities. They are characterized by:

- **Semantics**: Defines the meaning of each section of bits in the communication.
- **Syntax**: Establishes the format of the data, including the number and arrangement of the fields in the header.
- **Timing**: Determines the sequence in which messages are sent and received.

Entities within the same layer communicate using Protocol Data Units (PDUs), which include a control header and, generally, user data presented as Service Data Units (SDUs). Communication between processes at the same level is virtual, without direct links, using lower layer services. Each layer receives Application Service Requests (ASPs) from the layer above, encapsulates them into PDUs, and sends them to the appropriate entity in the receiving system.

### 7.3. OSI Model

The OSI model enables communication between diverse systems, regardless of their architecture. It is composed of seven hierarchically organized layers:

1. **Application Layer**: Provides network services to user applications, such as HTTP for the web.
2. **Presentation Layer**: Responsible for data translation, encryption, and compression.
3. **Session Layer**: Manages the opening, maintenance, and closing of communication sessions.
4. **Transport Layer**: Ensures reliable and orderly delivery of data using protocols such as TCP and UDP.
5. **Network Layer**: Responsible for data routing and addressing on the network.
6. **Data Link Layer**: Handles data transmission at the physical link level, ensuring integrity and resolving collisions.
7. **Physical Layer**: Defines the transmission of bits over the physical medium, specifying cables, voltages, and frequencies.

Each layer has specific functions and collaborates with the others to enable efficient communication between heterogeneous systems.

#### 7.3.1. Organization of the levels

The levels in the OSI model are organized into three categories:

1. **Network Support Levels**: Comprises the physical, link, and network layers. They focus on the infrastructure for transporting information.
2. **User Support Service Levels**: Includes the session, presentation, and application layers. They facilitate communication and information exchange between different applications.
3. **Transport Level**: Focuses on reliable end-to-end data transmission, overcoming potential obstacles.

#### 7.3.2. MAC Addresses


Each device connected to the network has a unique 6-byte MAC address, which identifies its network interface card. The least significant bit of the first byte indicates whether the address is unicast or multicast. The broadcast address is FF:FF:FF:FF:FF:FF.

#### 7.3.4. Interconnection Equipment

The main elements of a network are:

1. **Repeater**: Regenerates or amplifies signals to extend network coverage. Operates at the physical layer.
2. **Bridge**: Filters traffic between ports at the link layer, dividing the network into segments. Forwards messages based on MAC addresses.
3. **Router**: Operates at the network layer and makes routing decisions based on network topology.
4. **Switch**: Operates at the link and network layers, mapping IP addresses to ports to efficiently forward messages.
5. **Gateway**: Operates at layers above the network layer, translating between different network domains.

### 7.4. TCP/IPThe TCP/IP model consists of four layers:

1. **Application Layer**: Facilitates communication between processes on separate endpoints and provides services directly used by applications.
2. **Transport Layer**: Provides end-to-end data transfer, ensuring reliable and in-order delivery.
3. **Internet Layer**: Manages data routing across interconnected networks.
4. **Network Access Layer**: Ensures communication between the end system and the network, handling basic data transmission.

#### 7.4.1. Encapsulation

The encapsulation process in the TCP/IP model involves each layer adding its own control information to the transmitted data.

#### 7.4.2. TCP/IP vs OSI

- The OSI model specifies functions for each layer, while TCP/IP contains protocols that can be matched or mixed depending on the needs of the system.
- TCP/IP was established before OSI; therefore, switching to OSI would be expensive.
- The Internet is built on the TCP/IP protocol suite.

#### 7.4.3. Layered, Cross-layer and Layer-less models

In the **Cross-layer** approach, direct communication between protocols in non-contiguous layers is allowed, exchanging information between these layers. In the **Layer-less** concept, the goal is to consolidate functions in a single layer, reducing the number of levels in the communication model.

# Topic 8: Telecommunication Networks

### 8.1. Internet: The Architecture of the Network

The Internet is a decentralized network that connects various networks through routers and other key elements:

#### 8.1.1. Network Architecture Components

1. **Hosts**: Devices such as personal computers, mobile devices, and servers that connect through local area networks (LANs) and wide area networks (WANs).
2. **Routers**: Fundamental devices that interconnect networks and route data packets efficiently.
3. **Internet Service Provider (ISP)**: Companies that provide Internet access through servers connected to the Internet through high-speed links. They assign IP addresses to customers and operate telecommunications equipment and links at Points of Presence (POPs).
4. **Points of Presence (POPs)**: Connection points where the ISP network borders customers. ISPs distribute POPs to facilitate Internet access.
5. **Network Access Points (NAP, IXP)**: Services that enable large-scale switching and interconnection between networks.
6. Network Service Provider (NSP) - Companies that provide telecommunications infrastructure to ISPs. Some companies operate as both ISPs and NSPs.

#### 8.1.2. IP Layer and How It Works

The IP (Internet Protocol) layer is crucial in the Internet. It is connectionless and is responsible for fragmenting and assembling data into datagrams. These datagrams include control information and the payload, which is the information transmitted.

### 8.2. GSM

#### 8.2.1. Mobile Network Issues

Mobile networks face several challenges:

1. Radio Spectrum Limitations - Device mobility requires radio transmission, and the radio spectrum is limited. This can cause interference that affects communication quality.

2. Transmission Power in Terminal Devices - Inadequate transmission power can result in insufficient coverage or poor quality connections.
3. **Base Station Coverage**: The territory is divided into cells, each with a base station. Efficient management of these stations is crucial for proper connectivity.
4. **Cellular System**: Mobile networks are organized into cells, each with a base station. Channel reuse must consider co-channel interference, which represents a challenge in resource allocation.

#### 8.2.2. Cell GeometryCell design in mobile networks should:

- **Eliminate Overlaps**: Avoid overlaps between cells to prevent interference and signal quality problems.
- **Prevent Shadow Zones**: Ensure effective coverage across the entire area of ​​each cell.
- **Maximize Cell Area**: Expand coverage without compromising signal quality, through strategic distribution of base stations and antennas.

#### 8.2.3. Channel Reuse

Channel reuse is crucial to manage the available frequency spectrum:

- **Efficient Channel Allocation**: Assign frequency channels so that nearby cells do not use the same ones, reducing interference.
- **Reuse Optimization**: Employ strategies to minimize co-channel interference by reusing channels in different cells, improving network capacity.

#### 8.2.4. Handover (HO)

Handover (HO) involves:

- **Channel Change During a Connection**: Changing channels during a connection due to cell change, signal decline, or traffic redistribution.
- **Optional Continuity**: Handover can be with or without interruptions, known as soft handover (soft HO) or hard handover (hard HO).

The Handover process includes:

1. **Handover Condition Detection**: Identifying the need for handover, such as cell change or weak signal.
2. **Optimal Destination Channel Search**: Finding the appropriate channel to maintain communication quality.
3. **Channel Handover Performance**: Efficient transition between channels to ensure continuity of data transmission.

#### 8.2.5. Roaming

Roaming allows a mobile terminal to connect at any location within the system coverage area. Includes:

- **Joint Location Area**: Set of cells controlled by a mobile switching center.
- **Location Registration**: Message sent by the mobile device to be located in a specific area.
- **Paging**: Sending messages to all cells in a location area to establish connection with a mobile device.

#### 8.2.6. Security and Privacy in Mobile Networks

Security and privacy in mobile networks are managed by:

- **Authentication**: Verification of the user's identity to prevent unauthorized access.
- **Encryption**: Protection of transmitted information using encryption algorithms, ensuring confidentiality and privacy.

#### 8.2.7. Architecture of the Global System for Mobile Communications (GSM)

The GSM system is composed of:

- **Mobile Station (MS)**: User terminal containing the SIM card with the phone number and the mobile equipment (ME) with the unique IMEI.
- **Base Station Subsystem (BSS)**: Includes:
- **Base Station (BTS)**: Equipment for wireless communication with mobile devices.
- **Base Station Controller (BSC)**: Manages the base stations (BTS) and executes orders from the mobile switching center (MSC).
- **Network Switching Subsystem (NSS)**: Includes:
- **Mobile Switching Center (MSC)**: In charge of routing and transferring calls, roaming and connecting to other networks.
- **Home Location Register (HLR)**: Database with information on network users.
- **Visitor Location Register (VLR)**: Copy of the HLR information accessible from the MSC.
- **Authentication Center (AuC)**: Stores encryption algorithms and keys for authentication and security.
- **Equipment Identity Register (EIR)**: List with the IMEIs of the mobile devices in the network.
- **Operations and Maintenance Center (OMC)**: Obtains operating reports, manages alarms and generates statistics for network monitoring and maintenance.