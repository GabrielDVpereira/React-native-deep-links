
import * as Linking from 'expo-linking'; 
export interface UrlData {
    data: any
}
interface DynamicLinkServiceAdapter {
    createLink(path:string, data?: any): string; 
    openLink(url: string): UrlData;
}

 class DinamicLinkService implements DynamicLinkServiceAdapter {
    createLink(path: string, data?: any): string {
        const link =  Linking.createURL(path, {
            queryParams: data,
        });
        console.log(link); 
        return link; 
    }

    openLink(url: string){
        const parsed = Linking.parse(url);
        return {data: parsed}
    }
}
export default new DinamicLinkService()