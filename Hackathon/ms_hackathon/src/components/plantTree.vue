<template>
  <div>


  <div class="container">
    <div class="row" style="margin-top: 100px">
      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <h4 class="card-header">Banyan</h4>
          <div class="card-body text-success">
            <!--<h5 class="card-title">10 coins</h5>-->
            <img class="card-tree" src="../assets/images/tree1.png">
          </div>
          <!--<div class="card-footer">Plant a tree</div>-->
          <div class="row" style="margin: 0 20px 5px 20px">
            <img src="../assets/images/plant_tree.png" class="tree_card">
          </div>
        </div>

      </div>

      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <h4 class="card-header">Walnut</h4>
          <div class="card-body text-success">
            <img class="card-tree" src="../assets/images/tree2.png">
          </div>
          <div class="row" style="margin: 0 20px 5px 20px">
            <img class="tree_card" src="../assets/images/bar1.png">
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-sm-6 portfolio-item">
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <h4 class="card-header">Pines</h4>
          <div class="card-body text-success">
            <img class="card-tree" src="../assets/images/tree3.png" >
          </div>
          <!--<div class="card-footer">Plant a tree</div>-->
          <div class="row" style="margin: 0 20px 5px 20px">
            <img class="tree_card" src="../assets/images/bar2.png">
          </div>
        </div>
      </div>

    </div>
    <!-- /.row -->

  </div>
    <footer class="container-fluid bg-dark text-white h-50" style="margin-top: 200px">
      <div class="row align-items-center" style="height: 50px">
        <div class="col-8 text-left" style="height: 100%; line-height: 50px">&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></div>
        <div class="col-4 text-right" style="height: 100%; line-height: 50px"><a href="#">Back to top</a></div>
      </div>
    </footer>
  </div>

</template>

<script>

</script>

<style scoped>
  .card-header{
    background-color: rgb(158,177,33);
    font-family: "gubblebum-blocky", monospace;
    color:white;
  }
  .card-tree{
    height:260px;
    width: 160px;
  }
  .tree_card{
    height: 50px;
    width: 100%;
  }
</style>
