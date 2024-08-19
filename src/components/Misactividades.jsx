import { useState } from "react";

function Misactividades() {
   
  const originalText = [
    "Hi, My name",
    "Lucia. I ",
    "Front-End developer. I want to be part of the Front-end working groups. ",
    "have experience contributing to open source projects and I consider myself ",
    "creative person who pays attention to detail. In addition, ",
    "have worked with development teams using agile methodologies such as Scrum."
  ];

  const wordOptions = ["is", "am", "I", "a"];
  const rightAnswers = ["is", "am", "I", "a", "I"];
  const [wordId, setWordId] = useState(-1);
  const [selectedWords, setSelectedWords] = useState(["", "", "", "", ""]);
  const [isCorrecting, setIsCorrecting] = useState(false);
 
  
  const spanList = [];
  for (let i=0; i < originalText.length; i++) {
    spanList.push({content: originalText[i], isExerciseWord: false});
    if (i < rightAnswers.length) {
      const content = (selectedWords[i] === "") ? "____" : selectedWords[i];
      spanList.push({
        content: ` ${content} `,
        isExerciseWord: true,
        wordId: i
      });
    }
  }

  function setSelectedWord(word) {
    const newWords = [...selectedWords];
    newWords[wordId] = word;
    setSelectedWords(newWords);
  } 

  function howManyRightAnswers() {
    let answer = 0;
    for (let i=0; i < selectedWords.length; i++) {
      if (selectedWords[i] === rightAnswers[i]) answer++;
    }
    return answer;   
  }

  function getNumberEmptyWords() {
    let answer = 0;
    for (let i=0; i < selectedWords.length; i++) {
      if (selectedWords[i] === "") answer++;
    }
    return answer;   
  } 

  function isButtonDisabled() {
    return getNumberEmptyWords() > 0
  } 

  return (
    <div className="h-screen text-lg py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <h2 className="mb-2 text-2xl tracking-tight font-extrabold text-indigo-900 dark:text-white pt-16">Práctica en Inglés</h2>
      <div className="font-normal text-gray-700 dark:text-gray-400 mx-20 pt-4">
        <div className="flex flex-col gap-2 sm:gap-2 sm:flex-col sm:items-center"> 
          <p className="font-bold py-4">Para iniciar el ejercicio, haz click sobre alguna línea azul.</p>
          <div className="mb-6">
            {spanList.map((item, index) => {
              if (item.isExerciseWord) {
                return (
                  <span 
                    key={`exerciseWord_${item.wordId}`}
                    style={{
                      color: isCorrecting ? (selectedWords[item.wordId] === rightAnswers[item.wordId] ? 'green' : 'red') : 'blue',
                      fontWeight: (item.wordId === wordId) ? 'bold' : 'normal'}}
                    onClick={() => {setWordId(item.wordId)}}>{item.content}
                  </span>
                )
              } else {
                  return (
                    <span key={`text_${index}`}>{item.content}</span>
                  )
              }
            })}
          </div>
         
          {wordId >= 0 && (
            <div>
              <p className="font-bold pt-4 pb-8">Estas son las palabras que debes usar para completar los espacios en blanco. Haz click sobre la palabra.</p>
              {wordOptions.map((item, index) => (
                <button 
                  key={`answer_${index}`} 
                  onClick={() => {setSelectedWord(item)}}
                  className="px-4 py-2 m-2 bg-indigo-300 text-dark rounded-md font-semibold mb-8"
                >  {item}  
                </button>
              ))}
            </div>
          )}

          {isCorrecting ? (
            <div className="flex flex-col gap-2 sm:gap-2 sm:flex-col sm:items-center">
              <button type="button" 
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => setIsCorrecting(false)}
                style={{ backgroundColor: "green"}}
                >Continuar Revisando
              </button>  
              <p className="mt-6 font-bold text-indigo-600">&#8680; Tuviste {howManyRightAnswers()} respuestas correctas de {selectedWords.length}</p>
            </div>
            ) : (
              <>  
                <button type="button" 
                  className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={() => setIsCorrecting(true)}
                  disabled={isButtonDisabled()}
                  style={{ backgroundColor: isButtonDisabled() ? "gray" : "blue" }}
                  >Verificar Respuesta
                </button>  
              </> 
          )}
        </div>
      </div> 
    </div>
  )
}

export default Misactividades