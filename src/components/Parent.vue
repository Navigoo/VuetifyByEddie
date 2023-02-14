<template>
  <div class="d-flex justify-center mt-16">
    <v-card>
      <!-- <Album artist="Metallica" album="Master of Puppets" :albumNumber="3+7" :rawDate="rawDate" goodAlbum /> -->
      <Album v-bind="album" />
    </v-card>
  </div>
</template>

<script>
import Album from "./Album.vue";

export default {
  name: "Parent",
  components: {
    Album,
  },
  data() {
    return {
      rawDate: new Date(1986, 2, 3),
      album: {
        artist: "Metallica",
        album: "Master of Puppets",
        albumNumber: 3,
        rawDate: new Date(1986, 2, 3),
        goodAlbum: false,
      },
    };
  },
};
</script>
