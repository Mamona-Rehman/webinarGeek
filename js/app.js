// Initialize all tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    customClass: 'custom-tooltip',
    html: true
  })
})
// countdown.js
$(document).ready(function () {
    const $countdownNumbers = $('.countdown-number');
    const $countdownContainer = $('.countdown-container');

    const targetDate = new Date('December 10, 2025 21:30:00 GMT+0500').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            $countdownContainer.html('<div class="countdown-item"><div class="countdown-number">Event Started!</div></div>');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $countdownNumbers.eq(0).text(String(days).padStart(2, '0'));
        $countdownNumbers.eq(1).text(String(hours).padStart(2, '0'));
        $countdownNumbers.eq(2).text(String(minutes).padStart(2, '0'));
        $countdownNumbers.eq(3).text(String(seconds).padStart(2, '0'));
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
function getRegistrationLink() {
    return $('#registrationLink').val();
}

$('#copyBtn').on('click', function () {
    const $linkInput = $('#registrationLink');
    $linkInput.select();
    document.execCommand('copy'); // fallback for older browsers

    const $copyText = $('#copyText');
    $copyText.text('Copied!');
    setTimeout(() => {
        $copyText.text('Copy');
    }, 2000);
});

$('#facebookShare').on('click', function () {
    const url = encodeURIComponent(getRegistrationLink());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
});

$('#twitterShare').on('click', function () {
    const url = encodeURIComponent(getRegistrationLink());
    const text = encodeURIComponent('How to Land Consulting Clients (Without Being "Salesy")');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
});

$('#linkedinShare').on('click', function () {
    const url = encodeURIComponent(getRegistrationLink());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
});

$('#emailShare').on('click', function () {
    const url = encodeURIComponent(getRegistrationLink());
    const subject = encodeURIComponent('How to Land Consulting Clients (Without Being "Salesy")');
    const body = encodeURIComponent(`Check out this webinar: ${getRegistrationLink()}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
