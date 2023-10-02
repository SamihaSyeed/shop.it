import React from 'react'

const Tag = (props) => {
  
  return (
    <div style={styles}>
      {props.tagName}  
    </div>
  )
}

const styles={
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "10px",
  color: "rgba(255, 255, 255, 0.7)",
  width:"max-content",
  padding:"5px 15px",
  fontSize: "13px",
  marginRight: "2px"
}
export default Tag