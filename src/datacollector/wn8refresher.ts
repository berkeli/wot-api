import fs from 'fs';
import fetch from 'node-fetch';
import { WN8ExpVal } from '../models';

export default async () => { // PULL EXPECTED VALUES FROM XVM website
  const WN8 = await fetch('https://static.modxvm.com/wn8-data-exp/json/wn8exp.json').then((res) => res.json()).then((data) => data).catch((e) => console.log(e));
  const wnExpArr = WN8.data.map(({ IDNum: _id, ...rest } : {IDNum: number}) => ({ _id, ...rest }));
  fs.writeFileSync('cache/wn8expvalues.json', JSON.stringify(wnExpArr))
  await WN8ExpVal.bulkWrite(wnExpArr.map((e) => ({ updateOne: { filter: { _id: e._id },
    update: e,
    upsert: true } })))
};
