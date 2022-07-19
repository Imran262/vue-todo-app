<template>
  <div class="main-from">
    <form>
      <input type="text" v-model="AgeInYears"/>
      <button class="btn btn-info" type="number" @click="convertAge(AgeInYears)">Convert to Days</button>
    </form>

    <p class="mt-2 mb-0">Your age in Days is: {{AgeinDays}}</p>

  </div>
</template>

<script>

export default {
  data () {
    return {
      AgeInYears: '',
      AgeinDays: 0
    };
  },
  methods: {
    convertAge (dateString) {
      let age = dateString * 365.2425;
      this.AgeinDays = Math.floor(age)
    }
  }
};
</script>

<style scoped>
.main-from{
  background-color: currentColor;
  padding: 1rem;
}
.main-from form{
  margin-top: 0.5rem;
}
form input{
  outline: none;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  line-height: 35px;
}
.btn{
  margin: 0 0.5rem;
}
p{
  color: #fff;
}
</style>