<template>
  <div class="car-details container">
    <div class="row">
      <div class="col-6">
        <h1>Make: {{car.make}}</h1>
        <h1>Model: {{car.model}}</h1>
        <h1>Price: {{car.price}}</h1>
        <p>Description: {{car.description}}</p>
        <button type="button" class="btn btn-outline-danger" @click="deleteCar">DELETE!</button>
      </div>
      <div class="col-6">
        <img class="card-img-top" :src="car.imgUrl" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarDetails",
  mounted() {
    // NOTE when the page loads, go get the car who's id is in the url params
    this.$store.dispatch("getCarDetails", this.$route.params.id);
  },
  methods: {
    deleteCar() {
      this.$store.dispatch("deleteCar", this.car._id);
    }
  },

  // NOTE take some action before navigation changes
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setActiveCar", {});
    next();
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    }
  }
};
</script>

<style>
</style>