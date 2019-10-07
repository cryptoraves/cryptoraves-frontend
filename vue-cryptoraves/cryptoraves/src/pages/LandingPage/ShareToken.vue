<template>
  <div class="sharetoken">
    <div class="container">
      <SectionHeader>SHARE Tokens! It's FUN!</SectionHeader>
      <div class="row sharetoken-content">
        <div class="col-lg-6 mt-2 d-flex">
          <img src="../../assets/img/shareimg.png" />
        </div>
        <div class="col-lg-6 mt-2">
          <div class="sharetoken-content-1">Find a Rad Human & Share!</div>
          <div class="sharetoken-content-2">
            Amplify your hearts. Give appreciation with a personal crypto
            touch. It feels good!
          </div>
          <div class="space-20"></div>
          <div class="sharetoken-content-3">To share, just Tweet. Two ways.</div>
          <div class="space-10"></div>
          <div>
            <div class="sharetoken-method-connect"></div>
            <MethodButton number="1">Tag & Tweet</MethodButton>
            <div class="sharetoken-tweet-button">
              <TweetButton type2="true">@cryptoraves 1,000 @username</TweetButton>
              <AppButton name="Show me a Tweet Demo" type4="true" target="tag"></AppButton>
            </div>
            <MethodButton number="2">Reply with Tokens</MethodButton>
            <div class="sharetoken-tweet-button">
              <TweetButton type2="true">@cryptoraves 1,000</TweetButton>
              <AppButton name="Show me a Tweet Demo" type4="true" target="reply"></AppButton>
            </div>
          </div>
          <div class="sharetoken-content-4">
            More "How To" on Sharing
            <a
              href="https://medium.com/p/2710f70e8d38/edit"
              target="_blank"
            >here</a>
          </div>
          <div class="sharetoken-content-5">This is fun! What else?</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/ui/SectionHeader";
import TweetButton from "../../components/ui/TweetButton";
import AppButton from "../../components/ui/AppButton";
import MethodButton from "../../components/ui/MethodButton";
export default {
  name: "ShareToken",
  components: {
    SectionHeader,
    TweetButton,
    AppButton,
    MethodButton
  }
};
</script>

<style scoped>
.sharetoken-method-connect {
  position: absolute;
  margin-left: -27px;
  margin-top: 10px;
  border: 2px solid rgb(0, 38, 101);
  border-right: none;
  width: 27px;
  height: 270px;
}
.sharetoken-tweet-button {
  margin-top: 10px;
  margin-bottom: 50px;
  width: 90%;
  margin-left: auto;
}
.sharetoken-tweet-button button {
  margin-top: 20px;
}

.sharetoken {
  background-color: rgb(246, 250, 251);
}

img {
  margin: auto;
}
.sharetoken-content {
  padding-top: 40px;
  padding-bottom: 40px;
}
.sharetoken-content-1 {
  font-size: 30px;
  font-family: "Montserrat";
  color: rgb(18, 220, 66);
  font-weight: bold;
  line-height: 1;
  text-align: left;
}
.sharetoken-content-2 {
  font-size: 17px;
  font-family: "Montserrat";
  color: rgb(0, 38, 101);
  line-height: 1.588;
}
.sharetoken-content-3 {
  font-size: 17px;
  font-family: "Montserrat";
  color: rgb(0, 36, 102);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 3.235;
  text-align: left;
}
.sharetoken-content-4 {
  font-size: 15px;
  font-family: "Montserrat";
  color: rgb(40, 40, 40);
}
.sharetoken-content-5 {
  font-size: 15px;
  font-family: "Montserrat";
  color: rgba(0, 38, 101, 0.702);
  line-height: 2.333;
  text-align: right;
}
@media only screen and (min-width: 0px) and (max-width: 767px) {
  .sharetoken-method-connect {
    margin-left: -10px;
    width: 10px;
    height: 270px;
  }
}

@media only screen and (min-width: 767px) and (max-width: 991px) {
  .sharetoken-method-connect {
    margin-left: -27px;
    width: 27px;
    height: 270px;
  }
}

@media only screen and (max-width: 500px) {
  img {
    width: 300px;
  }
  .sharetoken-method-connect {
    height: 241px;
  }
  .sharetoken-content-1 {
    font-size: 20px;
  }
  .sharetoken-content-2 {
    margin-top: 10px;
  }
  .sharetoken-content-4 {
    margin-top: -30px;
    margin-bottom: 20px;
  }
  .sharetoken-method-connect {
    margin-left: -10px;
    width: 10px;
    height: 270px;
  }
}
@media only screen and (max-width: 375px) {
  .sharetoken-method-connect {
    margin-left: -10px;
    width: 10px;
    height: 245px;
  }
}
</style>