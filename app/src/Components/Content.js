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
         
            <h2> {props.name} </h2>
            {/* <p> {props.status}</p> */}
            <button onClick = {props.getData}> Next Character </button>
        </div>
    );
};

const mapStateToprops = (state) => {
    return {
        name: state.name,
        status: state.status,
        image: state.image,
        loading: state.loading,
    };
};

export default connect(mapStateToprops, {getData})(Content);