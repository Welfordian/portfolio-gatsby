import React from "react";
import TextScramble from "../TextScramble";

export default class Tagline extends React.Component {
    componentDidMount() {
        const phrases = [
            'PHP',
            'Laravel',
            'Javascript',
            'Vue',
            'React',
            'Debian',
            'Ubuntu',
            'Docker'
        ];

        const el = document.querySelector('.skills-ticker')
        const fx = new TextScramble(el)
        let counter = 0
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 800)
            })
            counter = (counter + 1) % phrases.length
        }

        next();
    }

    render () {
        return (
            <p className="text-center mt-6 skills-ticker text-3xl"><span className="dud">^</span>HP</p>
        );
    }
}