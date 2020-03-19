import Button from './src/button'
Button.install = function(Vue) {
    Vue.components(Button.name,Button)
}
export default Button