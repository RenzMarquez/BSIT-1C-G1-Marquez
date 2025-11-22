let scrollAmount = 0;
const cards = document.getElementById("cards");
const cardWidth = 280;

function slide(direction) {
    scrollAmount += direction * cardWidth;
    const maxScroll = cards.scrollWidth - cards.parentElement.clientWidth;
    scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));
    cards.style.transform = `translateX(-${scrollAmount}px)`;
}

function toggleOverlay(card) {
    card.classList.toggle("active");
}

function goToActivities() {
    document.getElementById("activities").scrollIntoView({ behavior: "smooth" });
}

function goToAboutUs() {
    document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" });
}

function toggleAndNavigate(card, url) {
    card.classList.toggle("active");
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}


function closeViewer() {
    const viewer = document.getElementById("viewer");
    viewer.classList.remove("show");
    setTimeout(() => {
        viewer.style.display = "none";
    }, 400);
}
function openViewer(memberId) {
    // Scroll smoothly to the member section
    document.getElementById(memberId).scrollIntoView({ behavior: "smooth" });
}