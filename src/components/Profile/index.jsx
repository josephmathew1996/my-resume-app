import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (
            <div>
                <img src="profile.jpg" alt="Joseph Chakkalakal Mathew" />
                <div className="mt-2">
                    <h5>Joseph Chakkalakal Mathew</h5>
                    <p>Software Engineer</p>
                </div>
            </div>
        )
    }
}

export default Profile
