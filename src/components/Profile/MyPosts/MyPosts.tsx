// @flow 
import * as React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";

type Props = {};
export const MyPosts = (props: Props) => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                New post
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>

    );
};