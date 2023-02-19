class FootballTeam {
    constructor(clubName, country) {
      this.clubName = clubName
      this.country = country
      this.invitedPlayers = []
    }
  
    newAdditions(footballPlayers) {
      let invitedPlayers = this.invitedPlayers
  
      footballPlayers.forEach((player) => {
        let [name, age, playerValue] = player.split('/')
        playerValue = parseInt(playerValue)
  
        let existingPlayer = invitedPlayers.find((p) => p.name === name)
  
        if (existingPlayer) {
          if (playerValue > existingPlayer.playerValue) {
            existingPlayer.playerValue = playerValue
          }
        } else {
          invitedPlayers.push({ name, age: parseInt(age), playerValue })
        }
      });
  
      let names = invitedPlayers.map((player) => player.name).join(', ')
      return `You successfully invite ${names}.`
    }
  
    signContract(selectedPlayer) {
      let [name, playerOffer] = selectedPlayer.split('/')
      playerOffer = parseInt(playerOffer)
  
      let player = this.invitedPlayers.find((p) => p.name === name)
  
      if (!player) {
        throw new Error(`${name} is not invited to the selection list!`)
      }
  
      if (playerOffer < player.playerValue) {
        let priceDifference = player.playerValue - playerOffer
        throw new Error(
          `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
        )
      }
  
      player.playerValue = 'Bought'
  
      return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
  
    ageLimit(name, age) {
      let player = this.invitedPlayers.find((p) => p.name === name)
  
      if (!player) {
        throw new Error(`${name} is not invited to the selection list!`)
      }
  
      if (player.age >= age) {
        return `${name} is above age limit!`
      }
  
      let ageDifference = age - player.age
  
      if (ageDifference < 5) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
      }
  
      return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
    }
  
    transferWindowResult() {
      let players = this.invitedPlayers
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((player) => `Player ${player.name}-${player.playerValue}`)
        .join('\n');
  
      return `Players list:\n${players}`
    }
  }
  