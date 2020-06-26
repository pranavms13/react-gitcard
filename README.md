# react-gitcard

> A Simple GitCard

[![NPM](https://img.shields.io/npm/v/@pranavms13/react-gitcard.svg)](https://www.npmjs.com/package/@pranavms13/react-gitcard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Travis CI](https://api.travis-ci.com/pranavms13/react-gitcard.svg?branch=master)](https://travis-ci.com/github/pranavms13/react-gitcard)



## Install

```bash
npm install --save @pranavms13/react-gitcard
```
## Usage

### GitUserCard Usage
```jsx

import React, { Component } from  'react'
import { GitUserCard } from  '@pranavms13/react-gitcard'

class  Example  extends  Component {
	render() {
		return <GitUserCard username="pranavms13" />
	}
}

```

![GitUserCard](https://github.com/pranavms13/react-gitcard/blob/master/example/samples/GitUserCard.JPG?raw=true)

![GitUserCard](https://github.com/pranavms13/react-gitcard/blob/master/example/samples/GitUserCardDark.JPG?raw=true)



### GitRepoCard Usage



```jsx

import React, { Component } from  'react'
import { GitRepoCard } from  '@pranavms13/react-gitcard'

class  Example  extends  Component {
	render() {
		return <GitRepoCard username="pranavms13" repo="whatsapp-node-api"/>
	}
}
```

![GitRepoCard](https://github.com/pranavms13/react-gitcard/blob/master/example/samples/GitRepoCard.JPG?raw=true)

![GitRepoCardDark](https://github.com/pranavms13/react-gitcard/blob/master/example/samples/GitRepoCardDark.JPG?raw=true)

|   Props  |          value         |                            Description                           |
|---------:|:----------------------:|:----------------------------------------------------------------:|
| username |  ```Github Username``` |                     Enter your Github username                   |
|   repo   |  ```GitHub reponame``` | Enter your Github Repo Name <small>(only on GitRepoCard)</small> |
|  variant | `` "dark" / "light" `` |           Light or dark Variant - <b>Default : Light</b>         |


## License

MIT © [pranavms13](https://github.com/pranavms13)
