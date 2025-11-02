import * as React from "react";
import * as footerStyles from "./footer.module.css";

const Footer = () => {
    const year = new Date().getFullYear();

    /**********************************
     *** Renderização do componente ***
     **********************************/
    return (
        <>
            <footer className={ footerStyles.footer }>
                <div className="d-flex justify-content-center p-3 bg-dark text-white">
                    <span><small>Copyright ©{ year } Todos os direitos reservados GuiaFoca</small></span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
