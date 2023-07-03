var themePickerBtn = document.getElementById("theme-picker-btn");
var themePickerWindow = document.getElementById("theme-picker-window");

themePickerBtn.addEventListener("click", function() {
  themePickerWindow.style.display = "block";
});

var themeOptions = document.querySelectorAll(".theme-option");

for (var i = 0; i < themeOptions.length; i++) {
  themeOptions[i].addEventListener("click", function() {
    var selectedTheme = this.classList[1];
    document.body.className = selectedTheme;
    themePickerWindow.style.display = "none";
  });
}