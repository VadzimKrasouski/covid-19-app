import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ICountryDetailedData } from '../models/ICovidData';

interface IProps {
    countryData: ICountryDetailedData[]
}

export default function Charts({countryData}: IProps) {

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
                width={500}
                height={400}
                data={countryData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray='3 3'/>
                <XAxis dataKey='Date' stroke='#000'/>
                <YAxis stroke='#000'/>
                <Tooltip/>
                <Area type='monotone' dataKey='Deaths' stackId='1' stroke='#dc3545' fill='#dc3545'/>
                <Area type='monotone' dataKey='Confirmed' stackId='1' stroke='#007bff' fill='#007bff'/>
                <Area type='monotone' dataKey='Recovered' stackId='1' stroke='#28a745' fill='#28a745'/>
            </AreaChart>
        </ResponsiveContainer>
    );
}