import React, { Fragment } from 'react';

import aug from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/augustus_gloop.jpg'
import bay from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/bay_of_pigs.jpg'
import che from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/cherub.jpg'
import gal from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/galaxy_note.jpg'
import leg from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/leggo_my_eggo.jpg'
import mud from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/mudblood.jpg'
import sma from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/piggy_smalls.jpg'
import prk from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/porkchop.jpg'
import trb from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/trouble.jpg'
import sob from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/sobriety.jpg'
import rai from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/rainbowdash.jpg'
import trf from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/truffleshuffle.jpg'
import tps from '/Users/gurjot/work4/hog/hogwarts-nyc04-seng-ft-012720/src/hog-imgs/the_prosciutto_concern.jpg'

const posterMap = {
    'augustus gloop': aug,
    'bay of pigs': bay,
    'cherub': che,
    'galaxy note': gal,
    'leggo my eggo': leg,
    'mudblood': mud,
    'piggy smalls': sma,
    'porkchop': prk,
    'trouble': trb,
    'sobriety': sob,
    'rainbowdash': rai,
    'truffleshuffle': trf,
    'the prosciutto concern': tps
};
class HogCard extends React.Component{

    state={
        display:false
    }

    handleClick = (e) =>{
        this.setState({
            display: !this.state.display
        })
    }

    render(){
        return(
            <div className="container" onClick={this.handleClick}>
                <h2>Name: {this.props.hog.name}</h2>
                    <p>
                        <img src={posterMap[this.props.poster]} />
                    </p>
                {this.state.display ? <div>
                    Specialty: {this.props.hog.specialty}
                    <br></br>
                    Greased: {this.props.hog.greased}
                    <br></br>
                    Weight: {this.props.hog.weight}
                    <br></br>
                    Highest Medal Achieved: {this.props.hog['highest medal achieved']}
                </div> : <fragment></fragment>}
            </div>
        );
    }
}
export default HogCard