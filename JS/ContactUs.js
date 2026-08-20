function validateForm() {
  const form = document.forms["myForm"];
  const name = form["name"].value.trim();
  const email = form["email"].value.trim();
  const phone = form["phone"].value.trim();
  const message = form["message"].value.trim();

  // Check if all fields are filled
  if (!name || !email || !phone || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Validate Name
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return;
  }

  // Validate Email
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate Phone Number
  if (phone.length !== 10 || isNaN(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  // Validate Message
  if (message.length < 10) {
    alert("Message must be at least 10 characters long.");
    return;
  }

  // Success
  alert("Form submitted successfully!");
  form.reset();
}
