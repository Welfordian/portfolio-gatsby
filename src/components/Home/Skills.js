import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <div>
                <p className="text-4xl mt-24">Skills</p>

                <div className={`flex flex-wrap mt-12`}>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>PHP</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>Laravel</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>JavaScript</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>NodeJS</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>VueJS</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>ReactJS</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>Debian</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>Ubuntu</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>Docker</div>
                    <div className={`bg-black text-white px-6 py-3 m-3 cursor-pointer`}>NGINX</div>
                </div>
            </div>
        );
    }
}

export default Skills