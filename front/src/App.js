import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='open'>5555555</div>
        <header className="App-header">
        <div className='open'>5555555</div>
          <h1 className="App-title">Мой топ фото</h1>
          <p className="App-intro">
             Здесь будут мои самые залайканые фото
          </p>
          <p className="App-intro active">
          Здесь будут мои самые залайканые фото
        </p>
        </header>
        <p className="App-intro">
          Здесь будут мои самые залайканые фото
        </p>
        <p>Меня зовут: {this.props.user}</p>{' '}
        <div className='open'>5555555</div>
        {/* добавлен вывод из props */}
      </div>
    );
  }
}

// приклеиваем данные из store
const mapStateToProps = (store) => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    user: store.user,
  };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(App);