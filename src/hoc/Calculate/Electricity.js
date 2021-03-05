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
        lbs_co2: parseInt(this.state.KWH) * .947,
    
    })
    console.log("working")
}

    render(){
        return (<div>
            
            <h1 className = {"optionsTitle"}>Electricity</h1>
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
                <h1>{this.state.lbs_co2}</h1>
                </li>
                <li>
                <label> Total Cost </label>
                <h1>{this.state.total_cost}</h1>
                </li>
                <button>Calculate</button>
                </ul>
            </form>
            </div>
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

