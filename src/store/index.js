import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

let _api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api"
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    houses: [],
    activeHouse: {},
    jobs: [],
    activeJob: {}
  },
  mutations: {
    setAllCars(state, cars) {
      state.cars = cars
    },
    setActiveCar(state, car) {
      state.activeCar = car
    },
    addToCars(state, car) {
      state.cars.push(car)
    },
    setAllHouses(state, houses) {
      state.houses = houses
    },
    setActiveHouse(state, house) {
      state.activeHouse = house
    },
    addToHouses(state, house) {
      state.houses.push(house)
    },
    setAllJobs(state, jobs) {
      state.jobs = jobs
    },
    setActiveJob(state, job) {
      state.activeJob = job
    },
    addToJobs(state, job) {
      state.jobs.push(job)
    },
  },
  actions: {
    async getAllCars({ commit, dispatch }) {
      try {
        let res = await _api.get('cars')
        commit("setAllCars", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCarDetails({ commit, dispatch }, id) {
      try {
        let res = await _api.get('cars/' + id)
        commit("setActiveCar", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createCar({ commit, dispatch }, carDeetz) {
      try {
        let res = await _api.post('cars', carDeetz)
        commit("addToCars", res.data.data)
        router.push({ name: "CarDetails", params: { id: res.data.data._id } })
      } catch (error) {
        console.error(error)
      }
    },
    async deleteCar({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('cars/' + id)
        // NOTE Router Push is NOT an array method but a navigation method
        router.push({ name: "Home" })
      } catch (error) {
        console.error(error)
      }
    },
    async getAllHouses({ commit, dispatch }) {
      try {
        let res = await _api.get('houses')
        commit("setAllHouses", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHouseDetails({ commit }, id) {
      try {
        let res = await _api.get('houses/' + id)
        commit("setActiveHouse", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createHouse({ commit, dispatch }, houseDeetz) {
      try {
        let res = await _api.post('houses', houseDeetz)
        commit("addToHouses", res.data.data)
        router.push({ name: "HouseDetails", params: { id: res.data.data._id } })
      } catch (error) {
        console.error(error)
      }
    },
    async deleteHouse({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('houses/' + id)
        // NOTE Router Push is NOT an array method but a navigation method
        router.push({ name: "Home" })
      } catch (error) {
        console.error(error)
      }
    },
    async getAllJobs({ commit, dispatch }) {
      try {
        let res = await _api.get('jobs')
        commit("setAllJobs", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createJob({ commit, dispatch }, jobDeetz) {
      try {
        let res = await _api.post('jobs', jobDeetz)
        commit("addToJobs", res.data.data)
        router.push({ name: "JobDetails", params: { id: res.data.data._id } })
      } catch (error) {
        console.error(error)
      }
    },
    async getJobDetails({ commit }, id) {
      try {
        let res = await _api.get('jobs/' + id)
        commit("setActiveJob", res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteJob({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('jobs/' + id)
        // NOTE Router Push is NOT an array method but a navigation method
        router.push({ name: "Home" })
      } catch (error) {
        console.error(error)
      }
    },
  },
  modules: {
  }
})
