import fs from 'fs'
import csvParser from "csv-parser";
import { CityBikeJourney, CityBikeStation } from "./types";

const parseCityBikeStationDataset = async (path: string, mapper: (_row: any) => CityBikeStation | undefined): Promise<CityBikeStation[]> => {
    return new Promise<CityBikeStation[]>((resolve, reject) => {
        let dataset: CityBikeStation[] = [];

        fs.createReadStream(path)
            .pipe(csvParser({ mapHeaders: ({ header }) => header.trim() }))
            .on('data', (row: any) => {
                const item = mapper(row);
                if (item) {
                    dataset = [...dataset, item]
                    console.log(item)
                }
            })
            .on('end', () => {
                resolve(dataset);
                console.log('CSV file successfully processed');
            }).on('error', (err) => {
                console.log(err);
                reject(err);
            })
    })
}

const parseCityBikeJourneyDataset = async (path: string, mapper: (_row: any) => CityBikeJourney | undefined): Promise<CityBikeJourney[]> => {
    return new Promise<CityBikeJourney[]>((resolve, reject) => {
        let dataset: CityBikeJourney[] = [];

        fs.createReadStream(path)
            .pipe(csvParser({ mapHeaders: ({ header }) => header.trim() }))
            .on('data', (row: any) => {
                const item = mapper(row);
                if (item) {
                    dataset = [...dataset, item]
                    console.log(item)
                }
            })
            .on('end', () => {
                resolve(dataset);
                console.log('CSV file successfully processed');
            }).on('error', (err) => {
                console.log(err);
                reject(err);
            })
    })
}

export {
    parseCityBikeStationDataset,
    parseCityBikeJourneyDataset
}