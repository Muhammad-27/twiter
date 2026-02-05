import { Link, Route, Routes } from "react-router-dom"
import { Menubar } from "../constants/menudata"
import { routes } from "../constants/routes"
import { Icons } from "../constants/icons"
import { Suspense } from "react"
import Loading from "../companents/loading"
import profil from "../assets/Profile_Pic.png"


const MenuBar = () => {
    return (
        <>

            <main className="container main  ">
                <section className="menu-section">
                    <div className="twitericon">
                        < Icons.twitterIcon />
                    </div>
                    <div className="menu">
                        {Menubar.map((item) => (
                            <Link key={item.id} to={item.path} >
                                {item.icon} {item.title}
                            </Link>
                        ))}
                        <button>Tweet</button>
                    </div>
                    <div className="might">

                        <div className="might_profile">
                            <div className="might_profile_img">
                                <img src={profil} alt="profil" />
                            </div>
                            <div className="might_profile_text">
                                <h1>Mushtariy</h1>
                                <p>@Mushtar565266</p>
                            </div>
                            <Icons.VectorIcon />
                        </div>

                    </div>
                </section>
                <section>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            {routes.map((item) => (
                                <Route
                                    key={item.id}
                                    path={item.path}
                                    element={item.element}
                                />
                            ))}
                        </Routes>
                    </Suspense>
                </section>

                <section>
                    <div className="search">
                        <button>
                            <Icons.searchIcon />
                        </button>
                        <input type="text" placeholder="Search Twitter" />
                    </div>
                    <div className="trends">
                        <div className="trends_text">
                            <h1>Trends for you</h1>
                            <Icons.SettingIcon />
                        </div>
                        <div className="trends_germaniy">
                            <div className="revol">
                                <p>Trending in Germany</p>
                                <h3>Revolution</h3>
                                <p>50.4K Tweets</p>
                            </div>
                            <div className="icon">
                                <Icons.VectorIcon />
                            </div>
                        </div>
                        <div className="trends_germaniy">
                            <div className="revol">
                                <p>Trending in Germany</p>
                                <h3>Revolution</h3>
                                <p>50.4K Tweets</p>
                            </div>
                            <div className="icon">
                                <Icons.VectorIcon />
                            </div>
                        </div>
                        <div className="trends_germaniy">
                            <div className="revol">
                                <p>Trending in Germany</p>
                                <h3>Revolution</h3>
                                <p>50.4K Tweets</p>
                            </div>
                            <div className="icon">
                                <Icons.VectorIcon />
                            </div>
                        </div>

                        <a href="#" className="show">show more</a>
                    </div>
                    <div className="might">
                        <h1>You might like</h1>
                        <div className="might_profile">
                            <div className="might_profile_img">
                                <img src={profil} alt="profil" />
                            </div>
                            <div className="might_profile_text">
                                <h1>Mushtariy</h1>
                                <p>@Mushtar565266</p>
                            </div>
                            <button>Follow</button>
                        </div>
                        <div className="might_profile">
                            <div className="might_profile_img">
                                <img src={profil} alt="profil" />
                            </div>
                            <div className="might_profile_text">
                                <h1>Mushtariy</h1>
                                <p>@Mushtar565266</p>
                            </div>
                            <button>Follow</button>
                        </div>
                        <a href="#" className="show">show more</a>
                    </div>
                    <div className="foter">
                        <p>Terms of Service Privacy Policy Cookie Policy</p>
                        <p>Imprint Ads Info More ··· © 2021 Twitter, Inc.</p>
                    </div>
                </section>
            </main>
        </>
    )

}
export default MenuBar