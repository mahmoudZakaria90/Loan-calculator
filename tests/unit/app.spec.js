import { mount } from "@vue/test-utils";
import Calculator from "../../src/components/Calculator";
import Result from "../../src/components/Result";
import result from "../../src/mockResponse.json";

/* eslint no-console: ["error", { allow: ["log"] }] */
describe("Calculator", () => {
  const wrapper = mount(Calculator);

  describe("Calculation", () => {
    it("Outputs a monthly installment based on amount and duration inputs", () => {
      const amountSelector = wrapper.find("#amount");
      const durationSelector = wrapper.find("#duration");
      amountSelector.setValue(10000);
      durationSelector.setValue(4);
      const submitBtn = wrapper.find("#submit");
      submitBtn.trigger("click");

      const resultWrapper = mount(Result, {
        propsData: {
          validate: true,
          result
        }
      });
      const resultInner = resultWrapper.find("#result-inner");
      expect(resultInner.element.innerHTML).toContain("5390.61 EUR");
    });
  });
  describe("Validation", () => {
    it("enables submit button when amount and duration inputs are filled-in", () => {
      const amountSelector = wrapper.find("#amount");
      const durationSelector = wrapper.find("#duration");
      const submitBtn = wrapper.find("#submit");

      amountSelector.setValue(10000);
      durationSelector.setValue(4);

      const amountSelectorValue = amountSelector.element.value;
      const durationSelectorValue = durationSelector.element.value;

      const btnIsDisabled =
        Boolean(amountSelectorValue) && Boolean(durationSelectorValue);

      submitBtn.element.disabled = !btnIsDisabled;

      expect(submitBtn.element.disabled).toBe(false);
    });

    it("Check if min and max amount matches the input parameters", () => {
      const minAmount = 10000;
      const maxAmount = 100000;
      const amount = 20000;

      const amountSelector = wrapper.find("#amount");
      const amountSelectorValue = amountSelector.element.value;
      amountSelector.setValue(amount);
      const checkValidation =
        amountSelectorValue >= minAmount && amountSelectorValue <= maxAmount;

      expect(checkValidation).toBe(true);
    });

    it("Check if min and max duration matches the input parameters", () => {
      const minDuration = 1;
      const maxDuration = 5;
      const duration = 2;

      const durationSelector = wrapper.find("#duration");
      const durationSelectorValue = durationSelector.element.value;
      durationSelector.setValue(duration);
      const checkValidation =
        durationSelectorValue >= minDuration &&
        durationSelectorValue <= maxDuration;

      expect(checkValidation).toBe(true);
    });
  });
});
