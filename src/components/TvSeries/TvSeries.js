import React, { Component } from 'react';


class TvSeries extends Component {
    state = {}
    render() {
        return (

            <div className="tv-series-container">

                <div className="main">
                    <img alt="photo" />
                    <h1>name</h1>
                </div>
                <div className="info">
                    <div>
                        <span className="title">name</span>
                        <span className="detail">details</span>
                    </div>
                    <div>
                        <span className="title">name</span>
                        <span className="detail">details</span>
                    </div>
                    <div>
                        <span className="title">name</span>
                        <span className="detail">details</span>
                    </div>
                    <div>
                        <span className="title">name</span>
                        <span className="detail">details</span>
                    </div>

                </div>

            </div>
        );
    }
}

export default TvSeries;