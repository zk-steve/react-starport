import { App as Application } from 'react'
import SpTypeForm from './SpTypeForm.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpTypeForm)
	},
}

export default SpTypeForm
