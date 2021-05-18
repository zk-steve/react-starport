import { App as Application } from 'react'

const config = {}

export let VueInstance: Application

export { config as default }

export const setVueInstance = (instance: Application): void => {
	VueInstance = instance
}
