import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <hr></hr>
                    </div>
                    <div className="col-4">
                        <p className="text-center">PROJECTS</p>
                    </div>
                    <div className="col-4">
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p className="font-weight-bold text-secondary">Time based Playlist-Music Application</p>
                    </div>
                    <div className="col-8">

                        <ul>
                            <li>Built a RESTful API service for both web and mobile clients.</li>
                            <li>Developed an admin web application for all admin operations to
manage music playlists.</li>
                            <li>Technologies used - Golang, MySQL, ReactJS and S3.</li>
                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}

export default Projects
