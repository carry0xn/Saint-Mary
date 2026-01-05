import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LevelTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
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
      question: "The company's financial difficulties were _____ by poor management decisions.",
      options: ["exacerbated", "alleviated", "mitigated", "facilitated"],
      correct: 0,
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
    setShowIntro(true)
    setScore(0)
  }

  const startTest = () => {
    setShowIntro(false)
  }

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  if (showIntro) {
    return (
      <section className="py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0">
                <div className="card-body text-center p-5">
                  <div className="mb-4">
                    <i className="fas fa-graduation-cap fa-4x text-primary"></i>
                  </div>
                  <h1 className="display-4 mb-4 text-primary">Test de Nivel de Inglés</h1>
                  <p className="lead mb-4">Evalúa tu nivel de inglés con nuestro test profesional</p>
                  
                  <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                      <div className="p-3 bg-light rounded">
                        <i className="fas fa-clock fa-2x text-info mb-2"></i>
                        <h6>Duración</h6>
                        <p className="mb-0 small">10-15 minutos</p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="p-3 bg-light rounded">
                        <i className="fas fa-question-circle fa-2x text-warning mb-2"></i>
                        <h6>Preguntas</h6>
                        <p className="mb-0 small">{questions.length} preguntas</p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="p-3 bg-light rounded">
                        <i className="fas fa-certificate fa-2x text-success mb-2"></i>
                        <h6>Niveles</h6>
                        <p className="mb-0 small">A1 - C2</p>
                      </div>
                    </div>
                  </div>

                  <div className="alert alert-info text-start" role="alert">
                    <h6 className="fw-bold mb-3"><i className="fas fa-info-circle me-2"></i>Instrucciones:</h6>
                    <ul className="mb-0">
                      <li>Lee cada pregunta cuidadosamente</li>
                      <li>Selecciona la opción que consideres correcta</li>
                      <li>Puedes navegar hacia atrás para revisar respuestas</li>
                      <li>Al final recibirás tu nivel y recomendaciones</li>
                      <li>No uses diccionarios ni herramientas de traducción</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <button 
                      onClick={startTest}
                      className="btn btn-primary btn-lg px-5 py-3 me-3"
                    >
                      <i className="fas fa-play me-2"></i>
                      Comenzar Test
                    </button>
                    <Link to="/courses" className="btn btn-outline-secondary btn-lg">
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
                    {level.level === "A1" && "Te recomendamos nuestros cursos básicos para principiantes. Perfecto para empezar tu aventura con el inglés."}
                    {level.level === "A2" && "Te recomendamos nuestros cursos elementales. Ya tienes una base, ¡sigamos construyendo!"}
                    {level.level === "B1" && "Te recomendamos nuestros cursos intermedios. Estás en el camino correcto para dominar el inglés."}
                    {level.level === "B2" && "Te recomendamos nuestros cursos intermedio-avanzado. ¡Muy buen nivel! Sigamos perfeccionando."}
                    {level.level === "C1" && "Te recomendamos nuestros cursos avanzados y preparación para certificaciones. Excelente dominio del idioma."}
                    {level.level === "C2" && "¡Excepcional! Te recomendamos nuestros cursos de perfeccionamiento y preparación Cambridge. Tienes un nivel nativo."}
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold mb-3">¿Qué significa tu nivel?</h6>
                    <div className="text-start small text-muted">
                      {level.level === "A1" && "Puedes entender frases básicas y presentarte. Es el primer paso en tu aprendizaje."}
                      {level.level === "A2" && "Puedes comunicarte en situaciones simples y hablar de temas familiares."}
                      {level.level === "B1" && "Puedes manejar situaciones de viaje y expresar opiniones sobre temas conocidos."}
                      {level.level === "B2" && "Puedes interactuar con fluidez y entender textos complejos sobre temas variados."}
                      {level.level === "C1" && "Puedes usar el idioma de manera flexible y efectiva para propósitos académicos y profesionales."}
                      {level.level === "C2" && "Tienes un dominio completo del idioma, comparable al de un hablante nativo educado."}
                    </div>
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
      <style>
        {`
          .option-button:hover {
            background-color: #0d6efd !important;
            border-color: #0d6efd !important;
            color: white !important;
          }
          
          .option-button:focus {
            background-color: white !important;
            border-color: #0d6efd !important;
            color: #0d6efd !important;
            box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
          }
          
          .option-button span {
            color: #0d6efd;
          }
          
          .option-button:hover span {
            color: white !important;
          }

          @media (hover: none) and (pointer: coarse) {
            .option-button:hover {
              background-color: white !important;
              border-color: #dee2e6 !important;
              color: #212529 !important;
            }
            
            .option-button:hover span {
              color: #0d6efd !important;
            }
          }
        `}
      </style>
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
                          className="btn btn-outline-primary w-100 text-start py-3 option-button"
                          style={{ 
                            border: '2px solid #dee2e6', 
                            borderRadius: '10px',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={() => handleAnswer(index)}
                        >
                          <span className="me-3 fw-bold">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div>
                    {currentQuestion > 0 && (
                      <button 
                        onClick={goToPrevious}
                        className="btn btn-outline-secondary"
                      >
                        <i className="fas fa-arrow-left me-2"></i>
                        Anterior
                      </button>
                    )}
                  </div>
                  
                  <Link to="/courses" className="text-muted text-decoration-none">
                    <i className="fas fa-times me-2"></i>
                    Salir del Test
                  </Link>
                  
                  <div className="text-muted small">
                    {currentQuestion > 0 ? `${currentQuestion} respuestas guardadas` : 'Primera pregunta'}
                  </div>
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