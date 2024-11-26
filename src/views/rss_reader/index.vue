<template>
  <div class="content">
    <div class="top">
      <span>RSSHub</span>
      <span
        >本站rss规则来自<a href="https://docs.rsshub.app/zh/" target="_blank"
          >RSSHub</a
        ></span
      >
    </div>
    <div class="btm">
      <div class="left">
        <div class="rss_group">
          <div class="rss_item" v-for="item in rssData" :key="item.id">
            <div class="rss_item_title">{{ item.title }}</div>
            <ul>
              <li
                :class="activeChildId === feed.id ? 'active' : ''"
                v-for="feed in item.child"
                :key="feed.id"
                @click="selectFeed(feed)"
              >
                {{ feed.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">111</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import rssData from "@/jsonData/rsshub.json";
import { parseStringPromise } from "xml2js";
// 当前激活的子项 ID
const activeChildId = ref(null);
const selectFeed = (feed) => {
  activeChildId.value = feed.id;
  fetchRss(feed.url);
};
const fetchRss = async (url) => {
  try {
    // 获取 RSS 数据
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const rssText = await response.text();

    // 使用 xml2js 解析 XML
    const rssData = await parseStringPromise(rssText);

    // 提取标题和链接等数据
    const feed = rssData.rss.channel[0].item.map((item) => ({
      title: item.title[0],
      link: item.link[0],
      description: item.description ? item.description[0] : "No Description",
    }));

    console.log(feed); // 输出解析后的数据
    return feed;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
  }
};
</script>

<style scoped>
.content {
  height: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .top {
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-left: 20px;
    span {
      &:last-child {
        color: var(--secondary-font-color);
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }
  .btm {
    flex: 1;
    display: flex;
  }
  .left {
    background-color: #fff;
    width: 160px;
    border-right: 1px solid var(--border-color);
  }
  .right {
    flex: 1;
  }
  .rss_group {
    .rss_item_title {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      padding-left: 10px;
      font-weight: 600;
    }
    ul {
      padding-left: 10px;
      color: var(--secondary-font-color);
      li {
        height: 32px;
        padding-left: 16px;
        line-height: 32px;
        cursor: pointer;
        &:hover {
          color: var(--vxe-ui-font-primary-color);
        }
        &.active {
          color: var(--vxe-ui-font-primary-color);
        }
      }
    }
  }
  .rss_item {
    margin-bottom: 10px;
  }
}
</style>
