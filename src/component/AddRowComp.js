import React, { Component } from 'react'
import RowConsumer from '../context'
import axios from 'axios';

class AddRowComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 100,
            id: 10
        }
    }

    addWaitRowEvent = async (dispatch, e) => {
        e.preventDefault();

        let id = this.state.id
        let number = this.state.number
        let counter = "0"

        this.setState({
            number: ++number,
            id: ++id,
        })

        id = id.toString()
        number = number.toString()

        const newRow = {
            id,
            number,
            counter
        }

        const response = await axios.post('http://localhost:3004/waitrow', newRow)

        dispatch({ type: "ADD_ROW_WAIT", payload: response.data })

    }

    
    render() {

        return <RowConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <button
                                onClick={this.addWaitRowEvent.bind(this, dispatch)}
                            >
                                Sıra Al
                            </button>
                        </div>
                    )
                }
            }
        </RowConsumer>
    }
}
export default AddRowComp;