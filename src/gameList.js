import React, { useState, useEffect } from "react";
import {
    AppBar,
    Grid,
    withStyles,
    Paper,
    Button,
    Typography,
    IconButton
} from "@material-ui/core";
import Cart from "./cart";
// import AddIcon from '@mui/icons-material';

export default function Gamelist() {
    const [games, setGames] = useState([
        { gameName: "CR90 corvette", qty: "0", price: "500", added: false },
        {
            gameName: "Sentinal-class landling craft",
            qty: "0",
            price: "1000",
            added: false
        },
        { gameName: "death star", qty: "0", price: "1200", added: false },
        { gameName: "executer", qty: "0", price: "4500", added: false },
        { gameName: "mafia", qty: "0", price: "100", added: false },
        { gameName: "GTA", qty: "0", price: "50", added: false },
        { gameName: "roadrash", qty: "0", price: "100", added: false },
        { gameName: "Mario", qty: "0", price: "150", added: false },
        { gameName: "Need for speed", qty: "0", price: "200", added: false }
    ]);

    const [totalGames, setTotalGames] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (game, index) => {
        let newQty = Number(game.qty) + 1;
        let updateGames = [...games];
        updateGames.splice(index, 1, {...game, qty: newQty, added: true});
        setTotalGames(totalGames + 1);
        setTotalPrice(totalPrice + Number(game.price));
        setGames(updateGames);
        
    };

    const addGame = (game, index) => {
        let allGames = [...games];
        let count = Number(game.qty) + 1;
        allGames.splice(index, 1, {...game, qty: count});
        setTotalGames(totalGames + 1);
        setTotalPrice(totalPrice + Number(game.price));
        setGames(allGames);
        

    };

    const removeGame = (game, index) => {
        let allGames = [...games];
        if (game.qty > 0) {
            let count = Number(game.qty) - 1;
            allGames.splice(index, 1, {...game, qty: count});
            setTotalGames(totalGames - 1);
            setTotalPrice(totalPrice - Number(game.price));
            setGames(allGames);
            
        }
    };

    const deleteGame = (game, index) => {
        let deleteGame = [...games];
        deleteGame.splice(index, 1, {...game, qty: 0, added: false});
        setTotalPrice(totalPrice - Number(game.price));
        setTotalGames(totalGames - 1);
        setGames(deleteGame);
    }

    const clearCart = () => {
        let allGames = games.map(game => ({...game, added: false}));
        setGames(allGames);
        setTotalGames(0);
        
    }



    return (
        <Grid style={{ color: 'white', backgroundColor: 'black' }}>
            <Grid container spacing={2} xs={12}>
                <Grid item xs={12}>
                    <h1 style={{ color: '#b5651d', fontFamily: 'Fantasy', fontWeight: '50px', textAlign: 'center' }}>GAMES STORE</h1>
                </Grid>
                {games.map((game, index) => {
                    return (
                        <Grid container xs={6}>
                            <Grid item xs={6}>
                                <h4>{game.gameName}</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography style={{ lineHeight: "4" }}>
                                    ${game.price}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography style={{ lineHeight: "2" }}>
                                    {game.gameName}
                                </Typography>
                            </Grid>
                            {game.added === false ? (
                                <Grid item xs={6}>
                                    <Button variant="outlined" style={{ backgroundColor: 'grey', color: 'white' }} onClick={() => addToCart(game, index)}>
                                        Add to Cart
                                    </Button>
                                </Grid>
                            ) : (
                                <Grid item xs={6}>
                                    <IconButton
                                        size="small"
                                        variant="outlined"
                                        onClick={() => addGame(game, index)}
                                        style={{ backgroundColor: 'grey', color: 'white', margin: "5px", borderRadius:'5px', padding:'0.5rem' }}
                                    >
                                        +
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        variant="outlined"
                                        onClick={() => removeGame(game, index)}
                                        style={{ backgroundColor: 'grey', color: 'white', borderRadius:'5px', padding:'0.5rem' }}
                                    >
                                        -
                                    </IconButton>
                                </Grid>
                            )}
                        </Grid>
                    );
                })}
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={12}>
                <Cart games={games}
                deleteGame = {deleteGame}
                addGame = {addGame}
                removeGame = {removeGame}
                totalGames = {totalGames}
                totalPrice={totalPrice}
                clearCart = {clearCart} />
                </Grid>
            </Grid>
        </Grid>
    );
}
