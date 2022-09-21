const Notification = ({ message }) => {
  if (message === null) {
    return null
  
  } else if (message.includes('removed')) {
    return (
      <div className="failure">
        {message}
      </div>
    )
  
  } else {
  return (
    <div className="success">
      {message}
    </div>
  )
}}

export default Notification;