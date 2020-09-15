import React,{useEffect} from 'react';
import MovieSearch from '../Components/MovieSearch';
import Cards from "../Components/Card";
import {useSelector,useDispatch} from 'react-redux';
import {weekTrendingMovies, setIsSearchedToFalse} from "../Redux-State/actions/MovieAction";
import { Button } from '@material-ui/core';
import Footer from "../Components/Footer";

const Landing = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(weekTrendingMovies());
    }, [])
    const state = useSelector(state => state.MovieReducer);
    const {isSearched,searchedMovies,trendingMovies} = state;
    return (
        <div>
            <MovieSearch />
            <h3>{isSearched ? 'Search Results' : 'Trending This Week'}</h3>
            {isSearched && <Button onClick={()=>dispatch(setIsSearchedToFalse())} color="secondary">Go Back</Button>}
            <Cards searchStatus={isSearched} data={isSearched ? searchedMovies : trendingMovies} />
            <br />
            <Footer />
            <br />
        </div>
    )
}

export default Landing;
