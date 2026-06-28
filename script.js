const player = document.querySelector(".player");
const playButton = document.querySelector("[data-play]");
const signupForm = document.querySelector("[data-signup]");
const formNote = document.querySelector("[data-form-note]");

if (playButton && player) {
  playButton.addEventListener("click", () => {
    const isPlaying = player.classList.toggle("is-playing");
    playButton.setAttribute("aria-label", isPlaying ? "Pause launch note" : "Preview launch note");
  });
}

if (signupForm && formNote) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(signupForm).get("email");

    if (typeof email === "string" && email.includes("@")) {
      formNote.textContent = "You are on the launch list.";
      signupForm.reset();
    }
  });
}
