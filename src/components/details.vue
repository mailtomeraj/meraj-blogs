<template>
    <div v-if="error">
{{ error }}
    </div>
    <div v-if="post" class="post">
    <h3 style="padding-top:30px;font-weight: 600; font-size:24px; text-transform:capitalize; color:hsla(160, 100%, 37%, 1);">{{post.title}}</h3>
    <p class="pre">{{post.body}}</p>
    <button @click="handleDelete" style="background:red; padding:10px 20px; border:0; border-radius:6px; color:#fff; margin-top:20px; cursor:pointer">Delete Post</button>
    </div>
    <div v-else><Spinner/></div>
</template>

<script setup>
import getPost from '@/composables/getPost'
import Spinner from './Spinner.vue';
import { projectFirstore } from '@/firebase/config';
import { useRouter, useRoute } from 'vue-router';
const props= defineProps({
    id:String
})

const route = useRoute()
const router = useRouter()
const handleDelete = async () => {
 await projectFirstore.collection('posts').doc(props.id).delete()
 router.push('/')
}


const {post,error,load}= getPost(props.id)
load()


</script>

<style scoped>
.post{
    max-width: 1200px;
    margin:0 auto;
}
.post p{
    color:#444;
    line-height: 1.5em;
    margin-top:40px;
}
.pre{
    white-space: pre-wrap;
    line-height:1.2
}
</style>