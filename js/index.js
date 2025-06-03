//navbar
const sidebar = document.getElementsByClassName('sidebar')[0];
function showSidebar() {
   sidebar.style.display = 'flex';  
}
function hideSidebar(){
  sidebar.style.display = 'none';
}

//Right To left animation

const cards = document.querySelectorAll('.card1');
const cards2 = document.querySelectorAll('.card2');
const images = document.querySelectorAll('.img');

const observer = new IntersectionObserver ((entries)=>{
  entries.forEach((entry,index)=>{
    if(entry.isIntersecting){
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200);

      observer.unobserve(entry.target);
    }
  });
},{
  threshold:0.4
});


cards.forEach(card=>{
  observer.observe(card);
});

images.forEach(image=>{
  observer.observe(image);
});

cards2.forEach((card)=>{
  observer.observe(card);
})










