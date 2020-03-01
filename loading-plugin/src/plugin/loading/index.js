import Loading from './loading'
/*
* 如果要将一个组件封装成一个插件，必须提供一个install方法
* */
export default {
  install: function (Vue, options) {
    // 1.根据组件生成一个构造函数
    const LoadingConstructor = Vue.extend(Loading)
    // 2.根据构造函数创建实例对象
    const LoadingInstance = new LoadingConstructor()
    // 3.随便创建一个标签
    const oDiv = document.createElement('div')
    // 4.将创建好的标签添加到界面上
    document.body.appendChild(oDiv)
    // 5.将创建好的实例对象挂载到创建好的元素上
    LoadingInstance.$mount(oDiv)

    Vue.prototype.$showLoading = function (title = '努力加载中...') {
      LoadingInstance.title = title
      LoadingInstance.isShow = true
    }
    Vue.prototype.$hiddenLoading = function () {
      LoadingInstance.isShow = false
    }
  }
}
