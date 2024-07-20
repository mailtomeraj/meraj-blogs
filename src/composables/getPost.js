import { ref } from "vue";
import { projectFirstore } from "@/firebase/config";
const getPost = (id) => {
const post = ref(null);
const error = ref(null);

const load = async () => {
  try {
        let res = await projectFirstore.collection('posts').doc(id).get()
         post.value = {...res.data(), id: res.id}
         console.log(post.value)

    //  let data = await fetch('http://localhost:3000/posts/'+id);
    // console.log(data);
    // if (!data.ok) {
    //   throw Error("no data available");
    // }
    // post.value = await data.json();
  } catch (err) {
    error.value = err.message;
  }
};

// onMounted(()=>{
//   load()
// })
 return {post, error, load}
}

export default getPost