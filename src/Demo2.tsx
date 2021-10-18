import { Component } from "react";

interface IState{}
 
interface IProps{}

class Demo2 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    };
    render(){
        return(
            <h1>return to ur world</h1>
        )
    }
}
export default Demo2;