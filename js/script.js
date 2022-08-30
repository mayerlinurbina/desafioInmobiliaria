const propiedades = [
    {
        nombre: "Departamento 1",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "/assets/images/casa1.jpeg",
        cuartos: 2,
        metros: 170,
    },
    {
        nombre: "Departamento 2",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "/assets/images/casa2.jpeg",
        cuartos: 3,
        metros: 130,
    },
    {
        nombre: "Departamento 3",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "/assets/images/casa3.jpeg",
        cuartos: 4,
        metros: 80,
    },
    {
        nombre: "Departamento 4",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "/assets/images/casa4.png",
        cuartos: 1,
        metros: 6,
    },
    {
        nombre: "Departamento 5",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "/assets/images/casa5.jpeg",
        cuartos: 2,
        metros: 200,
    },
    {
        nombre: "Departamento 6",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "/assets/images/casa6.jfif",
        cuartos: 3,
        metros: 500,
    },
];

const pintarPropiedades = (propiedades) => {
    const galeria = document.getElementById("galeria");
    const totalPropiedades = document.getElementById('total')

    totalPropiedades.innerHTML = `Total: ${propiedades.length}`

    let contenidoGaleria = "";

    for (let propiedad of propiedades) {
        const cardPropiedad = `
        <div class="card" style="width: 18rem">
            <img src="${propiedad.src}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title text-center">${propiedad.nombre}</h5>
                <div class="row mb-2">
                    <div class="col-6">
                        <p class="card-text text-center">Cuartos: ${propiedad.cuartos}</p>
                    </div>
                    <div class="col-6">
                        <p class="card-text text-center">Metros: ${propiedad.metros}m2</p>
                    </div>
                </div>
                <p class="card-text text-center">${propiedad.descripcion}</p>
                <div class="d-flex justify-content-center">
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
        `;

        contenidoGaleria += cardPropiedad;
    }

    galeria.innerHTML = contenidoGaleria;
};

const filtrar = () => {
    const cantidadCuartos = Number(document.getElementById('input-cantidad-cuartos').value)
    const metrosCuadradosDesde = Number(document.getElementById('input-metros-cuadrados-desde').value)
    const metrosCuadradosHasta = Number(document.getElementById('input-metros-cuadrados-hasta').value)

    let propiedadesFiltradas = [];

    console.log({
        cantidadCuartos,
        metrosCuadradosDesde,
        metrosCuadradosHasta
    })

    if (!cantidadCuartos || !metrosCuadradosDesde || !metrosCuadradosHasta) {
        alert('Llena todos los campos');
        return;
    }

    for (let propiedad of propiedades) {
        if (
            cantidadCuartos === propiedad.cuartos &&
            propiedad.metros >= metrosCuadradosDesde &&
            propiedad.metros <= metrosCuadradosHasta
        ) {
            propiedadesFiltradas.push(propiedad)
        }
    }

    pintarPropiedades(propiedadesFiltradas)
}

const btnBuscar = document.getElementById('btn-buscar');
btnBuscar.addEventListener('click', filtrar)

pintarPropiedades(propiedades);
