import { useContext } from 'react'
import NavBar from '../shared/NavBar/NavBar'
import Footer from '../shared/footer/Footer'
import { AuthContext } from '../../Provider/AuthProvider'



const UserProfile = () => {

  const { user } = useContext(AuthContext);

  return (
    <div>
      <NavBar></NavBar>
      <div className='text-center bg-slate-200 rounded-xl p-2 my-4'>
        <h2 className='text-4xl font-semibold my-4'>User profile</h2>
        {user ? (
          <>
        <p className='my-2  text-2xl'> <span className='font-semibold'>Name : </span>{user.displayName}</p>
        <p className='my-2 text-xl'> <span className='font-semibold'>Email : </span>{user.email}</p>
        <img className='max-h-screen rounded-full mb-4 mx-auto' src={user.photoURL} alt="" />
        </> ):
        (
        <h2 className='text-2xl my-4'>Please Login to see user details</h2>)}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default UserProfile