import {combineReducers} from 'redux';

const songsReducer=()=>{
    return [
        {title:"Hey ram hey ram", duration:'4:05'},
        {title:"Kainthe wala", duration:'4:05'},
        {title:"Chalne lagi hai hawa", duration:'3:05'},
        {title:"Tum paas aaye", duration:'2:05'},
        {title:"Jaroori tha", duration:'5:05'},
        {title:"Ambra teh hone ne nabere", duration:'2:05'},
        {title:"Hum Tum", duration:'3:05'},
    ]
};

const selectedSongReducer =(selectedSong=null,action) =>{
    if(action.type=='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;

}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})