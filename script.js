// Modal handling untuk Scrapbook
const modal = document.getElementById("scrapModal");
const modalImg = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close-button");

// Menambahkan event listener ke setiap item scrapbook
document.querySelectorAll(".scrap-item").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    const text = item.querySelector("p").innerText;

    modal.style.display = "block";
    modalImg.src = img;
    modalText.innerText = text;
  });
});

// Event listener untuk tombol close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Menutup modal jika mengklik area di luar modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Fungsi untuk memicu confetti sekali
function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

// Fungsi untuk membuka modal surat dan generate QR
function openLetterModal() {
  document.getElementById("letterModal").style.display = "block";

  const qrCodeContainer = document.getElementById("qrCodeContainer");
  qrCodeContainer.innerHTML = "";

  const dataForQRCode =
    "https://drive.google.com/drive/folders/1U6vxtnuZKYmrz1lg1qrbAC9iD0Aw4tfw?usp=sharing";

  new QRCode(qrCodeContainer, {
    text: dataForQRCode,
    width: 300,
    height: 300,
    colorDark: "#fe9cb5",
    colorLight: "#ffe5ec",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

// Fungsi menutup modal surat
function closeLetterModal() {
  document.getElementById("letterModal").style.display = "none";
}

window.addEventListener("load", () => {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
});

window.addEventListener("load", () => {
  const bgMusic = document.getElementById("bgMusic");
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(() => {
      console.warn("Browser blocked autoplay. User interaction required.");
    });
  }
});

var audio = document.getElementById("bgMusic");
audio.volume = 0.2; // Menurunkan volume ke 50%

const video = document.getElementById("myVideo");
video.volume = 0.5; // Set volume ke 50%

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myVideo");
  const bgMusic = document.getElementById("bgMusic");

  video.addEventListener("play", () => {
    bgMusic.pause();
  });

  video.addEventListener("pause", () => {
    bgMusic.play();
  });

  video.addEventListener("ended", () => {
    bgMusic.play();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    // Buat love baru
    const love = document.createElement("div");
    love.classList.add("love-particle");

    // Random love emoji
    const loveEmojis = ["❤️"];
    love.innerText = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

    // Random posisi horizontal
    love.style.left = Math.random() * 100 + "vw";

    // Random ukuran
    love.style.fontSize = Math.random() * 10 + 10 + "px";

    document.body.appendChild(love);

    // Hapus setelah animasi selesai (2 detik)
    setTimeout(() => {
      love.remove();
    }, 2000);
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const wantsMusic = confirm("Mau nge-play musik gak? (plis jawab iya)");
  if (wantsMusic) {
    document
      .getElementById("bgMusic")
      .play()
      .catch((err) => {
        console.error("Playback failed:", err);
      });
  }
});
