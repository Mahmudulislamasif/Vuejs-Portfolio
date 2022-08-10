import { createRouter, createWebHistory } from "vue-router"
import Home from '../View/Home.vue'
import About from '../View/About.vue'
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:
    [
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/about',
            name:'About',
    
            component:()=>import('../View/About.vue')
        }
      

    ]
})
   



export default router