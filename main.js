const iconmenu = document.getElementById("icon-menu");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const notification = document.querySelector(".notification");
const notificationContainer = document.querySelector(".notification-container");

let menuOpen = false;

function openMenu() {
  menuOpen = true;
  overlay.style.display = "block";
  sidebar.style.width = "250px";
}

function closeMenu() {
  menuOpen = false;
  overlay.style.display = "none";
  sidebar.style.width = "0px";
}

iconmenu.addEventListener("click", function () {
  if (!menuOpen) {
    openMenu();
  }
});

overlay.addEventListener("click", function () {
  if (menuOpen) {
    closeMenu();
  }
});

notification.addEventListener("click", function () {
  notificationContainer.style.display = notificationContainer.style.display === "block" ? "none" : "block";
});
// Đóng notification khi nhấp ra ngoài
window.onclick = (e) => {
  if (notificationContainer.style.display === "block" && !e.target.closest(".dropdown")) {
    notificationContainer.style.display = "none";
  }
};
