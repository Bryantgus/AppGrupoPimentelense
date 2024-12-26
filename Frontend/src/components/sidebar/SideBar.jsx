import "./SideBar.css"

export default function SideBar() {
    
    return (
        <div className="sideBar">
            <h1>Grupo <br />Pimentelense</h1>
            <div className="sideBarElements">
                <a href="#">Inicio</a>
                <a href="#">Desglose</a>
                <a href="#">Cotizacion</a>
            </div>
        </div>
    )
}