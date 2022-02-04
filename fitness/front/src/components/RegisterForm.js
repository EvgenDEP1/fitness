import React, {useState} from "react";
import axios from "axios";


const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNumber] = useState('');


    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangeFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangeLastName(e) {
        setLastName(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleChangePhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/register/', {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
        }).then(function (res) {
            alert('Вы успешно зарегистрировались!')
            window.location = "/login"
        }).catch(function (err) {
            alert('Проверьте логин и пароль');
        })
    }

    return (
        <div className="login-form">
            <form method="post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUserName" className="form-label">Логин</label>
                    <input type="text" className="form-control"
                           name="login" placeholder="Логин"
                           id="exampleInputUserName"
                           onChange={handleChangeUsername}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputFirstName" className="form-label">Имя</label>
                    <input type="text" className="form-control"
                           name="first_name" placeholder="Имя"
                           id="exampleInputFirstName"
                           onChange={handleChangeFirstName}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLastName" className="form-label">Фамилия</label>
                    <input type="text" className="form-control"
                           name="last_name" placeholder="Фамилия"
                           id="exampleInputLastName"
                           onChange={handleChangeLastName}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Почта</label>
                    <input type="email" className="form-control"
                           name="mail" placeholder="Почта"
                           id="exampleInputEmail"
                           onChange={handleChangeEmail}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Пароль</label>
                    <input type="password" className="form-control"
                           name="password" placeholder="password"
                           id="exampleInputPassword"
                           onChange={handleChangePassword}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">Номер телефона</label>
                    <input type="number" className="form-control"
                           name="number" placeholder="+7 900 800 55 25"
                           id="exampleInputNumber" min="10"
                           onChange={handleChangePhoneNumber}/>
                </div>
                <input type="submit"
                       value="Регистрация" className="btn btn-success"/>
            </form>
        </div>
    )

}

export default RegisterForm