import React from 'react';

import './styles.css';

function DevItem(props) {
    const { dev } = props;

    return (
        <li className="dev-item">
        <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
            <strong>{dev.github_username}</strong>
            <span>{dev.techs.join(', ')}</span>
        </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
    </li>
    )
}

export default DevItem;