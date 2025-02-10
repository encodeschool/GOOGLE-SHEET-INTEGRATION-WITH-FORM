const scriptURL = "https://script.google.com/macros/s/AKfycbxeXfuO6Wfd0KS8re-22c5kqbtGqaUUBvD7bTlC1wq1AmoilNxQXU2u-omFWhVd5Ku0/exec";
const form = document.forms["submit-to-google-sheet"];
let successText = document.querySelector("#successfully");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      successText.innerHTML =
        "<i class='bx bx-check'></i> Your mail was sent successfully";
      setTimeout(() => {
        successText.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
