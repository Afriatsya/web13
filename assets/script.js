// ============================
// Dropdown Submenu
// ============================
function toggleDropdown(id, event) {
  event.preventDefault();
  const submenu = document.getElementById(id);
  const button = event.currentTarget;
  const arrow = button.querySelector(".arrow");

  const isVisible = submenu.style.display === "block";
  submenu.style.display = isVisible ? "none" : "block";

  if (isVisible) {
    button.classList.remove("active");
    if (arrow) arrow.style.transform = "rotate(0deg)";
  } else {
    button.classList.add("active");
    if (arrow) arrow.style.transform = "rotate(180deg)";
  }
}

// ============================
// Toggle Gallery
// ============================
function toggleGallery(event) {
  event.preventDefault();
  const gallery = document.getElementById('gallery-content');
  const button = event.currentTarget;
  const arrow = button.querySelector(".arrow");

  const isVisible = !gallery.classList.contains('hidden');
  gallery.classList.toggle('hidden');
  button.classList.toggle('active');

  if (arrow) {
    arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
  }
}

// ============================
// Tutup Submenu Saat Klik di Luar
// ============================
window.onclick = function(event) {
  const buttons = ['submenu', 'submenu2', 'submenu3'];

  buttons.forEach(id => {
    const submenu = document.getElementById(id);
    const button = document.querySelector(`[onclick*="${id}"]`);
    const arrow = button?.querySelector(".arrow");

    if (submenu && !event.target.closest('.cta-button')) {
      submenu.style.display = "none";
      button?.classList.remove("active");
      if (arrow) arrow.style.transform = "rotate(0deg)";
    }
  });
};

// ============================
// Fitur Like, Komentar, Share
// ============================
function likePost(button) {
  const countSpan = button.querySelector('.like-count');
  let count = parseInt(countSpan.innerText);
  count++;
  countSpan.innerText = count;
}

function postComment(event, form) {
  event.preventDefault();
  const input = form.querySelector('.comment-input');
  const commentList = form.parentElement.querySelector('.comment-list');

  if (input.value.trim() === '') return;

  const comment = document.createElement('div');
  comment.textContent = input.value;
  commentList.appendChild(comment);

  input.value = '';
}

function sharePost() {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => {
      alert('Link halaman telah disalin ke clipboard! 🚀');
    })
    .catch(() => {
      alert('Gagal menyalin link 😢');
    });
}

// ============================
// Scroll ke Section Program
// ============================
document.getElementById("lihatProgramBtn").addEventListener("click", function(e) {
  e.preventDefault();
  const section = document.getElementById("programSection");
  section.style.display = section.style.display === "none" ? "block" : "none";
  section.scrollIntoView({ behavior: "smooth" });
});


  
  