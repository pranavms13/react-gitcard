/* eslint-disable no-undef */
import React from 'react'

class GitUserCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userdetails: '',
      userimg: ''
    }
    this.username = this.props.username
    this.follow = this.follow.bind(this)
  }

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.username}`)
      .then((res) => res.json())
      .then((result) => {
        // eslint-disable-next-line no-undef
        fetch(result.avatar_url)
          .then((res) => res.blob())
          .then((pic) => {
            this.setState({
              userdetails: result,
              userimg: window.URL.createObjectURL(pic)
            })
          })
      })
  }

  follow() {
    window.open(this.state.userdetails.html_url, '_blank')
  }

  render() {
    return (
      <div
        style={{
          width: '460px',
          height: '150px',
          textAlign: 'center',
          fontSize: '13px',
          border: '1px solid',
          boxShadow: '3px 3px 10px 3px #888888'
        }}
      >
        <table style={{ width: '100%' }}>
          <tr>
            <td rowSpan={3}>
              <img
                src={this.state.userimg}
                alt='Avatar'
                width={145}
                height={145}
                style={{ marginLeft: '-15px' }}
              />
            </td>
            <td>
              <span>
                <svg width='30px' height='30px' viewBox='0 0 496 512'>
                  <path
                    fill='#000000'
                    d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                  />
                </svg>
                <a
                  href={this.state.userdetails.html_url}
                  style={{ color: '#000000', marginLeft: '10px' }}
                >
                  <span style={{ fontSize: '18px' }}>
                    {this.state.userdetails.name}{' '}
                    <small style={{ fontSize: '10px' }}>
                      ({this.state.userdetails.login})
                    </small>
                  </span>
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={this.follow}
                style={{
                  borderRadius: '10px',
                  width: '96%',
                  marginLeft: '2%',
                  marginRight: '2%',
                  backgroundColor: '#555555',
                  border: 'none',
                  color: 'white',
                  padding: '8px 25px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Follow
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ paddingLeft: '8px' }}>
                <b>Repos : </b>
                {this.state.userdetails.public_repos}
              </span>
              <span style={{ paddingLeft: '6px' }}>
                <b>Followers : </b>
                {this.state.userdetails.followers}
              </span>
              <span style={{ paddingLeft: '6px' }}>
                <b>Following : </b>
                {this.state.userdetails.following}
              </span>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

class GitRepoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repodetails: '',
      ownerdetails: ''
    }
    this.fork = this.fork.bind(this)
    this.star = this.star.bind(this)
  }

  componentWillMount() {
    // eslint-disable-next-line prettier/prettier
    fetch(`https://api.github.com/repos/${this.props.username}/${this.props.repo}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          repodetails: result,
          ownerdetails: result.owner
        })
      })
  }

  fork() {
    // eslint-disable-next-line prettier/prettier
    window.open(`https://github.com/${this.state.ownerdetails.login}/${this.state.repodetails.name}/fork`, '_blank')
  }

  star() {
    // eslint-disable-next-line prettier/prettier
    window.open(`https://github.com/${this.state.ownerdetails.login}/${this.state.repodetails.name}/stargazers`, '_blank')
  }

  render() {
    return (
      <div
        style={{
          width: '320px',
          height: '100px',
          textAlign: 'center',
          fontSize: '13px',
          border: '1px solid',
          boxShadow: '3px 3px 10px 3px #888888'
        }}
      >
        <table
          style={{ width: '100%', paddingLeft: '5px', paddingRight: '5px' }}
        >
          <tr>
            <td colSpan='3'>
              <span>
                <svg width='30px' height='30px' viewBox='0 0 496 512'>
                  <path
                    fill='#000000'
                    d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                  />
                </svg>
                <a
                  href={this.state.repodetails.html_url}
                  style={{ color: '#000000', marginLeft: '10px' }}
                >
                  <span style={{ fontSize: '18px' }}>
                    {this.state.repodetails.name}{' '}
                    <small style={{ fontSize: '10px' }}>
                      ({this.state.ownerdetails.login})
                    </small>
                  </span>
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span
                style={{
                  paddingLeft: '8px',
                  paddingTop: '5px',
                  paddingBottom: '5px'
                }}
              >
                <b>Stargazers : </b>
                {this.state.repodetails.stargazers_count}
              </span>
            </td>
            <td>
              <span
                style={{
                  paddingLeft: '8px',
                  paddingTop: '5px',
                  paddingBottom: '5px'
                }}
              >
                <b>Watchers : </b>
                {this.state.repodetails.subscribers_count}
              </span>
            </td>
            <td>
              <span
                style={{
                  paddingLeft: '8px',
                  paddingTop: '5px',
                  paddingBottom: '5px'
                }}
              >
                <b>Forks : </b>
                {this.state.repodetails.forks}
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan='1'>
              <button
                onClick={this.star}
                style={{
                  borderRadius: '10px',
                  width: '96%',
                  marginLeft: '2%',
                  marginRight: '2%',
                  backgroundColor: '#555555',
                  border: 'none',
                  color: 'white',
                  padding: '8px 25px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Star
              </button>
            </td>
            <td> </td>
            <td colSpan='1'>
              <button
                onClick={this.fork}
                style={{
                  borderRadius: '10px',
                  width: '96%',
                  marginLeft: '2%',
                  marginRight: '2%',
                  backgroundColor: '#555555',
                  border: 'none',
                  color: 'white',
                  padding: '8px 25px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Fork
              </button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export { GitUserCard, GitRepoCard }
