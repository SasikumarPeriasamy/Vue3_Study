<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
 

</template>

<style scoped>
#nav {
  padding: 14px 5%;
  background: darkslategray;
  text-align: initial;
}

#nav a {
  font-weight: bold;
  color: antiquewhite;
}

#nav a.router-link-exact-active {
  color: antiquewhite;
}
</style>
