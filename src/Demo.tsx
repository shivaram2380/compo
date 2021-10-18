import { Component } from "react";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

interface IState{}

interface IProps{

}

class Demo extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    render() {
        return (
            <div>
                <Demo1/>
                <Demo2/>
            </div>
        )
    }
}
export default Demo;