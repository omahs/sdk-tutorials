(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{730:function(e,t,o){"use strict";o.r(t);var a=o(1),c=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"add-a-way-to-make-a-move"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-a-way-to-make-a-move"}},[e._v("#")]),e._v(" Add a Way to Make a Move")]),e._v(" "),o("HighlightBox",{attrs:{type:"prerequisite"}},[o("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),o("ul",[o("li",[e._v("You understand the concepts of "),o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/3-transactions.html"}},[e._v("transactions")]),e._v(", "),o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("messages")]),e._v(", and "),o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")]),e._v(".")],1),e._v(" "),o("li",[e._v("Go is installed.")]),e._v(" "),o("li",[e._v("You have the checkers blockchain codebase with "),o("code",[e._v("MsgCreateGame")]),e._v(" and its handling. If not, follow the "),o("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/5-create-handling.html"}},[e._v("previous steps")]),e._v(" or check out the "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/create-game-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),o("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),o("HighlightBox",{attrs:{type:"learning"}},[o("p",[e._v("In this section, you will:")]),e._v(" "),o("ul",[o("li",[e._v("Extend message handling - play the game.")]),e._v(" "),o("li",[e._v("Handle moves and update the game state.")]),e._v(" "),o("li",[e._v("Validate input.")]),e._v(" "),o("li",[e._v("Extend unit tests.")])])]),e._v(" "),o("p",[e._v("Your blockchain can now create games, but can you play them? Not yet...so what do you need to make this possible?")]),e._v(" "),o("h2",{attrs:{id:"some-initial-thoughts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),o("p",[e._v("Before diving into the exercise, take some time to think about the following questions:")]),e._v(" "),o("ul",[o("li",[e._v("What goes into the message?")]),e._v(" "),o("li",[e._v("How do you sanitize the inputs?")]),e._v(" "),o("li",[e._v("How do you unequivocally identify games?")]),e._v(" "),o("li",[e._v("How do you report back errors?")]),e._v(" "),o("li",[e._v("How do you use your files that implement the checkers rules?")]),e._v(" "),o("li",[e._v("How do you make sure that nothing is lost?")])]),e._v(" "),o("h2",{attrs:{id:"code-needs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),o("p",[e._v("When it comes to the code you need, ask yourself:")]),e._v(" "),o("ul",[o("li",[e._v("What Ignite CLI commands will create your message?")]),e._v(" "),o("li",[e._v("How do you adjust what Ignite CLI created for you?")]),e._v(" "),o("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),o("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),o("p",[e._v("As before, do not bother yet with niceties like gas metering or event emission.")]),e._v(" "),o("p",[e._v("To play a game a player only needs to specify:")]),e._v(" "),o("ul",[o("li",[e._v("The ID of the game the player wants to join. Call the field "),o("code",[e._v("gameIndex")]),e._v(".")]),e._v(" "),o("li",[e._v("The initial positions of the pawn. Call the fields "),o("code",[e._v("fromX")]),e._v(" and "),o("code",[e._v("fromY")]),e._v(" and make them "),o("code",[e._v("uint")]),e._v(".")]),e._v(" "),o("li",[e._v("The final position of the pawn after a player's move. Call the fields "),o("code",[e._v("toX")]),e._v(" and "),o("code",[e._v("toY")]),e._v(" to be "),o("code",[e._v("uint")]),e._v(" too.")])]),e._v(" "),o("p",[e._v("The player does not need to be explicitly added as a field in the message because the player "),o("strong",[e._v("is")]),e._v(" implicitly the signer of the message. Name the object "),o("code",[e._v("PlayMove")]),e._v(".")]),e._v(" "),o("p",[e._v("Unlike when creating the game, you want to return:")]),e._v(" "),o("ul",[o("li",[e._v("The captured piece, if any. Call the fields "),o("code",[e._v("capturedX")]),e._v(" and "),o("code",[e._v("capturedY")]),e._v(". Make then "),o("code",[e._v("int")]),e._v(" so that you can pass "),o("code",[e._v("-1")]),e._v(" when no pieces have been captured.")]),e._v(" "),o("li",[e._v("The (potential) winner in the field "),o("code",[e._v("winner")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"with-ignite-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#with-ignite-cli"}},[e._v("#")]),e._v(" With Ignite CLI")]),e._v(" "),o("p",[e._v("Ignite CLI can create the message and the response objects with a single command:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWVzc2FnZSBwbGF5TW92ZSBnYW1lSW5kZXggZnJvbVg6dWludCBmcm9tWTp1aW50IHRvWDp1aW50IHRvWTp1aW50IFwKICAgIC0tbW9kdWxlIGNoZWNrZXJzIFwKICAgIC0tcmVzcG9uc2UgY2FwdHVyZWRYOmludCxjYXB0dXJlZFk6aW50LHdpbm5lcgo="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIC12ICQocHdkKTovY2hlY2tlcnMgXAogICAgLXcgL2NoZWNrZXJzIFwKICAgIGNoZWNrZXJzX2kgXAogICAgaWduaXRlIHNjYWZmb2xkIG1lc3NhZ2UgcGxheU1vdmUgZ2FtZUluZGV4IGZyb21YOnVpbnQgZnJvbVk6dWludCB0b1g6dWludCB0b1k6dWludCBcCiAgICAtLW1vZHVsZSBjaGVja2VycyBcCiAgICAtLXJlc3BvbnNlIGNhcHR1cmVkWDppbnQsY2FwdHVyZWRZOmludCx3aW5uZXIK"}})],1)],1),e._v(" "),o("p",[e._v("Ignite CLI once more creates all the necessary Protobuf files and boilerplate for you. See "),o("code",[e._v("tx.proto")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dQbGF5TW92ZSB7CiAgc3RyaW5nIGNyZWF0b3IgPSAxOwogIHN0cmluZyBnYW1lSW5kZXggPSAyOwogIHVpbnQ2NCBmcm9tWCA9IDM7CiAgdWludDY0IGZyb21ZID0gNDsKICB1aW50NjQgdG9YID0gNTsKICB1aW50NjQgdG9ZID0gNjsKfQoKbWVzc2FnZSBNc2dQbGF5TW92ZVJlc3BvbnNlIHsKICBpbnQzMiBjYXB0dXJlZFggPSAxOwogIGludDMyIGNhcHR1cmVkWSA9IDI7CiAgc3RyaW5nIHdpbm5lciA9IDM7Cn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-msg/proto/checkers/tx.proto#L25-L38"}}),e._v(" "),o("p",[e._v("All you have to do is fill in the needed part in "),o("code",[e._v("x/checkers/keeper/msg_server_play_move.go")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBtc2dTZXJ2ZXIpIFBsYXlNb3ZlKGdvQ3R4IGNvbnRleHQuQ29udGV4dCwgbXNnICp0eXBlcy5Nc2dQbGF5TW92ZSkgKCp0eXBlcy5Nc2dQbGF5TW92ZVJlc3BvbnNlLCBlcnJvcikgewogICAgY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGdvQ3R4KQoKICAgIC8vIFRPRE86IEhhbmRsaW5nIHRoZSBtZXNzYWdlCiAgICBfID0gY3R4CgogICAgcmV0dXJuICZhbXA7dHlwZXMuTXNnUGxheU1vdmVSZXNwb25zZXt9LCBuaWwKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-msg/x/checkers/keeper/msg_server_play_move.go#L10-L17"}}),e._v(" "),o("p",[e._v("Where the "),o("code",[e._v("TODO")]),e._v(" is replaced as per the following.")]),e._v(" "),o("h2",{attrs:{id:"the-move-handling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-move-handling"}},[e._v("#")]),e._v(" The move handling")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("rules")]),e._v(" represent the ready-made file containing the rules of the game you imported earlier. Declare your new errors in "),o("code",[e._v("x/checkers/types/errors.go")]),e._v(", given your code has to handle new error situations:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"diff-go",base64:"ICAgIHZhciAoCiAgICAgICAgLi4uCisgICAgICBFcnJHYW1lTm90Rm91bmQgICAgID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMDMsICZxdW90O2dhbWUgYnkgaWQgbm90IGZvdW5kJnF1b3Q7KQorICAgICAgRXJyQ3JlYXRvck5vdFBsYXllciA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAxMTA0LCAmcXVvdDttZXNzYWdlIGNyZWF0b3IgaXMgbm90IGEgcGxheWVyJnF1b3Q7KQorICAgICAgRXJyTm90UGxheWVyVHVybiAgICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAxMTA1LCAmcXVvdDtwbGF5ZXIgdHJpZWQgdG8gcGxheSBvdXQgb2YgdHVybiZxdW90OykKKyAgICAgIEVycldyb25nTW92ZSAgICAgICAgPSBzZGtlcnJvcnMuUmVnaXN0ZXIoTW9kdWxlTmFtZSwgMTEwNiwgJnF1b3Q7d3JvbmcgbW92ZSZxdW90OykKICAgICkK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/types/errors.go#L14-L17"}}),e._v(" "),o("p",[e._v("Take the following steps to replace the "),o("code",[e._v("TODO")]),e._v(":")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Fetch the stored game information using the "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/stored_game.go#L19",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Keeper.GetStoredGame")]),o("OutboundLink")],1),e._v(" function created by Ignite CLI:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZSwgZm91bmQgOj0gay5LZWVwZXIuR2V0U3RvcmVkR2FtZShjdHgsIG1zZy5HYW1lSW5kZXgpCmlmICFmb3VuZCB7CiAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcGYodHlwZXMuRXJyR2FtZU5vdEZvdW5kLCAmcXVvdDslcyZxdW90OywgbXNnLkdhbWVJbmRleCkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move.go#L15-L18"}}),e._v(" "),o("p",[e._v("You return an error because this is a player mistake.")])],1),e._v(" "),o("li",[o("p",[e._v("Is the player legitimate? Check with:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aXNCbGFjayA6PSBzdG9yZWRHYW1lLkJsYWNrID09IG1zZy5DcmVhdG9yCmlzUmVkIDo9IHN0b3JlZEdhbWUuUmVkID09IG1zZy5DcmVhdG9yCnZhciBwbGF5ZXIgcnVsZXMuUGxheWVyCmlmICFpc0JsYWNrICZhbXA7JmFtcDsgIWlzUmVkIHsKICAgIHJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwZih0eXBlcy5FcnJDcmVhdG9yTm90UGxheWVyLCAmcXVvdDslcyZxdW90OywgbXNnLkNyZWF0b3IpCn0gZWxzZSBpZiBpc0JsYWNrICZhbXA7JmFtcDsgaXNSZWQgewogICAgcGxheWVyID0gcnVsZXMuU3RyaW5nUGllY2VzW3N0b3JlZEdhbWUuVHVybl0uUGxheWVyCn0gZWxzZSBpZiBpc0JsYWNrIHsKICAgIHBsYXllciA9IHJ1bGVzLkJMQUNLX1BMQVlFUgp9IGVsc2UgewogICAgcGxheWVyID0gcnVsZXMuUkVEX1BMQVlFUgp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move.go#L20-L31"}}),e._v(" "),o("p",[e._v("This uses the certainty that the "),o("code",[e._v("MsgPlayMove.Creator")]),e._v(" has been verified "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/types/message_play_move.go#L29-L35",target:"_blank",rel:"noopener noreferrer"}},[e._v("by its signature"),o("OutboundLink")],1),e._v(".")])],1),e._v(" "),o("li",[o("p",[e._v("Instantiate the board in order to implement the rules:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Z2FtZSwgZXJyIDo9IHN0b3JlZEdhbWUuUGFyc2VHYW1lKCkKaWYgZXJyICE9IG5pbCB7CiAgICBwYW5pYyhlcnIuRXJyb3IoKSkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move.go#L33-L36"}}),e._v(" "),o("p",[e._v("Fortunately you previously created "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/types/full_game.go#L22-L32",target:"_blank",rel:"noopener noreferrer"}},[e._v("this helper"),o("OutboundLink")],1),e._v(". Here you "),o("code",[e._v("panic")]),e._v(" because if the game cannot be parsed the cause may be database corruption.")])],1),e._v(" "),o("li",[o("p",[e._v("Is it the player's turn? Check using the rules file's own "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/175f467/x/checkers/rules/checkers.go#L145-L147",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("TurnIs")]),o("OutboundLink")],1),e._v(" function:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWYgIWdhbWUuVHVybklzKHBsYXllcikgewogICAgcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXBmKHR5cGVzLkVyck5vdFBsYXllclR1cm4sICZxdW90OyVzJnF1b3Q7LCBwbGF5ZXIpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move.go#L38-L40"}})],1),e._v(" "),o("li",[o("p",[e._v("Properly conduct the move, using the rules' "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/rules/checkers.go#L274-L301",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Move")]),o("OutboundLink")],1),e._v(" function:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y2FwdHVyZWQsIG1vdmVFcnIgOj0gZ2FtZS5Nb3ZlKAogICAgcnVsZXMuUG9zewogICAgICAgIFg6IGludChtc2cuRnJvbVgpLAogICAgICAgIFk6IGludChtc2cuRnJvbVkpLAogICAgfSwKICAgIHJ1bGVzLlBvc3sKICAgICAgICBYOiBpbnQobXNnLlRvWCksCiAgICAgICAgWTogaW50KG1zZy5Ub1kpLAogICAgfSwKKQppZiBtb3ZlRXJyICE9IG5pbCB7CiAgICByZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcGYodHlwZXMuRXJyV3JvbmdNb3ZlLCBtb3ZlRXJyLkVycm9yKCkpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move.go#L42-L54"}})],1),e._v(" "),o("li",[o("p",[e._v("Prepare the updated board to be stored and store the information:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c3RvcmVkR2FtZS5Cb2FyZCA9IGdhbWUuU3RyaW5nKCkKc3RvcmVkR2FtZS5UdXJuID0gcnVsZXMuUGllY2VTdHJpbmdzW2dhbWUuVHVybl0Kay5LZWVwZXIuU2V0U3RvcmVkR2FtZShjdHgsIHN0b3JlZEdhbWUpCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move.go#L56-L58"}}),e._v(" "),o("p",[e._v("This updates the fields that were modified using the "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/stored_game.go#L10",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Keeper.SetStoredGame")]),o("OutboundLink")],1),e._v(" function, as when you created and saved the game.")])],1),e._v(" "),o("li",[o("p",[e._v("Return relevant information regarding the move's result:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmV0dXJuICZhbXA7dHlwZXMuTXNnUGxheU1vdmVSZXNwb25zZXsKICAgIENhcHR1cmVkWDogaW50MzIoY2FwdHVyZWQuWCksCiAgICBDYXB0dXJlZFk6IGludDMyKGNhcHR1cmVkLlkpLAogICAgV2lubmVyOiAgICBydWxlcy5QaWVjZVN0cmluZ3NbZ2FtZS5XaW5uZXIoKV0sCn0sIG5pbAo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move.go#L60-L64"}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Captured")]),e._v(" and "),o("code",[e._v("Winner")]),e._v(" information would be lost if you did not get it out of the function one way or another. More accurately, one would have to replay the transaction to discover the values. It is best to make this information easily accessible.")])],1)]),e._v(" "),o("p",[e._v("This completes the move process, facilitated by good preparation and the use of Ignite CLI.")]),e._v(" "),o("h2",{attrs:{id:"unit-tests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),o("p",[e._v("Adding unit tests for this play message is very similar to what you did for the previous message: create a new "),o("code",[e._v("msg_server_play_move_test.go")]),e._v(" file and declare it as "),o("code",[e._v("package keeper_test")]),e._v(". Start with a function that conveniently sets up the keeper for the tests. In this case, already having a game saved can reduce several lines of code in each test:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBzZXR1cE1zZ1NlcnZlcldpdGhPbmVHYW1lRm9yUGxheU1vdmUodCB0ZXN0aW5nLlRCKSAodHlwZXMuTXNnU2VydmVyLCBrZWVwZXIuS2VlcGVyLCBjb250ZXh0LkNvbnRleHQpIHsKICAgIGssIGN0eCA6PSBrZWVwZXJ0ZXN0LkNoZWNrZXJzS2VlcGVyKHQpCiAgICBjaGVja2Vycy5Jbml0R2VuZXNpcyhjdHgsICprLCAqdHlwZXMuRGVmYXVsdEdlbmVzaXMoKSkKICAgIHNlcnZlciA6PSBrZWVwZXIuTmV3TXNnU2VydmVySW1wbCgqaykKICAgIGNvbnRleHQgOj0gc2RrLldyYXBTREtDb250ZXh0KGN0eCkKICAgIHNlcnZlci5DcmVhdGVHYW1lKGNvbnRleHQsICZhbXA7dHlwZXMuTXNnQ3JlYXRlR2FtZXsKICAgICAgICBDcmVhdG9yOiBhbGljZSwKICAgICAgICBCbGFjazogICBib2IsCiAgICAgICAgUmVkOiAgICAgY2Fyb2wsCiAgICB9KQogICAgcmV0dXJuIHNlcnZlciwgKmssIGNvbnRleHQKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L15-L26"}}),e._v(" "),o("p",[e._v("Note that it reuses "),o("code",[e._v("alice")]),e._v(", "),o("code",[e._v("bob")]),e._v(" and "),o("code",[e._v("carol")]),e._v(" found in the file "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_create_game_test.go#L16-L18",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("msg_server_create_game_test.go")]),o("OutboundLink")],1),e._v(" of the same package.")]),e._v(" "),o("p",[e._v("Now test the result of a move. Blacks play first, which according to "),o("code",[e._v("setupMsgServerWithOneGameForPlayMove")]),e._v(" corresponds to "),o("code",[e._v("bob")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0UGxheU1vdmUodCAqdGVzdGluZy5UKSB7CiAgICBtc2dTZXJ2ZXIsIF8sIGNvbnRleHQgOj0gc2V0dXBNc2dTZXJ2ZXJXaXRoT25lR2FtZUZvclBsYXlNb3ZlKHQpCiAgICBwbGF5TW92ZVJlc3BvbnNlLCBlcnIgOj0gbXNnU2VydmVyLlBsYXlNb3ZlKGNvbnRleHQsICZhbXA7dHlwZXMuTXNnUGxheU1vdmV7CiAgICAgICAgQ3JlYXRvcjogICBib2IsCiAgICAgICAgR2FtZUluZGV4OiAmcXVvdDsxJnF1b3Q7LAogICAgICAgIEZyb21YOiAgICAgMSwKICAgICAgICBGcm9tWTogICAgIDIsCiAgICAgICAgVG9YOiAgICAgICAyLAogICAgICAgIFRvWTogICAgICAgMywKICAgIH0pCiAgICByZXF1aXJlLk5pbCh0LCBlcnIpCiAgICByZXF1aXJlLkVxdWFsVmFsdWVzKHQsIHR5cGVzLk1zZ1BsYXlNb3ZlUmVzcG9uc2V7CiAgICAgICAgQ2FwdHVyZWRYOiAtMSwKICAgICAgICBDYXB0dXJlZFk6IC0xLAogICAgICAgIFdpbm5lcjogICAgJnF1b3Q7KiZxdW90OywKICAgIH0sICpwbGF5TW92ZVJlc3BvbnNlKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L28-L44"}}),e._v(" "),o("p",[e._v("Also test whether the game was "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L83-L108",target:"_blank",rel:"noopener noreferrer"}},[e._v("saved correctly"),o("OutboundLink")],1),e._v(". Check what happens when "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L46-L58",target:"_blank",rel:"noopener noreferrer"}},[e._v("the game cannot be found"),o("OutboundLink")],1),e._v(", the sender "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L110-L122",target:"_blank",rel:"noopener noreferrer"}},[e._v("is not a player"),o("OutboundLink")],1),e._v(", a player tries to "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L145-L157",target:"_blank",rel:"noopener noreferrer"}},[e._v("play out of turn"),o("OutboundLink")],1),e._v(", or "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L159-L171",target:"_blank",rel:"noopener noreferrer"}},[e._v("makes a wrong move"),o("OutboundLink")],1),e._v(". Check after "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L173-L232",target:"_blank",rel:"noopener noreferrer"}},[e._v("two"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L234-L309",target:"_blank",rel:"noopener noreferrer"}},[e._v("three turns with a capture"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("As a special case, add a test to check what happens when a board is not parseable, which is expected to end up in a "),o("code",[e._v("panic")]),e._v(", not with a returned error:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0UGxheU1vdmVDYW5ub3RQYXJzZUdhbWUodCAqdGVzdGluZy5UKSB7CiAgICBtc2dTZXJ2ZXIsIGssIGNvbnRleHQgOj0gc2V0dXBNc2dTZXJ2ZXJXaXRoT25lR2FtZUZvclBsYXlNb3ZlKHQpCiAgICBjdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoY29udGV4dCkKICAgIHN0b3JlZEdhbWUsIF8gOj0gay5HZXRTdG9yZWRHYW1lKGN0eCwgJnF1b3Q7MSZxdW90OykKICAgIHN0b3JlZEdhbWUuQm9hcmQgPSAmcXVvdDtub3QgYSBib2FyZCZxdW90OwogICAgay5TZXRTdG9yZWRHYW1lKGN0eCwgc3RvcmVkR2FtZSkKICAgIGRlZmVyIGZ1bmMoKSB7CiAgICAgICAgciA6PSByZWNvdmVyKCkKICAgICAgICByZXF1aXJlLk5vdE5pbCh0LCByLCAmcXVvdDtUaGUgY29kZSBkaWQgbm90IHBhbmljJnF1b3Q7KQogICAgICAgIHJlcXVpcmUuRXF1YWwodCwgciwgJnF1b3Q7Z2FtZSBjYW5ub3QgYmUgcGFyc2VkOiBpbnZhbGlkIGJvYXJkIHN0cmluZzogbm90IGEgYm9hcmQmcXVvdDspCiAgICB9KCkKICAgIG1zZ1NlcnZlci5QbGF5TW92ZShjb250ZXh0LCAmYW1wO3R5cGVzLk1zZ1BsYXlNb3ZlewogICAgICAgIENyZWF0b3I6ICAgYm9iLAogICAgICAgIEdhbWVJbmRleDogJnF1b3Q7MSZxdW90OywKICAgICAgICBGcm9tWDogICAgIDEsCiAgICAgICAgRnJvbVk6ICAgICAyLAogICAgICAgIFRvWDogICAgICAgMiwKICAgICAgICBUb1k6ICAgICAgIDMsCiAgICB9KQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/play-move-handler/x/checkers/keeper/msg_server_play_move_test.go#L124-L143"}}),e._v(" "),o("p",[e._v("Note the use of "),o("a",{attrs:{href:"https://stackoverflow.com/a/31596110",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("defer")]),o("OutboundLink")],1),e._v(", which can be used as a Go way of implementing "),o("code",[e._v("try catch")]),e._v(" of panics. The "),o("code",[e._v("defer")]),e._v(" statement is set up right before the "),o("code",[e._v("msgServer.PlayMove")]),e._v(" statement that is expected to fail, so that it does not "),o("em",[e._v("catch")]),e._v(" panics that may happen earlier.")]),e._v(" "),o("p",[e._v("Try these tests:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9rZWVwZXIK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIC12ICQocHdkKTovY2hlY2tlcnMgXAogICAgLXcgL2NoZWNrZXJzIFwKICAgIGNoZWNrZXJzX2kgXAogICAgZ28gdGVzdCBnaXRodWIuY29tL2FsaWNlL2NoZWNrZXJzL3gvY2hlY2tlcnMva2VlcGVyCg=="}})],1)],1),e._v(" "),o("h2",{attrs:{id:"interact-via-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),o("p",[e._v("Start your chain again:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgY2hhaW4gc2VydmUK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IFwKICAgIC0tbmFtZSBjaGVja2VycyBcCiAgICAtdiAkKHB3ZCk6L2NoZWNrZXJzIFwKICAgIC13IC9jaGVja2VycyBcCiAgICBjaGVja2Vyc19pIFwKICAgIGlnbml0ZSBjaGFpbiBzZXJ2ZQo="}})],1)],1),e._v(" "),o("p",[e._v("If you restarted from the "),o("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/5-create-handling.html"}},[e._v("previous section")]),e._v(", there is already one game in storage and it is waiting for Alice's move. If that is not the case, recreate a game via the CLI.")],1),e._v(" "),o("p",[e._v("Can Bob make a move? Look at the "),o("code",[e._v("play-move")]),e._v(" message and which parameters it expects:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIC0taGVscAo="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAtLWhlbHAK"}})],1)],1),e._v(" "),o("p",[e._v("This returns:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"QnJvYWRjYXN0IG1lc3NhZ2UgcGxheU1vdmUKClVzYWdlOgogIGNoZWNrZXJzZCB0eCBjaGVja2VycyBwbGF5LW1vdmUgW2dhbWUtaW5kZXhdIFtmcm9tLXhdIFtmcm9tLXldIFt0by14XSBbdG8teV0gW2ZsYWdzXQouLi4K"}}),e._v(" "),o("p",[e._v("So Bob tries:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMCA1IDEgNCAtLWZyb20gJGJvYgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXiBeIF4gXiBeCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHwgfCB8IFRvIFkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgfCB8IFRvIFgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgfCBGcm9tIFkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRnJvbSBYCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lIGlkCg=="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAxIDAgNSAxIDQgLS1mcm9tICRib2IKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXiBeIF4gXiBeCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgfCB8IHwgVG8gWQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHwgfCBUbyBYCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgfCBGcm9tIFkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBGcm9tIFgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZSBpZAo="}})],1)],1),e._v(" "),o("p",[e._v("After you accept sending the transaction, it should complain with the result including:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdmYWlsZWQgdG8gZXhlY3V0ZSBtZXNzYWdlOyBtZXNzYWdlIGluZGV4OiAwOiB7cmVkfTogcGxheWVyIHRyaWVkIHRvIHBsYXkKICBvdXQgb2YgdHVybicKLi4uCnR4aGFzaDogRDEwQkI4QTcwNjg3MEY2NUYxOUU0REY0OEZCODcwRTRCN0Q1NUFGNDIzMkFFMEY2ODk3QzIzNDY2RkY3ODcxQgo="}}),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("If you did not get this "),o("code",[e._v("raw_log")]),e._v(", your transaction may have been sent asynchronously. You can always query a transaction by using the "),o("code",[e._v("txhash")]),e._v(" with the following command:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgdHggRDEwQkI4QTcwNjg3MEY2NUYxOUU0REY0OEZCODcwRTRCN0Q1NUFGNDIzMkFFMEY2ODk3QzIzNDY2RkY3ODcxQgo="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHF1ZXJ5IHR4IEQxMEJCOEE3MDY4NzBGNjVGMTlFNERGNDhGQjg3MEU0QjdENTVBRjQyMzJBRTBGNjg5N0MyMzQ2NkZGNzg3MUIK"}})],1)],1),e._v(" "),o("p",[e._v("And you are back on track:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdmYWlsZWQgdG8gZXhlY3V0ZSBtZXNzYWdlOyBtZXNzYWdlIGluZGV4OiAwOiB7cmVkfTogcGxheWVyIHRyaWVkIHRvIHBsYXkKICBvdXQgb2YgdHVybicK"}})],1),e._v(" "),o("p",[e._v("Can Alice, who plays "),o("em",[e._v("black")]),e._v(", make a move? Can she make a wrong move? For instance, a move from "),o("code",[e._v("0-1")]),e._v(" to "),o("code",[e._v("1-0")]),e._v(", which is occupied by one of her pieces.")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMSAwIDAgMSAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAxIDEgMCAwIDEgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),o("p",[e._v('The computer says "no":')]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdmYWlsZWQgdG8gZXhlY3V0ZSBtZXNzYWdlOyBtZXNzYWdlIGluZGV4OiAwOiBBbHJlYWR5IHBpZWNlIGF0IGRlc3RpbmF0aW9uCiAgcG9zaXRpb246IHswIDF9OiB3cm9uZyBtb3ZlJwo="}}),e._v(" "),o("p",[e._v("So far all seems to be working.")]),e._v(" "),o("p",[e._v("Time for Alice to make a correct move:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMSAyIDIgMyAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAxIDEgMiAyIDMgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),o("p",[e._v("This returns:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bWVzc2FnZSZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2FjdGlvbiZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtwbGF5X21vdmUmcXVvdDt9XX1dfV0nCg=="}}),e._v(" "),o("p",[e._v("Confirm the move went through with your one-line formatter from the "),o("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/5-create-handling.html"}},[e._v("previous section")]),e._v(":")],1),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Linux",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuc3RvcmVkR2FtZS5ib2FyZCZxdW90OyB8IHNlZCAncy8mcXVvdDsvL2cnIHwgc2VkICdzL3wvXG4vZycK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgXAogICAgYmFzaCAtYyAmcXVvdDtjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSBcJnF1b3Q7LnN0b3JlZEdhbWUuYm9hcmRcJnF1b3Q7IHwgc2VkICdzL1wmcXVvdDsvL2cnIHwgc2VkICdzL3wvXG4vZycmcXVvdDsK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Mac"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuc3RvcmVkR2FtZS5ib2FyZCZxdW90OyB8IHNlZCAncy8mcXVvdDsvL2cnIHwgc2VkICdzL3wvXCckJ1xuL2cnCg=="}})],1)],1),e._v(" "),o("p",[e._v("This shows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"KmIqYipiKmIKYipiKmIqYioKKioqYipiKmIKKipiKioqKiogICAgICZsdDstLS0gSGVyZQoqKioqKioqKgpyKnIqcipyKgoqcipyKnIqcgpyKnIqcipyKgo="}}),e._v(" "),o("p",[e._v("Bob's piece moved down and right.")]),e._v(" "),o("p",[e._v("When you are done with this exercise you can stop Ignite's "),o("code",[e._v("chain serve")]),e._v(".")]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("How to use messages and handlers, in this case to add the capability of actually playing moves on checkers games created in your application.")]),e._v(" "),o("li",[e._v("The information that needs to be specified for a game move message to function, which are the game ID, the initial positions of the pawn to be moved, and the final positions of the pawn at the end of the move.")]),e._v(" "),o("li",[e._v("The information necessary to return, which includes the game ID, the location of any captured piece, and the registration of a winner should the game be won as a result of the move.")]),e._v(" "),o("li",[e._v("How to modify the response object created by Ignite CLI to add additional fields.")]),e._v(" "),o("li",[e._v("How to implement and check the steps required by move handling, including the declaration of the ready-made rules in the errors.go file so your code can handle new error situations.")]),e._v(" "),o("li",[e._v("How to add unit tests to check the functionality of your code.")]),e._v(" "),o("li",[e._v("How to interact via the CLI to confirm that correct player turn order is enforced by the application.")])])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);