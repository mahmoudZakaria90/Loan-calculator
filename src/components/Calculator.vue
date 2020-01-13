<template>
  <form @submit.prevent="calculate(amount, duration)">
    <div class="row">
      <label for="amount">
        <input
          id="amount"
          v-currency:EUR="amount"
          placeholder="Enter the amount"
          autocomplete="off"
        />
      </label>
      <label for="duration">
        <input id="duration" v-model="duration" placeholder="Enter the duration" autocomplete="off" />
      </label>
    </div>
    <Button type="submit" id="submit" :disabled="!amount || !duration">Submit</Button>
    <ul class="validation-wrap">
      <li class="validation-msg" v-for="(msg, key) in validationMSG" :key="key">- {{ msg }}</li>
    </ul>
  </form>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
import result from "../mockResponse.json";
export default {
  props: {
    handleResult: Function
  },
  data() {
    return {
      amount: "",
      duration: "",
      minAmount: 10000,
      maxAmount: 100000,
      minDuration: 1,
      maxDuration: 5,
      validationMSG: []
    };
  },
  methods: {
    calculate(amount, duration) {
      //validation
      const { minAmount, maxAmount, minDuration, maxDuration } = this;
      const amountValidate = amount >= minAmount && amount <= maxAmount;
      const durationValidate =
        duration >= minDuration && duration <= maxDuration;

      if (amountValidate && durationValidate) {
        if (this.validationMSG.length) this.validationMSG = [];
        this.handleResult(result, true);
        return;
      }

      if (this.validationMSG.length) this.validationMSG = [];

      if (!amountValidate) {
        this.validationMSG.push("Amount must be between 10,000 - 100,000 EUR.");
      }
      if (!durationValidate) {
        this.validationMSG.push("Duration must be between 1 - 5 years.");
      }
      this.handleResult(undefined, false);
    }
  }
};
</script>

<style lang="sass" scoped>
form
    padding: 0 15px

label
    width: 50%

.validation
    &-wrap
      max-width: 350px
      margin-left: auto
      padding: 0
      list-style: none
    &-msg
      color: var(--error)
      margin-bottom: 10px
</style>
