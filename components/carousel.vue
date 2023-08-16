<template>
  <div>
    <h5 v-randomColor>{{ carousels.title }}</h5>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <!-- The slideshow -->
      <div class="carousel-inner">
        <div :class="(index == 0) ? 'carousel-item active' : 'carousel-item'" v-for="(image, index) in carousels.images"
          :key="index">
          <!-- when user click on the image toggleImageBorder function would be called from mixin-->
          <img :src="image.src" :alt="image.alt" :title="image.title" @click="toggleImageBorder"
            class="img-border d-block w-100">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { carousels } = defineProps({carousels: {
      type: Object,
      required: true,
      // custom props validator
      validator: function (object) {
        return (typeof (object.title) === "string" &&
          object.images instanceof Array &&
          object.images.length > 0
        )
      }
    }
  }) 
</script>

<style>
.carousel-inner img {
  width: 900px;
  height: 600px;
}

.img-border {
  padding: 5px;
  border: 1px solid red;
}

h5 {
  text-align: center;
  margin-top: 50px;
}
</style>