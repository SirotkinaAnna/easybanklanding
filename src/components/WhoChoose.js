import CardInfo from "./CardInfo";
import iconOnline from "../images/icon-online.svg"
import simpleBudgeting from '../images/icon-budgeting.svg'
import onBoarding from '../images/icon-onboarding.svg'
import openApi from "../images/icon-api.svg"
function WhoChoose() {
    const chooseClass = "card-img-top w-25 mb-4"
    return <div className="who-choose py-5">
        <div className="inside-topic">
            <h2>
                Why choose Easybank?
            </h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <div className="row ">

            <CardInfo myClass={chooseClass} src={iconOnline} title="Online Banking"  >Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</CardInfo>
            <CardInfo myClass={chooseClass} src={simpleBudgeting} title="Simple Budgeting" >See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</CardInfo>

            <CardInfo myClass={chooseClass} src={onBoarding} title="Fast Onboarding">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</CardInfo>
            <CardInfo myClass={chooseClass} src={openApi} title="Open API">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</CardInfo>

        </div>
    </div>
}
export default WhoChoose;