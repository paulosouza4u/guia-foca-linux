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
                <div className="d-flex justify-content-center p-5 bg-dark text-white">
                    <p>Copyright ©{ year } Todos os direitos reservados GuiaFoca</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
