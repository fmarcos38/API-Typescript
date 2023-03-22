export interface Car {
    name: string;
    color: string;
    fuel: "gasoline" | "nafta" | "electric";
    year: number;
    description: string;
    price: number;    
}