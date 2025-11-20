// ハンバーガーを開閉
const menuBtn = document.querySelector('.menu-button');
const mainNav = document.getElementById('mainNav');
// hoverで開く（クリックでも開ける）
menuBtn.addEventListener('mouseenter', () => {
  mainNav.classList.add('open');
});
menuBtn.addEventListener('mouseleave', () => {
  mainNav.classList.remove('open');
});
// クリックでも開閉できる
menuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
// ナビゲーション上でも閉じる
mainNav.addEventListener('mouseleave', () => {
  mainNav.classList.remove('open');
});
