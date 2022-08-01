<template>
  <div class="wrapper">
    <div class="container__home">
      <div class="container__heroSection">
        <h1 class="container__heroText">The world is closer <br>than ever with <span>CHATUP</span></h1>
        <h4 class="mb-5">The best way to keep in touch with your friends anywhere in the world!</h4> 
      </div> 
      <div class="container__buttons">
        <router-link to="/SignIn">
            <button class="container__btn1">Sign In</button>
        </router-link>
        <router-link to="/SignUp">
            <button class="container__btn2">Register</button>
        </router-link>
      </div>  
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
}
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

      &__buttons {
        @include centerBtn();
      }

        &__btn1 {
          font-size: large;
          color: aliceblue;
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
</style>