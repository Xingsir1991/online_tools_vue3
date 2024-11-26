<template>
  <div class="group">
    <div class="item" v-for="item in navigation_website">
      <p class="title">
        {{ item.title }}
      </p>
      <div class="content">
        <vxe-tabs>
          <vxe-tab-pane
            :title="childItem.tab_name"
            :name="childItem.tab_id"
            v-for="childItem in item.tabs"
          >
            <div class="tab_content">
              <div
                v-for="childItem2 in childItem.tab_content"
                class="content_card"
                @click="toNewPage(childItem2.href)"
              >
                <div class="tab_content_img">
                  <img
                    :src="getImagePath(childItem2.image_path)"
                    :alt="childItem2.content"
                  />
                </div>
                <p>{{ childItem2.content }}</p>
              </div>
            </div>
          </vxe-tab-pane>
        </vxe-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import navigation_website from "@/jsonData/navigation_website.json";

const getImagePath = (imagePath) => {
  // 使用 Vite 的动态路径解析
  return new URL(`../../assets/${imagePath}`, import.meta.url).href;
};
const toNewPage = (href) => {
  window.open(href, "_blank", "noopener,noreferrer");
};
</script>

<style scoped>
.item {
  margin-bottom: 20px;
}
.tab_content {
  display: flex;
  flex-wrap: wrap;
  .content_card {
    display: flex;
    align-items: center;
    width: 25%;
    padding: 12px 16px;
    cursor: pointer;
    border-radius: 4px;
    .tab_content_img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      border-radius: 40px;
      overflow: hidden;
      background-color: var(--vxe-ui-font-primary-tinge-color);
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
}
.content_card:hover {
  background-color: var(--vxe-ui-font-primary-tinge-color);
}
.group {
  padding: 20px;
  height: 100%;
  overflow: auto;
}
.title {
  font-size: 18px;
  margin-bottom: 16px;
  i {
    font-size: 20px;
    margin-right: 10px;
  }
}
</style>
