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
      subject: { title: 'WEB', sub: 'World wide web!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText ...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascipt', desc: 'JavaScript is for interactive' }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="cheon" desc="react prac"></Content>
      </div>

    );
  }
}

export default App;
