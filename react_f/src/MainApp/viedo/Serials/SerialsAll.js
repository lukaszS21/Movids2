import React from "react";
import axios from "axios";

class SerialsAll extends React.Component {

    constructor(props)
    {
        super(props);
        console.log(props)
        this.state = {
            serial:{
                id_s:props.serial.id_s,
                name:props.serial.name,

            }

        }
        console.log(this.state.serial);



    }
    render()
    {
        return (

            <div>
                {
                    this.state.serial.name
                }
            </div>

        );
    }
}
export default SerialsAll;