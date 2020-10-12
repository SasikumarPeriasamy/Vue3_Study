<template>
    <div id = "terms">
        {{notes + appName}}
    </div>
</template>

<script>

export default {
    name: 'Terms',
    props: {
        appName: String
    },
    setup(){
        return {
            notes:'Terms and conditions for : '
        }
    }
}
</script>