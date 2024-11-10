
export default function status({estado }: {estado: string}){ 
    
    const Estado: string = estado;
    var Titulo = "nuevo";
    var Color: string = "bg-blue-500";
  
    if(Estado === "nuevo"){
        Titulo = "Nuevo";
        Color = "bg-blue-500";
    }
    if(Estado === "pendiente"){
        Titulo = "Pendiente";
        Color = "bg-yellow-500";
    }
    if(Estado === "abierto"){
        Titulo = "Abierto";
        Color = "bg-red-500";
    }
    return(
        <div className={`flex justify-center items-center p-2 font-medium ${Color} text-white rounded-full`}>
            {Titulo}
        </div>
    );
};