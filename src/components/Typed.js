
const TweenComponent = () => (
    <Tween from={{ x: '100px', rotation: -360 }}>
      <div>This element gets tweened</div>
    </Tween>
  );

import React from 'react';
import { Tween, Timeline } from 'react-gsap';

// const Typed = (props) => (
//     <h1 className="typed">
//         {'I am '}
//         <Typing className="one-line" speed={80} startDelay={1500} hideCursor={true}>
//             {'a developer'}
//             <Typing.Backspace count={9} delay={1000}/>
//             {'designer'}
//             <Typing.Backspace count={10} delay={1000}/>
//             {'Jen Lipton.'}
//         </Typing>
//     </h1>
// );

// export default Typed;


const ColorBlock = ( color ) => (<span className="color-block" style={{ backgroundColor: `${color}` }}/>);
const TextBlock = ( string, className = "" ) => (<span className={`word ${className}`}>{string}</span>);

const delay = .5;
const textFadeDuration = 0;
const colorSlideDuration = .5;

const secondAnimation = .6;
const blockCycle = colorSlideDuration + colorSlideDuration;
const secondWord = delay + blockCycle + delay + colorSlideDuration + .2;
const thirdWord = secondWord + colorSlideDuration + delay + colorSlideDuration + .2;

const IAm = () => (
    <span className="first gsap">
      <Tween to={{ opacity: 1 }} duration={textFadeDuration} delay={delay + delay}>
        {TextBlock('I am')}
      </Tween>
      <Timeline
        target={ ColorBlock('#FFFFFF')}
        delay={delay}>
        <Tween to={{ scaleX: 1 }} duration={colorSlideDuration}/>
        <Tween to={{ scaleX: 0 }} duration={colorSlideDuration}/>
      </Timeline>
    </span>
  );

const ADeveloper = () => (
  <span className="second gsap">
    <Timeline
      target={ TextBlock('a developer', 'overlap') }>
      <Tween to={{ opacity: 1 }} duration={textFadeDuration} delay={delay + colorSlideDuration}/>
      <Tween delay={blockCycle + delay + delay + .4} to={{ opacity: 0 }} duration={textFadeDuration}/>
    </Timeline>
    <Timeline
      target={ TextBlock('a designer', 'overlap') }>
      <Tween to={{ opacity: 1 }} duration={1} delay={secondWord}/>
      <Tween to={{ opacity: 0 }} duration={1} delay={delay}/>
    </Timeline>
    <Tween to={{ opacity: 1 }} duration={textFadeDuration} delay={thirdWord}>
        {TextBlock('Jen Lipton', 'overlap')}
    </Tween>
    <Timeline
      target={ ColorBlock('#000000') }
      delay={delay}>
      <Tween to={{ scaleX: 1 }} duration={colorSlideDuration}/> 
      <Tween to={{ scaleX: 0 }} duration={colorSlideDuration} delay={secondAnimation}/>
      <Tween to={{ scaleX: .95 }} duration={colorSlideDuration} delay={delay}/>
      <Tween to={{ scaleX: 0 }} duration={colorSlideDuration}/>
      <Tween to={{ scaleX: .85 }} duration={colorSlideDuration} delay={delay}/>
      <Tween to={{ scaleX: 0 }} duration={colorSlideDuration}/>
    </Timeline>
  </span>
);

const Typed = () => (
    <h1 className="typed">
        <IAm/><ADeveloper/>
    </h1>
);

export default Typed;