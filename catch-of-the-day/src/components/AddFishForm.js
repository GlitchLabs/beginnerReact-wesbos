import React from 'react'

class AddFishForm
 extends React.Component {
     createFish = (event) =>{
        event.preventDefault();
        console.log("making a fish")
     }
    render() {
        return (
            <div className="intentory">
                <h2>AddFishForm
                </h2>
                <form className="fish-edit" onSubmit={this.createFish}>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="price" placeholder="Price"/>
                    <select  name="status">
                        <option value="Avaliable">Fresh</option>
                        <option value="Unavaliable">Sold Out!</option>

                    </select>
                    <textarea name="desc" placeholder="Desc"/>
                    <input type="text" name="image" placeholder="Iamge"/>
                    <button className="submit">+ Add A Fish</button>
                </form>

            </div>
        )
    }
}
export default AddFishForm
