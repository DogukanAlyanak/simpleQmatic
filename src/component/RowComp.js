import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RowConsumer from '../context'

class RowComp extends Component {

    static defaultProps = {
        number: "0"
    }


    render() {
        const { number , counter } = this.props;
        return (
            <RowConsumer>
                {value => {
                    return (
                        <div>
                            <p>Numara : {number} | Gişe : {counter} </p>
                        </div>
                    )
                }}
            </RowConsumer>
        )
    }
}

RowComp.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default RowComp