import React, { Component } from 'react'

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
    }
    InputFormHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        console.log(this.props.data)
        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                    onSubmit={function (e) {
                        // 다음페이지로 안넘어가게
                        e.preventDefault();
                        // e에 있는 것 분석!
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc);
                        alert('Submit!!!');
                    }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.InputFormHandler.bind(this)}
                        ></input>
                    </p>

                    <p>
                        <textarea
                            name="desc"
                            placeholder="description"
                            value={this.state.desc}
                            onChange={this.InputFormHandler.bind(this)}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;