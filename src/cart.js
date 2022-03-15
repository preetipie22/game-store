import React, { useState } from "react";
import {
    AppBar,
    Grid,
    withStyles,
    Paper,
    Button,
    Typography,
    IconButton,
    Divider
} from "@material-ui/core";

export default function Cart(props) {
    return (
        <Grid style={{ color: 'white', textAlign: 'center' }}>
            <Grid item style={{paddingTop:'2rem'}}> 
                Go to first &ensp;&ensp; Previous &ensp;&ensp; Next &ensp;&ensp; Go to Last</Grid>
            {props.games.map((game, index) => {
                console.log("game" + game.gameName);
                return (
                    <Grid container spacing={4} xs={12}>
                        <Grid item xs={12}>
                            {game.added === true ? (
                                <Grid container xs={12}>
                                    <Grid item xs={2}>
                                        <IconButton
                                            style={{ color: 'white' }}
                                            size="small"
                                            variant="outlined"
                                            onClick={() => props.deleteGame(game, index)}
                                        >
                                            x
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography>{game.gameName}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography>
                                            {game.qty} * {game.price}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                       $ {Number(game.qty) * Number(game.price)}
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton
                                            style={{ backgroundColor: 'grey', color: 'white', borderRadius: '5px', padding: '0.5rem', margin: "5px" }}
                                            size="small"
                                            variant="outlined"
                                            onClick={() => props.addGame(game, index)}
                                        >
                                            +
                                        </IconButton>
                                        <IconButton size="small" variant="outlined">
                                            {game.qty}
                                        </IconButton>
                                        <IconButton
                                            style={{ backgroundColor: 'grey', color: 'white', borderRadius: '5px', padding: '0.5rem' }}
                                            size="small"
                                            variant="outlined"
                                            onClick={() => props.removeGame(game, index)}
                                        >
                                            -
                                        </IconButton>
                                    </Grid>
                                </Grid>
                               
                            ) : (
                                ""
                            )}
                        </Grid>
                    </Grid>
                );
            })}
             <hr />
            {
                (props.totalGames > 0) && 
            <Grid item xs={12}>
                <Grid container xs={12}>
               
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>Total</Grid>
                    <Grid item xs={2}> {props.totalGames} spaceships</Grid>
                    <Grid item xs={2}>${props.totalPrice}</Grid>
                    <Grid item xs={2}><Button onClick={props.clearCart} style={{color:'white', backgroundColor:'grey'}}>Clear Cart</Button></Grid>
                    </Grid>
                </Grid>
            }
        </Grid>
    );
}
