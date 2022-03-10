import React from 'react'
import { ErrorMessage, TextInput } from 'formik'
import styles from "./formIputs.module.css"

function TextInputField (props) {
    const { label, name, ...field } = props
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor={name}>{label}</label>
            <TextInput className={styles.flatInput} id={name} name={name} {...field} />
            <span className={styles.errorSpan}><ErrorMessage name={name} /></span>
        </div>
    )
}

export default TextInputField