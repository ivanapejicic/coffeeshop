import './Login.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import API_URL from '../../../utils';

function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/users/login`, {
            username: event.target.username.value,
            password: event.target.password.value
        })
            .then((response) => {
                sessionStorage.setItem('token', response.data.token)
                navigate('/rides')
            })
            .catch((error) => {
                setError("Invalid credentials. Please try again.");
            });
    }
    return (
        <>
            <div className='login'>
                <form className='form' onSubmit={handleSubmit}>
                    <Link to='/user'><img className='form__arrow' src={arrowBack} alt='arrow back icon that takes user to home page'></img></Link>
                    <h2 className='login__title'>Welcome Back! <img src={login} alt="google icon for user login"></img></h2>
                    <label className='form__label' htmlFor="username">Username:</label>
                    <input className='form__input' type="text" id="username" name="username" required />
                    <br />
                    <label className='form__label' htmlFor="password">Password:</label>
                    <input className='form__input' type="password" id="password" name="password" required />
                    <br />
                    <button className='form__button' type="submit">Login</button>
                    {error && <div className="login__message">{error}</div>}
                </form>
            </div>
        </>
    );
}

export default Login;