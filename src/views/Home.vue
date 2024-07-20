<script setup>
import { onMounted, ref } from "vue";
import PostList from "@/components/PostLists.vue";
import getPosts from "@/composables/getPosts";
import Spinner from "@/components/Spinner.vue"
import TagCloud from "@/components/TagCloud.vue"
const {posts, error, load} = getPosts()
onMounted(()=>{
  load()
})
</script>
<template>
  
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="box">
     
      <PostList :posts="posts" />
      
      <TagCloud :posts="posts"/>
    
    </div>
    <div v-else><Spinner/></div>
  
</template>

<style scoped>
.box{
 display: flex;
 padding: 20px 50px 20px 0
}
</style>

<!-- <script setup>
import { ref, computed } from 'vue';
import PostList from "@/components/PostLists.vue"
const names = ref([
  "mario",
  "yousi",
  "luigi",
  "toad",
  "bowser",
  "koopa",
  "peach",
]);
const search = ref('')
const matchingNames = computed(()=>{
  return names.value.filter((name)=>name.includes(search.value))
})

const posts = ref([
  { title : "welcome to the blog", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", id:1},
  { title : "Top 5 CSS tips", body:"Lorem ipsum Lorem ipsum", id:2},
  { title : "Vue Js Learning curve", body:"Lorem ipsum Lorem ipsum", id:3}
  ])
</script>

<template>
  <main>
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p class="search">Search Terms - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <PostList :posts="posts" />
  </main>
</template>

<style  scoped>
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 20px 0;
  box-sizing: border-box;
}
.search{
  font-weight: bold;
}
</style>
 -->
