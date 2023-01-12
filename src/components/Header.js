import Button from "./Button"

const Header = (props) => {
    const onClick = () => {
        console.log("clickity click")
    }
  return (
    <header className= "header">
        <h1>{props.title}</h1>
        <Button color = "green" text = "Hello 1" onClick= {onClick}/>
        <Button color = "red" text = "Hello 2" onClick= {onClick}/>
        <Button color = "blue" text = "Hello 3" onClick= {onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Taskin Trackerino",
}

// CSS in JS 

export default Header
