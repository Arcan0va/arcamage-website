const password = document.getElementById("pass");
const eyeBtn = document.getElementById("eyeball");
const beam = document.getElementById("beam");

eyeBtn.addEventListener("click", () => {
  const isPassword = password.type === "password";

  password.type = isPassword ? "text" : "password";

  // Toggle beam animation
  if (isPassword) {
    beam.parentElement.classList.add("eye-active");
  } else {
    beam.parentElement.classList.remove("eye-active");
  }
});
