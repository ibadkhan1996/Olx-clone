import React from "react";
import { Card, CardFeatured } from "./Card";
import "./RecommendedCard.css";

function RecommendedCard() {
  return (
    <div className="recommendedCard">
      <div className="recommendedCard__heading">
        <p>Fresh recommendations</p>
      </div>
      <div className="recommendedCard__body">
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/zbbtjyiwdacr1-PK/image;s=300x600;q=60"
          title="Rs 85,000"
          subtitle="CG Honda 125 model Hyderabad..."
          date="today"
          location="akhter colony, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/q8vdfexqaa8n2-PK/image;s=300x600;q=60"
          title="Rs 90,000"
          subtitle="Trusted sofa sets heavy quality"
          date="today"
          location="university road, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/q7i5n8nnvx0f2-PK/image;s=300x600;q=60"
          title="Rs 980,000"
          subtitle="Kia Sportage FWD automatic 2020"
          date="today"
          location="askari iv, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/tm7v2vmdiwks1-PK/image;s=300x600;q=60"
          title="Rs 890,000"
          subtitle="Nissan Sunny 2006 EX Saloon Aut..."
          date="today"
          location="askari ii, karachi"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/bqsb6d4r0a9a-PK/image;s=300x600;q=60"
          title="Rs 10,000"
          subtitle="Oale X1 Plus nd Max8"
          date="2 DAYS AGO"
          location="saddar, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/dmz4fmdm62gr3-PK/image;s=300x600;q=60"
          title="Rs 34,699"
          subtitle="Samsung A31 4/128gb Box Pack"
          date="oct 25"
          location="saddar, karachi"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/85phy6nw3fy1-PK/image;s=300x600;q=60"
          title="Rs 320,000"
          subtitle="Suzuki Alto Hasil Karen sirf 20%..."
          date="oct 09"
          location="pechs, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/hu1vh0ylgzmt-PK/image;s=300x600;q=60"
          title="Rs 5,500"
          subtitle="Original Indian Chiffon"
          date="today"
          location="dha phase 6, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/qtwj4u86hk933-PK/image;s=300x600;q=60"
          title="Rs 1,000,000"
          subtitle="Suzuki Cultus 2012"
          date="today"
          location="sindh industrial, karachi"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/l04aczmun3rd3-PK/image;s=300x600;q=60"
          title="Rs 3,475,000"
          subtitle="Honda HRV / Vezel 2016..."
          date="oct 11"
          location="rashid minhas road, karachi"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/816ft9o56zj8-PK/image;s=300x600;q=60"
          title="Rs 900,000"
          subtitle="Kaneez Fatima Town Scheme 33..."
          date="oct 20"
          location="scheme 33, karachi"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/8fioaakdh0v4-PK/image;s=300x600;q=60"
          title="Rs 4,000,000"
          subtitle="Flat for sale"
          date="oct 27"
          location="gulshan-e-iqbal block 4, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/fgf513q8ob6-PK/image;s=300x600;q=60"
          title="Rs 1,000"
          subtitle="Basesu 2m cable, led type c..."
          date="today"
          location="askari iv, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/skwzaiycxb8y1-PK/image;s=300x600;q=60"
          title="Rs 53,000"
          subtitle="Samsung galaxy note 8"
          date="today"
          location="north karachi, karachi"
        />
        <CardFeatured
          image="https://apollo-singapore.akamaized.net/v1/files/0sxcti3k4l5p1-PK/image;s=300x600;q=60"
          title="Rs 150,000"
          subtitle="Cummins 7.5 kva generator"
          date="oct 10"
          location="tahir villa, karachi"
        />
        <Card
          image="https://apollo-singapore.akamaized.net/v1/files/2ip5plm5su001-PK/image;s=300x600;q=60"
          title="Rs 1,100,000"
          subtitle="Memon Farm Land available for..."
          date="today"
          location="scheme 45, karachi"
        />
      </div>
    </div>
  );
}

export default RecommendedCard;
