let images = [
  '😂',
  '😊',
  '😍',
  '😜',
  '😤',
  '😩',
  '😎',
  '👍🏾',
  '✊🏾',
  '🏀',
  '🏆',
  '💻',
];

document.addEventListener('mousemove', function (e) {
  let body = document.querySelector('body'),
    emoji = document.createElement('span'),
    x = e.offsetX,
    y = e.offsetY;

  emoji.style.left = x + 'px';
  emoji.style.top = y + 'px';

  let icon = images[Math.floor(Math.random() * images.length)];
  emoji.innerText = icon;

  body.appendChild(emoji);

  setTimeout(function () {
    emoji.remove();
  }, 1000);
});
