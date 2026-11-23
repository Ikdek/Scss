import CharacterSheet from './CharacterSheet'
import gimli from './assets/Gimli.jpg'
import './styles/App.scss'
import './styles/base/theme.scss'

function App() {
  return (
    <div className="App">
      <CharacterSheet
        image={gimli}
        firstName="Gimli"
        lastName="Fils de Gloin"
        characterClass="Nain"
        level={1}
        race="Nain"
        alignment="Neutral"
        alignmentDetail="Neutral Bon"
        hp={100}
        maxHp={100}
        ap={100}
        maxAp={100}
        skills={[
          { name: 'Coup du Marteau', description: 'Un coup puissant avec le marteau', icon: 'icon1' },
          { name: 'Coup de Boule', description: 'Un coup avec la tête', icon: 'icon2' },
          { name: 'Coup de Grâce', description: 'Un coup des fesses', icon: 'icon3' },
          { name: 'Coup de Ventre', description: 'Un coup au ventre', icon: 'icon4' },  
        ]}
        equipment={[
          { name: 'Marteau'},
          { name: 'Casque tordu'},
          { name: 'Ceinture en cuir'},
          { name: 'Bottes en fer'},
        ]}
        stats={[
          { name: 'Force', value: 18 },
          { name: 'Dextérité', value: 2 },
          { name: 'Intelligence', value: 3 },
          { name: 'Charisme', value: 15 },
        ]}
      />
      <CharacterSheet
        firstName="Ouil"
        lastName="Casc"
        characterClass="Archer"
        level={5}
        race="Elf"
        alignment="Loyal Neutre"
        alignmentDetail="Royaume Elfique"
        hp={100}
        maxHp={100}
        ap={100}
        maxAp={100}
        skills={[
          { name: 'Tir concentré', description: 'Se concentre et effectue un tir presque inratable (+6 pour toucher, +3 au jet de dégat)', icon: "" },
          { name: 'Dague Elfique', description: 'Sort sa dague forgé par un maitre elfe et tranche son enemi (corp à corp, +2 au dégat)', icon: "" },
          { name: 'Triple flèche', description: 'Tir 3 flèches (-2 pour toucher, peut toucher jusque 3 enemis)', icon: "" },
          { name: 'Flèche de poison', description: 'Tir une flèche dont sa pointe a été trempé dans du poison (si ennemi blessé, ajoute l\'effet de poison)', icon: "" },
        ]}
        equipment={[
          { name: 'Arc long' },
          { name: 'Dague'},
          { name: 'Armure de cuir' },
          { name: 'Quarquois' },
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
