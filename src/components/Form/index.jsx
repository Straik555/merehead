// Core
import React from "react";

//Formik
import {Formik, Form} from "formik";

//Input
import {TextField} from "../TextField";
import {validateRegister} from "../../_utils/Validation";

export const RegisterForm = ({handleSubmitForm}) => {
    const handleSubmit = (values) => {
        handleSubmitForm(values)
    }
    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
                desc: '',
                avatar: null
            }}
            validateOnBlur
            onSubmit={values => handleSubmit(values)
            }
            validationSchema={validateRegister}

        >
            {
                formik => (
                    <div>
                        <Form>
                            <TextField
                                label={'name'}
                                name={'name'}
                                type={'name'}
                                className={'form-control'}
                            />
                            <TextField
                                label={'surname'}
                                name={'surname'}
                                type={'surname'}
                                className={'form-control'}
                            />
                            <TextField
                                label={'desc'}
                                name={'desc'}
                                type={'desc'}
                                className={'form-control'}
                            />
                            <button
                                type={'submit'}
                                className={'btn btn-outline-primary mt-3'}
                            >
                                Save
                            </button>
                        </Form>
                    </div>
                )
            }
        </Formik>
    )
}