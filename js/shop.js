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
const section = document.querySelectorAll('.section');

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

section.forEach((section)=>{
  observer.observe(section);
});

// hovereffect

const thirdSectionTitle = document.querySelectorAll('.articles .shopcards > div h4');
const thirdSectionCard = document.querySelectorAll('.articles .shopcards > div');
const thirdSectionPrice = document.querySelectorAll('.articles .shopcards > div h1');
const thirdSectionButton = document.querySelectorAll('.articles .shopcards > div button');

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


if (!window.matchMedia('(max-width:700px)').matches){

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

runDesktopOnlyFeature();
}

if (window.matchMedia('(max-width:700px)').matches){

  shoppingBag.addEventListener('click',()=>{
    cart.style.display = "flex" ;
  });
  shoppingBag.addEventListener('click',()=>{
    cart.style.display = "none" ;
  });

}

const minInput = document.getElementById("minInput");
    const maxInput = document.getElementById("maxInput");
    const minRange = document.getElementById("minRange");
    const maxRange = document.getElementById("maxRange");
    const progress = document.getElementById("progressBar");
    const filterBtn = document.getElementById("filterBtn");

    const minGap = 50;
    const maxVal = 1000;

    function updateProgress() {
      const minVal = parseInt(minRange.value);
      const maxVal = parseInt(maxRange.value);
      const percent1 = (minVal / maxVal) * 100;
      const percent2 = (maxVal / 1000) * 100;
      progress.style.left = (minVal / 10) + "%";
      progress.style.width = ((maxVal - minVal) / 10) + "%";
    }

    function syncFromSliders() {
      let min = parseInt(minRange.value);
      let max = parseInt(maxRange.value);

      if (max - min < minGap) {
        if (event.target === minRange) minRange.value = max - minGap;
        else maxRange.value = min + minGap;
        return;
      }

      minInput.value = minRange.value;
      maxInput.value = maxRange.value;
      updateProgress();
    }

    function syncFromInputs() {
      let min = parseInt(minInput.value);
      let max = parseInt(maxInput.value);

      if (max - min >= minGap && max <= maxVal && min >= 0) {
        minRange.value = min;
        maxRange.value = max;
        updateProgress();
      }
    }

    minRange.addEventListener("input", syncFromSliders);
    maxRange.addEventListener("input", syncFromSliders);
    minInput.addEventListener("input", syncFromInputs);
    maxInput.addEventListener("input", syncFromInputs);

    filterBtn.addEventListener("click", () => {
      alert(`Filtering prices from $${minInput.value} to $${maxInput.value}`);
    });

    updateProgress(); // Initial






