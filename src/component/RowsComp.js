import React, { Component } from 'react'
import RowConsumer from '../context'
import RowComp from './RowComp'

class RowsComp extends Component {
    render() {
        return (
            <RowConsumer>
                {value => {
                    const { finalrow } = value
                    return (
                        <div>
                            {
                                finalrow.map(customer => {
                                    return (
                                        <RowComp
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
                }}
            </RowConsumer>
        )
    }
}
export default RowsComp