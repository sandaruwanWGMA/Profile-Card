import Skill from "./Skill";

function SkillsSet() {
    return(
        <div>
            <div className="s-1">
                <Skill skill="HTML + CSS" color="green" emoji="😎"/>
                <Skill skill="JavaScript" color="orange" emoji="🫡"/>
                <Skill skill="Python" color="tomato" emoji="✊"/>
            </div>

            <div className="s-2">
                <Skill skill="Java" color="yellowgreen" emoji="👍"/>
                <Skill skill="C++" color="cyan" emoji="💪"/>
            </div>
        </div>
    )
}

export default SkillsSet;