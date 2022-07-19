<template>
  <div>
    <ul class="row justify-content-center my-3">
      <li>
        <button @click="changeTab" :class="{active:completed}">Completed</button>
      </li>
      <li>
        <button @click="changeTab" :class="{active:!completed}">Not Completed</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["completed"])
  },
  methods: {
    ...mapActions(["changeCompleted"]),
    changeTab() {
      this.changeCompleted();
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
}
button {
  outline: none !important;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: #000;
  margin: 0 1rem;
  box-shadow: 2px 2px 20px 2px #888888;
}
button:hover {
  outline: none;
  background-color: rgb(194, 243, 227);
}
.active {
  outline: none;
  color: white;
  background-color: rgb(0, 202, 135);
}
.active:hover {
  outline: none;
  border: none;
  padding: 10px 20px;
  color: white;
  background-color: rgb(0, 202, 135);
}
</style>