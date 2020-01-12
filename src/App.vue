<template>
  <div id="app">
    <h1>Loan calculator</h1>
    <Calculator :handleResult="handleResult" />
    <Result :result="result" :validate="validate" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator";
import Result from "./components/Result";

export default {
  data() {
    return {
      result: undefined,
      validate: false
    };
  },
  methods: {
    handleResult(newResult, validate) {
      this.result = newResult;
      this.validate = validate;
    }
  },
  components: {
    Calculator,
    Result
  }
};
</script>

<style lang="sass">
*
  box-sizing: border-box
#app
  padding: 15px
  max-width: 500px
  margin: auto
  font:
    family: "Roboto"
    size: 16px

h1
  text-align: center
  margin-bottom: 25px


label
  position: relative
  display: inline-block
  padding: 0 15px
  margin-bottom: 20px

input
  padding: 7px 10px
  border-radius: 3px
  border: 1px solid #ddd
  width: 100%
  font-size: 16px
  outline: 0

label div
  margin-bottom: 10px
  font-weight: 600

button
  background: transparent
  padding: 5px 20px
  border-radius: 5px
  font-size: inherit
  cursor: pointer
  outline: 0
</style>
