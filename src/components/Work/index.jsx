import React, { Component } from 'react'

export class Work extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <hr></hr>
                    </div>
                    <div className="col-4">
                        <p className="text-center">WORK EXPERIENCE</p>
                    </div>
                    <div className="col-4">
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>July 2018 - Present</p>
                    </div>
                    <div className="col-8">
                        <p>
                            <strong>Software Engineer</strong>
                            <br />
                            Hifx IT & Media Services
                            <br />
                            <span>
                                Building modern web applications in Golang and ReactJS
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
