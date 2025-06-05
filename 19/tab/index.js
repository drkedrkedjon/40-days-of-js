"use strict";

const tabBar = document.querySelector("#tab-bar");
const tabBarBtn = tabBar.querySelectorAll("button");
tabBar.addEventListener("click", handleTabClick);
const allTabsContent = document.querySelectorAll(".tab-content");

function deselectAllBtn() {
  tabBarBtn.forEach((btn) => {
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
    }
  });
}

function hideAllTabsContent() {
  allTabsContent.forEach((tab) => {
    if (tab.classList.contains("show")) {
      tab.classList.remove("show");
    }
  });
}

function handleTabClick(e) {
  const targetBtn = e.target.id;
  deselectAllBtn();
  hideAllTabsContent();

  switch (targetBtn) {
    case "btn1":
      allTabsContent.forEach((tabCont) => {
        if (tabCont.id === "tab1") {
          tabCont.classList.add("show");
        }
      });
      tabBarBtn.forEach((btn) => {
        if (btn.id === "btn1") {
          btn.classList.add("selected");
        }
      });
      break;
    case "btn2":
      allTabsContent.forEach((tabCont) => {
        if (tabCont.id === "tab2") {
          tabCont.classList.add("show");
        }
      });
      tabBarBtn.forEach((btn) => {
        if (btn.id === "btn2") {
          btn.classList.add("selected");
        }
      });
      break;
    case "btn3":
      allTabsContent.forEach((tabCont) => {
        if (tabCont.id === "tab3") {
          tabCont.classList.add("show");
        }
      });
      tabBarBtn.forEach((btn) => {
        if (btn.id === "btn3") {
          btn.classList.add("selected");
        }
      });
      break;
  }
}
