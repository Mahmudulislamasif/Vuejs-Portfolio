
<template>
  
  <Header></Header>
  <Skills></Skills>
  <Projects></Projects>
  <AboutMe></AboutMe>
</template>

<script>

import Header from '../components/Header.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import AboutMe from '../components/AboutMe.vue'
export default
{
   name:"App",
   components:{
    Header:Header,
    Skills:Skills,
    Projects:Projects,
    AboutMe:AboutMe
   }
}
</script>



<style>

</style>
