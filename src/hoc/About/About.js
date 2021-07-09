import React from 'react';
import './About.css'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';    
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }



    render(){
            return (<div className = {"About"}>
                {/* <div style ={{opacity:Math.min(100 / this.state.currentScrollHeight  , 1)}} className = {"Banner"}>
                <h1 className = {"Banner_Title"}> carbonzip </h1>
                </div> */}
    
                <div   className = {"Container"}>
                    <img className = {"Container_A"} />
                    <div className = {"Text"}> 
                    <h1>Why CarbonZip?</h1>

                    We live in a time in which climate change has surfaced at the forefront of global
issues. When we talk about climate change, we acknowledge that humans have forever
changed the Earth’s atmosphere and climate through carbon emissions.
Carbon emissions measure in parts per million concerning the Earth’s other atmospheric
gasses. We all have carbon emissions on a personal level, but where we see the most carbon
emissions are from our systems that are already in place, including corporations, transportation
plans, and our focus for these articles— our education system, more specifically,
K-12 campuses.
“Carbon Zip” is a website that helps K-12 schools calculate their carbon emissions and
figure out offsets to balance out their emissions. For K-12 schools, a massive part of carbon
emissions comes from electricity use, being utilized by the county’s grid, which relies on fossil
fuels and thus creates carbon emissions.
During the school year, K-12 campuses utilize electricity as an everyday necessity, not
thinking about its impact on our Earth’s atmosphere. What if we could help schools restructure
their systems to create a more sustainable way of utilizing electricity? We can do this in a
couple of ways, and the first step is to be conscious of the amount of usage. Carbon Zip makes
this easy for schools with their emissions calculator.
Becoming aware of their CO2 output is the first step campuses can make to reduce it.
Schools will have carbon credits to use and can gain more by doing things to offset emissions.
Schools can plant trees, pick up trash, or donate to reforestation efforts to earn more carbon
credits.
While these offsets are good options, the main goal is to move away from fossil fuels.
We can do this by creating a more sustainable energy grid by installing solar and re-directing
allocated funds to invest in batteries and panels— which is a significant cost upfront but saves
money in the future.
                    </div>
                </div>
    
            <div className = {"Container"}>
            <h1 className = {"Title"}>TITLE B</h1>
                    <img src = {"https://rightasrain.uwmedicine.org/sites/chew/files/styles/large/public/images/2018/going-vegan.jpg?h=a61a7e7e&itok=RLMcPHvf"}/>
                    <div className = {"Text"}> 
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                    making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                    sometimes by accident, sometimes on purpose (injected humour and the like).
                   </div>
                </div>
             
    
                <div className = {"Container"}>
                    <h1 className = {"Title"}>TITLE C</h1>
                    <img src = {"https://c.wallhere.com/photos/77/e5/National_Geographic_pollution_environment-84054.jpg!d"}/>
                    <div className = {"Text"}> 
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
                    making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
                    sometimes by accident, sometimes on purpose (injected humour and the like).
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

export default connect(mapStateToProps, mapDispatchToProps)(About);



