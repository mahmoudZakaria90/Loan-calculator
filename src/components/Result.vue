<template>
  <div v-if="validate" class="result">
    <p>Will equal:</p>
    <div id="result-inner" class="result-inner">
      Monthly Installment:
      <span style="text-decoration: underline; font-weight: 700">{{
        result.monthlyInstallment
      }}</span>
    </div>
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
  padding: 0 15px
  &-inner
    border-radius: 5px
    padding: 25px 15px
    background: var(--success_bg)
    color: var(--success_c)
</style>
