import React from "react"
import { Link } from 'gatsby'
import "./layout.css"
import Footer from "./footer"

export default function Layout({ children }) {
    return (
        <main className="layout">
            <div className="header">
                <h1>GOODVIBES.NET</h1>
                <nav className="topnav">
                    <Link to="/">Página inicial</Link>
                    <Link to="/posts/">Piadas/Frases motivacionais</Link>
                    <Link to="/form-piada">Envie aqui sua piada</Link>
                    <Link to="/form-frase">Envie aqui sua frase motivacional</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <Footer copyrightYear="2023" />
        </main >
    )
}
