import { useDataStore } from '@/stores/isAuth';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Start',
        component: () => import('@/views/dashboard/StartView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: ()=> import('@/views/login/LoginView.vue')
    },
    {
        path: '/client',
        name: 'Client',
        component: ()=> import('@/views/client/IndexView.vue')
    }
  ]
});


// Middle ware
router.beforeEach((to, from, next)=>{
    // Utilizar la store
    const getDataStore = useDataStore();
    // LLamar el metodo para obtener los datos
    getDataStore.getData();

    console.log(getDataStore.token);
    next();

});

export default router
