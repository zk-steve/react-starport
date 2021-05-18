import { App as Application } from 'react'
import SpLayout from './SpLayout.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpLayout)
	},
}

export default SpLayout
