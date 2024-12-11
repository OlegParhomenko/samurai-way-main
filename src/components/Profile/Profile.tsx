// @flow 
import * as React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

type Props = {
    
};
export const Profile = (props: Props) => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src={'https://image.cdn2.seaart.me/2023-08-25/15354882161664005/db6c025f8503a720e7944dc1e450fb446bbda97b_high.webp'}/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    );
};