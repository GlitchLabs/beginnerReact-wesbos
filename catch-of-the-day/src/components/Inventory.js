import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'

class Inventory extends Component {
    render() {
        return (
            <div className="intentory">
                <h2>Inventory</h2>

                <AddFishForm addFish =  {this.props.addFish}/>
                {Object.keys(this.props.fishes).map(key => < EditFishForm key={key} fish={this.props.fishes[key]} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} index={key}/>)}
                <button onClick={this.props.loadSampleFishes}>Load Samples</button>
            </div>
        )
    }
}
export default Inventory