import React, { useContext, useEffect } from 'react'
import bg from "/images/bg.png";
import SearchBar from '../components/searchBar/SearchBar';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// onkeydown
const Home = () => {

    const { currentUser } = useContext(AuthContext)
    
 
    const navigate = useNavigate();

    useEffect(() => {
      if (!currentUser) {
        navigate("/login");
      }
    }, [currentUser, navigate]);

  return (
    <div className='flex h-full w-full justify-center px-5'>
 
        <div className="h-full w-full xl:w-[60%] flex pr-[100px]">
           <div className="pr-[100px] flex flex-col justify-center gap-10 " id="wrapper">
           <h1 className='capitalize font-semibold text-2xl'>Find real estate & get your dream place</h1>
           <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nam quos id, doloremque commodi reprehenderit, earum facilis cupiditate eveniet assumenda minus porro mollitia cumque dolor veniam odit ipsum. Alias, nobis.</p>
           <SearchBar/>
           <div className="flex text-center justify-around" id="boxes">
            <div className="" id="box">
                <h1 className='text-lg font-semibold'>16+</h1>
                <h2>years of Experience</h2>
            </div>
            <div className="" id="box">
                <h1 className='text-lg font-semibold'>200+</h1>
                <h2>award gained</h2>
            </div>
            <div className="" id="box">
                <h1 className='text-lg font-semibold'>1200+</h1>
                <h2>property ready</h2>
                      </div>
           
            

           </div>
           </div>
        </div>
        <div className="h-full w-[40%] bg-[#fcf5f3]  item-center hidden xl:flex">
            <img src={bg} alt="" className='w-[200%]' />
        </div>
    </div>
  )
}

export default Home ;