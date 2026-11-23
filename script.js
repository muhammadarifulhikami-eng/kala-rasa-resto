const WHATSAPP_NUMBER = "6287877590663";

// Filter Menu Kategori
document.querySelectorAll(".menu-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const cat = tab.getAttribute("data-cat");
    document.querySelectorAll(".menu-card").forEach((card) => {
      const show = cat === "all" || card.getAttribute("data-cat") === cat;
      card.classList.toggle("hidden", !show);
    });
  });
});

// Pesan Menu via WhatsApp
document.querySelectorAll(".btn-order-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.getAttribute("data-item");
    const text = `Halo Kala Rasa Café & Resto, saya ingin memesan:%0A- ${encodeURIComponent(item)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
  });
});

// Klaim Promo via WhatsApp
document.getElementById("claimPromoBtn")?.addEventListener("click", () => {
  const text = "Halo Kala Rasa Café & Resto, saya ingin klaim Promo Spesial Bulan Ini.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

// Modal Reservasi Meja
const reserveModal = document.getElementById("reserveModal");

function openReserveModal(e) {
  if (e) e.preventDefault();
  const dateInput = document.getElementById("resDate");
  if (dateInput && !dateInput.value) {
    dateInput.value = new Date().toISOString().split("T")[0];
  }
  reserveModal.classList.add("open");
  reserveModal.setAttribute("aria-hidden", "false");
}

function closeReserveModal() {
  reserveModal.classList.remove("open");
  reserveModal.setAttribute("aria-hidden", "true");
}

["openReserveNav", "openReserveHero", "openReserveLoc", "footerReserveLink"].forEach((id) => {
  document.getElementById(id)?.addEventListener("click", openReserveModal);
});

document.getElementById("reserveClose")?.addEventListener("click", closeReserveModal);
reserveModal?.addEventListener("click", (e) => {
  if (e.target === reserveModal) closeReserveModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeReserveModal();
});

document.getElementById("reserveForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("resName").value.trim();
  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;
  const guests = document.getElementById("resGuests").value;
  const note = document.getElementById("resNote").value.trim();
  const msg = `Halo Kala Rasa Café & Resto, saya ingin reservasi meja:%0A%0ANama: ${encodeURIComponent(name)}%0ATanggal: ${encodeURIComponent(date)}%0AJam: ${encodeURIComponent(time)} WIB%0AJumlah Tamu: ${encodeURIComponent(guests)}${note ? `%0ACatatan: ${encodeURIComponent(note)}` : ""}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener");
  closeReserveModal();
});

// Mobile Drawer
const mobileToggle = document.getElementById("mobileToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
mobileToggle?.addEventListener("click", () => mobileDrawer.classList.toggle("open"));
mobileDrawer?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileDrawer.classList.remove("open"));
});
