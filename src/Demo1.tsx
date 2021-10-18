import { Component } from 'react';

interface IState{}

interface IProps{}

class Demo1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    render(){
        return(
            <h1>welcome to the new world</h1>
        )
    }
}

export default Demo1;