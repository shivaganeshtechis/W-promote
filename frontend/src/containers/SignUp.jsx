import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Home';
import { clearErrorsAction, signUpError } from '../reducks/users/actions';
import { signUp } from '../reducks/users/operations';
import { getUser } from '../reducks/users/selectors';

const SignUp = () => {
    const history = useHistory();
    const { search } = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const errors = getUser(selector).errors;

    const initialValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
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

    const onSubmitSignUp = () => {
        if (values.password !== values.password_confirmation) {
            dispatch(signUpError({ password_confirm: ['Password are not the same.'] }));
            return;
        }

        setIsLoading(true);
        dispatch(
            signUp(values, () => {
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
                    <h2>SIGN UP</h2>
                    <div class="popup-input">
                        <input
                            className="custom-input"
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={values.name}
                            onChange={handleInputChange}
                        />
                        <br />
                        <br />
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
                        <input
                            className="custom-input"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleInputChange}
                        />
                        <br /> <br />
                        <input
                            className="custom-input"
                            type="password"
                            name="password_confirmation"
                            placeholder="Enter Confirm Password"
                            value={values.password_confirmation}
                            onChange={handleInputChange}
                        />
                        <br /> <br />
                        <button onClick={onSubmitSignUp}>{isLoading ? 'SIGNING UP...' : 'SIGN UP'}</button>
                        <br />
                        <br />
                        <p>
                            Already a Member? <Link to={{ pathname: '/sign-in', search }}>sign in</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
export default SignUp;
