document.addEventListener('DOMContentLoaded', function () {
    var productThumb = new Swiper('.small-image', {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
  
    var productBig = new Swiper('.big-image', {
      loop: true,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: productThumb,
      },
    });
  });
  
// document.addEventListener('DOMContentLoaded', function () {
//     var productThumb = new Swiper('.small-image', {
//       loop: true,
//       spaceBetween: 10,
//       slidesPerView: 3,
//       freeMode: true,
//       watchSlidesProgress: true,
//       breakpoints: {
//         481: {
//           spaceBetween: 32,
//         },
//       },
//     });
  
//     var productBig = new Swiper('.big-image', {
//       loop: true,
//       autoHeight: true,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       thumbs: {
//         swiper: productThumb,
//       },
//     });
//   });
  
// //product image slider
// var productThumb = new Swiper ('.small-image', {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 3,
//     freeMode: true,
//     watchSlidesProgress: true,
//     breakpoints: {
//         481: {
//             spaceBetween: 32.
//         }
//     }
// });
// var productBig = new Swiper ('.big-image', {
//     loop: true,
//     autoHeight: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         preEl: '.swiper-button-prev',
//     },
//     thumbs: {
//         swiper: productThumb,

//     }
// })
