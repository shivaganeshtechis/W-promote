import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Home';
import { clearErrorsAction } from '../reducks/users/actions';
import { signIn } from '../reducks/users/operations';
import { getUser } from '../reducks/users/selectors';
const SignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { search } = useLocation();
    const selector = useSelector(state => state);
    const errors = getUser(selector).errors;

    const initialValues = {
        email: '',
        password: ''
    };

    const [values, setValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const onSubmitSignIn = () => {
        setIsLoading(true);
        dispatch(
            signIn(values, () => {
                history.push({ pathname: '/', search });
                dispatch(clearErrorsAction());
            })
        );
        setIsLoading(false);
    };
    return (
        <>
            <Home />
            <section class="popup">
                <div class="popup-inner">
                    <h2>SIGN IN</h2>
                    <br />
                    <div class="popup-input">
                        <input
                            className="custom-input"
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <input
                            className="custom-input"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleInputChange}
                        />
                        <br /> <br />
                        <br />
                        <br />
                        <button onClick={onSubmitSignIn}>{isLoading ? 'SIGNING IN...' : 'SIGN IN'}</button>
                        <br />
                        <br />
                        <p>
                            Not a member yet? <Link to={{ pathname: 'sign-up', search }}>Register</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
export default SignIn;
