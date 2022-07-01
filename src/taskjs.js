let src='./language.js?cb=googleTranslateElementInit';


export default function googleTranslateElementInit() {
    new google.translate.TranslateElement("google_translate_element");
}

const pass = document.querySelector("#eyepwd");
const password = document.querySelector("#pwd");

pass.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});