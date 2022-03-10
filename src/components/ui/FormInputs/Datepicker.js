import React from 'react'
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import styles from "./formIputs.module.css"

function DatePicker (props) {
    const { label, name, ...rest } = props
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor={name}>{label}</label>
            <Field name={name}>
                {({ form, field }) => {
                    const { setFieldValue } = form
                    const { value } = field
                    return (
                        <DateView
                            className={styles.flatInput}
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                        />
                    )
                }}
            </Field>
            <span className={styles.errorSpan}><ErrorMessage name={name} /></span>
        </div>
    )
}

export default DatePicker