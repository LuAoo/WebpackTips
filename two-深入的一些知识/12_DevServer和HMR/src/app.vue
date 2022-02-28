<template>
  <h1>{{ obj.name }}</h1>
  <div>我是App组件</div>
</template>
<script>
import { reactive, ref } from "vue";
export default {
  name: "App",
  setup() {
    const obj = reactive({ name: "张三" });
    return {
      obj,
    };
  },
};
</script>
<style scoped lang="less">
h1 {
  color: aqua;
}
</style>
