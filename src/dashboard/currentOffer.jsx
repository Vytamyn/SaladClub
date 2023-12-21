import "./currentOffer.css";
import currentOfferImage from "../img/currentOfferImage.png";
import cog from "../img/cog.png";

function CurrentOffer() {
  return (
    <div className="current-offer">
      <div className="current-offer-left">
        <div className="current-offer-h2">
          <h2 className="h2-white">Current Offer</h2>
        </div>
        <div className="current-offer-p">
          <p className="p-gray">
            Every purchase of <span className="p-bold-white">$100</span> or
            above will be getting a <span className="p-bold-white">50%</span>{" "}
            discount
          </p>
        </div>
        <div>
          <button className="button-green">
            <img src={cog} style={{ marginRight: "8px" }} alt="Cog Icon" />{" "}
            Manage offers
          </button>
        </div>
      </div>
      <div className="current-offer-right">
        <img src={currentOfferImage} />
      </div>
    </div>
  );
}

export default CurrentOffer;
