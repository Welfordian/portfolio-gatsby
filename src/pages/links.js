import * as React from "react"
import CaseStudies from "../components/Home/CaseStudies";
import PersonalProjects from "../components/Home/PersonalProjects";
import Layout from "../components/Layout";
import PersonalProject from "../components/Home/PersonalProject";

const LinksPage = () => (
    <Layout hideSocial>
        <div className="flex justify-center">
            {/* GitHub */}
            <div className="w-full xl:w-1/3 flex flex-col mt-12">
                <a href="https://github.com/welfordian" rel="noopener" target="_blank">
                    <div className={`flex flex-col justify-between border-4 border-black px-8 py-4`}>
                        <div>
                            <p className="font-bold text-2xl flex justify-between">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    
                                    <span className="ml-3">GitHub</span>
                                </div>
                                <span>
                                <img alt="link icon" loading="lazy" src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png" />
                            </span>
                            </p>
                        </div>
                    </div>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/welfordian" rel="noopener" target="_blank" className="mt-4">
                    <div className={`flex flex-col justify-between border-4 border-black px-8 py-4`}>
                        <div>
                            <p className="font-bold text-2xl flex justify-between">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>

                                    <span className="ml-3">LinkedIn</span>
                                </div>
                                <span>
                                <img alt="link icon" loading="lazy"
                                     src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png"/>
                            </span>
                            </p>
                        </div>
                    </div>
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/welfordian" rel="noopener" target="_blank" className="mt-4">
                    <div className={`flex flex-col justify-between border-4 border-black px-8 py-4`}>
                        <div>
                            <p className="font-bold text-2xl flex justify-between">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>

                                    <span className="ml-3">Twitter</span>
                                </div>
                                <span>
                                <img alt="link icon" loading="lazy"
                                     src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png"/>
                            </span>
                            </p>
                        </div>
                    </div>
                </a>

                {/* Instagram */}
                <a href="https://instagr.am/welfordian" rel="noopener" target="_blank" className="mt-4">
                    <div className={`flex flex-col justify-between border-4 border-black px-8 py-4`}>
                        <div>
                            <p className="font-bold text-2xl flex justify-between">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>

                                    <span className="ml-3">Instagram</span>
                                </div>
                                <span>
                                <img alt="link icon" loading="lazy"
                                     src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png"/>
                            </span>
                            </p>
                        </div>
                    </div>
                </a>

                {/* Spotify */}
                <a href="https://open.spotify.com/user/joshgbizit?si=8bf4915c2d3746d2" rel="noopener" target="_blank" className="mt-4">
                    <div className={`flex flex-col justify-between border-4 border-black px-8 py-4`}>
                        <div>
                            <p className="font-bold text-2xl flex justify-between">
                                <div className="flex items-center">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/></svg>

                                    <span className="ml-3">Spotify</span>
                                </div>
                                <span>
                                <img alt="link icon" loading="lazy"
                                     src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png"/>
                            </span>
                            </p>
                        </div>
                    </div>
                </a>

                {/* LastFM */}
                <a href="https://last.fm/user/welfordian" rel="noopener" target="_blank" className="mt-4">
                    <div className={`flex flex-col justify-between border-4 border-black px-8 py-4`}>
                        <div>
                            <p className="font-bold text-2xl flex justify-between">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 12c0 1.103-.896 2-2 2-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2zm10 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-14.795 7.507c-2.17-.813-3.893-2.54-4.699-4.714l-1.02.127c.896 2.628 2.968 4.704 5.592 5.606l.127-1.019zm.26-2.077c-1.271-.596-2.299-1.624-2.895-2.896l-1.041.13c.709 1.721 2.084 3.097 3.807 3.807l.129-1.041zm6.535-5.43c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4zm2.473-2.665c-.711-1.722-2.086-3.097-3.807-3.807l-.131 1.041c1.271.596 2.299 1.624 2.896 2.896l1.042-.13zm2.027-.253c-.902-2.61-2.969-4.672-5.582-5.568l-.129 1.019c2.162.808 3.877 2.52 4.691 4.677l1.02-.128z"/></svg>

                                    <span className="ml-3">last.fm</span>
                                </div>
                                <span>
                                <img alt="link icon" loading="lazy"
                                     src="https://img.icons8.com/ios-glyphs/30/000000/link--v1.png"/>
                            </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </Layout>
)

export default LinksPage