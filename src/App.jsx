import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return <main>
    <section>
      <h2>Why work with us</h2>
      <Accordion className='accordion'>
        <AccordionItem title="We got 20 years of experience" className="accordion-item">
          <article>
            <p>Cant go wrong with us</p>
            <p>We plan the best holiday trips</p>
          </article>
        </AccordionItem>
        <AccordionItem title="We work with local guides" className="accordion-item">
          <article>
            <p>We work with the best of the best</p>
            <p>We work with locals</p>
          </article>
        </AccordionItem>
      </Accordion>
    </section>
  </main>;
}

export default App;
