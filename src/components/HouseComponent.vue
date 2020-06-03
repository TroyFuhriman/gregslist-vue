<template>
  <div class="house col-3">
    <router-link :to="{ name: 'HouseDetails', params: { id: houseProp._id }}">
      <div class="card">
        <img class="card-img-top" :src="houseProp.imgUrl" alt />
        <div class="card-body">
          <h4 class="card-title">${{houseProp.price}}</h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "House",
  components: {},
  methods: {},
  mounted() {},
  props: ["houseProp"]
};
</script>
<style>
</style>