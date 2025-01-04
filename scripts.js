document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3A = document.getElementById('page3A');
    const page3B = document.getElementById('page3B');
    const page3C = document.getElementById('page3C');
    const confirmationDialog = document.getElementById('confirmationDialog');
    const finalPage = document.getElementById('finalPage');

    const nextButton = document.getElementById('nextButton');
    const btnA = document.getElementById('btnA');
    const btnB = document.getElementById('btnB');
    const btnC = document.getElementById('btnC');
    const backToPage2 = document.getElementById('backToPage2');
    const backToPage2B = document.getElementById('backToPage2B');
    const backToPage2C = document.getElementById('backToPage2C');
    const confirmButton = document.getElementById('confirmButton');
    const cancelButton = document.getElementById('cancelButton');

    let selectedOptionText = '';

    // Show the first page
    page1.classList.add('visible');

    // Handle the click event for the "DALEJ" button
    nextButton.addEventListener('click', () => {
        // Hide page 1 and show page 2 with fireworks effect
        page1.classList.remove('visible');
        page2.classList.add('visible');
        startFireworks();
    });

    btnA.addEventListener('click', () => showPage(page3A));
    btnB.addEventListener('click', () => showPage(page3B));
    btnC.addEventListener('click', () => showPage(page3C));

    backToPage2.addEventListener('click', () => showPage(page2));
    backToPage2B.addEventListener('click', () => showPage(page2));
    backToPage2C.addEventListener('click', () => showPage(page2));

    document.querySelectorAll('.concertOption').forEach(button => {
        button.addEventListener('click', () => {
            selectedOptionText = button.textContent;
            showDialog();
        });
    });

    document.querySelectorAll('.tripOption').forEach(button => {
        button.addEventListener('click', () => {
            selectedOptionText = button.textContent;
            showDialog();
        });
    });

    document.querySelectorAll('.randomOption').forEach(button => {
        button.addEventListener('click', () => {
            selectedOptionText = button.textContent;
            showDialog();
        });
    });

    confirmButton.addEventListener('click', () => {
        confirmationDialog.classList.add('hidden');
        finalPage.querySelector('.goldenTicket').textContent = selectedOptionText;
        showPage(finalPage);
        startFireworks();
    });

    cancelButton.addEventListener('click', () => confirmationDialog.classList.add('hidden'));

    function showPage(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('visible'));
        page.classList.add('visible');
    }

    function showDialog() {
        confirmationDialog.classList.remove('hidden');
    }

    function startFireworks() {
        const fireworks = new Fireworks.default(document.body, { /* options */ });
        fireworks.start();
        setTimeout(() => fireworks.stop(), 5000); // Stop fireworks after 5 seconds
    }
});