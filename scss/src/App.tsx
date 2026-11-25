import { Crosshair, FlaskConical, Hammer, HandFist, Skull, Sword, Swords, Zap } from 'lucide-react'
import CharacterSheet from './CharacterSheet'
import gimli from './assets/Gimli.jpg'
import elf from './assets/elf.webp'
import './styles/App.scss'
import './styles/base/theme.scss'
import './styles/components/CharacterSheet.scss'

function App() {
  return (
    <div className="App">
      <CharacterSheet
        image={gimli}
        firstName="Gimli"
        lastName="Fils de Gloin"
        characterClass="Nain"
        level={1}
        description="Gimli est un nain robuste et courageux, connu pour sa loyauté envers ses compagnons et sa détermination à protéger les siens. Il est un guerrier habile, maniant la hache avec une précision redoutable. Sa stature imposante et sa barbe fournie en font un personnage emblématique de la race naine."
        race="Nain"
        alignment="Neutral"
        alignmentDetail="Neutral Bon"
        hp={100}
        maxHp={100}
        ap={100}
        maxAp={100}
        skills={[
          { name: 'Coup du Marteau', description: 'Un coup puissant avec le marteau', icon: Hammer, variant: 'blue' },
          { name: 'Coup de Boule', description: 'Un coup avec la tête', icon: Skull, variant: 'gold' },
          { name: 'Coup de Grâce', description: 'Un coup des fesses', icon: Zap, variant: 'green' },
          { name: 'Coup de Ventre', description: 'Un coup au ventre', icon: HandFist, variant: 'purple' },
        ]}
        equipment={[
          { name: 'Marteau', class: 'rarity-common' },
          { name: 'Casque tordu', class: 'rarity-uncommon' },
          { name: 'Ceinture en cuir', class: 'rarity-rare' },
          { name: 'Bottes en fer', class: 'rarity-epic' },
        ]}
        stats={[
          { name: 'Force', value: 18 },
          { name: 'Dextérité', value: 2 },
          { name: 'Intelligence', value: 3 },
          { name: 'Charisme', value: 15 },
        ]}
      />
      <CharacterSheet
        image={elf}
        firstName="Jacques"
        lastName="Ouil"
        characterClass="Archer"
        level={5}
        description="Ouil Jacques est un elfe agile et précis, spécialisé dans l'art de l'archerie. Il est connu pour sa capacité à se déplacer silencieusement à travers les forêts et à atteindre ses cibles avec une précision exceptionnelle. Sa connexion avec la nature et son sens aigu de l'observation font de lui un éclaireur redoutable et un allié précieux dans toute aventure."
        race="Elf"
        alignment="Loyal Neutre"
        alignmentDetail="Royaume Elfique"
        hp={100}
        maxHp={100}
        ap={100}
        maxAp={100}
        skills={[
          { name: 'Tir concentré', description: 'Se concentre et effectue un tir presque inratable (+6 pour toucher, +3 au jet de dégat)', icon: Crosshair, variant: 'blue' },
          { name: 'Dague Elfique', description: 'Sort sa dague forgé par un maitre elfe et tranche son enemi (corp à corp, +2 au dégat)', icon: Sword, variant: 'gold' },
          { name: 'Triple flèche', description: 'Tir 3 flèches (-2 pour toucher, peut toucher jusque 3 enemis)', icon: Swords, variant: 'green' },
          { name: 'Flèche de poison', description: 'Tir une flèche dont sa pointe a été trempé dans du poison (si ennemi blessé, ajoute l\'effet de poison)', icon: FlaskConical, variant: 'purple' },
        ]}
        equipment={[
          { name: 'Arc long', class: 'rarity-rare' },
          { name: 'Dague', class: 'rarity-legendary' },
          { name: 'Armure de cuir', class: 'rarity-uncommon' },
          { name: 'Quarquois', class: 'rarity-epic' },
        ]}
        stats={[
          { name: 'Force', value: 9 },
          { name: 'Dextérité', value: 16 },
          { name: 'Intelligence', value: 14 },
          { name: 'Charisme', value: 10 },
        ]}
      />
    </div>
  )
}

export default App
