import React from 'react';

class StayTuned extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center text-white align-self-center h-screen">
                <div className="flex flex-col items-center gap-6 max-w-md text-center">

                    {/* Status indicator */}
                    <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Under Construction
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-light tracking-tight text-white">
                        Making some changes
                    </h2>

                    {/* Body */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        I'm currently rebuilding parts of this site. Check back soon — it won't be long.
                    </p>

                    {/* Divider */}
                    <div className="w-8 border-t border-gray-700"></div>

                    {/* Social / contact nudge */}
                    <p className="text-gray-500 text-xs">
                        In the meantime, find me on{' '}
                        <a
                            href="https://link.welford.me/github"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors duration-200 underline underline-offset-2"
                        >
                            GitHub
                        </a>
                        {' '}or{' '}
                        <a
                            href="https://link.welford.me/linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors duration-200 underline underline-offset-2"
                        >
                            LinkedIn
                        </a>
                        .
                    </p>
                </div>
            </div>
        );
    }
}

export default StayTuned;   