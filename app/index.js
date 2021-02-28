import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Main from "./components/Main"
import Registration from "./components/Registration/Registration"
import AppRouter from "./components/AppRouter"
class App extends React.Component{
    render(){
        return(
            <div className="main">
                {/* <Main/> */}
                <AppRouter/>
            </div>

        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("app")
)