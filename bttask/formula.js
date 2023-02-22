import React from 'react';
class Formula extends React.Component{
    constructor(props){
        super(props);
        this.state=
        {a:"4",b:"6"};
    }
    changeValue1=()=>{
        this.setState({a:"2",b:"7"})
    }
    changeValue2=()=>{
        this.setState({a:"5"})
    }
    changeValue3=()=>{
        this.setState({b:"1"})
    }
    changeValue4=()=>{
        this.setState({a:"6",b:"3"})
    }
render(){
   return (
    <>
    <h1>Use state qn</h1>
     <h1>{(parseInt(this.state.a) + parseInt(this.state.b))*(2*(this.state.a*this.state.b))}</h1>
     <button onClick={this.changeValue1}>Change value1</button> <br></br>
     <button onClick={this.changeValue2}>Change value2</button><br></br>
     <button onClick={this.changeValue3}>Change value3</button><br></br>
     <button onClick={this.changeValue4}>Change value4</button>
     </>
   );
}
}
export default Formula;

