import React, { Component } from 'react'
import './App.css';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import Control from "./components/Control"
import Subject from "./components/Subject"




// 컴포넌트 만드는 코드
// props를 사용하여 원하는대로 바꿀 수 있음
class App extends Component {
  // 제일 먼저 시작해서 초기화 담당
  constructor(props) {
    super(props);
    this.max_content_id = 3;
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
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === 'read') {
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode == 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        //this.state.contents.push(
        //  { id: this.max_content_id, title: _title, desc: _desc }
        //);

        var _contents = this.state.contents.concat(
          { id: this.max_content_id, title: _title, desc: _desc }
        )
        this.setState({
          contents: _contents
        });

        console.log(_title, _desc);
      }.bind(this)}></CreateContent>

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
          //  여기있는 함수가 TOC.js에서 실행되는 것!! (넘기는거)
          onChangePage={function (id) {
            this.setState({
              // 클릭했을 때 상태를 변경한다는 뜻
              // 첫번째 -> 1 , 두 번째 -> 2 , 세 번째 -> 3
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
        ></TOC>
        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>

    );
  }
}

export default App;
