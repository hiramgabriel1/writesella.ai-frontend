import SatisfactionChartt from "./grafico";
import AgentCommentsChart from "./chart";
const AgentProductivity = () => {
    return (
      
            <section className="agent-productivity bg-white p-6 rounded-lg shadow mb-8">

        <SatisfactionChartt/>
        <h2 className="text-2xl font-bold mb-9 mt-10 text-gray-800">Productividad de los agentes</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg shadow-md">
          <p className="text-sm text-gray-600 font-medium mb-1">EDAD MEDIA DE LOS TICKETS</p>
          <p className="text-3xl font-bold text-gray-800">1.9 días</p>
          <p className="text-sm text-green-500 font-medium">14% reducido con respecto a la semana anterior</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg shadow-md">
          <p className="text-sm text-gray-600 font-medium mb-1">MEDIANA DE LA PRIMERA RESPUESTA</p>
          <p className="text-3xl font-bold text-gray-800">1m32s</p>
          <p className="text-sm text-green-500 font-medium">3% reducido con respecto a la semana anterior</p>
        </div>
        <AgentCommentsChart/>

        </div>
        
      </section>
    );
  };
  
  export default AgentProductivity;
  