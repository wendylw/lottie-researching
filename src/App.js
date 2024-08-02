import React, { Component } from 'react';
import Lottie from 'react-lottie';
import DeliveryLottie from './images/delivery.json';
import DeliveryGif from './images/delivery.gif';
import './App.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: DeliveryLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
class App extends Component {
  state = { isStopped: false, isPaused: false };

  render() {
    return (
      <div className="App text-center">
        <h1>Lottie vs GIF</h1>
        <div className="container flex flex-top">
          <div className="col-6">
            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
            />
            <button onClick={() => this.setState({ isStopped: true })}>Stop</button>
            <button onClick={() => this.setState({ isStopped: false, isPaused: false })}>Play</button>
            <button onClick={() => this.setState({ isPaused: !this.state.isPaused })}>Pause</button>
          </div>
          <div className="col-6">
            <img className="gif-image" src={DeliveryGif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
