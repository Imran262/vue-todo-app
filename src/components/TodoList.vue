<template>
  <div>
    <div v-for="todo in allTTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    TodoItem
  },
  mounted () {
    this.LoadStateOnStartup()
  },
  computed: {
    ...mapGetters(["allTTodos", "completed"])
  },
  methods: {
    ...mapActions(["changeCompleted"]),
    LoadStateOnStartup () {
      this.changeCompleted()
    }
  }
};
</script>

<style scoped>
</style>