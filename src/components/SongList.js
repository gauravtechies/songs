import React, {Component} from 'react';
import {connect} from 'react-redux'
class SongList extends Component {
    render(){
        return <div>songList</div>
    }
}

export default connect()(SongLIst);
// This is same as we writre 
// function connect(){
//     return function()
//     {
//         return "Hi there"
//     }
// }

// connect()()