<template>
    <!-- <h1 class="posts">Post Blogs</h1> -->
    <div>
    <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"/>
</div>
    </div>
</template>

<script setup>
import SinglePost from "@/components/SinglePosts.vue"
defineProps(['posts'])
</script>

<style  scoped>
.posts{
    color:#aaa;
    padding:30px 0 20px 0;
}
</style>