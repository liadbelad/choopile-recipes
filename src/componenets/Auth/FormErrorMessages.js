import styles from "./FormErrorMessages.module.scss"

// d-flex flex-nowrap
const FormErrorMessages = ({ error }) => {
  return (
    <>
      <div className={`${styles["errors-container"]}  `}>
        <small className="form-text text-danger text-capitalize">{error}</small>
      </div>
    </>
  )
}

export default FormErrorMessages
