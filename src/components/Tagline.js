import React from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default class Tagline extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phrases: [
                'Laravel',
                'React',
                'Vue',
                'Linux',
                'Cloudflare',
            ],
            currentPhraseIndex: 0,
            displayText: '',
        }

        this.scrambleInterval = null;
        this.pauseTimeout = null;
    }

    componentDidMount() {
        this.startScramble();
    }

    componentWillUnmount() {
        clearInterval(this.scrambleInterval);
        clearTimeout(this.pauseTimeout);
    }

    randomChars(length) {
        let output = '';

        for (let i = 0; i < length; i += 1) {
            output += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }

        return output;
    }

    startScramble() {
        const phrase = this.state.phrases[this.state.currentPhraseIndex];
        const maxFrames = Math.max(phrase.length * 2, 1);
        let frame = 0;

        clearInterval(this.scrambleInterval);
        clearTimeout(this.pauseTimeout);

        this.scrambleInterval = setInterval(() => {
            frame += 1;

            const revealedChars = Math.min(
                phrase.length,
                Math.floor((frame / maxFrames) * phrase.length)
            );
            const stable = phrase.slice(0, revealedChars);
            const scrambledTail = this.randomChars(phrase.length - revealedChars);

            this.setState({ displayText: stable + scrambledTail });

            if (frame >= maxFrames) {
                clearInterval(this.scrambleInterval);
                this.setState({ displayText: phrase });

                this.pauseTimeout = setTimeout(() => {
                    this.setState((prevState) => ({
                        currentPhraseIndex: (prevState.currentPhraseIndex + 1) % prevState.phrases.length,
                    }), () => this.startScramble());
                }, 1500);
            }
        }, 50);
    }
    
    render () {
        return (
            <div className="text-center mt-6 skills-ticker text-2xl dark:text-gray-300">
                {this.state.displayText}
            </div>
            
        );
    }
}