<template>
<div class="container">
  <CometChatUI/>
    <button v-on:click="logout" class="container__btn2">Logout</button>
</div>
</template>

<script>
// import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "../cometchat-ui/src"
// import {CometChatUserListWithMessages} from '../cometchat-ui/src'
export default {
  components:{
    CometChatUI,
   }
 };
// CometChatUserListWithMessages
//   },
//   methods:{
//     async logout(){
  
//   try {
//     await CometChat.logout();
//     this.$router.push({
//         name: "homepage"
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }
//   }
//   }
</script>

<style lang="scss" scoped>
@import './src/styles/_variables.scss';
@import './src/styles/_buttons.scss';

  .container {
    min-height: 90vh;

    &__btn2 {
          font-size: large;
          color: aliceblue;
          border: 1px solid $btnColor;
          background-color: $btnColor;
          margin-top: 2rem;
        }
  }

</style>