// Custom input file

(function (document, window, index) {
  var inputs = document.querySelectorAll(".inputfile");
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener("change", function (e) {
      var fileName = "";
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute("data-multiple-caption") || "").replace(
          "{count}",
          this.files.length
        );
      else fileName = e.target.value.split("\\").pop();

      if (fileName) label.querySelector("span").innerHTML = fileName;
      else label.innerHTML = labelVal;
    });

    // Firefox bug fix
    input.addEventListener("focus", function () {
      input.classList.add("has-focus");
    });
    input.addEventListener("blur", function () {
      input.classList.remove("has-focus");
    });
  });
})(document, window, 0);


// Logo de la empresa para PDF

var fileTag = document.getElementById("file-1"),
    preview = document.getElementById("preview");
    
fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

// Descargar PDF

    function pruebaDivAPdf() {
		var element = document.getElementById('imprimir');
		var opt = {
		  margin:       [1,1,1,1],
		  filename:     'calendario.pdf',
		  image:        { type: 'jpeg', quality: 0.98 },
		  html2canvas:  { scale: 4 },
		  jsPDF:        { unit: 'cm', orientation: 'landscape' }
		};

		// New Promise-based usage:
		html2pdf().set(opt).from(element).save();
    }

// Festivos locales

jQuery(".calendar li").click(function(){
    jQuery(this).toggleClass( "festivo-local" )
});

// Festivos nacionales

	jQuery(".enero .calendar li:nth-child(1)").toggleClass( "festivo-nacional" );
    jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
	jQuery(".abril .calendar li:nth-child(18)").toggleClass( "festivo-nacional" );
	jQuery(".mayo .calendar li:nth-child(1)").toggleClass( "festivo-nacional" );
	jQuery(".agosto .calendar li:nth-child(15)").toggleClass( "festivo-nacional" );
	//jQuery(".octubre .calendar li:nth-child(12)").toggleClass( "festivo-nacional" );
	jQuery(".noviembre .calendar li:nth-child(1)").toggleClass( "festivo-nacional" );
	jQuery(".diciembre .calendar li:nth-child(6)").toggleClass( "festivo-nacional" );
	jQuery(".diciembre .calendar li:nth-child(8)").toggleClass( "festivo-nacional" );
	jQuery(".diciembre .calendar li:nth-child(25)").toggleClass( "festivo-nacional" );

// Festivos autonómicos

/**
			jQuery(". .calendar li:nth-child()").toggleClass( "festivo-autonomico" );
			jQuery(". .calendar li:nth-child()").toggleClass( "festivo-autonomico" );
			jQuery(". .calendar li:nth-child()").toggleClass( "festivo-autonomico" );
			jQuery(". .calendar li:nth-child()").toggleClass( "festivo-autonomico" );
			jQuery(". .calendar li:nth-child()").toggleClass( "festivo-autonomico" );
			jQuery(". .calendar li:nth-child()").toggleClass( "festivo-autonomico" );
*/

