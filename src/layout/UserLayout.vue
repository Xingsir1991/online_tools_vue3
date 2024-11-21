<template>
  <div class="uer-layout">
    <div class="left">
      <div class="top">
        <p>在线工具站</p>
      </div>
      <div class="mid">
        <ul>
          <li
            @click="routePush('OnlineTools')"
            :class="route.name == 'OnlineTools' ? 'active' : ''"
          >
            <i class="iconfont icon-codelibrary"></i>
            在线工具
          </li>
          <li
            @click="routePush('NavigationWebsite')"
            :class="route.name == 'NavigationWebsite' ? 'active' : ''"
          >
            <i class="iconfont icon-appstore"></i>
            导航网站
          </li>
        </ul>
      </div>
      <div class="bottom">
        <i class="iconfont icon-wechat-fill"></i>
        <i class="iconfont icon-QQ"></i>
        <i class="iconfont icon-github-fill"></i>
      </div>
    </div>
    <div class="right"><RouterView /></div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const routePush = (name) => {
  // 获取路由实例
  router.push({ name: name });
};
</script>

<style scoped>
.uer-layout {
  display: flex;
  height: 100%;
  .left {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-right: 1px solid var(--border-color);
    width: 240px;
    .top {
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      font-size: 24px;
      font-weight: 600;
      border-bottom: 1px solid var(--border-color);
    }
    .mid {
      flex: 1;
      overflow: auto;
      ul {
        padding: 20px;
        li {
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          border-radius: 6px;
          padding-left: 15px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          i {
            font-size: 18px;
            color: var(--secondary-font-color);
            margin-right: 6px;
          }
          &.active {
            background-color: var(--vxe-ui-font-primary-tinge-color);
            i {
              color: var(--vxe-ui-font-primary-color);
            }
          }
        }
      }
    }
    .bottom {
      height: 50px;
      line-height: 50px;
      display: flex;
      padding: 0 60px;
      justify-content: space-between;
      align-items: center;
      i {
        color: var(--secondary-font-color);
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .right {
    flex: 1;
    padding: 30px;
  }
}
</style>
