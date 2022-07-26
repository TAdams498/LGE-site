/*
let content = document.querySelector("div.content");

const homeButton = document.querySelector(".home");
const scheduleButton = document.querySelector(".schedule");
const teamsButton = document.querySelector(".teams");
const mediaButton = document.querySelector(".media");
const aboutButton = document.querySelector(".about");

homeButton.addEventListener("click", (e) => {
  content.className = "content home";
  changeTab(e.target);
  event.stopPropagation();
});

scheduleButton.addEventListener("click", (e) => {
  content.className = "content schedule";
  changeTab(e.target);
  event.stopPropagation();
});

teamsButton.addEventListener("click", (e) => {
  content.className = "content teams";
  changeTab(e.target);
  event.stopPropagation();
});

mediaButton.addEventListener("click", (e) => {
  content.className = "content media";
  changeTab(e.target);
  event.stopPropagation();
});

aboutButton.addEventListener("click", (e) => {
  content.className = "content about";
  changeTab(e.target);
  event.stopPropagation();
});
*/
function resetTabs() {
  const headerTabs = document.querySelectorAll(".header-items a");
  headerTabs.forEach(function (element) {
    //element.classList.remove("active-tab");
    element.style.borderBottom = "2px solid black";
  });
}

function changeTab() {
  resetTabs();
  const activeTab = document.querySelector(".active-tab");
  let color = "#6bb523";
  activeTab.style.borderRight = `2px solid ${color}`;
}

changeTab();
