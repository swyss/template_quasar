import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
export const useWeatherStore = defineStore("weatherDatas", {
  state: () => ({
    weatherData: [],
  }),
  getters: {
    getWeatherData(state) {
      return state.weatherData;
    },
  },
  actions: {
    async fetchWeatherData() {
      try {
        const data = await axios.get(
          "https://goweather.herokuapp.com/weather/Sissach"
        );
        this.weatherData = data.data;
        console.log(data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});

//47.46436°, 7.81062
