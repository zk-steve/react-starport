import { App as Application } from 'react'
import SpStatusLED from './SpStatusLED.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpStatusLED)
	},
}

export default SpStatusLED
