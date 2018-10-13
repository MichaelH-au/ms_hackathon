<template>
  <div>
    <div class="carousel slide" data-interval="1000" id="carouselExampleIndicators" style="height: 100vh">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" style="height: 100vh">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/images/Banner2.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/images/Banner1.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/images/banner3.svg" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators"  role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    </div>

    <div class="container" style="width: 70%">
      <div class="row mt-5 justify-content-center">
          <div class="col-4 ">
            <router-link active-class="active" to="/bottle">
            <img src="../assets/images/get_bottle.png" alt="" class="get_image">
            </router-link>
          </div>
          <div class="col-4 ">
            <router-link active-class="active" to="/book">
            <img src="../assets/images/get_book.png" alt="" class="get_image">
            </router-link>
          </div>
          <div class="col-4 ">
            <router-link active-class="active" to="/cloth">
            <img src="../assets/images/get_cloth.png" alt="" class="get_image">
            </router-link>
          </div>
        </div>
    </div>

    <footer class="container-fluid bg-dark text-white h-50">
      <div class="row align-items-center" style="height: 50px">
        <div class="col-8 text-left" style="height: 100%; line-height: 50px">&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></div>
        <div class="col-4 text-right" style="height: 100%; line-height: 50px"><a href="#">Back to top</a></div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    mounted () {
      $('#carouselExampleIndicators').carousel({
        interval: 2000
      });
    }
  }
</script>

<style scoped>
  @import "../assets/css/modern-business.css";
  .get_image{
    width: 100%;
    height: 350px;
    transition: .5s;
  }
  .get_image:hover{
    transform: scale(1.1);
    transition: .5s;
  }

</style>
