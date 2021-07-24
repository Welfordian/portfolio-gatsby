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
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl">Joshua Welford</h1>
                <p className="mt-4">Lead Technical Engineer at EMR4DW</p>
                <div className="flex justify-center font-bold mt-8">
                    <p className="skills-ticker text-3xl"><span className="dud">^</span>HP</p>
                </div>
            </div>
        );
    }
}