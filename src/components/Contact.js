// Contact.js
import React from 'react';

export default function Contact() {
  const config = {
    email: 'vinothkumar10073@gmail.com',
    phone: '6374028583',
  };

  return (
    <section className='flex flex-col px-5 py-30 bg-third' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl text-white border-b-2 mb-3 w-[140px] font-google-font'>Contact</h1>
        <p className='pb-4 font-content-font text-xl text-yellow-400 text-wrap'>
         If you're looking to hire a motivated and enthusiastic fresher, please don't hesitate to contact me. 
        </p>
        <p className='py-2'><span className='font-bold'>Email: {config.email}</span></p>
        <p className='py-3'><span className='font-bold'>Phone No: {config.phone}</span></p>
      </div>
    </section>
  );
}
