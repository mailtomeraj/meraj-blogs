<template>
<div>
<h3>Tags</h3>
<div v-for="tag in tags" :key="tag">
   <router-link :to="{name:'Tag', params:{tag:tag}}"> #{{ tag }}</router-link>

</div>
</div>
</template>

<script setup>
import useTags from '@/composables/useTags';

const props = defineProps(['posts'])

const {tags} = useTags(props.posts)
// return tags

</script>

<style>

</style>