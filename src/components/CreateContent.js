import React, { Component } from 'react'

class CreateContent extends Component {
    render() {

        return (
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={function (e) {
                        // 다음페이지로 안넘어가게
                        e.preventDefault();
                        alert('Submit!!!');
                    }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;