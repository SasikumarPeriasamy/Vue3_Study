<template>
    <div id = 'user_div'>
        <label for = 'user_name'><strong>Name</strong></label>
        &nbsp;
        <p id= 'user_name'>{{state.user.firstName}} {{state.user.lastName}} </p>
        <br><br>
        <label for="user_mail"><strong>Email</strong></label>
        &nbsp;
        <p id="user_mail">{{state.user.email}} </p>
        <br><br>
        <label for="user_feed"><strong>Feed Content</strong></label>
        &nbsp;
        <p id="user_feed">{{feed}} </p>
        <br>
        <router-link class='back_home' to="/">Back to Home</router-link>
    </div>
</template>

<script>
import {users} from '../assets/users.js'
import { useRoute } from "vue-router";
import { reactive } from 'vue';
export default {
    name: 'UserInfo',
    setup() {
        const route = useRoute();
        const usrId = route.params.userId;
        const feed = route.params.feedText;
        const state = reactive({
            user: users[usrId - 1] || users[0]
        })
        return {
            state,
            feed
        }
    }
}
</script>

<style scoped>
div #user_div {
    padding: 10px;
    text-align: initial;
}

.back_home {
    position: absolute;
    bottom: 100px;
}

#user_name, #user_mail, #user_feed {
    display: contents;
}

</style>