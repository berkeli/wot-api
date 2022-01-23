import fetch from 'node-fetch';
import { WN8ExpValue } from '../models';

export default async () => { // PULL EXPECTED VALUES FROM XVM website
  const WN8 = await fetch('https://static.modxvm.com/wn8-data-exp/json/wn8exp.json').then((res) => res.json()).then((data) => data).catch((e) => console.log(e));
  const wnExpArr = WN8.data.map(({ IDnum: _id, ...rest } : {IDnum: number}) => ({ ...rest, date: WN8.header.version, _id }));
  await WN8ExpValue.insertMany(wnExpArr).catch((e: any) => { console.log(e) })
};
