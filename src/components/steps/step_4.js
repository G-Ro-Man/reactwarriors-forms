import React from 'react'
import countries from '../../data/countries'
import cities from '../../data/cities'

const Step4 = (props) => {
  const { values } = props
  const selectedCountry = countries.find(
    (item) => item.id === Number(values.country) || {}
  )

  return (
    <div className="card-body">
      <div className="row">
        <div className="col-md-6">
          <img src={values.avatar} className="w-100 mb-4 p-2" alt="avatar" />
        </div>
        <div className="col-md-6">
          <h5>
            {values.firstname} {values.lastname}
          </h5>
          <p className="text-muted">{values.gender}</p>
          <p>{values.email}</p>
          <h5>{values.mobile}</h5>
          <p>
            {selectedCountry.name} -> {cities[values.city].name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Step4
