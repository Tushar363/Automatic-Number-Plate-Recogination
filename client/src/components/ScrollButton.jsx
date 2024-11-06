// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";

function ScrollButton() {
    const [backToTopBtn, setBtn] = useState(false);

    useEffect(() => {
        Window.addEventListener("scroll", () => {
            if(window.scrollY > 200){
                setBtn(true)
            }else{
                setBtn(false)
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
    <div className="ScrollButton">

        {backToTopBtn && (
            <button style={{position: "fixed",
                            bottom: "50px",
                            right: "100px",
                            height: "50px",
                            width: "50px",
                            display: "none",
                            fontSize: "50px",}
            }
            onClick={scrollUp}>^</button>
        )}
    </div>
    ); 
}

export default ScrollButton;