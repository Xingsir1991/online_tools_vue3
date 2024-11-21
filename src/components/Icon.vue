<template>
  <i :class='`${iconFontAllName}`' :style="{ fontSize: `${size}px`, color: color }"></i>
</template>

<script setup>

import { computed } from 'vue';
const props = defineProps({
  // icon 名称 必传 否则报错
  iconName: {
      type: String,
      required: true,
  },
  // icon 大小  单位rem 默认 1  
  size: {
      type: Number,
      default: 14
  },
  // icon 颜色  默认  粉色
  color: {
      type: String,
      default: 'var(--secondary-font-color)'
  }
});
// 拼接 class
const iconFontAllName = computed(() => {
  if (props.iconName) {
      return `iconfont ${props.iconName}`
  }
});
</script>

