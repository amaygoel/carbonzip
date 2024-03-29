import React from 'react';
// import './Calculate.css'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';    
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import CalculateImage from '../../assets/calculateTree.jpg'

class Heat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            CCF: "",
            tons_co2: "",
            total_cost: 0
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

onSubmitHandler(e) {
    e.preventDefault()
    this.setState({
        //CCF: parseInt(this.state.CCF) / 100, 
        tons_co2: parseInt(this.state.CCF)*0.0000548,
    })
    localStorage.setItem("Heat",parseInt(this.state.CCF)*0.0000548)
    
}

    render(){
        return (<div>
            
            <h1 className = {"optionsTitle"}>Heat</h1>
            <div className = {"HeatContainer"}>
            {/* <img src = {CalculateImage}/> */}
            <div className = {"formContainer"}>
            <form onSubmit={this.onSubmitHandler}>
                <ul>
                <li>
                <input onChange = {(e)=>{
                    this.setState({CCF: e.target.value})
                }}/>
                <label> CCF </label>
                </li>
                {/* <li>
                <label> Total Cost </label>
                <h1>{this.state.total_cost}</h1>
                </li> */}
                <button>Calculate</button>
                <li>
                    <h1>{this.state.tons_co2}<label> Metric Tons CO2 </label></h1>
                </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Heat);

