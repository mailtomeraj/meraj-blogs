import { ref } from "vue";
import { projectFirstore } from "@/firebase/config";
const getPosts = () => {
const posts = ref([]);
const error = ref(null);

const load = async () => {
  try {
    const res = await projectFirstore.collection('posts').get()
    // console.log(res.docs)
    posts.value = res.docs.map(doc =>{
        console.log(doc.data())
        return{
          ...doc.data(), id: doc.id
        }
    })
    //  let data = await fetch("http://localhost:3000/posts");
    // console.log(data);
    // if (!data.ok) {
    //   throw Error("no data available");
    // }
    // posts.value = await data.json();
  } catch (err) {
    error.value = err.message;
  }
};

// onMounted(()=>{
//   load()
// })
 return {posts, error, load}
}

export default getPosts