<template>
  <div class="home">
    <router-link to="/about">About</router-link> 
    <router-link to="/timeline">Timeline</router-link> 
    <router-link to="/detail">Detail</router-link>
    <button v-on:click="logout">로그아웃</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  methods:{
    logout(){
      this.$store.state.userInfo.userName = "notlogin";
      this.$router.push('/login');
    }
  }
};
</script>