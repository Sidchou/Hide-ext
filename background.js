
// chrome.browserAction.onClicked.addListener(function(tab) {
//   injectJquery()
// });
//
// function hideThemAll() {
//
// }
// function injectJquery(callback) {
//     if (window.jQuery) {
//       return callback(window.jQuery);
//     }
//     let script = document.createElement('script');
//     script.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
//     script.onload = () => callback(window.jQuery);
//     script.onerror = e => alert('The script failed to load: ' + e);
//     document.head.appendChild(script);
//   }
