import Vue from 'vue'
import VueRouter from 'vue-router'
const InboundForm = () => import('@/components/inbound-form.vue')
const SuccessMessage = () => import('@/components/success-message.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
		{
			path: '/',
			name: 'landing-page',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: InboundForm
		},
		{
			path: '/success',
			name: 'success',
			component: SuccessMessage
		}
	]
})

export default router
