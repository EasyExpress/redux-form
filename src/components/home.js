import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderField, renderTextAreaField } from './_common/render-field';


class Home extends Component {

    onSubmit(props) {

        console.log(JSON.stringify(props, null, 4));

    }

    renderSubmitButton() {

        return (
            <button type='submit' className='btn-block' >
                <div className='align-center'> Submit
                </div>
            </button>
        );

    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form className='home' onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <Field name='contactName'
                    placeholder='Name'
                    component={renderField}
                    type='text' />
                <div className='height-40' />
                <Field
                    name='contactEmail'
                    component={renderField}
                    placeholder='Email'
                    type='text'
                />
                <div className='height-40' />
                <Field
                    name='contactMessage'
                    placeholder='Message'
                    component={renderTextAreaField}
                    rows='4'
                    type='text'
                />
                <div className='height-40' />

                {this.renderSubmitButton()}

                <div className='height-20' />
            </form>);

    }

}

const validate = values => {
    const errors = {};

    if (!values.contactName) {
        errors.contactName = 'Please enter name.';
    }

    if (!values.contactEmail) {
        errors.contactEmail = 'Please enter email.';
    }

    if (!values.contactMessage) {
        errors.contactMessage = 'Please enter message.';
    }

    return errors;
};

export default connect(null, null)(
    reduxForm({
        form: 'message-form',
        validate,
        enableReinitialize: true
    })(Home)
);

