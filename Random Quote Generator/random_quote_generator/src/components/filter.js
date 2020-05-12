import React from 'react';
import { connect } from 'react-redux';
import{ setColorFilter } from './../redux/actions';

  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setColorFilter(ownProps.filter))
  });

class Filter extends React.Component {


    render() {
        console.log(this.props)
        return <>
        <div>
        <button  
        onClick = {this.props.onClick}
        >
            {this.props.filter}</button>
        </div>
        </>
    }

}

export default connect(
    mapDispatchToProps
  )(Filter);