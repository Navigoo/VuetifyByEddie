<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Artist</th>
        <th class="text-left">Album</th>
        <th class="text-left">Album Number</th>
        <th class="text-left">Release Date</th>
        <th class="text-left">Good album?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ artist }}</td>
        <td>{{ album }}</td>
        <td>{{ albumNumber }}</td>
        <td>{{ formattedDate }}</td>
        <td>{{ goodAlbum ? "Yes" : "No" }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "Album",
  props: {
    artist: String,
    album: {
      type: String,
      default: "ingen idé",
    },
    albumNumber: {
      type: Number,
    },
    rawDate: {
      type: Date,
    },
    goodAlbum: {
      type: Boolean,
    },
  },
  computed: {
    formattedDate() {
      return new Date(this.rawDate).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
  },
};
</script>
