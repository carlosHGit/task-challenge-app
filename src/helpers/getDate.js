const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic']

const getDayMonthYear = () => {

    const date    = new Date();
    const day     = date.getDate();
    const month   = months[ date.getMonth() ];
    const yearDay = `${ date.getFullYear() }`;

    return `${day}/${month}/${yearDay}`;

}

export default getDayMonthYear;