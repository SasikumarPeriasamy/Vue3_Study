<template>
   <SovaAppGen :welcome="message"/>
</template>

<script>
import SovaAppGen from '@/components/SovaAppGen.vue'

export default {
  name: 'Home',
  components: {
    SovaAppGen
  },
  data(){
    return{
      message: "Welcome to Sova App Generator",
      symbol: "."
    }
  },
  mounted(){
    this.message = this.message + this.symbol;
  },
  created(){
    this.message = this.message + "!";
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
</style>
