
const TweenComponent = () => (
    <Tween from={{ x: '100px', rotation: -360 }}>
      <div>This element gets tweened</div>
    </Tween>
  );


import Typing from 'react-typing-animation';
import React, { Component } from 'react';
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
const TextBlock = ( string ) => (<span className="word">{string}</span>);

const IAm = () => (
    <span className="first gsap">
      <Timeline
        target={
          TextBlock('I am')
        }
        delay={1}>
        <Tween to={{ opacity: 1 }} duration={1}/>
      </Timeline>
      <Timeline
        target={
          ColorBlock('#FFFFFF')
        }
        delay={1}>
        <Tween to={{ scaleX: 1 }} duration={1}/>
        <Tween to={{ scaleX: 0 }} duration={1}/>
      </Timeline>
    </span>
  );

const aDeveloper = () => (
  <span className="first gsap">
    <Timeline
      target={
        TextBlock('I am')
      }
      delay={1}>
      <Tween to={{ opacity: 1 }} duration={1}/>
    </Timeline>
    <Timeline
      target={
        ColorBlock('#FFFFFF')
      }
      delay={1}>
      <Tween to={{ scaleX: 1 }} duration={1}/>
      <Tween to={{ scaleX: 0 }} duration={1}/>
    </Timeline>
  </span>
);

const Typed = () => (
    <h1 className="typed">
        <IAm/>
    </h1>
);

export default Typed;