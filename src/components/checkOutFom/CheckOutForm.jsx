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
            <h1 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Insert Name and Address
            </h1>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <input
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={data.name}
              name="name"
              onChange={onChangeHandler}
            ></input>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <input
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={data.lastName}
              name="lastName"
              onChange={onChangeHandler}
            ></input>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <input
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={data.address}
              name="address"
              onChange={onChangeHandler}
            ></input>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              State
            </label>
            <select
              onChange={onChangeHandler}
              value={data.state}
              name="selectState"
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Zip Code
            </label>
            <input
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="zipCode"
              onChange={onChangeHandler}
              value={data.zipCode}
            ></input>
          </div>
          <div className="flex flex-col">
            <h1 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Payment
            </h1>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Card Number
            </label>
            <input
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="cardNumber"
              onChange={onChangeHandler}
              value={data.cardNumber}
            ></input>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Card Holder
            </label>
            <input
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="cardHolder"
              onChange={onChangeHandler}
              value={data.cardHolder}
            ></input>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Expiration Date
            </label>
            <input
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="expDate"
              onChange={onChangeHandler}
              value={data.expDate}
            ></input>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              CVV
            </label>
            <input
              className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="cvv"
              onChange={onChangeHandler}
              value={data.cvv}
            ></input>
          </div>
        </form>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CheckOutForm;
