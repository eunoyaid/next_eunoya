import NavbarEunoya from './navbar'



export default function Layouts({ children }) {
  return (
    <>
      <NavbarEunoya />
      <main>{children}</main>
     
    </>
  )
}