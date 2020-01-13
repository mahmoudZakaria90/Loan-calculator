<template>
  <div id="app">
    <div class="app-wrapper">
      <h1>Loan calculator</h1>
      <Calculator :handleResult="handleResult" />
      <Result :result="result" :validate="validate" />
    </div>
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

html,
body,
#app
  height: 100%

#app
  padding: 15px
  max-width: 1000px
  margin: auto
  display: flex
  color: #555
  font:
    family: "Roboto"
    size: 16px

.app
  &-wrapper
    flex-grow: 1
    margin: auto

.row
   margin: 0 -15px

h1
  color: var(--cyanblue)
  margin-bottom: 50px


label
  position: relative
  display: inline-block
  padding: 0 15px
  margin-bottom: 40px

input
  padding: 7px 0
  width: 100%
  font-size: 16px
  color: inherit
  border: none
  border-bottom: 1px solid #e8e8e8
  outline: 0
  &:focus
    border-color: var(--cyanblue)

label div
  margin-bottom: 20px
  font-weight: 600

button
  background: transparent
  color: var(--cyanblue)
  border: 1px solid var(--cyanblue)
  padding: 10px 30px
  border-radius: 5px
  font-size: inherit
  cursor: pointer
  outline: 0
  transition: all 500ms
  &:hover
    color: white
    background: var(--cyanblue)
  &:disabled, &:hover:disabled
    cursor: not-allowed
    color: var(--dimmed)
    border-color: var(--dimmed)
    background: transparent
</style>
