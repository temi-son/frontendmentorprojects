const Body = () => {
    return ( 
        <div>
        <div className="Body">
            <body>
                <h1>Make</h1>
                <h2>remote work</h2>
                <h3>Get your team in sync, no matter your location. Streamline processes, create team ritual, and watch productivity soar.</h3>
                <button>Learn more</button>
                <footer className="Footer">
                    <img src="./images/client-databiz.svg"></img>
                    <img src="./images/client-audiophile.svg"></img>
                    <img src="./images/client-meet.svg"></img>
                    <img src="./images/client-maker.svg"></img>
                </footer>
            </body>
            <img src="./images/image-hero-desktop.png"></img>
        </div>
        <div className="MobileBody">
            <img src="./images/image-hero-mobile.png" className="MobileHero"/>
            <h1>Make remote work</h1>
            <h2>Get your team in sync, no matter your location. Streamline processes, create team ritual, and watch productivity soar.</h2>
            <button>Learn more</button>
            <footer>
                <img src="./images/client-databiz.svg"></img>
                <img src="./images/client-audiophile.svg"></img>
                <img src="./images/client-meet.svg"></img>
                <img src="./images/client-maker.svg"></img>
            </footer>
        </div>
        </div>
    );
}
 
export default Body;