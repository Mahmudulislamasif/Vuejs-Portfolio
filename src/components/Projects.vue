<template>
<div class="">
<div class="grid grid-cols-1 md:grid-cols-3 gap-2 mx-4 ">
  <div v-for="project in projects" :key="project.id" className=" text-white bg-gray-800 p-3 rounded">
    <div>
    <img :src="project.image" alt="" class="mx-auto"/>
    <p class="text-2xl mt-3">{{project.name}}</p>
    <p>{{project.describe}}</p>
    <p className="text-left">Technology:{{project.technology}}</p>
         <div class="flex justify-between">
              <a className="bg-pink-500 w-1/2 mx-2 rounded text-white text-center " :href="project.live" alt=''>Live Site</a>
              <a className="bg-pink-500 w-1/2 mx-2 rounded text-white text-center" :href="project.client" alt=''>Client Site</a>
                <a v-if=project.server className="bg-pink-500 w-1/2 mx-auto rounded text-white text-center" :href="project.server" alt=''>Server site</a>
              
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
   @import url('https://fonts.googleapis.com/css2?family=Oswald&family=Poppins&family=Roboto&family=Work+Sans:wght@600&display=swap')
   
   
</style>