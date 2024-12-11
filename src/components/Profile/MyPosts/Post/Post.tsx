// @flow 
import * as React from 'react';
import classes from './Post.module.css';

type Props = {};
export const Post = (props: Props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://i.pinimg.com/1200x/d3/91/6e/d3916ebc6a1586b62c123df6f0ba79b9.jpg'
                alt=""/>
            post №1
            <div>
                <span className={classes.like}>like</span>
            </div>

        </div>

    );
};