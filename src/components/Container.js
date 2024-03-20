import ConteudoPrincipal from "./ConteudoPrincipal"
import Sidebar from "./Sidebar"
export default function Container() {
    return (
        <div className="container">
            <ConteudoPrincipal/>
            <Sidebar/>
        </div>
    )
}