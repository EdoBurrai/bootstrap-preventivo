

//Tutte le variabili
const BackendDev = 20.50
const FrontendDev = 15.30
const ProjAnalysys = 33.60
const JobTypeElement = document.getElementById('JobType')
const TimeTot = 10;
const Discount = document.getElementById('PromText')
const DiscountCode = ['YHDNU32' , 'JANJC63' , 'PWKCN25' , 'SJDPO96', 'POCIE24'];
const DiscountPerc = 0.25 

const button = document.getElementById('form-prev')


//Validazione del form
  const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation()
        } else {
            PriceCalc();
        }
  
        form.classList.add('was-validated')
      }, false)
    })  


  
//Calcolo del prezzo
function PriceCalc() {
   

    const selected = JobTypeElement.value
    
    let JobSelected = 0;
    if (selected === 'BackendDev') {
        JobSelected = BackendDev;
    } else if (selected === 'FrontendDev') {
        JobSelected = FrontendDev;
    } else if (selected === 'ProjAnalysys') {
        JobSelected = ProjAnalysys;
    } else if (selected === '') {
    }
    
    // Prezzo SENZA sconto
    const TotTemp = TimeTot * JobSelected;
    

    // Prezzo CON sconto
    const Sconto = Discount.value
    const ScontoAppl = DiscountCode.includes(Sconto)
    let PriceFinale = 0;

    if (ScontoAppl) {

        PriceFinale = TotTemp - TotTemp * DiscountPerc  
         
    } else if(Sconto ==''){
        PriceFinale = TotTemp 
    } else {
        alert('Codice promozzioanle non valido')  
        PriceFinale = TotTemp 
    }
    
    //Formattazione del prezzo finale 
    PriceFinale = PriceFinale.toFixed(2)
    const String = PriceFinale.toString();
    const NumDiv = String.split('.');
    const Int = NumDiv[0];
    const Dec = NumDiv[1];
    const PriceFinalFinal = '<b>' + ' &euro; ' + Int + '</b>' + "<span style = 'color:gray;'>" + ',' +  Dec + "</span>";
    document.getElementById('price-formatted').innerHTML = PriceFinalFinal
}