<template>
<h1><strong>User Details </strong></h1>
    <div id = 'user_div'>
        <label for = 'user_name'><strong>Name</strong></label>
        &nbsp;
        <p id= 'user_name'>{{state.user.firstName ? state.user.firstName :storeDefaultUser.firstName}} {{state.user.lastName ? state.user.lastName: storeDefaultUser.lastName+'(Default)'}} </p>
        <br><br>
        <label for="user_mail"><strong>Email</strong></label>
        &nbsp;
        <p id="user_mail">{{state.user.email? state.user.email: storeDefaultUser.email+'(Default)'}} </p>
        <br><br>
        <label for="user_feed"><strong>Feed Content</strong></label>
        &nbsp;
        <p id="user_feed">{{state.user.feedText}} </p>
        <br>
        <router-link v-show="!state.user.firstName" :to="{name:'Admin', query: {userId:usrId}}">Register as new user </router-link>
        <router-link class='back_home' to="/">Back to Home</router-link>
    </div>
</template>

<script>
import {users} from '../assets/users.js'
import { useRoute } from "vue-router";
import { useStore} from 'vuex'
import { reactive } from 'vue';
export default {
    name: 'UserInfo',
    setup() {
        const route = useRoute();
        const store = useStore();
        const usrId = route.params.userId;
        let storeDefaultUser = store.state.User.user;
        if(!storeDefaultUser){
          store.dispatch('User/setUser', users[0]);
        }
        storeDefaultUser = store.state.User.user;
        const state = reactive({
            user: users.filter(user => user.id == usrId)[0] || storeDefaultUser
        })
        return {
            usrId,
            state,
            storeDefaultUser
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

a {
    position: relative;
    top: 50px;
    font-style: italic;
    opacity: 0.8;
}

</style>