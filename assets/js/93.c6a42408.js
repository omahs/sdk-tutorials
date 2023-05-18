(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{711:function(e,t,r){"use strict";r.r(t);var s=r(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"bridges"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bridges"}},[e._v("#")]),e._v(" Bridges")]),e._v(" "),r("HighlightBox",{attrs:{type:"prerequisite"}},[r("p",[e._v("Make sure to read the following sections as a preparation:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/academy/1-what-is-cosmos/2-cosmos-ecosystem.html"}},[e._v("The Interchain Ecosystem")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/3-transactions.html"}},[e._v("Transactions")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("Messages")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/10-events.html"}},[e._v("Events")])],1)])]),e._v(" "),r("HighlightBox",{attrs:{type:"learning"}},[r("p",[e._v("In this section you will learn more about bridges in the Interchain Ecosystem, including the Gravity Bridge that connects the Interchain with Ethereum.")])]),e._v(" "),r("h2",{attrs:{id:"the-gravity-bridge"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-gravity-bridge"}},[e._v("#")]),e._v(" The Gravity Bridge")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://www.gravitybridge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gravity Bridge"),r("OutboundLink")],1),e._v(" is an on-going project currently being built by Althea with the goal to facilitate the transfer of ERC-20 tokens to Interchain-based blockchains and back.")]),e._v(" "),r("HighlightBox",{attrs:{type:"info"}},[r("p",[e._v("The Gravity Bridge allows for novel applications that combine the power of the Interchain with the value of assets from Ethereum.")])]),e._v(" "),r("p",[e._v("Developers can use a Cosmos chain for computation that is expensive or impossible to perform with Ethereum smart contracts. Developers could accept Ethereum ERC-20 tokens as payment, or build an entire Interchain application around Ethereum tokens.")]),e._v(" "),r("h2",{attrs:{id:"how-it-works"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),r("p",[e._v("The Gravity Bridge consists of several components:")]),e._v(" "),r("ul",[r("li",[r("strong",[r("code",[e._v("Gravity.sol")]),e._v(":")]),e._v(" an Ethereum smart contract on the Ethereum blockchain.")]),e._v(" "),r("li",[r("strong",[e._v("Gravity module:")]),e._v(" a Cosmos module designed to run on the Cosmos Hub.")]),e._v(" "),r("li",[r("strong",[e._v("Orchestrator:")]),e._v(" a program that runs on Cosmos validators, which monitors the Ethereum chain and submits events that occur on Ethereum to the Interchain as messages.")]),e._v(" "),r("li",[r("strong",[e._v("Relayers:")]),e._v(" a network of nodes that compete for the opportunity to earn fees for sending transactions on behalf of the Cosmos validators.")])]),e._v(" "),r("p",[e._v("Tokens are locked on the Ethereum side by sending them to the "),r("code",[e._v("Gravity.sol")]),e._v(" smart contract. This emits an event that is observable to validators running the orchestrator. When a quorum of validators agrees that tokens have been locked on Ethereum, including the requisite confirmation blocks, a relayer is selected to send an instruction to the Gravity module, which issues new tokens. This is non-dilutive - it does not increase the circulating supply because an equal number of tokens is locked on the Ethereum side.")]),e._v(" "),r("p",[e._v("To transfer tokens from the Cosmos Hub to the Ethereum blockchain, tokens on the Interchain network are destroyed and an equal number is released (they were previously deposited) from the "),r("code",[e._v("Gravity.sol")]),e._v(" smart contract.")]),e._v(" "),r("HighlightBox",{attrs:{type:"info"}},[r("p",[e._v("The Gravity Bridge is designed to run on the Cosmos Hub. It focuses on maximum design simplicity and efficiency. The bridge can transfer ERC-20 assets originating on Ethereum to a Cosmos-based chain and back to Ethereum. Transactions are batched, with transfers netted out. This creates efficiency at scale and lowers the transaction cost for each transfer.")])]),e._v(" "),r("h3",{attrs:{id:"key-design-components-trust-in-integrity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-design-components-trust-in-integrity"}},[e._v("#")]),e._v(" Key design components: trust in integrity")]),e._v(" "),r("p",[e._v("The signing of fraudulent validator set updates and transaction batches meant for the Ethereum smart contract is punished on the Cosmos chain by slashing. If the Cosmos chain is trustworthy, you can trust the Gravity Bridge operated by it as long as it operates within certain parameters.")]),e._v(" "),r("HighlightBox",{attrs:{type:"info"}},[r("p",[r("strong",[e._v("Slashing")]),e._v(" is done to penalize validators. When a validator loses a percentage of its staked tokens, the tokens were slashed as a penalty. Thus, penalties for validators can include (but are not limited to):")]),e._v(" "),r("ul",[r("li",[e._v("Burning some of the validator's stake.")]),e._v(" "),r("li",[e._v("Removing their permission to engage in voting for a determined time period.")])])]),e._v(" "),r("p",[e._v("Bridges to Cosmos chains derive their trustworthiness from the degree of trust associated with the Cosmos chain to which they bridge. Peg-zone validators must maintain a trusted Ethereum node. This is mandatory. This removes all trust and game theory issues that usually arise when involving independent relayers. This once again dramatically simplifies the design.")]),e._v(" "),r("HighlightBox",{attrs:{type:"info"}},[r("p",[e._v("Verifying the votes of the validator set is the most expensive on-chain operation Gravity has to perform. Existing bridges incur more than double the gas costs for signature sets as small as eight signers.")])]),e._v(" "),r("h3",{attrs:{id:"operational-parameters-ensuring-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operational-parameters-ensuring-security"}},[e._v("#")]),e._v(" Operational parameters ensuring security")]),e._v(" "),r("p",[e._v("The bridge requires a validator set update on the Ethereum smart contract by calling the "),r("code",[e._v("updateValset")]),e._v(" method at least once every unbonding period, usually every two weeks. "),r("em",[e._v("Why is this necessary?")]),e._v(" Without an update every unbonding period, the validator set stored by the Ethereum smart contract could contain fraudulent/malicious validators who then cannot be slashed for misbehavior.")]),e._v(" "),r("HighlightBox",{attrs:{type:"info"}},[r("p",[e._v("Full nodes do not verify events coming from Ethereum, as events are validated into the Cosmos chain's state based purely on the signatures of the current validator set.")])]),e._v(" "),r("p",[e._v('If validators represent more than 2/3 of the stake, an event could be added to the state even without a corresponding event on Ethereum. In this case, observers of both the Cosmos and Ethereum chains will need to "raise the alarm" on the issue. This functionality is built into the relayer.')]),e._v(" "),r("HighlightBox",{attrs:{type:"reading"}},[r("p",[r("strong",[e._v("Further readings")])]),e._v(" "),r("p",[e._v("Do you want to dive deeper when it comes to bridges? Here are some helpful resources:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.althea.net/gravity-bridge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jehan Tremback, Deborah Simpier, and Justin Kilpatrick (2021): Announcing the Cosmos Gravity Bridge"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/gravity-bridge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Gravity Bridge documentation"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Projects based on the Gravity Bridge:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PeggyJV/gravity-bridge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peggy JV Inc.: Gravity Bridge"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/gravity-bridge/gravity-bridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("Althea Testnet repository: Gravity Bridge"),r("OutboundLink")],1)])])])])]),e._v(" "),r("HighlightBox",{attrs:{type:"synopsis"}},[r("p",[e._v("To summarize, this section has explored:")]),e._v(" "),r("ul",[r("li",[e._v("The Gravity Bridge, which connects the Interchain with Ethereum and allows the transfer of ERC-20 tokens to and from Cosmos-based blockchains.")]),e._v(" "),r("li",[e._v("The component elements of the Gravity Bridge and how they reliably monitor and report to Interchain applications about events on the Ethereum blockchain, providing the necessary confidence to perform transactions.")]),e._v(" "),r("li",[e._v("How the validator set forms a consensus about happenings on Ethereum.")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);