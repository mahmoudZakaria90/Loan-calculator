<template>
  <div v-if="validate" class="result">
    <p>Will equal:</p>
    <div class="result-inner">Monthly Installment: {{ result }}</div>
  </div>
</template>

<script>
import { EventBus } from "../main";
export default {
  data() {
    return {
      result: undefined,
      validate: undefined
    };
  },
  created() {
    EventBus.$on("validate", validate => (this.validate = validate));
    EventBus.$on(
      "send-results",
      result => (this.result = result.monthlyInstallment)
    );
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
