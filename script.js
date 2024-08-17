document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const nachrichtenFenster = document.getElementById('nachrichtenFenster');
    const nachrichten = document.querySelectorAll('.nachricht');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentIndex = 0;

    toggleButton.addEventListener('click', function() {
        nachrichtenFenster.classList.toggle('hidden');

        if (!nachrichtenFenster.classList.contains('hidden')) {
            showNachricht(currentIndex);
        }
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : nachrichten.length - 1;
        showNachricht(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < nachrichten.length - 1) ? currentIndex + 1 : 0;
        showNachricht(currentIndex);
    });

    function showNachricht(index) {
        nachrichten.forEach((nachricht, i) => {
            nachricht.classList.toggle('active', i === index);
        });
    }
});
