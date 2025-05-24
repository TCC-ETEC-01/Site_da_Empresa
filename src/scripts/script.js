const carouselImages = document.getElementById('carouselImages');
const carouselText = document.getElementById('carouselText');

const bsCarouselImages = new bootstrap.Carousel(carouselImages);
const bsCarouselText = new bootstrap.Carousel(carouselText);

// Sincronizar o carrossel de imagens com o de texto
carouselImages.addEventListener('slide.bs.carousel', function (e) {
  bsCarouselText.to(e.to);
});

// Opcional: sincronizar o texto com as imagens também
carouselText.addEventListener('slide.bs.carousel', function (e) {
  bsCarouselImages.to(e.to);
});


// menu equipe click
const avatares = document.querySelectorAll('.avatar');

avatares.forEach(avatar => {
  avatar.addEventListener('click', () => {
    const membro = avatar.parentElement;
    const info = membro.querySelector('.info-membro');


    document.querySelectorAll('.info-membro').forEach(el => {
      if (el !== info) {
        el.style.visibility = 'collapse';
      }
    });


    if (info.style.visibility === 'visible') {
      info.style.visibility = 'collapse';
    } else {
      info.style.visibility = 'visible';
    }
  });
});

    document.querySelectorAll(".btnToast").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const toastEl = card.querySelector(".toast");

        let bsToast = bootstrap.Toast.getInstance(toastEl);
        if (!bsToast) {
          bsToast = new bootstrap.Toast(toastEl);
        }

        bsToast.show();
      });
    });

    document.addEventListener("click", (event) => {
      document.querySelectorAll(".toast.show").forEach((toastEl) => {
        const card = toastEl.closest(".card");
        const btnToast = card.querySelector(".btnToast");

        if (
          !toastEl.contains(event.target) &&
          !btnToast.contains(event.target)
        ) {
          const bsToast = bootstrap.Toast.getInstance(toastEl);
          if (bsToast) bsToast.hide();
        }
      });
    });

const carouselImg = document.getElementById('carouselImg');
const bsCarouselImg = new bootstrap.Carousel(carouselImg);

