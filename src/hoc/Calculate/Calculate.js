import React from 'react';
import './Calculate.css'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';    
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import CalculateImage from '../../assets/calculateTree.jpg'
import Electricity from './Electricity'
import Heat from './Heat'
import Commute from './Commute'

class Calculate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: null,
            
        }
    }

    changePage(){
       return <div>
           <ul className = {"options"}>
                <li> 
                    <button className = {"buttonStyle"} onClick = {e=>{this.setState({currentPage: <Electricity/>})}}>Electric</button>
                </li>
                <li>
                    <button className = {"buttonStyle"} onClick = {e=>{this.setState({currentPage: <Heat/>})}}>Heat</button>
                </li>
                <li>
                    <button className = {"buttonStyle"} onClick = {e=>{this.setState({currentPage: <Commute/>})}}>Commute</button>
                </li>
           </ul>
       </div>
    }

    



    render(){
        return (<div className = {"Calculate"}>
            
            <h1 className = {"calculateTitle"}>Calculate</h1>
            <div className = {"CalculationsContainer"}>
            {/* <img src = {CalculateImage}/> */}
            {this.changePage()}
            <div className = {"formContainer"}>
                {this.state.currentPage|| null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Calculate);

