import CharacterSheet from './CharacterSheet'
import './styles/App.scss'
import './styles/base/theme.scss'

function App() {
  return (
    <div className="App">
      <CharacterSheet
        firstName="Prénom"
        lastName="Nom"
        characterClass="Classe"
        level={1}
        race="Race"
        alignment="Alignement"
        alignmentDetail="Alignement ++"
        hp={100}
        maxHp={100}
        ap={100}
        maxAp={100}
        skills={[
          { name: 'Comp 1', description: 'desc + dés' },
          { name: 'Comp 2', description: 'desc + dés' },
          { name: 'Comp 3', description: 'desc + dés' },
          { name: 'Comp 4', description: 'desc + dés' },
        ]}
        equipment={[
          { name: 'Équipement 1', description: 'desc + bonus' },
          { name: 'Équipement 2', description: 'desc + bonus' },
          { name: 'Équipement 3', description: 'desc + bonus' },
          { name: 'Équipement 4', description: 'desc + bonus' },
        ]}
        stats={[
          { name: 'Force', value: 10 },
          { name: 'Dextérité', value: 10 },
          { name: 'Intelligence', value: 10 },
          { name: 'Charisme', value: 10 },
        ]}
      />
    </div>
  )
}

export default App
