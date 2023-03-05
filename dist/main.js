/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createHomeInfo": () => (/* binding */ createHomeInfo),
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader)
/* harmony export */ });
const content = document.getElementById('content');

function makeHeader() {
  const header = document.createElement('header');
  content.appendChild(header);

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const h1 = document.createElement('h1');
  h1.textContent = 'Roku Sunset';
  nav.appendChild(h1);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  nav.appendChild(contactBtn);

  const quoteP = document.createElement('p');
  quoteP.classList = 'quote';
  quoteP.textContent = '"Only the pure in heart can make a good soup." \n';
  quoteP.textContent += '-Ludwig Van Beethoven';
  header.appendChild(quoteP);

  const headerImg = document.createElement('img');
  headerImg.src = '/src/imgs/ramen-shop.jpg';
  header.appendChild(headerImg);
}

function createHomeInfo() {
  const aboutP1 = document.createElement('p');
  aboutP1.textContent = `Broth made from scratch with homemade noodles we serve the best ramen you haven't had yet. With only one location
you can be sure we put it all we got into each and every bowl of ramen you eat.`;
  content.appendChild(aboutP1);

  const aboutP2 = document.createElement('p');
  aboutP2.textContent =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quas autem sapiente ullam explicabo delectus totam culpa deserunt saepe laudantium facere eum quis, unde molestiae est magni at ut quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta tenetur recusandae suscipit quibusdam provident dolorem officiis dolores? Similique quibusdam tenetur, minus sed dignissimos aliquid! Illum eaque quam veniam excepturi.';
  content.appendChild(aboutP2);

  const historyH2 = document.createElement('h2');
  historyH2.textContent = 'History of Roku Sunset';
  content.appendChild(historyH2);

  const historyP = document.createElement('p');
  historyP.textContent =
    'While this restaurant may not actually exist, you can rest assured this website was made with a love of web development and good bowl of ramen.';
  content.appendChild(historyP);
}

function createFooter() {
  const footerTag = document.createElement('footer');
  content.appendChild(footerTag);

  const copyright = document.createTextNode('Copyright \xA9 ');
  footerTag.appendChild(copyright);

  const copyrightLink = document.createElement('a');
  copyrightLink.href = 'https://github.com/Royuin';
  copyrightLink.textContent = 'Royuin ';
  footerTag.appendChild(copyrightLink);

  const rightsReserved = document.createTextNode('2023 All Rights Reserved');
  footerTag.appendChild(rightsReserved);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMenuPage": () => (/* binding */ makeMenuPage)
/* harmony export */ });
const content = document.getElementById('content');

function makeMenuHeader() {
  const nav = document.createElement('nav');
  nav.classList = 'menu-nav';
  content.appendChild(nav);

  const h1 = document.createElement('h1');
  h1.textContent = 'Roku Sunset';
  nav.appendChild(h1);

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  nav.appendChild(contactBtn);
}

