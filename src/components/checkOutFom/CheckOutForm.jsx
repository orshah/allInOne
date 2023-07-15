import React from "react";
import { useState } from "react";

const defaultValues = {
  name: "",
  lastName: "",
  address: "",
  selectState: "",
  zipCode: "",
  cardNumber: "",
  cardHolder: "",
  expDate: "",
  cvv: "",
};

function CheckOutForm() {
  const [data, setData] = useState(defaultValues);

  console.log(data);

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col">
            <h1 className=" ">Insert Name and Address</h1>
            <input
              value={data.name}
              name="name"
              onChange={onChangeHandler}
              placeholder="Name"
            ></input>
            <input
              value={data.lastName}
              name="lastName"
              onChange={onChangeHandler}
              placeholder="Last Name"
            ></input>
            <input
              value={data.address}
              name="address"
              placeholder="address"
              onChange={onChangeHandler}
            ></input>
            <select
              onChange={onChangeHandler}
              value={data.state}
              name="selectState"
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <input
              name="zipCode"
              onChange={onChangeHandler}
              value={data.zipCode}
              placeholder="zip code"
            ></input>
          </div>
          <div className="flex flex-col">
            <h1>Payment</h1>
            <input
              placeholder="Card number"
              name="cardNumber"
              onChange={onChangeHandler}
              value={data.cardNumber}
            ></input>
            <input
              placeholder="Cardholder name"
              name="cardHolder"
              onChange={onChangeHandler}
              value={data.cardHolder}
            ></input>
            <input
              placeholder="exp. date"
              name="expDate"
              onChange={onChangeHandler}
              value={data.expDate}
            ></input>
            <input
              placeholder="CVV"
              name="cvv"
              onChange={onChangeHandler}
              value={data.cvv}
            ></input>
          </div>
        </form>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default CheckOutForm;
