const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  alert("Form submitted successfully!");
});
