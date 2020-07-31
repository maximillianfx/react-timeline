import React from 'react';
import ReactTimeline from './components/timeline/react-timeline.jsx'

export default props => {
    return(
        <ReactTimeline list={props.list}/>
    );
}