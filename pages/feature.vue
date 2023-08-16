<template>
  <div>
    <div class="container">
      <h5 v-randomColor>{{ title }}</h5>

      <p>{{ details }}</p>
      <img class="img-fluid" :src="image" alt="Chania" width="460" height="345">
    </div>
  </div>
</template>
  
<script setup>
const title = 'CarCare Features'
const details = 'Engine body is made up of high quality metals which shows the color more clear and impressed by some one easily'
const image = 'car.jpg'

useHead({
  title: title,
  meta: [
    { hid: 'description', name: 'description', content: 'CareCare - ' + title }
  ]
})

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  text-align: center;
  margin-top: 50px;
}
</style>
  