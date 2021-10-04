import React, {useState, useEffect} from 'react';
import { getPedidos } from '../../../ServiciosApi/index'

export default function ListarAllPed() {

    const [pedidone, setPedidone] = useState( [] )

    useEffect(() => {
        async function listPedidone(){
            const datos = await getPedidos();
            console.log(datos);

            if(datos.status === 200){
                setPedidone(datos.data.pedidone);
            }
        }

        listPedidone();
        
    }, []);

    return (
        <div>
            {
            pedidone.map( (item)=> (
                <div>
                    <table>
                        <tr>
                            <td>ID</td>
                            <td>CODIGO DEL PEDIDO</td>
                            <td>VALOR</td>
                            <td>CANTIDAD</td>
                            <td>VALOR(UNIDAD)</td>
                            <td>CODIGO DEL PRODUCTO</td>
                        </tr>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.cod_pedido}</td>
                        <td>{item.valor}</td>
                        <td>{item.cant}</td>
                        <td>{item.valor_unitario}</td>
                        <td>{item.cod_producto}</td>
                        </tr>
                    </table>
                </div>
            ))
            }
        </div>
    )
}
