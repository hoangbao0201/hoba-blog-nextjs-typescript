import "../styles/globals.scss";
import type { AppProps } from "next/app";

// let darkmode = localStorage.getItem("darkmode");
// console.log(darkmode)
// if (localStorage.getItem("darkmode")) {
//     if (localStorage.getItem("darkmode") === "true") {
//         darkmode = true;
//     } else {
//         darkmode = true;
//     }
// } else {
//     localStorage.setItem("darkmode", "false");
// }

export default function App({ Component, pageProps }: AppProps) {
    return (
        // <div className={`${darkmode && "dark"}`}>
            <Component {...pageProps} />
        // </div>
    );
}
