<template>
  <div class="job-details container">
    <div class="row justify-content-center">
      <div class="col-6">
        <h1>Company: {{job.company}}</h1>
        <h1>JobTitle: {{job.jobTitle}}</h1>
        <h1>Hours: {{job.hours}}</h1>
        <p>Rate {{job.rate}}</p>
        <p>Description: {{job.description}}</p>
        <button type="button" class="btn btn-outline-danger" @click="deleteJob">DELETE!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  mounted() {
    this.$store.dispatch("getJobDetails", this.$route.params.id);
  },
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.job._id);
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setActiveJob", {});
    next();
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  }
};
</script>

<style>
</style>