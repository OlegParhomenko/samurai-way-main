// @flow 
import * as React from 'react';
import classes from './Header.module.css';

type Props = {
    
};
export const Header = (props: Props) => {
    return (
        <header className={classes.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnmrgCWfgo_sMSRqHXnOKALHltLHZeny-4w&s"
                 alt=""/>
        </header>
    );
};