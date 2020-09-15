import { SEARCH_ATTEMPT, SEARCH_SUCCESS, SEARCH_FAIL,TRENDING_ATTEMPT,TRENDING_FAIL,TRENDING_SUCCESS, IS_SERACHED } from '../actions/types';
const initialState = {
    loading:false,
    isSearched:false,
    searchedMovies:[],
    trendingMovies:[]
}
const MovieReducer = (state=initialState,action) => {
    const {type,payload} = action;
    switch(type){
        case SEARCH_ATTEMPT:
            return {...state,loading:true,searchedMovies:[]}
        case SEARCH_SUCCESS:
            return {...state,loading:false,isSearched:true,searchedMovies:payload}
        case SEARCH_FAIL:
            return {...state,loading:false,searchedMovies:[]}  
         case TRENDING_ATTEMPT:
            return {...state,loading:true}
        case TRENDING_SUCCESS:
            return {...state,loading:false,trendingMovies:payload}
        case TRENDING_FAIL:
            return {...state,loading:false} 
        case IS_SERACHED:
            return{...state,isSearched:false}     
        default: return state;          
    }
}

export default MovieReducer;
