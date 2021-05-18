import { App as Application } from 'react'
import SpCard from './SpCard.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpCard)
	},
}

export default SpCard
