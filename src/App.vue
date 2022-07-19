<template>
  <div id="app" class="container">
    <TodoInput />
    <TodoStatus />
    <TodoList />
    <YearsToDays/>
    <NumberFinder/>
    <IntegerLengthFinder/>
    <Login/>
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import Login from "@/components/Login";
import NumberFinder from "@/components/NumberFinder";
import IntegerLengthFinder from "@/components/IntegerLengthFinder";
import YearsToDays from "@/components/YearsToDays";
import TodoList from "@/components/TodoList";
import TodoStatus from "@/components/TodoStatus";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
    TodoStatus,
    Login,
    IntegerLengthFinder,
    YearsToDays,
    NumberFinder
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
