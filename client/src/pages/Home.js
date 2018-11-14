import React, { Component } from 'react';

import Header from '../components/Header';
import SendVideoForm from '../components/SendVideoForm';
import VideosList from '../components/VideosList';

class Home extends Component {

    render() {
        return (
            <div className="Home">
            <section className="container">
                <div className="row justify-content-center">
                <Header title="Conversor Jonathan Para Samba"/>
                </div>
            </section>
            <section className="container">
                <div className="row justify-content-center">
                    <SendVideoForm/>
                </div>
            </section>
            <section className="container">
                <div className="row justify-content-center">
                <VideosList/>
                </div>
            </section>
            </div>
        );
    }
}

export default Home;