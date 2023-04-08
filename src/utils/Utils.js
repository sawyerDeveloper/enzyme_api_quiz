class Utils{

    static createQuizData = (data) => {
            console.log('a',data)

        let tempQuizdata
        
        
        const extractAnswers = (answer) => {
            //  Shuffle data passed in
            tempQuizdata = Utils.shuffle(data).concat()
            console.log('shuffled ',tempQuizdata)
            console.log('answer ',answer)
            //  Create data 
            let tempAnswers = [answer]
            tempQuizdata = tempQuizdata.filter(item => item.answer !== answer)
            console.log('c',tempQuizdata)

            for(var i = 0 ; i < 2 ; i++){
                const tempAnswer = tempQuizdata[Math.floor(Math.random() * Math.floor(tempQuizdata.length))].answer
                console.log(tempAnswer)
                tempQuizdata = tempQuizdata.filter(item => item.answer !== tempAnswer)
                tempAnswers.push(tempAnswer)
            }
            console.log('c',tempAnswers)

            return tempAnswers
        }
        const list = data.map((item) => {
            return {question: item.question, answers: extractAnswers(item.answer), correct: false}
        })
        console.log(list)
        return list
    }

    static shuffle = (array) => {
        let newArray = structuredClone(array)
        let currentIndex = array.length
        let temporaryValue
        let randomIndex
      
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          temporaryValue = array[currentIndex]
          newArray[currentIndex] = array[randomIndex]
          newArray[randomIndex] = temporaryValue
        }
      
        return newArray
      }
}

export default Utils