import React, { Component } from 'react'
import RowConsumer from '../context'
import axios from 'axios'
import WaitRowsComp from '../component/WaitRowsComp'

class counterPullCompOne extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 1,
            nowselectrowforthiscounter: 0
        }
    }

    finalRowAdd = async (dispatch, e) => {
        e.preventDefault()
        let res = await axios.get('http://localhost:3004/waitrow')

        if (res.data.length === 0) {
            alert("Bekleyen Yok")
            return
        }

        

        let siraliRes = res.data.sort( function(a, b) {
            return a.id - b.id;

        })



        let counter = this.state.counter.toString()
        let id = siraliRes[0].id.toString()        
        let number = siraliRes[0].number.toString()
        

        const SelectRow = {
            counter,
            id,
            number
        }

        const responseFinal = await axios.post('http://localhost:3004/finalrow', SelectRow)
    
        dispatch({ type: "ADD_ROW_FINAL", payload: responseFinal.data })

        await axios.delete(`http://localhost:3004/waitrow/${id}`);

        this.setState({
            nowselectrowforthiscounter: number
        }) 
    }


    render() {

        return <RowConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <button
                                onClick={this.finalRowAdd.bind(this, dispatch)}
                            >
                                Sıra Çek
                            </button>
                            <hr/>
                            Şu anki Sıra No: {this.state.nowselectrowforthiscounter}
                            <hr/>
                            <h5>Bekleyenler</h5>
                            <WaitRowsComp />
                        </div>
                    )
                }
            }
        </RowConsumer >
    }
}
export default counterPullCompOne