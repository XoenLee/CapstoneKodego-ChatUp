<template>
    <footer class="footer">
        <div class="text-center p-3">
            <p class="text-light"><span>© 2022 Copyright:</span> ChatUp </p>
        </div>
        <div class="text-center text-light">
            <p><span>Developed by:</span> Kenneth Lagos, Frederick Reyes and Rachelyn Dianne Taguines</p> 
        </div>
    </footer>
</template>

<script>
    export default{
        name: 'FooterView',
};

</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
    @import './src/styles/_variables.scss';
    @import './src/styles/style.scss';
.footer {
    padding: 1.5rem;
    bottom: 0;
    height: auto;
    background-color: $secondaryColor;
    box-shadow: 0px -2px 5px 0px rgba(50, 50, 50, 0.75);


    span{
        color:$accentColor;
    }
}
</style>