<template>
  <!-- 因Navbar元件內有router-link, 故當點擊navbar項目後的結果, 將會顯示在下方此處對應的router-view區域 -->
  <router-view></router-view>
</template>

<script>
export default {
  // 為此元件命名
  name: 'App',
};
</script>

<style scoped>
</style>
