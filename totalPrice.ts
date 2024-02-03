// Напишите и типизируйте функцию,
// рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев:

type TMonths = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ITotalPrice {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: TMonths;
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
    let totalPrice = price * (1 - discount / 100);
    if (isInstallment) {
        return totalPrice / months;
    }

    return totalPrice;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);
