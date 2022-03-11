import { CircularProgress } from '@material-ui/core'
import React from 'react'

export const LoadingComponent = () => {
  return (
    <div className='loading'>
        <CircularProgress />
    </div>
  )
}
