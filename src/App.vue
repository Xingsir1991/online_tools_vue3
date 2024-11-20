<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <vxe-button icon="vxe-icon-add" circle></vxe-button>
    <vxe-button status="primary" icon="vxe-icon-save" circle></vxe-button>
    <vxe-button status="success" icon="vxe-icon-print" circle></vxe-button>
    <vxe-button
      status="info"
      icon="vxe-icon-question-circle"
      circle
    ></vxe-button>
    <vxe-button status="warning" icon="vxe-icon-search" circle></vxe-button>
    <vxe-button status="error" icon="vxe-icon-delete" circle></vxe-button>
  </div>
  <p>
    <vxe-button content="默认禁用颜色" disabled></vxe-button>
    <vxe-button status="primary" content="主要禁用颜色" disabled></vxe-button>
    <vxe-button status="success" content="成功禁用颜色" disabled></vxe-button>
    <vxe-button status="info" content="信息禁用颜色" disabled></vxe-button>
    <vxe-button status="warning" content="警告禁用颜色" disabled></vxe-button>
    <vxe-button status="error" content="错误禁用颜色" disabled></vxe-button>
  </p>
  <p>
    <vxe-button mode="text" content="默认禁用颜色" disabled></vxe-button>
    <vxe-button
      mode="text"
      status="primary"
      content="主要禁用颜色"
      disabled
    ></vxe-button>
    <vxe-button
      mode="text"
      status="success"
      content="成功禁用颜色"
      disabled
    ></vxe-button>
    <vxe-button
      mode="text"
      status="info"
      content="信息禁用颜色"
      disabled
    ></vxe-button>
    <vxe-button
      mode="text"
      status="warning"
      content="警告禁用颜色"
      disabled
    ></vxe-button>
    <vxe-button
      mode="text"
      status="error"
      content="错误禁用颜色"
      disabled
    ></vxe-button>
  </p>
</template>
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
