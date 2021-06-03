import { useState } from 'react'
import './App.css'
import data from './data.json'
import DataList from './DataList'
import Quiz from './Quiz'
import Results from './Results'
import { views } from './constants/constants'

function App() {

  const [currentView, setView] = useState(views.LEARN)

  const openQuiz = () => {
    setView(views.QUIZ)
  }

  const openLearn = () => {
    setView(views.LEARN)
  }

  const openResults = () => {
    setView(views.RESULTS)
  }

  let view
  switch (currentView) {
    case views.LEARN:
      view = <DataList data={data} />
      break;
    case views.QUIZ:
      view = <Quiz openResults={openResults} data={data} />
      break;
      case views.RESULTS:
        view = <Results data={data} />
        break;
    default:
      view = <DataList data={data} />
      break;
  }

  const styles = {
    container: {
      marginTop: 10,
      textAlign: 'center',
      color: '#184e77'
    }
  }
  return (
    <div style={styles.container}>
      <header>
        <button onClick={openQuiz}>Quiz</button>
        <button onClick={openLearn}>Learn</button>
        <button onClick={openResults}>Results</button>
      </header>
      {view}
    </div>
  )
}

export default App
