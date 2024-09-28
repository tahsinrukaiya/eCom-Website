import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



export default function Contact() {

    const schema = yup
        .object({
            firstName: yup
                .string()
                .min(3, 'Your first name should be at least 3 characters.')
                .max(10, 'Your first name cannot be longer than 10 characters.')
                .required('Please enter your first name'),
            lastName: yup
                .string()
                .min(3, 'Your last name should be at least 3 characters.')
                .max(10, 'Your last name cannot be longer than 10 characters.')
                .required('Please enter your Last name'),
            email: yup
                .string().matches()
                .email('Please enter a valid email address')
                .required('Please enter your email address'),
            message: yup
                .string()
                .min(3, 'Your message should be at least 3 characters.')
                .max(10, 'Your message cannot be longer than 30 characters.')
                .required('Please enter your message'),
        })
        .required();


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    function onSubmit(data) {
        console.log(data);
        alert("Form submitted successfully!");
        reset();
    }

    return (

        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
                <h1 className="heading_one">Contact Us</h1>
                <label htmlFor="first-name">First name</label>
                <input name="first_name"
                    placeholder="Your first name"
                    {...register('firstName')} />
                <p>{errors.firstName?.message}</p>

                <label htmlFor="last-name">Last name</label>
                <input name="last_name"
                    placeholder="Your last name"
                    {...register('lastName')} />
                <p>{errors.lastName?.message}</p>

                <label htmlFor="email">Email</label>
                <input name="email"
                    placeholder="Your email" {...register('email')} />
                <p>{errors.email?.message}</p>

                <label htmlFor="message">Message</label>
                <textarea name="message"
                    placeholder="Your message"
                    {...register('message')} />
                <p>{errors.message?.message}</p>

                <input type="submit" value="Send Message" />
            </form>
        </div >

    );
}
