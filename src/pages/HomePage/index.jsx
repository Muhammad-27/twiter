
import header_rasm from "../../assets/Customize.png"
import "./style.css"
import profil from "../../assets/Profile_Pic.png"
import profil2 from "../../assets/Ellipse6.png"
import shashlik from "../../assets/image8.png"
import { Icons } from "../../constants/icons"

const HomePage = () => {

    return <>
        <header className="header container">
            <a href="/">Home</a>
            <img src={header_rasm} alt="Customize" />
        </header>
        <section className="main-section">
            <div className="what">
                <div className="happ">
                    <img src={profil} alt="Profile" />
                    <h2>What's happening</h2>
                </div>
                <div className="icons">
                    <div className="icon">
                        <Icons.SmileIcon />
                        <Icons.SmileIcon />
                        <Icons.SmileIcon />
                        <Icons.SmileIcon />
                    </div>
                    <div className="btn">
                        <button>Tweet</button>
                    </div>
                </div>
            </div>
            <div className="disig">
                <div className="text">
                    <div className="text_img">
                        <img src={profil2} alt="Profile" />
                    </div>
                    <div className="text_main">
                        <h2>Designsta <span>@inner · 25m</span></h2>
                        <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                    </div>
                    <div className="text_icon">
                        <Icons.VectorIcon />
                    </div>
                </div>
                <div className="disig_icons">
                    <Icons.CommentIcon />
                    <Icons.ReetwitIcon />
                    <Icons.LikeIcon />
                    <Icons.F22Icon />
                </div>
            </div>
            <div className="disig">
                <div className="text">
                    <div className="text_img">
                        <img src={profil2} alt="Profile" />
                    </div>
                    <div className="text_main">
                        <h2>Designsta <span>@inner · 25m</span></h2>
                        <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                    </div>
                    <div className="text_icon">
                        <Icons.VectorIcon />
                    </div>
                </div>
                <div className="disig_icons">
                    <Icons.CommentIcon />
                    <Icons.ReetwitIcon />
                    <Icons.LikeIcon />
                    <Icons.F22Icon />
                </div>
            </div>
            <div className="disig">
                <div className="text">
                    <div className="text_img">
                        <img src={profil2} alt="Profile" />
                    </div>
                    <div className="text_main">
                        <h2>Designsta <span>@inner · 25m</span></h2>
                        <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                    </div>
                    <div className="text_icon">
                        <Icons.VectorIcon />
                    </div>
                </div>
                <div className="img">
                    <img src={shashlik} alt="shashlik" />
                </div>
                <div className="disig_icons">
                    <Icons.CommentIcon />
                    <Icons.ReetwitIcon />
                    <Icons.LikeIcon />
                    <Icons.F22Icon />
                </div>
            </div>
        </section>
    </>
}
export default HomePage