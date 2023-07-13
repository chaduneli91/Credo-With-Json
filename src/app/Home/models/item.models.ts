export interface credoHome {
    help?: {
        id: number;
        img: string;
        description: string;
    }[];
      
}
export interface CredoInterface extends credoHome {
    
    productData?: {
        id: number;
        img?: string;
        routerLink?: string;
        description: string}[];
}













export interface RightContainerInterface{
    rightContainer: {
        id: number,
        description: string,
        img: string,
    }[],
    
    rightContainerSecond:{
        id: number,
        description: string,
        img?: string,
    }[]

}