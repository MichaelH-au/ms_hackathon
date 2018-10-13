<template>
  <!--<div class="banner" v-bind:style="{ 'background-image': 'url(' + require(image) + ')' }"></div>-->
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="card border-success mb-3 " style="max-width: 18rem; margin-top: 100px;width: 300px">
        <h4 class="card-header">Banyan</h4>
        <div class="card-body text-success">
          <img class="card-tree" src="../assets/images/tree1.png">
        </div>
        <div class="row" style="margin: 0 20px 5px 20px">
          <!--<img src="../assets/images/plant_tree.png" class="tree_card">-->
        </div>
        <div class="card-footer">
          Address: Medlow Bath New South Wales 2780
        </div>
      </div>
    </div>
  </div>

  <!--<div class="banner" v-bind:style="{ 'background': 'url(' + image + ')' }"></div>-->

</template>

<script>
  export default {
    name: "blog",
    data() {
      return {
        title: 'Hello world',
        image: '../assets/bg1.jpg',
        treeList: [
          {name : "Illawarra Flame Tree", image: 'http://worlderz.com/wp-content/uploads/2017/06/trees-9-174x300.jpg', location: 'http://example.com'},
          {name : "Jacaranda", image: 'http://worlderz.com/wp-content/uploads/2017/06/trees-10-300x190.jpg', location: 'http://example.com'}
        ]
        // image: './assets/bg1.jpg'
      }
    }
  }
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
