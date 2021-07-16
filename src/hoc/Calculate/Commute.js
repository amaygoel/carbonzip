import React from 'react';
// import './Calculate.css'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';    
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import CalculateImage from '../../assets/calculateTree.jpg'

class Commute extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            TypeOfFuel: "Diesel",
            AverageDistance: "",
            AverageMPD: "",
            AverageMPG: "",
            Busses: "",
            DaysInSchoolYear: "",
            CCF: "",
            tons_co2: "",
            total_cost: 0
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

onSubmitHandler(e) {
    e.preventDefault()
    if (this.state.TypeOfFuel == "Diesel"){
        this.setState({tons_co2: ((this.state.Busses * this.state.AverageMPD * this.state.DaysInSchoolYear)/6)* .010180}) 
        localStorage.setItem("Commute",((this.state.Busses * this.state.AverageMPD * this.state.DaysInSchoolYear)/6)* .010180)
    
    }

    if (this.state.TypeOfFuel == "Gasoline"){
        this.setState({tons_co2: ((this.state.Busses * this.state.AverageMPD * this.state.DaysInSchoolYear)/4)* .00887}) 
        localStorage.setItem("Commute",((this.state.Busses * this.state.AverageMPD * this.state.DaysInSchoolYear)/4)* .00887)
    
    }

   

    
}

onChangeHandler(e) {
    e.preventDefault()
    this.setState({
        TypeOfFuel: e.target.value
    })
    console.log(this.state.TypeOfFuel)

}

    render(){
        return (<div>
            
            <h1 className = {"optionsTitle"}>Commute</h1>
            <div className = {"CommuteContainer"}>
            {/* <img src = {CalculateImage}/> */}
            <div className = {"formContainer"}>
            <form onSubmit={this.onSubmitHandler}>
                <ul>
                <li>
                <label> Type of Fuel </label>
                {/* <input onChange = {(e)=>{
                    this.setState({TypeOfFuel: e.target.value})
                }}/> */}
                <select onChange = {this.onChangeHandler}>
                    <option value = {"Diesel"}>Diesel</option>
                    <option value = {"Gasoline"}>Gasoline</option>
                </select>
                </li>
                <li>
                <label> Number of School Days per Year </label>
                <input onChange = {(e)=>{
                    this.setState({DaysInSchoolYear: e.target.value})
                }}/>
                </li>
                <li>
                <label> Number of Busses </label>
                <input onChange = {(e)=>{
                    this.setState({Busses: e.target.value})
                }}/>
                </li>
                <li>
                <label> Avg. miles driven / day </label>
                <input onChange = {(e)=>{
                    this.setState({AverageMPD: e.target.value})
                }}/>
                </li>
                {/*<li>
                 <label> Average Distance to School </label>
                <input onChange = {(e)=>{
                    this.setState({AverageDistance: e.target.value})
                }}/>
                </li> */}
                
                {/* <li>
                <label> Total Cost </label>
                <h1>{this.state.total_cost || null}</h1>
                </li> */}
                <button>Calculate</button>
                <li>
                    <h1>{this.state.tons_co2 || null} <label> Metric Tons CO2 </label></h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Commute);