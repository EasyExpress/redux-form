import React from 'react';

import MaskedInput from 'react-text-mask';


export const renderField = ({
    input,
    placeholder,
    step,
    type,
    disabled,
    meta: { touched, error }
}) => {
    return (
        <div>
            <input
                {...input}
                className='input'
                placeholder={placeholder}
                disabled={disabled}
                type={type}
                step={step}
            />
            {touched && error && <div className='error'>{error}</div>}
        </div>
    );
};

export const renderPhoneField = ({
    input,

    placeholder,
    disabled,
    meta: { touched, error }
}) => {
    return (
        <div>

            <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                {...input}
                className='input'
                placeholder={placeholder}
                disabled={disabled}
            />

            {touched && error && <div className='error'>{error}</div>}
        </div>
    );
};

export const renderTextAreaField = ({
    input,

    placeholder,
    disabled,
    rows,
    meta: { touched, error }
}) => {
    return (
        <div>

            <textarea

                {...input}
                rows={rows}
                disabled={disabled}
                placeholder={placeholder}
            />
            {touched && error && <div className='error'>{error}</div>}
        </div>
    );
};

