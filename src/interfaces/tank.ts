import { Document } from 'mongoose';

// Create an interface for tank information
export default interface ITank extends Document {
  _id: number,
  tag: string,
  name: string,
  short_name: string,
  nation: string,
  is_premium: boolean,
  tier: number,
  images: {
    small_icon: string,
    contour_icon:string,
    big_icon: string
  },
  type: string,
}
