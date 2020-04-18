import React from 'react'

const FormFooter = (props) => {
  const { step, nextStep, prevStep, reset } = props
  return (
    <div className="card-footer d-flex justify-content-center">
      <button
        type="button"
        className={`btn btn-secondary m-2 ${
          step === 1 || step === 4 ? 'd-none' : ''
        }`}
        onClick={prevStep}
      >
        Prev step
      </button>
      <button
        type="submit"
        className={`btn btn-primary m-2 ${step === 4 ? 'd-none' : ''}`}
        onClick={nextStep}
      >
        Next step
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary m-2 ${step !== 4 ? 'd-none' : ''}`}
        onClick={reset}
      >
        Reset
      </button>
    </div>
  )
}

export default FormFooter
