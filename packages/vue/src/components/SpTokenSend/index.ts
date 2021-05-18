import { App as Application } from 'react'
import SpTokenSend from './SpTokenSend.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpTokenSend)
	},
}

export default SpTokenSend