function makeMainMenu() {
  const mainMenu = document.createElement('div');
  mainMenu.classList = 'main-menu';
  content.appendChild(mainMenu);

  const tonkotsuRamen = document.createElement('div');
  tonkotsuRamen.classList = 'card';
  tonkotsuRamen.textContent = 'Tonkotsu Ramen';
  const tonkotsuRamenImg = document.createElement('img');
  tonkotsuRamenImg.src = '/src/imgs/tonkotsu-ramen.jpg';
  tonkotsuRamen.appendChild(tonkotsuRamenImg);
  mainMenu.appendChild(tonkotsuRamen);

  const shoyuRamen = document.createElement('div');
  shoyuRamen.classList = 'card';
  shoyuRamen.textContent = 'Shoyu Ramen';
  const shoyuRamenImg = document.createElement('img');
  shoyuRamenImg.src = '/src/imgs/shoyu-ramen.jpg';
  shoyuRamen.appendChild(shoyuRamenImg);
  mainMenu.appendChild(shoyuRamen);

  const misoRamen = document.createElement('div');
  misoRamen.classList = 'card';
  misoRamen.textContent = 'Miso Ramen';
  const misoRamenImg = document.createElement('img');
  misoRamenImg.src = '/src/imgs/miso-ramen.jpg';
  misoRamen.appendChild(misoRamenImg);
  mainMenu.appendChild(misoRamen);

  const misoSoup = document.createElement('div');
  misoSoup.classList = 'card';
  misoSoup.textContent = 'Miso Soup';
  const misoSoupImg = document.createElement('img');
  misoSoupImg.src = '/src/imgs/miso-soup.jpg';
  misoSoup.appendChild(misoSoupImg);
  mainMenu.appendChild(misoSoup);

  const udon = document.createElement('div');
  udon.classList = 'card';
  udon.textContent = 'Udon';
  const udonImg = document.createElement('img');
  udonImg.src = '/src/imgs/udon.jpg';
  udon.appendChild(udonImg);
  mainMenu.appendChild(udon);

  const soba = document.createElement('div');
  soba.classList = 'card';
  soba.textContent = 'Soba';
  const sobaImg = document.createElement('img');
  sobaImg.src = '/src/imgs/soba-noodles.jpg';
  soba.appendChild(sobaImg);
  mainMenu.appendChild(soba);
}

function makeFooter() {
  const footerTag = document.createElement('footer');
  content.appendChild(footerTag);

  const copyright = document.createTextNode('Copyright \xA9 ');
  footerTag.appendChild(copyright);

  const copyrightLink = document.createElement('a');
  copyrightLink.href = 'https://github.com/Royuin';
  copyrightLink.textContent = 'Royuin ';
  footerTag.appendChild(copyrightLink);

  const rightsReserved = document.createTextNode('2023 All Rights Reserved');
  footerTag.appendChild(rightsReserved);
}

