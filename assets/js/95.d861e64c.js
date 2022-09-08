(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{699:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Before diving into events, ensure you understand the concepts covered in the following sections:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/transactions.html"}},[e._v("Transactions")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("Messages")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/modules.html"}},[e._v("Modules")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")])],1)]),e._v(" "),a("p",[e._v("Code examples are provided at the end of this section, which show events implemented in the checkers blockchain.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("Dedicate some time to events in the Cosmos SDK:")]),e._v(" "),a("ul",[a("li",[e._v("Learn what events are.")]),e._v(" "),a("li",[e._v("Learn how events are useful.")]),e._v(" "),a("li",[e._v("Learn how events are implemented in applications.")])])]),e._v(" "),a("p",[e._v("An event is an object that contains information about the execution of applications. Events are used by service providers like block explorers and wallets to track the execution of various messages and index transactions.")]),e._v(" "),a("p",[e._v("Events are implemented as an alias of the ABCI "),a("code",[e._v("event")]),e._v(" type in the form "),a("code",[e._v("{eventType}.{attributeKey}={attributeValue}")]),e._v(" in the Cosmos SDK.")]),e._v(" "),a("p",[e._v("Events allow application developers to attach additional information. This means that transactions might be queried using events:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gRXZlbnRzIGFsbG93IGFwcGxpY2F0aW9uIGRldmVsb3BlcnMgdG8gYXR0YWNoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8KLy8gUmVzcG9uc2VCZWdpbkJsb2NrLCBSZXNwb25zZUVuZEJsb2NrLCBSZXNwb25zZUNoZWNrVHgsIGFuZCBSZXNwb25zZURlbGl2ZXJUeC4KLy8gTGF0ZXIsIHRyYW5zYWN0aW9ucyBtYXkgYmUgcXVlcmllZCB1c2luZyB0aGVzZSBldmVudHMuCm1lc3NhZ2UgRXZlbnQgewogIHN0cmluZyAgICAgICAgICAgICAgICAgIHR5cGUgICAgICAgPSAxOwogIHJlcGVhdGVkIEV2ZW50QXR0cmlidXRlIGF0dHJpYnV0ZXMgPSAyIFsKICAgIChnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsCiAgICAoZ29nb3Byb3RvLmpzb250YWcpICA9ICZxdW90O2F0dHJpYnV0ZXMsb21pdGVtcHR5JnF1b3Q7CiAgXTsKfQo="}}),e._v(" "),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),a("p",[e._v("Two elements stand out in the previous:")]),e._v(" "),a("ul",[a("li",[e._v("A "),a("code",[e._v("type")]),e._v(" to categorize the event at a high level. For example, the Cosmos SDK uses the "),a("code",[e._v("message")]),e._v(" "),a("em",[e._v("type")]),e._v(" to filter events by "),a("code",[e._v("Msg")]),e._v(".")]),e._v(" "),a("li",[e._v("A list of "),a("code",[e._v("attributes")]),e._v(", which are key-value pairs giving more information on the categorized event. For example, we can filter events by key-value pairs using "),a("code",[e._v("message.action={some_action}")]),e._v(", "),a("code",[e._v("message.module={some_module}")]),e._v(" or "),a("code",[e._v("message.sender={a_sender}")]),e._v(" for the "),a("code",[e._v("message")]),e._v(" type.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("Make sure to add "),a("code",[e._v("'")]),e._v(" (single quotes) around each attribute value to parse the attribute values as strings.")])]),e._v(" "),a("p",[e._v("Events, their type, and attributes are defined on a per-module basis in the module's "),a("code",[e._v("/types/events.go")]),e._v(" file. Each module additionally documents its events under "),a("code",[e._v("spec/xx_events.md")]),e._v(".")]),e._v(" "),a("p",[e._v("Events are returned to the underlying consensus engine in response to the following ABCI messages:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("BeginBlock")])]),e._v(" "),a("li",[a("code",[e._v("EndBlock")])]),e._v(" "),a("li",[a("code",[e._v("CheckTx")])]),e._v(" "),a("li",[a("code",[e._v("DeliverTx")])])]),e._v(" "),a("p",[e._v("Events are managed by an abstraction called the "),a("code",[e._v("EventManager")]),e._v(". Events are triggered from the module's Protobuf "),a("code",[e._v("Msg")]),e._v(" service with "),a("code",[e._v("EventManager")]),e._v(". This abstraction demands further exploration.")]),e._v(" "),a("h2",{attrs:{id:"eventmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventmanager"}},[e._v("#")]),e._v(" "),a("code",[e._v("EventManager")])]),e._v(" "),a("p",[a("code",[e._v("Eventmanager")]),e._v(" tracks a list of events for the entire execution flow of a transaction, or "),a("code",[e._v("BeginBlock")]),e._v("/"),a("code",[e._v("EndBlock")]),e._v(". "),a("code",[e._v("EventManager")]),e._v(" implements a simple wrapper around a slice of event objects, which can be emitted from and provide useful methods. The most used method for Cosmos SDK module and application developers is "),a("code",[e._v("EmitEvent")]),e._v(".")]),e._v(" "),a("p",[e._v("Module developers should handle event emission via "),a("code",[e._v("EventManager#EmitEvent")]),e._v(" in each message handler and in each "),a("code",[e._v("BeginBlock")]),e._v(" or "),a("code",[e._v("EndBlock")]),e._v(" handler accessed via the "),a("code",[e._v("Context")]),e._v(". Event emission generally follows this pattern:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoZW0gKkV2ZW50TWFuYWdlcikgRW1pdEV2ZW50KGV2ZW50IEV2ZW50KSB7CiAgICBlbS5ldmVudHMgPSBlbS5ldmVudHMuQXBwZW5kRXZlbnQoZXZlbnQpCn0K"}}),e._v(" "),a("p",[e._v("Each module's handler function should also set a new "),a("code",[e._v("EventManager")]),e._v(" to the context to isolate emitted events per message:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdIYW5kbGVyKGtlZXBlciBLZWVwZXIpIHNkay5IYW5kbGVyIHsKICAgIHJldHVybiBmdW5jKGN0eCBzZGsuQ29udGV4dCwgbXNnIHNkay5Nc2cpICgqc2RrLlJlc3VsdCwgZXJyb3IpIHsKICAgICAgICBjdHggPSBjdHguV2l0aEV2ZW50TWFuYWdlcihzZGsuTmV3RXZlbnRNYW5hZ2VyKCkpCiAgICAgICAgc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsKICAgICAgICAgICAgLy8gZXZlbnQgdHlwZXMKICAgICAgICB9CiAgICAuLi4KICAgIH0KfQo="}}),e._v(" "),a("h2",{attrs:{id:"subscribing-to-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-events"}},[e._v("#")]),e._v(" Subscribing to events")]),e._v(" "),a("p",[e._v("You can use Tendermint's "),a("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/subscription.html#subscribing-to-events-via-websocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket"),a("OutboundLink")],1),e._v(" to subscribe to events by calling the "),a("code",[e._v("subscribe")]),e._v(" RPC method.")]),e._v(" "),a("p",[e._v("The main "),a("code",[e._v("eventCategories")]),e._v(" you can subscribe to are:")]),e._v(" "),a("ul",[a("li",[a("strong",[a("code",[e._v("NewBlock")]),e._v(":")]),e._v(" contains events triggered during "),a("code",[e._v("BeginBlock")]),e._v(" and "),a("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),a("li",[a("strong",[a("code",[e._v("Tx")]),e._v(":")]),e._v(" contains events triggered during "),a("code",[e._v("DeliverTx")]),e._v(", the transaction processing.")]),e._v(" "),a("li",[a("strong",[a("code",[e._v("ValidatorSetUpdates")]),e._v(":")]),e._v(" contains updates about the set of validators for the block.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("You can find a full list of event categories in the "),a("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#pkg-constants",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Go documentation"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("You can filter for event types and attribute values. For example, a transfer transaction triggers an event of type "),a("code",[e._v("Transfer")]),e._v(" and has "),a("code",[e._v("Recipient")]),e._v(" and "),a("code",[e._v("Sender")]),e._v(" as attributes, as defined in the "),a("code",[e._v("events.go")]),e._v(" file of the "),a("code",[e._v("bank")]),e._v(" module.")]),e._v(" "),a("h2",{attrs:{id:"code-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-example"}},[e._v("#")]),e._v(" Code example")]),e._v(" "),a("ExpansionPanel",{attrs:{title:"Show me some code for my checkers blockchain"}},[a("p",[e._v("It would be good to document a game's lifecycle via events in your checkers blockchain.\n"),a("br"),a("br"),e._v("\nFor instance, you can emit a specific event such as when creating a game:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIGN0eCBzZGsuQ29udGV4dApjdHguRXZlbnRNYW5hZ2VyKCkuRW1pdEV2ZW50KAogICAgc2RrLk5ld0V2ZW50KHNkay5FdmVudFR5cGVNZXNzYWdlLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoc2RrLkF0dHJpYnV0ZUtleU1vZHVsZSwgJnF1b3Q7Y2hlY2tlcnMmcXVvdDspLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoc2RrLkF0dHJpYnV0ZUtleUFjdGlvbiwgJnF1b3Q7TmV3R2FtZUNyZWF0ZWQmcXVvdDspLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoJnF1b3Q7Q3JlYXRvciZxdW90OywgbXNnLkNyZWF0b3IpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoJnF1b3Q7SW5kZXgmcXVvdDssIG5ld0luZGV4KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKCZxdW90O1JlZCZxdW90OywgbXNnLlJlZCksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSgmcXVvdDtCbGFjayZxdW90OywgbXNnLkJsYWNrKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKCZxdW90O1dhZ2VyJnF1b3Q7LCBzdHJjb252LkZvcm1hdFVpbnQobXNnLldhZ2VyLCAxMCkpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoJnF1b3Q7VG9rZW4mcXVvdDssIG1zZy5Ub2tlbiksCiAgICApLAopCg=="}}),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("It is easy to add events to the other transaction types. Events are meant to inform and notify relevant parties.")])]),e._v(" "),a("p",[e._v("You should also emit an event for games that have timed out. This is part of their lifecycle after all. You would do that in the end blocker:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudChzZGsuRXZlbnRUeXBlTWVzc2FnZSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHNkay5BdHRyaWJ1dGVLZXlNb2R1bGUsICZxdW90O2NoZWNrZXJzJnF1b3Q7KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHNkay5BdHRyaWJ1dGVLZXlBY3Rpb24sICZxdW90O0dhbWVGb3JmZWl0ZWQmcXVvdDspLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoJnF1b3Q7SWRWYWx1ZSZxdW90Oywgc3RvcmVkR2FtZUlkKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKCZxdW90O1dpbm5lciZxdW90OywgcnVsZXMuTk9fUExBWUVSLkNvbG9yKSwgLy8gT3IgdGhlIHJpZ2h0ZnVsIHdpbm5lci4KICAgICksCikK"}})],1),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v("How events are objects used by service providers such as block explorers and wallets to track the execution of messages and index transactions by applications.")]),e._v(" "),a("li",[e._v("The types and attributes of events are defined on a per-module basis and developers can attach additional information to them, so events can be queried or filtered.")]),e._v(" "),a("li",[e._v("Events are managed, tracked, and triggered by the "),a("code",[e._v("EventManager")]),e._v(" abstraction.")]),e._v(" "),a("li",[e._v("You can subscribe to different categories of event using Tendermint's WebSocket.")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);