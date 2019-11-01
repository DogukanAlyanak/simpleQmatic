import React, { Component } from 'react'
import RowConsumer from '../context'
import WaitRowComp from './WaitRowComp'

class WaitRowsComp extends Component {

    render() {
        return (
            <RowConsumer>
                {
                    value => {
                        const { waitrow } = value
                        return (
                            <div>
                                {
                                    waitrow.map(customer => {
                                        return (
                                            <WaitRowComp
                                                key={customer.id}
                                                id={customer.id}
                                                number={customer.number}
                                                counter={customer.counter}
                                            />
                                        )
                                    })
                                }

                            </div>
                        )
                    }
                }
            </RowConsumer>
        )
    }
}
export default WaitRowsComp