<template>
         <div className="navbar bg-purple-700 text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-view/>
            </ul>
            </div>
            <router-link to='/home' className="btn btn-ghost normal-case text-xl">Mahmudul Islam</router-link>
             <a href="../../public/Mohammad Mahmudul Islam-Front-End.pdf" target="_blank" download>Download Resume</a>
             <a href="#skills" class="mx-2">Skills</a>
              <a href="#projects" class="mx-2">Projects</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              
            </ul>
        </div>
            
        </div>
</template>
<script>

</script>
