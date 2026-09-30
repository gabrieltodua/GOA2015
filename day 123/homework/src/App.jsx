// 1. რა არის კომპონენტი React-ში და რატომ ვიყენებთ მას?
// 2. რა განსხვავებაა App კომპონენტსა და ჩვეულებრივ HTML ელემენტს შორის?
// 3. შექმენი Header კომპონენტი, რომელიც დააბრუნებს:
// <h1>My Website</h1>

// 4. შექმენი Footer კომპონენტი და გამოაჩინე ის App კომპონენტში.
// 5. შექმენი ორი ცალკე კომპონენტი: Title და Button.
//    Title-მა გამოაჩინოს ტექსტი "Hello React" და Button-მა — ღილაკი "Click Me"




// 1 - react - ში ჩვენ ვყობთ საითს ფაილებად (Header , Footer , ect..) ეს არის კომპონექტები და როცა კოდს ვცვლიდ ერთ ფაილში ის კოდი აფდეითდება მარტო და არა ადრე რომ აფდეითდებოდა მთლიანი საიტი

// 2 - app - ში ვიყენებთ jsx ხოლო html - ში ვიყენბთ pure html 

// 3 - 
import Header from './Component/Header/Header'

// 4 - 
import Footer from './Component/Footer/Footer'

// 5 - 
import Title from './Component/Title/Title'
import Button from './Component/Button/Button'

function App() {
  return (
    <>

    <Header></Header>
    <Footer></Footer>
    <Title></Title>
    <Button></Button>

    </>
  )
}

export default App
