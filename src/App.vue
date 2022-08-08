<template>
  <div id="app">
    <NavBarView/>
    <router-view/>
    <!-- <HomeView/> -->
    <!-- <AboutView/> -->
    <!-- <ContactUsView/> -->
    <FooterView/>
  </div>
</template>

<script > 
import NavBarView from './components/NavBarView.vue';
import FooterView from './components/FooterView.vue';
// import AboutView from './views/AboutView.vue'
// import ContactUsView from './views/ContactUsView.vue'
import { CometChat } from "@cometchat-pro/chat";
// import './App.css'

export default{
    components: { NavBarView, FooterView },
    // components: { NavBarView, AboutView, ContactUsView },
    name: 'App',
    
    created(){
    this.initializeComet()},
    methods: {
      initializeComet(){
        const APP_ID= '215909698deb2e05';
            const REGION= 'us';
            const appSetting = new CometChat.AppSettingsBuilder()
              .subscribePresenceForAllUsers()
              .setRegion(REGION)
              .build();
            CometChat.init(APP_ID, appSetting).then(
              () => {
                console.log('Initialization completed successfully');
                // You can now call login function.
              },
              (error) => {
                console.log('Initialization failed with error:', error);
                // Check the reason for error and take appropriate action.
              }
        );
      }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@700&display=swap');
#app{
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



