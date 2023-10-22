const AppCounter = () => {
    return (
		<>
            <div className="container">
                <div className="count">
                    <button>-</button>
                    <h2>Intervalo: 1</h2>
                    <button>+</button>
                </div>
                <div className="count">
                    <button>-</button>
                    <h2>Contagem: 0</h2>
                    <button>+</button>
                </div>
                <h2>Hoje é Domingo, 22 de out. de 2023</h2>
            </div>
		</>
	)
}

export { AppCounter }