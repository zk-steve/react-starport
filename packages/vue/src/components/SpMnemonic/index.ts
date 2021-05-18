import { App as Application } from 'react'
import SpMnemonic from './SpMnemonic.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpMnemonic)
	},
}

export default SpMnemonic
