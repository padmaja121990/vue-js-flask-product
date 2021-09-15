<template>
    <div>
        <h1>Products</h1>
        <table border=1px>
            <tr>
                <td>Pid</td>
                <td>Pname</td>
                <td>Ptype</td>
                <td>Pprice</td>
                <td>Pcolor</td>
            </tr>
            <tr v-for="product in 5" :key="product.id">
                <td>{{ product.product_id }}</td>
                <td>{{ product.product_name }}</td>
                <td>{{ product.product_type }}</td>
                <td>{{ product.product_price }}</td>
                <td>{{ product.product_color }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default{
    name: 'Products',
    data(){
        return {products: null}
    },
    mounted(){
        Vue.axios.get("http://localhost:5000/products")
        .then((resp)=>{
            this.products = resp.data.data;
            console.log("products", this.products)
        })
    }
}
</script>
<style></style>