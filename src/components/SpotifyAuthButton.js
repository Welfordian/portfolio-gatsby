import React, { useEffect, useMemo } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const AUTH_URL = "https://accounts.spotify.com/authorize";

export const SpotifyScopes = {
    userReadPrivate: "user-read-private",
    userReadEmail: "user-read-email",
    streaming: "streaming",
};

function parseAccessToken(hash) {
    const searchParams = new URLSearchParams((hash || "").replace(/^#/, ""));
    return searchParams.get("access_token");
}

export default function SpotifyAuthButton({
    redirectUri,
    clientID,
    scopes,
    title,
    logoClassName,
    btnClassName,
    onAccessToken,
}) {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const token = parseAccessToken(window.location.hash);
        if (!token) return;

        Cookies.set("spotifyAuthToken", token, { expires: 30, sameSite: "lax" });

        if (typeof onAccessToken === "function") {
            onAccessToken(token);
        }
    }, [onAccessToken]);

    const authUrl = useMemo(() => {
        const params = new URLSearchParams({
            client_id: clientID,
            redirect_uri: redirectUri,
            response_type: "token",
            scope: (scopes || []).join(" "),
            show_dialog: "false",
        });

        return `${AUTH_URL}?${params.toString()}`;
    }, [clientID, redirectUri, scopes]);

    return (
        <a href={authUrl} className={btnClassName}>
            <FontAwesomeIcon icon={faSpotify} className={logoClassName} />
            <span>{title}</span>
        </a>
    );
}
