(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{769:function(e,t,o){"use strict";o.r(t);var a=o(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ibc-application-developer-introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibc-application-developer-introduction"}},[e._v("#")]),e._v(" IBC Application Developer Introduction")]),e._v(" "),o("p",[e._v("You might have already dived into "),o("RouterLink",{attrs:{to:"/tutorials/8-understand-sdk-modules/"}},[e._v("how to create custom SDK modules")]),e._v(". Additionally, you had an "),o("RouterLink",{attrs:{to:"/academy/3-ibc/1-what-is-ibc.html"}},[e._v("introduction to IBC")]),e._v(", the ibc-go module in the SDK, and how to "),o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/13-relayer-intro.html"}},[e._v("spin up a relayer to send IBC packets")]),e._v(".")],1),e._v(" "),o("p",[e._v("Remember the separation of concerns in the Inter-Blockchain Communication Protocol (IBC) between the transport layer (IBC/TAO) and the application layer (IBC/APP). The transport layer provides the basic infrastructure layer to "),o("em",[e._v("transport")]),e._v(", "),o("em",[e._v("authenticate")]),e._v(", and "),o("em",[e._v("order")]),e._v(" arbitrary packets of data. The encoding, decoding, and interpretation of the data to trigger the custom application logic is then up to the application layer. The examples of token transfer sent over IBC implicitly used the ICS-20 or "),o("em",[e._v("transfer")]),e._v(" IBC application module provided by the "),o("strong",[e._v("ibc-go")]),e._v(" SDK module (which also provides the core transport layer functionality).")]),e._v(" "),o("p",[e._v("In the following sections, you will learn how to develop your custom IBC application modules, either by upgrading an existing module or starting from scratch using Ignite CLI.")]),e._v(" "),o("HighlightBox",{attrs:{type:"docs"}},[o("p",[e._v("In the "),o("a",{attrs:{href:"https://ibc.cosmos.network/v3.0.0/ibc/integration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("integration"),o("OutboundLink")],1),e._v(" section of the IBC documentation, the necessary steps to integrate IBC in a Cosmos SDK chain are outlined.")]),e._v(" "),o("p",[e._v("Note that this does not mean that the main application modules turn into IBC modules, it only means IBC is enabled for the chain. The IBC module has come out-of-the-box in Cosmos SDK chains since the 0.40.x version of the SDK, so it is unlikely you will have to implement these steps manually when developing a chain.")]),e._v(" "),o("p",[e._v("For example, the checkers blockchain you developed in the previous section "),o("strong",[e._v("is IBC-enabled")]),e._v(". This is revealed when trying to send IBC denoms from other chains in order to set a wager. However, this does not make the "),o("code",[e._v("x/checkers")]),e._v(" module an IBC-enabled module. You will investigate all the additions required to make the module IBC-enabled in what follows.")])]),e._v(" "),o("h2",{attrs:{id:"structure-of-the-sections-to-come"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#structure-of-the-sections-to-come"}},[e._v("#")]),e._v(" Structure of the sections to come")]),e._v(" "),o("p",[e._v("In this part of the chapter, you will first investigate the code you have to add to make a module IBC-enabled. For this conceptual example, you will build a simple chain from scratch with Ignite CLI. Ignite CLI provides the option to scaffold an IBC module, which does all of the hard work in terms of boilerplate code. Still, it makes sense to take a look at what exactly has changed. Therefore, you will compare the code with a "),o("em",[e._v("git diff")]),e._v(" when scaffolding a chain with a regular module and when you scaffold an IBC module.")]),e._v(" "),o("p",[e._v("A similar approach will be taken to check what Ignite CLI implements when scaffolding an IBC packet.")]),e._v(" "),o("p",[e._v("After finishing the conceptual part, you are going to "),o("RouterLink",{attrs:{to:"/hands-on-exercise/5-ibc-adv/6-ibc-app-checkers.html"}},[e._v("expand the checkers blockchain you created")]),e._v(" to include an IBC module in it, and will "),o("RouterLink",{attrs:{to:"/hands-on-exercise/5-ibc-adv/7-ibc-app-leaderboard.html"}},[e._v("create an additional leaderboard blockchain")]),e._v(" to act as a separate appchain that can interact via IBC with the checkers blockchain.")],1),e._v(" "),o("p",[e._v("Let's dive into it!")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);