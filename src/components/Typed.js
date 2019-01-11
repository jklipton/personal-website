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


const TextBlock = ( color ) => (<span className="text-block" style={{ backgroundColor: `${color}` }}/>);

const TweenComponent = () => (
    <Tween from={{ x: '100px', rotation: -360 }}>
      <div>This element gets tweened</div>
    </Tween>
  );


const IAm = () => (
    <Timeline
      target={
        TextBlock('#FFFFFF')
      }
    >
      <Tween to={{ scaleX: 1 }} duration={2}/>
    </Timeline>
  );

const Typed = () => (
    <h1 className="typed">
        <IAm/>
    </h1>
);

export default Typed;