import React, { Component } from 'react';
import logo from './green-leaf-logo.svg';
import './App.css';
import { Connector } from 'mqtt-react';

import { Button } from 'react-bootstrap';
import {subscribe} from 'mqtt-react';
import Gauge from 'react-svg-gauge';







const StartIrrigationButton = (props) => {
    return (
        <div className="text-center">
            <div className="text-center">
                {/*<button className="btn btn-success" onClick={() => props.sendMqttMsg("ON-2")}>Start Irrigating!</button>*/}
                {/*<button className="btn btn-danger" onClick={() => props.sendMqttMsg("OFF-2")}>Stop Irrigating!</button>*/}
                <Button bsStyle="success" onClick={() => props.sendMqttMsg("ON-2")}>Start Irrigating!</Button>
                <Button bsStyle="danger" onClick={() => props.sendMqttMsg("OFF-2")}>Stop Irrigating!</Button>
            </div>

            <div className="text-lg-left">
                <div className='rows'>
                    <div className='row'>
                        <Gauge value={400} max={1000} width={200} height={160} label="Soil Humidity" color="#42a7f4" />
                    </div>
                    <div className='row'>
                        <Gauge value={40} max={100} width={200} height={160} label="Humidity" color="#42a7f4" />
                    </div>
                    <div className='row'>
                        <Gauge value={32} max={100} width={200} height={160} label="Temperature" color="#42a7f4" />
                    </div>

                </div>
            </div>
        </div>

    );
}

class _MessageSender extends Component {

    addMessage(message){
        const {mqtt} = this.props;
        mqtt.publish('valve', message);
    }

    render() {
        return (
            <div className="text-center">
                <StartIrrigationButton sendMqttMsg={this.addMessage.bind(this)}/>
            </div>
        );
    }
}

const MessageSender = subscribe({topic: 'valve'})(_MessageSender);



class App extends Component {

    addMessage(message){
        const {mqtt} = this.props;
        mqtt.publish('sensor', message);
    }


  render() {
    return (
      <Connector mqttProps="ws://192.168.1.9:1884/">
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {/*<Label> Smart Gardening System </Label>*/}
          <h2>Smart Gardening System</h2>
        </div>
          <MessageSender/>
        {/*<MessageContainer/>*/}
        {/*<StartIrrigationButton sendMqttMsg={this.addMessage}/>*/}
        {/*<DoneFrame doneStatus="false!!"/>*/}
          {/*<TestButton doneStatus="maybe now.."/>*/}
          {/*<button> Woot</button>*/}
          {/*<startIrrigationButton/>*/}
      </div>
      </Connector>
    );
  }
}

export default App;
