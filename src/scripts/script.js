
  const carousel1 = document.querySelector('#carrossel1');
  const carousel2 = document.querySelector('#carrossel2');

  const bsCarousel1 = new bootstrap.Carousel(carousel1);
  const bsCarousel2 = new bootstrap.Carousel(carousel2);

  carousel1.addEventListener('slide.bs.carousel', function (event) {
    bsCarousel2.to(event.to);
  });

  carousel2.addEventListener('slide.bs.carousel', function (event) {
    bsCarousel1.to(event.to);
  });
