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
          <li class="nav-item bar-item active mr-5 ml-5 text-right">
           <div style="color: #77AD2D; font-family: Phosphate; font-size: 23px">Plant tree</div>
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
      mounted() {

        $(window).scroll(function () {
          console.log($(window).scrollTop());
          if ($(window).scrollTop() > 100) {
            $(".header_box>nav").addClass('bg-light');
          }
          if ($(window).scrollTop() == 0) {
            $(".header_box>nav").removeClass('bg-light');
          }
        });

      }
    }
</script>

<style scoped>
  .header_box>nav{
    transition: .5s;
  }
  .bar-item{
    transition: .5s;
    height: 50px;
    line-height: 50px;
  }
  .bar-item:hover {
    background: lightgreen;
    transition: .5s;
    border-radius: 5px;
  }
</style>
