import toolTip from './src/toolTip'
toolTip.install = function(Vue) {
    Vue.component(toolTip.name,toolTip)
}
export default toolTip;