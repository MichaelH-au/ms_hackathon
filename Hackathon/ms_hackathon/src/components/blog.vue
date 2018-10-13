<template>
  <!--<div class="banner" v-bind:style="{ 'background-image': 'url(' + require(image) + ')' }"></div>-->
  <div class="blog">
    <div class="banner">
      <p class="title">{{title}}</p>
    </div>
    <div class="article">
      <p class="content"></p>
      <table class="table">
        <thead>
        <tr class="bg-success">
          <th scope="col">#id</th>
          <th scope="col">Tree</th>
          <th scope="col">Picture</th>
          <th scope="col">Image</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(tree, index) in treeList">
            <th scope="row">{{index + 1}}</th>
            <td>{{tree.name}}</td>
            <!--<td><a :href="tree.image">link</a></td>-->
            <td><img class="tree_img" :src="tree.image"></td>
            <td><a :href="tree.location">link</a></td>
          <!--<td><a href="{{tree.location}}">link</a></td>-->
        </tr>
        
        </tbody>
      </table>
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
.banner {
  background: url('../assets/bg1.jpg');
  /*background: no-repeat;*/
  text-align: center;
  margin:0 auto;
  /*height:100px;*/
  height: 400px;
  width: 100%;
}
.title {
  color: #FFF;
  font-size: 30px;
  padding-top: 200px;
}
  .article {
    width: 60%;
    font-size: 20px;
    font-family: HKExplorer-Regular, Georgia, serif;
    margin: 50px auto;
  }
.tree_img {
  height: 50px;
  width: 50px;
}
</style>
