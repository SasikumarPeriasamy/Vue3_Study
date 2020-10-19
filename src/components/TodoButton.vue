<template>
    <button>
        <slot>
        </slot>
    </button>
</template>

<script>
export default {
    name: 'Todo_Button',
    props: {
        selectId :{
            type: Number,
            required: true
        }
    }
}
</script>