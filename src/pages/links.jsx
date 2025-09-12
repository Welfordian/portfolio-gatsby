import * as React from "react"
import Link from "../components/Links/Link";
import {Helmet} from "react-helmet";
import SocialLinks from "../components/SocialLinks";
import { SiGithub, SiInstagram, SiLastdotfm, SiLinkedin, SiSpotify, SiX } from "react-icons/si";

const LinksPage = () => (
    <div className={`flex flex-col justify-center grow h-full pb-12`}>        
        <div className="flex flex-col justify-center grow items-center">
            <SocialLinks hideTagline={false} hideSocial={true} />
            
            {/* GitHub */}
            <div className="w-full xl:w-1/3 flex flex-col mt-16 px-8 md:mx-0 gap-4">
                <Link
                    to="https://link.welford.me/github"
                    icon={<SiGithub />}
                >
                    GitHub
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/linkedin"
                    icon={<SiLinkedin />}
                >
                    LinkedIn
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/twitter"
                    icon={<SiX />}
                >
                    Twitter
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/instagram"
                    icon={<SiInstagram />}
                >
                    Instagram
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/spotify"
                    icon={<SiSpotify />}
                >
                    Spotify
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/lastfm"
                    icon={<SiLastdotfm />}
                >
                    LastFM
                </Link>
            </div>
        </div>

        <Helmet
            htmlAttributes={{
                class: 'links-page',
            }}
        />
    </div>
)

export default LinksPage