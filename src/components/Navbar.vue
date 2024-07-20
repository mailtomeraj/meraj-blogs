
<script setup>

</script>
<template>
    
<header><h1>The Meraj Blog</h1>
<nav>
    <router-link to="/">Home</router-link>
    <router-link to="/create">Create Post</router-link>
</nav>
</header>

</template>


<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 0
}
header h1{
    color: #dfdfdf;
    font-size: 48px;
    font-weight: 600
}
header a {
    color: #bbb;
    text-decoration: none;
    margin-left:20px;
}
header a.router-link-active{
    color:#aaa;
    font-weight: bold;
}

</style>