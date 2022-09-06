---
title: "Tendermint"
order: 2
description: Exploring features of Tendermint Core and ABCI
tag: deep-dive
---

# Tendermint

You already have some understanding of Cosmos in detail. Now it is time to look at one of the underlying technologies: Tendermint.

<HighlightBox type="learning">

This section will cover:

* A summary of the Cosmos Ecosystem
* What is Tendermint?
* Consensus in Tendermint Core and Cosmos
* Upgradeability of chains
* Application Blockchain Interface (ABCI)
* Application-level concerns

</HighlightBox>

## A summary of the Cosmos Ecosystem

**Cosmos** is a network of independent blockchains, which are:

* All powered by consensus algorithms that are Byzantine Fault-Tolerance (BFT).
* All connected through the Inter-Blockchain Communication Protocol (IBC), which enables value transfers, token transfers, and other communication between chains, all without the need to involve exchanges or make compromises regarding chain sovereignty.

Cosmos is also a **blockchain ecosystem** complete with protocols, SDK, tokens, wallets, applications, repositories, services, and tools.

## What is Tendermint?

Tendermint is a consensus algorithm with Byzantine Fault-Tolerance (BFT) and a consensus engine. It enables applications to be replicated in sync on many machines, and the result is known as a *replicated state machine with Byzantine Fault Tolerance*. It guarantees BFT properties for distributed systems and their applications. It does this:

* **Securely:** Tendermint continues working even if up to 1/3 of machines fail or misbehave.
* **Consistently:** every machine computes the same state and accesses the same transaction log.

