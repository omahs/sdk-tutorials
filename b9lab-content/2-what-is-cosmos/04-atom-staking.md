# Getting ATOM & Staking

<!--

This content could be linked to from https://cosmos.network/learn/get-atom as a step-by-step.

-->

The [Cosmos Hub](https://hub.cosmos.network) is the first among equals of Cosmos blockchains. The ATOM is the native token of the Cosmos Hub, also called the staking token. You need some ATOM to be able to transact on the Cosmos Hub, or to participate in the proof-of-stake consensus. Because of its usefulness, there are markets that determine the ATOM price in common currencies.

So let's get our feet wet. We are going to:

1. Get some ATOM.
2. Participate in the consensus, thereby earning yield on our ATOMs while sleeping, or studying further.

We cover all the main concepts in the next chapter. For now, you will get through with a surface-level understanding.

The simple step of _get some ATOM_ hides multiple steps:

1. Install a wallet application, and configure it safely. We will use [Keplr](https://keplr.app/).
2. Buy some ATOM on an exchange, and transfer them to your wallet.

Let's get started.

## Set up Keplr

First the easiest part, open Google Chrome on your computer and go to the [Keplr extension](https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap) page. Alternatively, you could search by yourself for Keplr in the [Chrome extensions store](https://chrome.google.com/webstore/search/Keplr). Indeed, it is always good practice to be a bit suspicious of links to wallets as sometimes fraudulent ones are published in order to steal from you. Good thing, Keplr is mentioned, and linked, [here](https://cosmos.network/ecosystem/wallets), lending it some credibility.

When it is installed, it should be available in your list of extensions when you click on the icon in the top-right corner of Chrome:

![Keplr seen as an extension](./images/keplr-as-extension.png)

You can go ahead and pin it if you want.

<HighlightBox type="warn">

When you own ATOM with Keplr, **you are in charge**. For real. There is no one you can call because _you forgot your password_, _your hard-disk crashed_, or _you sent to the wrong address_.

In the jargon, Keplr is a non-custodial wallet.

</HighlightBox>

Now, with the Keplr extension installed and the above warning, let's create a new account. Click on Keplr and the following page should open:

![Keplr create menu](./images/keplr-create-menu.png)

Click _Create new account_. The page that opens offers you a mnemonic and asks you for a password. Because **you are in charge**, it is important to understand the following points:

1. Whoever knows the **mnemonic seed** has access to **all** the assets in this wallet as easily as you with your own wallet. This means that:
    1. Nobody else should be looking at your screen right now. If that is not the case, click _Back_.
    2. You should share it only with trusted partners, if at all. An exchange, a proof-of-stake validator, another blockchain service, or "someone from Cosmos" on the phone are _not_ trusted partners.
    3. You should save it in safe places, typically on paper, so that you can import it back in this or another wallet at a later date.
2. Keplr will save your seed on disk but encrypted.
3. Keplr is asking you for the **encryption password**.
    1. It should be a strong password.
    2. You should save it too.
    3. Keplr will ask you for it every first time you open it and for important actions.
4. If your computer or the encrypted mnemonic seed file is stolen, your wallet assets are as protected as your password is strong.
5. If you are starting now with weak security because you plan on keeping only very little value in your wallet, consider creating a new mnemonic and password in the future when you plan on holding more value. In effect, act as if your _weaker_ wallet had been compromised, and as if a thief is ambushed waiting for you to put more in it.

![Keplr mnemonic page](./images/keplr-mnemonic-step.png)

Forewarned is forearmed. When you are ready, click on _Next_.

If you saved your seed, you should be able to complete the next step, where you need to click on each word in the right order.

![Keplr mnemonic recall prompt](./images/keplr-mnemonic-recall-prompt.png)

When done:

![Keplr mnemonic recall done](./images/keplr-mnemonic-recall-done.png)

After clicking _Register_, it says you are all set:

![Keplr all set](./images/keplt-all-set.png)

You can click on the extension icon again and see that you hold zero ATOMs in Cosmos, and that you have a first public address of the form `cosmos1...`. You have zero assets in the other supported networks either, if you care to click on the drop-down labeled _Cosmos_ at the top.

![Keplr empty assets](./images/keplr-empty-assets.png)

A note on your **address**. As a street address, it is ok for others to know it, as it allows others to send you ATOMs or other tokens of the Cosmos Hub.

You can also open the [Keplr dashboard](https://wallet.keplr.app/#/dashboard) page, which interfaces with the extension. Take note of how the dashboard at this address is a web page loaded from a website and as such is not a trusted partner. In fact, it will never ask you for your mnemonic or your password.

<HighlightBox type="tip">

Now would be a good time for you to save your mnemonic and password safely before you put valuables in your wallet.

</HighlightBox>

## Purchase 1 ATOM

How you do it is highly dependent on what your preferences are. But roughly, you need to get on an exchange and, for instance, purchase 1 ATOM, which is worth 16 USD at the time of writing. You can get any amount you wish, although don't get less than 0.3 ATOM so that it does not get all consumed in transaction fees before the end of this exercise.

As found [here](https://cosmos.network/learn/get-atom), [this](https://messari.io/asset/cosmos/markets) is a list of exchanges that are known by Cosmos for carrying the ATOM token.

When you are done, your account on the exchange should show you that you _own_ 1 ATOM. Actually, you don't own it as you would if the token were in your Keplr wallet. It is the exchange that owns it, and assures you that they will send it to you when you ask them to. In the jargon, the exchange acts like a custodial wallet.

![ATOM on Kraken](./images/kraken-one-atom.png)

## Withdraw your ATOM

Let's see if the exchange makes good on their promise to send the ATOM to you. Your exchange has a withdrawal function that allows you to send your ATOM anywhere, including to your Keplr wallet. Let's set this up. You need your wallet address. Since it is very long, you should avoid typing it by hand but instead copy it in the clipboard by clicking on it in Keplr:

![Keplr address zone](./images/keplr-address-zone.png)

Now go back at your exchange, you paste this address where asked, **confirm** that it looks identical to the original you copied, and, if necessary, proceed with the confirmation the exchange asks:

![Kraken add address](./images/kraken-add-address.png)

When it is set, you ask the exchange to withdraw proper. Take note of the transaction fee taken by the exchange. It is much higher than a realistic transaction fee would have been had you done it yourself within your own wallet:

![Kraken exchange params](./images/kraken-exchange-params.png)

If all went well, you should see your new asset in Keplr after a couple minutes:

![Keplr received ATOM](./images/keplr-with-atom.png)

Congratulations! You now own just short of 1 ATOM. And remember, **you** are really in charge, so check again that your mnemonic and password are saved properly.

You can see the same if you open the [wallet page](https://wallet.keplr.app/#/dashboard). By the way you can look at your address within a public explorer like [mintscan.io](https://mintscan.io). In this wallet page, you can see a small link that leads you to your address page:

![Keplr wallet link out](./images/keplr-wallet-link-out.png)

There, you can see the transaction that originated from the exchange's wallet:

![Mintscan crediting transaction](./images/mintscan-crediting-tx.png)

Note in particular how the exchange charged you, say 0.1 ATOM, i.e. way more than it actually costed, here 0.0003 ATOM.

## Stake your ATOM

Your 0.9 ATOM is available. It is sitting there in your wallet. And it will stay there forever. It will also stay at 0.9 ATOM forever, unless you use it for something.

What about participating in the security of the Cosmos Hub blockchain? You can do this by delegating a stake, i.e. some of your ATOM, to a network validator. A validator is 1 or more cooperating computers that participate in the consensus by, among other things, creating blocks. In exchange for this service, they receive block rewards, and share the rewards with their delegators too, minus their own commission. Your modest delegated stake could award you a modest share of a validator's rewards.

* The benefit of it is that, unlike a bank, which holds your assets in a custodial wallet, when you delegate your ATOM, you remain in charge of your ATOM, so the validator does not have access to your assets. Think of your stake as a weighted vote of confidence.
* A non-zero risk is that the validator you chose behaves incorrectly, or even maliciously, which exposes you proportionally to the same protocol penalties as the faulty validator.
* Also keep in mind that the amount you delegate is locked away, and you would need 3 weeks to have access to it again, should you so decide.

Let's find a validator and delegate to it. Past performance is no indicator of future performance, but in our case we are going to believe it is. So click the _Stake_ button in Keplr. You are presented with a list of validators:

![Keplr list of validators](./images/keplr-validator-list.png)

Right away you can discard the validators that keep 100% of the rewards for themselves as they work for the custodial wallets they keep on behalf of their customers. Pick one validator that you like and click _Manage_. There you should see a link where you can learn more about this validator. Additionally, you can see more information about each validator on [this page](https://www.mintscan.io/cosmos/validators) of Mintscan. Pay attention to the uptime, as a missed block would cost you in penalties. A validator can have a small or a large voting power. The larger the voting power, the more often the validator is tasked with issuing a block. The effect that voting power has on you is that:

* If your chosen validator has a large voting power, your rewards come in frequently, e.g. every minute, but in small numbers.
* If your chosen validator has a small voting power, your rewards come in not frequently, e.g. every hour, but in large numbers.

However, over the long run, you should get the same amount. What matters is the size of your stake. If you like what you see, it is time to click _Delegate_ and put a sum here.

Do not delegate all that you own because you still need a fraction of ATOM to send the delegate transaction, and further fractions in the future to either undelegate or claim your rewards. Let's pick 0.8 ATOM and click _Delegate_.

![Keplr delegate params](./images/keplr-delegate-params.png)

This delegation is an important action. It is in fact the first action you take with your private key. It is therefore natural and welcome that a window pops up to confirm with you that it is indeed what you intended. Every time an application asks Keplr to do an important action, Keplr will confirm with you.

![Keplr delegate confirm window](./images/keplr-delegate-confirm.png)

You do not need this delegate transaction to be confirmed quickly, so go and choose the low end of transaction fees. Click _Approve_. The transaction should not take longer than a couple minutes to be confirmed.

When it is confirmed, your pending staking rewards start accruing. Not that fast because you delegated only 0.8 ATOM, and they only accrue when your chosen validator issues a block. After perhaps 20 minutes, you should see something like this:

![Keplr accruing rewards](./images/keplr-accruing-rewards.png)

Your rewards are said to be pending because you need to claim them before you get them for real. Of course, the claim transaction has its own fees, so it is best for you to wait that your rewards exceed the transaction fees before submitting any claim transaction. And with only 0.8 ATOM staked, you need to wait about 10 days to get something barely worth the claim transaction.

## Claim your ATOM

You did it. You waited 10 days, and there you are, accruing rewards.

![Keplr accruing good rewards](./images/keplr-accruing-good-rewards.png)

That's enough to cover the claim transaction, so let's go ahead and claim it. Again, choose low fees to make it worth it.

![Keplr claim rewards](./images/keplr-claim-rewards.png)

Now you can see how your rewards went straight to your available part of the wallet.

![Keplr increased available](./images/keplr-increased-available.png)

If you want to restake this amount, and benefit from the compound effect, go ahead, but make sure you are not losing too much in transaction costs.

This completes this exercise, where you got yourself set up to participate in the Cosmos Hub network, and even participate in its security. Your stake is working for you as you continue your training.