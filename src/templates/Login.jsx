import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

const Login = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    console.log(selector.router);

    return (
        <div>
            <h2>LOG IN</h2>
            <button onClick={() => dispatch(push('/'))}>
            Log in
            </button>
        </div>
    )
}

export default Login;