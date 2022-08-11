<template>
<section>
  <div class="wrapper">
    <div class="container__home">
      <div class="container__heroSection">
        <h1 class="container__heroText">The world is closer <br>than ever with <span>CHATUP</span></h1>
        <h4 class="container__heroSubText">The best way to keep in touch with your friends anywhere in the world!</h4> 
      </div> 
      <div class="container__buttons">
        <router-link to="/SignIn">
            <button class="container__btn1">Sign In</button>
        </router-link>
        <router-link to="/SignUp">
            <button class="container__btn2">Register</button>
        </router-link>
      </div> 
      <p class="mt-5"><a href="/About">More details here<i class="fas fa-angle-double-right"></i> </a></p>
    </div>
  </div>
  <div class="featured-in">
      <div class="row">
        <h2 class="container__feat-heading text-center mt-5">FEATURED-IN</h2>
        <div class="container__company col-lg-4 text-center">
          <img class="container__logo-img" src="../assets/company-logo1.png" alt="">
        </div>

        <div class="container__company col-lg-4 text-center">
          <img class="container__logo-img" src="../assets/company-logo2.png" alt="">
        </div>

        <div class="container__company col-lg-4 text-center">
          <img class="container__logo-img" src="../assets/company-logo3.png" alt="">
        </div>
      </div>
  </div>

  <div class="feature">
        <div class="container p-4 bg-opacity-50">
            <h2 class=" container__feature-heading text-center">WHY CHOOSE US?</h2>
            <div class="row">
                <div class="col-lg-4 text-center">
                    <img class="container__feat-img" src="../assets/feat1.png" alt="head">
                    <h4 class="container__feat-subName text-center">FREE PREMIUM FEATURES</h4>
                    <p> Chat App are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>

                </div>
                <div class="col-lg-4 text-center">
                    <img class="container__feat-img" src="../assets/feat2.png" alt="head">
                    <h4 class="container__feat-subName">REAL-TIME PUSH MESSAGE</h4>
                    <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                </div>
                <div class="col-lg-4 text-center">
                    <img class="container__feat-img" src="../assets/feat3.png" alt="head">
                    <h4 class="container__feat-subName">EASY TO USE INTERFACE</h4>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                </div>
                <div class="container__buttons text-center py-5">
                  <router-link to="/About">
                        <button class="container__btn1">Learn More</button>
                  </router-link>
                </div>
            </div>
        </div>
  </div>

  <div class="cta">
    <div class="container__buttons text-center py-5">
      <h2 class=" container__cta-heading text-center"> TRY IT NOW FOR FREE!</h2>
      <router-link to="/SignUp">
            <button class="container__btn2">Register</button>
      </router-link>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'HomeView',
};
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
  @import './src/styles/_variables.scss';
  @import './src/styles/_header.scss';
  @import './src/styles/style.scss';
  @import './src/styles/_buttons.scss';

  .wrapper{
    background: url(../assets/banner.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 190vh;
    min-height: 95vh;

  span {
    color: $primaryColor;
  }
    .container {

      &__home {
        @include centerEvrything();
      }

      &__heroSection{
        margin-bottom: 2em;
      }

      &__heroText {
        font-family: 'Poppins', sans-serif;
        color: $secondaryColor;
        line-height: 1em;
      }

      &__heroSubText {
        margin-bottom: 3.5rem;
      }

      &__buttons {
        @include centerBtn();
      }

        &__btn1 {
          font-size: large;
          color: $secondaryColor;
          border: 1px solid $accentColor;
          background-color: $accentColor;
        }

        &__btn2 {
          font-size: large;
          color: aliceblue;
          border: 1px solid $btnColor;
          background-color: $btnColor;
        }

    }
}

.featured-in{
    background-color: $secondaryColor;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .container{
    &__feat-heading{
          color: aliceblue;
          font-size: 3rem;
        }

    &__logo-img{
          height: 300px;
          width: 300px;
        }
  }

.feature{
  margin-top: 5rem;

  .container{
        background-color: $backGroundColor;
        border-radius: 1.5rem;
        margin-bottom: 5rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        &__feature-heading{
            color:$secondaryColor;
            padding-top: 2rem;
            font-size: 3rem;
        }

        &__feat-img{
            height: 10rem;
            width: 10rem;
            margin-top:1rem;
            border-radius: 2rem;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

        &__feat-subName{
            font-size: 1.5rem;
            font-weight: 600;
            margin-top:2rem;
        }

        &__btn1 {
          font-size: large;
          color: $secondaryColor;
          border: 1px solid $accentColor;
          background-color: $accentColor;
        }
  }
}
.cta{
  background-color: $accentColor;

  .container{

    &__btn2 {
          font-size: large;
          color: aliceblue;
          border: 1px solid $btnColor;
          background-color: $btnColor;
          width: 400px;
        }

    &__cta-heading{
      font-size:3rem;
      color: $secondaryColor;
    }
  }

}
</style>
