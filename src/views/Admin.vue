<template>
<h1>Register your details</h1>
<form id = "admin_registration" @submit.prevent="submitCheck">
    <div class="user_items">
    <label><strong>User ID</strong></label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input :value="[data.userId]" class="non_edit" readonly>
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
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input id="email" v-model="data.email">
    </div>
    <div class="user_items">
    <label for = "feed"><strong>Feedback</strong></label>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <textarea id="feed" placeholder="Enter you feed!" v-model="data.newFeed"/>
    </div>
    <br>
    <button id="register"><strong>Register!</strong></button>
    <div class = "alert_div" v-if="data.alert">
      <alert-box>Please enter all the fields!</alert-box>
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
        userId: {
            type : Number,
            required: true
        }
    },
    setup(){
        const route = useRoute();
        const data = reactive({
            userId : Number(route.query.userId),
            firstName:'',
            lastName : '',
            email: '',
            newFeed:'',
            alert: false
        }) 
        function submitCheck() {
            if(data.firstName==='' || data.lastName==='' || data.email==='' || data.newFeed==='' ){
              data.alert = true;
            } else {
                users.push({
                    id: data.userId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    admin: false,
                    feedText: data.newFeed
                })
                clear();
                alert('Thank you for the Resitration and Feedback');
            }
        }
        function clear(){
            data.firstName='';
            data.lastName = '';
            data.email='';
            data.newFeed='';
            data.alert = false;
        }
        return{
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