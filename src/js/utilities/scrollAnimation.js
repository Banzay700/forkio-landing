'use strict'
import { ANIMATION_START_POSITION } from './constants.js'

const animItems = document.querySelectorAll('.anim-item')

const offset = el => {
   const rect = el.getBoundingClientRect()
   const scrollTop = window.pageYOffset || document.documentElement.scrollTop
   const itemOffset = rect.top + scrollTop

   return itemOffset
}

export const scrollAnimation = () => {
   animItems.forEach(item => {
      const itemHeight = item.offsetHeight
      const itemOffset = offset(item)
      const screenHeight = window.innerHeight

      let itemPoint = screenHeight - itemHeight / ANIMATION_START_POSITION
      let isItemVisible = scrollY > itemOffset - itemPoint

      if (isItemVisible) {
         item.classList.add('show-up')
      } else {
         if (!item.classList.contains('once')) {
            item.classList.remove('show-up')
         }
      }
   })
}

animItems.length > 0 ? window.addEventListener('scroll', scrollAnimation) : ''
