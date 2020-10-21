import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../Actions/AppActions';

const Content = (props) => {
    console.log(props);
    useEffect(() => {
        props.getData();
    }, [props.getData]);

    return (
        <div>
            <p className = "quote">{props.quote}</p>
            {/* {props.charactor.map(element => (
                <h2>{element.name}</h2>
            ))}  */}
             <button onClick={props.getData}> Quote </button>
            
            
        </div>
    );
};

const mapStateToprops = (state) => {
    return {
        quote: state.quote,
        loading: state.loading,
    };
};

export default connect(mapStateToprops, {getData})(Content);