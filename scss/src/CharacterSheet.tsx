import './styles/App.scss'
import ProgressBar from './ProgressBar'

type Skill = {
    name: string
    description: string
    icon?: string
}

type Equipment = {
    name: string
}

type Stat = {
    name: string
    value: number
}

type CharacterSheetProps = {
    image?: string
    firstName: string
    lastName: string
    characterClass: string
    level: number
    race: string
    alignment: string
    alignmentDetail: string
    hp: number
    maxHp: number
    ap: number
    maxAp: number
    skills: Skill[]
    equipment: Equipment[]
    stats: Stat[]
}

function CharacterSheet({
    image = '',
    firstName,
    lastName,
    characterClass,
    level,
    race,
    alignment,
    alignmentDetail,
    hp,
    maxHp,
    ap,
    maxAp,
    skills,
    equipment,
    stats,
}: CharacterSheetProps) {
    return (
        <div>
            <div className="header">
                <img src={image} alt={`${firstName} ${lastName}`}/>
                <div>
                    <p>{lastName} {firstName}</p>
                    <p>{characterClass}</p>
                    <div>
                        <p className="category">Niveau {level}</p>
                        <p className="category">{race}</p>
                    </div>
                </div>
            </div>
            <div>
                <i></i>
                <div>
                    <p>{alignment}</p>
                    <p>{alignmentDetail}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Points de vie</p>
                    <ProgressBar value={hp} max={maxHp} variant="green" />
                </div>
                <div>
                    <p>Points d'actions</p>
                    <ProgressBar value={ap} max={maxAp} variant="blue" />
                </div>
            </div>
            <div></div>
            <div>
                <p>Description</p>
            </div>
            <div></div>
            <div>
                <div>
                    <p>Compétences</p>
                    {skills.map((skill) => (
                        <div key={skill.name}>
                            <i>{skill.icon}</i>
                            <div>
                                <p>{skill.name}</p>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <p>Equipement</p>
                    {equipment.map((item) => (
                        <div key={item.name}>
                            <i></i>
                            <div>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
            <div>
                <p>Statistiques</p>
                <div>
                    {stats.map((stat) => (
                        <div key={stat.name}>
                            <p>{stat.name}</p>
                            <ProgressBar value={stat.value} max={20} variant="red" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet
