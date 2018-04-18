import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-coordinador-vista',
  templateUrl: './coordinador-vista.component.html',
  styleUrls: ['./coordinador-vista.component.css']
})
export class CoordinadorVistaComponent implements OnInit {

  constructor() {

    this.Paso2 = new FormGroup({
      'nombreRiesgo': new FormControl('', Validators.required),
    })

    this.ModificarPlaya1 = new FormGroup({
      'Municipio': new FormControl('', Validators.required),
      'Provincia': new FormControl('', Validators.required),
      'CCAA': new FormControl('', Validators.required),
      'Longitud': new FormControl('', Validators.required),
      'Anchura': new FormControl('', Validators.required)
  })

  this.ModificarPlaya2 = new FormGroup({
    'Pendiente': new FormControl('', Validators.required),
    'GradoOcupacion': new FormControl('', Validators.required),
    'GradoUrbanizacion': new FormControl('', Validators.required),
    'DescripcionPlaya': new FormControl('', Validators.required),
    'PaseoMaritimo': new FormControl('', Validators.required),
    'FachadaLitoral': new FormControl('', Validators.required)
})

this.ModificarPlaya3 = new FormGroup({
  'CaracteristicasPlaya': new FormGroup({
    'ZonaFondeo': new FormControl(''),
    'Nudismo': new FormControl(''),
  }),
  'Morfologia': new FormControl('', Validators.required),
  'Composicion': new FormControl('', Validators.required),
  'TipoArena': new FormControl('', Validators.required),
  'TipoOleaje': new FormControl('', Validators.required),
  'NivelViento': new FormControl('', Validators.required)
})

this.ModificarPlaya4 = new FormGroup({
  'Acceso': new FormGroup({
    'Coche': new FormControl(''),
    'VehiculosEmergencia': new FormControl(''),
    'AccesoHelicopteros': new FormControl(''),
    'ZonaFondeo': new FormControl('')
  }),
  'Seguridad': new FormGroup({
    'AuxilioSalvamento': new FormControl(''),
    'AccesibilidadVehiculosEmergencias': new FormControl(''),
    'AccesibilidadEmbarcacionesRescate': new FormControl(''),
    'SeñalizacionPeligro': new FormControl(''),
    'AccesibilidadHelipuertoProvisional': new FormControl(''),
    'BaseOperaciones': new FormControl(''),
    'Banderas': new FormControl(''),
    'CartelesInformativos': new FormControl(''),
    'Megafonia': new FormControl(''),
    'BalizamientoTerrestre': new FormControl(''),
    'BalizamientoAcuatico': new FormControl('')
  })

})

/*this.ModificarPlaya5 = new FormGroup({
  'AuxilioSalvamento': new FormControl('', Validators.required),
  'PeriodoAxulio': new FormControl('', Validators.required),
  'HoraInicio': new FormControl('', Validators.required),
  'HoraFinal': new FormControl('', Validators.required)
})*/

this.ModificarPlaya6 = new FormGroup({
  'CarreteraProxima': new FormControl('', Validators.required),
  'Aparcamiento': new FormControl('', Validators.required),
  'AutoBus': new FormControl('', Validators.required),
  'Observaciones': new FormControl('', Validators.required)
})

this.ModificarPlaya7 = new FormGroup({
  'AspectosFisicosAmbientales': new FormGroup({
    'Vegetacion': new FormControl(''),
    'EspacioProtegido': new FormControl(''),
    'Actuaciones': new FormControl(''),
    'BanderaAzul': new FormControl('')
  }),
  'NombreHospital': new FormControl('', Validators.required),
  'Longitud': new FormControl('', Validators.required),
  'Latitud': new FormControl('', Validators.required)


})

this.ModificarPlaya8 = new FormGroup({
  'PuertoDeportivo': new FormControl('', Validators.required),
  'DistanciaPuertoPlaya': new FormControl('', Validators.required),
  'ObervacionesGenerales': new FormControl('', Validators.required)
})

  }

