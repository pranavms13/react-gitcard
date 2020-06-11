import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export class GitUserCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userdetails: "",
      userimg: ""
    }
    this.username = this.props.username;
    this.follow = this.follow.bind(this);
  }
  componentWillMount(){
    fetch("https://api.github.com/users/"+this.props.username)
        .then(res => res.json())
        .then((result) => {
            fetch(result.avatar_url)
                .then(res => res.blob())
                .then((pic) => {
                    this.setState({userdetails: result ,userimg : window.URL.createObjectURL(pic)})
                })
        });
  }
  follow(){
      window.open(this.state.userdetails.html_url,'_blank')
  }
  render(){
    return(
        <div style={{width:'460px', height:'150px', textAlign: 'center', fontSize:'13px', border: '1px solid',boxShadow:'3px 3px 10px 3px #888888'}}>
          <table style={{width:'100%'}}>
                <tr>
                    <td rowSpan={3}><img src={this.state.userimg} alt="Avatar" width={145} height={145} style={{marginLeft:'-15px'}}/></td>
                      <td>
                          <span>
                              <FontAwesomeIcon icon={faGithub} size="2x" />
                              <a href={this.state.userdetails.html_url} style={{color: '#000000',marginLeft:'10px'}}>
                                  <span style={{fontSize:'18px'}}>{this.state.userdetails.name}{' '}<small style={{fontSize:'10px'}}>({this.state.userdetails.login})</small></span>
                              </a>
                          </span>
                      </td>
                </tr>
                <tr>
                  <td><button
                  onClick={this.follow} className="btnFollow"
                  style={{
                    borderRadius:'10px', width:'96%',marginLeft:'2%',marginRight:'2%',
                    backgroundColor: '#555555',
                    border: 'none',
                    color: 'white',
                    padding: '8px 25px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}>
                  Follow</button></td>
                </tr>
                <tr>
                  <td>
                      <span style={{paddingLeft:'8px'}}><b>Repos : </b>{this.state.userdetails.public_repos}</span>
                      <span style={{paddingLeft:'6px'}}><b>Followers : </b>{this.state.userdetails.followers}</span>
                      <span style={{paddingLeft:'6px'}}><b>Following : </b>{this.state.userdetails.following}</span>
                  </td>
                </tr>
          </table>
      </div>
    );
  }
}
