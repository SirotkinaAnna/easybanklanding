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
        <div>
            <div className="position-fixed bg-gradient" onClick={onClose}></div>
            <div className="position-fixed modal-inside rounded-3">
                <div className="py-4">
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')

    )


}
export default Modal;