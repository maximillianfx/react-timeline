import React, { Component } from 'react'
import Point from './subs/point/point.jsx'
import './react-timeline.css'

class ReactTimeline extends Component {

    constructor(props) {
        super(props);

        this.verifyInputs(props)

        this.state = {
            inputs: this.verifyInputs(props),
            linePercent: 0,
            list: props.list,
            end: 0
        }
    }

    verifyInputs(props) {

        let valid = true;
        if (props.list.find(c => c.actual) == null)
            return !valid
        if (props.list.filter(c => c.actual).length > 1)
            return !valid;
        if (props.list.filter(c => c.text.length > 15).length > 1)
            return !valid;

        let actual = props.list.filter(c => c.actual)[0]
        if (actual.completed)
            return !valid;

        let index = props.list.indexOf(actual)
        let completed = props.list.filter(c => c.completed).length
        let future = props.list.filter(c => !c.completed && !c.actual).length
        if (completed >= index+1)
            return !valid;
        if ((props.list.length-completed-1) !== future)
            return !valid;

        return valid;
    }

    renderPoints() {
        return this.state.list.map(c => (
            <Point key={c.id} element={c}/>
        ));
    }

    componentDidMount() {
        let length = this.state.list.filter(c => c.completed).length === this.state.list.length ? this.state.list.length : (this.state.list.filter(c => c.completed)).length + 1
        this.setState({
            end: parseInt((length/this.state.list.length)*100)
        })

        let ms = 0.01
        let rate = 0.8
        setTimeout(() => {
            this.renderProgress(ms,rate);
        }, 1500);
    }

    renderProgress(interval, rate) {
        setTimeout(() => {
            this.setState({
                linePercent: this.state.linePercent+rate,
            })
            if(parseInt(this.state.linePercent) !== this.state.end){
                
                if ((this.state.linePercent/this.state.end)*100 > 84) {
                    this.renderProgress(interval+0.05,0.2)
                } else {
                    this.renderProgress(interval+0.05,rate)
                }
            }
        }, interval);
    }

    render() {
        if (this.state.inputs) {
            return (
                <div>
                    <div className="row">
                        <div className="dots-stack">
                            {this.renderPoints()}
                        </div>
                    </div>
                    <div className="row stacked">
                        <div className="line-stack">
                            <div className="line" style={{width: this.state.linePercent + "%"}}></div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <span>Bad input</span>
        }
    }
}

export default ReactTimeline