// 1. რა არის Props React-ში და რისთვის ვიყენებთ მას?
// 2. როგორ გადავცეთ მონაცემები ერთი კომპონენტიდან მეორეს Props-ის გამოყენებით?
// 3. შექმენი Greeting კომპონენტი, რომელიც Props-ით მიიღებს name-ს და გამოაჩენს:
// <h1>Hello, Giorgi!</h1>
// 4. შექმენი User კომპონენტი, რომელიც Props-ით მიიღებს name-ს და age-ს. გამოაჩინე ორივე მონაცემი გვერდზე.
// 5. შექმენი Product კომპონენტი, რომელიც Props-ით მიიღებს title-ს და price-ს. App კომპონენტში გამოიძახე Product სამჯერ, სხვადასხვა პროდუქტის სახელითა და ფასით.

// 1. Props React-ში არის მონაცემები, რომლებიც მშობელი კომპონენტიდან ეძლევა შვილობილ კომპონენტს.
// Props-ის დახმარებით ვაწვდით ინფორმაციას, რათა შვილობილი კომპონენტი შეძლოს მისი ჩვენება, გადამუშავება და UI-ს აგება.

// 2. მონაცემების გადაცემა ხდება თვისებებით (attributes): <Greeting name="Giorgi" />

// 3
import Greeting from './Components/Greeting/Greeting' 

// 4
import User from './Components/User/User'

// 5
import Product from './Components/Product/Product'

function App() {
  return (
  <>
    <Greeting name = "Gabrieli"/>
    <User name="Gabrieli" age={11} />
    <Product title="Samsung" price="1300"/>
    <Product title="Iphone" price="1200"/>
    <Product title="Xiamo" price="1100"/>
  </>
    
  )
}
export default App