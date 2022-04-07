// querys procurando todos os links e links dos site
const imgs = document.querySelectorAll('img');
const as = document.querySelectorAll('a');

// loop em todas imagens
imgs.forEach((img) => {
  // Bloqueia o efeito de drag de todas imagens
  img.ondragstart = () => {
    return false;
  };
});

// loop em todos os links
as.forEach((a) => {
  // Bloqueia o efeito de drag de todos os links
  a.ondragstart = () => {
    return false;
  };

  //
});
