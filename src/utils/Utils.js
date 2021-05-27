class Utils{
    static createQuizData = (data) => {

        let tempQuizdata
        
        const extractAnswers = (answer) => {
            tempQuizdata = Utils.shuffle(data).concat()
            let tempAnswers = [answer]
            tempQuizdata = tempQuizdata.filter(item => item.description !== answer)

            for(var i = 0 ; i < 2 ; i++){
                const tempAnswer = tempQuizdata[Math.floor(Math.random() * Math.floor(tempQuizdata.length))].description
                tempQuizdata = tempQuizdata.filter(item => item.description !== tempAnswer)
                tempAnswers.push(tempAnswer)
            }

            return tempAnswers
        }

        return data.map((item) => {
            return {question: item.selector, answers: extractAnswers(item.description), correct: false}
        })
    }

    static shuffle = (array) => {
        
        let currentIndex = array.length
        let temporaryValue
        let randomIndex
      
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          temporaryValue = array[currentIndex]
          array[currentIndex] = array[randomIndex]
          array[randomIndex] = temporaryValue
        }
      
        return array
      }
}

export default Utils