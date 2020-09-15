import React from 'react'
import {Typography,CardMedia,CardContent,Card,makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      margin:'30px 40px'
    },
    details: {
      display: "flex",
      flexDirection: "column",
      textAlign:'left'
    },
    content: {
      flex: "1 0 auto",
      marginTop:'7rem'
    },
    cover: {
      margin:'25px 10px',
      marginLeft:30,
      width: '40rem',
      height: '25rem'
    },
    title: {
        fontWeight: 'bold',
        color:'rgb(60, 60, 60)'
    },
    overview: {
        lineHeight:'1.5rem',
        fontSize:'1.2rem'
    }
  }));
const Cards = (props) => {
    const classes = useStyles();
    const movies = props.data;
    if(movies.length < 1 && props.searchStatus === true){
      return <h4>No Movies Found! Try Again.</h4>
    }
    return (
            <div className= "card">
                {movies.filter(movie => movie.poster_path).map(movie => {
                    return <Card key={movie.id} className={classes.root}>
                    <CardMedia
                        className={classes.cover}
                        image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography className={classes.title} component="h3" variant="h3">
                        {movie.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                        RELEASE DATE: {movie.release_date}<br />
                        RATING: {movie.vote_average}
                        </Typography>
                        <Typography className={classes.overview} variant="p" color="p">
                        {movie.overview}
                        </Typography>
                        </CardContent>
                    </div>
                        </Card>
                })}
            </div> 
    )
}

export default Cards
