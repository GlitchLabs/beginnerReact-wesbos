import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base'


class App extends React.Component{
        state ={
            fishes:{},order:{}
        }

        componentDidMount(){
            console.log("mounted!!")
            const localStorageRef = localStorage.getItem(this.props.match.params.storeId)
            if(localStorageRef){
                this.setState({order:JSON.parse(localStorageRef)})
            }
            console.log(localStorageRef)
            this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,
            {
                context:this,
                state:'fishes'

            });
        }
        componentDidUpdate(){
            console.log("it updated!!")
            localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
            console.log(this.state.order)
        }
        componentWillUnmount(){
            console.log("unmonted")
            base.removeBinding(this.ref)
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