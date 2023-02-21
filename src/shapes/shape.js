import React from 'react';
import Circle from './circle';
import Cuboid from './cuboid';
import Parallelogram from './parallelogram';
import Rhombus from './rhombus';
import Square from './square';
class shape extends React.Component{
render(){
   return (
      <><h1>Circle</h1><Circle r='4'></Circle>  
      <br></br>
      <h1>Cuboid</h1>
      <Cuboid></Cuboid>
      <h1>Square</h1>
      <Square></Square>
      <h1>Rhombus</h1>
      <Rhombus></Rhombus>
      <h1>Parallelogram</h1>
      <Parallelogram breadth='6' height='2'></Parallelogram>
      </>
   );
}
}
export default shape;

