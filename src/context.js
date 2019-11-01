import React, { Component } from 'react'
import axios from 'axios';


const RowContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ROW_WAIT":
            return {
                ...state,
                waitrow: [...state.waitrow, action.payload]

            }
        case "ADD_ROW_FINAL":
            return {
                ...state,
                finalrow: [...state.finalrow, action.payload]

            }
        case "DELETE_ROW_WAIT":
            return {
                ...state,
                waitrow: state.waitrow.filter(
                    user => action.payload !== user.id
                )

            }
        default:
            return state
    }
}

export class RowProvider extends Component {

    state = {
        finalrow: [],
        waitrow: [],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    componentDidMount = () => {

        setInterval(() => {
            this.update()
        }, 1000)

    }

    update = async () => {

        const responseFinalRow = await axios.get("http://localhost:3004/finalrow")
        const responseWaitRow = await axios.get("http://localhost:3004/waitrow")

        this.setState({
            finalrow: responseFinalRow.data,
            waitrow: responseWaitRow.data
        })
    }

    render() {
        return (
            <RowContext.Provider value={this.state}>
                {this.props.children}
            </RowContext.Provider>
        )
    }
}

const RowConsumer = RowContext.Consumer;

export default RowConsumer