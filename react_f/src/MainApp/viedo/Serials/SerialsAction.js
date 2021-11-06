import React,{Component} from 'react';
import SerialsAll from "./SerialsAll"
import SerialServices from "./SerialsServices";
import axios from "axios";

export class SerialsAction extends Component{
    constructor(props) {
        super(props);
        this.state={
            serials:[],
        }

    }
    componentDidMount()
    {
        this.loadSerials().then(data=>{

            this.setState({serials:data.data})
        })
    }
    loadSerials()
    {

        const result=axios.get("http://localhost:8080/serials/action");
        return result;


    }


    render() {

        return (
            <div className="section3">
                <div className="Content2">
                    {
                        this.state.serials.map(
                            serial=>
                                <SerialsAll serial={serial}  key={serial.id}/>
                        )
                    }

                </div>
            </div>

        );
    }
}

export default SerialsAction;