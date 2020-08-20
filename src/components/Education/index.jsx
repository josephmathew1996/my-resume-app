import React, { Component } from 'react'

export class Education extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <hr></hr>
                    </div>
                    <div className="col-4">
                        <p className="text-center">EDUCATION</p>
                    </div>
                    <div className="col-4">
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>2014-2018</p>
                    </div>
                    <div className="col-8">
                        <p >
                            <strong>MG UNIVERSITY, Kerala, India</strong>
                            <br />
                            B.Tech, Computer Science & Engineering
                             <br />
                            <span>GPA: 7.1</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education
