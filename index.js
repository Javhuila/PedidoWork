import React from 'react';
import axios from 'axios';

const baseUrl_pedido = process.env.REACT_APP_BASE_URL

export async function getPedidos() {

    try {
        
        const response = await axios({
            url:`${baseUrl_pedido}/api/listpedido`,
            method:'GET'
        });

        return response

    } catch (e) {
        console.log(e);
    }
}
