import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
    {
        path: '/',
        name: 'users',
        component:() => import("../components/Users")
    },
    {
        path: '/create',
        name: 'create',
        component: () => import("../components/Create")
    },
    {
        path: '/get',
        name: 'get',
        component: () => import("../components/getProduct")
    },
    {
        path: '/post',
        name: 'postproducts',
        component: () => import("../components/PostProduct")
    }             
]
})

