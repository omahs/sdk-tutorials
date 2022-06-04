(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{785:function(e,a,t){"use strict";t.r(a);var o=t(1),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"feegrant-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feegrant-module"}},[e._v("#")]),e._v(" Feegrant Module")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://docs.cosmos.network/v0.44/modules/feegrant/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("feegrant")]),t("OutboundLink")],1),e._v(" module enables the granter (a user, contract, or module) to pay the fees for someone else (the grantee) when the grantee wants to broadcast a transaction on the blockchain. The granter retains full access to their tokens and is able to revoke the allowance at any time.")]),e._v(" "),t("h2",{attrs:{id:"use-feegrant-to-grant-an-allowance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-feegrant-to-grant-an-allowance"}},[e._v("#")]),e._v(" Use Feegrant to Grant an Allowance")]),e._v(" "),t("p",[e._v("An often discussed use case for the "),t("code",[e._v("feegrant")]),e._v(" module is improved onboarding experience because new users don't have to acquire tokens before they can start interacting with the blockchain or smart contract.")]),e._v(" "),t("p",[e._v("Two "),t("a",{attrs:{href:"https://docs.cosmos.network/v0.44/modules/feegrant/01_concepts.html#fee-allowance-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("fee allowance types"),t("OutboundLink")],1),e._v(" are implemented with the "),t("code",[e._v("feegrant")]),e._v(" module:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("BasicAllowance")])]),e._v(" "),t("p",[e._v("Grantee uses fees from a granter's account. The allowance can have a one-time limit, an expiration, or no limit.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("PeriodicAllowance")])]),e._v(" "),t("p",[e._v("Grantee uses fees from a granter's account. The allowance has a limit that is periodically reset.")])])]),e._v(" "),t("p",[e._v("In this tutorial, you will set up two tokens in your blockchain: a default token called "),t("code",[e._v("stake")]),e._v(" to use for fees and another token called "),t("code",[e._v("kudos")]),e._v(" to send to your friends.")]),e._v(" "),t("ul",[t("li",[e._v("You will learn how to spin up a single node network using the simulation application in Cosmos SDK ("),t("code",[e._v("simapp")]),e._v(").")]),e._v(" "),t("li",[e._v("Set Alice up to be a validator.")]),e._v(" "),t("li",[e._v("Bob is the grantee who receives a "),t("code",[e._v("BasicAllowance")]),e._v(" that allows Bob to send "),t("code",[e._v("kudos")]),e._v(" tokens to Alice, even though Bob has zero "),t("code",[e._v("stake")]),e._v(" to pay for fees.")]),e._v(" "),t("li",[e._v("Alice is the granter and grants a "),t("code",[e._v("BasicAllowance")]),e._v(" to Bob.")])]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("Before you start the tutorial, you need to install the "),t("code",[e._v("simd")]),e._v(" binary.")]),e._v(" "),t("p",[e._v("Clone the "),t("code",[e._v("cosmos-sdk")]),e._v(" repository:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrCg=="}}),e._v(" "),t("p",[e._v("Change directories and check out "),t("code",[e._v("v0.44.0")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjZCBjb3Ntb3Mtc2RrICZhbXA7JmFtcDsgZ2l0IGNoZWNrb3V0IHYwLjQ0LjAK"}}),e._v(" "),t("p",[e._v("Install the "),t("code",[e._v("simd")]),e._v(" binary:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBtYWtlIGluc3RhbGwK"}}),e._v(" "),t("p",[e._v("Check to make sure the installation was successful:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHZlcnNpb24K"}}),e._v(" "),t("p",[e._v("The version number "),t("code",[e._v("0.44.0")]),e._v(" is output to the console.")]),e._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("If you have used "),t("code",[e._v("simd")]),e._v(" before, you might already have a "),t("code",[e._v(".simapp")]),e._v(" directory in your home directory. To keep the previous data, either save the directory to another location or use the "),t("code",[e._v("--home")]),e._v(" flag and specify a different directory for each command in the following instructions. If you don't want to keep the previous data, remove the previous directory ("),t("code",[e._v("rm -rf ~/.simapp")]),e._v(").")])]),e._v(" "),t("p",[e._v("Run the following commands to configure the "),t("code",[e._v("simd")]),e._v(" binary.")]),e._v(" "),t("p",[e._v("Set the chain ID:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGNvbmZpZyBjaGFpbi1pZCBkZW1vCg=="}}),e._v(" "),t("p",[e._v("Set the "),t("a",{attrs:{href:"https://docs.cosmos.network/v0.42/run-node/keyring.html#the-test-backend",target:"_blank",rel:"noopener noreferrer"}},[e._v("keyring backend"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGNvbmZpZyBrZXlyaW5nLWJhY2tlbmQgdGVzdAo="}}),e._v(" "),t("h2",{attrs:{id:"key-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-setup"}},[e._v("#")]),e._v(" Key Setup")]),e._v(" "),t("p",[e._v("You'll have to create a few test keys for your users.")]),e._v(" "),t("p",[e._v("Add a key for Alice, the validator:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGtleXMgYWRkIGFsaWNlCg=="}}),e._v(" "),t("p",[e._v("Add a key for Bob, the grantee:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGtleXMgYWRkIGJvYgo="}}),e._v(" "),t("p",[e._v("If you'd like to see an overview of your keys, use:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGtleXMgbGlzdAo="}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("To avoid having to copy and paste the user addresses, now is a good time to export the user keys to variables that you can access and use for this tutorial.")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBleHBvcnQgQUxJQ0VfS0VZPSQoc2ltZCBrZXlzIHNob3cgYWxpY2UgLWEpCiQgZXhwb3J0IEJPQl9LRVk9JChzaW1kIGtleXMgc2hvdyBib2IgLWEpCg=="}}),e._v(" "),t("h2",{attrs:{id:"chain-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chain-setup"}},[e._v("#")]),e._v(" Chain Setup")]),e._v(" "),t("p",[e._v("The following commands set up a chain using the simulation application ("),t("code",[e._v("simapp")]),e._v(").")]),e._v(" "),t("p",[e._v("Initialize the node:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGluaXQgdGVzdCAtLWNoYWluLWlkIGRlbW8K"}}),e._v(" "),t("p",[e._v("Alice is your validator. Add Alice and an initial balance to the genesis file:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGFkZC1nZW5lc2lzLWFjY291bnQgYWxpY2UgNTAwMDAwMDAwMHN0YWtlIC0ta2V5cmluZy1iYWNrZW5kIHRlc3QK"}}),e._v(" "),t("p",[e._v("Add Bob and an initial balance to the genesis file:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGFkZC1nZW5lc2lzLWFjY291bnQgYm9iIDIwMDBrdWRvcyAtLWtleXJpbmctYmFja2VuZCB0ZXN0Cg=="}}),e._v(" "),t("p",[e._v("Note that Bob has only "),t("code",[e._v("kudos")]),e._v(" tokens and is not able to pay for any fees that might be needed.")]),e._v(" "),t("p",[e._v("Generate a transaction to add Alice to the initial validator set:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGdlbnR4IGFsaWNlIDEwMDAwMDBzdGFrZSAtLWNoYWluLWlkIGRlbW8K"}}),e._v(" "),t("p",[e._v("Add the validator transaction to the genesis file:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIGNvbGxlY3QtZ2VudHhzCg=="}}),e._v(" "),t("h2",{attrs:{id:"start-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-chain"}},[e._v("#")]),e._v(" Start Chain")]),e._v(" "),t("p",[e._v("You are now ready to start a single node network on your local machine.")]),e._v(" "),t("p",[e._v("Start the chain:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHN0YXJ0Cg=="}}),e._v(" "),t("h2",{attrs:{id:"grant-allowance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grant-allowance"}},[e._v("#")]),e._v(" Grant Allowance")]),e._v(" "),t("p",[e._v("Before Bob can send "),t("code",[e._v("kudos")]),e._v(" to Alice, you must set up an allowance for Bob so that Alice pays for any gas fees the transaction might incur.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("BasicAllowance")]),e._v(" is a permission for a grantee to use up fees until the "),t("code",[e._v("spend_limit")]),e._v(" or "),t("code",[e._v("expiration")]),e._v(" is reached. Open up a new terminal window and create an allowance with a spend limit of "),t("code",[e._v("100000stake")]),e._v(" and no expiration date:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHR4IGZlZWdyYW50IGdyYW50ICRBTElDRV9LRVkgJEJPQl9LRVkgLS1mcm9tIGFsaWNlIC0tc3BlbmQtbGltaXQgMTAwMDAwc3Rha2UK"}}),e._v(" "),t("p",[e._v("View the allowance:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHEgZmVlZ3JhbnQgZ3JhbnRzICRCT0JfS0VZCg=="}}),e._v(" "),t("h2",{attrs:{id:"send-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-tokens"}},[e._v("#")]),e._v(" Send Tokens")]),e._v(" "),t("p",[e._v("First, let's check the balances of Alice and Bob. Verifying the initial balance provides a baseline so that you can later confirm if your transaction was successful:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHEgYmFuayBiYWxhbmNlcyAkQUxJQ0VfS0VZCiQgc2ltZCBxIGJhbmsgYmFsYW5jZXMgJEJPQl9LRVkK"}}),e._v(" "),t("p",[e._v("Note that Alice has "),t("code",[e._v("4999000000stake")]),e._v(" because she bonded "),t("code",[e._v("1000000stake")]),e._v(" to become a validator during the chain setup.")]),e._v(" "),t("p",[e._v("Any transaction that is sent using the "),t("code",[e._v("tx")]),e._v(" command can use the "),t("code",[e._v("--fee-account")]),e._v(" flag to specify an account as input to pay for the fees.")]),e._v(" "),t("p",[e._v("Send "),t("code",[e._v("kudos")]),e._v(" tokens from Bob to Alice, while Alice pays the fees:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHR4IGJhbmsgc2VuZCAkQk9CX0tFWSAkQUxJQ0VfS0VZIDEwMGt1ZG9zIC0tZnJvbSBib2IgLS1mZWUtYWNjb3VudCAkQUxJQ0VfS0VZIC0tZmVlcyA1MDBzdGFrZQo="}}),e._v(" "),t("p",[e._v("Look at the balances again:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHEgYmFuayBiYWxhbmNlcyAkQUxJQ0VfS0VZCiQgc2ltZCBxIGJhbmsgYmFsYW5jZXMgJEJPQl9LRVkK"}}),e._v(" "),t("p",[e._v("Notice how Alice has "),t("code",[e._v("500stake")]),e._v(" less than before. The "),t("code",[e._v("500stake")]),e._v(" was added to the transaction that Bob signed.")]),e._v(" "),t("p",[e._v("View the allowance again:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHEgZmVlZ3JhbnQgZ3JhbnRzICRCT0JfS0VZCg=="}}),e._v(" "),t("p",[e._v("Note how "),t("code",[e._v("spend_limit")]),e._v(" has been reduced and Bob now has "),t("code",[e._v("99500stake")]),e._v(" left to spend on fees.")]),e._v(" "),t("h2",{attrs:{id:"revoke-allowance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#revoke-allowance"}},[e._v("#")]),e._v(" Revoke Allowance")]),e._v(" "),t("p",[e._v("The granter can revoke the allowance from the grantee using the "),t("code",[e._v("revoke")]),e._v(" command.")]),e._v(" "),t("p",[e._v("Revoke allowance:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHR4IGZlZWdyYW50IHJldm9rZSAkQUxJQ0VfS0VZICRCT0JfS0VZIC0tZnJvbSBhbGljZQo="}}),e._v(" "),t("p",[e._v("View the allowance:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBzaW1kIHEgZmVlZ3JhbnQgZ3JhbnRzICRCT0JfS0VZCg=="}}),e._v(" "),t("h2",{attrs:{id:"🎉-congratulations-🎉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🎉-congratulations-🎉"}},[e._v("#")]),e._v(" 🎉 Congratulations 🎉")]),e._v(" "),t("p",[e._v("By completing this tutorial, you have learned how to use the "),t("code",[e._v("feegrant")]),e._v(" module:")]),e._v(" "),t("ul",[t("li",[e._v("Configured and used the simulation application (simapp)")]),e._v(" "),t("li",[e._v("Created an allowance")]),e._v(" "),t("li",[e._v("Made a transaction with fees paid by a granter")]),e._v(" "),t("li",[e._v("Revoked an allowance")])]),e._v(" "),t("p",[e._v("There is a lot more that you can do with the "),t("code",[e._v("feegrant")]),e._v(" module. You can add a list of allowed messages, set an expiration date, and set a time duration after which the spend limit is refilled. To learn more about the "),t("code",[e._v("feegrant")]),e._v(" module and different types of allowances, check out the Cosmos SDK "),t("a",{attrs:{href:"https://docs.cosmos.network/v0.44/modules/feegrant/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feegrant Module"),t("OutboundLink")],1),e._v(" documentation.")])],1)}),[],!1,null,null,null);a.default=s.exports}}]);