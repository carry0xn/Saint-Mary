import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LevelTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    // A1 - Beginner
    {
      question: "What _____ your name?",
      options: ["are", "is", "am", "be"],
      correct: 1,
      level: "A1"
    },
    {
      question: "I _____ from Spain.",
      options: ["am", "is", "are", "be"],
      correct: 0,
      level: "A1"
    },
    {
      question: "She _____ a teacher.",
      options: ["am", "is", "are", "have"],
      correct: 1,
      level: "A1"
    },
    {
      question: "How _____ are you?",
      options: ["much", "many", "old", "long"],
      correct: 2,
      level: "A1"
    },
    // A2 - Elementary
    {
      question: "I _____ to the cinema yesterday.",
      options: ["go", "went", "going", "will go"],
      correct: 1,
      level: "A2"
    },
    {
      question: "She said she _____ tired.",
      options: ["is", "was", "were", "are"],
      correct: 1,
      level: "A2"
    },
    {
      question: "I _____ English for three years.",
      options: ["study", "am studying", "have studied", "studied"],
      correct: 2,
      level: "A2"
    },
    {
      question: "Can you help me _____ my homework?",
      options: ["with", "for", "to", "at"],
      correct: 0,
      level: "A2"
    },
    // B1 - Intermediate
    {
      question: "If it _____ tomorrow, we'll stay inside.",
      options: ["rain", "rains", "will rain", "rained"],
      correct: 1,
      level: "B1"
    },
    {
      question: "I wish I _____ speak French fluently.",
      options: ["can", "could", "will", "would"],
      correct: 1,
      level: "B1"
    },
    {
      question: "The book _____ by thousands of people.",
      options: ["has read", "has been read", "have read", "have been read"],
      correct: 1,
      level: "B1"
    },
    {
      question: "He said he _____ call me the next day.",
      options: ["will", "would", "can", "could"],
      correct: 1,
      level: "B1"
    },
    // B2 - Upper Intermediate
    {
      question: "_____ you mind if I opened the window?",
      options: ["Will", "Would", "Do", "Are"],
      correct: 1,
      level: "B2"
    },
    {
      question: "The project should _____ by next Friday.",
      options: ["complete", "be completed", "have completed", "completing"],
      correct: 1,
      level: "B2"
    },
    {
      question: "She asked me _____ I had finished my homework.",
      options: ["that", "if", "what", "when"],
      correct: 1,
      level: "B2"
    },
    // C1 - Advanced
    {
      question: "Not only _____ late, but he also forgot his presentation.",
      options: ["he was", "was he", "he had been", "had he been"],
      correct: 1,
      level: "C1"
    },
    {
      question: "_____ circumstances would I lend him money again.",
      options: ["Under no", "In no", "On no", "At no"],
      correct: 0,
      level: "C1"
    },
    {
      question: "The teacher advised us _____ harder for the exam.",
      options: ["study", "studying", "to study", "that we study"],
      correct: 2,
      level: "C1"
    },
    // C2 - Proficiency
    {
      question: "His argument was so _____ that everyone was convinced.",
      options: ["compelling", "compulsive", "comprehensive", "competent"],
      correct: 0,
      level: "C2"
    },
    {
      question: "The politician's speech was full of _____ designed to avoid the real issues.",
      options: ["euphemisms", "metaphors", "analogies", "platitudes"],
      correct: 3,
      level: "C2"
    }
  ]

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers, selectedOption]
    setAnswers(newAnswers)

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate final score
      let totalScore = 0
      newAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
          totalScore += 1
        }
      })
      setScore(totalScore)
      setShowResults(true)
    }
  }

  const getLevel = () => {
    const percentage = (score / questions.length) * 100
    
    if (percentage >= 90) return { level: "C2", name: "Proficiency", color: "#dc3545" }
    if (percentage >= 80) return { level: "C1", name: "Advanced", color: "#fd7e14" }
    if (percentage >= 65) return { level: "B2", name: "Upper Intermediate", color: "#ffc107" }
    if (percentage >= 50) return { level: "B1", name: "Intermediate", color: "#20c997" }
    if (percentage >= 35) return { level: "A2", name: "Elementary", color: "#17a2b8" }
    return { level: "A1", name: "Beginner", color: "#28a745" }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const level = getLevel()
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <section className="py-5" style={{ backgroundColor: '#b6b6b6ff', minHeight: '100vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0">
                <div className="card-body text-center p-5">
                  <div className="mb-4">
                    <i className="fas fa-trophy fa-4x" style={{ color: level.color }}></i>
                  </div>
                  <h2 className="display-4 mb-3">¡Test Completado!</h2>
                  <div className="mb-4">
                    <h3 style={{ color: level.color }}>Tu nivel es: {level.level}</h3>
                    <p className="fs-5 text-muted">{level.name}</p>
                  </div>
                  
                  <div className="row text-center mb-4">
                    <div className="col-6">
                      <h4 className="text-primary">{score}/{questions.length}</h4>
                      <p className="text-muted">Respuestas Correctas</p>
                    </div>
                    <div className="col-6">
                      <h4 className="text-success">{percentage}%</h4>
                      <p className="text-muted">Puntuación</p>
                    </div>
                  </div>

                  <div className="alert alert-light border" role="alert">
                    <h6 className="fw-bold">Recomendación:</h6>
                    {level.level === "A1" && "Te recomendamos nuestros cursos básicos para principiantes."}
                    {level.level === "A2" && "Te recomendamos nuestros cursos elementales."}
                    {level.level === "B1" && "Te recomendamos nuestros cursos intermedios."}
                    {level.level === "B2" && "Te recomendamos nuestros cursos intermedio-avanzado."}
                    {level.level === "C1" && "Te recomendamos nuestros cursos avanzados y preparación para certificaciones."}
                    {level.level === "C2" && "¡Excelente! Te recomendamos nuestros cursos de perfeccionamiento y preparación Cambridge."}
                  </div>

                  <div className="mt-4">
                    <button 
                      onClick={resetTest}
                      className="btn btn-outline-primary btn-lg me-3"
                    >
                      <i className="fas fa-redo me-2"></i>
                      Repetir Test
                    </button>
                    <Link to="/courses" className="btn btn-primary btn-lg">
                      <i className="fas fa-book me-2"></i>
                      Ver Cursos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="text-primary mb-0">Test de Nivel de Inglés</h2>
                  <span className="badge bg-secondary fs-6">
                    {currentQuestion + 1} de {questions.length}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="progress mb-4" style={{ height: '8px' }}>
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-4">{questions[currentQuestion].question}</h4>
                  
                  <div className="row g-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="col-12">
                        <button
                          className="btn btn-outline-primary w-100 text-start py-3"
                          style={{ border: '2px solid #dee2e6', borderRadius: '10px' }}
                          onClick={() => handleAnswer(index)}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#0d6efd'
                            e.target.style.borderColor = '#0d6efd'
                            e.target.style.color = 'white'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'white'
                            e.target.style.borderColor = '#dee2e6'
                            e.target.style.color = 'black'
                          }}
                        >
                          <span className="me-3 fw-bold text-primary">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Link to="/courses" className="text-muted text-decoration-none">
                    <i className="fas fa-arrow-left me-2"></i>
                    Volver a Cursos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LevelTest
