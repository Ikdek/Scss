import './styles/App.scss'
import './styles/components/CharacterSheet.scss'
import type { LucideIcon } from 'lucide-react'
import ProgressBar from './ProgressBar'

type SkillVariant = 'blue' | 'gold' | 'green' | 'purple'

type Skill = {
    name: string
    description: string
    icon: LucideIcon
    variant?: SkillVariant
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
    description: string
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
    description,
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
        <div className="cs-container">
            <div className="header">
                <img className="character-image" src={image} alt={`${firstName} ${lastName}`}/>
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
            <div className="row">
                <div className="column">
                    <p>Points de vie</p>
                    <ProgressBar value={hp} max={maxHp} variant="green" />
                </div>
                <div className="column">
                    <p>Points d'actions</p>
                    <ProgressBar value={ap} max={maxAp} variant="blue" />
                </div>
            </div>
            <div className="divider"></div>
            <p className="cs-description">{description}</p>
            <div className="divider"></div>
            <div className="cs-lists">
                <div className="cs-list">
                    <p className="cs-list__title">Compétences</p>
                    {skills.map(({ name, description, icon: Icon, variant = 'blue' }) => (
                        <div key={name} className={`skill skill--${variant}`}>
                            <span className="skill__icon">
                                <Icon size={18} />
                            </span>
                            <div>
                                <p className="skill__name">{name}</p>
                                <p className="skill__description">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cs-list">
                    <p className="cs-list__title">Équipement</p>
                    {equipment.map((item) => (
                        <div key={item.name} className="equipment">
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <p>Statistiques</p>
                <div className="row">
                    {stats.map((stat) => (
                        <div key={stat.name} className="column">
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
