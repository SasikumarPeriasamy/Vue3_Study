<template>
    <form id="feedback_div" @submit.prevent>
        <label for="feedback_input">
            <strong>Enter Feedback!</strong>
            ({{ newFeedCount}}/50)
        </label>
        <textarea id="feedback_input" cols='5' placeholder='Dont forget to give feedback!' v-model.trim="data.newFeed" :class="{'sizeLimit':newFeedCount > 50}"/>
        <div class = "alert_div" v-if="data.alert">
             <alert-box>Please enter the feed!</alert-box>
        </div>
        <br>
        <button @click="submitCheck">SUBMIT</button>
        <br><br>
        <label for='feedback_submitted'><strong>Submitted Feedbacks!!!</strong></label>
        <p class='feedback_list' v-for="feed in data.feedbackList" v-bind:key="feed.id">
            {{feed.text}}
            <router-link id="feedback_user" :to="{name:'UserInfo', params:{userId: feed.id, feedText: feed.text}}">User Details</router-link>
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
                {id:1, text:'Awesome...'},
                {id:2, text:'Good Experiance!'}
            ],
            alert: false
        })
        //const submitFeedback = computed(() => submitCheck())
        const newFeedCount = computed(() => data.newFeed.length)

        function submitCheck() {
            if(data.newFeed===''){
              data.alert = true;
            } else {
                data.feedbackList.unshift({
                    id: data.feedbackList.length + 1,
                    text: data.newFeed
                })
                data.newFeed='';
                data.alert = false;
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
    background-color: #cdc9c9;
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

#feedback_user {
    float: right;
    border-radius: 11px;
    height: 17px;
    font-size: smaller;
    border-width: inherit;
    text-decoration: blink;
}

.alert_div{
    text-align: initial;
    color: darkred;
}
</style>