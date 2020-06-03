<template>
  <div class="house-details container">
    <div class="row">
      <div class="col-6">
        <h1>Bedrooms: {{house.bedrooms}}</h1>
        <h1>Bathrooms: {{house.bathrooms}}</h1>
        <h1>Price: {{house.price}}</h1>
        <p>Levels: {{house.levels}}</p>
        <p>Year: {{house.year}}</p>
        <p>Description: {{house.description}}</p>
        <button type="button" class="btn btn-outline-danger" @click="deleteHouse">DELETE!</button>
      </div>
      <div class="col-6">
        <img class="card-img-top" :src="house.imgUrl" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseDetails",
  mounted() {
    this.$store.dispatch("getHouseDetails", this.$route.params.id);
  },
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.house._id);
    }
  },

  beforeRouteLeave(to, from, next) {
    this.$store.commit("setActiveHouse", {});
    next();
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  }
};
</script>

<style>
</style>