const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
    q.addEventListener("click", () => {

        // close all
        document.querySelectorAll(".faq-answer").forEach(a => {
            if (a !== q.nextElementSibling) {
                a.style.display = "none";
            }
        });
        document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {

        const item = q.parentElement;

        document.querySelectorAll(".faq-item").forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});

        // toggle current
        const answer = q.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});