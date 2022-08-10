<template>
<div class="" id="projects">
  <h1 class="text-5xl text-center text-purple-700 my-3">Projects</h1>
<div class="grid grid-cols-1 md:grid-cols-3 gap-2 mx-4 ">
  <div v-for="project in projects" :key="project.id" className=" text-white bg-gray-800 p-3 rounded">
    <div>
    <img :src="project.image" alt="" class="mx-auto"/>
    <p class="text-2xl mt-3 text-center">{{project.name}}</p>
    <p class="my-3">{{project.describe}}</p>
    <p className="text-left my-3">Technology:{{project.technology}}</p>
         <div class="flex justify-between">
              <a  target=”_blank” className="bg-pink-500 w-1/2 mx-2 rounded text-white text-center " :href="project.live" alt=''>Live Site</a>
              <a  target=”_blank” className="bg-pink-500 w-1/2 mx-2 rounded text-white text-center" :href="project.client" alt=''>Client Site</a>
                <a  target=”_blank” v-if=project.server className="bg-pink-500 w-1/2 mx-auto rounded text-white text-center" :href="project.server" alt=''>Server site</a>   
         </div>
    </div>
  </div>
 </div>
</div>
</template>

<script>
 import data from '../assets/data.json'
 export default {
  data() {
    return {
      projects: data,
    };
  },
};
</script>
<style scoped>
 
   
   
</style>