  import React from "react"
  import DonationForm from "./DonationForm"

export default function Progress({targetAmount, donationsResult, donationNumber}) {

  return (
    <section className="progress">
      <h2 className="progress">
        Raised <span className="secondary">${donationsResult}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
      <h3 className="progress">You could be donation <span className="secondary">#{donationNumber}!</span></h3>
      <DonationForm />
    </section>
  )
}
