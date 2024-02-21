import constraints from "./constraints.js";
import cepAutoComplete from "./cepAutoComplete.js";

const form = document.getElementsByTagName("form")[0];
const inputs = form.querySelectorAll('input:not([type="submit"])');

const isRequired = (elem) => elem.hasAttribute("required");
const isEmpty = (elem) => elem.validity.valueMissing;
const getErrorField = (target) => target.nextElementSibling.nextElementSibling;

function showError(target, errorMsg, field) {
  target.classList.add("invalid");
  field.textContent = errorMsg;
}

function cleanField(target, errorField) {
  errorField.textContent = "";
  target.classList.remove("invalid");
}

function verifyField(e) {
  const target = e.target;
  const field = target.getAttribute("name");
  const errorField = getErrorField(target);

  if (isRequired(target)) {
    const regEx = new RegExp(constraints[field][0]);
    const errorMsg = constraints[field][1];
    if (regEx.test(target.value)) {
      target.setCustomValidity("");
      target.classList.remove("invalid");
    } else {
      target.setCustomValidity(errorMsg);
      showError(target, errorMsg, errorField);
    }
  }

  // is an empty field?
  if (isRequired(target) && isEmpty(target))
    showError(target, constraints.empty[0], errorField);

  if (!isRequired(target) && target.value == "") cleanField(target, errorField);
}

inputs.forEach((e) => e.addEventListener("focusout", verifyField));
inputs.forEach((e) => e.addEventListener("input", verifyField));

(function(){
  cepAutoComplete();
})();
