import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CityBikeStation } from '../table/types';

const SingleStaionView = () => {
    const [stationDetails, setStationDetails] = useState<CityBikeStation>();
    const { stationId } = useParams();

    useEffect(() => {
        const fetchStationById = async () => {
            const response = await fetch(`/station/${stationId}`);
            const data = await response.json();

            setStationDetails(data);
        };

        void fetchStationById();
    }, [stationId]);

    return (
        <div>
            <h1>Station: {stationDetails?.station_id}</h1>

            <p>Station name: {stationDetails?.name}</p>
            <p>Address: {stationDetails?.address}</p>
            <p>Amount of departures from station: {stationDetails?.departure_count}</p>
            <p>Amount of arrivals to station: {stationDetails?.return_count}</p>
        </div>
    );

};

export default SingleStaionView;
