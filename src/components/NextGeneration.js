import phone from '../images/image-mockups.png'
import Button from './Button';
function NexGeneration() {
    return <div className="nexDiv ">
        <div className="row next-row m-0 p-0">
            <div className="col-md-5 order-2 order-md-1 d-block py-0 m-auto align-items-center py-4" >
                <div className="inside-div d-flex flex-column align-items-center align-items-md-start">  <h1 className=" myHeader">Next generation digital banking</h1>
                    <p className='text-muted my-4'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <div className=''><Button /></div>
                </div>
            </div>
            <div className="col-md-7 order-1 order-md-2 my-bg m-0 p-0">
                <div className='my-img m-0 p-0'>
                    <img src={phone} alt="" />
                </div>
            </div>
        </div>

    </div>

}
export default NexGeneration;