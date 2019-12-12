import React from 'react';
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    constructor(){
        console.log("constructor running")
        super()
        this.goToStore2 = this.goToStore2.bind(this)
    }
    myInput = React.createRef();

 goToStore = (event) =>{
        event.preventDefault();
        console.log(this.myInput.current.value)
        const storeName = this.myInput.current.value
        this.props.history.push(`/store/${storeName}`)
    }
    goToStore2(event){
        event.preventDefault();
        console.log("Go to Store 2")
        const storeName = this.myInput.current.value
        this.props.history.push(`/store/${storeName}`)
    }
    render() {
        return (
            <>

            <p>Fish</p>
        <form className="store-selector" onSubmit={this.goToStore2}>
                <h2>Please Enter a Store</h2>
                <input type="text"
                 required placeholder ="Store Name"
                  defaultValue={getFunName()}
                  ref={this.myInput}/>
                <button type="submit">Visit Store -></button>
            </form>
            </>
            )


    }
}

export default StorePicker