import React, {Component} from 'react';
import './Toolbar.css';
import { connect } from 'react-redux';
import Logo from '../../Logo/Logo';
import Items from '../Items/Items';



class Toolbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth:true,
          
        }
    }

  
        

    render() {
        return (
            <header className={"Toolbar"}>
                <div className={"Logo"}>
                    <Logo />
                    <h1>carbonzip</h1>
                </div>
                
                <div  >
        {(this.state.auth)?<div></div>:null }
                </div>
                <nav >
                    <Items/>
                   
                </nav>
               
            </header>
        );
    };
}

const mapStateToProps = (state) => {
    return {
       // accountFlag: state.user.accountFlag,
       
    };
}

export default connect(mapStateToProps)(Toolbar);