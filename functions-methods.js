// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken.
// Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben,
// dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft.
// Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// // getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
//
console.log('-opdracht1-');

function getEmailDomain(emailaddress) {
    const searchAtDomain = emailaddress.indexOf("@");
    const domainAddress = emailaddress.substring(searchAtDomain + 1);
    return domainAddress;
}

const domainOne = getEmailDomain("n.eeken@novi-education.nl");
const domainTwo = getEmailDomain("t.mellink@novi.nl");
const domainThree = getEmailDomain("a.wiersma@outlook.com");
console.log(domainOne,domainTwo,domainThree);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht.
// De functie checkt of het emailadres een novi domein heeft (medewerker),
// een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
console.log('-opdracht2-');

function typeOfEmail(emailDomain) {
    const searchAtDomain = emailDomain.indexOf("@");
    const domainAddress = emailDomain.substring(searchAtDomain + 1);
    {
        if (domainAddress === "novi-education.nl") {
            return "Student";
        } else if (domainAddress === "novi.nl") {
            return "Medewerker";
        } else {
            return ("Extern");
        }
    }
}

const emailOne = typeOfEmail("n.eeken@novi-education.nl");
const emailTwo = typeOfEmail("t.mellink@novi.nl");
const emailThree = typeOfEmail("novi.nlaapjesk@outlook.com");
const emailFour = typeOfEmail("a.wiersma@outlook.com");

console.log(emailOne, emailTwo, emailThree, emailFour);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres
// verwacht en checkt of het emailadres valide is.
// De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
console.log('-opdracht3-');

function checkEmailValidity(valide) {
    const conditie1 = (valide.includes("@"));
    const noKomma = !valide.includes(",");
    const lastPoint = !valide.endsWith(".");
    const positieApenstaart = valide.indexOf("@");
    const positieLaatstePunt = valide.lastIndexOf(".");
    const conditie2 = positieLaatstePunt > positieApenstaart;
    return conditie1 && conditie2 && noKomma && lastPoint;
}

const eeken = checkEmailValidity("n.eeken@novi.nl");
const tess = checkEmailValidity("tessmellink@novi.nl");
const eeken2 = checkEmailValidity("n.eekenanovi.nl");
const eeken3 = checkEmailValidity("n.eeken@novinl.");
const tess2 = checkEmailValidity("tessmellink@novi,nl");
console.log(eeken, tess, eeken2, eeken3, tess2);