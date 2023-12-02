const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Set initial size and position for the "Yes" button
const yesBtnRect = yesBtn.getBoundingClientRect();
yesBtn.style.position = "absolute";
yesBtn.style.width = yesBtnRect.width + "px";
yesBtn.style.height = yesBtnRect.height + "px";
yesBtn.style.left = "50%"; // Centered horizontally
yesBtn.style.marginLeft = -yesBtnRect.width / 2 + "px"; // Adjust for centering

// Set initial size and position for the "No" button
const noBtnRect = noBtn.getBoundingClientRect();
noBtn.style.position = "absolute";
noBtn.style.width = noBtnRect.width + "px";
noBtn.style.height = noBtnRect.height + "px";
noBtn.style.left = "50%"; // Centered horizontally
noBtn.style.marginLeft = noBtnRect.width / 2 + 20 + "px"; // Adjust for centering and add margin

// Event listener for the "Yes" button
yesBtn.addEventListener("click", () => {
    question.innerHTML = "AAAAA WAJDKWHKSKAWDHK I LOVEEE YOUU SO MUCHH MOREE AISHAA!!!";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

// Event listener for the "No" button
noBtn.addEventListener("click", () => {
    const max = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * max);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the position of the "No" button to a random position
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Rest of your code...
