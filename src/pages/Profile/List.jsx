import React from 'react'
import { Link } from 'react-router-dom';

// import Create from './Create';
import Socials from '../../components/Socials';
import { Image } from '../../components/Image';

const List = props => {

    return (
        <div className="card m-3 shadow">
            <div className="card-header">
                <h5>Profiles
                    <Link to="/Profile/Create" className="btn float-right" >
                        <i className="fa fa-plus hd-fa-x" aria-hidden="true"></i>
                    </Link>
                </h5>
            </div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>bio</th>
                            <th>email</th>
                            <th>socials</th>
                            <th>image</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.profiles && props.profiles.length > 0 ? (

                                props.profiles.map(profile => (
                                    <tr key={profile.id}>
                                        <td>{profile.name}</td>
                                        <td ><div className="ellipsis" style={{ width: '12rem' }} >{profile.bio}</div></td>
                                        <td>{profile.email}</td>
                                        <td> <Socials socials={profile.socials} /></td>
                                        <td><Image image={profile.image} /></td>
                                        <td className="text-center">
                                            <Link to={'/Profile/Edit'} className="btn text-success mr-1" onClick={() => { props.editRow(profile) }} >
                                                <i className="fa fa-pencil" aria-hidden="true" ></i>
                                            </Link>
                                            <Link to={'/Profile/Delete'} className="btn text-danger mr-1" onClick={() => { props.deleteRow(profile) }}>
                                                <i className="fa fa-trash" aria-hidden="true" ></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))) : (<tr><td colSpan={6}>No users</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}


export default List