<template>
  <div id="tmp">
    <div style="width: 100%; height: 80px; background: white; position: fixed; z-index: 20"></div>
    <div id="modal-demo" class="modal fade show">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title text-center">Location Detail</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body win_body">
            <div class="card card_box mb-3">
              <div class="card_img_box">
                <img class="card-img-top card_image"  src="../assets/images/book_img.jpg" alt="">
              </div>
              <div class="card-body">
                <i class="fas fa-recycle" style="color:white"></i>
                <div class="row mb-3">
                  <div class="col-3 text-right"><i class="fas fa-trash-alt"></i></div>
                  <div class="col">{{curr_loc.position.title}}</div>
                </div>
                <div class="row mb-3">
                  <div class="col-3 text-right"><i class="fas fa-map-marked-alt"></i></div>
                  <div class="col">{{curr_loc.position.address}}</div>
                </div>
                <div class="row mb-3">
                  <div class="col-3 text-right"><i class="far fa-calendar-alt"></i></div>
                  <div class="col">{{curr_loc.position.open_hour}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <GmapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100vw; height: 100vh"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        v-bind:icon="my_loc"
        @click="map_tab(m)"
      />
    </GmapMap>
    <button class="btn btn-primary" id="tab_btn" data-toggle="modal" data-target="#modal-demo" hidden>test</button>
  </div>

</template>

<script>
  export default {
    // name: "map",
    data () {
      return {
        markers: [],
        my_loc: {
          url: require('../assets/images/book.png'),
          size: {width: 26, height: 36, f: 'px', b: 'px'},
          scaledSize: {width: 20, height: 30, f: 'px', b: 'px'}
        },
        center:{"lat": -33.91781, "lng": 151.2325},
        curr_loc: {position:{}}
      }
    },
    beforeMount () {
      $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://45.77.48.219/book',
        // url: '/static/ReverseVendingMachine.json',
        // url: '/static/library.json',
        success: function (res) {
          console.log(res);
          // console.log(that.markers);
          for (let loc of res) {
            this.markers.push({"position":{"lat":loc.latitude
                , "lng":loc.longitude,
                "address":loc.address,
                "title": loc.title,
                "open_hour":loc.open_close_state}
            });
          }
        }.bind(this)
      });
    },
    mounted () {
      console.log(this.markers);
      $(".header_box>nav").addClass('bg-light');
    },
    methods:{
      map_tab: function (m) {
        // this.center = m.position;
        console.log(m);
        this.curr_loc = m;
        console.log(this.curr_loc);
        $('#modal-demo').modal('toggle');
      }
    }
  }
</script>

<style scoped>
  .card_img_box{
    height: 100%;
    overflow: hidden;
    max-width: 100%;

  }
  .card_image{
    height: 100%;
    transition: .5s;
  }
  .card_image:hover{
    transform: scale(1.1);
    transition: .5s;
  }
  .card-body{
    transition: .5s;
  }
  .card-body:hover{
    background: g;
    transition: .5s;
  }

</style>
