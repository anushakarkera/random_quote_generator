import React from 'react';
import { connect } from 'react-redux';
import { addQuoteAction } from '../redux/actions'
import Skeleton from '@yisheng90/react-loading';


const mapStateToProps = (state) => ({
    showLoading: state.quote.loading,
    quote: state.quote.quote,
    filter: state.filterReducer //to change background color --> uses simple action creator object
});

const mapDispatchToProps = dispatch => ({
    addQuote: () => dispatch(addQuoteAction())
});

class QuoteCard extends React.Component {
    constructor(props){
        super(props);
        this.props.addQuote();
      }


    addQuoteClicked = event => {
        event.preventDefault();
        console.log(event);
        this.props.addQuote();
    }

    render() {
        return <>
        <div style = {quote_card}>
            { this.props.showLoading ?
            <Skeleton/> :  
            <div style={{backgroundColor:this.props.filter, padding: '2%', 'display': 'flex', height: '100%', flexDirection: 'column'}}>          
                <div style= {quote_text}>
                    {this.props.quote.text}
                </div>
                <div style = {author}>
                    - {this.props.quote.author}
                </div>
                <div style = {button}>
                    <button onClick={e => this.addQuoteClicked(e)}>Next QUOTE</button>
                </div>
            </div>
            }
        </div>
        </>
    }
}



const quote_card = {
    width: '50%',
    height: '50%',
}

const quote_text = {
    fontWeight: 'bold',
    fontFamily: 'serif',
   fontSize: '2rem'
}


const author = {
    textAlign: 'right'
}

const button = {
    marginRight: '3%',
    'flex': 1,
    textAlign: 'center'
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteCard);