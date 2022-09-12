(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{784:function(e,t,o){"use strict";o.r(t);var r=o(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"good-to-know-dev-terms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#good-to-know-dev-terms"}},[e._v("#")]),e._v(" Good-To-Know Dev Terms")]),e._v(" "),o("p",[e._v("You can find an overview of several technical terms in this section, including an explanation of each term and links to further resources - all of which are essential when developing with the Cosmos SDK.")]),e._v(" "),o("HighlightBox",{attrs:{type:"learning"}},[o("p",[e._v("In this section, you will take a look at the following terms:")]),e._v(" "),o("ul",[o("li",[e._v("LCD")]),e._v(" "),o("li",[e._v("RPC")]),e._v(" "),o("li",[e._v("Protobuf - Protocol Buffers")]),e._v(" "),o("li",[e._v("gRPC, gRPC-web, and gRPC-Gateway")]),e._v(" "),o("li",[e._v("Amino")])]),e._v(" "),o("p",[e._v("All these terms relate to how node interaction is conducted in Cosmos SDK blockchains.")])]),e._v(" "),o("p",[e._v("Let's dive right into it.")]),e._v(" "),o("h2",{attrs:{id:"light-client-daemon-lcd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#light-client-daemon-lcd"}},[e._v("#")]),e._v(" Light client daemon (LCD)")]),e._v(" "),o("p",[e._v("A "),o("strong",[e._v("light client")]),e._v(", compared to a full node, tracks only pieces of certain information on a blockchain. Light clients do not track the entire state of a blockchain and also do not contain every transaction/block of a chain.")]),e._v(" "),o("p",[e._v("In the Tendermint consensus, the light client protocol allows clients to benefit from the same degree of security that full nodes benefit from, while bandwidth requirements are minimized. A client can receive cryptographic proofs for blockchain states and transactions without having to sync all blocks or even their headers.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("Take a look at "),o("a",{attrs:{href:"https://blog.cosmos.network/light-clients-in-tendermint-consensus-1237cfbda104",target:"_blank",rel:"noopener noreferrer"}},[e._v("Light Clients in Tendermint Consensus"),o("OutboundLink")],1),e._v(" by Ethan Frey to discover more about how light clients are used in the Tendermint consensus.")])]),e._v(" "),o("p",[e._v("Therefore, light clients are also vital to how the Inter-Blockchain Communication (IBC) Protocol can track information such as timestamps, root hashes, and the next validator set hash. This saves space and increases efficiency for state update processing.")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("light client daemon (LCD)")]),e._v(" is an HTTP1.1 server exposed by the Cosmos SDK, and its default port is "),o("code",[e._v("1317")]),e._v(". It exposes a REST API for the chain, meaning a "),o("em",[e._v("representational state transfer application programming interface")]),e._v(" - this API allows for interaction with a RESTful web service. Traditionally, every query was re-implemented for LCD and routed to RPC behind the scenes.")]),e._v(" "),o("ExpansionPanel",{attrs:{title:"Why is it called light client daemon?"}},[o("p",[e._v("Before SDK v0.40, to get a REST API it was necessary to run another backend service (or "),o("em",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Daemon_(computing)",target:"_blank",rel:"noopener noreferrer"}},[e._v("daemon"),o("OutboundLink")],1)]),e._v(", a term inherited from Unix), for example using "),o("code",[e._v("gaiacli rest-server --laddr 0.0.0.0:1317 --node localhost:26657")]),e._v('. In Cosmos SDK v0.40, REST was moved inside the node service making it part of the Cosmos SDK, but the term "daemon" stuck, leading to the name '),o("em",[e._v("light client daemon")]),e._v(" (LDC).")])]),e._v(" "),o("h2",{attrs:{id:"remote-procedure-call-rpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remote-procedure-call-rpc"}},[e._v("#")]),e._v(" Remote procedure call (RPC)")]),e._v(" "),o("p",[e._v("A "),o("strong",[e._v("remote procedure call (RPC)")]),e._v(" is "),o("em",[e._v("a software communication protocol")]),e._v(". The term is often found in distributed computing because RPC is a technique to realize inter-process communication (IPC) by allowing a program to cause a subroutine procedure that is executed in a different address space (a different machine).")]),e._v(" "),o("p",[e._v('RPC can be understood as a client-server interaction in which the "caller" is the client, more specifically the requesting program, and the "executor" is the server, more specifically the service-providing program. The interaction is implemented through a request-response message-passing system.')]),e._v(" "),o("p",[e._v("In short, RPC is a request-response protocol, initiated by a client sending a request to a remote server to execute the subroutine.")]),e._v(" "),o("p",[e._v("RPC allows calling functions in different address spaces. Usually, the called functions are run on a different computer than the one calling them. However, with RPC, the developer codes as if the subroutine would be local; the developer does not have to code in details for remote interaction. Thus, with RPCs it is implied that all calling procedures are basically the same, independent of them being local or remote calls.")]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("As RPCs implement remote request-response protocols, it is important to note that remote procedure calls can fail in case of network problems.")])]),e._v(" "),o("h3",{attrs:{id:"how-does-an-rpc-request-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-does-an-rpc-request-work"}},[e._v("#")]),e._v(" How does an RPC request work?")]),e._v(" "),o("p",[e._v("In general, when a remote procedure call is invoked the procedure parameters are transferred across the network to the execution environment where the procedure is executed. Once finished, the results of the procedure call invoked are transferred to the call environment. The execution then resumes in the call environment, just as it would in a regular local procedure call.")]),e._v(" "),o("p",[e._v("A step-by-step RPC request could look like the following:")]),e._v(" "),o("ol",[o("li",[e._v("A client calls a client stub - a piece of code converting parameters that are passed between client and servers during an RPC. The call is a local procedure call.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("A stub is a small program routine substituting a longer program. This allows machines to behave as if a program on a remote machine was operating locally. The client has a stub which interfaces with the remote procedure, while the server has a stub to interface with the original request procedure.")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("In RPCs, the client's stub substitutes for the program providing a request procedure. The stub accepts and forwards the request to the remote procedure. Once the remote procedure completes the request, it returns the results to the stub which in turn passes them to the request procedure.")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("The server also has a stub to interface with the remote procedure.")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("The client stub packs the procedure parameters into a message.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Packing procedure parameters is called "),o("strong",[e._v("marshaling")]),e._v(".")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("Specifically, this is "),o("em",[e._v("the process of gathering data from one or more applications, putting data pieces into a message buffer, and organizing the data into a prescribed data format")]),e._v(".")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("Marshaling is vital to pass output parameters of a program written in one language as inputs to programs in a different language.")])]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("The client stub then makes a system call to send the message.")]),e._v(" "),o("li",[e._v("The client's local operating system (OS) sends the message from the client (machine A) to the server (machine B) through the corresponding transport layers.")]),e._v(" "),o("li",[e._v("The server OS passes the incoming packets to the server stub.")]),e._v(" "),o("li",[e._v("The server stub unpacks the message and with it the included procedure parameters - this is called "),o("strong",[e._v("unmarshaling")]),e._v(".")]),e._v(" "),o("li",[e._v("The server stub calls a server procedure and the procedure is executed.")]),e._v(" "),o("li",[e._v("Once the procedure is finalized, the output is returned to the server stub.")]),e._v(" "),o("li",[e._v("The server stub packs the return values into a message.")]),e._v(" "),o("li",[e._v("The message is sent to the transport layer, which sends the message to the client's transport layer.")]),e._v(" "),o("li",[e._v("The client stub unmarshals the return parameters and returns them to the original calling client.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("In an Open Systems Interconnection (OSI) model, RPC touches the transport and application layers.")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("The transport layer is tasked with the reliable sending and receiving of messages across a network. It requires error-checking mechanisms, data flow controls, data integrity assurance, congestion avoidance, multiplexing, and same order delivery.")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("The application layer is tasked with ensuring effective communication between applications on different computer systems and networks. It is a component of an application that controls methods of communication with other devices.")])]),e._v(" "),o("h3",{attrs:{id:"rpc-and-cosmos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rpc-and-cosmos"}},[e._v("#")]),e._v(" RPC and Cosmos")]),e._v(" "),o("p",[e._v("In Cosmos, RPCs are used by the command-line interface (CLI) among other things to access chains. A node exposes several endpoints - gRPC, REST, and Tendermint endpoint.")]),e._v(" "),o("p",[e._v("Exposed by Tendermint, the Tendermint RPC endpoint is an HTTP1.1 server. The default port is "),o("code",[e._v("26657")]),e._v(". The gRPC server default port is "),o("code",[e._v("9090")]),e._v(", and the REST server default port is "),o("code",[e._v("1317")]),e._v(". The Tendermint RPC is independent of the Cosmos SDK and can be configured. It uses HTTP "),o("code",[e._v("POST")]),e._v(" and JSON-RPC 2.0 for data encoding.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("For more information on the Tendermint RPC, gRPC, and the REST server, a closer look at the "),o("a",{attrs:{href:"https://docs.cosmos.network/master/core/grpc_rest.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK documentation"),o("OutboundLink")],1),e._v(" is recommended.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Cosmos exposes both the Tendermint RPC and the Cosmos LCD. For example, "),o("RouterLink",{attrs:{to:"/academy/5-cosmjs/cosmjs-intro.html"}},[e._v("CosmJS")]),e._v(" uses RPC to implement a JSON-RPC API.")],1)]),e._v(" "),o("h2",{attrs:{id:"protobuf"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protobuf"}},[e._v("#")]),e._v(" Protobuf")]),e._v(" "),o("p",[o("strong",[e._v("Protobuf")]),e._v(' (for "Protocol Buffers") is an open-source, cross-platform data format developed by Google. It helps serialize structured data and assists with program communication in networks or when storing data.')]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("If you want to get more accustomed to Protobuf, a look at the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),o("OutboundLink")],1),e._v(" helps dive deeper and offers guides and tutorials.")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("Also take a look at the "),o("RouterLink",{attrs:{to:"/tutorials/academy/2-main-concepts/protobuf.html"}},[e._v("section on this platform on Protobuf")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("In Cosmos, Protobuf is a data serialization method that developers use to describe message formats. There is a lot of internal communication within a Cosmos application, and Protobuf is central to how communication is done.")]),e._v(" "),o("p",[e._v("With Cosmos SDK v0.40, Protobuf began replacing Amino as the data encoding format of chain states and transactions, in part because encoding/decoding performance is better with Protobuf than Amino. In addition, the developer tooling is also better for Protobuf. Another benefit of switching is that the use of gRPC is fostered, as Protobuf automatically defines and generates gRPC functions. Thus developers no longer have to implement the same query for RPC, LCD, and CLI.")]),e._v(" "),o("h2",{attrs:{id:"grpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),o("p",[o("strong",[e._v("gRPC")]),e._v(" is "),o("em",[e._v("an open-source, high-performance remote procedure call (RPC) framework")]),e._v(". It was developed by Google to handle RPCs and released in 2016. gRPC can run in any environment and supports a variety of programming languages.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("For more on gRPC and very helpful information on getting started, take a look at the "),o("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("gRPC uses HTTP2 for transport and Protocol Buffers (Protobuf) to encode data. gRPCs have a single specification, which makes all gRPC implementations consistent.")]),e._v(" "),o("h3",{attrs:{id:"grpc-and-cosmos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc-and-cosmos"}},[e._v("#")]),e._v(" gRPC and Cosmos")]),e._v(" "),o("p",[e._v("In Cosmos, gRPCs are transmission control protocol (TCP) servers with Protobuf and are used for data encoding. The default port is "),o("code",[e._v("9090")]),e._v(".")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Transmission control protocol (TCP) is one of the main internet protocols that allows establishing a connection between a client and server to send data. TCP makes communication between application programs and the internet protocol (IP) possible.")])]),e._v(" "),o("p",[e._v("In the Cosmos SDK, Protobuf is the main encoding library.")]),e._v(" "),o("ExpansionPanel",{attrs:{title:"Encoding in the Cosmos SDK"}},[o("p",[e._v("A "),o("strong",[e._v("wire encoding protocol")]),e._v(" is "),o("em",[e._v("a protocol defining how data is transported from one point to another")]),e._v(". Wire protocols describe ways in which information is exchanged at the application level. Thus it is a communication protocol of the application layer protocol and not a transport protocol. To define the data exchange, the wire protocol requires specific attributes regarding:")]),e._v(" "),o("ul",[o("li",[e._v("Data types - units of data, message formats, etc.")]),e._v(" "),o("li",[e._v("Communication endpoints")]),e._v(" "),o("li",[e._v("Capabilities - delivery guarantees, direction of communication, etc.")])]),e._v(" "),o("p",[e._v("Wire protocols can be text-based or binary protocols.")]),e._v(" "),o("p",[e._v("In the Cosmos SDK, there are "),o("strong",[e._v("two categories of binary wire encoding types")]),e._v(": client encoding, and store encoding. Whereas client encoding deals with transaction processing and signing transactions, store encoding tackles state-machine transactions and with it what is stored in the Merkle tree.")]),e._v(" "),o("p",[e._v("The Cosmos SDK uses two binary wire encoding protocols:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Amino:")]),e._v(" an object encoding specification. Every Cosmos SDK module uses an Amino codec to serialize types and interfaces.")]),e._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protocol Buffers (Protobuf)")]),e._v(":")],1),e._v(" a data serialization method, which developers use to describe message formats.")])]),e._v(" "),o("p",[e._v("Due to reasons such as performance drawbacks and missing cross-language/client support, Protocol Buffers are used more and more over Amino.")]),e._v(" "),o("p",[e._v("For more information on encoding in the Cosmos SDK, see the "),o("a",{attrs:{href:"https://docs.cosmos.network/master/core/encoding.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"grpc-web"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc-web"}},[e._v("#")]),e._v(" gRPC-web")]),e._v(" "),o("p",[e._v("gRPC is supported across different software and hardware platforms. "),o("strong",[e._v("gRPC-web")]),e._v(" is "),o("em",[e._v("a JavaScript implementation of gRPC for browser clients")]),e._v(". gRPC-web clients connect to gRPC services via a special proxy.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("For more on gRPC-web, a closer look at the "),o("a",{attrs:{href:"https://github.com/grpc/grpc-web",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC repository"),o("OutboundLink")],1),e._v(" is recommended.")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("To dive into developing with gRPC-web, the "),o("a",{attrs:{href:"https://grpc.io/docs/platforms/web/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation's quick start"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://grpc.io/docs/platforms/web/basics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("basics tutorials"),o("OutboundLink")],1),e._v(" are very valuable resources.")])]),e._v(" "),o("p",[e._v("As with gRPC in general, gRPC-web uses HTTP2 with Protobuf for data encoding. The default port is "),o("code",[e._v("9091")]),e._v(".")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Secret.js is a JavaScript SDK used to write applications interacting with the "),o("a",{attrs:{href:"https://scrt.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Secret Network"),o("OutboundLink")],1),e._v(", which uses gRPC-web.")])]),e._v(" "),o("h3",{attrs:{id:"grpc-gateway"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc-gateway"}},[e._v("#")]),e._v(" gRPC-gateway")]),e._v(" "),o("p",[o("strong",[e._v("gRPC-gateway")]),e._v(" is a tool to expose gRPC endpoints as REST endpoints. It helps provide APIs in gRPC and RESTful style, and reads gRPC service definitions and generates reverse-proxy servers that can translate a RESTful JSON API into gRPC. For each gRPC endpoint defined in a Protobuf "),o("code",[e._v("Query")]),e._v(" service, the Cosmos SDK offers a corresponding REST endpoint.")]),e._v(" "),o("p",[e._v("gRPC-Gateway's aim is "),o("a",{attrs:{href:"https://grpc-ecosystem.github.io/grpc-gateway/docs/overview/background/",target:"_blank",rel:"noopener noreferrer"}},[e._v('"to provide that HTTP+JSON interface to your gRPC service"'),o("OutboundLink")],1),e._v(". With it, developers can benefit from all the advantages of gRPC and, at the same time, still provide a RESTful API - a very helpful tool when for example you want to develop a web application but have browsers that do not support HTTP2. This can help ensure backwards compatibility, and multi-language, multi-client support.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("If you want to explore gRPC-Gateway, a closer look at the "),o("a",{attrs:{href:"https://grpc-ecosystem.github.io/grpc-gateway/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC-Gateway documentation"),o("OutboundLink")],1),e._v(" is recommended.")])]),e._v(" "),o("p",[e._v("In the Cosmos SDK, gRPC-Gateway provides an HTTP1.1 server with REST API and a base64-encoded Protobuf for data encoding; it exposes gRPC endpoints as REST endpoints. It routes on the server to gRPC and piggybacks off of LCD, thus it is also on port "),o("code",[e._v("1317")]),e._v(".")]),e._v(" "),o("p",[e._v("For example, if you cannot use gRPC for your application because a browser does not support HTTP2, you can still use the Cosmos SDK. The SDK provides REST routes via gRPC-Gateway.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[o("a",{attrs:{href:"https://terra-money.github.io/terra.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra.js"),o("OutboundLink")],1),e._v(", a JavaScript SDK for applications interacting with the Terra blockchain, uses gRPC-gateway.")])]),e._v(" "),o("h2",{attrs:{id:"amino"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#amino"}},[e._v("#")]),e._v(" Amino")]),e._v(" "),o("p",[e._v("Amino is an object encoding specification. In the Cosmos SDK, every module uses an "),o("strong",[e._v("Amino codec")]),e._v(" that helps serialize types and interfaces. Amino handles interfaces by prefixing bytes before concrete types.")]),e._v(" "),o("p",[e._v("Usually, Amino codec types and interfaces are registered in the module's domain.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("A concrete type is a non-interface type which implements a registered interface. Types need to be registered when stored in interface type fields, or in a list with interface elements.")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("As a best practice, upon initialization make sure to:")]),e._v(" "),o("ul",[o("li",[e._v("Register the interfaces.")]),e._v(" "),o("li",[e._v("Implement concrete types.")]),e._v(" "),o("li",[e._v("Check for issues, like conflicting prefix bytes.")])])]),e._v(" "),o("p",[e._v("Every module exposes a function, "),o("code",[e._v("RegisterLegacyAminoCodec")]),e._v(". With it, users can provide a codec and register all types. Applications call this method for necessary modules.")]),e._v(" "),o("p",[e._v("With Amino, raw wire bytes are encoded and decoded to concrete types or interfaces when there is no Protobuf-based type definition for a module.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("For more on Amino specifications and implementation for Go, see the "),o("a",{attrs:{href:"https://github.com/tendermint/go-amino",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Go Amino documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("Amino is basically JSON with some modifications. For example, the JSON specification does not define numbers greater than 2^53, so instead strings are used in Amino when encoding a type greater than uint64/int64.")]),e._v(" "),o("br"),e._v(" "),o("p",[e._v("For more on the Amino types and their representation in JSON, see the "),o("a",{attrs:{href:"https://github.com/scrtlabs/secret.js/blob/master/DEVELOPERS.md#amino-types-and-how-theyre-represented-in-json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Secret.js documentation"),o("OutboundLink")],1),e._v(".")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);