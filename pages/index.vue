<template>
   <div>
      <main role="main" class="container">
         <!-- jumbotron section with tooltip added -->
         <div class="col-md-20">
            <div class="h-50 w-1000 p-5 text-white bg-light rounded-3">
               <h1 class="text-danger">{{ title }}</h1>
               <p class="lead text-dark" v-html="description"></p>
               <!-- type something to change title -->
               <label for="title" class="my-2 text-danger">Change Title</label>
                  <input type="text" v-model="title" id="title" placeholder="change title here" size="50"
                     class="form-control me-2">
               
               <!-- click on toggle to change the text based on condition-->
               <div class="toggle">
                  
                  <div  v-if="isSatisfied" class="text-success">
                     <img src="/thumbsUp.jpg" width="100" height="100" @click="isSatisfied = !isSatisfied">
                     <h4>Happy that you are satisfied with our services!!!</h4>
                  </div>
                  <div v-else class="text-danger">
                     <img src="/thumbsDown.jpg" width="100" height="100" @click="isSatisfied = !isSatisfied">
                      <h4>We are sorry about your inconvenience</h4>
                     </div>
               </div>
            </div>
         </div>
      </main>
   </div>
</template>
<script>

export default {
   mounted() {
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
},
   
   data() {
      return {
         isSatisfied: true,
         title: 'Why CarCare',
         description: `Are you planning on buying a new <a href="#" class="d-inline-block" data-bs-toggle="tooltip"
               title="Hooray You have chosen right place!">car</a>? Well, we know that with so many options available out
             there, it gets really difficult to find a good car which suits your need. Hence, we have put together a
             complete list of new cars. Maruti Suzuki, Hyundai and Tata are the 3 most popular car brands. The 5 most
             popular cars are <a href="#" data-bs-toggle="tooltip" data-bs-html="true" title="5 Star rated by many people!">Hyundai</a> Exter,
             Maruti Suzuki Fronx, Mahindra Scorpio, Renault Kwid and Maruti Suzuki Invicto. The 5 most popular upcoming
             cars are Mercedes-Benz GLC Facelift, Audi Q8 e-tron, Audi Q8 e-tron Sportback, Volvo C40 Recharge and Honda
             Elevate.`
      }
   }

}
</script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tooltip-arrow,
.red-tooltip + .tooltip > .tooltip-inner {background-color: #f00;}
.toggle {
   margin-top: 50px;
}
</style>