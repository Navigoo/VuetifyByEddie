<template>
  <div class="d-flex justify-center mt-16"></div>
  <v-app>
    <v-main>
      <div class="d-flex justify-center mt-16">
        <h2>Add Tasks</h2>
      </div>

      <div class="d-flex justify-center mt-10">
        <v-sheet width="300" class="mx-auto">
          <v-form>
            <v-text-field
              v-model="taskValue"
              label="Skriv något"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <p v-if="count > 2">Du har skrivit {{ count }} tecken</p>
          </v-form>
        </v-sheet>
      </div>

      <div class="d-flex justify-center mt-0">
        <v-btn
          type="submit"
          class="d-flex mt-4"
          @click="addTask"
          color="success"
          >ADD
        </v-btn>
      </div>
      <div class="mt-4">
        <v-table class="d-flex justify-center mt-0">
          <thead>
            <tr>
              <th class="text-left">Click on added task to delete!</th>
            </tr>
          </thead>
          <div class="d-flex justify-center mt-0">
          <tbody>
            <p v-if="tasks.length === 0">You have no tasks, please add!</p>
            <tr v-for="task in tasks" @click="removeTask">
              <td>{{ task }}</td>
            </tr>
          </tbody>
        </div>
        </v-table>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    taskValue: "",
    tasks: [],
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
  computed: {
    count() {
      return this.taskValue.length;
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskValue);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
  },
};
</script>
