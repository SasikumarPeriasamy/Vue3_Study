<template>
    <div>
    <p>Available Apps</p>
    <li v-for="app in availableAppList" v-bind:key="app.id">
      {{app.name}}
    </li>
  </div>
</template>

<script>
export default {
    name: 'ExistingApps',
    props: {
        availableAppList: {
            type: String,
            required: true
        }
    }
}
</script>