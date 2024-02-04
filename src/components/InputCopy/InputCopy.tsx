import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import './InputCopy.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InputCopy: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("https://tobeto.com/profiller/95452f1d");

    const customCopyToast = () => (
        <div>
            <div className="customCopyToast">
                <img src={'https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.8d36733b.ico&w=32&q=75'}
                    alt="TobetoIcon" />
                <span>Tobeto</span>
            </div>
            <div className="customCopyToastUrl">
                <span>• Url kopyalandı.</span>
            </div>
        </div>
    );
    const copyToaster = () => {
        return (
            toast.success(customCopyToast, {
                autoClose: 3000,
                theme: "light",
                position: "top-right",
                hideProgressBar: true,
                icon: false,
                className: "copyToast",
            })
        )
    }

    const handleCopyClick = () => {
        const copyTextElement = document.querySelector(".copy-text") as HTMLElement;
        const input = copyTextElement.querySelector("input.text") as HTMLInputElement;

        input.select();
        document.execCommand("copy");
        copyTextElement.classList.add("active");
        window.getSelection()?.removeAllRanges();

        setTimeout(() => {
            copyTextElement.classList.remove("active");
        }, 2500);
    };

    return (
        <div className="input-copy-component">
            <div>Profil Linki</div>
            <div className="copy-text">
                <input
                    type="text"
                    className="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => { handleCopyClick(); copyToaster(); }}>
                    <FontAwesomeIcon icon={faClone} />
                </button>
            </div>
        </div>
    );
};

export default InputCopy;
