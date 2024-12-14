// @flow 
import * as React from 'react';
import classes from './Post.module.css';

type PropsPostType = {
    message: string;
    likesValue: number;
};
export const Post = (props: PropsPostType) => {
    return (
        <div className={classes.item}>
            <img
                src='https://i.pinimg.com/1200x/d3/91/6e/d3916ebc6a1586b62c123df6f0ba79b9.jpg'
                alt=""/>
            <span className={classes.like}>{props.message}</span>

            <div>

                <span className={classes.like}><b>like: {props.likesValue}</b></span>

            </div>

        </div>

    );
};