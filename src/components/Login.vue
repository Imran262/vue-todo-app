<template>
  <div>
    <button class="btn" @click="DispatchLogin()">Login</button>
    <p class="p-tag">Logged status ? {{ isLogin }}</p>
    <button class="btn" @click="logOut()">Logout</button>
    <img v-if="imageUrl" :src="imageUrl" alt="My Image"/>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  data() {
    return {
      isLogin: false,
      imageUrl: '',
    };
  },
  methods: {
    ...mapActions(["login"]),
    async logOut() {
      const result = await this.$gAuth.signOut();
      this.isLogin = false;
      console.log(`result`, result);
    },
    async DispatchLogin () {
      const googleUser = await this.$gAuth.signIn();
      console.log('hereeee', googleUser, googleUser.getId(), this.$gAuth.isAuthorized, googleUser.getBasicProfile(), googleUser.getBasicProfile().getImageUrl(), googleUser.vc.access_token)
      this.login(googleUser)
    }
  }
};
</script>

<style scoped>
.p-tag{
  margin-bottom: 0;
}
</style>