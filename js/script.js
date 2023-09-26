let menuBar = document.querySelector('#menuBar')
     let mobileMenu = document.querySelector('#mobileMenu')
     let closeMenu = document.querySelector('#closeMenu')

     menuBar.addEventListener('click', function(){
        mobileMenu.classList.remove('hidden')
     })
     closeMenu.addEventListener('click', function(){
        mobileMenu.classList.add('hidden')
     })