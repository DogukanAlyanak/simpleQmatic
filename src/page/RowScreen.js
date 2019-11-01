import React, { Component } from 'react'
import RowsComp from '../component/RowsComp'
import '../css/RowScreen.css'

class RowScreen extends Component {
    render() {
        return (
            <div>
                <p>Sıra - Gişe</p>
                <RowsComp />
            </div>
        )
    }
}
export default RowScreen;