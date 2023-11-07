/*------------------------Toggle navbar------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
  document.querySelector(".header").classList.toggle("active");
}


/* - - - - - - - - - - - - - Active Section - - - - - - - - - - - */
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("link-item") && e.target.hash !== ""){
    if(e.target.classList.contains("nav-item")){
      toggleNavbar();
    }
    else{
      console.log("false");
    }
    setTimeout(() =>{
      document.querySelector("section.active").classList.remove("active","fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0,0);
      document.body.classList.remove("hide-scrolling");

    },500);
  }

});

/* -------------------------About Tabs---------------------------*/
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
   if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
     tabsContainer.querySelector(".active").classList.remove("active");
     e.target.classList.add("active");
     const target = e.target.getAttribute("data-target");
     aboutSection.querySelector(".tab-content.active").classList.remove("active");
     aboutSection.querySelector(target).classList.add("active");
    }
});


//* ---------------Portfolio item details popup------------------- *//
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("view-project-btn")){
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0,0);
    portfolioItemDetails(e.target.parentElement);
  }
})
function togglePortfolioPopup(){
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//hide popup when clicking outside of item
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("pp-inner")){
    togglePortfolioPopup();
  }
});


function portfolioItemDetails(portfolioItem){
  document.querySelector(".pp-thumbnail img").src =
  portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

  document.querySelector(".pp-header h3").innerHTML =
  portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML =
  portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

