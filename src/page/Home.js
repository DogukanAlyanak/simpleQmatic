import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Q-Matic</h1>
                <hr />
                <Link to = {`/`}>Home</Link><br/>
                <Link to = {`rowscreen`}>Sıra Ekranı</Link><br/>
                <Link to = {`addrowscreen`}>Sıra Al Ekranı</Link><br/>
                <Link to = {`waitrowscreen`}>Bekleyenler</Link><br/>
                <hr/>
                <h3>Counters</h3>
                <Link to = {`counter/1`}>Gişe 1 Ekranı</Link><br/>
            </div>
        )
    }
}
export default Home;