    $("document").ready(() => {
      let _ = ["h1", "h2" , "h3" , "a", "p", "li", "div", "spam" , "cite" , "em"];
    _.forEach(el => {
      $(el).css("color", $(el).css("background-color"));
    })
  })

  // chrome.browserAction.onClicked.addListener(function(tab) {
  //   hideThemAll()
  // });

   // hideThemAll = function() {
   //    let _ = ["h1", "h2", "a", "p", "li", "div"];
   //    _.forEach(el => {
   //      $(el).css("color", $(el).css("background-color"));
   //    });
      // alert("working?")
  // }
