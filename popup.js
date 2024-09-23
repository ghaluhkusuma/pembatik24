// Get the popup container, video, and close button elements
const popupContainer = document.getElementById("popup-container");
const video = document.getElementById("video");
const closeBtn = document.getElementById("close-btn");

// Check if the video has already been played before in this session
if (!sessionStorage.getItem("videoPlayed")) {
  // Show the video popup
  popupContainer.style.display = "block";
  // Play the video
  video.play();

  // Set a flag to indicate that the video has been played in this session
  sessionStorage.setItem("videoPlayed", true);
}

// Listen for the video to finish playing
video.addEventListener("ended", function () {
  // Show the close button
  closeBtn.style.display = "block";
});

// Add an event listener to the close button
closeBtn.addEventListener("click", function () {
  // Hide the popup
  popupContainer.style.display = "none";
});