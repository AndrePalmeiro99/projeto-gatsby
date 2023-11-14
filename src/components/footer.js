import React from "react"

export default function Footer(props) {
    return (
        <p className="footer">
            © {props.copyrightYear} André corporation. Todos os direitos reservados.
        </p>
    )
}
