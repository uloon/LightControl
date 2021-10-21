import VueRouter from 'vue-router'
// 引入组件
import Imageview from '../pages/Imageview'
import Textview from '../pages/Textview'
import Homepage from '../pages/Homepage'
// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/imageview',
            component: Imageview
        },
        {
            path: '/textview',
            component: Textview
        },
        {
            path: '/',
            component: Homepage
        }
    ],
})