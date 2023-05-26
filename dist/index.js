"use strict";
const passInput = document.querySelector(".passInput input");
const eyeInput = document.querySelector(".passInput i");
const button = document.querySelector("button");
const requirementsList = [
    ...document.querySelectorAll(".requirements-list li"),
];
const requirements = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[a-z]/, index: 1 },
    { regex: /[A-Z]/, index: 2 },
    { regex: /[0-9]/, index: 3 },
    { regex: /[^A-Za-z-0-9]/, index: 4 },
];
eyeInput === null || eyeInput === void 0 ? void 0 : eyeInput.addEventListener("click", () => {
    passInput.type = passInput.type === "password" ? "text" : "password";
    eyeInput.className = `fa-solid fa-eye${passInput.type === "password" ? "" : "-slash"}`;
});
passInput.addEventListener("keyup", (event) => {
    const element = event.target;
    requirements.forEach((item) => {
        const isValid = item.regex.test(element.value);
        const requirementItem = requirementsList[item.index];
        if (isValid) {
            requirementItem.classList.add("valid");
            if (requirementItem.firstElementChild instanceof HTMLElement) {
                requirementItem.firstElementChild.className = "fa-solid fa-check";
            }
        }
        else {
            requirementItem.classList.remove("valid");
            if (requirementItem.firstElementChild instanceof HTMLElement) {
                requirementItem.firstElementChild.className = "fa-solid fa-circle";
            }
        }
    });
});
passInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        const submitEvent = new Event("submit");
        passInput.dispatchEvent(submitEvent);
    }
});
passInput.addEventListener("submit", () => {
    passInput.value = "";
    window.location.href = window.location.href;
});
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    passInput.value = "";
    window.location.href = window.location.href;
});
//# sourceMappingURL=index.js.map