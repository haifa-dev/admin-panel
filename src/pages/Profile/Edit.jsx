import React, { useState } from 'react'

const Edit = props => {

    //props.currentRow = {};

    const [row, setRow] = useState(props.currentRow)

    const handleChange = (event) => {
        setRow({ ...row, [event.target.name]: event.target.value })
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            props.updateRow(row)
        }}>
            <div className="card shadow m-3">
                <div className="card-header bg-transparent"><h5>Edit Profile</h5></div>
                <div className="card-body">

                    {/*name, bio, id, email, socials, image  */}
                    <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={row.name}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" className="form-control" id="bio" placeholder="bio" name="bio" value={row.bio}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" className="form-control" id="email" placeholder="email" name="email" value={row.email}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        {/* <input type="file" ></input>
                        <input type="file" className="form-control" id="image" placeholder="image" name="image" value={row.image}
                            onChange={handleChange} /> */}
                    </div>
                </div>
                <div className="card-footer bg-transparent ">
                    <button type="submit" className="btn btn-success float-right mx-2">Save</button>
                    <button onClick={() => props.setEditing(false)} className="btn btn-secondary float-right">
                        Cancel
                    </button>
                </div>
            </div>

        </form>
    )
}

export default Edit