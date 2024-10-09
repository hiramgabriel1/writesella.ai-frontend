export default function status({estado }: {estado: string}){ 
    return(
        <div className={`px-3 py-2 ${estado === "nuevo" ? "bg-blue-500" : "bg-transparent"}  text-white rounded-full`}>
            nuevo
        </div>
    );
};