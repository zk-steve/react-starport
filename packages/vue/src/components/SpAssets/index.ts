import { App as Application } from 'react'
import SpAssets from './SpAssets.vue'

import { registerComponent } from '../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpAssets)
	},
}

export default SpAssets
