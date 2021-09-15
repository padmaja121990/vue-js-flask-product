<template>
    <div>
        <form @submit="postProduct" method="post" >
            <div class="form-field">
                <label>Id</label>
                <span><input type="number" name="product_id" v-model="posts.product_id"/></span>
            </div>
            <div class="form-field">
                <label>Name</label>
                <span><input type="text" name="product_name" v-model="posts.product_name"/></span>
            </div>
            <div class="form-field">
                <label>Type</label>
                <span><input type="text" name="product_type" v-model="posts.product_type"/></span>
            </div>
            <div class="form-field">
                <label>Price</label>
                <span><input type="number" name="product_price" v-model="posts.product_price" /></span>
            </div>        
            <div class="form-field">
                <label>Color</label>
                <span><input type="text" name="product_color" v-model="posts.product_color" /></span>
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
    name:"PostProduct",
    data(){
        return{
            posts:{
                product_id: null,
                product_name: null,
                product_type: null,
                product_price: null,
                product_color: null
            }
        }

    },
    methods:{
        postProduct(e){
            console.warn(this.posts)
            this.axios.post("http://localhost:5000/products", this.posts)
            .then((result)=>
                console.warn(result))
            e.preventDefault();
        }
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
