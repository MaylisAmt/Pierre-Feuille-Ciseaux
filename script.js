const choixP1 = document.getElementById("choixP1")
const choixP2 = document.getElementById("choixP2")
let scoreP1 = 0
let scoreP2 = 0

const disableButtons = () => {
    document.getElementById("PierreP1").disabled = true;
    document.getElementById("FeuilleP1").disabled = true;
    document.getElementById("CiseauxP1").disabled = true;
    document.getElementById("PierreP2").disabled = true;
    document.getElementById("FeuilleP2").disabled = true;
    document.getElementById("CiseauxP2").disabled = true;
    document.getElementById("Joueur2").disabled = true;
}
const enableButtons = () => {
    document.getElementById("PierreP1").disabled = false;
    document.getElementById("FeuilleP1").disabled = false;
    document.getElementById("CiseauxP1").disabled = false;
    document.getElementById("PierreP2").disabled = false;
    document.getElementById("FeuilleP2").disabled = false;
    document.getElementById("CiseauxP2").disabled = false;
}

const disableButtonsPlayer2 = () => {
    document.getElementById("PierreP2").disabled = true;
    document.getElementById("FeuilleP2").disabled = true;
    document.getElementById("CiseauxP2").disabled = true;
    document.getElementById("valider").disabled = true;
}

const disableButtonsPlayer1 = () => {
    document.getElementById("PierreP1").disabled = true;
    document.getElementById("FeuilleP1").disabled = true;
    document.getElementById("CiseauxP1").disabled = true;
    document.getElementById("Joueur2").disabled = true;
}

const enableButtonsPlayer2 = () => {
    document.getElementById("PierreP2").disabled = false;
    document.getElementById("FeuilleP2").disabled = false;
    document.getElementById("CiseauxP2").disabled = false;
    document.getElementById("valider").disabled = false;
}

const enableButtonsPlayer1 = () => {
    document.getElementById("PierreP1").disabled = false;
    document.getElementById("FeuilleP1").disabled = false;
    document.getElementById("CiseauxP1").disabled = false;
    document.getElementById("Joueur2").disabled = false;
}

disableButtonsPlayer2()



document.getElementById("PierreP1").addEventListener("click", () =>{
    choixP1.innerText = "P"
    console.log("J'ai cliqué sur pierre")
})
document.getElementById("FeuilleP1").addEventListener("click", () =>{
    choixP1.innerText = "F"
    console.log("J'ai cliqué sur feuille")
})
document.getElementById("CiseauxP1").addEventListener("click", () =>{
    choixP1.innerText = "C"
    console.log("J'ai cliqué sur ciseaux")
})

document.getElementById("Joueur2").addEventListener("click", () => {
    enableButtonsPlayer2()
    disableButtonsPlayer1()
    choixP1.style.display = "none"
})

document.getElementById("PierreP2").addEventListener("click", () =>{
    choixP2.innerText = "P"
    console.log("J2 a cliqué sur pierre")
})
document.getElementById("FeuilleP2").addEventListener("click", () =>{
    choixP2.innerText = "F"
    console.log("J2 a cliqué sur feuille")
})
document.getElementById("CiseauxP2").addEventListener("click", () =>{
    choixP2.innerText = "C"
    console.log("J2 a cliqué sur ciseaux")
})

const gagnant = () => {
    if (scoreP1 == 3) {
        document.getElementById("messageWinner").innerText = "Joueur 1 a gagné !"
        scoreP1 = 0
        scoreP2 = 0
        disableButtons()
        let button = document.createElement("button")
        button.innerHTML = "Rejouer"
        button.id = "rejouer"
        document.getElementById("boutonRejouer").appendChild(button)
        document.getElementById("rejouer").addEventListener("click", () => {
            choixP1.innerText = ""
            choixP2.innerText = ""
            document.getElementById("compteurPlayer1").innerText = "Score Joueur 1 : 0"
            document.getElementById("compteurPlayer2").innerText = "Score Joueur 2 : 0"
            document.getElementById("messageWinner").innerText = ""
            enableButtonsPlayer1()
            document.getElementById("boutonRejouer").removeChild(button)
        })
    }
    else if (scoreP2 == 3) {
        document.getElementById("messageWinner").innerText = "Joueur 2 a gagné !"
        scoreP2 = 0
        scoreP1 = 0
        disableButtons()
        let button = document.createElement("button")
        button.innerHTML = "Rejouer"
        button.id = "rejouer"
        document.getElementById("boutonRejouer").appendChild(button)
        document.getElementById("rejouer").addEventListener("click", () => {
            choixP1.innerText = ""
            choixP2.innerText = ""
            document.getElementById("compteurPlayer1").innerText = "Score Joueur 1 : 0"
            document.getElementById("compteurPlayer2").innerText = "Score Joueur 2 : 0"
            document.getElementById("messageWinner").innerText = ""
            enableButtonsPlayer1()
            document.getElementById("boutonRejouer").removeChild(button)
        })
    }
}



document.getElementById("valider").addEventListener("click", () => {
    if (choixP1.innerText == "P" && choixP2.innerText == "P"){
        choixP1.innerText = ""
    }
    else if (choixP1.innerText == "P" && choixP2.innerText == "F"){
        scoreP2 += 1
        document.getElementById("compteurPlayer2").innerText = "Score Joueur 2 : " + scoreP2
        choixP1.innerText = ""
        choixP2.innerText = ""
    }
    else if (choixP1.innerText == "P" && choixP2.innerText == "C"){
        scoreP1 += 1
        document.getElementById("compteurPlayer1").innerText = "Score Joueur 1 : " + scoreP1
        choixP1.innerText = ""
        choixP2.innerText = ""
    }
    else if (choixP1.innerText == "F" && choixP2.innerText == "P"){
        scoreP1 += 1
        document.getElementById("compteurPlayer1").innerText = "Score Joueur 1 : " + scoreP1
        choixP1.innerText = ""
        choixP2.innerText = ""
    }
    else if (choixP1.innerText == "C" && choixP2.innerText == "P"){
        scoreP2 += 1
        document.getElementById("compteurPlayer2").innerText = "Score Joueur 2 : " + scoreP2
        choixP1.innerText = ""
        choixP2.innerText = ""
    }
    else if (choixP1.innerText == "F" && choixP2.innerText == "F"){
        choixP1.innerText = ""
        choixP2.innerText = ""
        
    }
    else if (choixP1.innerText == "F" && choixP2.innerText == "C"){
        scoreP2 += 1
        document.getElementById("compteurPlayer2").innerText = "Score Joueur 2 : " + scoreP2
        choixP1.innerText = ""
        choixP2.innerText = ""
    }
    else if (choixP1.innerText == "C" && choixP2.innerText == "C"){
        choixP1.innerText = ""
        choixP2.innerText = ""
    }
    else if (choixP1.innerText == "C" && choixP2.innerText == "F"){
        scoreP1 += 1
        document.getElementById("compteurPlayer1").innerText = "Score Joueur 1 : " + scoreP1
        choixP1.innerText = ""
        choixP2.innerText = ""
    }

    enableButtonsPlayer1()
    disableButtonsPlayer2()
    gagnant()
    choixP1.style.display = "block"
})




