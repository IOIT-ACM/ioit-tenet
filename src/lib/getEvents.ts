import { day1 as events24Day1, day2 as events24Day2, day3 as events24Day3 } from '@/config/data/24/events';
import { day1 as events25Day1, day2 as events25Day2, day3 as events25Day3 } from '@/config/data/25/events';

export function getEventsByYear(year: string) {
    switch (year) {
        case '24':
            return [...events24Day1, ...events24Day2, ...events24Day3];
        case '25':
            return [...events25Day1, ...events25Day2, ...events25Day3];
        default:
            return [];
    }
}
