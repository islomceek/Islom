window.addEventListener('DOMContentLoaded', function () {
  
    window.addEventListener('scroll', function () {
        const header = this.document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    let btn = document.querySelector('.menu-btn')
    let navigation = document.querySelector('.navigation')
    let navMenu = document.querySelector('#navMenu');
    let navItems = document.querySelectorAll('.navigation a')

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        navigation.classList.toggle('active')

    })


    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            btn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })
    navMenu.addEventListener("click", () => {
        navMenu.classList.toggle('active');


    });
    let scrolling = document.querySelector('.scrolling-btn')

    window.addEventListener("scroll", function () {
        scrolling.classList.toggle('active', window.scrollY > 500)

    })


    scrolling.addEventListener("click", function () {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
    
    
    
    window.addEventListener('scroll', () => {
      let speaks = document.querySelectorAll('.speak')     
      for (let i = 0; i < speaks.length; i++) {
        let windowHeight = window.innerHeight;
        let speaksTop = speaks[i].getBoundingClientRect().top;
        let speaksPoint = 50; 
          
        if (speaksTop < windowHeight-speaksPoint) {
          speaks[i].classList.add('active')
        }
      }      
    })
    
    
    

})

