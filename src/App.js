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
      selected_content_id: 2,
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
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }

    }


    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          //이벤트 전달받은거 실행
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        >
        </Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>

    );
  }
}

export default App;
