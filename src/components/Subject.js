import React, { Component } from 'react'

// 하나의 최상위 태그만 써야된다.
// how to make props
class Subject extends Component {
    render() {
        return (
            <header>
                <h1><a href="/" onClick={function (e) {
                    e.preventDefault();
                    // 이벤트 전달
                    this.props.onChangePage();
                }.bind(this)}> {this.props.title}</a> </h1>
                {this.props.sub}
            </header>
        );
    }

}

export default Subject;