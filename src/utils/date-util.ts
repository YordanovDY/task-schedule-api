export function getMonthRange(year: number, month: number) {
    const start = new Date(Date.UTC(year, month - 1, 1));
    const end = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));
    return { start, end };
}

export function isValidPeriod(period: string): boolean {
    const [year, month] = period.split('-');
    const yearNum = Number(year);
    const monthNum = Number(month);

    if (Number.isNaN(yearNum) || yearNum < 1) {
        return false;
    }

    if (Number.isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
        return false;
    }

    return true;
}