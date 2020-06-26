import React from 'react'

import { GitUserCard, GitRepoCard } from '@pranavms13/react-gitcard'

const App = () => {
  return (
    <div>
      <GitUserCard username="pranavms13"/>
      <GitRepoCard variant="dark" username="pranavms13" repo="whatsapp-node-api"/>
    </div>
    )
}

export default App
