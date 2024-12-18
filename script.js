document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const subscribeBtn = document.getElementById("subscribe-btn");

  // Email validation regex
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Event Listener for Subscribe Button
  subscribeBtn.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();

    if (isValidEmail(emailValue)) {
      // Open success.html in a new fullscreen window
      const successURL = `success.html?email=${encodeURIComponent(emailValue)}`;
      const fullscreenWindow = window.open(
        successURL,
        "_blank",
        "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=0,width=" +
          screen.width +
          ",height=" +
          screen.height
      );

      // Focus on the new window
      if (fullscreenWindow) {
        fullscreenWindow.focus();
      }

      // Clear the input field
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
