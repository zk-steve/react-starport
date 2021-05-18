import { App as Application } from 'react'
import SpStatusWS from './SpStatusWS.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpStatusWS)
	},
}

export default SpStatusWS
