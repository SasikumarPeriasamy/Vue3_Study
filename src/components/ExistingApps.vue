<template>
    <div>
    <p>Available Apps</p>
    <li v-for="app in availableAppList" v-bind:key="app.id">
      {{app.name}}
    <Todo-Button selectId= app.id>Select</Todo-Button>
    </li>
  </div>
</template>

<script>
import TodoButton from './TodoButton.vue'

export default {
    name: 'ExistingApps',
    props: {
        availableAppList: {
            type: String,
            required: true
        }
    },
    components: {
      TodoButton
    }
}
</script>