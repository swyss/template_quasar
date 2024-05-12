<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Made By Getters</h2>
    <div>
      {{ getWeatherData.description }}
      {{ getWeatherData.temperature }}
      {{ getWeatherData.wind }}
    </div>
    <div>

      {{ getWeatherData.temperature }}
      {{ getWeatherData.wind }}
    </div>
    <h2>Made By Actions</h2>
    <div>
      {{ weatherData.description }}
      {{ weatherData.temperature }}
      {{ weatherData.wind }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useWeatherStore } from "stores/demo/example-weather";
const store = useWeatherStore();
const msg = ref("Weather Call with AXIOS");
const getWeatherData = computed(() => {
  return store.getWeatherData;
});
const weatherData = computed(() => {
  return store.weatherData;
});
onMounted(() => {
  store.fetchWeatherData();
});
</script>
