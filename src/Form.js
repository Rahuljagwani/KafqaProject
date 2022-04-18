import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Kform = () => {
    let data= {
        "name": "rohit",
        "email": "rroo@gmail.com",
        "password": "1234567890",
        "phonenumber": "9876543210"
        }
        
    var [flag,changeflag]=useState(0);

    const formikProps = {
        initialValues: {
            name: '',
            email: '',
            password: '',
            phonenumber: ''
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .required('Sorry, this is required'),
            email: Yup
                .string()
                .required('Sorry, this is required').email(),
            password: Yup
                .string()
                .required('Sorry, this is required').min(8, 'Password is too short - should be 8 chars minimum.'),
            phonenumber: Yup
                .string()
                .required('Sorry, this is required')

        }),
        onSubmit: values => {
           console.log(data);
           console.log(values);

            if(values.name==data.name&&values.email==data.email&&values.phonenumber==data.phonenumber&&values.password==data.password)
            {
                alert('You are valid user');
               changeflag(1);
            }
            else
            {
                alert('Entered values does not match data');
            }
        }
    }

    if(flag==1)
    {
        return(
            <>
            <h1>HELLO WORLD !</h1>
            </>
        )
    }

    return (
        <Formik {...formikProps}>
            {formik => (
                <div className="container">
                    <div className="formcontainer">
                        <Form>
                            <div className='inputlabelbox'>
                                <label htmlFor="name">Enter Name :</label>
                                <Field name="name" type="text" className="form-control" />
                                <br></br>
                                <ErrorMessage name="name" />
                                <br></br></div>
                            <div className='inputlabelbox'>
                                <label htmlFor="email">Enter E-mail :</label>
                                <Field name="email" type="email" className="form-control" />
                                <br></br>
                                <ErrorMessage name="email" />
                                <br></br></div>
                            <div className='inputlabelbox'>
                                <label htmlFor="password">Enter Password :</label>
                                <Field name="password" type="password" className="form-control" />
                                <br></br>
                                <ErrorMessage name="password" />
                                <br></br></div>
                            <div className='inputlabelbox'>
                                <label htmlFor="phonenumber">Enter Phone Number :</label>
                                <Field name="phonenumber" type="text" className="form-control" />
                                <br></br>
                                <ErrorMessage name="phonenumber" />
                                <br></br></div>
                            <button className="btn" type="submit">
                                <b>Check</b>
                            </button>
                            <button className="btn" type="reset">
                                <b>Reset</b>
                            </button>

                        </Form>
                    </div>
                </div>

            )}
        </Formik>


    )
}

export default Kform;