function makeMenuPage() {
  makeMenuHeader();
  makeMainMenu();
  makeFooter();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtFO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdSb2t1IFN1bnNldCc7XG4gIG5hdi5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgY29uc3QgcXVvdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBxdW90ZVAuY2xhc3NMaXN0ID0gJ3F1b3RlJztcbiAgcXVvdGVQLnRleHRDb250ZW50ID0gJ1wiT25seSB0aGUgcHVyZSBpbiBoZWFydCBjYW4gbWFrZSBhIGdvb2Qgc291cC5cIiBcXG4nO1xuICBxdW90ZVAudGV4dENvbnRlbnQgKz0gJy1MdWR3aWcgVmFuIEJlZXRob3Zlbic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChxdW90ZVApO1xuXG4gIGNvbnN0IGhlYWRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBoZWFkZXJJbWcuc3JjID0gJy9zcmMvaW1ncy9yYW1lbi1zaG9wLmpwZyc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJbWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZUluZm8oKSB7XG4gIGNvbnN0IGFib3V0UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFib3V0UDEudGV4dENvbnRlbnQgPSBgQnJvdGggbWFkZSBmcm9tIHNjcmF0Y2ggd2l0aCBob21lbWFkZSBub29kbGVzIHdlIHNlcnZlIHRoZSBiZXN0IHJhbWVuIHlvdSBoYXZlbid0IGhhZCB5ZXQuIFdpdGggb25seSBvbmUgbG9jYXRpb25cbnlvdSBjYW4gYmUgc3VyZSB3ZSBwdXQgaXQgYWxsIHdlIGdvdCBpbnRvIGVhY2ggYW5kIGV2ZXJ5IGJvd2wgb2YgcmFtZW4geW91IGVhdC5gO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0UDEpO1xuXG4gIGNvbnN0IGFib3V0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFib3V0UDIudGV4dENvbnRlbnQgPVxuICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtcXVlIHF1YXMgYXV0ZW0gc2FwaWVudGUgdWxsYW0gZXhwbGljYWJvIGRlbGVjdHVzIHRvdGFtIGN1bHBhIGRlc2VydW50IHNhZXBlIGxhdWRhbnRpdW0gZmFjZXJlIGV1bSBxdWlzLCB1bmRlIG1vbGVzdGlhZSBlc3QgbWFnbmkgYXQgdXQgcXVvLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOZW1vIGRpY3RhIHRlbmV0dXIgcmVjdXNhbmRhZSBzdXNjaXBpdCBxdWlidXNkYW0gcHJvdmlkZW50IGRvbG9yZW0gb2ZmaWNpaXMgZG9sb3Jlcz8gU2ltaWxpcXVlIHF1aWJ1c2RhbSB0ZW5ldHVyLCBtaW51cyBzZWQgZGlnbmlzc2ltb3MgYWxpcXVpZCEgSWxsdW0gZWFxdWUgcXVhbSB2ZW5pYW0gZXhjZXB0dXJpLic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRQMik7XG5cbiAgY29uc3QgaGlzdG9yeUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGlzdG9yeUgyLnRleHRDb250ZW50ID0gJ0hpc3Rvcnkgb2YgUm9rdSBTdW5zZXQnO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhpc3RvcnlIMik7XG5cbiAgY29uc3QgaGlzdG9yeVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhpc3RvcnlQLnRleHRDb250ZW50ID1cbiAgICAnV2hpbGUgdGhpcyByZXN0YXVyYW50IG1heSBub3QgYWN0dWFsbHkgZXhpc3QsIHlvdSBjYW4gcmVzdCBhc3N1cmVkIHRoaXMgd2Vic2l0ZSB3YXMgbWFkZSB3aXRoIGEgbG92ZSBvZiB3ZWIgZGV2ZWxvcG1lbnQgYW5kIGdvb2QgYm93bCBvZiByYW1lbi4nO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhpc3RvcnlQKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyVGFnKTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29weXJpZ2h0IFxceEE5ICcpO1xuICBmb290ZXJUYWcuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICBjb25zdCBjb3B5cmlnaHRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb3B5cmlnaHRMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1JveXVpbic7XG4gIGNvcHlyaWdodExpbmsudGV4dENvbnRlbnQgPSAnUm95dWluICc7XG4gIGZvb3RlclRhZy5hcHBlbmRDaGlsZChjb3B5cmlnaHRMaW5rKTtcblxuICBjb25zdCByaWdodHNSZXNlcnZlZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcyMDIzIEFsbCBSaWdodHMgUmVzZXJ2ZWQnKTtcbiAgZm9vdGVyVGFnLmFwcGVuZENoaWxkKHJpZ2h0c1Jlc2VydmVkKTtcbn1cbiIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBtYWtlTWVudUhlYWRlcigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdi5jbGFzc0xpc3QgPSAnbWVudS1uYXYnO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdSb2t1IFN1bnNldCc7XG4gIG5hdi5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG59XG5cbmZ1bmN0aW9uIG1ha2VNYWluTWVudSgpIHtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbk1lbnUuY2xhc3NMaXN0ID0gJ21haW4tbWVudSc7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbk1lbnUpO1xuXG4gIGNvbnN0IHRvbmtvdHN1UmFtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9ua290c3VSYW1lbi5jbGFzc0xpc3QgPSAnY2FyZCc7XG4gIHRvbmtvdHN1UmFtZW4udGV4dENvbnRlbnQgPSAnVG9ua290c3UgUmFtZW4nO1xuICBjb25zdCB0b25rb3RzdVJhbWVuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHRvbmtvdHN1UmFtZW5JbWcuc3JjID0gJy9zcmMvaW1ncy90b25rb3RzdS1yYW1lbi5qcGcnO1xuICB0b25rb3RzdVJhbWVuLmFwcGVuZENoaWxkKHRvbmtvdHN1UmFtZW5JbWcpO1xuICBtYWluTWVudS5hcHBlbmRDaGlsZCh0b25rb3RzdVJhbWVuKTtcblxuICBjb25zdCBzaG95dVJhbWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNob3l1UmFtZW4uY2xhc3NMaXN0ID0gJ2NhcmQnO1xuICBzaG95dVJhbWVuLnRleHRDb250ZW50ID0gJ1Nob3l1IFJhbWVuJztcbiAgY29uc3Qgc2hveXVSYW1lbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBzaG95dVJhbWVuSW1nLnNyYyA9ICcvc3JjL2ltZ3Mvc2hveXUtcmFtZW4uanBnJztcbiAgc2hveXVSYW1lbi5hcHBlbmRDaGlsZChzaG95dVJhbWVuSW1nKTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoc2hveXVSYW1lbik7XG5cbiAgY29uc3QgbWlzb1JhbWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pc29SYW1lbi5jbGFzc0xpc3QgPSAnY2FyZCc7XG4gIG1pc29SYW1lbi50ZXh0Q29udGVudCA9ICdNaXNvIFJhbWVuJztcbiAgY29uc3QgbWlzb1JhbWVuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG1pc29SYW1lbkltZy5zcmMgPSAnL3NyYy9pbWdzL21pc28tcmFtZW4uanBnJztcbiAgbWlzb1JhbWVuLmFwcGVuZENoaWxkKG1pc29SYW1lbkltZyk7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKG1pc29SYW1lbik7XG5cbiAgY29uc3QgbWlzb1NvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWlzb1NvdXAuY2xhc3NMaXN0ID0gJ2NhcmQnO1xuICBtaXNvU291cC50ZXh0Q29udGVudCA9ICdNaXNvIFNvdXAnO1xuICBjb25zdCBtaXNvU291cEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtaXNvU291cEltZy5zcmMgPSAnL3NyYy9pbWdzL21pc28tc291cC5qcGcnO1xuICBtaXNvU291cC5hcHBlbmRDaGlsZChtaXNvU291cEltZyk7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKG1pc29Tb3VwKTtcblxuICBjb25zdCB1ZG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVkb24uY2xhc3NMaXN0ID0gJ2NhcmQnO1xuICB1ZG9uLnRleHRDb250ZW50ID0gJ1Vkb24nO1xuICBjb25zdCB1ZG9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHVkb25JbWcuc3JjID0gJy9zcmMvaW1ncy91ZG9uLmpwZyc7XG4gIHVkb24uYXBwZW5kQ2hpbGQodWRvbkltZyk7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKHVkb24pO1xuXG4gIGNvbnN0IHNvYmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc29iYS5jbGFzc0xpc3QgPSAnY2FyZCc7XG4gIHNvYmEudGV4dENvbnRlbnQgPSAnU29iYSc7XG4gIGNvbnN0IHNvYmFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc29iYUltZy5zcmMgPSAnL3NyYy9pbWdzL3NvYmEtbm9vZGxlcy5qcGcnO1xuICBzb2JhLmFwcGVuZENoaWxkKHNvYmFJbWcpO1xuICBtYWluTWVudS5hcHBlbmRDaGlsZChzb2JhKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyVGFnKTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29weXJpZ2h0IFxceEE5ICcpO1xuICBmb290ZXJUYWcuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICBjb25zdCBjb3B5cmlnaHRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb3B5cmlnaHRMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1JveXVpbic7XG4gIGNvcHlyaWdodExpbmsudGV4dENvbnRlbnQgPSAnUm95dWluICc7XG4gIGZvb3RlclRhZy5hcHBlbmRDaGlsZChjb3B5cmlnaHRMaW5rKTtcblxuICBjb25zdCByaWdodHNSZXNlcnZlZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcyMDIzIEFsbCBSaWdodHMgUmVzZXJ2ZWQnKTtcbiAgZm9vdGVyVGFnLmFwcGVuZENoaWxkKHJpZ2h0c1Jlc2VydmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNZW51UGFnZSgpIHtcbiAgbWFrZU1lbnVIZWFkZXIoKTtcbiAgbWFrZU1haW5NZW51KCk7XG4gIG1ha2VGb290ZXIoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWFrZUhlYWRlciwgY3JlYXRlSG9tZUluZm8sIGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBtYWtlTWVudVBhZ2UgfSBmcm9tICcuL21lbnUnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9