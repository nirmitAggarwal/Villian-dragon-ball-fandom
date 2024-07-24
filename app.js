document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const scrollAmount = 120; // Adjust based on your item width and container width
  let scrollPosition = 0;

  function autoScroll() {
    if (scrollPosition >= container.scrollWidth - container.clientWidth) {
      scrollPosition = 0;
    } else {
      scrollPosition += scrollAmount;
    }
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }

  setInterval(autoScroll, 3000); // Adjust interval time as needed
});
