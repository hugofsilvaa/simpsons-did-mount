import React from 'react'
import QuoteCard from './QuoteCard'

export default function QuoteList({ quotes }) {
    return (
        <div>
            {quotes.map(quote => <QuoteCard key={quote.quote} quote={quote} />)}
        </div>
    )
}
