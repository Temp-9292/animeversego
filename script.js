function initSite() {
    const facts = [
        "Did you know? 'Naruto' has over 700 episodes, making it one of the longest anime series!",
        "In 'My Hero Academia', All Might's real name is Toshinori Yagi.",
        "Trending fact: 'Demon Slayer' broke records with its movie adaptation!",
        "'One Piece' creator Eiichiro Oda draws inspiration from real pirates and adventures.",
        "Random: The anime 'Death Note' explores themes of justice and morality.",
        "'Attack on Titan' was inspired by a giant eating people in the creator's dream.",
        "Fun fact: 'Jujutsu Kaisen' features super creative cursed techniques!"
    ];

    const factDisplay = document.getElementById('fact-display');
    const factBtn = document.getElementById('fact-btn');

    if (factBtn && factDisplay) {
        factBtn.addEventListener('click', () => {
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            factDisplay.textContent = randomFact;
        });
    } else {
        console.warn("HTML not loaded yet, retrying...");
        setTimeout(initSite, 300);
    }
}

// ⭐ THIS IS THE IMPORTANT FIX FOR BLOGGER ⭐
document.addEventListener("DOMContentLoaded", initSite);
