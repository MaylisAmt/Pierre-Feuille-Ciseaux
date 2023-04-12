const choixP1 = document.getElementById("choixP1")
const choixP2 = document.getElementById("choixP2")
let scoreP1 = 0
let scoreP2 = 0

const comparaison = (choixP1, choixP2) => {
    if (scoreP1 == 0 && scoreP2 == 0){
        console.log("Test")
    }
    // else if(choixP1.innerText == "P" && choixP2.innerText == "F"){
    //     scoreP2 += 1
    //     document.getElementById("compteurPlayer2").innerText = scoreP2
    // }
    // else if (choixP1.innerText == "P" && choixP2.innerText == "C"){
    //     scoreP1 += 1
    //     document.getElementById("compteurPlayer1").innerText = scoreP1
    // }
    // else if (choixP1.innerText == "F" && choixP2.innerText == "F"){
        
    // }
    // else if (choixP1.innerText == "F" && choixP2.innerText == "C"){
    //     scoreP2 += 1
    //     document.getElementById("compteurPlayer2").innerText = scoreP2
    // }
    // else if (choixP1.innerText == "C" && choixP2.innerText == "C"){
        
    // }
    // else if (choixP1.innerText == "C" && choixP2.innerText == "F"){
    //     scoreP1 += 1
    //     document.getElementById("compteurPlayer1").innerText = scoreP1
    // }
}

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

document.getElementById("valider").addEventListener("click", () => {
    if (choixP1.innerText == "P" && choixP2.innerText == "P"){
        
    }
    else if(choixP1.innerText == "P" && choixP2.innerText == "F"){
        scoreP2 += 1
        document.getElementById("compteurPlayer2").innerText = scoreP2
    }
    else if (choixP1.innerText == "P" && choixP2.innerText == "C"){
        scoreP1 += 1
        document.getElementById("compteurPlayer1").innerText = scoreP1
    }
    else if (choixP1.innerText == "F" && choixP2.innerText == "P"){
        scoreP1 += 1
        document.getElementById("compteurPlayer1").innerText = scoreP1
    }
    else if (choixP1.innerText == "C" && choixP2.innerText == "P"){
        scoreP2 += 1
        document.getElementById("compteurPlayer2").innerText = scoreP2
    }
    else if (choixP1.innerText == "F" && choixP2.innerText == "F"){
        
    }
    else if (choixP1.innerText == "F" && choixP2.innerText == "C"){
        scoreP2 += 1
        document.getElementById("compteurPlayer2").innerText = scoreP2
    }
    else if (choixP1.innerText == "C" && choixP2.innerText == "C"){
        
    }
    else if (choixP1.innerText == "C" && choixP2.innerText == "F"){
        scoreP1 += 1
        document.getElementById("compteurPlayer1").innerText = scoreP1
    }
})