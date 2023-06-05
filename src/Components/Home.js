import React from 'react'
import roboticsTeam from './Images/robotics-team.png'
import newMoon from './Images/new-moon.png'
import astronautConference from './Images/astronaut-conference.png'
import astronautPainting from './Images/astronaut-painting.png'
import doctor from './Images/doctor.png'

export default function Home({ fixed }) {
  return (
    <>
      <div className='hero h-[50vh] lg:h-[80vh] text-white text-4xl md:text-6xl flex items-center justify-center'>
        <div className=''>
          Unleash Your Potential at Saturn University
        </div>
      </div>
      <div className='bg-red-700 flex justify-center py-8'>
        <button className='transition duration-300 ease-in-out border-4 border-solid border-transparent bg-white text-red-700 lg:text-lg font-bold w-1/4 lg:w-1/6 py-4 mx-3 hover:border-white hover:bg-red-700 hover:text-white'>Visit Us</button>
        <button className='transition duration-300 ease-in-out border-4 border-solid border-transparent bg-white text-red-700 lg:text-lg font-bold w-1/4 lg:w-1/6 py-4 mx-3 hover:border-white hover:bg-red-700 hover:text-white'>Apply Now</button>
        <button className='transition duration-300 ease-in-out border-4 border-solid border-transparent bg-white text-red-700 lg:text-lg font-bold w-1/4 lg:w-1/6 py-4 mx-3 hover:border-white hover:bg-red-700 hover:text-white'>Explore Majors</button>

      </div>
      <div className='flex flex-col align-center items-center'>
        <div className='w-screen flex justify-center flex-col lg:flex-row lg:py-10'>
          <img className='flex justify-center lg:w-1/4 h-1/4' src={roboticsTeam} />
          <div className='flex flex-col px-10 py-10 h-full lg:w-1/4'>
            <p className='text-3xl font-bold' >SU's Robotics Team Wins International Competition</p>
            <p>Saturn University's robotics team triumphs in an international robotics competition, showcasing their exceptional engineering skills and innovative designs that push the boundaries of autonomous technology.</p>
            <button className='transition duration-300 ease-in-out border-4 bg-red-700 text-white w-1/2 py-4 mt-10 border-solid border-transparent hover:border-red-700 hover:bg-white hover:text-red-700'>Continue Reading</button>
          </div>
        </div>
        <div className='flex'>
          <div className='card px-5 w-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
            <img className='' src={newMoon} />
            <p className='font-bold'>SU Researchers Discover New Moons Orbiting the Ringed Planet</p>
            <p>Saturn University's astrophysics team makes a groundbreaking discovery, identifying previously unknown moons in orbit around Saturn. Their findings shed light on the complex dynamics of Saturn's celestial neighborhood.</p>
          </div>
          <div className='card px-5 w-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
            <img className='' src={astronautConference} />
            <p className='font-bold'>Saturn University Hosts International Space Exploration Conference</p>
            <p>Saturn University becomes the global epicenter for space exploration as it hosts a prestigious conference, bringing together leading scientists, astronauts, and visionaries to share cutting-edge research and insights.</p>
          </div>
          <div className='card px-5 w-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
            <img className='' src={astronautPainting} />
            <p className='font-bold'>SU's Art Exhibition Celebrates the Intersection of Science and Creativity</p>
            <p>An immersive art exhibition at Saturn University showcases the breathtaking fusion of art and science, exploring how the cosmos inspires artistic expression and encourages a deeper understanding of the universe.</p>
          </div>
          <div className='card px-5 w-80 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110'>
            <img className='' src={doctor} />
            <p className='font-bold'>Saturn University Launches Space Medicine Program for Aspiring Astronauts</p>
            <p>Saturn University introduces a pioneering space medicine program that equips future astronauts with the necessary knowledge and skills to thrive in the demanding environment of space exploration.</p>
          </div>
        </div>
        <button className='transition duration-300 ease-in-out border-4 bg-red-700 text-white px-4 py-4 mt-10 border-solid border-transparent hover:border-red-700 hover:bg-white hover:text-red-700'>Read More News</button>
      </div>
    </>

  )
}
