import React from 'react';
import './Calculate.css'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';    
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import CalculateImage from '../../assets/calculateTree.jpg'

class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            electricityValue: "",
            gasValue: "",
            total: 0
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

onSubmitHandler(e) {
    e.preventDefault()
    this.setState({
        electricityValue: parseInt(this.state.electricityValue) * .947, 
        gasValue: parseInt(this.state.gasValue)*.00531,
        total:parseInt(this.state.electricityValue) + parseInt(this.state.gasValue) + parseInt(this.state.distanceTraveled),
    
    })
    console.log("working")
}

    render(){
        return (<div className = {"Calculate"}>
            
            <h1 className = {"calculateTitle"}>Calculate</h1>
            <div className = {"CalculationsContainer"}>
            {/* <img src = {CalculateImage}/> */}
            <div className = {"formContainer"}>
            <form onSubmit={this.onSubmitHandler}>
                <ul>
                <li>
                <label> Electricity Usage (kWh) </label>
                <input onChange = {(e)=>{
                    this.setState({electricityValue: e.target.value})
                }}/>
                </li>
                <li>
                <label> Gas Usage (CFF) </label>
                <input onChange = {(e)=>{
                    this.setState({gasValue: e.target.value})
                }}/>
                </li>
                <li>
                <label> Distance Traveled (miles) </label>
                <input onChange = {(e)=>{
                    this.setState({distanceTraveled: e.target.value})
                }}/>
                </li>
                <button>Calculate</button>
                </ul>
            </form>
            </div>
            <h1>{this.state.electricityValue||null}</h1>
            <h1>{this.state.gasValue||null}</h1>
            </div>
        </div>)
    }
}




const mapStateToProps = state => {
    return {
        
        //userId: state.user.userId,
       
    };
}

const mapDispatchToProps = dispatch => {
    return {
        _get: (path) => dispatch(actions._get(path)),
      
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculate);

