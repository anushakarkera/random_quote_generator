import React from 'react';
import QuoteCard from './quotecard';
import BackgroundFilter from './backgroundfilters'


class MainContainer extends React.Component {
    render () {
        return <>
            <QuoteCard></QuoteCard>
            <BackgroundFilter></BackgroundFilter>
        </>
    }
}

export default MainContainer;