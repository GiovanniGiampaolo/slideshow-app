import React from 'react'

const pageInitState = 0

function Slides({slides}) {

    const [currentPage, setCurrentPage] = React.useState(pageInitState)

    const maxLen = slides.length -1

    const handleRestart = () => {
        setCurrentPage(pageInitState)
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
    }

    const hadnleNext = () => {
        currentPage !== maxLen && setCurrentPage(currentPage + 1)
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={handleRestart}>Restart</button>
                <button data-testid="button-prev" disabled={currentPage===0} className="small" onClick={handlePrev}>Prev</button>
                <button data-testid="button-next" disabled={currentPage===maxLen} className="small" onClick={hadnleNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentPage].title}</h1>
                <p data-testid="text">{slides[currentPage].text}</p>
            </div>
        </div>
    )

}

export default Slides
