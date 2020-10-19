<template>
<h1>Register your details</h1>
<form id = "admin_registration" @submit.prevent="submitCheck">
    <div class="user_items">
    <label><strong>User ID</strong></label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input :value="[data.userId]" class="non_edit" disabled="true">
    </div>
    <div class="user_items">
    <label><strong>First Name</strong></label>
    &nbsp;&nbsp;&nbsp;
    <input id="firstName" v-model="data.firstName">
    </div>
    <div class="user_items">
    <label for = "lastName"><strong>Last Name</strong></label>
    &nbsp;&nbsp;&nbsp;
    <input id="lastName" v-model="data.lastName">
    </div>
    <div class="user_items">
    <label for = "email"><strong>Email</strong></label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input id="email" v-model="data.email">
    </div>
    <div class="user_items">
    <label for = "feed"><strong>Feedback</strong></label>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <textarea id="feed" :class="{'non_edit' : oldFeed}" :disabled="oldFeed != ''" placeholder="Enter your feed!" v-model="data.newFeed"/>
    </div>
    <br>
    <button id="register"><strong>Register!</strong></button>
    <div class = "alert_div" v-if="data.alert">
      <p>Please enter all the fields!</p>
    </div>
</form>
</template>

<script>
import { reactive } from 'vue';
import {users} from '../assets/users.js'
import { useRoute } from 'vue-router';
export default {
    name: 'Admin',
    props: {
        userId: Number
    },
    setup(){
        const route = useRoute();
        const userId = route.query.userId;
        const user = users.filter(user => user.id == userId)[0];
        let oldFeed = '';
        if(user){
            oldFeed = user.feedText;
        }
        const data = reactive({
            userId : Number(userId),
            firstName:'',
            lastName : '',
            email: '',
            newFeed: oldFeed,
            alert: false
        })
        function submitCheck() {
            if(data.firstName==='' || data.lastName==='' || data.email==='' || data.newFeed==='' ){
              data.alert = true;
            } else if(!user){
                users.push({
                    id: data.userId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    admin: false,
                    feedText: data.newFeed
                })
                clear();
                alert('Thank you for the Resitration and Feedback!');
            } else {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.email = data.email;
                user.admin = false;
                clear();
                alert('Thank you for the Resitration!');
            }
        }
        function clear(){
            data.firstName='';
            data.lastName = '';
            data.email='';
            if(!user){
                data.newFeed='';
            }
            data.alert = false;
        }
        return{
            oldFeed,
            data,
            submitCheck
        }
    }
}
</script>

<style scoped>
#admin_registration {
    left: 15px;
    position: absolute;
    text-align: initial;
    line-height: 2;
    margin: 40px 165px 26px 114px;
    background-image: url(../assets/Profile.jpg);
    background-attachment: scroll;
    background-size: cover;
    height: 71%;
    width: 48%;
    outline: auto;
    border: 6px solid darkblue;
    text-indent: 37px;
    letter-spacing: 1px;
    word-spacing: 3px;
}

h1 {
    text-shadow: 2px 2px 10px red;
}

label {
    color: black;
    background: khaki;
    border-radius: 4px;
    opacity: 0.8;
}

.non_edit {
    background-color: cadetblue;
}

#register{
    position: relative;
    left: 100px;
}
.alert_div{
    text-align: center;
    color: darkred;
}
</style>