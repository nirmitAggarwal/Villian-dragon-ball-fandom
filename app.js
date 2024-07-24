document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const scrollAmount = 120;
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

  setInterval(autoScroll, 3000);

  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((i) => i.classList.remove("expanded"));
      item.classList.add("expanded");
    });
  });
});

function expandTile(item) {
  const items = document.querySelectorAll(".item");
  items.forEach((i) => i.classList.remove("expanded"));
  item.classList.add("expanded");
}
