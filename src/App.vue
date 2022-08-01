<template>
  <div id="app">
    <NavBarView/>
    <router-view/>
    <!-- <HomeView/> -->
    <!-- <AboutView/> -->
    <!-- <ContactUsView/> -->
  </div>
</template>

<script > 
import NavBarView from './components/NavBarView.vue'
// import AboutView from './views/AboutView.vue'
// import ContactUsView from './views/ContactUsView.vue'

export default{
    components: { NavBarView},
    // components: { NavBarView, AboutView, ContactUsView },
    name: 'App'
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@700&display=swap');
#app{
  font-family: Poppins;
}
</style>



