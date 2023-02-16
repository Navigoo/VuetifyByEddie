<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-layout>
        <v-navigation-drawer floating permanent>
          <v-list density="compact" nav>
            <!-- nedan :to är mina router-link, snitsigt va? -->
            <v-list-item
              :to="{ name: 'home' }"
              prepend-icon="mdi-home"
              title="Hem"
              value="home"
            ></v-list-item>
            <v-list-item
              :to="{ name: 'input' }"
              prepend-icon="mdi-text-box-edit-outline"
              title="Input"
              value="input"
            ></v-list-item>
            <v-list-item
              :to="{ name: 'fetch' }"
              prepend-icon="mdi-cloud-download-outline"
              title="Fetch with Axios"
              value="fetch"
            ></v-list-item>
            <v-list-item
              :to="{ name: 'parent' }"
              prepend-icon="mdi-alert-decagram-outline"
              title="Props"
              value="Parent"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="pl-3">
        <v-avatar image="src\assets\profil.PNG" size="50"></v-avatar>
      </div>
      <v-toolbar-title>Vuetify by Eddie</v-toolbar-title>
      <v-btn @click="toggleTheme" variant="outlined">byt tema</v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  data: () => ({ drawer: null }),
  setup() {
    const theme = useTheme();
    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
};
</script>
