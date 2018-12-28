<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './../../components/todo/header'
  import Footer from './../../components/todo/footer'
  import Todo from './../../components/todo/todo'

  export default {
    components: {
      Header,
      Footer,
      Todo
    }
  }
</script>

<style>
  #app {
    position: relative;
    height: 100%;
    background: url("./../../assets/images/bg.png") no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-color: red;
    z-index: 0;
  }
  #cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #999;
    opacity: .5;
    z-index: -1;
  }
</style>
