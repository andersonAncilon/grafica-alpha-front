import React from 'react';

const Card = ({ order }) => (
    <div className="card mb-2 mx-auto" style={{ width: '80%' }} >
        <div className="card-body">
            <h5 className="card-title">Pedido número: { order.id }</h5>
            <h4>Setor: { order.department }</h4>
            <h3>Conteúdo do pedido: { order.orderContent }</h3>
        </div>
    </div>
);

export default Card;