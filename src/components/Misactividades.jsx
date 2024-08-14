import { FloatingLabel } from "flowbite-react";
import { useState } from "react";

function Misactividades() {
  const [activado, setActivado] = useState(true)
  const [isButtonDisabled, setButtonDisabled] = useState(false);
    
  const handlePractice = () => {
    setActivado(!activado)
    setButtonDisabled(!isButtonDisabled)
  } 

  return (
    <div className="h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"> 
        <div className="mx-auto mb-2 max-w-screen-sm">
          <h2 className="mb-2 text-2xl tracking-tight font-extrabold text-indigo-900 dark:text-white pt-16">Práctica en Inglés</h2>
          {/* <p className="font-light text-gray-500 text-left sm:text-md dark:text-gray-400">Complete el siguiente texto seleccionando de la lista desplegable, la palabra correcta.</p> */}
        </div>
      </div>
   
      <div className="font-normal text-gray-700 dark:text-gray-400 mx-20">
        <div className="flex flex-row gap-2 sm:gap-2 sm:flex-row sm:items-center">
          <div className="size-24 py-4">
            <FloatingLabel variant="standard" label="Fill in" color="success" disabled={activado} />
          </div>
          <p>want to be part of the Frontend working groups, as I have experience in developing projects from scratch
            or contributing to projects that are already underway.</p>
        </div>
        <div className="flex flex-row gap-2 sm:gap-2 sm:flex-row sm:items-center">
          <div className="size-24 py-4">
            <FloatingLabel variant="standard" label="Fill in" color="success" disabled={activado} />
          </div>
          <p>I have worked on projects where I have had to apply knowledge in React, JavaScript, HTML, CSS, Tailwind CSS, Material UI, Astro, Figma among others</p>
        </div>
        <div className="flex flex-row gap-2 sm:gap-2 sm:flex-row sm:items-center">
          <div className="size-24 py-4">
            <FloatingLabel variant="standard" label="Fill in" color="success" disabled={activado} />
          </div>
          <p>In addition, I worked with development teams using agile methodologies such as Scrum.</p>
        </div>
        <div className="flex flex-row gap-2 sm:gap-2 sm:flex-row sm:items-center">
          <div className="size-24 py-4">
            <FloatingLabel variant="standard" label="Fill in" color="success" disabled={activado} />
          </div>
          <p>Also I think, I could be a good candidate for the Frontend group, as I consider myself a creative person who pays attention to detail.</p>
        </div>

        <div className="flex items-center space-x-4">
          <button type="button" 
              className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-8"
              onClick={handlePractice}
              disabled={isButtonDisabled}
              style={{ backgroundColor: isButtonDisabled ? "gray" : "blue"}}
            >Empezar
            </button>   
            <button type="button" 
              className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-8"
              onClick={handlePractice}
              disabled={isButtonDisabled}
              style={{ backgroundColor: isButtonDisabled ? "blue" : "gray"}}
            >Finalizado
            </button>
        </div>
      </div>
    </div>
  )
}

export default Misactividades