import React, { Component } from 'react';

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state ={
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    this.setState({[e.target.name]:e.target.value});

  }
    render() {
      return(
        <article>
            <h2>수정하기</h2>
              <form action="/update_process" mothod="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    this.state.id,
                    this.state.title,
                    this.state.desc
                  );
                }.bind(this)}
              >
                <input type="hidden" name="id" value={this.state.id}></input> 
                <p><input 
                     type="text" 
                     name="title" 
                     placeholder='타이틀을 입력하세요'
                     value={this.state.title}
                     onChange={this.inputFormHandler}
                    ></input>
                </p>
                <p><textarea 
                     name="desc" 
                     placeholder='내용을 입력하세요'
                     value={this.state.desc}
                     onChange={this.inputFormHandler}
                    ></textarea>
                </p>
                <p><input type="submit" value="submit"></input></p>
              </form>
        </article>
      );
    }
  }

  export default UpdateContent;