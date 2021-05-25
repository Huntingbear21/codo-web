import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    componentDidMount() {
        let togglebar = document.getElementById("togglebar-control");
        togglebar.addEventListener('click', this.toggleItems.bind(this));
    }

    toggleItems(event) {
        const tabs = document.querySelectorAll("nav a");
        tabs.forEach(anchor => {
            anchor.classList.toggle('active');
        })

    }

    render() {
        return (
            <nav className="nav">
                <div>
                    <Link to="/" className="main-icon"><img className="main-img" src="assets/일러스트7.jpg" /></Link>
                    <a href="https://discord.gg/qX7Aah82x5" className="text-link">Support Server</a>
                    <a href="https://discordapp.com/api/oauth2/authorize?client_id=687886541619462293&permissions=522304&scope=bot" className="text-link">Invite</a>
                    </div>
                    <FontAwesomeIcon id="togglebar-control" className="icon" icon={faBars }/>
            </nav>
        )
    }
}

export default NavBar;
