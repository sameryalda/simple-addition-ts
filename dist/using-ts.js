"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const result = document.getElementById('result');
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    result.value = add(+input1.value, +input2.value).toString();
});
//# sourceMappingURL=using-ts.js.map