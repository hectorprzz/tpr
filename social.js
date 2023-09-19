
const socialShareContainer = document.getElementById('socialShare');

const facebookButton = document.createElement('button');
facebookButton.textContent = 'Compartir en Facebook';
facebookButton.addEventListener('click', function () {
   
    alert('Compartiendo en Facebook...');
});

const twitterButton = document.createElement('button');
twitterButton.textContent = 'Compartir en Twitter';
twitterButton.addEventListener('click', function () {

    alert('Compartiendo en Twitter...');
});

socialShareContainer.appendChild(facebookButton);
socialShareContainer.appendChild(twitterButton);
