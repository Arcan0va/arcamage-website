const pass = document.getElementById("pass");
const btn = document.getElementById("eyeball");
const beam = document.getElementById("beam");

let shown = false;

btn.addEventListener("click", () => {
  shown = !shown;

  // Toggle password
  pass.type = shown ? "text" : "password";

  // Beam effect
  if (shown) {
    beam.style.opacity = "1";
    beam.style.width = "120px";
    beam.style.transform = "translateY(-50%) rotate(-10deg)";
  } else {
    beam.style.opacity = "0";
    beam.style.width = "0px";
  }
});
