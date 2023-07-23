
function Skill(props) {
    return(
        <p className="s" style={{backgroundColor: props.color}}>{props.skill} {props.emoji}</p>
    )
}


export default Skill;