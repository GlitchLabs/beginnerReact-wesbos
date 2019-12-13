import React from 'react'

class AddFishForm
 extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
     
     
     createFish = (event) =>{
        event.preventDefault();
        const fish = {

            name : this.nameRef.current.value,
            price : +(this.priceRef.current.value),
            status : this.statusRef.current.value,
            desc : this.descRef.current.value,
            image : this.imageRef.current.value,
        }
        this.props.addFish(fish)
         event.currentTarget.reset()
     }
    render() {
        return (
            <div className="intentory">
                <h2>AddFishForm
                </h2>
                <form className="fish-edit" onSubmit={this.createFish}>
                    <input type="text" name="name" ref={this.nameRef} placeholder="Name"/>
                    <input type="text" name="price" ref={this.priceRef} placeholder="Price"/>
                    <select  name="status" ref={this.statusRef}>
                        <option value="Avaliable">Fresh</option>
                        <option value="Unavaliable">Sold Out!</option>

                    </select>
                    <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
                    <input type="text" name="image" ref={this.imageRef} placeholder="Iamge"/>
                    <button className="submit">+ Add A Fish</button>
                </form>

            </div>
        )
    }
}
export default AddFishForm
