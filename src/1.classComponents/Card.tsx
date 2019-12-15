/**
 * origin: How to write correctly typed React components with TypeScript
 * url: https://blog.logrocket.com/correctly-typed-react-components-with-typescript/
 * 
*/
import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type CardProps = {
  title: string,
  paragraph: string
}

// we can use children even though we haven't defined them in our CardProps
export const Card: FunctionComponent<CardProps> = ({ title, paragraph, children }) => <aside>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
  { children }
</aside>

const el = <Card title="Welcome!" paragraph="To this example" />