<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  components : {
  },
  data(){
    return{
      login : false,
    }
  },
  created(){
    console.log("안녕하세요");
    if(this.$store.state.userInfo.userName == "notlogin")
      this.$router.push('/Login');
    else
      this.$router.push('/home/timeline');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}