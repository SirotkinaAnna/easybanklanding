function CardInfo({ src, children, title, author, myClass }) {
    return <div className="col-md-3 mt-5 ">
        <div className="card m-0 p-0 w-100 h-100 border-0 myCard" >
            <img src={src} className={myClass} alt="..." />
            <div className="card-body h-50">
                <p class="card-subtitle mb-2 text-muted myText">{author}</p>
                <h3 class="card-title fs-5">{title}</h3>
                <p className="card-text myText text-muted">
                    {children}
                </p>
            </div>
        </div></div>
}
export default CardInfo;