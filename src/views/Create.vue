<script setup>
import { projectFirstore, timestamp } from "@/firebase/config";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const title = ref("");
const body = ref("");
const tag = ref("");
const tags = ref([]);

const handleKeydown = () => {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/, "");
    tags.value.push(tag.value);
  }
  tag.value = "";
}

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: timestamp()
  };

  const res = await projectFirstore.collection('posts').add(post)
  console.log(res)
  // await fetch("http://localhost:3000/posts", {
  //   method: "POST",
  //   headers: { "Content-type": "application/json" },
  //   body: JSON.stringify(post),
  // });
  router.push('/')
};
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Title :</label>
      <input type="text" v-model="title" />
      <label>Content :</label>
      <textarea v-model="body"></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />
      <div v-for="tag in tags" :key="tag" class="pills">
        #{{ tag }}
      </div>
      <button>Add a Post</button>
    </form>
  </div>
</template>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
  width: 100%;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: hsla(160, 100%, 37%, 1);
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background:hsla(160, 100%, 37%, 1);
  color: #444;
  background: #ddd;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pills {
  display: inline-block;
  background: #ddd;
  margin: 10px 10px 0 0;
  color: #444;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
