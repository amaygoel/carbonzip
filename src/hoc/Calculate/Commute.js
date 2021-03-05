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
            AverageMPG: "",
            NumVehicles: "",
            DaysInSchoolYear: "",
            CCF: "",
            kgs_co2: "",
            total_cost: 0
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

onSubmitHandler(e) {
    e.preventDefault()
    if (this.state.TypeOfFuel == "Diesel"){
        this.setState({kgs_co2: ((this.state.NumVehicles * this.state.AverageDistance *2)/(this.state.AverageMPG))* 10.21}) 
        console.log(this.state.kgs_co2) }

    if (this.state.TypeOfFuel == "Gasoline"){
        this.setState({kgs_co2: ((this.state.NumVehicles * this.state.AverageDistance *2)/(this.state.AverageMPG))* 8.78}) 
        console.log(this.state.kgs_co2) }
    
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
                <label> Number of Vehicles </label>
                <input onChange = {(e)=>{
                    this.setState({NumVehicles: e.target.value})
                }}/>
                </li>
                <li>
                <label> Average Miles per Gallon </label>
                <input onChange = {(e)=>{
                    this.setState({AverageMPG: e.target.value})
                }}/>
                </li>
                <li>
                <label> Average Distance to School </label>
                <input onChange = {(e)=>{
                    this.setState({AverageDistance: e.target.value})
                }}/>
                </li>
                <li>
                <label> kgs CO2 </label>
                <h1>{this.state.kgs_co2 || null}</h1>
                </li>
                <li>
                <label> Total Cost </label>
                <h1>{this.state.total_cost || null}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Commute);