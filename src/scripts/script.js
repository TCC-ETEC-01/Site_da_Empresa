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

//contato da equipe "pessoa 1"
document.querySelectorAll(".btnToast").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const toast = card.querySelector(".toast");
    const container = card.querySelector(".toastContainer");

    const novoToast = toast.cloneNode(true);
    novoToast.querySelector(".toast-body").innerHTML += `<hr><small>${new Date().toLocaleString()}</small>`;

    container.appendChild(novoToast);

    const bsToast = new bootstrap.Toast(novoToast);
    bsToast.show();
  });
});
// //contato da equipe "pessoa 2"

//  const btnToast2 = document.getElementById("btnToast2");

// btnToast2.addEventListener("click", () => {
//   const toast2 = document.getElementById("toast2");
//   const container = document.getElementById("toastContainer2");

  
//   const novoToast2 = toast2.cloneNode(true);
//   novoToast2.id = ""; 
//   const toastBody2 = novoToast2.querySelector(".toast-body2");
//   toastBody2.innerHTML += `<hr><small>${new Date().toLocaleString()}</small>`;

//   container.appendChild(novoToast2);
//   const bsToast2 = new bootstrap.Toast(novoToast2);
//   bsToast2.show();

//     if (isOpen) {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } else {
//       content.style.maxHeight = null;
//     }
// });