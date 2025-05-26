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

// Fungsi confetti lembut berulang di birthday section
// function launchGentleConfetti() {
//   confetti({
//     particleCount: 2,
//     spread: 70,
//     origin: { y: 0.2 },
//     colors: ["#ffb3c6", "#ffc6d0", "#ffd6e0"],
//     gravity: 0.3,
//     scalar: 0.6,
//   });
// }

// // Jalankan confetti lembut terus-menerus
// setInterval(launchGentleConfetti, 300);

// Observer: memicu confetti saat section terlihat
// const observedSections = document.querySelectorAll(
//   ".scrapbook, .agenda-section, .letter-section"
// // );
// const confettiPlayed = new Set();

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting && !confettiPlayed.has(entry.target)) {
//         triggerConfetti();
//         confettiPlayed.add(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.5,
//   }
// );

// observedSections.forEach((section) => observer.observe(section));

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

// let alreadyTriggered = false;

// window.addEventListener("scroll", () => {
//   if (!alreadyTriggered && window.scrollY > 500) {
//     confetti({
//       particleCount: 150,
//       spread: 100,
//       origin: { y: 0.6 },
//     });
//     alreadyTriggered = true;
//   }
// });

// Back to top
// BACK TO TOP
// document.addEventListener("DOMContentLoaded", () => {
//   const backToTopBtn = document.getElementById("backToTop");

//   // Munculkan tombol saat scroll > 300px
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 100) {
//       backToTopBtn.classList.add("show");
//     } else {
//       backToTopBtn.classList.remove("show");
//     }
//   });

//   // Scroll ke atas saat tombol diklik
//   backToTopBtn.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// });

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

const icons = ["🎈", "💖", "⭐", "🎉", "✨"];

window.addEventListener("scroll", () => {
  if (Math.random() > 0.7) {
    // Biar tidak terlalu sering
    createFloatingIcon();
  }
});

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
    const loveEmojis = ["❤️", "💕", "💖", "💘", "💗"];
    love.innerText = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

    // Random posisi horizontal
    love.style.left = Math.random() * 100 + "vw";

    // Random ukuran
    love.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(love);

    // Hapus setelah animasi selesai (2 detik)
    setTimeout(() => {
      love.remove();
    }, 2000);
  });
});
