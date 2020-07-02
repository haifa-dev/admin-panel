import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import Create from './Create';
import List from './List';

import server from '../../api/server';

const View = props => {

    // state    
    const [profiles, setProfiles] = useState([]);

    const initialProfileFormState = { id: null, name: '', };

    const [currentProfile, setCurrentProfile] = useState(initialProfileFormState);

    const addProfile = profile => {
        console.log("Create profile", profile);
        profile.id = profiles.length + 1
        setProfiles([...profiles, profile])
    }

    console.log(addProfile);

    const editProfile = profile => {
        // setEditing(true)
        setCurrentProfile({ id: profile.id, name: profile.name })
    }
    const updateProfile = (id, updateProfile) => {
        // setEditing(false)
        setProfiles(profiles.map(profile => (profile.id === id ? updateProfile : profile)))
    }
    const deleteProfile = id => {
        setProfiles(profiles.filter(profile => profile.id !== id))
    }

    // component cycle
    useEffect(() => {
        (async () => {
            const res = await server.get('/devProfiles');
            setProfiles(res.data.data);
        })();
        return () => { setProfiles([]); };
    }, []);

    return (
        <main>
            {/* <Create addProfile={addProfile} /> */}
            <Route path={`${props.match.url}/Create`} render={(addProfile) => <Create addProfile={addProfile} />} />
            <Route path={`${props.match.url}/`} render={() => <List profiles={profiles} />} />

            {/* <Create greeting="Welcome to React" /> */}
            {/* <Route path={`${props.match.url}/Create`} render={(props) => <Create greeting="Welcome to React" />} />
            <Route path={`${props.match.url}/`} render={() => <List profiles={profiles} />} /> */}
        </main>
    );
};

export default View;
