<template>
  <div id="app_gen">
    <span v-once v-bind:title="hint">
    <h1>{{welcome}}</h1>
    </span>
  </div>
  <button v-on:click="createApps">
    Create Custom App
  </button>
  &nbsp;
  <button v-on:click="useApps">
    Use Available App
  </button>
  <div class="custom_app" v-if="customApp">
    <p v-html="customName"/>
    <input v-model="customName" placeholder="Please edit..."/>
  </div>
  <ExsitingApps class="custom_app" v-else :availableAppList="availableAppList"/>
  <p id="app_count">Downloaded Apps:{{initialcount > 10 ? "Max Limit": initialcount}}</p>
  <AppGuide @submitted="SubmitGuide"> </AppGuide>
</template>

<script>
import ExsitingApps from './ExistingApps'
import AppGuide from './AppGuide'
export default {
  name: 'SovaAppGen',
  props: {
    welcome: String
  },
  data(){
    return{
      hint:"Enjoy app Gen...",
      customName: '<p style="color:Blue">Name your App</p>',
      customApp: true,
      availableAppList: [
        {id: 1, name:"Watsap"},
        {id:2, name:"FaceBook"},
        {id:3, name:"Twitter"}
      ],
      initialcount:0
    }
  },
  watch: {
    customName(newName, OldName){
      if(newName !== OldName)
      this.hint + newName;
    }
  },
  methods: {
    createApps(){
      this.customApp = true;
      this.initialcount++;
    },
    useApps(){
      this.customApp = false;
      this.initialcount++;
    },
    SubmitGuide(submitted){
      if(submitted){
         alert('Thank you for Submit')
      } else{
         if(confirm('Please agree!!!')){
            this.SubmitGuide(true);
          }
      }
    }
  },
  components: {
    ExsitingApps,
    AppGuide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div #app_gen{
  
  border: 5px solid rgb(45, 0, 128);
  padding: 10px;
  margin: 20px;
  align-content: center;
  font-size: 16px;
  font-style: italic;
}

div .custom_app{
  padding: 5px;
  margin: 10px;
  text-align: left;
  list-style-type: gujarati;
}

#app_count {
  border-bottom-style: double;
    bottom: 10px;
    position: absolute;
}
</style>
