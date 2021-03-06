import React from 'react'

export default function QuoteCard({ quote }) {
    return (
        <div className='container'>
            <div className="image">
                <img src={quote.image} alt={quote.character} />
            </div>
            <div className="text">
                <h3>{quote.character}</h3>
                <p>{quote.quote}</p>
            </div>
        </div>
    )
}
