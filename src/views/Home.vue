<template>
  <div class="d-flex justify-center mt-16"></div>
  <div>
    <v-progress-linear indeterminate color="red" reverse></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="green"></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="pink" reverse></v-progress-linear>
    <br />
    <v-progress-linear indeterminate color="primary"></v-progress-linear>
  </div>

  <div class="d-flex justify-center mt-6">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card
          v-bind="props"
          :color="isHovering ? 'success' : undefined"
          title="Hem"
          width="50%"
          text="Välkommen till mitt första vue och vuetify projekt.
          klicka gärna på menyn för att bläddra runt på min Single Page Applikation."
        ></v-card>
      </template>
    </v-hover>
  </div>

  <div class="text-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :model-value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :model-value="value"
      color="primary"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="90"
      :size="100"
      :width="15"
      :model-value="value"
      color="red"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="180"
      :size="100"
      :width="15"
      :model-value="value"
      color="pink"
    >
      {{ value }}
    </v-progress-circular>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
    };
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
