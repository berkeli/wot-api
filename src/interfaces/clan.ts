import { Document } from 'mongoose';

interface IClanMember {
    role_i18n:string,
    joined_at:Date,
    account_id:number
}

// Create an interface for Clan information
export default interface IClan extends Document {
    _id:number,
    color:string,
    created_at:Date,
    members_count:number,
    name:string,
    tag:string,
    emblem:string,
    description_html:string,
    motto: string,
    members: IClanMember[],
    date_updated: Date
}
