import React from 'react';
import classes from './game.module.css';

const Game = () => {
    return (  
        <main>
            <div className={classes.container}>
                <div className={classes.mainCard}>
                    <div className={`${classes.childCard} ${classes.card1}`}>Card1</div>  
                    <div className={`${classes.childCard} ${classes.card2}`}>Card2</div>
                    <div className={`${classes.childCard} ${classes.card3}`}>Card3</div>
                    <div className={`${classes.childCard} ${classes.card4}`}>Card4</div>
                </div>
            </div>
        </main>
    );
}
 
export default Game;