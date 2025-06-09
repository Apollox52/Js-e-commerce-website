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
});

// hovereffect

const thirdSectionTitle = document.querySelectorAll('.thirdcards div h4');
const thirdSectionCard = document.querySelectorAll('.thirdcards div');
const thirdSectionPrice = document.querySelectorAll('.thirdcards div h1');
const thirdSectionButton = document.querySelectorAll('.thirdcards div button');

thirdSectionCard.forEach((title,index)=>{
  title.addEventListener('mouseover',()=>{
    thirdSectionTitle[index].style.color = "red" ;
    thirdSectionTitle[index].style.fontWeight = "900" ;
    thirdSectionPrice[index].style.opacity = "0";
    thirdSectionButton[index].style.opacity = "1"
})
  title.addEventListener('mouseout',()=>{
    thirdSectionTitle[index].style.color = "black" ;
    thirdSectionTitle[index].style.fontWeight = "500" ;
    thirdSectionPrice[index].style.opacity = "1";
    thirdSectionButton[index].style.opacity = "0"
})
});

// carthover

const shoppingBag = document.querySelector(".header_login_container p:nth-child(3) a i"); 
const cart = document.querySelector(".header_login_container .cart"); 

shoppingBag.addEventListener('mouseover',()=>{
  cart.style.display = "flex" ;
});
shoppingBag.addEventListener('mouseout',()=>{
  cart.style.display = "none" ;
});

cart.addEventListener('mouseover',()=>{
  cart.style.display = "flex" ;
});
cart.addEventListener('mouseout',()=>{
  cart.style.display = "none" ;
});



