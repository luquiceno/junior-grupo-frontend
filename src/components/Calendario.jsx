function Calendario() {

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center pt-10">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-indigo-900 dark:text-white">
              Mi Calendario
            </h2>
          </div>

        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 md:text-1xl font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  08:00 - 09:00
                </p>
                <h3 className="md:text-1xl font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Clases con @Martha</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 md:text-1xl font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  09:00 - 10:00
                </p>
                <h3 className="md:text-1xl font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Gramática</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 md:text-1xl font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  10:00 - 11:00
                </p>
                <h3 className="md:text-1xl font-semibold text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">Clases para practicar (hablar y escuchar)</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 md:text-1xl font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  11:00 - 12:00
                </p>
                <h3 className="md:text-1xl font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Descanso</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 md:text-1xl font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  12:00 - 13:00
                </p>
                <h3 className="md:text-1xl font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Tandem con @Juan</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 md:text-1xl font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  13:00 - 14:00
                </p>
                <h3 className="md:text-1xl font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Reunión con la comunidad</a>
                </h3>
              </div>
  
              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 md:text-1xl font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  16:00 - 14:00
                </p>
                <h3 className="md:text-1xl font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Practicar para el test</a>
                </h3>
              </div>

              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-32 md:text-1xl font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  17:00 - 14:00
                </p>
                <h3 className="md:text-1xl font-semibold text-gray-900 dark:text-white">
                  <a href="#" className="hover:underline">Realizar tareas grupales</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Calendario