  ngOnInit() {
  }

//----------------------selects MODIFICAR PLAYA-------------------------------------
SN:String[] = ["Si", "No"];

//Paso#2
//Pendiente = {pendiente: ''};
ValoresPendiente:String[] = ["Angulo Suave", "Angulo Normal", "Pendiente Brusca"];

GradoOcupacion = {gradoOcupacion: ''};
ValoresGradoOcupacion:String[] = ["Alto", "Medio", "Suave"];

GradoUrbanizacion = {gradoUrbanizacion: ''};
ValoresGradoUrbanizacion:String[] = ["Rural", "Salvaje", "Urbano"];

PaseoMaritimo = {paseoMaritimo: ''};

FachadaLitoral = {fachadaLitoral: ''};
ValoresFachadaLitoral:String[] = ["Urbano", "Industrial", "Natural", "Acantilado"];

//Paso#3
Morfologia = {morfologia: ''};
ValoresMorfologia:String[] = ["Arenosa", "Rocosa"];

Composicion = {composicion: ''};
ValoresComposicion:String[] = ["Arena", "Grabilla", "Grava", "Bolos"];

TipoArena = {tipoArena: ''};
ValoresTipoArena:String[] = ["Dorada"];

TipoOlejae = {tipoOleaje: ''}; NivelViento = {nivelViento: ''};
ValoresTO_NV:String[] = ["Leve", "Mediano", "Fuerte"];

//Paso#5
AuxilioSalvamento = {axulioSalvamento: ''};

PeriodoAxulio = {periodoAxulio: ''};
ValoresPeriodoAuxlio:String[] = ["Anual", "Estival"];

//Paso#6
Aparcamiento = {aparcamiento: ''}; AutoBus = {autoBus: ''};
AparcamientoModo = {aparcamientoModo: ''};
ValoresAparcamientoModo:String[] = ["Libre", "Privado"];

//----------------------------------------------------------------------------------










  Paso1:Object={
    Municipio: null,
    Provincia: null,
    CCAA: null,
    Longitud: null,
    Anchura: null,
    Acepta: false,
  }


//Objetos de "Dat de Alta un Riesgo"

  Situacion:Object={
    Existe: false,
    Viento: false,
    Oleaje: false,
    Marea: false,
    variable: null
  }

  variables = [{
    codigo: "B",
    nombre: "Baja"
  },
  {
    codigo: "M",
    nombre: "Media"
  },
  {
    codigo: "A",
    nombre: "Alta"
  }]

  usuario:Object={
    nombre: null,
    apellido: null,
    correo: null,

  }

  public condiciones = {probabilidad: '', severidad: ''};
  public variablesRiesgo = [{var: 'Baja'}, {var: 'Media'}, {var: 'Alta'}];

  Riesgo = {riesgo: ''};
  Riesgos:String[] = ["Rocas", "Corrientes", "Zona de Rompiente(Olas)", "Actividades Deportivas y de Recreo", "Zambullidas desde Ricas",
                      "Estructura Fondo de Zona de Baño", "Rayos UVA/Efectos del sol sobre el cuerpo", "Animales Acuáticos y terrestres",
                      "Arena", "Objetos hinchables/sombrillas voladizos", "Riesgos por alta afluencia de personas", "Acceso Embarcaciones",
                      "Condiciones meteorológicas y marinas", "Desprendimientos", "Focos Contaminación", "Morfología/accidentes geográficos",
                       "Acceso a Playas"];

//-------------------Variables Select: Viento --------------------------------

  Nudos = {nudo: ''};
  ValoresNudos:String[] = ["-1", "1 - 3", "4 - 6", "7 - 10", "11 - 16",
                           "17 - 21", "22 - 27", "28 - 33", "34 - 40",
                           "41 - 47", "48 - 55", "56 - 63", "+64"];

//-------------------Variables Select: Oleaje --------------------------------

