import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Component from '../Component/Header';

function Main() {
   var say = document.querySelector('.say');
   const [add, setAdd] = useState(0);
   var up =()=>{
    setAdd(add+1);
    say.textContent=add;
   }
   
  return (
    <>
      {/* <Header add={add}/> */}
      <main className='container overflow-x-hidden ' >
        <div className="row colz">
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        
        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>

        <div className='col-sm-12 col-lg-3 col-md-4 col-12 p-1'>
        <img src="public/carForo.jpg" style={{width:'100%', objectFit:'contain'}} alt="Car" />
        <h4>Lorem, ipsum dolor.</h4>
        <p >Lorem ipsum, dolor sit amet consectetur</p>
        <button className='btn text-white bg-info rounded btn-outline-none' onClick={up}>Elave Et</button>
        </div>
        </div>

      </main>
      
    </>
  )
}

export default Main
