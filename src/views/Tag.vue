<script setup>
import Spinner from '@/components/Spinner.vue';
import PostLists from '@/components/PostLists.vue';
import getPosts from '@/composables/getPosts';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import TagCloud from '@/components/TagCloud.vue';

const route = useRoute()
const {posts, error, load} = getPosts()

load()

const postsWithTag = computed(() => {
  return posts.value.filter((p) => p.tags.includes(route.params.tag))
    
})
console.log(postsWithTag.value)
</script>

<template>
    <div class="tag">
  <div v-if="error">{{error}}</div>
  <div v-if="posts.length" class="tag-cloud">
    <PostLists :posts="postsWithTag"/>
    <TagCloud :posts="posts"/>
  </div>
  <div v-else><Spinner/></div>
    </div>
</template>


<style scoped>
.tag-cloud{

}
</style>