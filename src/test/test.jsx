import React from 'react'

const useNamedBlock = (children) => {
  let childrenArray = React.Children.toArray(children);
  return (Component) => childrenArray.find(child => child.type.name === Component.name);
}

const Page = ({ children }) => {
  const findChild = useNamedBlock(children);
  return (
    <div className="page">
      <div className="renderCardHere">
        {findChild(Card)}
      </div>
    </div>
  )
}
const Card = ({children}) => children;



const Show = () => {
  return (
    <Page>
      <Card>
        asd
      </Card>
      asdf
    </Page>
  )
}


export default Show
