import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from "./formIputs.module.css";

function Select (props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor={name}>{label}</label>
            <Field className={styles.flatInput} as='select' id={name} name={name} {...rest}>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })}
            </Field>
            <span className={styles.errorSpan}><ErrorMessage name={name} /></span>
        </div>
    )
}

export default Select