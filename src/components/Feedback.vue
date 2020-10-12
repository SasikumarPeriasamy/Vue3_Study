<template>
    <form id="feedback_div" @submit.prevent="submitCheck">
        <label for="feedback_input">
            <strong>Enter Feedback!</strong>
            ({{ newFeedCount}}/50)
        </label>
        <textarea id="feedback_input" cols='5' placeholder='Dont forget to give feedback!' v-model.trim="data.newFeed" :class="{'sizeLimit':newFeedCount > 50}"/>
        <br>
        <button>SUBMIT</button>
        <br><br>
        <label for='feedback_submitted'><strong>Submitted Feedbacks!!!</strong></label>
        <p class='feedback_list' v-for="feed in data.feedbackList" v-bind:key="feed.value">
            {{feed.text}}
            <br>
        </p>
    </form>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
    name: 'Feedback',
    setup(){
        const data = reactive({
            newFeed:'',
            feedbackList: [
                {value:1, text:'Awesome...'},
                {value:2, text:'Good Experiance!'}
            ]
        })
        //const submitFeedback = computed(() => submitCheck())
        const newFeedCount = computed(() => data.newFeed.length)

        function submitCheck() {
            if(data.newFeed===''){
              alert('Please enter the feed!')
            } else {
                data.feedbackList.unshift({
                    value: data.feedbackList.length + 1,
                    text: data.newFeed
                })
                data.newFeed='';
            }
        }
        return {
            data,
            // submitFeedback,
            newFeedCount,
            submitCheck
        }
    }
}
</script>

<style scoped>
form#feedback_div {
    border-top-style: outset;
    padding-top: 10px;
}
textarea#feedback_input {
    display: flex;
    width: -webkit-fill-available;
}
.feedback_list{
    padding: 2px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;
    text-align: left;
    font-size: small;
}

.sizeLimit{
    color: red;
    border-color: red;
}
</style>