<template>
  <div v-if="validate" class="result">
    <p>Will equal:</p>
    <div id="result-inner" class="result-inner">Monthly Installment: {{ result.monthlyInstallment }}</div>
  </div>
</template>

<script>
export default {
  props: {
    validate: Boolean,
    result: Object
  }
};
</script>

<style lang="sass" scoped>
.result
  margin-top: 50px
  &-inner
    border-radius: 5px
    padding: 25px 15px
    background: #e8e8e8
</style>
