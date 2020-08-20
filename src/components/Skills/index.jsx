import React, { Component } from 'react'

export class Skills extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <hr></hr>
                    </div>
                    <div className="col-4">
                        <p className="text-center">SKILLS</p>
                    </div>
                    <div className="col-4">
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>Languages</p>
                    </div>
                    <div className="col-8">
                        <p>JavaScript, Golang</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>Database</p>
                    </div>
                    <div className="col-8">
                        <p>MySQL</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>Web Technology</p>
                    </div>
                    <div className="col-8">
                        <p>
                            HTML, CSS, Bootstrap, ReactJS, AngularJS
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>Tools</p>
                    </div>
                    <div className="col-8">
                        <p>
                            VS Code
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
