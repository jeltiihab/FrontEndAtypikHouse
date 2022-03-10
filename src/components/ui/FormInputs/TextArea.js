import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './formIputs.module.css';

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className={styles.flatInput}
        as='textarea'
        id={name}
        name={name}
        {...rest}
      />
      <span className={styles.errorSpan}>
        <ErrorMessage name={name} />
      </span>
    </div>
  );
}

export default Textarea;