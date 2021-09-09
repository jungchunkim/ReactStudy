import React, { Component } from 'react'
import './App.css';



class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

// 하나의 최상위 태그만 써야된다.
// how to make props
class Subject extends Component {
  render() {
    return (
      <header>
        <h1> {this.props.title} </h1>
        {this.props.sub}
      </header>
    );
  }

}

// 컴포넌트 만드는 코드
// props를 사용하여 원하는대로 바꿀 수 있음
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="cheon" desc="react prac"></Content>
      </div>

    );
  }
}

export default App;
