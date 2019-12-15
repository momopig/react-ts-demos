/**
 * origin: TypeScript and React: Components
 * url: https://fettblog.eu/typescript-react/components/#defaultprops
 * 
*/
import { FunctionComponent } from 'react'
type CardProps = {
    title: string,
    paragraph?: string  // the paragraph is optional
  }
  
  // No need to define the defaultProps property
  export const Card: FunctionComponent<CardProps> = ({ title, paragraph = 'Hello World' }) => 
  <aside>
    <h2>{ title }</h2>
    <p>
      { paragraph }
    </p>
  </aside>