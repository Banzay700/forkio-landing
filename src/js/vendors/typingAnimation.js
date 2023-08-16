'use strict'
import TypeIt from 'typeit'

import { typeItHtml } from '../utilities/utils.js'

export const typingAnimation = new TypeIt('.screen__animation', {
   speed: 1,
   waitUntilVisible: true,
})
   .type(typeItHtml.sectionOne)
   .pause(170)
   .type(typeItHtml.sectionTwo)
   .pause(170)
   .type(typeItHtml.sectionThree)
   .pause(170)
   .type(typeItHtml.sectionFour)
   .pause(300)
   .type(typeItHtml.sectionFive)
