import { useEffect, useState } from "react";
import { DynamicLinkService, UrlData } from "../sevices";
import * as Linking from 'expo-linking';

interface DeepLinkProps {
    onDeepLinkOpened?: () => void
}
export function useDeepLink(props?: DeepLinkProps){
    const [data, setData] = useState<UrlData | null>(null); 
  
    const dynamicLinkHandler = (event: Linking.EventType) => {
      const urlData  = DynamicLinkService.openLink(event.url); 
      props?.onDeepLinkOpened?.();
      setData(urlData); 
    } 
    const getInitialUrl = async () => {
      const initalUrl = await Linking.getInitialURL(); 
      if(initalUrl){
        setData(DynamicLinkService.openLink(initalUrl));
        props?.onDeepLinkOpened?.();
      } 
    }
    
    useEffect(() => {
      console.log(DynamicLinkService.createLink('feed', {test: 'test'}));
      Linking.addEventListener('url', dynamicLinkHandler); 
      if(!data) getInitialUrl();
      return () => Linking.removeEventListener('url', dynamicLinkHandler);
    }, []); 

    
}