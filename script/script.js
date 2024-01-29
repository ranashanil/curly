function toggleNav(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
//   header scroll
  window.onscroll = function () {
    const header = document.querySelector('header');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.backgroundColor = '#9a734a';
        header.style.color = '#fff';
    } else {
        header.style.backgroundColor = 'transparent';
}
};