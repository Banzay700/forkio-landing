import * as util from './utilities/_utilsExports.js'
import * as module from './modules/_modulesExports.js'
import * as vendor from './vendors/_vendorsExports.js'

util.isWebp()
util.scrollAnimation()
util.validateEmail()

module.burger()
module.offerItemAnimation()
window.addEventListener('load', module.windowLoad)

vendor.typingAnimation.go()

