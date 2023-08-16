<template>
  <div>
    <h5 v-randomColor>{{ title }}</h5>
    <div style="display: flex; gap: 10px; margin-left: 12px;">
      <input class="col-xs-2" type="text" v-model="search" placeholder="Search">
      <p> Search Input: {{ search }}</p>
    </div>
    <table class="table table-striped">
      <thead class="table-danger">
        <tr>
          <!--XS size for mobile devices view-->
          <th class="col">ID' S</th>
          <!--SM size for Tab devices view-->
          <th class="col">Year</th>
          <th class="col">Make</th>
          <!--MD size for desktop devices view-->
          <th class="col">Model</th>
          <th class="col">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car, index) in filteredCars" :key="index">
          <td>
            <NuxtLink :to="`/${car.id}`" data-bs-toggle="tooltip" title="click to view more!">{{ car.id }}</NuxtLink>
          </td>
          <td>{{ car.year }}</td>
          <td>{{ car.make }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.type }}</td>

        </tr>
      </tbody>


    </table>
  </div>
</template>
  
<script setup>
const title = 'Search your desired vehicle and click on the ID to get more details about it'
const { data: cars } = await useFetch('/api/cars')
const search = ref('');

const filteredCars = computed(() => {
  return cars.value.data.filter((car) => {

    return (car.make.toLowerCase().match(search.value.toLowerCase()) ||
      car.model.toLowerCase().match(search.value.toLowerCase()) ||
      car.type.toLowerCase().match(search.value.toLowerCase()) ||
      car.id.toString().toLowerCase().match(search.value.toLowerCase()) ||
      car.year.toString().toLowerCase().match(search.value.toLowerCase())
    );
  })
})

useHead({
  title: 'CareCare - Find your vehicle',
  meta: [
    { hid: 'description', name: 'description', content: 'CareCare - '+title }
  ]
})

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  margin: 15px;
}

h5 {
  text-align: center;
  margin-top: 50px;
}
</style>
  