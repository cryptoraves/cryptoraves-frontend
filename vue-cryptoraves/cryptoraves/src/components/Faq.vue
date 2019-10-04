<template>
  <div class="container">
    <div class="faq-page-template">
      <SectionHeader>FAQ</SectionHeader>
      <FaqSection>
        <div slot="title">What are Cryptoraves Tokens & Why Should I Use Them?</div>
        <div slot="answer">
          Request 1 Billion of your own
          <i>personalized</i> crypto tokens, directly on Twitter! No Account, No Fees. Just Tweet this: @cryptoraves #DropMyCrypto
          <br />
          <br />Sharing your tokens is FUN! Amplify your hearts. Give appreciation with a personal, crypto touch. It’s easy -- share your tokens with a Tweet (& no fees).
          <br />
          <br />You have control. You can grow & influence your token's value. Your token’s value is
          <a
            href="https://medium.com/@cryptoraves/measuring-personalized-token-sharing-to-establish-both-network-value-and-token-value-in-social-15caa2f676d5"
            target="_blank"
          >tied</a> to your social media network. You can run your own token economy, right on Twitter.
          <br />
          <br />Your token = Your tool. Experiment with your tokens. Dream up your own use case. Put blockchain tech to work for YOU.
          <br />
          <br />Click
          <a href="https://medium.com/p/42d9d6226ca0/edit" target="_blank">here</a> for more info.
        </div>
      </FaqSection>
      <FaqSection>
        <div slot="title">How do I create an account?</div>
        <div
          slot="answer"
        >You don’t need to create an account. You heard that right!!! We’re trying to make our platform as easy to use as possible. Just search for your Twitter @username in the header search bar. You’ll see all your tokens and transactions listed there. And since we have a public database, you’ll be able to see other users’ transactions, too.</div>
      </FaqSection>
      <FaqSection>
        <div
          slot="title"
        >I need more details on how to do this... How do I share tokens & check my balance? How do I confirm transactions on the blockchain? How do I know if my transaction went through?</div>
        <div slot="answer">
          Please see our detailed
          <a
            href="https://medium.com/p/2710f70e8d38/edit"
            target="_blank"
          >Cryptoraves Usage Guidelines, The Complete How-To</a> for more information and instructions on how our platform works.
        </div>
      </FaqSection>
      <FaqSection>
        <div
          slot="title"
        >I’m a blockchain geek. Give the scoop. What platform are you using? Is the project open source? Can I export tokens to mainnet?</div>
        <div slot="answer">
          Cryptoraves tokens are ERC-20 tokens. Token transfer is possible via
          <a
            href="https://loomx.io/"
            target="_blank"
          >Loom’s Layer 2 PlasmaChain.</a> Token export to mainnet is on our roadmap, & is an important, planned feature for Cryptoraves. Our vision is to eventually allow your tokens to be transferred across multiple platforms (Reddit, Instagram, YouTube, etc.).
          <br />
          <br />We are working toward open-sourcing our project. Some portions are already available. You can find us on GitHub
          <a
            href="https://github.com/cryptoraves"
            target="_blank"
          >here.</a>
        </div>
      </FaqSection>
      <FaqSection>
        <div
          slot="title"
        >I’m working on a Dapp, and I’m interested in partnering with Cryptoraves. Who do I contact?</div>
        <div
          slot="answer"
        >Cool! Yes, we’re totally interested in partnering up. Our platform can serve as a way to demonstrate or promote your token, right on Twitter. Email shannon@cryptoraves.space for more details.</div>
      </FaqSection>
      <FaqSection>
        <div slot="title">What is the Cryptoraves Privacy Policy?</div>
        <div id="faq" slot="answer">
          By Tweeting: @cryptoraves #DropMyCrypto, or by Tweeting any command request tagging @cryptoraves, you agree to our Privacy Policy, as follows:
          <br />
          <br />The Cryptoraves platform is public, and token transactions requested by our users are immediately viewable and searchable on our website.
          <br />
          <br />Cryptoraves collects information contained in Tweets when @cryptoraves is tagged. We collect the Tweeter’s @username, the token amounts specified for transfer, the @username of the token recipient, and number of followers for both users. We use this information to execute, either by sending Cryptoraves tokens directly to you, or by sending your Cryptoraves tokens to the indicated recipient. We also use this information to calculate your token score. We display the information derived from these Tweets on our website in the form of transaction-level details, user-level details (including token portfolios), and Leaderboard statistics.
          <br />
          <br />If you have any questions about how your data is being used, please email us at
          <a
            href="mailto:info@cryptoraves.space"
          >info@cryptoraves.space</a>. It may take us 3–5 days to respond to requests.
        </div>
      </FaqSection>
      <FaqSection>
        <div slot="title">What are the Cryptoraves Terms of Service?</div>
        <div slot="answer">
          By Tweeting: @cryptoraves #DropMyCrypto, or by Tweeting any command request tagging @cryptoraves, you agree to our Privacy Policy, as follows:
          <br />
          <br />You must comply with Twitter policies at all times.
          <br />
          <br />Tweet commands can not be reversed once they are requested.
          <br />
          <br />Please follow common sense, courtesy, and respect for others. If your intentions seem to be of ill will or to cause harm, we will suspend your account from our platform. This is at the discretion of Cryptoraves, LLC.
        </div>
      </FaqSection>
      <FaqSection>
        <div slot="title">How do I opt out of Auto Replies?</div>
        <div slot="answer">
          Please email your Twitter @username to
          <a
            href="mailto:info@cryptoraves.space"
          >info@cryptoraves.space.</a>. Send us an email entitled: Opt Out of Auto Replies. It may take 3–5 days to respond to your request.
        </div>
      </FaqSection>
      <FaqSection>
        <div slot="title">What if I have additional questions?</div>
        <div slot="answer">
          You can email us at
          <a href="mailto:info@cryptoraves.space">info@cryptoraves.space.</a> It may take us 3–5 days to respond to requests.
        </div>
      </FaqSection>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./ui/SectionHeader";
import FaqSection from "./ui/FaqSection";
export default {
  name: "Faq",
  components: {
    SectionHeader,
    FaqSection
  },
  mounted: function() {
    this.$nextTick(function() {
      if (!this.$route.query.top)
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById("faq")) - 150
        );
      else window.scrollTo(0, 0);
    });
  },
  created() {
    this.$ga.page("/");
  },
  methods: {
    goHome() {
      window.open("https://cryptoraves.space");
    },
    getOffsetLeft(elem) {
      var offsetLeft = 0;
      do {
        if (!isNaN(elem.offsetTop)) {
          offsetLeft += elem.offsetTop;
        }
      } while ((elem = elem.offsetParent));
      return offsetLeft;
    }
  }
};
</script>
<style scoped>
.faq-page-template {
  background-color: white;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 0 2em 2em 2em;
  margin-top: 2em;
  margin-bottom: 2em;
}
@media only screen and (max-width: 375px) {
  .faq-page-template {
    padding: 0 1em 1em 1em;
  }
}
</style>