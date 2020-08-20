import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <hr></hr>
                    </div>
                    <div className="col-4">
                        <p className="text-center">CONTACT</p>
                    </div>
                    <div className="col-4">
                        <hr></hr>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-6">
                        <a href="https://github.com/josephmathew1996" >
                            Github
                        </a>
                    </div>
                    <div className="col-6">
                        <a href="https://www.linkedin.com/in/joseph-mathew-263a47a3/" >
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
