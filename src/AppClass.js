import React ,{Component,Fragment} from 'react';
import "./AppClass.css"
export default class AppClass extends Component{
    constructor(props){
        super(props);
            this.state={
                isTrue: false,
            };
    }
    
    toggleTrue = () => {
        if(this.state.isTrue){
            this.setState ({
                isTrue: false,
            });
            return 
        }
        this.setState({
            isTrue:true,
        })
    }

    render(){
        return(
            <Fragment>        
            <hr/>
            <h1 className='h1-red'>{this.props.msg}</h1>
            <hr/>
            {this.state.isTrue &&
                <Fragment>
                    <p>The current value is isTrue is true</p>
                    <hr />
                </Fragment>
            }
            {this.state.isTrue 
            ?<p>True</p>
            :<p>False</p>
            }
            <a  href="#!" className='btn btn-primary' onClick={this.toggleTrue}>Click!</a>
        </Fragment>
        )
    }
    
}