<template>
  <div id="app">
    <button @click="showLoading">显示加载框</button>
    <button @click="hiddenLoading">隐藏加载框</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    showLoading: function () {
      this.$showLoading('我在加载中...')
    },
    hiddenLoading: function () {
      this.$hiddenLoading()
    }
  }
}
</script>

<style>

</style>
