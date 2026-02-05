import axios from "axios"
import { useContext, useState } from "react"
import { ContexAuth } from "../../contex/authContex"

import"./login.css"

const LoginPage = () => {
    const [Login, setLogin] = useState('')
    const [Password, setPassword] = useState('')

    const { LoginFunc } = useContext(ContexAuth)

    async function onFinish() {
        async function fetchData() {
            const res = await axios.post("https://dummyjson.com/auth/login", {
                username: Login,
                password: Password
            })
            if (res.status === 200) {
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("refreshToken", res.data.refreshToken);

                // auth(res.data.accessToken,res.data.refreshToken)

                LoginFunc()

            }else{
                if(res.status === !200){
                    alert("Login failed")
                }
            }
        }
        fetchData()
    }

    return(
        <section className="login">
            <div className="login-box">
                <div className="login_item">
                    <input type="text" placeholder="username.." onInput={(e)=> setLogin(e.target.value)} />
                </div>
                <div className="login_pas">
                    <input type="password" placeholder="password" onInput={(e)=> setPassword(e.target.value)} />
                </div>
            <button onClick={onFinish}> login</button>
            </div>
        </section>
    )
}
export default LoginPage
