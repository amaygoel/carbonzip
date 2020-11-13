import React from 'react';
// import './Calculate.css'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';    
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import CalculateImage from '../../assets/calculateTree.jpg'

class Electricity extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            KWH: "",
            lbs_co2: "",
            total_cost: 0
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

onSubmitHandler(e) {
    e.preventDefault()
    this.setState({
        KWH: parseInt(this.state.KWH) * .947, 
        lbs_co2: parseInt(this.state.lbs_co2)*.00531,
        total_cost:parseInt(this.state.KWH) + parseInt(this.state.lbs_co2),
    
    })
    console.log("working")
}

    render(){
        return (<div>
            
            <h1 className = {"Electricity"}>Electricity</h1>
            <div className = {"ElectricityContainer"}>
            {/* <img src = {CalculateImage}/> */}
            <div className = {"formContainer"}>
            <form onSubmit={this.onSubmitHandler}>
                <ul>
                <li>
                <label> KWH </label>
                <input onChange = {(e)=>{
                    this.setState({KWH: e.target.value})
                }}/>
                </li>
                <li>
                <label> lbs CO2 </label>
                <input onChange = {(e)=>{
                    this.setState({lbs_co2: e.target.value})
                }}/>
                </li>
                <li>
                <label> Total Cost </label>
                <input onChange = {(e)=>{
                    this.setState({total_cost: e.target.value})
                }}/>
                </li>
                <button>Calculate</button>
                </ul>
            </form>
            </div>
            <h1>{this.state.KWH||null}</h1>
            <h1>{this.state.lbs_co2||null}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Electricity);

