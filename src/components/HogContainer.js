import React from 'react';
import HogCard from './HogCard.js'

const HogContainer = (props) => {

    let arrayOfComp = props.hogs.map((singleHog) => {
        return <HogCard 
            key={singleHog.name}
            hog={singleHog}
            poster={singleHog.name.toLowerCase()}
            />
    })

    return(
        <div>
            {arrayOfComp}
        </div>
    )
}

export default HogContainer