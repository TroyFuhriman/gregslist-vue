<template>
  <div class="houses-component container-fluid">
    <div class="row justify-content-center">
      <form class="form-inline col justify-content-around" @submit.prevent="createHouse">
        <div class="form-group">
          <label for="bedrooms"></label>
          <input
            type="number"
            name="bedrooms"
            id="bedrooms"
            class="form-control"
            required
            v-model="newHouse.bedrooms"
            placeholder="bedrooms"
          />
        </div>
        <div class="form-group">
          <label for="bathrooms"></label>
          <input
            type="number"
            name="bathrooms"
            id="bathrooms"
            class="form-control"
            required
            v-model="newHouse.bathrooms"
            placeholder="bathrooms"
          />
        </div>
        <div class="form-group">
          <label for="levels"></label>
          <input
            type="number"
            name="levels"
            id="levels"
            class="form-control"
            required
            v-model="newHouse.levels"
            placeholder="levels"
          />
        </div>
        <div class="form-group">
          <label for="year"></label>
          <input
            type="number"
            name="year"
            id="year"
            class="form-control"
            required
            v-model="newHouse.year"
            placeholder="year"
          />
        </div>
        <div class="form-group">
          <label for="price"></label>
          <input
            type="number"
            name="price"
            id="price"
            class="form-control"
            required
            v-model="newHouse.price"
            placeholder="price"
          />
        </div>
        <div class="form-group">
          <label for="imgUrl"></label>
          <input
            type="url"
            name="imgUrl"
            id="imgUrl"
            class="form-control"
            required
            v-model="newHouse.imgUrl"
            placeholder="imgUrl"
          />
        </div>
        <div class="form-group">
          <label for="description"></label>
          <input
            type="text"
            name="description"
            id="description"
            class="form-control"
            required
            v-model="newHouse.description"
            placeholder="description"
          />
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col">
              <button type="submit" class="btn btn-success">submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <house v-for="house in houses" :key="house._id" :houseProp="house" />
    </div>
  </div>
</template>

<script>
import House from "./HouseComponent.vue";
export default {
  name: "Houses",
  data() {
    return {
      newHouse: {}
    };
  },
  components: {
    House
  },
  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", { ...this.newHouse });
      this.newHouse = {};
    }
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  mounted() {
    this.$store.dispatch("getAllHouses");
  }
};
</script>

<style>
</style>