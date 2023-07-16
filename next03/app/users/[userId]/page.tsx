type Params = {
    params:{
        userId:string
    }
}

import React from 'react'

export default function UserPage({params:{userId}}:Params) {
  return (
    <div>UserPage</div>
  )
}
