import React from 'react'
import countries from '../../data/countries'
import cities from '../../data/cities'
import Field from '../fields/field'
import Select from '../fields/select'

/*
общий селект
*/

const Contacts = (props) => {
  const { values, errors, onChange } = props

  const getOptionsItems = (items) => {
    return items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))
  }

  const getOptionsItemsCities = (cities) => {
    const filteredCities = Object.entries(cities)
      .filter((el) => el[1].country === Number(values.country))
      .map(([id, city]) => ({
        id,
        name: city.name,
      }))

    return getOptionsItems(filteredCities)
  }

  return (
    <div className="card-body">
      <Field
        id="email"
        labelText="Email"
        name="email"
        type="text"
        placeholder="example@mail.com"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
      <Field
        id="mobile"
        labelText="Mobile"
        name="mobile"
        type="mobile"
        placeholder="380991112233"
        value={values.mobile}
        onChange={onChange}
        error={errors.mobile}
      />

      {/* Country  */}
      <Select
        id="country"
        labelText="Country"
        name="country"
        value={values.country}
        onChange={onChange}
        error={errors.country}
        defaultOptionLabel={'Choose your country'}
        options={getOptionsItems(countries)}
      />

      {/* City  */}
      <Select
        id="city"
        labelText="City"
        name="city"
        value={values.city}
        onChange={onChange}
        error={errors.city}
        defaultOptionLabel={'Choose your city'}
        options={getOptionsItemsCities(cities)}
      />
    </div>
  )
}

export default Contacts
