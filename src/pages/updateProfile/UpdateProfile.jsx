import React, { useContext, useState } from 'react'
import Header from '../shared/header/Header'
import Footer from '../shared/footer/Footer'
import { AuthContext } from '../../Provider/AuthProvider'
import { ToastContainer } from 'react-toastify'
import UserProfile from '../userProfile/UserProfile'

const UpdateProfile = () => {

  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');
  const [message, setMessage] = useState('');


  const handleSave = () => {
    UpdateProfile(user, {
      displayName,
      photoURL
    })
      .then(() => {
        toast.success('Profile updated successfully!', { autoClose: 3000 })
      })
      .catch(error => {
        toast.error(`Error updating profile: ${error.message}`, { autoClose: 3000 });
      })
  }

  return (
    <div>

      <Header></Header>

      <div className='max-w-1/4 min-w-full'>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">User Profile</h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="displayName">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="email"
              type="email"
              value={user.email}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="photoURL"
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
          {message && <p className="mt-4 text-center">{message}</p>}
        </div>
      </div>


      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default UpdateProfile