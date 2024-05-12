import React, { useEffect, useState } from 'react';
import "./css/main.css"
import { Outlet } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loginbuttons1: "block",
      loginbuttons2: "none",
      username: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  render() {
    return(
      <div>
        <header>
          <button id="registerButton" onClick={this.tologin} style={{display: this.state.loginbuttons1}}>Реєстрація</button>
          <button id="loginButton" onClick={this.tologin} style={{display: this.state.loginbuttons1}}>Вхід</button>
          <button id="adminButton" style={{display: this.state.loginbuttons2}} onClick={this.tologin}>Створення вікторин</button>
          <button id="exitButton" onClick={this.delog} style={{display: this.state.loginbuttons2}}>Вийти з акаунту</button>
          <div id="userFrame" className="user-frame" style={{display: this.state.loginbuttons2}}>{this.state.username}</div>
          <h1>Ласкаво просимо на "Вікториноманію"!</h1>
        </header>
        <section>
          <h2>🧠 Різноманіття тем:</h2>
          <p>Ви зможете вибрати вікторини на різноманітні теми - від науки та історії до поп-культури та мовознавства...</p>
        </section>
        <section>
          <h2>🏆 Змагайтеся та вчіться:</h2>
          <p>Беріть участь у наших щотижневих турнірах, де вас чекають захоплюючі завдання та можливість виявити свою ерудицію...</p>
        </section>
        <section>
          <h2>🤝 Спільнота ентузіастів:</h2>
          <p>Приєднуйтеся до нашої активної спільноти ентузіастів, обговорюйте цікаві факти, діліться своїми знаннями та знаходьте нових друзів...</p>
        </section>
        <section>
          <h2>🔍 Персоналізований досвід:</h2>
          <p>Ми пропонуємо персоналізований підхід до вивчення. Ваші результати визначають ваш рівень і допомагають нам підготувати для вас найцікавіші вікторини...</p>
        </section>
        <section>
          <h2>🚀 Почніть зараз:</h2>
          <p>Не гайте часу, почніть свою вікторинну подорож прямо зараз! Реєстрація безкоштовна та проста...</p>
        </section>
        <footer>
          <button id="goToSecondPageButton" onClick={this.tologin}>Почати</button>
          <p>Приєднуйтесь до "Вікториноманії" - де розум зустрічається з веселим навчанням!</p>
        </footer>
        <Outlet />
      </div>
    )      
  }

  componentDidMount(){
    fetch('/log')
      .then(response => {
          if (response.status === 200) {
            return("1")

              this.setState({loginbuttons1: "none", loginbuttons2: "block"})

              response.json().then(data => {
                  this.setState({username: 'З поверненям, ' + data.name + '!'})
              });
          } else {

          }
      })
      .catch(error => console.error('Помилка при відправці запиту:', error));
    console.log("22")
  }

  delog(){
    fetch('/delog')
  }

  tologin(){
    console.log("11")
    this.props.history.push('/login');
  }
}

export default Main