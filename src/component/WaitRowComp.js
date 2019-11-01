import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RowConsumer from '../context'

class WaitRowComp extends Component {

    static defaultProps = {
        number: "0"
    }


    render() {
        const { number } = this.props;
        return (
            <RowConsumer>
                {value => {
                    return (
                        <div>
                            <p>Numara : {number} </p>
                        </div>
                    )
                }}
            </RowConsumer>
        )
    }
}

WaitRowComp.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default WaitRowComp