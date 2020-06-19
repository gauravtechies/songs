import React, {Component} from 'react';
import {connect} from 'react-redux'
import { selectSong } from '../actions'
class SongList extends Component {
    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="button ui primary" onClick={()=>this.props.selectSong(song)}>
                            Select    
                        </button>    

                    </div>
                    <div className="content">{song.title}</div>
                </div>
            ); 
        });
    }
    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStatetoProps =state =>{
    return {songs: state.songs};
}

export default connect(mapStatetoProps,{selectSong})(SongList);
// This is same as we writre 
// function connect(){
//     return function()
//     {
//         return "Hi there"
//     }
// }

// connect()()