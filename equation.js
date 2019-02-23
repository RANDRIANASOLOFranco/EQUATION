function equation(){
    var nbr1 = document.getElementById("valeur1").value;
    var nbr2 = document.getElementById("valeur2").value;
    var nbr3 = document.getElementById("valeur3").value;
    if (nbr1==0){
        if(nbr2!=0){
            document.getElementById("nbraff00").innerHTML = ("C'est une equation du prémier degré");
            document.getElementById("nbraff00").innerHTML = ("Il n'y a qu'un seul solution.");
            resultat1 = -(parseInt(nbr3)) / (parseInt(nbr2));
            document.getElementById("nbraff1").innerHTML = (" x' = " + parseFloat(resultat1));
        }
        else{
            document.getElementById("nbraff1").innerHTML = ("Impossible.");
        }
    }
    else{
        var deltat = (parseInt(nbr2)*parseInt(nbr2))-(4*parseInt(nbr1)*parseInt(nbr3));
        if (deltat>0){
            resultat1 = (-(parseInt(nbr2))-(Math.sqrt(deltat)))/(2*(parseInt(nbr1)));
            resultat2 = ((-(parseInt(nbr2)))+(Math.sqrt(deltat)))/(2*(parseInt(nbr1)));
            document.getElementById("nbraff").innerHTML = (" ∆ = " + parseFloat(deltat));
            document.getElementById("nbraff0").innerHTML = ("Les discriminant est positif.");
            document.getElementById("nbraff00").innerHTML = ("Il y a deux racines.");
            document.getElementById("nbraff1").innerHTML = (" x' = " + parseFloat(resultat1));
            document.getElementById("nbraff2").innerHTML = (" x'' = " + parseFloat(resultat2));
        }
        else if(deltat<0){
            document.getElementById("nbraff").innerHTML = (" ∆ = " + parseFloat(deltat));
            document.getElementById("nbraff0").innerHTML = ("Les discriminant est négatif.");
            document.getElementById("nbraff00").innerHTML = ("Il n'y a pas de racine réelle.");
        }
        else{
            document.getElementById("nbraff").innerHTML = (" ∆ = " + parseFloat(deltat));
            document.getElementById("nbraff00").innerHTML = ("Les discriminant est nul.");
            document.getElementById("nbraff00").innerHTML = ("Il y a une racine double.");
            resultat1 = -(parseInt(nbr2))/(2*parseInt(nbr1));
            document.getElementById("nbraff1").innerHTML = (" x'' = x' = " + parseFloat(resultat1));
        }
    }
}

