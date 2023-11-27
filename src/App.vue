<script>
import ReuseableOption from "./components/ReuseableOption.vue";

export default {
  components: {
    ReuseableOption,
  }
};
</script>

<template>
  <div class="main-screen">
    <reuseable-option :placeholder="'Nhập tên thành phố để tìm kiếm...'"/>
  </div>
</template>

<style lang="scss" scoped>
.main-screen {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>