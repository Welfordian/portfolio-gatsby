import * as React from "react"
import CaseStudies from "../components/Home/CaseStudies";
import PersonalProjects from "../components/Home/PersonalProjects";
import Layout from "../components/Layout";
import PersonalProject from "../components/Home/PersonalProject";
import Link from "../components/Links/Link";
import GitHub from "../images/GitHub.svg";
import LinkedIn from "../images/LinkedIn.svg";
import Twitter from "../images/Twitter.svg";
import Instagram from "../images/Instagram.svg";
import Spotify from "../images/Spotify.svg";
import LastFM from "../images/LastFM.svg";

const LinksPage = () => (
    <Layout hideSocial>
        <div className="flex justify-center">
            {/* GitHub */}
            <div className="w-full xl:w-1/3 flex flex-col mt-12">
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
    </Layout>
)

export default LinksPage