import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose }) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])
    return ReactDOM.createPortal(
        <>
            <div className="mybg-gradient" onClick={onClose}></div>
            <div className=" modal-inside rounded-3">
                <div className="py-4">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>
            </div>
        </>,
        document.querySelector('.modal-container')

    )


}
export default Modal;