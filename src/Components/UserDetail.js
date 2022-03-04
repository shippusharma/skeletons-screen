import React,{useState,useEffect} from 'react'

export default function UserDetail() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
       setTimeout(async () => {
           const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
           const data = await res.json()
           setProfile(data);
       }, 4000);   
    })

    return (
        <div className="UserDetail">
            <h2>UserDetail</h2>
            
            {profile && (
                <div className="profile"> 
                    <h3>{profile.name}</h3> 
                    <p>{profile.email}</p>
                    <p>{profile.website}</p>
                </div>             
            )}

            {!profile &&  <div>Loading...</div>}
        </div>
        
    )
}
