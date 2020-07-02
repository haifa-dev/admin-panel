// // import React, { } from 'react'
// import React, { useState } from 'react'

// const Create = props => {

//     // const initialFormState = { id: null, name: '', }
//     const [profile, setRow] = useState(props.profile)

//     const handleInputChange = event => {
//         const { name, value } = event.target
//         setRow({ ...profile, [name]: value })
//     }
//     return (

//         <form onSubmit={event => {
//             event.preventDefault()
//             // if (!profile.name) return
//             props.addRow(profile)
//             //setRow(initialFormState)
//         }}>

//             <div className="card shadow m-3">
//                 <div className="card-header">
//                     <h5>Create Profile</h5>
//                 </div>
//                 <div className="card-body">
//                     {/* <label>Name: </label>
//                     <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
//                      */}
//                     <div className="form-group">
//                         {/* <label htmlFor="name">Name</label> */}
//                         <input type="text" className="form-control" id="Name" placeholder="Name" name="name" value={profile.name} onChange={handleInputChange} />
//                     </div>

//                 </div>
//                 <div className="card-footer bg-transparent ">
//                     <button type="submit" className="btn btn-success float-right">Save</button>
//                 </div>
//             </div>
//         </form>
//     )
// }

// export default Create


import React, { useState } from 'react'

const Create = props => {
    console.log(props);

    const initialFormState = { id: null, name: '' }
    const [profile, setProfile] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target
        setProfile({ ...profile, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!profile.name) return
                props.addProfile(profile)
                setProfile(initialFormState)
            }}>

            <h1>{props.greeting}</h1>
            <label>Name</label>
            <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
            <button>Add new profile</button>
        </form>
    )
}

export default Create