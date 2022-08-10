
<template>
  <Navbar></Navbar>
  <Home></Home>
  <Footer></Footer>

</template>

<script>
import Home from '../src/View/Home.vue'
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'
export default
{
   name:"App",
   components:{
    Navbar:Navbar,
    Home: Home,
    Footer:Footer
}
}
</script>



<style>

</style>
