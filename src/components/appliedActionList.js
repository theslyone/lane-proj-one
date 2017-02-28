import React from 'react'

const AppliedAction = ({action, onReset}) => (
  <div className='actionButton'>
    {action}
    <button className='clearButton' onClick={()=> onReset(action)}>x</button>
  </div>
)

const AppliedActionList = ({actions, onReset}) => {
  if(actions.size == 0) {
    return <div>no actions filter</div>
  }
  return (
    <div>
    {
      actions.toArray().map((action, idx) => (
        <AppliedAction action={action} key={idx} onReset={onReset} />
      ))
    }
    </div>
  )
}

export default AppliedActionList
