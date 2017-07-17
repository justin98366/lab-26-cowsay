import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: " "
               
	           

            
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log('event', e);
        this.setState((state) => {
            return {
                content: cowsay.say({
                    text : faker.lorem.sentence(),
	                e : "oO",
	                T : "U "
                }),
                
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Cowsay</h1>
                <button onClick={this.handleClick}> Click Me </button>
                <pre>{this.state.content}</pre>
            </div>
        );
    }
}
ReactDom.render( <App />, document.getElementById('root'))