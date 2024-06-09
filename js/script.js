document.addEventListener('DOMContentLoaded', function() {
  var cH = document.getElementById('crosshair-h');
  var cV = document.getElementById('crosshair-v');
  var dX = document.getElementById('cursor-d');

  document.addEventListener('mousemove', function(e) {
      cH.style.top = e.pageY + 'px';
      cV.style.left = e.pageX + 'px';
      dX.style.left = e.pageX + 'px';
      dX.style.top = e.pageY + 'px';
  });

  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('mouseenter', function() {
          dX.classList.add('xhover');
      });
      links[i].addEventListener('mouseleave', function() {
          dX.classList.remove('xhover');
      });
  }
});