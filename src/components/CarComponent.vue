<template>
  <div class="car col-3">
    <!-- NOTE Router link takes the name of the route, and an object including any parameters to pass -->
    <router-link :to="{ name: 'CarDetails', params: { id: carProp._id }}">
      <div class="card">
        <img class="card-img-top" :src="carProp.imgUrl" alt />
        <div class="card-body">
          <h4 class="card-title">${{carProp.price}}</h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Car",
  props: ["carProp"]
}
</script>

<style>

</style>