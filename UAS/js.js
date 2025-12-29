// highlight navbar link sesuai halaman aktif
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();

// statistik counter sederhana
function animateCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  counters.forEach((el) => {
    const target = Number(el.getAttribute("data-counter")) || 0;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 20);
  });
}

// jalankan counter kalau ada elemen statistik
window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("[data-counter]")) animateCounters();
});

// validasi form kontak (bootstrap)
(function () {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          return;
        }

        // Simulasi kirim
        const nama = form.querySelector("#nama")?.value || "";
        const email = form.querySelector("#email")?.value || "";
        const pesan = form.querySelector("#pesan")?.value || "";

        const output = document.querySelector("#hasilKirim");
        if (output) {
          output.innerHTML = `
            <div class="alert alert-success">
              <strong>Berhasil!</strong> Pesan kamu tersimpan (simulasi).<br>
              Nama: ${nama}<br>
              Email: ${email}<br>
              Pesan: ${pesan}
            </div>
          `;
        }

        form.reset();
        form.classList.remove("was-validated");
      },
      false
    );
  });
})();

// =========================
// DARK / LIGHT TOGGLE
// =========================
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  // cek preferensi tersimpan
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️ Light";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "☀️ Light";
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.textContent = "🌙 Dark";
      localStorage.setItem("theme", "dark");
    }
  });
}
