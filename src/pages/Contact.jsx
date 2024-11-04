import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className=' mt-32 p-5 flex justify-center items-center w-full h-full'>
                <div className='my-3 p-2 bg-gray-500 rounded-lg w-9/12 h-[70vh]'>
                    <h1 className='my-9 mx-10 text-3xl'>Contact Us</h1>
                    <form className='mt-9 mx-12 flex flex-col justify-center'>
                        <div className='w-full py-2'>
                            <h3 className='uppercase text-lg'>Name:</h3>
                            <input type="text" className='w-full mt-2 h-10 p-2 rounded-lg bg-gray-400 border-2 border-black' placeholder='Input Here'/>
                        </div>
                        <div className='w-full py-2'>
                            <h3 className='uppercase text-lg'>Email:</h3>
                            <input type="text" className='w-full mt-2 h-10 p-2 rounded-lg bg-gray-400 border-2 border-black' placeholder='Input Here'/>
                        </div>
                        <div className='w-full py-2'>
                            <h3 className='uppercase text-lg'>Message:</h3>
                            <textarea className='w-full mt-2 h-42 p-2 rounded-lg bg-gray-400 border-2 border-black resize-none' rows={4} placeholder='Input Here'/>
                        </div>
                        <input type='submit' className='w-48  rounded-lg border-2 flex mx-auto mt-10 p-2 border-black bg-gray-400 hover:bg-gray-300' placeholder='submit' />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact