import React from 'react';

function Responsive (props){
  const screen = window.matchMedia(`(${props.rule})`).matches;
  return screen
  ? props.children
  : null ;
}

export default Responsive;
