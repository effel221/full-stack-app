// useful helpers for all components in this project
import fs from 'fs/promises';

// created to return result or error from json file for preventing server crush in case it missing or incorrect
export const loadData = async <ReturnType>(pathToFile: string): Promise<ReturnType> => {
    try {
        const data = await fs.readFile(pathToFile, "utf8")
        return JSON.parse(data);
    } catch (error) {
        console.log('An error has occurred ', error);
        return JSON.parse('[]');
    }
}
