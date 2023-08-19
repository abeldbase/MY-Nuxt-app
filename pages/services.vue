<template>
  <div>
    <Head>
      <Title>CarCare - {{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <h5 v-randomColor>{{ title }}</h5>
    <div v-for="post in posts" :key="post.title">
      <button class="accordion">{{ post.title }}</button>
      <div class="panel">
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  mounted() {
    this.show();
  },
  data() {
    return {
      title: 'Available Services',
      posts: [
        { title: 'Car Rental', description: 'Renting a car in your city with CareCare is a relatively simple process that opens up many luxury cars that offer the best in comfort and reliability and at affordable rates. Car rentals are available in many major cities in the country and booking a car online can be done in minutes, thanks to the interactive and user-friendly nature of the CareCare' },
        { title: 'Car Care', description: 'Reinventing the automotive space, CarCare is one of the fastest-growing online platforms for auto service and damage repair. Our digitized solution extends the reach of our quick and easy processes to both Business and Consumer markets and with a deft management system of damage assessment and repair, our model has helped numerous used by car owners, fleet owners,manufacturers, Insurance Brokers, Insurers, to enhance customer satisfaction, eliminate redundancies in time cycle and easily compare, asses and find the best offer on their vehicle repair damage.' },
        { title: 'Car Advise', description: 'CarCare updates talks about Automobile market with news and updates for various cars and Bikes in world shared by CarCare experts' },
      ]
    }
  },
  methods: {
    show: function () {
      //accordion section
      var acc = document.getElementsByClassName("accordion");
      var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("activeAccordian");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }

    }
  },
 
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accordion {
  background-color: eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: .4s
}

.activeAccordian,
.accordion:hover {
  background-color: #ccc
}

.accordion:after {
  content: "+";
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px
}

.activeAccordian:after {
  content: "−"
}

.panel {
  padding: 0 18px;
  background-color: #fff;
  max-height: 0;
  overflow: hidden;
  transition: max-height .2s ease-out
}

h5 {
  text-align: center;
  margin-top: 50px;
}
</style>
  