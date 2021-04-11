import { Car } from "./car";

export interface CarDetail extends Car {
   brandName: string
   colorName: string
//    carImages: CarImage[]
}
