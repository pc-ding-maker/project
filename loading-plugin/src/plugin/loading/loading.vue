<template>
    <div>
        <div class="container" v-show="isShow">
            <div class="loading"></div>
            <p class="title">{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      title: '努力加载中...',
      isShow: true
    }
  }
}
</script>

<style scoped>
.container{
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(33, 33, 33, 0.5);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.container .loading{
  width: 80px;
  height: 80px;
  border: 2px solid white;
  border-right-color: #007aff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  animation: loading 2s linear infinite;
}
  .container .title{
    text-align: center;
    margin-top: 140px;
    color: ghostwhite;
  }
@keyframes loading {
  from{
    transform: translate(-50%,-70%) rotate(0deg);
  }
  to{
    transform: translate(-50%,-70%) rotate(360deg);
  }
}
</style>
