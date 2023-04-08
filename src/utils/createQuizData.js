import { shuffle } from "./array/shuffle"

export const createQuizData = (data) => {
    console.log('a', data)

    let tempQuizdata


    const extractAnswers = (answer) => {
        //  Shuffle data passed in
        tempQuizdata = shuffle(data).concat()
        console.log('shuffled ', tempQuizdata)
        console.log('answer ', answer)
        //  Create data 
        let tempAnswers = [answer]
        tempQuizdata = tempQuizdata.filter(item => item.answer !== answer)
        console.log('c', tempQuizdata)

        for (var i = 0; i < 2; i++) {
            const tempAnswer = tempQuizdata[Math.floor(Math.random() * Math.floor(tempQuizdata.length))].answer
            console.log(tempAnswer)
            tempQuizdata = tempQuizdata.filter(item => item.answer !== tempAnswer)
            tempAnswers.push(tempAnswer)
        }
        console.log('c', tempAnswers)

        return tempAnswers
    }
    const list = data.map((item) => {
        return { question: item.question, answers: extractAnswers(item.answer), correct: false }
    })
    console.log(list)
    return list
}
