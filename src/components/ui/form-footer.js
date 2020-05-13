import React from 'react'

const FormFooter = (props) => {
  const { step, nextStep, prevStep, reset } = props
  return (
    <div className="card-footer d-flex justify-content-center">
      {step < 4 ? (
        <>
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={prevStep}
            disabled={step === 1}
          >
            Prev step
          </button>
          <button
            type="submit"
            className="btn btn-primary m-2"
            onClick={nextStep}
          >
            Next step
          </button>
        </>
      ) : null}

      {step === 4 ? (
        <button
          type="button"
          className="btn btn-outline-primary m-2"
          onClick={reset}
        >
          Reset
        </button>
      ) : null}
    </div>
  )
}

export default FormFooter
