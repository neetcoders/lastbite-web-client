import Link from 'next/link';
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className='w-full bg-success-main z-[100]'>
      <div className='flex flex-col gap-6 py-12 px-12 md:px-24'>
        <div className='flex justify-between md:flex-row flex-col'>
          <Link href='/' className='flex flex-row gap-2 md:gap-4'>
            <p className='text-h6 text-typo-white font-bold'>Last<span className='text-typo-main'>Bite</span></p>
          </Link>
          <div className='flex flex-col gap-2 mt-4'>
            <p className='text-title text-typo-white font-bold'>QUICK LINKS</p>    
            <Link href='/'>
              <p className='text-bodytext text-typo-white font-semibold'>Home</p>
            </Link>
            <Link href='/register'>
              <p className='text-bodytext text-typo-white font-semibold'>Register</p> 
            </Link>
            <Link href='/user/login'>
              <p className='text-bodytext text-typo-white font-semibold'>Login</p>
            </Link>
          </div>
        </div>
        <div>
          
        </div>
        <div>
          <hr className='relative h-[3px] border bg-white'/>
          <div className='flex flex-col md:flex-row text-white gap-4 md:gap-10'>
            <div className='mt-2'>
              <p className='font-semibold'>© LastBite 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}