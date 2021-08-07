import React from 'react';
import './Blog.css'; 
import { Route, Switch, BrowserRouter } from 'react-router-dom';    
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }



    render(){
            return (<div className = {"Blog"}>
                {/* <div style ={{opacity:Math.min(100 / this.state.currentScrollHeight  , 1)}} className = {"Banner"}>
                <h1 className = {"Banner_Title"}> carbonzip </h1>
                </div> */}
                <div   className = {"Container"}>
                    
                    <img className = {"Container_A"} />
                    <div className = {"Text"}> 
                    <h1>Blog Post #1: Electricity</h1>
                    For K-12 schools, a massive part of carbon emissions comes from electricity use, being utilized by the county’s grid, which relies on fossil fuels and thus creates carbon emissions. During the school year, K-12 campuses utilize electricity as an everyday necessity, not thinking about its impact on our Earth’s atmosphere. What if we could help schools restructure their systems to create a more sustainable way of utilizing electricity? We can do this in a couple of ways, and the first step is to be conscious of the amount of usage. Carbon Zip makes this easy for schools with their emissions calculator. Becoming aware of their CO2 output is the first step campuses can make to reduce it. Schools will have carbon credits to use and can gain more by doing things to offset emissions. Schools can plant trees, pick up trash, or donate to reforestation efforts to earn more carbon credits. While these offsets are good options, the main goal is to move away from fossil fuels. We can do this by creating a more sustainable energy grid by installing solar and re-directing allocated funds to invest in batteries and panels— which is a significant cost upfront but saves money in the future.

                    </div>
                </div>
            <div   className = {"Container"}>
                    
                    <img className = {"Container_A"} />
                    <div className = {"Text"}> 
                    <h1>Blog Post #2: Heat</h1>
                    Carbon Zip helps those in the education sector look at how they heat their buildings. Carbon Zip allows a campus to input the amount of gas they use per hundred cubic feet to calculate the number of carbon emissions made. For schools in warmer climates like California or Arizona, the amount of heat used is not as substantial as a campus that sees harsher winters like Ohio or Montana. The carbon credit system could allot campuses’ carbon credits proportionately to their local climate. The amount of heat used per school year creates carbon emissions because that heat is operated utilizing fossil fuels and propane. Once the number of emissions peruses of heat is quantified, carbon offset programs can be put in place to create more sustainable practices. The central offset contributes to carbon sequestration programs, such as donating or volunteering for a non-profit that participates in reforestation. Another method to eliminate emissions from heat use is re-designing the grid and using solar energy, or another type of renewable energy to power the heat source. As previously stated, this takes an upfront cost and a re-designing of systems already in place, but this is by far, the best option for any campus looking to be more sustainable.

                    </div>
                    
                </div>
    
            <div className = {"Container"}>
            <img className = {"Container_A"} />

            {/* <h1 className = {"Title"}>TITLE B</h1> */}
                    {/* <img src = {"https://rightasrain.uwmedicine.org/sites/chew/files/styles/large/public/images/2018/going-vegan.jpg?h=a61a7e7e&itok=RLMcPHvf"}/> */}
                    <div className = {"Text"}>
                    <h1>Blog Post #3: Commute</h1>
 
                    Carbon Zip has another category that helps K-12 campuses calculate the amount of C02 emissions made from daily transportation to and from campus using busses. Campuses can calculate their emissions by inputting the leading fuel type of the busses, school days per year, the number of shared busses, and the average miles per day driven to get to and from campus. With this data, Carbon Zip uses calculations backed by the EPA to give average metric tons of C02 per year, just from transportation alone. Like electricity and heat, once the emissions are quantified, carbon credits can be allotted, and offsets can be found. This may be the most manageable emissions to eliminate because of the direction the motor industry is headed. We see tons of new electric cars on the street, and there’s no reason campuses can’t utilize that. The easier way is first to convert shared busses to electric, completely cutting out their emissions. Another way to cut emissions would be to offer incentive programs to families with electric vehicles and encourage carpooling in those vehicles. The reason commuting creates a high amount of emissions is because it uses fossil fuels, but if all the cars were electric, emissions would no longer be a factor of commuting. The point of Carbon Zip is not to ostracize schools for being unsustainable. Instead, it calls attention and creates a consciousness of the actual amount of emissions produced so that they can be offset and, more importantly, eliminated. Knowing one’s role in climate change can be challenging and often confusing— that’s why Carbon Zip is creating a system to quantify emissions. Making emissions a more tangible element, rather than just gases floating in the air, allows campuses to look at emissions differently and be more concrete with how they choose to offset and eliminate their emissions.

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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);



