import {Paginator} from 'primereact/paginator';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { DataTableProps } from 'primereact/datatable'; 
import { useState } from 'react';
import Status from './Status';

export default function Table() {
    
    const [data, SetData] = useState<any | null>([
        {id:1, estado: "nuevo", asunto: "crear un nuevo proyecto", solicitante: "Javier Ortiz", canal: "Email", tipo: "Proyecto", cesionario: "Javier Ortiz", fecha: "2021-10-10"},
        {id:2, estado: "abierto", asunto: "crear un nuevo proyecto", solicitante: "Javier Ortiz", canal: "Email", tipo: "Proyecto", cesionario: "Javier Ortiz", fecha: "2021-10-10"},
        {id:1, estado: "nuevo", asunto: "crear un nuevo proyecto", solicitante: "Javier Ortiz", canal: "Email", tipo: "Proyecto", cesionario: "Javier Ortiz", fecha: "2021-10-10"},
        {id:1, estado: "pendiente", asunto: "crear un nuevo proyecto", solicitante: "Javier Ortiz", canal: "Email", tipo: "Proyecto", cesionario: "Javier Ortiz", fecha: "2021-10-10"},
        {id:1, estado: "nuevo", asunto: "crear un nuevo proyecto", solicitante: "Javier Ortiz", canal: "Email", tipo: "Proyecto", cesionario: "Javier Ortiz", fecha: "2021-10-10"},
    
    ]);

    return(
        <DataTable value={data} className='flex overflow-y-auto selection:bg-black max-h-[380px]'
         showHeaders  rowsPerPageOptions={[5, 10, 20]}  >
            <Column selectionMode='multiple'></Column>
            <Column field="id" header="ID" sortable></Column>
            <Column field="estado" body={Status} sortable></Column>
            <Column field="asunto" header="Asunto" sortable></Column>
            <Column field="solicitante" header="Solicitante" sortable></Column>
            <Column field="canal" header="Canal" sortable></Column>
            <Column field="tipo" header="Tipo" sortable></Column>
            <Column field="cesionario" header="Cesionario" sortable></Column>
            <Column field="fecha" header="Fecha" sortable></Column>
        </DataTable>
    );
}