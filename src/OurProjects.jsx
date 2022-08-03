import React, { Component } from 'react'

export default class OurProjects extends Component {
    render() {
        return (
                <div className="album mt-3 bg-light">
                    <div className="container">

                        <div className="row">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
                                    return (
                                        <div key={item} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt-3">
                                            <div className="card shadow-sm">
                                                <img src={`https://picsum.photos/100/10${item}`} className="card-img-top"></img>
                                                <div className="card-body">
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
        )
    }
}
