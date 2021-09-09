import React, { Component } from 'react'

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

export default Subject;