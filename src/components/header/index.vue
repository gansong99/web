<template>
  <div class="m-header">
    <el-row>
      <top-Bar />
    </el-row>
    <el-row>
      <search-Bar />
    </el-row>
  </div>
</template>
<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/index.scss';
@import '@/assets/css/public/header/search.scss';
</style>
