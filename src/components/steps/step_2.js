import React from 'react'
import countries from '../../data/countries'
import cities from '../../data/cities'
import Field from '../fields/Field'
import Select from '../fields/Select'

/*
email	text	Invalid email address
mobile	text	Invalid mobile
country	select	Required
city	select	Required
*/

const Step2 = (props) => {
  const { values, errors, onChange } = props

  const getOptionsItems = (items) => {
    return items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))
  }

  const getOptionsItemsCities = (cities) => {
    const filteredCities = Object.entries(cities).filter(
      (el) => el[1].country === Number(values.country)
    )

    return getOptionsItems(
      filteredCities.map(([id, city]) => ({
        id,
        name: city.name,
      }))
    )
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
        options={getOptionsItemsCities(cities)}
      />
    </div>
  )
}

export default Step2
