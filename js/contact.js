const contactContainer = document.querySelector(".contact-container");
const contactContent = document.querySelector(".contact-content")
const contactDiv = document.querySelector(".contact");
const body = document.querySelector(".body");

let state = false;

contactDiv.addEventListener("click", () => {

    if (state) {

        contactContainer.style = "--contact-container-left: -100px;";
        contactDiv.style = "--contact-left: 0px;";
        body.classList = "body";
        state = false;
    } else {

        contactContainer.style = "--contact-container-left: 0px;";
        contactDiv.style = "--contact-left: 100px;";
        body.classList = "body disable-scroll";
        state = true;
    }
});