jQuery('#ccaa').change(function(){
    var selection = jQuery('#ccaa').val();
    // jQuery('.field').hide();
	jQuery(".calendar li").removeClass("festivo-autonomico");
    switch(selection){
        case 'AndaluciaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".febrero .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			// jQuery(".mayo .calendar li:nth-child(2)").toggleClass( "festivo-autonomico" );
			jQuery(".octubre .calendar li:nth-child(13)").toggleClass( "festivo-autonomico" );
			//jQuery(".diciembre .calendar li:nth-child(9)").toggleClass( "festivo-autonomico" );
            break;
        case 'AragonDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(23)").toggleClass( "festivo-autonomico" );
			// jQuery(".mayo .calendar li:nth-child(2)").toggleClass( "festivo-autonomico" );
			jQuery(".octubre .calendar li:nth-child(13)").toggleClass( "festivo-autonomico" );
            break;
        case 'AsturiasDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".septiembre .calendar li:nth-child(8)").toggleClass( "festivo-autonomico" );
			jQuery(".octubre .calendar li:nth-child(13)").toggleClass( "festivo-autonomico" );
			//jQuery(".diciembre .calendar li:nth-child(9)").toggleClass( "festivo-autonomico" );
            break;
        case 'BalearesDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".marzo .calendar li:nth-child(1)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".diciembre .calendar li:nth-child(26)").toggleClass( "festivo-autonomico" );
            break;
        case 'CanariasDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".mayo .calendar li:nth-child(30)").toggleClass( "festivo-autonomico" );
			// jQuery(".diciembre .calendar li:nth-child(26)").toggleClass( "festivo-autonomico" );
            break;
        case 'CantabriaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".julio .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".septiembre .calendar li:nth-child(15)").toggleClass( "festivo-autonomico" );
			// jQuery(".diciembre .calendar li:nth-child(26)").toggleClass( "festivo-autonomico" );
            break;
        case 'LaManchaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".mayo .calendar li:nth-child(31)").toggleClass( "festivo-autonomico" );
			jQuery(".junio .calendar li:nth-child(19)").toggleClass( "festivo-autonomico" );
			//jQuery(".mayo .calendar li:nth-child(31)").toggleClass( "festivo-autonomico" );
            break;
        case 'LeonDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(23)").toggleClass( "festivo-autonomico" );
			// jQuery(".julio .calendar li:nth-child(25)").toggleClass( "festivo-autonomico" );
			jQuery(".octubre .calendar li:nth-child(13)").toggleClass( "festivo-autonomico" );
            break;
        case 'CatalunyaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(21)").toggleClass( "festivo-autonomico" );
			//jQuery(".mayo .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".junio .calendar li:nth-child(24)").toggleClass( "festivo-autonomico" );
			jQuery(".septiembre .calendar li:nth-child(11)").toggleClass( "festivo-autonomico" );
			jQuery(".diciembre .calendar li:nth-child(26)").toggleClass( "festivo-autonomico" );
            break;
        case 'ValenciaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".marzo .calendar li:nth-child(19)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(21)").toggleClass( "festivo-autonomico" );
			jQuery(".junio .calendar li:nth-child(24)").toggleClass( "festivo-autonomico" );
			jQuery(".octubre .calendar li:nth-child(9)").toggleClass( "festivo-autonomico" );
            break;
        case 'ExtremaduraDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".septiembre .calendar li:nth-child(8)").toggleClass( "festivo-autonomico" );
			jQuery(".octubre .calendar li:nth-child(13)").toggleClass( "festivo-autonomico" );
			//jQuery(".diciembre .calendar li:nth-child(9)").toggleClass( "festivo-autonomico" );
            break;
        case 'GaliciaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			// jQuery(".febrero .calendar li:nth-child(13)").toggleClass( "festivo-autonomico" );
			jQuery(".mayo .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			// jQuery(".junio .calendar li:nth-child(24)").toggleClass( "festivo-autonomico" );
			jQuery(".julio .calendar li:nth-child(25)").toggleClass( "festivo-autonomico" );
            break;
        case 'MadridDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".mayo .calendar li:nth-child(2)").toggleClass( "festivo-autonomico" );
			jQuery(".julio .calendar li:nth-child(25)").toggleClass( "festivo-autonomico" );
			// jQuery(".diciembre .calendar li:nth-child(26)").toggleClass( "festivo-autonomico" );
            break;
        case 'MurciaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			// jQuery(".enero .calendar li:nth-child(2)").toggleClass( "festivo-autonomico" );
			jQuery(".marzo .calendar li:nth-child(19)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".junio .calendar li:nth-child(9)").toggleClass( "festivo-autonomico" );
			//jQuery(".diciembre .calendar li:nth-child(9)").toggleClass( "festivo-autonomico" );
            break;
        case 'NavarraDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(28)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(21)").toggleClass( "festivo-autonomico" );
			jQuery(".julio .calendar li:nth-child(25)").toggleClass( "festivo-autonomico" );
			jQuery(".diciembre .calendar li:nth-child(3)").toggleClass( "festivo-autonomico" );
            break;
        case 'PaisVascoDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(21)").toggleClass( "festivo-autonomico" );
			jQuery(".julio .calendar li:nth-child(25)").toggleClass( "festivo-autonomico" );
			// jQuery(".septiembre .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
            break;
        case 'RiojaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(21)").toggleClass( "festivo-autonomico" );
			jQuery(".junio .calendar li:nth-child(9)").toggleClass( "festivo-autonomico" );
			// jQuery(".diciembre .calendar li:nth-child(26)").toggleClass( "festivo-autonomico" );
            break;
        case 'CeutaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			//jQuery(".marzo .calendar li:nth-child(31)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".junio .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".agosto .calendar li:nth-child(5)").toggleClass( "festivo-autonomico" );
            break;
        case 'MelillaDates':
			jQuery(".enero .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			jQuery(".marzo .calendar li:nth-child(31)").toggleClass( "festivo-autonomico" );
			jQuery(".abril .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
			jQuery(".junio .calendar li:nth-child(6)").toggleClass( "festivo-autonomico" );
			// jQuery(".septiembre .calendar li:nth-child(8)").toggleClass( "festivo-autonomico" );
			jQuery(".septiembre .calendar li:nth-child(17)").toggleClass( "festivo-autonomico" );
            break;
    }
});

jQuery(".catalan").hide();
jQuery(".euskera").hide();
jQuery(".gallego").hide();
jQuery(".valenciano").hide();
jQuery(".espanol").show();
jQuery('#idioma').change(function(){
    var selection = jQuery('#idioma').val();
    switch(selection){
        case 'espanol':
			jQuery(".catalan").hide();
			jQuery(".euskera").hide();
			jQuery(".gallego").hide();
			jQuery(".valenciano").hide();
			jQuery(".espanol").show();
            break;
        case 'catalan':
			jQuery(".espanol").hide();
			jQuery(".euskera").hide();
			jQuery(".gallego").hide();
			jQuery(".valenciano").hide();
			jQuery(".catalan").show();
            break;
        case 'euskera':
			jQuery(".espanol").hide();
			jQuery(".catalan").hide();
			jQuery(".gallego").hide();
			jQuery(".valenciano").hide();
			jQuery(".euskera").show();
            break;
        case 'gallego':
			jQuery(".espanol").hide();
			jQuery(".catalan").hide();
			jQuery(".euskera").hide();
			jQuery(".valenciano").hide();
			jQuery(".gallego").show();
            break;
        case 'valenciano':
			jQuery(".espanol").hide();
			jQuery(".catalan").hide();
			jQuery(".euskera").hide();
			jQuery(".gallego").hide();
			jQuery(".valenciano").show();
            break;
    }
});


const driver = window.driver.js.driver;

const driverObj = driver({
  animate: true,
  doneBtnText: 'Hecho',
  closeBtnText: 'Cerrar',
  nextBtnText: 'Siguiente',
  prevBtnText: 'Anterior',
  steps: [
  {
    element: '#ccaa',
    popover: {
      className: 'first-step-popover-class',
      title: 'Selecciona tu comunidad',
      description: 'Se cargarán automáticamente los festivos autonómicos.',
      position: 'bottom'
    }
  },
  {
    element: '#file-input-logo-empresa',
    popover: {
      title: 'Añade el logo de tu empresa',
      description: 'Para obtener un mejor resultado, recomendamos un formato rectangular.',
      position: 'bottom'
    }
  },
  {
    element: '#idioma',
    popover: {
      title: 'Escoge el idioma del calendario',
      description: 'Por defecto aparece en español. Puedes escoger también catalán, euskera, gallego o valenciano.',
      position: 'bottom'
    }
  },
  {
    element: '#nombre-empresa',
    popover: {
      title: 'Introduce el nombre de tu empresa',
      description: 'Puedes poner el nombre de la empresa o dejarlo vacío.',
      position: 'bottom'
    }
  },
  {
    element: '.febrero > .calendar > .first-day',
    popover: {
      title: 'Marca los festivos locales',
      description: 'Selecciona, directamente en el calendario, los días festivos de tu localidad.',
      position: 'top'
    }
  },
  {
    element: '#info',
    popover: {
      title: 'Personaliza la información',
      description: 'Añade el nombre o dirección de tu centro de trabajo, el horario y las observaciones.',
      position: 'top'
    }
  },
  {
    element: '#descargar',
    popover: {
      title: 'Descarga el calendario',
      description: 'Pulsa el botón para generar y descargar el calendario.',
      position: 'top'
    }
  },
]
	});