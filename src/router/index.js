import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '@/views/ShopView.vue'
import AdminLayout from '@/views/admin/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShopView
    },
    {
      path: '/admin',
      name: 'admin',
      component:  () => AdminLayout,
      children: [
        {
      path: 'productos',
      name: 'products',
      component:  () => import('../views/admin/ProductsView.vue')
    }
      ]
    },
    
  ],
})

export default router
