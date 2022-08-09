
<template>
  <Navbar></Navbar>
  <Header></Header>
  <Skills></Skills>
  <Projects></Projects>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
export default
{
   name:"App",
   components:{
    Navbar:Navbar,
    Header:Header,
    Skills:Skills,
    Projects:Projects
   }
}
</script>



<style>

</style>