  TipoOleaje = {tipo: ''};
  ValoresTipoOleaje:String[] = ["0 - 0,1", "0,1 - 0,5", "0,5 - 1,25",
                                "1,25 - 2,5", "2,5 - 4", "4 - 6", "6 - 9", "9 - 14", "+14"];

//-------------------Variables Select: Marea --------------------------------

//-------------------Variables Select: (Compartidas) --------------------------------

Direccion = {direccion: ''};
ValoresDireccion:String[] = ["Norte(N)", "Nor-noroeste(NNO)", "Noroeste(NO)", "Oés-noroeste(ONO)",
                             "Oeste(O)", "Oés-suroeste(OSO)", "Sur-oeste(SO)", "Sur-suroeste(SSO)",
                             "Sur(S)", "Sur-sudeste(SSE)", "Sudeste(SE)", "Es-sudeste(ESE)", "Este(E)",
                             "Es-nordeste(ENE)", "Nordeste(NE)", "Nor-nordeste(NNE)", "Cualquier Direccion()"]



//-----------------------------------------------------------------------------------


//---------------Formularios para MODIFICAR PLAYA------------------------------------
    //Paso#1
    ModificarPlaya1:FormGroup;
    C_ModificarPlaya1(){
      console.log(this.ModificarPlaya1.value);
      this.ModificarPlayasiguiente();
    }
    //Paso#2
    ModificarPlaya2:FormGroup;
    C_ModificarPlaya2(){
      console.log(this.ModificarPlaya2.value);
      this.ModificarPlayasiguiente();
    }
    ModificarPlaya3:FormGroup;
    C_ModificarPlaya3(){
      console.log(this.ModificarPlaya3.value);
      this.ModificarPlayasiguiente();
    }
    ModificarPlaya4:FormGroup;
    C_ModificarPlaya4(){
      console.log(this.ModificarPlaya4.value);
      this.ModificarPlayasiguiente();
    }
    ModificarPlaya5:FormGroup;
    C_ModificarPlaya5(){
      console.log(this.ModificarPlaya5.value);
      this.ModificarPlayasiguiente();
    }
    ModificarPlaya6:FormGroup;
    C_ModificarPlaya6(){
      console.log(this.ModificarPlaya6.value);
      this.ModificarPlayasiguiente();
    }
    ModificarPlaya7:FormGroup;
    C_ModificarPlaya7(){
      console.log(this.ModificarPlaya7.value);
      this.ModificarPlayasiguiente();
    }
    ModificarPlaya8:FormGroup;
    C_ModificarPlaya8(){
      console.log(this.ModificarPlaya8.value);
      this.ModificarPlayasiguiente();
    }

    ModificarPlaya:number=0;

    ModificarPlayasiguiente(){
      if(this.ModificarPlaya<6)
      this.ModificarPlaya = this.ModificarPlaya+1;
    console.log(this.ModificarPlaya);
    }

    ModificarPlayaanterior(){
        if(this.ModificarPlaya>0)
        this.ModificarPlaya = this.ModificarPlaya-1;
      console.log(this.ModificarPlaya);
      }

  /*-------------Formularios para DAR ALTA UN RIESGO--------------------------------*/
  Paso2:FormGroup;
  DarAltaRiesgo:number=0;

  siguiente(){
    if(this.DarAltaRiesgo<4)
    this.DarAltaRiesgo = this.DarAltaRiesgo+1;
  console.log(this.DarAltaRiesgo);
  }

  anterior(){
      if(this.DarAltaRiesgo>0)
      this.DarAltaRiesgo = this.DarAltaRiesgo-1;
    console.log(this.DarAltaRiesgo);
    }

  guardarCambios(){
    console.log(this.DarAltaRiesgo);
    console.log(this.Paso2.value);
    this.siguiente();
  }


}
