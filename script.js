// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();

// Copy-email button
const emailLink = document.getElementById("email");
const copyButton = document.getElementById("copy-email");
const status = document.getElementById("copy-status");
let resetTimer;

copyButton.addEventListener("click", async () => {
  const address = emailLink.textContent.trim();

  try {
    await navigator.clipboard.writeText(address);
    status.textContent = "Email copied.";
    copyButton.textContent = "Copied";
  } catch (err) {
    status.textContent = "Couldn't copy. Select the address and copy it manually.";
  }

  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    status.textContent = "";
    copyButton.textContent = "Copy email";
  }, 2500);
});
