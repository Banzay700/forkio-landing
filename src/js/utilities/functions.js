import { WEBP_SRC } from './constants.js'

export const isWebp = () => {
   const testWebP = callback => {
      const webP = new Image()

      webP.onload = webP.onerror = () => {
         callback(webP.height === 2)
      }
      webP.src = WEBP_SRC
   }

   testWebP(support => {
      const className = support === true ? 'webp' : 'no-webp'
      document.documentElement.classList.add(className)
   })
}
