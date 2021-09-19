import React, { Component } from 'react'

// 하나의 최상위 태그만 써야된다.
// how to make props
class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="/create" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('create')
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('update')
                }.bind(this)}>update</a></li>
                <li><input onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete')
                }.bind(this)} type="button" value="delete"></input></li>
            </ul>
        );
    }

}

export default Control;