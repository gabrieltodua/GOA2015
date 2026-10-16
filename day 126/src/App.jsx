// 3) შექმენით კომპონენტი სახელად template_product, რომელმაც უნდა მიიღოს prop, უნდა შეგვეძლოს ამ 
// კომპონენტის იმდენჯერ გამოყენება რამდენჯერაც გვინდა, რა თქმა უნდა propsების გამოყენებით ყოველ ახალ 
// გადაცემულ ინფორმაციაზე უნდა შეიქმნას ცალკე ბლოკი და გამოჩნდეს საიტზე


import Templateproduct from './Components/Templateproduct'

function App() {
  return (
  <>
    <Templateproduct Title="Samsung" Price="1200" Rating="5/5" Description="Samsung Is Super Good!!! (Better Than IPhone By The Way)"/>
    <Templateproduct Title="Iphone" Price="1200" Rating="5/5" Description="Iphone Is Super Good!!!"/>
  
  </>
  )
}

export default App
