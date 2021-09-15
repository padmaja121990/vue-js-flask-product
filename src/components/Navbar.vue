<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link class="navbar-brand text-style" to='/'>Flask and Vue3</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="btn btn-primary" aria-current="page" to='/'>Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-success" to='/create'>Create</router-link>
        </li>   
        <li class="nav-item">
          <router-link class="btn btn-success" to='/get'>Get</router-link>
        </li>  
        <li class="nav-item">
          <router-link class="btn btn-success" to='/post'>Post</router-link>
        </li>                     
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default{

}
</script>

<style>
.text-style{
    font-size: 40px;
    font-family: Italic; 
}
</style>