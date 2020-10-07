import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/page'
        },
        {
            path:'/page',
            component:() => import('../views/page/index.vue'),
            redirect:"/page/goods",
            children:[
                {
                    path:'goods',
                    name:'Goods',
                    component:() => import('../views/page/goods/index.vue')
                },
                {
                    path:'eval',
                    name:'Eval',
                    component:() => import('../views/page/eval/index.vue')
                },
                {
                    path:'merch',
                    name:'Merch',
                    component:() => import('../views/page/merch/index.vue')
                }
            ]
        },
        {
            path:'/deta',
            component:() => import('../views/deta/index.vue')
        }
    ]
})

export default router