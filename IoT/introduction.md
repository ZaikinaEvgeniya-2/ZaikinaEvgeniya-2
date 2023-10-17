<h1>Subject Area</h1>
<br/>There is a standard ISO/IEC 30141 for IoT system reference architecture in IoT networks.

Example of the commonly IoT system components:
- Devices, including smart devices (refrigerators, sensors, controls) connected to Raspberry Pi, using flow written in Node-RED.
- Communication, using MQTT messaging protocol, that implements publish/subscribe model using topics.
- Bus or Aggregation, like Mosquitto MQTT broker/hub for connecting devices and applications.
- Processing or Analise logic, node server and db deployed on Azure.
- Application, including mobile application for managing devices, dashboard.

<br/>To easily connect to MQTT brokers can use MQTTX client tools for publishing, subscribing, sending and receiving messages.

![Screenshot](https://github.com/ZaikinaEvgeniya-2/ZaikinaEvgeniya-2/assets/62234691/e572746f-e146-4fa9-bfe4-e0894ee9ac6f)




<h2>IoT</h2> (https://aws.amazon.com/what-is/iot/)
<br/>The Internet of Things (IoT) refers to a network of physical devices, vehicles, appliances and other physical objects that are embedded with sensors, software and network connectivity that allows them to collect and share data.

![Screenshot (1)](https://github.com/ZaikinaEvgeniya-2/ZaikinaEvgeniya-2/assets/62234691/2d4b1816-094c-44d0-9e80-eaabe9280abe)

<br/>A typical IoT system works through the real-time collection and exchange of data. An IoT system has three components:
<br/>Smart device is a device, like a television, security camera, or exercise equipment that has been given computing capabilities. It collects data from its environment, user inputs, or usage patterns and communicates data over the internet to and from its IoT application.
<br/>An IoT application is a collection of services and software that integrates data received from various IoT devices. It uses machine learning or artificial intelligence (AI) technology to analyze this data and make informed decisions. These decisions are communicated back to the IoT device and the IoT device then responds intelligently to inputs.
<br/>The IoT device or fleet of devices can be managed through a graphical user interface. Common examples include a mobile application or website that can be used to register and control smart devices.
<br/>Smart devices, IoT applications, and graphical user interfaces can communicate through messaging protocols, like MQTT, CoAP, XMPP, AQMP, DDS and others.




<h2>MQTT</h2> (https://aws.amazon.com/what-is/mqtt/#:~:text=MQTT%20is%20a%20standards%2Dbased,constrained%20network%20with%20limited%20bandwidth.)
<br/>The Message Queuing Telemetry Transport (MQTT) is a standards-based messaging protocol, or set of rules, used for machine-to-machine communication. Smart sensors, wearables, and other Internet of Things (IoT) devices typically have to transmit and receive data over a resource-constrained network with limited bandwidth. These IoT devices use MQTT for data transmission.

![Screenshot (2)](https://github.com/ZaikinaEvgeniya-2/ZaikinaEvgeniya-2/assets/62234691/adeed48a-00a8-4219-8914-023c8f0818a5)

<br/>MQTT implements the publish/subscribe model by defining clients and brokers.
<br/>An MQTT client is any device from a server to a microcontroller that runs an MQTT library. If the client is sending messages, it acts as a publisher, and if it is receiving messages, it acts as a receiver. Basically, any device that communicates using MQTT over a network can be called an MQTT client device. 
<br/>The MQTT broker is the backend system which coordinates messages between the different clients. Responsibilities of the broker include receiving and filtering messages, identifying clients subscribed to each message, and sending them the messages and others. Top MQTT brokers: Mosquitto, EMQ X, Cassandana, RabbitMQ and others.
<br/>Clients and brokers begin communicating by using an MQTT connection. Clients initiate the connection by sending a CONNECT message to the MQTT broker. The broker confirms that a connection has been established by responding with a CONNACK message. Both the MQTT client and the broker require a TCP/IP stack to communicate. Clients never connect with each other, only with the broker.
<br/>An MQTT client establishes a connection with the MQTT broker. 
<br/>Once connected, the client can either publish messages, subscribe to specific messages, or do both. 
<br/>When the MQTT broker receives a message, it forwards it to subscribers who are interested.

<br/>The term ‘topic’ refers to keywords the MQTT broker uses to filter messages for the MQTT clients. Topics are organized hierarchically, similar to a file or folder directory. For example smart home system operating in a multilevel house ourhome/groundfloor/livingroom/light.
<br/>MQTT clients publish messages that contain the topic and data in byte format. The client determines the data format such as text data, binary data, XML, or JSON files. For example, a lamp in the smart home system may publish a message on for the topic living room/light.
<br/>MQTT clients send a SUBSCRIBE message to the MQTT broker, to receive messages on topics of interest. This message contains a unique identifier and a list of subscriptions. 
<br/>For example, your phone wants to subscribe to the topic light.
<br/>MQTT client tools are used to connect to MQTT brokers for publishing, subscribing, sending and receiving messages: MQTTX, MQTT Explorer, Mosquitto CLI, EasyMQTT and others.




<h2>Mosquitto</h2> (https://mosquitto.org/)
<br/>Eclipse Mosquitto MQTT broker is a message broker that implements the MQTT protocol versions 5.0, 3.1.1 and 3.1. Mosquitto is lightweight and is suitable for use on all devices from low power single board computers to full servers.




<h2>MQTTX</h2> (https://mqttx.app/docs)
<br/>MQTTX (MQTT client tool) is an open-source, cross-platform MQTT 5.0 desktop client. It enables users to establish multiple MQTT connections, thereby facilitating swift testing of MQTT/MQTT connections, as well as message subscription and publication.




<h2>Raspberry Pi</h2> (https://www.raspberrypi.org/help/what-%20is-a-raspberry-pi/)
<br/>The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse. It compatible with MQTT and can connect to the Internet. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Scratch and Python. It’s capable of doing everything you’d expect a desktop computer to do, from browsing the internet and playing high-definition video, to making spreadsheets, word-processing, and playing games.

![Screenshot (3)](https://github.com/ZaikinaEvgeniya-2/ZaikinaEvgeniya-2/assets/62234691/08abedb1-cf8b-45b7-9ed9-7e70132cb1dc)




<h2>Node-RED</h2> (https://nodered.org/)
<br/>Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways. It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click.
<br/>Node-RED can be used as an IoT application development tool to create MQTT-based flows that receive, process, and send data to other components in the system. To easily connect to MQTT brokers, Node-RED provides MQTT nodes that can be used to publish and subscribe to MQTT messages. Additionally, MQTT client tools can also be used for publishing, subscribing, sending, and receiving messages. With Node-RED, it's easy to create custom MQTT-based flows that can control and monitor devices in the IoT network, and to create graphical user interfaces that display the data received from MQTT messages.

![Screenshot (4)](https://github.com/ZaikinaEvgeniya-2/ZaikinaEvgeniya-2/assets/62234691/cad7716f-e0cd-439f-806b-02d1bcf18b21)



<h2>Notes</h2>
<h3>Modbus</h3>
Modbus is a network protocol used for transmitting information over serial lines between electronic devices.
Widgetlords is a company that designs and creates products that are relevant to user's of the Raspberry Pi.

<h3>GPIO</h3>
GPIO (General Purpose Input/Output) is a generic pin whose value consists of one of two voltage settings (high or low) and whose behavior can be programmed through software.
