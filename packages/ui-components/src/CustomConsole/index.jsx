import React from "react"
import styled from "styled-components"

const ConsoleContainer = styled.pre``

const Info = styled.span`
  color: darkgreen;
`

const Error = styled.span`
  color: red;
`

const Warn = styled.span`
  color: orange;
`
const Log = styled.span`
  color: black;
`

const CustomConsole = props => {

  function createLogEntry({ type, message }) {
    const _msg = JSON.stringify(message, null, 2);
    let now = Date.now();
    let rnd = Math.floor(Math.random() * 100);
    const itemKey = new Date(now + rnd).toISOString();
    switch (type) {
      case "log":
        return <Log key={itemKey}>{_msg}</Log>
      case "warn":
        return <Warn key={itemKey}>{_msg}</Warn>
      case "info":
        return <Info key={itemKey}>{_msg}</Info>
      case "error":
        return <Error key={itemKey}>{_msg}</Error>
    }
  }

  const { logItems } = props

  let logEntries = [];

  if (typeof logItems!=='undefined') {
    logEntries = logItems.map(item => createLogEntry(item));
  }
  else{
    logEntries = <React.Fragment/>;
  }

  return (
    <ConsoleContainer>
      { logEntries }
    </ConsoleContainer>
  )
}

export default CustomConsole;
