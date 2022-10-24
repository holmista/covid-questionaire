import { defineRule } from "vee-validate"; // npm install vee-validate --save
import { required, email, min, max, alpha } from "@vee-validate/rules"; // npm install @vee-validate/rules

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("alpha", alpha);
defineRule("redberry_email", (value) => {
  return value.endsWith("@redberry.ge");
});
