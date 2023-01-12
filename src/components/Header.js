import Button from "./Button"

const Header = ({title, onAdd}) => {
    const onClick = () => {
        console.log("clickity click")
    }
  return (
    <header className= "header">
        <h1>{title}</h1>
        <Button color = "green" text = "Add" onClick= {onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Taskin Trackerino",
}

// CSS in JS 

export default Header
