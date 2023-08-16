<template>
    <div class="card">
  <h5 class="card-header">Error Occured</h5>
  <div class="card-body">
    <h5 class="card-title">Sorry for the inconvenience</h5>
    <p class="card-text">Please contact our support team with below details :: error code {{ error.statusCode }}</p>
    <a href="/" class="btn btn-primary">Back to Home</a>
  </div>
</div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style lang="scss" scoped>

</style>