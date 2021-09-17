<template> 
  <table border=2px>
    <thead>
      <tr>
        <th> Id</th>
        <th>Title</th>
        <th>Completed</th>
        <th>Operation</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key= "user.UserId">
        <td>{{user.id}}</td>
        <td>{{user.title}}</td>
        <td>{{user.completed}}</td>
        <td><button class="badge badge-danger mr-2" @click="deleteUser">Delete</button>
            <button type="submit" class="badge badge-success" @click="updateUser">Update</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import UserDataService from '../services/UserDataService'
Vue.use(VueAxios, axios)

export default{
    name: 'Users',
    data(){
        return { users: null }
    },
    methods: {
        retrieveUsers() {
        UserDataService.getAll()
            .then(response => {
                this.users = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        }        
    },
    mounted() {
       this.retrieveUsers();
    }
}
</script>
<style></style>