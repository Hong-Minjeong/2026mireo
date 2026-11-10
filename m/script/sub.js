
let link=window.location.href;
const subName = document.querySelector('.subnav ul li:last-child');
console.log(subName.innerHTML);
if (link.includes('bo_table=notice')) {
  subName.innerHTML='공지사항';
} else {
  subName.innerHTML='이벤트';
}