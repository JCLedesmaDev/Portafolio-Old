import { menu_Header_Responsive } from "./components/menu/menu-responsive.js";
import { menu_Scroll_Spy } from "./components/menu/menu-scrollSpy.js";
import { menu_desplegable } from "./components/menu/menu_desplegable.js";
import { sliderCarrusel } from "./components/carrousel/slide-carrousel.js";
import { modal } from "./components/carrousel/modal.js";
import { formContact } from "./components/formularioContacto/form-submit-contact.js";


document.addEventListener("DOMContentLoaded", (e) =>{
  /* Ok */ menu_Header_Responsive(".menu-btn", ".menu", ".menu a", "section")
  /* Ok */ menu_desplegable();
  /* OK */ menu_Scroll_Spy();

  /* Ok */ sliderCarrusel("#carrousel-1");
  /* Ok */sliderCarrusel("#carrousel-2");
   /* Ok */ sliderCarrusel("#carrousel-3");
  /* Ok */sliderCarrusel("#carrousel-4");
  /* OK */ modal();

  /* OK */ formContact()
})

/* OK */ document.addEventListener("keydown", (e) =>{
  modal(e.key);
})

/* OK */ window.addEventListener("scroll", ()=>{
  menu_desplegable();
})

/* OK */ window.addEventListener("hashchange", e=>{
  modal()
})