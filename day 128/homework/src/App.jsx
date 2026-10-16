// 1. რა განსხვავებაა props-სა და props.children-ს შორის?
// 2. შესაძლებელია თუ არა Props-ით მიღებული მონაცემების პირდაპირ შეცვლა კომპონენტში? ახსენი რატომ.
// 3. შექმენი Student კომპონენტი, რომელიც Props-ით მიიღებს name, age და grade მონაცემებს და გამოაჩენს მათ გვერდზე.
// 4. შექმენი Button კომპონენტი, რომელიც Props-ით მიიღებს text-ს. App კომპონენტში გამოაჩინე სამი ღილაკი სხვადასხვა ტექსტით.
// 5. შექმენი Card კომპონენტი, რომელიც props.children-ის გამოყენებით გამოაჩენს მის შიგნით გადაცემულ ტექსტს.

// 1 
// props არის ყველა მონაცემი, რომელსაც მშობელი კომპონენტი შვილ კომპონენტს გადასცემს.
// props.children კი სპეციალური prop-ია და შეიცავს კომპონენტის გახსნისა და დახურვის ტეგებს შორის მოთავსებულ შიგთავსს.

// 2
// არა. Props კომპონენტისთვის მხოლოდ წასაკითხია და მათ მშობელი კომპონენტი მართავს.
// მათი შეცვლა შვილ კომპონენტში არღვევს React-ის ერთმიმართულებიან მონაცემთა ნაკადს.
// ცვლილება უნდა მოხდეს მშობელში, მაგალითად state-ის განახლებით.

// 3
import Student from './Components/Student/Student'

// 4
import Button from './Components/Button/Button'

// 5
import Card from './Components/Card/Card'
function App() {
  return (
    <>
      <Student name="Gabrieli" age={11} grade={6}/>
      <Button text="Hi Click Me"/>
      <Button text="How Are You Doing"/>
      <Button text="Am Doing Great"/>
      <Card>Hi It Works !!!</Card>
    </>
  )
}

export default App
