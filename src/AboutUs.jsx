import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
                <div className="card mt-1" >
                        <div className="card-body">
                            <img src={`https://picsum.photos/id/1/800/200`} className="card-img-top"></img>
                            <p className="card-text mt-3">Lorem Ipsum is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
                        </div>
                </div>
        )
    }
}
