import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

export default class Puppies extends Component {

    static propTypes = {
        qt: PropTypes.number,
        startX: PropTypes.number
    };

    state = {
        litter: this.pupulateLitter()
    }

    pupulateLitter() {
        let arr = [];
        const { qt } = this.props;

        for (let i = 0; i < qt; i++) {
            arr.push('puppy');
        }

        return arr;
    }
    
    render() {
        const { litter } = this.state;
        
        return (
            <Fragment>
                {litter.map( puppy => { <Puppy /> })}
            </Fragment>
        );
    }
}

class Puppy extends Component {
    static propTypes = {
      };

      render() {
        return (
            <span>Puppy</span>
        );
    }
    
}