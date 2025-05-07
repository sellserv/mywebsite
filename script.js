const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const outputDiv = document.getElementById('output');
const outputUsername = document.getElementById('output-username');
const targetInput = document.getElementById('target-username');

function updateProgress(percentage) {
    progressBar.style.width = percentage + '%';
    progressBar.innerText = percentage + '%';
}

function simulateHack() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5;
        if (progress > 100) {
            clearInterval(interval);
            updateProgress(100);
            setTimeout(() => {
                progressContainer.style.display = 'none';
                outputUsername.innerText = targetInput.value;
                outputDiv.style.display = 'block';
            }, 1500);
        } else {
            updateProgress(progress);
        }
    }, 200);
}

function startHack() {
    if (targetInput.value.trim() !== "") {
        outputDiv.style.display = 'none';
        progressContainer.style.display = 'block';
        updateProgress(0);
        simulateHack();
    } else {
        alert("Please enter a target username or URL.");
    }
}
