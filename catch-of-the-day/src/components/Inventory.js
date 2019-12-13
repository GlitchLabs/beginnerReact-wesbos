import React, { Component } from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends Component {
    render() {
        return (
            <div className="intentory">
                <h2>Inventory</h2>
                <AddFishForm addFish =  {this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Samples</button>
            </div>
        )
    }
}
export default Inventory