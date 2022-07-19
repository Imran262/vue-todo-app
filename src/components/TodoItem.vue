<template>
  <div class="row my-3 justify-content-center">
    <div class="bg-color">
      <h3 v-if="!editing">{{todo.title}}</h3>

      <div v-else class="mr-2">
        <input
          v-bind:value="todoText"
          @change="todoTextChange"
          type="text"
          class="form-control"
        />
       <div class="checkbox-btn my-3">
          <input :checked="completed" class="mr-1" @change="onCompleted" type="checkbox" />
          <label class="m-0">Completed</label>
        </div>
      </div>
      <div class="row">
        <button @click="updateTodoI(todo)" class="btn mx-2 btn-primary">{{editing?'Update':'Edit'}}</button>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {}
  },
  data() {
    return {
      todoText: "",
      editing: false,
      completed: false
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo", "changeCompleted"]),
    onCompleted() {
      this.completed = this.completed == true ? false : true;
    },
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    updateTodoI(todo) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.todoText = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
        todo.complete = this.completed;
        this.changeCompleted();
      }
    }
  }
};
</script>

<style scoped>
.bg-color{
  background-color: #5d4a4ac2;
  padding: 2rem 4rem;
  color: #fff;
}
.btn{
  padding:0.375rem  2rem;
}
.checkbox-btn{
    background-color: #00acb1;
    padding: 0.6rem 0;
    border-radius: 5px;
}

</style>