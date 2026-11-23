import './styles/App.scss'


function CharacterSheet() {
    return (
        <div>
            <div className={header}>
                <img src="" alt=""/>
                <div>
                    <p>Nom Prénom</p>
                    <p>Classe</p>
                    <div>
                        <p>Niveau</p>
                        <p>Race</p>
                    </div>
                </div>
            </div>
            <div>
                <i></i>
                <div>
                    <p>Allignement</p>
                    <p>Allignement ++</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Points de vie</p>
                    <div></div>
                    <p>100/100</p>
                </div>
                <div>
                    <p>Points d'actions</p>
                    <div></div>
                    <p>100/100</p>
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
                    <div>
                        <i></i>
                        <div>
                            <p>Comp 1</p>
                            <p>desc + dés</p>
                        </div>
                    </div>
                    <div>
                        <i></i>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <i></i>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <i></i>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Equipement</p>
                    <div>
                        <i></i>
                        <div>
                            <p>équipement 1</p>
                            <p>desc + bonus</p>
                        </div>
                    </div>
                    <div>
                        <i></i>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <i></i>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <i></i>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div>
                <p>Statistiques</p>
                <div>
                    <div>
                        <p>Nom stat</p>
                        <div></div>
                        <p>niveau de stat</p>
                    </div>
                    <div>
                        <p></p>
                        <div></div>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        <div></div>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        <div></div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet
