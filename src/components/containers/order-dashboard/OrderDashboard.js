import React, { useState } from 'react';
//import { Get } from '../../../helpers/Api';

import Card from '../../base/Card';

var json = require('../../../db.json')

function OrderDashboard() {
    const [departmentFilter, setDepartmentFilter] = useState('');

    function renderOrder() {

        return json.order.filter((order) => {
            return departmentFilter == '' //Se o filtro estiver vazio, vai retornar todos
                || order.department == departmentFilter //Se tiver algum filtro, retorna específicos
        })
            .map((order, index) => <Card key={index} order={order} />) //Renderizo os pedidos

    }

    return (
        <div className="container col-12 text-center mt-5">
            <select className="form-control form-control-lg" value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>
                <option disabled value="">Selecione um setor para filtragem</option>
                {json.departments.map((department, index) => <option key={index} value={department}>{department}</option>)}
            </select>
            <div className="jumbotron jumbotron-fluid mt-4">
                {renderOrder()}
            </div>
        </div>
    )
}

export default OrderDashboard;