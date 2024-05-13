  document.querySelector('.item.status-bar__container').addEventListener('mouseover', function(e) {
    e.target.querySelector('.marquee__inner').style.animationPlayState = 'paused';
  });
  
  document.querySelector('.item.status-bar__container').addEventListener('mouseout', function(e) {
    e.target.querySelector('.marquee__inner').style.animationPlayState = 'running';
  });
