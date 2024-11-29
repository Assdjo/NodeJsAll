const readline = require("readline");
const { v4: uuidv4 } = require("uuid");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});




const fs = require('fs')

let m1 = 0
let m2 = 0
let m3 = 0
let m4 = 0
let matStart = 'BJGLI'

const cheminFichier = './dieubeni.json'

let employe = [];
function loadEmployes() {
    if (fs.existsSync(cheminFichier)) {
        const data = fs.readFileSync(cheminFichier)
        const loadedData = JSON.parse(data);
        employe = loadedData.employes || [];
        m1 = loadedData.m1 || 0; // Recharger m1, m2, m3, m4
        m2 = loadedData.m2 || 0;
        m3 = loadedData.m3 || 0;
        m4 = loadedData.m4 || 0;
       
    }

    return []
}

loadEmployes()

function saveEmployes(employe) {
    const dataToSave = {
        employes: employe,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4
    };
    fs.writeFileSync(cheminFichier, JSON.stringify(dataToSave, null, 2), 'utf-8')
}



function matriculeEmp() {
    // Incrémentation des parties du matricule
    m1++;
    if (m1 === 10) {
        m1 = 0;
        m2++;
    }
    if (m2 === 10) {
        m2 = 0;
        m3++;
    }
    if (m3 === 10) {
        m3 = 0;
        m4++;
    }

    // Formatage avec des zéros devant si nécessaire
    return matStart + 
           m4.toString().padStart(1, '0') + 
           m3.toString().padStart(1, '0') + 
           m2.toString().padStart(1, '0') + 
           m1.toString().padStart(1, '0');
}




function addEmp() {
    r1.question("Quel est le nom de votre employé ? ", (nom) => {
        r1.question("Quel est le prénom de votre employé ? ", (prenom) => {
            r1.question("Quel est l'âge de votre employé ? ", (age) => {
                r1.question("Quel est le type de contrat de votre employé ? ", (contrat) => {
                    const uuid = uuidv4();
                    const matricule = matriculeEmp()
                    employe.push({ id: uuid,nom: nom, prenom: prenom, age: parseInt(age), matricule : matricule, contrat: contrat });
                    saveEmployes(employe)
                    console.log("Employé ajouté :", employe);
                    r1.close();
                });
            });
        });
    });
}

function modifEmp() {
    r1.question("Entrez l'id de l'employé que vous souhaitez modifier : ", (idModif) => {
        let empIndex = employe.findIndex((empl) => empl.id === idModif);
        
        if (empIndex === -1) {
            console.log("Aucun employé trouvé avec ce id.");
            r1.close();
            return;
        }

        console.log("Vous pouvez modifier le \n 'nom' \n 'prénom' \n 'age' \n 'contrat' \n 'all'");

        r1.question("Que souhaitez-vous modifier ? ", (key) => {
            switch (key) {
                case 'nom':
                    r1.question("Entrez le nouveau nom : ", (newName) => {
                        employe[empIndex].nom = newName;
                        saveEmployes(employe);
                        console.log("Nom modifié.");
                        r1.close();
                    });
                    break;
                case 'prénom':
                    r1.question("Entrez le nouveau prénom : ", (newPrenom) => {
                        employe[empIndex].prenom = newPrenom;
                        saveEmployes(employe);
                        console.log("Prénom modifié.");
                        r1.close();
                    });
                    break;
                case 'age':
                    r1.question("Entrez le nouvel âge : ", (newAge) => {
                        employe[empIndex].age = parseInt(newAge);
                        saveEmployes(employe);
                        console.log("Âge modifié.");
                        r1.close();
                    });
                    break;
                case 'contrat':
                    r1.question("Entrez le nouveau type de contrat : ", (newContrat) => {
                        employe[empIndex].contrat = newContrat;
                        saveEmployes(employe);
                        console.log("Contrat modifié.");
                        r1.close();
                    });
                    break;
                case 'all':
                    
                    r1.question("Entrez le nouveau nom : ", (newName) => {
                        employe[empIndex].nom = newName;
                        r1.question("Entrez le nouveau prénom : ", (newPrenom) => {
                            employe[empIndex].prenom = newPrenom;
                            r1.question("Entrez le nouvel âge : ", (newAge) => {
                                employe[empIndex].age = parseInt(newAge);
                                r1.question("Entrez le nouveau type de contrat : ", (newContrat) => {
                                    employe[empIndex].contrat = newContrat;
                                    saveEmployes(employe);
                                    console.log("Tous les champs modifiés.");
                                    r1.close();
                                });
                            });
                        });
                    });
                    break;
                default:
                    console.log("Option non valide, veuillez réessayer.");
                    modifEmp();
                    break;
            }
        });
    });
}

