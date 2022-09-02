class tarea {
	constructor(nombre,id) {
	  this.nombre = nombre;
	  this.id = id;
	}
  }
  
  const tareas = [];
  let option = 0;
  do {
	option = parseInt(prompt("Ingrese 1 para agregar una nueva tarea, 2 para ver todas las tareas, 3 para eliminar la ultima tarea, 5 para salir"));
	switch (option) {
	  case 1:
		agregarTarea(tareas);
		break;
	  case 2:
		verTodasLasTareas(tareas);
		break;
		case 3:
			quitarTarea(tareas);
		break;
	  default:
		break;
	}
  } while (option != 5);
  
  // agregar tarea 
  function agregarTarea(tareas) {
	let nombre = prompt("Ingresar tarea");
	let newUser = new tarea(nombre,tareas.length + 1);
	tareas.push(newUser);
	alert("Se agregó una nueva tarea ", newUser);
  }
  
  // ver lista de tarea
  function verTodasLasTareas(tareas) {
	for (const tarea of tareas) {
	  console.log(tarea);
	}
  }

  // quitar ultima tarea ingresada
  function quitarTarea(tareas){
	tareas.pop()
	alert("Se elimino la ultima tarea")
  }