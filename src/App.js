import React, { Component } from 'react'
import './App.css';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"




// 컴포넌트 만드는 코드
// props를 사용하여 원하는대로 바꿀 수 있음
class App extends Component {
  // 제일 먼저 시작해서 초기화 담당
  constructor(props) {
    super(props);
    this.state = {
      // read mode , welcome mode
      mode: "read",
      subject: { title: 'WEB', sub: 'World wide web!' },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText ...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascipt', desc: 'JavaScript is for interactive' }
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }


    return (
      <div className="App">
        {/*<Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>*/}
        <header>
          <h1><a href="/" onClick={function (e) {
            console.log(e);
            // 기본적인 동작방법을 못하게 해야할 때 사용하는 함수
            e.preventDefault();
            //this.state.mode = 'welcome'; (react 모르게 바꾸는 방식 -> 값이 바뀐지 몰라서 rendering 안함)
            // state를 변경할 때 setState를 사용해서 변경해줘야한다.
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>

    );
  }
}

export default App;