function afficheEmp() {
    r1.question("entrez le matricule de l'employé dont vous souhaitez les informations : ", (search)=>{
        let emp = employe.filter((emp)=>emp.matricule == search)
        if (emp.length > 0) {
            console.log(`nom : ${emp[0].nom} \n prénom : ${emp[0].prenom} \n âge : ${emp[0].age} \n type de contrat : ${emp[0].contrat} \n`);
        } else {
            console.log(`l'employé est introuvable`);
        }

        r1.close();
        
    })
    
}
function deleteEmp() {
    console.log('\n entrez "1" pour supprimer un seul employé \n entrez "2" pour supprimer tout les employés \n')
    r1.question("que souhaitez vous faire ? (si vous souhaitez ne pas continuer taper une touche différent de 1 et 2) ", (choice)=>{

    choice = parseFloat(choice);

        switch (choice) {
            case 1:
                r1.question("entrez le nom de l'employé que vous souhaitez supprimer : ", (del)=>{
                    let DelEmploye = employe.filter((emp)=>emp.nom == del)
                    if (DelEmploye.length > 0) {
                    employe = employe.filter((emp)=>emp.nom != del)
                        saveEmployes(employe);
                        console.log(`employé supprimer avec succès \n ${employe}`);
                    } else {
                        console.log(`l'employé est introuvable`);
                    }
            
                    r1.close();
                    
                })
                break;
        
            case 2:
                r1.question("\n voulez vous vraiment supprimer tout les employés ? vous ne pourrez plus recuppérer ces informations ! oui /non ? ", (del)=>{
                   if (del == "oui") {
                    
                    saveEmployes([]);
                    console.log(`tout les employés ont été supprimer avec succès !`);

                   } else {
                    console.log(`\n choix annnuler avec succès !`);
                    deleteEmp()

                   }
                   r1.close();
                })
                break;
        
            default:
                console.log('\nAnnulation...');
                setTimeout(() => {

                console.log('\nAnnulation avec succès !\n');

                NosEmployes();
                }, 2000);
                
                
                break;
        }
       
    })
    
}


function NosEmployes() {
    console.log('Faites un choix : \n 1. Ajouter un employé \n 2. Modifier un employé \n 3. Supprimer un employé \n 4. Afficher un employé');

r1.question("Quel est votre choix ? ", (choix) => {
    choix = parseFloat(choix);
    switch (choix) {
        case 1:
            console.log("Vous avez choisi d'ajouter un employé.");
            addEmp(); 
            break;
        case 2:
            console.log("Vous avez choisi de modifier un employé.");
            modifEmp()
            break;
        case 3:
            console.log("Vous avez choisi de supprimer un employé.");
            deleteEmp()
            break;
        case 4:
            console.log("Vous avez choisi d'afficher un employé.");
            afficheEmp()
            break;
            default:
                console.log("Vous avez choisi de ne rien faire.");
                handleInvalidChoice(1); 
                break;
        }
    });
}

function handleInvalidChoice(tentative) {
    if (tentative < 3) { 
        r1.question("Veuillez réessayer. Quel est votre choix ? ", (choix) => {
            choix = parseFloat(choix);
            switch (choix) {
                case 1:
                    console.log("Vous avez choisi d'ajouter un employé.");
                    addEmp(); 
                    break;
                case 2:
                    console.log("Vous avez choisi de modifier un employé.");
                    modifEmp();
                    break;
                case 3:
                    console.log("Vous avez choisi de supprimer un employé.");
                    deleteEmp();
                    break;
                case 4:
                    console.log("Vous avez choisi d'afficher un employé.");
                    afficheEmp();
                    break;
                default:
                    console.log("Choix invalide, veuillez réessayer.");
                    handleInvalidChoice(tentative + 1); 
                    break;
            }
        });
    } else {
        console.log("Nombre de tentatives atteint !");
        r1.close(); 
    }
}

NosEmployes()
