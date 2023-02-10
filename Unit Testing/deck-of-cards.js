function deckOfCards(array){
    function cards(face, suit){
        const faces =  [
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'J',
            'Q',
            'K',
            'A',
        ]
    
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }
    
        if(!faces.includes(face)){
            throw new TypeError('Invalid face')
        }
        else if(!suits.hasOwnProperty(suit)){
            throw TypeError('Invalid suit')
        }
    
        const result = {
            face,
            suit,
            toString(){return `${this.face}${suits[this.suit]}`}
        }
        return result
    }
    let deck = []
    for(let card of array){
        let currentCard = card.split('')
        let currentSuit = currentCard.pop()
        let currentFace = currentCard.join('')
        try{
            deck.push(cards(currentFace, currentSuit))
        } catch (err){
            console.log( 'Invalid card: ' + card)
            return
        }
    }
    console.log(deck.join(' '))
}

