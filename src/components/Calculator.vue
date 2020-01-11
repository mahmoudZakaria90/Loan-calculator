<template>
  <form @submit.prevent="calculate(amount, duration)">
    <label for="amount">
      <div>Amout</div>
      <input id="amount" v-model="amount" />
    </label>
    <label for="duration">
      <div>Duration</div>
      <input id="duration" v-model="duration" />
    </label>
    <label>
      <Button type="submit" :disabled="!amount || !duration">Submit</Button>
    </label>
    <ul>
      <li class="validation-msg" v-for="(msg, key) in validationMSG" :key="key">
        {{ msg }}
      </li>
    </ul>
  </form>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
import { EventBus } from "../main";
import result from "../mockResponse.json";
export default {
  data() {
    return {
      amount: 10000,
      duration: 5,
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
        EventBus.$emit("send-results", result);
        EventBus.$emit("validate", true);
        return;
      }

      if (this.validationMSG.length) this.validationMSG = [];

      if (!amountValidate) {
        this.validationMSG.push("Amount must be between 10,000 - 100,000 EUR.");
      }
      if (!durationValidate) {
        this.validationMSG.push("Duration must be between 1 - 5 years.");
      }
      EventBus.$emit("validate", false);
    }
  }
};
</script>

<style lang="sass" scoped>
form
    margin: 0 -15px
label
    width: 50%
    &:last-of-type
        width: 100%
        text-align: center
.use-defaults
    position: absolute
    top: 0
    left: 15px
    input
        width: auto

.validation-msg
    color: red
</style>
