
import ReactDOM from "react-dom";
import Button from "./Button";
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest, BsInstagram } from 'react-icons/bs'
function Contacts() {
    return ReactDOM.createPortal(
        <footer className="">
            <div className="row py-5">
                <div className="col-md-3 d-flex  flex-column align-items-center align-items-md-start">
                    <div className="m-auto m-md-0">
                        <svg width="139" height="20" viewBox="0 0 139 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.754 15.847C40.606 15.847 42.906 14.225 43.706 11.631H39.809C39.433 12.296 38.669 12.697 37.754 12.697C36.517 12.697 35.689 12.023 35.434 10.719H43.874C43.925 10.367 43.955 10.025 43.955 9.682C43.955 6.347 41.418 3.732 37.754 3.732C34.186 3.732 31.579 6.296 31.579 9.781C31.579 13.254 34.207 15.847 37.754 15.847ZM40.098 8.55H35.502C35.819 7.421 36.612 6.801 37.754 6.801C38.935 6.801 39.754 7.413 40.098 8.55ZM51.044 15.846C52.364 15.846 53.544 15.412 54.474 14.658L54.81 15.462H57.837V4.093H54.918L54.518 4.973C53.578 4.198 52.383 3.751 51.044 3.751C47.568 3.751 45.083 6.256 45.083 9.777C45.083 13.31 47.568 15.847 51.044 15.847V15.846ZM51.568 12.379C50.101 12.379 49.023 11.271 49.023 9.786C49.023 8.311 50.092 7.203 51.568 7.203C53.034 7.203 54.112 8.311 54.112 9.786C54.112 11.271 53.034 12.379 51.568 12.379ZM64.691 15.846C67.711 15.846 69.716 14.292 69.716 11.916C69.716 9.033 67.329 8.66 65.533 8.341C64.453 8.148 63.583 7.997 63.583 7.351C63.583 6.824 64.005 6.513 64.633 6.513C65.343 6.513 65.83 6.85 65.83 7.576H69.497C69.453 5.273 67.577 3.733 64.681 3.733C61.769 3.733 59.827 5.203 59.827 7.483C59.827 10.24 62.164 10.772 63.927 11.057C65.019 11.238 65.879 11.425 65.879 12.081C65.879 12.668 65.336 12.961 64.763 12.961C64.021 12.961 63.443 12.578 63.443 11.747H59.673C59.709 14.21 61.592 15.847 64.691 15.847V15.846ZM72.791 19.704C75.727 19.704 77.135 18.447 78.668 14.968L83.432 4.105H79.226L76.977 10.368L74.565 4.105H70.31L75.008 14.535C74.478 15.949 74.025 16.339 72.528 16.339H71.45V19.704H72.791ZM91.295 15.846C94.795 15.846 97.268 13.331 97.268 9.798C97.268 6.265 94.796 3.75 91.295 3.75C90.2986 3.74223 89.3199 4.01383 88.47 4.534V0H84.6V15.474H87.497L87.867 14.63C88.79 15.401 89.969 15.846 91.295 15.846ZM90.772 12.379C89.305 12.379 88.227 11.271 88.227 9.799C88.227 8.313 89.305 7.205 90.772 7.205C92.238 7.205 93.316 8.313 93.316 9.798C93.316 11.271 92.229 12.379 90.772 12.379ZM104.37 15.846C105.69 15.846 106.87 15.412 107.8 14.658L108.136 15.462H111.163V4.093H108.245L107.844 4.973C106.905 4.198 105.709 3.751 104.37 3.751C100.894 3.751 98.41 6.256 98.41 9.777C98.41 13.31 100.894 15.847 104.37 15.847V15.846ZM104.894 12.379C103.427 12.379 102.349 11.271 102.349 9.786C102.349 8.311 103.419 7.203 104.894 7.203C106.361 7.203 107.439 8.311 107.439 9.786C107.439 11.271 106.361 12.379 104.894 12.379ZM117.547 15.474V9.403C117.547 7.956 118.249 7.103 119.47 7.103C120.456 7.103 120.953 7.76 120.953 9.083V15.473H124.868V8.543C124.868 5.646 123.135 3.77 120.495 3.77C119.025 3.77 117.762 4.335 116.915 5.278L116.378 4.106H113.631V15.475H117.547V15.474ZM131.295 15.474V10.666L134.143 15.474H138.759L134.857 9.524L138.4 4.105H134.003L131.295 8.559V0H127.379V15.474H131.295Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.802 0L0 19.704H5.986L16.789 0H10.802Z" fill="url(#paint0_linear_2_10)" />
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M18.171 0L7.36801 19.704H13.354L24.157 0H18.171Z" fill="url(#paint1_linear_2_10)" />
                            <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M25.539 0L14.737 19.704H20.723L31.525 0H25.539Z" fill="url(#paint2_linear_2_10)" />
                            <defs>
                                <linearGradient id="paint0_linear_2_10" x1="1212.08" y1="-0.000114289" x2="48.4379" y2="1812.87" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#33D35E" />
                                    <stop offset="1" stop-color="#2AB6D9" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_2_10" x1="1219.45" y1="-0.000114289" x2="55.8059" y2="1812.87" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#33D35E" />
                                    <stop offset="1" stop-color="#2AB6D9" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_2_10" x1="1226.75" y1="-0.000114289" x2="63.0737" y2="1812.81" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#33D35E" />
                                    <stop offset="1" stop-color="#2AB6D9" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="d-flex justify-content-between my-4 my-md-0  w-75 mt-md-auto fs-4">

                        <p><AiFillFacebook /></p>
                        <p><AiFillYoutube /></p>
                        <p><AiOutlineTwitter /></p>
                        <p><BsPinterest /></p>
                        <p><BsInstagram /></p>
                    </div>
                </div>
                <div className="col-md-6 d-block d-md-flex text-center text-md-start">
                    <div className="me-md-5 pe-md-5"> <p>About</p>
                        <p>Contact</p>
                        <p>Blog</p></div>
                    <div className="ps-md-5"><p>Careers</p>
                        <p>Support</p>
                        <p>Privacy Policy</p></div>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center align-items-md-end p-0 m-0">
                    <div><Button /></div>
                    <div className="mt-3 mt-md-auto"><p className="text-muted text-end ">&copy; Easybank. All Rights Reserved</p></div>
                </div>
            </div>
        </footer>,
        document.body)
}
export default Contacts;