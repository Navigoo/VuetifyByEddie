<template>
  <div class="d-flex justify-center mt-16"></div>
  <div class="linear">
    <v-progress-linear indeterminate color="blue" reverse></v-progress-linear>
    <v-table class="d-flex justify-center mt-0">
      <thead>
        <tr>
          <th class="text-left">Brand</th>
          <th class="text-left">Model</th>
          <th class="text-left">price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cars" :key="item.name">
          <td>{{ item.brand }}</td>
          <td>{{ item.model }}</td>
          <td>{{ item.price }} SEK</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch("cars.json");
      const val = await res.json();
      this.cars = val;
    },
  },
};
</script>

<style scoped>
.linear {
  background-color: green;
}
</style>
<!-- <script>
// import axios from "axios";
// export default {
//   data() {
//     return {
//       cars: [],
//     };
//   },
//   mounted() {
//     this.fetchData();
//   },
//   methods: {
//     async fetchData() {
//       await axios.get("cars.json").then(function (response) {
//         console.log(response.data);
//       });
//     },
//   },
// };
// </script> -->

<!-- methods: {
//   async fetchData() {
//     axios.get("cars.json").then(function (response) {
//       console.log(response.data);
//     });
//   },
// }, -->
