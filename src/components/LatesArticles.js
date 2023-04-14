import imgMoney from '../images/image-currency.jpg'
import imgDinner from '../images/image-restaurant.jpg'
import imgTravels from "../images/image-plane.jpg"
import imgConffetti from "../images/image-confetti.jpg"
import CardInfo from './CardInfo'
function LatestArticles() {
    const myClass = "card-img-top h-50"
    return <div className="latest" role="presentation">
        <h2 className='pt-5'>Latest Articles</h2>
        <div className='row pb-5'>
            <CardInfo src={imgMoney} myClass={myClass} author="By Claire Robinson" title="Receive money in any currency with no fees">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</CardInfo>
            <CardInfo src={imgDinner} myClass={myClass} author="By Wilson Hutton" title="Treat yourself without worrying about money">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</CardInfo>
            <CardInfo src={imgTravels} myClass={myClass} author="By Wilson Hutton" title="Take your Easybank card wherever you go" >We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</CardInfo>
            <CardInfo src={imgConffetti} myClass={myClass} author="By Claire Robinson" title="Our invite-only Beta accounts are now live!" >After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... </CardInfo>
        </div>
    </div>
}
export default LatestArticles;