
document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.getElementById('resumebutton');
const resumeModal = document.getElementById('resumeModal');
const closeButton = document.querySelector('.close');
 
resumeButton.addEventListener('click', function() {
  resumeModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  resumeModal.style.display = 'none';
});

});
 
