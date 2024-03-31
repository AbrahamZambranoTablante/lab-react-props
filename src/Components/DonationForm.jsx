import React from "react";
export default function DonationForm() {
  return (
    <form className="donation">
      <label htmlFor="name">
        Name<input 
        id="name"
        name="name"
        type="text"
        placeholder="Your Name..."
        />
      </label>
      <label htmlFor="caption">
        Caption<input 
        id="caption"
        name="caption"
        type="text"
        placeholder="A brief message..."
        />
      </label>
      <label htmlFor="amount">
        Amount<input 
        id="amount"
        name="amount"
        type="number"
        placeholder="0"
        />
      </label><button type="submit">Donate!</button>
    </form>
  )
}
