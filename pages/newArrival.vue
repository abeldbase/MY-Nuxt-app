<template>
  <div>

    <Head>
      <Title>CarCare - {{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: lightgray; }" />
    </Head>
    <carousel :carousels="carousels" />
  </div>
</template>
  
<script setup>
const title = 'New Arrivals'
const carousels = {
  title: title,
  images: [{ title: 'Fantasy', alt: 'Fantasy', src: "Fantasy.jpg" }, { title: 'AudiStyle', alt: 'AudiStyle', src: 'AudiStyle.jpg' }, { title: 'Racer', alt: 'Racer', src: 'Racer.jpg' }]
}
</script>
<style scoped></style>