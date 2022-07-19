<template>
  <div class="main-form mt-2">
    <p class="p-tag">Input a number to find number of digits inside it</p>
    <form class="py-3">
      <input type="number" v-model="SingleNumber"/>
      <button class="btn btn-info mx-2" type="button"  @click="findNumberOfDigits()">Find number of Digits</button>
    </form>
    <p class="p-tag">The number of digits in the above Number are : {{NumberOfDigits}}</p>

  </div>
</template>

<script>

export default {
  data () {
    return {
      SingleNumber: 0,
      NumberOfDigits: 1
    };
  },
  methods: {
    findNumberOfDigits () {
      this.NumberOfDigits = (Math.log(Math.abs(this.SingleNumber)+1) * 0.43429448190325176 | 0) + 1
      // Antoher Simple Way to find length could be : this.NumberOfDigits = this.SingleNumber.toString().length
    }
  }
};
</script>

<style scoped>
.main-form{
  background-color: currentColor;
    padding: 1rem;
}
.p-tag{
  color: #fff;
}
form input{
      outline: none;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      padding: 0 3px;
      line-height: 35px;
}
</style>