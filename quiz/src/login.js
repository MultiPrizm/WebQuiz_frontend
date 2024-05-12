import React from 'react';
import "./css/login.css"

class Login extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <h2>Реєстрація</h2>
                    <label for="name">Ім'я:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="password">Пароль:</label>
                    <input type="password" id="password" name="password" required />

                    <button type="button" onclick={this.login()}>Вхід</button>
                    <button type="button" onclick={this.register()}>Зареєструватися</button>
                </form>
            </div>
        )
    }

    login(){

    }

    register(){

    }
}

export default Login