<template>
<div class="container-fluid navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid w-75">
        <a class="navbar-brand"><img class="container__logo" src="../assets/Chatup-logo.png" alt="head"></a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
            <div class="navbar-nav navbarCustom">
                <router-link to="/" class="nav-item nav-link mx-3">HOME</router-link>
                <router-link to="/About" class="nav-item nav-link mx-3">ABOUT</router-link>
                <router-link to="/Contact" class="nav-item nav-link mx-3">CONTACT</router-link>
            </div>
        </div>

        
    </div>
</div>
</template>

<script>
    export default{
        name:'NavBarViewVue ',
};

</script>

<style lang="scss">
@import './src/styles/_navigation.scss';
@import './src/styles/_variables.scss';

.nav-item {
    @include navItem();
}
div.navbar {
    background-color: $accentColor !important;
    box-shadow:0px 2px 7px 0px rgba(144, 142, 142, 0.75);
}

.container {
    &__logo {
        height: 2.15rem;
    }
}
</style>



