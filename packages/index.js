import Button from './button'
import toolTip from './button'

const components = [
    Button,
    toolTip
]
//创建install方法注册组建
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
//执行注册组建
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    Button
}
