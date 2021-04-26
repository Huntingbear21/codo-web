import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


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
                    <a href="/" className="main-icon"><img className="main-img" src="assets/일러스트7.jpg" /></a>
                    <a href="https://huntingbear21.ga/" className="text-link">My Website</a>
                    </div>
                    <FontAwesomeIcon id="togglebar-control" className="icon" icon={faBars }/>
            </nav>
        )
    }
}

export default NavBar;
