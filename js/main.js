$(`.nav_bar>i`).on(`click`, function () {
  // $(`.test`).css({
  //     "display" : "flex"
  // })
  $(`.destination`).css({
    top: "0%",
  });
  $(`.test`).fadeToggle(500);
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// // fetch
// // my data container
// let container_data = document.querySelector(`main`);
// // getting data
// let get_data = async () => {
//   let item = ``;
//   let response = await fetch(` http://localhost:1000/post`)
//     .then(function (response) {
//       return response.json();
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
//   response.map(function (elem) {
//     item += `
//     <div class="container_1">
//         <div class="home_banner">
//                 <header class="header">
//                 <!-- logo -->
//                 <div class="logo">
//                     <a href="">
//                         <img src="./image/travel_logo_1x.png" alt="" ${elem.img}>
//                     </a>
//                 </div>
//                 <!-- logo -->
//                 <!-- nav -->
//                 <nav class="navigation">
//                     <ul>
//                         <li>
//                             <a href="">
//                             ${elem.aboutus}
//                             </a>
//                         </li>
//                         <li>
//                             <a href="">
//                             ${elem.destinations}
//                             </a>
//                         </li>
//                         <li>
//                             <a href="">
//                             ${elem.blog}
//                             </a>
//                         </li>
//                         <li>
//                             <a href="">
//                             ${elem.reservations}
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <!-- nav -->
//                 <!-- social -->
//                 <div class="social">
//                     <a href="">
//                         <i class="fa fa-facebook" aria-hidden="true"></i>
//                     </a>
//                     <a href="">
//                         <i class="fa fa-twitter" aria-hidden="true"></i>
//                     </a>
//                     <a href="">
//                         <i class="fa fa-instagram" aria-hidden="true"></i>
//                     </a>
//                     <a href="">
//                         <i class="fa fa-telegram" aria-hidden="true"></i>
//                     </a>
//                     <a href="">
//                         <i class="fa fa-youtube-play" aria-hidden="true" alt="youtube"></i>
//                     </a>
//                 </div>
//                 <!-- social -->
//                     <div class="nav_bar">
//                         <i class="fa fa-bars" aria-hidden="true"></i>
//                     </div>
//                 </header>
//                 <div class="test">
//                 <ul>
//                     <li>
//                         <a href=""> ${elem.aboutus}</a>
//                     </li>
//                     <li>
//                         <a href="">${elem.destinations}</a>
//                     </li>
//                     <li>
//                         <a href="">${elem.blog}</a>
//                     </li>
//                     <li>
//                         <a href="">${elem.reservations}</a>
//                     </li>
//                 </ul>
//                 </div>
//                 <div class="destination">
//                 <h1>${elem.h1}</h1>
//                 <h2>${elem.h2}</h2>
//                 <div>
//                     <a href="">${elem.a}</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="container_2">
//         <div class="pool">

//         </div>
//         <div>
//             <div>
//                 <h2>
//                   ${elem.whoarewe}
//                 </h2>
//             </div>
//             <div>

//             </div>
//             <div>
//                 <p>
//                     ${elem.text}
//                 </p>
//             </div>
//         </div>
//     </div>
//     <div class="container_3">
//     <div class="container">
//         <div>
//             <h2>
//                ${elem.wherenext}
//             </h2>
//         </div>
//         <div>

//         </div>
//         <div>
//             <h3>
//                 ${elem.ourteam}
//             </h3>
//         </div>
//         <!-- images -->
//         <div class="image">
//             <div class="image_container_1">
//                 <div>
//                     <a href="">
//                         <img src="./image/view/destination9.jpg" alt="">
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">
//                         <img src="./image/view/destination8.jpg" alt="">
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">
//                         <img src="./image/view/destination7-400x300.jpg" alt="">
//                     </a>
//                 </div>
//             </div>
//             <div class="image_container_2">
//                 <div>
//                     <a href="">
//                         <img src="./image/view/destination6-400x300.jpg" alt="">
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">
//                         <img src="./image/view/destination5-400x300.jpg" alt="">
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">
//                         <img src="./image/view/destination4-400x300.jpg" alt="">
//                     </a>
//                 </div>
//             </div>
//         </div>
//         <!-- end of images -->
//     </div>
//     </div>

//     <div class="view">
//         <a href="">${elem.view}</a>
//     </div>

//     <section class="swiperr">
//         <div class="swiper">
//         <div class="swiper-wrapper">
//         <div class="swiper-slide"><img src="./image/home-parallax.jpg" alt=""></div>
//         <div class="swiper-slide"><img src="./image/view-22.jpg" alt=""></div>
//         </div>
//         <div class="swiper-pagination"></div>
//         <div class="swiper-button-prev"></div>
//         <div class="swiper-button-next"></div>
//         <div class="swiper-scrollbar"></div>
//         </div>
//     </section>

//     <!-- start travel blog -->
//     <div class="container-4">
//         <div class="travel">
//             <div>
//                 <h2>
//                     ${elem.travelblog}
//                 </h2>
//             </div>
//             <div>

//             </div>
//             <div>
//                 <h3>
//                     ${elem.title}
//                 </h3>
//             </div>
//             <div>
//                 <div>
//                     <a href="">
//                         <img src="./image/travel blog/blog11-320x202.jpg" alt="">
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">${elem.topten}</a>
//                     <p>${elem.secendtitle} </p>
//                 </div>
//             </div>
//             <!--  -->
//             <div>
//                 <div>
//                     <a href="">
//                         <img src="./image/travel blog/blog21-700x441.jpg" alt="">
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">${elem.south}</a>
//                     <p>${elem.thirdtitle}</p>
//                 </div>
//             </div>
//             <!--  -->
//             <div>
//                 <div>
//                     <a href="">
//                         <img src="./image/travel blog/blog31-700x441.jpg" alt="">
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">${elem.mountain}</a>
//                     <p>${elem.fourthtitle}</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <!-- end travel blog -->

//     <!-- start footer -->
//     <div class="container-5">
//         <footer class="footer">
//             <div>
//                 <img src="./image/travel_logo_1x.png" alt="">
//             </div>
//             <ul>
//                 <li>
//                     <a href="">
//                         ${elem.aboutus}
//                     </a>
//                 </li>
//                 <li>
//                     <a href="">
//                         ${elem.destinations}
//                     </a>
//                 </li>
//                 <li>
//                     <a href="">
//                         ${elem.blog}
//                     </a>
//                 </li>
//                 <li>
//                     <a href="">
//                         ${elem.reservations}
//                     </a>
//                 </li>
//             </ul>
//         </footer>
//     </div>
//     <div class="hr"></div>
//     <div class="container-6">
//         <div>
//             <p>
//                 ${elem.p}
//             </p>
//         </div>
//         <div>
//             <a href="">
//                 <i class="fa fa-facebook" aria-hidden="true"></i>
//             </a>
//             <a href="">
//                 <i class="fa fa-twitter" aria-hidden="true"></i>
//             </a>
//             <a href="">
//                 <i class="fa fa-instagram" aria-hidden="true"></i>
//             </a>
//             <a href="">
//                 <i class="fa fa-telegram" aria-hidden="true"></i>
//             </a>
//             <a href="">
//                 <i class="fa fa-youtube-play" aria-hidden="true" alt="youtube"></i>
//             </a>
//         </div>
//     </div>
//     <!-- end footer -->
//         `;
//   });
//   container_data.innerHTML = item;
// };
// get_data();
