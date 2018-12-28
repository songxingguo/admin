<template>
  <a-layout id="components-layout-demo-custom-trigger" class="app">
    <a-layout-sider
            :trigger="null"
            collapsible
            v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" modse="inline" :defaultSelectedKeys="['1']"
              @click="menuClick">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>待办事项列表</span>
        </a-menu-item>
        <!--<a-sub-menu key="2">-->
          <!--<span slot="title"><a-icon type="eye-o" /><span>我的</span></span>-->
          <!--<a-menu-item key="2-1">待办事项列表</a-menu-item>-->
        <!--</a-sub-menu>-->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    data(){
      return {
        collapsed: false,
      }
    },
    methods: {
      menuClick({key}) {
        const parentPath = '/main'
        const targetPath = {
          1: '/todo',
          '2-1': '/todo'
        }[key]
        this.$router.push(`${parentPath}${targetPath}`)
      }
    }
  }
</script>
<style>
  .app {
    height: 100%;
    margin: 0;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }
  
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
  
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
</style>
