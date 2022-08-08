<template>
<div class="container">
  <CometChatUserListWithMessages/>
    <button v-on:click="logout" class="btn-logout btn btn-primary">Logout</button>
</div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";
import {CometChatUserListWithMessages} from '../cometchat-ui/src'
export default {
  components:{
CometChatUserListWithMessages
  },
  methods:{
    async logout(){
  
  try {
    await CometChat.logout();
    this.$router.push({
        name: "homepage"
      });
  } catch (error) {
    console.error(error);
  }
}
  }
  }
</script>

<style lang="scss" scoped>
@import './src/styles/variables';

  .container {
    min-height: 90vh;
  }
  button.btn-logout {
    width: 100%;
    background-color: $btnColor;
    margin-top: 5%;
  }

</style>