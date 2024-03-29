import { shuffle } from "./array/shuffle"

export const createQuizData = (data) => {

    let quizdata

    const extractAnswers = (answer) => {

        //  Shuffle data passed in
        quizdata = shuffle(data).concat()

        //  Create data 
        let answers = [answer]

        //  Remove item that has the correct answer
        quizdata = quizdata.filter(item => item.answer !== answer)

        //  Loop through each choice for multiple choices
        for (var i = 0; i < 2; i++) {

            //  Randomly choose an index between 0 and the length of quizData
            const index = Math.floor(Math.random() * Math.floor(quizdata.length))
            const answer = quizdata[index].answer
            answers.push(answer)

            //  Remove the answer we are using from the temporary quzData array
            quizdata = quizdata.filter(item => item.answer !== answer)
        }

        return answers
    }
    
    const list = data.map((item) => {
        return {
            question: item.question,
            answers: extractAnswers(item.answer), correct: false
        }
    })
    console.log('list', list)
    return list
}
