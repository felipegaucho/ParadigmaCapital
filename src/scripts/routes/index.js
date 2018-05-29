import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '../components/pages/Home'
import PageAbout from '../components/pages/About'
import PageRead from '../components/pages/Read'
import PageContact from '../components/pages/Contact'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: PageHome,
        name: 'Homepage'
    },
    {
        path: '/about',
        component: PageAbout,
        name: 'About'
    },
    {
        path: '/read',
        component: PageRead,
        name: 'Read'
    },
    {
        path: '/contact',
        component: PageContact,
        name: 'Contact'
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})

export default routes