<template> 
  <table border=2px>
    <thead>
      <tr>
        <th> Name</th>
        <th>Email</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key= "user.id">
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.company.name}}</td>
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