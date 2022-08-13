import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/pro-solid-svg-icons";

class Intro extends React.Component {
    render() {
        return (
            <div className={`flex flex-col grow gap-12 justify-between items-center mx-auto`}>
                <div className={`flex flex-col gap-12 text-center w-full md:w-2/3`}>
                    <h1 className={`text-2xl md:text-4xl mt-24`}>How many questions would you like to answer?</h1>

                    <div className={`flex flex-wrap justify-between w-full md:w-2/3 self-center md:gap-8`}>
                        <button onClick={() => { this.props.onSelect(10) }} className={`bg-black hover:bg-black/70 text-white px-8 md:px-12 py-3 md:py-5 self-start`}>10</button>
                        <button onClick={() => { this.props.onSelect(20) }} className={`bg-black hover:bg-black/70 text-white px-8 md:px-12 py-3 md:py-5 self-start`}>20</button>
                        <button onClick={() => { this.props.onSelect(30) }} className={`bg-black hover:bg-black/70 text-white px-8 md:px-12 py-3 md:py-5 self-start`}>30</button>
                        <button onClick={() => { this.props.onSelect(40) }} className={`bg-black hover:bg-black/70 text-white px-8 md:px-12 py-3 md:py-5 self-start`}>40</button>
                    </div>
                </div>


                <p className={`text-center w-full md:w-2/3`}>There are a total of 100 questions that will be randomized.
                    Each question is taken directly from the USCIS
                    <a href={`https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf`} target={`_blank`} rel={`noopener`}> website <FontAwesomeIcon icon={faExternalLink} /></a>.
                    The following questions are taken from the 2008 version of the test as only a select number of people
                    will be given the 2020 version.
                </p>
            </div>
        );
    }
}

export default Intro