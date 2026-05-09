const cdnCopyButton = document.getElementById("cdn-copy-btn");
const chaiTailInput = document.getElementById("chaiTail-input");
const chaiTailPreview = document.getElementById("chaiTail-previewTarget");

// Copy Script Tag Logic
cdnCopyButton.addEventListener("click", (event) => {
  navigator.clipboard.writeText(
    "https://chai-tail-vjs.netlify.app/lib/chaiTailwind.min.js",
  );
  alert("cdn coppied!");
});

// Playground Interaction Logic
chaiTailInput.addEventListener("input", (event) => {
  const updatedClasses = chaiTailInput.value.trim().split(" ");
  const currentClasses = chaiTailPreview.classList;

  updatedClasses.forEach((cls) => {
    if (cls.length && !currentClasses.contains(cls)) {
      currentClasses.add(cls);
    }
  });

  if (window.ChaiTail) {
    ChaiTail.$scan();
  }
});
