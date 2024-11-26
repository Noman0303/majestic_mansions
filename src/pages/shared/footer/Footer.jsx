import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-green-950 text-base text-white p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <NavLink className="link link-hover" to='/aboutUs'>About us</NavLink>
        <NavLink className="link link-hover" to='/contact'>Contact</NavLink>
        <NavLink className="link link-hover" to='/jobs'>Jobs</NavLink>

      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href=""><FaSquareXTwitter className='w-8 h-8  ' /></a>
          <a href="" ><FaFacebook className='w-8 h-8 '/></a>
          <a href=""><FaYoutube className='w-8 h-8' /></a>

        </div>
      </nav>
    </footer>
  )
}

export default Footer