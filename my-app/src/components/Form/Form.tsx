import React, { useState } from 'react';
import UserComponent from '@/components/UserComponent/UserComponent';
import UserInterface from '../UserComponent/UserInterface';

const Form: React.FC = () => {
  const [formData, setFormData] = useState<UserInterface>({
    name: '',
    age: 0,
    address: '',
    dob: new Date(),
    email: '',
    message: '',
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'email') {
      // Regular expression for validating email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      //console.log("Is Valid Email:", isValidEmail);
      setIsEmailValid(isValidEmail);
    } else if (name === 'address') {
      const isValidAddress = value.trim() !== ''; // Check if address is not empty
      setIsAddressValid(isValidAddress);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAddressValid) {
      alert('Please enter a valid address.');
      return;
    }

    setIsSubmitted(true);
    console.log('Form Data:', formData);
    // Here you can add your logic to send the form data to the server or perform any other action
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto mt-8'>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Your name'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='age'>
          Age
        </label>
        <input
          type='number'
          id='age'
          name='age'
          value={formData.age}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Your age'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='dob'>
          Date of birth
        </label>
        <input
          type='date'
          id='dob'
          name='dob'
          value={formData.dob.toString()}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Your date of birth'
        />
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            !isEmailValid && 'border-red-500'
          }`}
          placeholder='Your email'
        />
        {!isEmailValid && (
          <p className='text-red-500 text-xs italic'>
            Please enter a valid email address.
          </p>
        )}
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='address'>
          Address
        </label>
        <input
          type='text'
          id='address'
          name='address'
          value={formData.address}
          onChange={handleChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            !isAddressValid && 'border-red-500'
          }`}
          placeholder='Your address'
        />
        {!isAddressValid && (
          <p className='text-red-500 text-xs italic'>
            Please enter a valid address.
          </p>
        )}
      </div>
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='message'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='Your message'
          rows={4}
        />
      </div>
      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Submit
        </button>
      </div>
      <br />
      {isSubmitted ? (
        <UserComponent
          name={formData.name}
          age={formData.age}
          address={formData.address}
          dob={formData.dob}
          email={formData.email}
          message={formData.message}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          {
            <UserComponent
              name=''
              age={0}
              address=''
              dob='2000-01-01'
              email=''
              message=''
            />
          }
        </form>
      )}
    </form>
  );
};

export default Form;
