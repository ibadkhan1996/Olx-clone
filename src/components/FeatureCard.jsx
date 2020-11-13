import React from "react";
import { CardFeatured } from "./Card";
import "./FeatureCard.css";

function FeatureCard() {
  return (
    <div className="featureCard">
      <div className="featureCard__heading">
        <p>Based on your last search</p>
        <h5>View more</h5>
      </div>
      <div className="featureCard__body">
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/ebpaiw3ycg853-PK/image;s=300x600;q=60"
          title="Rs 16,000"
          subtitle="Discount Offer Sofa Cum Bed"
          date="OCT 18"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/4tc34tc9gxx-PK/image;s=300x600;q=60"
          title="Rs 42,500"
          subtitle="4 Cupboards and table"
          date="TODAY"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/l1mj7szhb1x12-PK/image;s=300x600;q=60"
          title="Rs 8,999"
          subtitle="Amazon Fire HDX 7"
          date="OCT 10"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/6bl9ftfwl87e1-PK/image;s=300x600;q=60"
          title="Rs 9,999"
          subtitle="GONEX PACE 2 mobile pack"
          date="4 DAYS AGO"
        />
      </div>
    </div>
  );
}

export default FeatureCard;
