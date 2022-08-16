import * as React from "react"
import Link from "../components/Links/Link";
import GitHub from "../images/GitHub.svg";
import LinkedIn from "../images/LinkedIn.svg";
import Twitter from "../images/Twitter.svg";
import Instagram from "../images/Instagram.svg";
import Spotify from "../images/Spotify.svg";
import LastFM from "../images/LastFM.svg";
import {Helmet} from "react-helmet";
import SocialLinks from "../components/SocialLinks";

const LinksPage = () => (
    <div className={`flex flex-col justify-center grow h-full pb-12`}>        
        <div className="flex flex-col justify-center grow items-center">
            <SocialLinks hideTagline={false} hideSocial={true} />
            
            {/* GitHub */}
            <div className="w-full xl:w-1/3 flex flex-col mt-10 px-8 md:mx-0">
                <Link
                    to="https://link.welford.me/github"
                    icon={<GitHub />}
                >
                    GitHub
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/linkedin"
                    icon={<LinkedIn />}
                >
                    LinkedIn
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/twitter"
                    icon={<Twitter />}
                >
                    Twitter
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/instagram"
                    icon={<Instagram />}
                >
                    Instagram
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/spotify"
                    icon={<Spotify />}
                >
                    Spotify
                </Link>

                <Link
                    className="mt-4"
                    to="https://link.welford.me/lastfm"
                    icon={<LastFM />}
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