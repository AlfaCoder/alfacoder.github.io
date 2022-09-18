'use strict';

((instance) => {
    const d = document;
    const getElem = (id) => d.getElementById(id);

    const profit = getElem('profit');
    const wkn = getElem('wkn');
    const hebel = getElem('hebel');
    const entryprice = getElem('entryprice');
    const targetprice = getElem('targetprice');

    const knockOut = {};


    /** 
     * (Profit * Entryprice) / 100 + Entryprice
    */
    knockOut.calculateTargetPrice = () => {
        const profit = Number(this.profit.value) || 0;
        const entryprice = Number(this.entryprice.value) || 0;
        const price = profit * entryprice * 0.01 + entryprice;
        this.targetprice.value = price;
    };



    instance.knockOut = knockOut;
})(this);
