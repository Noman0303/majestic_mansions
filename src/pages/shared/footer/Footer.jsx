import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (


    <div className='grid grid-cols-3 bg-green-950 text-base text-white p-4'>
      <div>
        <h6 className="footer-title">Services</h6>
        <ul>
          <li><a className="link link-hover">Branding</a></li>
          <li><a className="link link-hover">Design</a></li>
          <li><a className="link link-hover">Marketing</a></li>
          <li><a className="link link-hover">Advertisement</a></li>
        </ul>
      </div>

      <div>
        <h6 className="footer-title">Company</h6>
        <ul>
          <li><NavLink className="link link-hover" to='/aboutUs'>About us</NavLink></li>
          <li><NavLink className="link link-hover" to='/contact'>Contact</NavLink></li>
          <li><NavLink className="link link-hover" to='/jobs'>Jobs</NavLink></li>
        </ul>
      </div>

      <div>
        <h6 className="footer-title">Social</h6>
        <ul className='lg:flex md:flex gap-4'>
          <li><a href=""><FaSquareXTwitter className='w-8 h-8  ' /></a></li>
          <li><a href="" ><FaFacebook className='w-8 h-8 ' /></a></li>
          <li><a href=""><FaYoutube className='w-8 h-8' /></a></li>
        </ul>
      </div>

    </div>

  )
}

export default Footer