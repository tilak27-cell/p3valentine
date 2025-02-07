const messages = [
    "Thay char lah?",
    "Tagal thay char lah??",
    "Sin Sar pah own",
    "Phoo Phoo yay...",
    "Htet sin sar kyi own",
    "No so wan nel mhar naw",
    "Wan nel mhar naw loh",
    "Pee yaw mayyyy tot boo",
    "hehe sa dar, just say yes please!❤️",
    "chit tel naw, mwah ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
