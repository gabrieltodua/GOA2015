// setCount(count + 1) იყენებს count-ის მნიშვნელობას მიმდინარე render-იდან. რამდენიმე დაჯგუფებული განახლებისას შეიძლება ყველა გამოძახებამ ერთი და იგივე მნიშვნელობა გამოიყენოს.
// setCount(prevCount => prevCount + 1) ფუნქციური განახლებაა: React callback-ს გადასცემს state-ის წინა (ამ განახლების მომენტისთვის მიმდინარე) მნიშვნელობას. prevCount ამ callback-ის პარამეტრია და მის მნიშვნელობას React აწვდის. ასე თითოეული განახლება წინა განახლების შედეგს ითვალისწინებს.



// 3. შექმენი Counter კომპონენტი useState-ის გამოყენებით. დაამატე ღილაკი +3, რომელზე დაჭერისას რიცხვი უნდა გაიზარდოს 3-ით. გამოიყენე prevCount და ფუნქციური განახლება (setCount(prevCount => ...)).

import Counter from './Components/Counter/Counter'

function App() {
  return <Counter/>
}

export default App
