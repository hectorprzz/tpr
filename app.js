
document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-button");
    const commentButtons = document.querySelectorAll(".comment-button");

    likeButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Lógica para dar me gusta a una publicación
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Lógica para comentar en una publicación
        });
    });
});
