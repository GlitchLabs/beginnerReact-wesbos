import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'


class App extends React.Component{
        state ={
            fishes:{},order:{}
        }

    addFish = (fish) => {
        console.log("adding a fish")
        const fishes = {...this.state.fishes}

        fishes[`fish${Date.now()}`] = fish;

        this.setState({fishes}) 
       
        
    }

loadSampleFishes = (event) =>{
console.log("loading samples")
this.setState({fishes:sampleFishes})
}

addToOrder = (key) =>{
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1//if order[key] does not exist than that one is skipped
    this.setState({order})
}
    render(){

        return(
            <div className="catch-of-the-day">
                <div className="menu">
                <Header tagline = "FRESH SEAFOOD MARKET"/>
                <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key =><Fish key={key} details ={this.state.fishes[key]} index ={key }addToOrder = {this.addToOrder}/>)}
                </ul>
                </div>
                <Order order={this.state.order} fishes={this.state.fishes}/>
                <Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes}/>

            </div>
        )
    }
}
export default App;