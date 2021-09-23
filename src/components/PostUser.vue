<template>
    <div>
        <form @submit="postUser" method="post" >
            <div class="form-field">
                <label>Id</label>
                <span><input type="number" name="Id" v-model="postForm.id" /></span>
            </div>
            <div class="form-field">
                <label>userId</label>
                <span><input type="number" name="UserId" v-model="postForm.userId" /></span>
            </div>            
            <div class="form-field">
                <label>Title</label>
                <span><input type="text" name="title" v-model="postForm.title" /></span>
            </div>
            <div class="form-field">
                <label>Completed</label>
                <span>
                    <input type="radio" value='true' id='true' v-model="postForm.completed" />
                    <label for='true'> True</label>
                </span>
                <span>
                    <input type="radio" value='false' id='false' v-model="postForm.completed" />
                    <label for='false'> False</label>
                </span>
            </div>     
            <button type="submit">Post</button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default{
    name:"PostUser",
    data(){
        return{
            postForm: {
                userId:null,
                id:null,
                title:null,
                completed:null
            }
        }
    },
    methods:{
        postUser(e){
            console.log('hi', this.postForm)
            e.preventDefault()
        },
    }
}

</script>

<style>
    body {
        font-family: 'Roboto', sans-serif;
    }

    .form-field {
        margin: 10px auto;
    }
    .form-field span {
        margin: 0 5px;
    }
</style>
