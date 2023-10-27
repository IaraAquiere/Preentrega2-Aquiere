import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
  return (
    <nav>
        <div className="d-flex justify-content-space-around p-2">
            <h1>Jugueteria la feliz</h1>
        </div>
        <div className="d-flex flex-row justify-content-evenly align-items-center p-4">
            <div>
                <button type="button" class="btn">Inicio</button>
                <button type="button" class="btn">Quienes somos</button>
                <button type="button" class="btn">Productos</button>
                <button type="button" class="btn">Contacto</button>
            </div>
            <div>
                <CartWidget />
                <p>5</p>
            </div>
        </div>    
    </nav>
  )
}

export default NavBar