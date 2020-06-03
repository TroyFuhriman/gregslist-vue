<template>
  <div class="jobs-component container-fluid">
    <div class="row justify-content-center">
      <form class="form-inline col justify-content-around" @submit.prevent="createJob">
        <div class="form-group">
          <label for="company"></label>
          <input
            type="text"
            name="company"
            id="company"
            class="form-control"
            required
            v-model="newJob.company"
            placeholder="company"
          />
        </div>
        <div class="form-group">
          <label for="jobTitle"></label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            class="form-control"
            required
            v-model="newJob.jobTitle"
            placeholder="jobTitle"
          />
        </div>
        <div class="form-group">
          <label for="hours"></label>
          <input
            type="number"
            name="hours"
            id="hours"
            class="form-control"
            required
            v-model="newJob.hours"
            placeholder="hours"
          />
        </div>
        <div class="form-group">
          <label for="rate"></label>
          <input
            type="number"
            name="rate"
            id="rate"
            class="form-control"
            required
            v-model="newJob.rate"
            placeholder="rate"
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
            v-model="newJob.description"
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
      <job v-for="job in jobs" :key="job._id" :jobProp="job" />
    </div>
  </div>
</template>

<script>
import Job from "./JobComponent.vue";
export default {
  name: "Jobs",
  data() {
    return {
      newJob: {}
    };
  },
  components: {
    Job
  },
  methods: {
    createJob() {
      this.$store.dispatch("createJob", { ...this.newJob });
      this.newJob = {};
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  mounted() {
    this.$store.dispatch("getAllJobs");
  }
};
</script>

<style>
</style>