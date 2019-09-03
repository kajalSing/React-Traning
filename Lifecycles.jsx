import React, {Component} from 'react';

class Lifecycle extends Component {
    /**
     * If you don’t initialize state and you don’t bind methods,
     * you don’t need to implement a constructor for your React component
     * The constructor for a React component is called before it is mounted. 
     * Avoid copying props into state! This is a common mistake:
        constructor(props) {
        super(props);
        // Don't do this!
        this.state = { color: props.color };
        }
     */
    constructor(props){
        super(props);
        console.log("Constructor Method");
        // Don't call this.setState() here!
        this.state = { counter: 0 };
    }

    /**
     * invoked immediately after a component is mounted 
     * This method is a good place to set up any subscriptions.
     * If you do that, don’t forget to unsubscribe in componentWillUnmount().
     * You may call setState() immediately in componentDidMount().
     * It will trigger an extra rendering, but it will happen before the browser updates the screen.
     */
    
    componentDidMount(){
        console.log("Component Did Mount Method ")
    }

    /**
     * invoked immediately after updating occurs.
     * This method is not called for the initial render.
     * @param {*} prevProps 
     * @param {*} prevState 
     * @param {*} snapshot If your component implements the getSnapshotBeforeUpdate()
     * lifecycle (which is rare), the value it returns will be passed as a third “snapshot”
     * parameter to componentDidUpdate(). Otherwise this parameter will be undefined.
     */
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update Method")
    }

    /**
     * invoked immediately before a component is unmounted and destroyed
     * Perform any necessary cleanup in this method, such as invalidating timers,
     * canceling network requests, or cleaning up any subscriptions that
     * were created in componentDidMount()
     * 
     * should not call setState() in componentWillUnmount()
     * because the component will never be re-rendered. 
     */
    componentWillUnmount(){
        console.log("Component Will Unmount Method")
    }

    // rarely used 

    /**
     * shouldComponentUpdate() is invoked before rendering
     * when new props or state are being received.
     * Defaults to true. 
     * This method is not called for the initial render or when forceUpdate() is used
     * @param {*} nextProps 
     * @param {*} nextState 
     */

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should Component Update Method")
    }

    /**
     * invoked right before calling the render method,
     * both on the initial mount and on subsequent updates
     * return an object to update the state, or null to update nothing.
     * @param {*} props 
     * @param {*} state 
     */
    static getDerivedStateFromProps(props, state){
        console.log("Get Derived State From Props Method")
    }

    /**
     * invoked right before the most recently rendered output is committed to e.g. the DOM.
     * It enables your component to capture some information from the DOM 
     * (e.g. scroll position) before it is potentially changed 
     */
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Get Snapshot Before Update")
    }

    /**
     * The render() function should be pure, meaning that it does not modify
     * component state, it returns the same result each time it’s invoked,
     * and it does not directly interact with the browser.
     */
    render(){
        console.log("Render method");
        return(
            <TestState counter={this.state.counter}>Lifecycle Methods</TestState>
        )
    }
}

const TestState = (props) => {
    return(
        <p> {props.counter}</p>
    )
}
export default Lifecycle;