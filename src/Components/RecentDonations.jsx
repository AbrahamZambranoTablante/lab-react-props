import React from "react";

export default function RecentDonations({donations}) {
  const donationInfo = donations.map(ele => <ul> <li><span>{ele.name} Donated ${ele.amount}</span>{ele.caption}</li> </ul>)
  return (
    <>
      {donationInfo}
    </>
  )
}