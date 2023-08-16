'use strict'

export const burger = () => {
   const navbar = document.querySelector('.navbar')
   const conditionsCloseBurger = (e) => navbar.classList.contains('open') && !e.target.closest('.navbar__list') && !e.target.closest('.burger');

   document.body.addEventListener('click', e => {
      if (conditionsCloseBurger(e)) {
         navbar.classList.remove('open')
      }

      if (e.target.closest('.burger')) {
         navbar.classList.toggle('open')
      }
   })
}
