new Vivus('sean-logo', {
  duration: 300,
  pathTimingFunction: Vivus.EASE_IN
}, function(obj) {
  obj.el.classList.add('finished');
});