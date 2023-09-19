
const commentsContainer = document.getElementById('commentsContainer');

function addComment(commentText) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.textContent = commentText;
    commentsContainer.appendChild(commentElement);
}


addComment('¡Gran artículo!');