Created in 2014, [Tendermint](https://tendermint.com/) accelerated the development of distinct blockchains by providing a **ready-made networking and consensus solution**. Networking and consensus no longer had to be re-created by developers for each case. Instead, developers could focus on the application layer and let Tendermint deal with the network and consensus layers by building the application on top of it.

Tendermint is widely used across the industry and is the most mature BFT consensus engine for Proof-of-Stake (PoS) blockchains.

<HighlightBox type="note">

You may already be using Tendermint without being aware of it, as other blockchains like [Hyperledger Burrow](https://hyperledger.github.io/burrow/#/) and the [Binance Chain](https://www.binance.org/en/smartChain) use Tendermint.

</HighlightBox>

### What does Tendermint provide?

Tendermint is a Delegated-Proof-of-Stake (DPoS) system based on dedicated validators with good network connectivity. This is quite different from PoW, which favors inclusion and thus must accommodate slower nodes with greater latency and less reliability, resulting in probabilistic finality. 

Concerning the CAP Theorem, Tendermint prefers consistency over availability. This means Tendermint's DPoS system is _always_ operational and every node's data is _always_ up to date, but that the system _could_ fail to respond when a request is made.

<HighlightBox type="tip">

If you want to quickly recap the CAP Theorem, just check out the section on [consensus mechanisms](../chapter-3/2-section-2.md).

</HighlightBox>

**Tendermint modules attend to consensus and networking** - two important components of any blockchain. This frees developers to focus on the application level without descending into lower-level blockchain concerns, such as peer discovery, block propagation, consensus, and transaction finalization. Without Tendermint, developers would be forced to build software to address these concerns, which would add additional time, complexity, and cost to the development of applications.

![Blockchain application architecture overview](./images/architecture_overview.png)

For an application-specific blockchain in the Cosmos Ecosystem, a node consists of a state-machine built with the Cosmos SDK and the consensus and networking layers, which are handled by [Tendermint Core](https://tendermint.com/core/).

### What is Tendermint Core?

Tendermint Core is a blockchain application platform. It supports state machines in any language (it is language-agnostic) and helps developers securely and consistently replicate deterministic, finite state machines.

Tendermint BFT is maintained even when 1/3 of all machines fail by providing two components:

* A blockchain consensus engine
* A generic application interface

## Consensus in Tendermint Core and Cosmos

Tendermint Core is a high-performance, consistent, flexible, and secure **consensus module** with strict fork accountability. It relies on Delegated-Proof-of-Stake (DPoS) and Practical Byzantine Fault Tolerance (pBFT).

<HighlightBox type="info">

To recap the concepts of DPoS and pBFT in detail, see the section on [Proof-of-Work and reliable proofs for information](../chapter-2/2-section-2.md).

</HighlightBox>

Participants signal support for well-behaved, reliable nodes that create and confirm blocks. They do so by staking ATOM, or the native token of the respective chain. Staking bears the possibility of acquiring a share of the network transaction fees, but also the risk of reduced returns or even losses should the node become unreliable.

Network participants are incentivized to stake their ATOM with nodes that are the most likely to provide dependable service, and to withdraw their support should conditions change. A Cosmos blockchain is expected to adjust the validator configuration and continue even in adverse conditions.

Only the top 150 nodes by staked ATOM participate in the transaction finalization process as **validators**. The privilege of creating a block is awarded in proportion to the voting power of a validator. **Voting power** is calculated as _all the ATOM tokens staked by a validator **and** its delegates_. If a given validator's voting power is 15% of the total voting power of all validators, then the validator can expect to receive block creation privileges 15% of the time.

Each new block is broadcast by the current block creator to the other validators, who are expected to respond promptly and correctly:

* Validators confirm valid candidate blocks.
* Validators absorb penalties for failing to confirm valid candidate blocks.
* Validators can and must reject invalid blocks.
* Validators accept a block by returning their signature.

When sufficient signatures have been collected by the block creator, the block is finalized and broadcast to the wider network. There is no ambiguity in this process: either a block has the necessary signatures, or it does not. If it does, insufficient signatories exist to overturn the block and the block can be understood as **final** – there is no process by which the blockchain can be re-organized. This provides a level of absolute certainty when it comes to transaction finality that probabilistic systems based on, for example, Proof-of-Work (PoW) cannot match.

Fast block times are feasible because the process is aimed at achieving high performance, and is based on dedicated validators with good network connectivity. This is quite different from PoW, which favors inclusion and must accommodate slower nodes with greater latency and less reliability. **A Cosmos blockchain can handle thousands of transactions per second with confirmations taking seven seconds.**

Even though validation is delegated to a subset of all network nodes, this process avoids the concentration of power. The community of users elects the validators by staking ATOM and participating in both the rewards and the risks of committing to providing a reliable, responsible block validation service.

## Upgradeability of chains

In any known blockchain, a change in the implementation requires an upgrade to the node software running on each node. In a disorderly process with voluntary participation, this can result in a hard fork – a situation in which one constituency forges ahead with the old rules and another adopts new rules.

<HighlightBox type="info">

See [Chapter 3](ADD LINK HERE) for more detail on forking.

</HighlightBox>

While this arrangement has positive aspects and proponents, it also has clear disadvantages in settings where **certainty** is a strict requirement. For example, uncertainty about transaction finality regardless of the degree of uncertainty may be unacceptable in settings that are concerned with authoritative registries and large assets.

In a Tendermint blockchain, transactions are irreversibly finalized upon block creation and upgrades are themselves governed by the block creation and validation process. This leaves no room for uncertainty: either the nodes agree to simultaneously upgrade their protocol, or the upgrade proposal fails. A hard fork is not an option.

Validators are the only nodes who vote on this decision. This means that delegators should be demanding when selecting the validator they delegate to: unless they specify otherwise, by signaling their support with their stake they also lend their vote to the validator.

## Application Blockchain Interface (ABCI)

The Tendermint BFT packages the networking and consensus layers of a Cosmos blockchain and presents an interface to the application layer, the **Application Blockchain Interface (ABCI)**. Developers can focus on higher-order concerns while delegating peer-discovery, validator selection, staking, upgrades, and consensus to the Tendermint BFT. The consensus engine running in one process controls the state machine; the application runs in another process. **This architecture is equally appropriate for private and public blockchains.**

The Tendermint BFT engine is connected to the application by a **socket protocol**. 

<HighlightBox type="info">

**Socket protocols** provide the transportation of application data from one node on a network to another (or from one process to another on the same node).

</HighlightBox>

ABCI provides a socket for applications written in other languages. When the application is written in the same language as the Tendermint implementation, the socket is not used.

![The application, ABCI, and Tendermint](/ABCI_3.png)

Tendermint BFT provides security guarantees, including:

* **Forks** are never created, provided that half or more validators are honest.
* **Strict accountability** for fork creation allows determining liability.
* Transactions are **finalized** as soon as a block is created.

The Tendermint BFT is not concerned with the interpretation of transactions: transaction interpretation occurs on the application layer. **Tendermint *agnostically* presents confirmed, well-formed transactions and blocks of transactions.** Tendermint is un-opinionated about the meaning any transactions have.

The *block time* is approximately seven seconds, and blocks may contain thousands of transactions. Transactions are finalized and cannot be overturned as soon as they appear in a block.

## Application-level concerns

There are at least two broad approaches to **application-level concerns** for blockchains:

1. Create an application-specific blockchain where everything that can be done is defined in the protocol.
2. Create a programmable state machine and push application concerns to a higher level.

Ethereum-like blockchains fall into the second category. Only the state machine is defined by the on-chain protocol, which defines the rules of contract creation, interaction, execution, and little else.

This method is not without its limitations:

* Very little is universally defined: standards for basic concerns (such as tokens) emerge organically through voluntary participation.
* Contracts can and do contain repetitive code that may or may not correctly implement the developer's intentions.
* The inherent flexibility makes it challenging to reason about what is correct, or even about what is friendly.
* There are practical limits to the complexity of operations, which are very low compared to what is possible in other settings.

These limitations make it especially difficult to perform analysis or re-organize data, and developers are forced to adapt to the constraints.

A **purpose-built or application-specific blockchain** is different. There is no need to present a Turing-complete language or a general-purpose, programmable state machine because application concerns are addressed by the protocol the developers create.

<ExpansionPanel title="What is Turing-completeness?">

**Turing-completeness** is a term from computability theory which describes the capacities of a system of data-manipulation rules, for example a programming language. Such a system is said to be **Turning complete** if it can simulate any other "Turing machine": that is, if it can recognize or decide _other_ data-manipulation rule sets. 

Virtually all programming languages today are Turing-complete. A real-world example would be a general-purpose computer that can approximately simulate the computational behavior of any other computer. Software emulators of earlier computer systems demonstrate Turing completeness in action.

</ExpansionPanel>

Developers, who have worked with blockchains based on the Ethereum Virtual Machine (EVM), will recognize a shift in the way concerns are addressed. Authorization and access control, the layout of storage or the state, and application governance are not implemented as contracts on a state machine. They instead become properties of a unique blockchain that is built for a singular purpose.

## Further learning

You can find further information about Tendermint Core in the [Tendermint Core documentation](https://docs.tendermint.com/master/#).

<HighlightBox type="reading">

For a deeper dive on consensus and Tendermint visit:

* The [podcast on consensus systems](https://softwareengineeringdaily.com/2018/03/26/consensus-systems-with-ethan-buchman/) with Ethan Buchman
* The [Tendermint Core documentation on consensus](https://docs.tendermint.com/master/introduction/what-is-tendermint.html#consensus-overview)

</HighlightBox>

## Next up

The [next section](../chapter-4/2-section-2.md) will introduce you to a variety of tools, which developers work with in the Cosmos Ecosystem.