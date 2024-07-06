import React from 'react'

const basicsBar = ({title= 'Basic Title Props', subtitle='Subtite properties'}) => {
  return (
  <>
    <div>This is a basics bar component</div>
    {title}
    <p>{subtitle}</p>
  </>
  )
}

export default basicsBar