/* ================= LOADER ================= */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 1200);
  }

});


/* ================= MENU ================= */

const ham = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (ham && menu) {

  // Toggle Menu
  ham.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
  });


  // Close on Outside Click
  document.addEventListener("click", (e) => {

    if (!menu.contains(e.target) && !ham.contains(e.target)) {
      menu.classList.remove("active");
    }

  });


  // Close After Click Item
  menu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });

  });

}


/* ================= LIVE CLOCK ================= */

const clockBox = document.getElementById("siteClock");

if (clockBox) {

  const updateClock = () => {

    const now = new Date();

    const h = now.getHours().toString().padStart(2, "0");
    const m = now.getMinutes().toString().padStart(2, "0");

    const y = now.getFullYear();
    const mo = (now.getMonth() + 1).toString().padStart(2, "0");
    const d = now.getDate().toString().padStart(2, "0");

    clockBox.textContent = `${h}:${m} | ${y}/${mo}/${d}`;

  };

  updateClock();
  setInterval(updateClock, 1000);

}
