<template>
  <div class="header_box">
    <nav class="navbar navbar-expand-md fixed-top navbar-light p-2">
      <router-link active-class="active" to="/main">
      <div class="navbar-brand text-left" style="margin-left: 70px">
        <img src="../assets/images/logo.png" alt="" style="height: 50px">
      </div>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav">
          <router-link active-class="active" to="/plant" style="text-decoration: none;">
          <li class="nav-item active mr-5 ml-5 text-right">
           <div style="color: black">Plant tree</div>
          </li>
          </router-link>
        </ul>
      </div>
      <router-link active-class="active" to="/user">
      <div class="navbar-brand text-left mt-0">
        <div class="row align-items-center justify-content-end">
          <div class="col-6">
            <img src="../assets/images/badge.png" alt="" style="height: 30px;">
          </div>
          <div class="col-6">
            <i class="fas fa-user-circle" style="color: lightblue; font-size: 40px"></i>
          </div>
        </div>
      </div>
      </router-link>

    </nav>
  </div>
</template>

<script>
    export default {
      mounted () {
        
        $('.header_box')
      }
    }
</script>

<style scoped>
  .header_box{
    transition: .5s;
  }
</style>
