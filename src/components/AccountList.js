import React from 'react';

import "./AccountList.css";

const Posts = (props) => {
    return (
        <div>
            <ul>
                {props.accounts.map((account, i) => {
                    return (
                        <li key={i}>
                            <span onClick={() => props.onClick(i)}>X</span> {account}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Posts;