// html-content for typingAnimation.js (TypeIt)
export const typeItHtml = {
   sectionOne: '<i class="const">import <i class="attribute">{ <i class="base">useState</i> } </i> from</i><i class="string">`react`</i> <br><br>',
   sectionTwo:
      '<i class="const">import <i class="base">Button</i> from</i><i class="string"> `./components/Button`</i><br> <i class="const">import</i><i class="base"> Counter </i><i class="const">from</i> <i class="string">`./components/Counter`</i></i> <br><br>',
   sectionThree:
      '<i class="const">const</i><i class="base"> App </i><i class="attribute"> = () => { </i><br><i class="padding const">const </i> <i class="attribute">[count <i class="i">,</i> setCount] =</i> <i class="base">useState</i><i class="attribute">(0)</i><br><br><i class="const padding">const</i> <i class="base">incrementCount</i><i class="attribute"> = () => setCount(count + 1) </i> <br><br>',
   sectionFour:
      '<i class="const padding ">return</i><i class="attribute"> ( </i> <br><i class="base padding-1"><i class="base"> <</i>div</i> <i class="attribute">className</i><i class="string"> ="App"</i><i class="base">></i><br><i class="base padding-2"><</i><i class="component">Counter</i> <i class="attribute">count</i><i class="string">=</i><i class="base">{<i class="attribute">count</i></i><i class="base">} /></i><br><i class="base padding-2"><<i class="component">Button</i> <i class="attribute">onClick</i><i class="string">=</i>{incrementCount} /></i><br><i class="base padding-1"><i class="base"><</i>div></i><br><i class="attribute padding">)</i><br><i class="attribute">}</i>',
   sectionFive: '<br><br><i class="const">export default <i class="base">App</i></i>',
}
