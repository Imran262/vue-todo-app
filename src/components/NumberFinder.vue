<template>
  <div class="main-form mt-2">
    <p class="p-tag">Input values inside array and Let's check for 7 inside of that array</p>
    <form class="py-4">
      <input type="number" v-model="SingleNumber"/>
      <button class="btn btn-info mx-2" type="button"  @click="AddNumberInArray()">Add Number to Array</button>
      <button class="btn check-btn" type="button"  @click="findSeven()">Check For 7</button>
    </form>
    <p class="p-tag">Your Entered Array is : {{ArrayOfNumbers}}</p>
    <p class="p-tag">{{Message}}</p>

  </div>
</template>

<script>

export default {
  data () {
    return {
      AgeInYears: '',
      SingleNumber: 0,
      ArrayOfNumbers: [],
      AgeinDays: 0,
      Message: '',
      showMessage: false
    };
  },
  methods: {
    findSeven () {
      if (this.ArrayOfNumbers.length) {
        for (let i = 0; i < this.ArrayOfNumbers.length; i++) {
          if (this.ArrayOfNumbers[i] == 7) {
            this.Message = 'BOOM!'
            return
          }
        }
        this.Message = 'There is no 7 in the array'
      }
    },
    AddNumberInArray () {
      this.ArrayOfNumbers.push(Number(this.SingleNumber))
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
.check-btn{
  background-color: rgb(0, 202, 135);
  color: #fff;
}
</style>