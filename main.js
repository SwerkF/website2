var typed = new Typed('#title', {
  strings: ['', 'Mon nom est Oliwer SKWERES.'],
  startDelay: 500,
  typeSpeed: 20,
  onComplete: function(self) { document.getElementById('titleId').getElementsByTagName("span")[0].innerHTML=""; 
  var typed2 = new Typed('#subtitle', {
      strings: ['', 'Je suis un jeune developpeur Web.'],
      startDelay: 100,
      typeSpeed: 20,
      onComplete: function(self) { document.getElementById('subtitleId').getElementsByTagName("span")[0].innerHTML="";
      var typed3 = new Typed('#subtitle2', {
          strings: ['', 'Et voici mon Portfolio.'],
          startDelay: 100,
          typeSpeed: 20,
        });}
    });}
});



document.addEventListener("DOMContentLoaded", () => {
});

var checkScrollSpeed = (function(settings){
  settings = settings || {};

  var lastPos, newPos, timer, delta, 
      delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();
  
  return function(){
    newPos = window.scrollY;
    if ( lastPos != null ){ // && newPos < maxScroll 
      delta = newPos -  lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
})();

// listen to "scroll" event
window.onscroll = function(){
};