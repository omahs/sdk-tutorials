(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{732:function(e,t,n){"use strict";n.r(t);var a=n(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"ibc-tooling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ibc-tooling"}},[e._v("#")]),e._v(" IBC Tooling")]),e._v(" "),n("HighlightBox",{attrs:{type:"learning"}},[n("p",[e._v("In this section, you will discover the following tools:")]),e._v(" "),n("ul",[n("li",[e._v("MapOfZones")]),e._v(" "),n("li",[e._v("Mintscan")]),e._v(" "),n("li",[e._v("IOBScan")])])]),e._v(" "),n("p",[e._v("In this section, you will take a look at three very helpful visualization tools for the IBC network. They include information on the chains in the network (hub and zones), connections, channels, and transactions.")]),e._v(" "),n("p",[e._v("While going through the overview, it is recommended to try out all there is to discover: just click around and see what happens.")]),e._v(" "),n("p",[e._v("These types of tools help maintain an overview of the overall IBC network, but can also assist with things like relayer selection, as they provide an overview of essential metrics when it comes to relaying.")]),e._v(" "),n("h2",{attrs:{id:"mapofzones-explore-the-cosmos-network"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mapofzones-explore-the-cosmos-network"}},[e._v("#")]),e._v(" MapOfZones - explore the Cosmos network")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://mapofzones.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MapOfZones"),n("OutboundLink")],1),e._v(" is a Cosmos network explorer.")]),e._v(" "),n("p",[e._v("By default, the explorer shows you a visual overview of the IBC network for the last seven days:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/mapofzones1.png"}})],1),e._v(" "),n("p",[e._v("You can also change the time being visualized by the MapOfZones in the lower right-hand corner of the display. You can chose between:")]),e._v(" "),n("ul",[n("li",[e._v("24 hours")]),e._v(" "),n("li",[e._v("Seven days")]),e._v(" "),n("li",[e._v("30 days")])]),e._v(" "),n("p",[e._v("The overview is dynamic and gives you a good feeling of the current activity in the overall network and between specific chains. You can also include testnet chains in the overview - you just have to enable it by activating "),n("code",[e._v("Show testnet")]),e._v(" in the upper right-hand corner of the overview. The MapOfZones also lets you:")]),e._v(" "),n("ul",[n("li",[e._v("See the overview in full-screen mode")]),e._v(" "),n("li",[e._v("Zoom in and out")]),e._v(" "),n("li",[e._v("See the overview in 2D and 3D")]),e._v(" "),n("li",[e._v("Filter the zones you see by:\n"),n("ul",[n("li",[e._v("Activity: you can select all, most active, or least active chains.")]),e._v(" "),n("li",[e._v("Trendline: you can chose between uptrend and downtrend.")])])])]),e._v(" "),n("p",[e._v("All of which can be found on the right-hand side of the overview display.")]),e._v(" "),n("p",[e._v("The individual chains are visualized by circle icons, sometimes including the chain's logo. Additionally, you can see connecting lines between the different chains. These lines represent transactions between chains.")]),e._v(" "),n("HighlightBox",{attrs:{type:"note"}},[n("p",[e._v('In the overview display of the Cosmos network, the lines are colored to signal the main direction of the transactions. The coloring goes from red to green. The "redder" a line, the more transactions are mainly sends. The "greener" it becomes, the more transactions are mainly receives.')])]),e._v(" "),n("p",[e._v("When you hover over a specific chain with your mouse cursor, a small overview of data for that chain is displayed.")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/mapofzones2.png"}})],1),e._v(" "),n("p",[e._v("The information displayed includes:")]),e._v(" "),n("ul",[n("li",[e._v("The number of peers")]),e._v(" "),n("li",[e._v("The number of IBC transfers (for the selected time period)")]),e._v(" "),n("li",[e._v("The IBC volume (in USD)")]),e._v(" "),n("li",[e._v("The success rate (in %)")]),e._v(" "),n("li",[e._v("The IBC volume out (in USD)")]),e._v(" "),n("li",[e._v("The IBC volume in (in USD)")]),e._v(" "),n("li",[e._v("A button for more "),n("code",[e._v("Details")])])]),e._v(" "),n("p",[e._v("If you click on the "),n("code",[e._v("Details")]),e._v(", you are directed to an overview with more in-depth information about the chain selected:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/detailscosmoszone.png"}})],1),e._v(" "),n("p",[e._v("In the overview, you can find a list of all the chains the selected chain is connected to. When you click on a specific chain, you can see the channels between the selected chain and another chain:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/cosmososmasischannels.png"}})],1),e._v(" "),n("p",[e._v("Now you have an overview for each channel, including: how much IBC volume is transferred between the chains through the individual channels; the number of transfers successfully transferred to and received from a particular zone; the balancing figure between inbound and outbound IBC transfers; the number of IBC transfers failed attributed to a particular pair of channels between zones; and the ratio of successfully completed transfers to all transfers with final status.")]),e._v(" "),n("HighlightBox",{attrs:{type:"note"}},[n("p",[e._v("There are canonical channels for ICS-20. All other channels will have been created accidentally by (inexperienced) relayers and hence have practically no transactions.")])]),e._v(" "),n("p",[e._v("When you go back to the overview, below the visual overview of the entire network you can find a list of the most active zones by IBC volume in USD:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/mostactivezones.png"}})],1),e._v(" "),n("p",[e._v("The list includes very useful information, such as:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("IBC volume, $")]),e._v(": USD value of tokens successfully relayed via IBC transfer with pertinent volume in progress.")]),e._v(" "),n("li",[n("code",[e._v("IBC transfer")]),e._v(": number of successfully relayed IBC transfers with pertinent quantity in progress.")]),e._v(" "),n("li",[n("code",[e._v("IBC volume out, $")]),e._v(": USD value of tokens successfully transferred to other zones with pertinent volume in progress.")]),e._v(" "),n("li",[n("code",[e._v("IBC volume in, $")]),e._v(": USD value of tokens successfully received from other zones with pertinent volume in progress.")]),e._v(" "),n("li",[n("code",[e._v("IBC WAU")]),e._v(": number of zone's unique addresses initiated outward IBC transfer(s).")]),e._v(" "),n("li",[n("code",[e._v("IBC volume activity")]),e._v(": graph visualizing the activity.")])]),e._v(" "),n("p",[e._v("For the first five categories, you can also sort the list in either ascending or descending order.")]),e._v(" "),n("h2",{attrs:{id:"mintscan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mintscan"}},[e._v("#")]),e._v(" Mintscan")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://hub.mintscan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mintscan"),n("OutboundLink")],1),e._v(" is another Cosmos network explorer.")]),e._v(" "),n("p",[e._v("It gives an overview of IBC networks, including a visualization (left side) and a list (right side). For the former, the default is set to give you a visualization based on IBC transactions within a 30-day period:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/mintscanoverview.png"}})],1),e._v(" "),n("p",[e._v("To select a specific chain, just click on it in the visualization. You will get a display of more detailed information for that chain:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/mintscanosmosis1.png"}})],1),e._v(" "),n("p",[e._v("Here you can see:")]),e._v(" "),n("ul",[n("li",[e._v("The total of send transactions measured in transactions and USD - Total Send Txs.")]),e._v(" "),n("li",[e._v("The total of receive transactions measured in transactions and USD - Total Receive Txs.")]),e._v(" "),n("li",[e._v("The send connection, with the number of chains and relayers.")]),e._v(" "),n("li",[e._v("The receive connection, with the number of chains and relayers.")])]),e._v(" "),n("p",[e._v("You can also click on "),n("code",[e._v("Show all Sends")]),e._v(" and "),n("code",[e._v("Show all Receives")]),e._v(" to get a complete list for both.")]),e._v(" "),n("p",[e._v("Scroll down:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/mintscanosmosis2.png"}})],1),e._v(" "),n("p",[e._v("Here you can see graphs for:")]),e._v(" "),n("ul",[n("li",[e._v("The "),n("strong",[e._v("transaction history")]),e._v(", with information on the total transactions, amount of send transactions, and amount of receive transactions.")]),e._v(" "),n("li",[e._v("The "),n("strong",[e._v("volume history")]),e._v(", with information on the total transaction volume, send volume, and receive volume.")])]),e._v(" "),n("p",[e._v("You can also use the list on the right-hand side to select a specific blockchain and get a detailed information overview for that chain:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/cosmosconnections.png"}})],1),e._v(" "),n("p",[e._v("In the detailed overview you can select a specific connection, and Mintscan will show you the corresponding channels:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/cosmoschannels.png"}})],1),e._v(" "),n("p",[e._v("If you click one of the connections you can see the connections, send and receive transactions, the relayer transaction history, and the relayer volume history:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/mintscanchanneloevrview.png"}})],1),e._v(" "),n("p",[e._v("If you select a channel, you will be forwarded to a page with more in-depth information regarding that IBC relayer:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/onchannel1.png"}})],1),e._v(" "),n("p",[e._v("Among other things you can find out:")]),e._v(" "),n("ul",[n("li",[e._v("If a relayer is well known")]),e._v(" "),n("li",[e._v("The total transfer value for the relayer")]),e._v(" "),n("li",[e._v("The last time an update was done")]),e._v(" "),n("li",[e._v("The operating period for that IBC relayer")])]),e._v(" "),n("p",[e._v("Below that you will find an overview of the weekly transferred values of receive and send transactions:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/onchannel2.png"}})],1),e._v(" "),n("p",[e._v("You can also look into the relayer operators - operator address, IBC received transactions, and the date and time of the last update are displayed:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/onchannel3.png"}})],1),e._v(" "),n("p",[e._v("At the end of the page, you can find a list of all transactions:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/onchannel4.png"}})],1),e._v(" "),n("p",[e._v("The list of transactions includes information on:")]),e._v(" "),n("ul",[n("li",[e._v("The transaction's hash")]),e._v(" "),n("li",[e._v("The type of transaction")]),e._v(" "),n("li",[e._v("The result - was it successful?")]),e._v(" "),n("li",[e._v("The amount transferred")]),e._v(" "),n("li",[e._v("The fee of the transaction")]),e._v(" "),n("li",[e._v("The transaction's height")]),e._v(" "),n("li",[e._v("How long ago a transaction was conducted")])]),e._v(" "),n("p",[e._v("When you click on a specific transaction in the list, you are forwarded to a page with the transaction details.")]),e._v(" "),n("p",[e._v("For example, click on a transaction marked as an "),n("strong",[e._v("IBC transfer")]),e._v(" (in the type column of the transaction list):")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/ftstx1.png"}})],1),e._v(" "),n("p",[e._v("This gives you an overview of the transaction, which includes:")]),e._v(" "),n("ul",[n("li",[e._v("Chain ID")]),e._v(" "),n("li",[e._v("Transaction hash")]),e._v(" "),n("li",[e._v("Status of the transaction")]),e._v(" "),n("li",[e._v("Height of the transaction")]),e._v(" "),n("li",[e._v("Time of the transaction")]),e._v(" "),n("li",[e._v("Fee for the transaction")]),e._v(" "),n("li",[e._v("Gas used and wanted")]),e._v(" "),n("li",[e._v("Memo")])]),e._v(" "),n("p",[e._v("Further below, you can also look into information on the messages involved. Next to a lot of information on the message, you can also look into the IBC progress of IBC acknowledgements:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/ftstx2.png"}})],1),e._v(" "),n("h2",{attrs:{id:"iobscan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iobscan"}},[e._v("#")]),e._v(" IOBScan")]),e._v(" "),n("p",[e._v("Now, turn your focus to another blockchain explorer, "),n("a",{attrs:{href:"https://ibc.iobscan.io/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("IOBScan"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("From the IOBScan homepage you can get a quick overview of networks, channels, IBC token transfers, and IBC tokens:")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/iobscan1.png"}})],1),e._v(" "),n("p",[e._v("You can use the tab navigation for a closer look at:")]),e._v(" "),n("ul",[n("li",[e._v("Transfers")]),e._v(" "),n("li",[e._v("Tokens")]),e._v(" "),n("li",[e._v("The network")]),e._v(" "),n("li",[e._v("Channels")]),e._v(" "),n("li",[e._v("Relayers")])]),e._v(" "),n("p",[e._v("A search functionality by transaction hash is possible too.")]),e._v(" "),n("p",[e._v("In the upper-right-hand corner, you can select the network. For example, you can switch between the mainnet of Iris Hub, the mainnet of the Cosmos Hub, the Stargate testnet, and the Nyancat testnet.")]),e._v(" "),n("p",[e._v("On the right-hand side (next to the visualization) you can find a list of all networks, sorted by either connections or chains.")]),e._v(" "),n("HighlightBox",{attrs:{type:"tip"}},[n("p",[e._v("If you want a visualization of the network, just click on the network icon in the upper-right-hand corner. This redirects you to the "),n("a",{attrs:{href:"https://www.iobscan.io/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IOBSCAN Network State Visualizer"),n("OutboundLink")],1),e._v(":")]),e._v(" "),n("p",[n("tm-image",{attrs:{src:"/academy/4-ibc/images/iobscan2.png"}})],1),e._v(" "),n("p",[e._v("The connections displayed in the visualizer have either a regular or a dotted line, depending on whether a connection is opened or unopened.")])]),e._v(" "),n("HighlightBox",{attrs:{type:"synopsis"}},[n("p",[e._v("To summarize, this section has explored:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("MapOfZones")]),e._v(", a network explorer for the Cosmos Ecosystem, which provides a variety of dynamic visualizations of network activity over time, allowing easy comprehension of transactions occurring between specific individual chains, access to detailed traffic data and in-depth information about chains, and useful information regarding the most active zones by IBC volume in USD.")]),e._v(" "),n("li",[n("strong",[e._v("Mintscan")]),e._v(", another Cosmos network explorer, which provides an overview of IBC network activity over time, and can focus in on specific chains to show their total transactions (measured in transactions and USD) and connections (with the number of chains and relayers), also providing graphs for transaction and volume history, and can provide highly detailed breakdowns of data at various levels of network detail.")]),e._v(" "),n("li",[n("strong",[e._v("IOBScan")]),e._v(", another blockchain explorer, which provides a quick overview of networks, channels, IBC token transfers, and IBC tokens from its homepage; it allows for searching by transaction hash, and also offers the IOBSCAN Network State Visualizer for an alternative high level presentation of connection data between chains.")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);