const form = document.querySelector("#subscription-form");
const notificationField = document.querySelector("#notification-field");
const errorMsg = document.querySelector("span.error");

const emailPattern =
  /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const isValid = () => notificationField.classList.contains("valid");

const handleSubmit = (e) => {
  e.preventDefault();
  validate(e);

  if (isValid()) {
    // show toast message
    Toastify({
      text: "Thanks for subscribing",
      backgroundColor: "hsl(120, 74%, 52%)",
    }).showToast();

    setTimeout(() => {
      form.reset();
      location.reload();
    }, 3600);
  } else {
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
    notificationField.focus();
  }
};

const validate = () => {
  let target = notificationField;
  errorMsg.textContent = "Please provide a valid email address";

  if (!emailPattern.test(target.value)) {
    target.classList.add("error");
    target.classList.remove("valid");
    errorMsg.classList.remove("visually-hidden");
  } else {
    target.classList.remove("error");
    target.classList.add("valid");
    errorMsg.classList.add("visually-hidden");
  }
};

notificationField.addEventListener("keyup", validate);

form.addEventListener("submit", handleSubmit);
