import dashboard from '../Images/icon/dashboard.svg'
import balance from '../Images/icon/balance.svg'
import history from '../Images/icon/history.svg'
import statistics from '../Images/icon/statistics.svg'

let initialState = {
    navData: [
        {
            id: 1,
            svg: dashboard,
            name: "Дашборд",
            href: "/",
        },
        {
            id: 2,
            svg: balance,
            name: "Балансы",
            href: "/balance",
        },
        {
            id: 3,
            svg: history,
            name: "История операций",
            href: "/history",
        },
        {
            id: 4,
            svg: statistics,
            name: "Статистика",
            href: "/statistic",
        },
    ],
};
const navReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default navReducer;