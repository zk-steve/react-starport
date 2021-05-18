import { createRouter, createWebHistory } from 'react-router'
import Index from '@/views/Index.react'
import Types from '@/views/Types.react'
import Relayers from '@/views/Relayers.react'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/types', component: Types },
	{ path: '/relayers', component: Relayers }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
