<template>
  <div class="group">
    <div class="item" v-for="item in toolsList">
      <p class="title">
        <i class="iconfont" :class="item.icon"></i>{{ item.title }}
      </p>
      <div class="content">
        <div class="content_group" v-for="childItem in item.child">
          <div class="content_title">{{ childItem.title }}</div>
          <div class="content_item" v-if="childItem.name === 'magnet-merge'">
            <vxe-input v-model="magnetVal" placeholder="请输入磁力码">
            </vxe-input>
            <div class="content_msg" @click="copyMagnetMergeVal">
              <p>
                {{ magnetMergeVal }}
              </p>
            </div>
          </div>
          <div class="content_item" v-if="childItem.name === 'baidu-merge'">
            <vxe-input v-model="baiduVal" placeholder="请输入百度网盘码">
            </vxe-input>
            <div class="content_msg" @click="copyBaiduMergeVal">
              <p>
                {{ baiduMergeVal }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { VxeUI } from "vxe-pc-ui";
import { toolsList } from "./config";
import { useClipboard } from "@vueuse/core";
const { copy } = useClipboard();

const magnetVal = ref("");
const magnetMergeVal = computed(() => {
  return "magnet:?xt=urn:btih:" + magnetVal.value;
});

const copyMagnetMergeVal = () => {
  copy(magnetMergeVal.value);
  VxeUI.modal.message({
    id: "myUniqueMsg",
    content: "复制成功",
    status: "success",
  });
};

const baiduVal = ref("");
const baiduMergeVal = computed(() => {
  return "https://pan.baidu.com/" + baiduVal.value;
});
const copyBaiduMergeVal = () => {
  copy(baiduMergeVal.value);
  VxeUI.modal.message({
    id: "myUniqueMsg",
    content: "复制成功",
    status: "success",
  });
};
</script>

<style scoped>
.item {
  margin-bottom: 20px;
}
.group{
  padding: 20px;
}
.title {
  font-size: 18px;
  margin-bottom: 16px;
  i {
    font-size: 20px;
    margin-right: 10px;
  }
}
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.content_group {
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  width: calc(25% - 50px);
  &:hover {
    border-color: transparent;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .vxe-input {
    width: 100%;
  }
  .content_title {
    font-size: 14px;
    color: var(--secondary-font-color);
    margin-bottom: 16px;
  }
  .content_msg {
    margin-top: 12px;
    padding: 12px;
    font-size: 14px;
    background-color: var(--vxe-ui-font-primary-tinge-color);
    overflow: hidden; /* 隐藏超出内容 */
    white-space: nowrap; /* 不换行 */
    cursor: pointer;
    p {
      display: inline-block;
      animation: scroll 10s linear infinite; /* 定义滚动动画 */
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(100%); /* 从右边开始 */
  }
  100% {
    transform: translateX(-100%); /* 向左滚动直到隐藏 */
  }
}
</style>
