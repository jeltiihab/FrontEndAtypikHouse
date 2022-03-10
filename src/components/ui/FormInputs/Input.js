import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from "./formIputs.module.css"

function Input (props) {
    const { label, name, ...field } = props
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor={name}>{label}</label>
            <Field className={styles.flatInput} id={name} name={name} {...field} />
            <span className={styles.errorSpan}><ErrorMessage name={name} /></span>
        </div>
    )
}

export default Input