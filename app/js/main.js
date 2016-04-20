new Vivus('sean-logo', {
  duration: 300,
  pathTimingFunction: Vivus.EASE_IN,
  onReady: function (obj) {
    obj.el.style.opacity = 1;
  }
}, function(obj) {
  obj.el.classList.add('finished');
  var el = document.getElementById('time-to-scroll');
  el.classList.add('scroll-time');
});