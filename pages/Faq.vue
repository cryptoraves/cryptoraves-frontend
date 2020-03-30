<template>
  <transition
    name="fade"
    mode="out-in">
    <div class="container temp">
      <div class="faq-page-template">
        <SectionHeader>FAQ</SectionHeader>
        <FaqSection>
          <div slot="title">What are Cryptoraves Tokens & Why Should I Use Them?</div>
          <div slot="answer">
            Request 1 Billion of your own
            <i>personalized</i> crypto tokens, directly on Twitter! No Account,
            No Fees. Just Tweet this:
            <a
              href="https://ctt.ac/9FQa1"
              target="_blank"
            >@cryptoraves #DropMyCrypto</a>
            <br>
            <br>Sharing your tokens is FUN! Amplify your hearts. Advocate for
            & support crypto. Give thanks & tip people with your own token. It
            feels good! And it’s easy -- share your tokens with a Tweet (& no
            fees).
            <br>
            <br>Create a customized token use case! People are already using
            their tokens to run personal token giveaways, promote their
            projects, & increase their community engagement.
            <br>
            <br>And... One day when you’re ready, you can export your token to
            Mainnet & list it on exchange.
            <br>
            <br>But mostly… Cryptoraves is just FUN! Click
            <a
              href="https://medium.com/@cryptoraves/beta-launch-announcement-cryptoraves-personalized-tokens-have-launched-42d9d6226ca0"
              target="_blank"
            >here</a>
            for more info.
          </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">How do I create an account?</div>
          <div slot="answer">
            You don’t need to create an account. You heard that right!!! We’re
            trying to make our platform as easy to use as possible. Just search
            for your Twitter @username in the header search bar. You’ll see all
            your tokens and transactions listed there. And since we have a
            public database, you’ll be able to see other users’ transactions,
            too.
          </div>
        </FaqSection>
        <!-- FaqSection>
          <div slot="title">How do I Tip Using VAYLA Tokens?</div>
          <div slot="answer">
            Click
            <a
              href
              @click="goVyaGuide"
            >here</a> for detailed instructions on how to tip with
            VAYLA tokens.
          </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">How do I Deposit or Withdraw my tokens?</div>
          <div slot="answer">
            The Cryptoraves platform is currently enabled to support Deposit & Withdraw of Cryptoraves official tokens ($CRYPTORAVES) and VAYLA tokens ($VYA).  Deposit & Withdraw of personalized tokens is coming soon.
            <br>
            <br>
            To initiate, follow our Step-by-Step Instruction guide <a 
              href="/stepinstructions"
              target="_blank">here</a>.
            <br>
            <br>            
            Or visit our <a
              href="/DepositWithdraw"
              target="_blank">Web 3 Portal</a> to be guided through the process via user prompts.
          </div>
        </FaqSection -->
        <FaqSection>
          <div slot="title">
            I need more details on how to do this... How do I share tokens &
            check my balance? How do I confirm transactions on the blockchain?
            How do I know if my transaction went through?
          </div>
          <div slot="answer">
            For a quick token sharing guide, see
            <a
              href="/guide"
              target>here</a>.
            <br>
            <br>For a more detailed, step-by-step walkthrough of our platform,
            read our
            <a
              href="https://medium.com/@cryptoraves/cryptoraves-usage-guidelines-the-complete-how-to-2710f70e8d38"
              target="_blank"
            >Cryptoraves Usage Guidelines, The Complete How-To.</a>
          </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">
            I’m a blockchain geek. Give the scoop. What platform are you using?
            Is the project open source? Can I export tokens to mainnet?
          </div>
          <div slot="answer">
            Cryptoraves tokens are ERC-20 tokens. Token transfer is possible via
            <a
              href="https://loomx.io/"
              target="_blank"
            >Loom’s Layer 2 BaseChain.</a>
            Personalized token export is on our 
            <a
              href="https://medium.com/@cryptoraves/the-cryptoraves-roadmap-vision-1a8b37fc0942"
              target="_blank"
            >Roadmap</a>, & is an important feature for our platform (personalized token withdrawal proof of concept has been completed, see
            <a
              href="https://medium.com/@plaster1/my-native-layer-2-token-is-all-growd-up-and-listed-on-a-mainnet-exchange-e0ac2d1e64ad"
              target="_blank"
            >here</a>). Our vision is to eventually allow your personalized tokens to be transferred across multiple platforms (Reddit, Instagram, YouTube, etc).
            <br>
            <br>
            The Cryptoraves platform now supports deposit and withdrawal of $VYA and $CRYPTORAVES tokens. See <a href="https://cryptoraves.space/partnershipsPage?target=partnerships">here</a> for more info.           
            <br>
            <br>
            We are working towards open sourcing the project. Some
            portions are already available. You can find us
            <a
              href="https://github.com/cryptoraves"
              target="_blank"
            >here</a>
            on GitHub.
          </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">
            I’m working on a Dapp, and I’m interested in partnering with
            Cryptoraves. Who do I contact?
          </div>
          <div slot="answer">
            Cool! Yes, we’re totally interested in partnering up. Our platform
            can serve as a way to onboard new, interested users to your project,
            demonstrate/promote your token, right on Twitter. Working with
            Cryptoraves is a more decentralized option for tipping on Twitter,
            unlike most centralized tipbots currently available. All of
            Cryptoraves Twitter token transactions are recorded on the
            blockchain. See our <a
              href="http://cryptoraves.space/PartnershipsPage"
              target="_blank">Partnership page</a> for more details, or contact shannon@cryptoraves.space.
          </div>
        </FaqSection>
        <FaqSection>
          <div
            id="hodler"
            slot="title">What is a “Hodler”?</div>
          <div slot="answer">
            A “hodler” is any other Cryptoraves user who has your personalized
            token in their portfolio.
            <br>
            <br>The term “hodl” is a popular term within the cryptosphere
            describing how crypto investors plan to “hold,” or not sell, their
            crypto tokens. It was a misspelling that became a meme & is commonly
            used within the cryptosphere. A hodler is therefore someone who is
            hodling your tokens, or any other crypto tokens, until they increase
            in value.
          </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">What is the Cryptoraves Privacy Policy?</div>
          <div
            id="privacy"
            slot="answer">
            By Tweeting:
            <a
              href="https://ctt.ac/9FQa1"
              target="_blank">@cryptoraves #DropMyCrypto</a>, or by Tweeting any command request tagging @cryptoraves, you
              agree to our Privacy Policy, as follows:
            <br>
            <br>The Cryptoraves platform is public, and token transactions
            requested by our users are immediately viewable and searchable on
            our website.
            <br>
            <br>Cryptoraves collects information contained in Tweets when
            @cryptoraves is tagged. We collect the Tweeter’s @username, the
            token amounts specified for transfer, the @username of the token
            recipient, and number of followers for both users. We use this
            information to execute, either by sending Cryptoraves tokens
            directly to you, or by sending your Cryptoraves tokens to the
            indicated recipient. We also use this information to calculate your
            token score. We display the information derived from these Tweets on
            our website in the form of transaction-level details, user-level
            details (including token portfolios), and Leaderboard statistics.
            <br>
            <br>If you have any questions about how your data is being used,
            please email us at
            <a
              href="mailto:info@cryptoraves.space"
            >info@cryptoraves.space</a>.
            It may take us 3–5 days to respond to requests.
          </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">What are the Cryptoraves Terms of Service?</div>
          <div slot="answer">
            By Tweeting:
            <a
              href="https://ctt.ac/9FQa1"
              target="_blank">@cryptoraves #DropMyCrypto</a>, or by Tweeting any command request tagging @cryptoraves, you
              agree to our Privacy Policy, as follows:
            <br>
            <br>You must comply with Twitter policies at all times.
            <br>
            <br>Tweet commands can not be reversed once they are requested.
            <br>
            <br>Please follow common sense, courtesy, and respect for others.
            If your intentions seem to be of ill will or to cause harm, we will
            suspend your account from our platform. This is at the discretion of
            Cryptoraves, LLC.
          </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">How do I opt out of Auto Replies?</div>
          <div slot="answer">
            Please email your Twitter @username to
            <a
              href="mailto:info@cryptoraves.space"
            >info@cryptoraves.space.</a>.
            Send us an email entitled: Opt Out of Auto Replies. It may take 3–5
            days to respond to your request.
          </div>
        </FaqSection>
        <FaqSection>
          <div slot="title">What if I have additional questions?</div>
          <div slot="answer">
            You can email us at
            <a href="mailto:info@cryptoraves.space">info@cryptoraves.space.</a>
            It may take us 3–5 days to respond to requests.
          </div>
        </FaqSection>
      </div>
    </div>
  </transition>
</template>

<script>
import SectionHeader from '../components/ui/SectionHeader'
import FaqSection from '../components/ui/FaqSection'
export default {
  name: 'Faq',
  components: {
    SectionHeader,
    FaqSection
  },
  mounted() {
    this.$nextTick(function() {
      if (this.$route.query.target == 'top') window.scrollTo(0, 0)
      else if (this.$route.query.target == 'privacy')
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById('privacy')) - 150
        )
      else if (this.$route.query.target == 'hodler')
        window.scrollTo(
          0,
          this.getOffsetLeft(document.getElementById('hodler')) - 100
        )
    })
  },
  created() {
    // this.$ga.page('/')
  },
  methods: {
    goHome() {
      window.open('https://cryptoraves.space')
    },
    getOffsetLeft(elem) {
      var offsetLeft = 0
      do {
        if (!isNaN(elem.offsetTop)) {
          offsetLeft += elem.offsetTop
        }
      } while ((elem = elem.offsetParent))
      return offsetLeft
    },
    goVyaGuide: function() {
      this.$router.push({
        name: 'VYAGuidePage'
      })
    }
  }
}
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
