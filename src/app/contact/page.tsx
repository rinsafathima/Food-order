import ContactUsForm from '@/components/common/form/ContactUsForm'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='py-20 container'>
      <div className="grid grid-cols-2">
        <div className="container flex flex-col gap-8">
          <h1 className='mb-4'>Contact Information</h1>
          <p >Address: <span className='text-primary'>132, My Street, Kingston, New York 1240</span></p>
          <p>Phone: <span className='text-primary'>+12 345 678 910</span></p>
          <p>Email: <span className='text-primary'>info@pizzata.com</span></p>
          <p>Business Hours: <span className='text-primary'>Monday-Friday 8:00am - 9:00pm</span></p>
        </div>
        <div className='container'>
          <ContactUsForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage