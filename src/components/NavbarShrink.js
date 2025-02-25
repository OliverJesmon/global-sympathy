import './Navbar.css'

function NavbarShrink() {

        window.addEventListener('scroll', function(){
          const navbar=document.querySelector('.global-nav-navbar-inner'); //imports properties from the particular classname named global-nav-navbar-inner
          const navbarLogo=document.querySelector('.global-nav-logo-img'); //imports properties from the particular classname named global-nav-logo-img
          if(window.scrollY>50)
          {
            navbar.classList.add('shrink');  //alters the class of the navbar to shrink
            navbarLogo.classList.add('shrink-logo');
          }
          else{
            navbar.classList.remove('shrink'); //removes the changes made by the class of the navbar to shrink
            navbarLogo.classList.remove('shrink-logo');
          }
        });

  return null;
}

export default NavbarShrink