/**
 * hh
 */
import { ElMessage } from 'element-plus'

export default {
	mounted(el: any, binding: any) {
		el.$value = binding.value
		el.handler = () => {
			// navigator.clipboard.writeText(el.$value)
			// 	.then(() => {
			// 		ElMessage.success("复制成功")
			// 	})
			// 	.catch(err => {
			// 		// This can happen if the user denies clipboard permissions
			// 		ElMessage.error('无法复制此文本：', err)
			// 	})
			//ce's
			const textarea = document.createElement('textarea')
			textarea.readOnly = false
			textarea.style.position = 'absolute'
			textarea.style.left = '-9999px'
			textarea.value = el.$value
			document.body.appendChild(textarea)
			textarea.select()
			textarea.setSelectionRange(0, textarea.value.length)
			const result = document.execCommand('Copy')
			if (result) {
				ElMessage.success("复制成功")
			}
			document.body.removeChild(textarea)



		}
		el.addEventListener('click', el.handler)
	},
	updated(el: any, binding: any) {
		el.$value = binding.value
	},
	unmounted(el: any) {
		el.removeEventListener('click', el.handler)
	}
}
