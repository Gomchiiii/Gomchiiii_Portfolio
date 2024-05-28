<script>
    document.addEventListener('DOMContentLoaded', function() {
        var lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);

        var designs = document.querySelectorAll('.design-grid a');
        designs.forEach(function(design) {
            design.addEventListener('click', function(e) {
                e.preventDefault();
                var img = document.createElement('img');
                img.src = this.getAttribute('href');
                lightbox.innerHTML = '';
                lightbox.appendChild(img);
                lightbox.style.display = 'block';
            });
        });

        lightbox.addEventListener('click', function() {
            this.style.display = 'none';
        });
    });
</script>