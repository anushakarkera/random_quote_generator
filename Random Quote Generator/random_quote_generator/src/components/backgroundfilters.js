import React from 'react';
import Filter from './filter'



class BackgroundFilter extends React.Component {

    constructor(props){
        super(props)
    }
    


    render () {
        return <div style = {filters}>
        <Filter filter={'Red'}></Filter>
        <Filter filter={'Green'}></Filter>
        <Filter filter={'Yellow'}></Filter>
        </div>
    }

}

const filters = {
    display: 'flex',
    justifyContent: 'space-around'
}

export default BackgroundFilter;