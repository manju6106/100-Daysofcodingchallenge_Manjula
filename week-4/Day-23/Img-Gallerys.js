document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnails img');
  const fullImage = document.getElementById('fullImage');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const fullImagePath = this.getAttribute('data-fullimage');
      fullImage.setAttribute('src', fullImagePath);
    });
  });
});

