import React from 'react';
import {connect}  from 'react-redux'

const SongDetail = ({song}) =>{
    
    if(!song){
        return <div>No song is selected</div>;
    }
    return  (
            <div>{song.title}</div>
        );
}

const mapStatetoProps =state =>{
    return {song: state.selectedSong};
}

export default connect(mapStatetoProps)(SongDetail);