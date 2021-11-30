if (province == 'ON') {

    rate = ON_RATE;
    amount = base * ON_RATE;
    
    calculationResult = 2 * basis(amount) + extraAmount(amount) * 1.05;

} else if ((province == 'QC') || (province == 'AB')) {

    rate = (province == 'QC') ? QC_RATE : AB_RATE;

    amount = base * rate;

    calculationResult = 2 * basis(amount) + extraAmount(amount) * 1.05;
    
    if (province == 'QC') {
        points = 2;
    }

} else {

    rate = 1;
    amount = base;
    calculationResult = 2 * basis(amount) + extraAmount(amount) * 1.05;

}