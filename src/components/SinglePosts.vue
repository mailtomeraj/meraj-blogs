<template>
  
  
    <router-link :to="`posts/${post.id}`">
      <p style="font-weight: 600; font-size:24px; text-transform:capitalize">   {{ post.title }}</p></router-link
    >
    <p style=" color:#aaa">{{ snippet }}</p>
    <span v-for="tag in props.post.tags" :key="tag"> #{{ tag }} </span>
  
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["post"]);

const snippet = computed(() => {
return props.post.body?.substring(0, 100) + "...";

});
</script>

<style lang="scss" scoped></style>
