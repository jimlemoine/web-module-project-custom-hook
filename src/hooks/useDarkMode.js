import useLocalStorage from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [storedValue, setValue] = useLocalStorage('isDark', initialValue);
    return ([storedValue, setValue])
}